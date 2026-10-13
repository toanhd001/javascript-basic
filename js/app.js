/*
 * app.js — giao diện: router theo hash (#/lesson/<id>), sidebar, trang bài học, workspace bài tập, playground.
 * Tiến độ được lưu trong localStorage của trình duyệt (chỉ máy này, không đồng bộ).
 */
(function () {
  'use strict';

  var MODULES = window.CURRICULUM || [];
  var STORE_KEY = 'jslearn:v1';
  var DIFFICULTY = { easy: 'Dễ', medium: 'Trung bình', hard: 'Khó' };
  var PLAYGROUND_DEFAULT = [
    '// Playground: viết gì chạy nấy. Ctrl+Enter (Cmd+Enter trên Mac) để chạy.',
    'const nums = [5, 3, 8, 1];',
    'const sorted = [...nums].sort((a, b) => a - b);',
    'console.log("Mảng gốc:", nums);',
    'console.log("Đã sắp xếp:", sorted);',
    ''
  ].join('\n');

  // ---------- lưu trữ ----------
  var store = loadStore();

  function loadStore() {
    var empty = { code: {}, passed: {}, read: {}, hints: {}, last: '', playground: null, theme: null };
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return empty;
      var data = JSON.parse(raw);
      Object.keys(empty).forEach(function (k) { if (data[k] === undefined) data[k] = empty[k]; });
      return data;
    } catch (e) {
      return empty;
    }
  }

  var saveTimer = null;
  function save(now) {
    clearTimeout(saveTimer);
    var write = function () {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* hết dung lượng / chế độ ẩn danh */ }
    };
    if (now) write(); else saveTimer = setTimeout(write, 300);
  }

  // ---------- chỉ mục ----------
  var lessons = [];
  var lessonById = {};
  MODULES.forEach(function (m) {
    m.lessons.forEach(function (l) {
      l.module = m;
      l.index = lessons.length;
      lessons.push(l);
      lessonById[l.id] = l;
    });
  });

  function lessonStats(l) {
    var total = l.exercises.length;
    var done = l.exercises.filter(function (ex) { return store.passed[ex.id]; }).length;
    var complete = total ? done === total : !!store.read[l.id];
    return { total: total, done: done, complete: complete };
  }

  function moduleStats(m) {
    var done = 0;
    m.lessons.forEach(function (l) { if (lessonStats(l).complete) done++; });
    return { done: done, total: m.lessons.length };
  }

  // ---------- tiện ích DOM ----------
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'text') el.textContent = v;
        else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    (children || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return el;
  }

  function highlightBlocks(ctx) {
    $all('pre code.language-js', ctx).forEach(function (code) {
      if (code.dataset.hl) return;
      code.innerHTML = window.Editor.highlight(code.textContent);
      code.dataset.hl = '1';
    });
  }

  // ---------- console / output ----------
  function createConsole(host, editor) {
    host.classList.add('console');
    host.innerHTML = '';
    var empty = h('div', { class: 'console-empty', text: 'Output sẽ hiện ở đây.' });
    host.appendChild(empty);

    function add(kind, text, line) {
      if (empty.parentNode) empty.remove();
      var row = h('div', { class: 'console-row ' + kind });
      row.appendChild(h('span', { class: 'console-text', text: text }));
      if (line && editor) {
        row.appendChild(h('button', {
          class: 'line-link',
          type: 'button',
          text: 'dòng ' + line,
          onclick: function () { editor.goToLine(line); }
        }));
      }
      host.appendChild(row);
      host.scrollTop = host.scrollHeight;
      return row;
    }

    return {
      clear: function () { host.innerHTML = ''; host.appendChild(empty); },
      log: function (level, text) { return add('log-' + level, text); },
      error: function (text, line) {
        if (editor && line) editor.markError(line);
        return add('log-error', text, line);
      },
      info: function (text) { return add('log-meta', text); },
      node: function (el) {
        if (empty.parentNode) empty.remove();
        host.appendChild(el);
        host.scrollTop = host.scrollHeight;
      }
    };
  }

  function explainError(message) {
    var tips = [
      [/is not defined/, 'Biến/hàm chưa được khai báo (hoặc gõ sai tên — JS phân biệt hoa thường).'],
      [/Cannot read propert(y|ies) of (undefined|null)/, 'Bạn đang truy cập thuộc tính của undefined/null. Kiểm tra biến có giá trị chưa, chỉ số mảng có vượt quá length không.'],
      [/is not a function/, 'Bạn đang gọi một thứ không phải hàm. Kiểm tra tên phương thức (VD: `push` chứ không phải `add` với mảng).'],
      [/Assignment to constant variable/, 'Không thể gán lại biến `const`. Dùng `let` nếu cần thay đổi giá trị.'],
      [/Maximum call stack size exceeded/, 'Đệ quy không dừng: kiểm tra điều kiện dừng (base case).'],
      [/has already been declared/, 'Một tên bị khai báo hai lần bằng let/const/class trong cùng phạm vi.'],
      [/Unexpected end of input/, 'Thiếu dấu đóng `}` `)` hoặc `]` ở đâu đó.'],
      [/Unexpected token/, 'Cú pháp sai gần vị trí này: thiếu/thừa dấu ngoặc, dấu phẩy, hoặc viết sai từ khoá.'],
      [/Invalid array length/, 'Độ dài mảng không hợp lệ (âm hoặc quá lớn).'],
      [/Maximum call stack|too much recursion/, 'Đệ quy quá sâu.'],
      [/Invalid or unexpected token/, 'Có ký tự lạ hoặc chuỗi chưa được đóng nháy.']
    ];
    for (var i = 0; i < tips.length; i++) if (tips[i][0].test(message)) return tips[i][1];
    return '';
  }

  // ---------- chạy code ----------
  var currentRun = null;

  function stopCurrent() {
    if (currentRun) { currentRun.stop(); currentRun = null; }
  }

  function runInConsole(code, out, opts) {
    opts = opts || {};
    stopCurrent();
    out.clear();
    if (opts.onStart) opts.onStart();
    currentRun = window.Runner.run({
      code: code,
      mode: 'run',
      exercise: opts.exercise,
      onEvent: function (ev) {
        if (ev.type === 'log') out.log(ev.level, ev.text);
        else if (ev.type === 'error') reportError(out, ev);
        else if (ev.type === 'timeout') {
          out.error('⏱ Dừng sau ' + ev.timeout / 1000 + 's — có vòng lặp vô hạn, hoặc setInterval chưa được clearInterval?');
        } else if (ev.type === 'done') {
          out.info('✔ Chạy xong (' + ev.elapsed + ' ms)');
        }
        if (ev.type === 'done' || ev.type === 'timeout' || ev.type === 'stopped') {
          currentRun = null;
          if (opts.onEnd) opts.onEnd();
        }
      }
    });
  }

  function reportError(out, ev) {
    var row = out.error((ev.syntax ? '❌ Lỗi cú pháp: ' : '❌ ') + ev.message.replace(/^Uncaught /, ''), ev.line);
    var tip = explainError(ev.message);
    if (tip) row.appendChild(h('div', { class: 'console-tip', text: '💡 ' + tip }));
  }

  function checkSyntax(code, out, editor) {
    stopCurrent();
    out.clear();
    window.Runner.run({
      code: code,
      mode: 'check',
      timeout: 3000,
      onEvent: function (ev) {
        if (ev.type === 'error') reportError(out, ev);
        if (ev.type === 'done' && !ev.failed) out.info('✔ Cú pháp hợp lệ (code chưa được chạy).');
        if (ev.type === 'done' || ev.type === 'timeout') {
          var hints = window.Lint.lint(code);
          if (hints.length) out.info('Gợi ý về cách viết (có thể không phải lỗi):');
          hints.forEach(function (x) {
            var row = out.log('warn', '⚠ ' + x.msg.replace(/`/g, ''));
            row.appendChild(h('button', {
              class: 'line-link', type: 'button', text: 'dòng ' + x.line,
              onclick: function () { editor.goToLine(x.line); }
            }));
          });
          if (!hints.length && !ev.failed) out.info('Không thấy bẫy quen thuộc nào. 👍');
        }
      }
    });
  }

  // ---------- sidebar ----------
  function renderSidebar(activeId) {
    var nav = $('#nav');
    nav.innerHTML = '';
    nav.appendChild(h('a', { href: '#/', class: 'nav-link' + (!activeId ? ' active' : ''), text: '🏠 Trang chủ & lộ trình' }));
    nav.appendChild(h('a', { href: '#/playground', class: 'nav-link' + (activeId === 'playground' ? ' active' : ''), text: '🧪 Playground' }));
    MODULES.forEach(function (m) {
      var st = moduleStats(m);
      var group = h('details', { class: 'nav-module', open: true });
      group.appendChild(h('summary', null, [
        h('span', { class: 'nav-module-title', text: m.title }),
        h('span', { class: 'nav-count', text: st.done + '/' + st.total })
      ]));
      var list = h('ol', { class: 'nav-lessons' });
      m.lessons.forEach(function (l) {
        var ls = lessonStats(l);
        var mark = ls.complete ? '✓' : ls.total ? ls.done + '/' + ls.total : '';
        list.appendChild(h('li', null, [
          h('a', {
            href: '#/lesson/' + l.id,
            class: 'nav-link' + (activeId === l.id ? ' active' : '') + (ls.complete ? ' complete' : '')
          }, [h('span', { text: l.title }), mark ? h('span', { class: 'nav-mark', text: mark }) : null])
        ]));
      });
      group.appendChild(list);
      nav.appendChild(group);
    });
    var active = $('.nav-link.active', nav);
    if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest' });
  }

  // ---------- trang chủ ----------
  function showHome() {
    var main = $('#main');
    main.innerHTML = '';
    var totalEx = 0, doneEx = 0;
    lessons.forEach(function (l) {
      l.exercises.forEach(function (ex) { totalEx++; if (store.passed[ex.id]) doneEx++; });
    });
    var next = lessons.filter(function (l) { return !lessonStats(l).complete; })[0] || lessons[0];
    var lastLesson = lessonById[store.last];
    var pct = totalEx ? Math.round(doneEx * 100 / totalEx) : 0;

    var hero = h('section', { class: 'hero' }, [
      h('h1', { text: 'Học JavaScript từ số 0 → coding test → phỏng vấn' }),
      h('p', { class: 'lead', text: 'Đọc lý thuyết ngắn, chạy ví dụ ngay trên trang, rồi tự viết code và chấm bằng test — giống LeetCode/HackerRank nhưng có lộ trình từ cơ bản.' }),
      h('div', { class: 'progress-wrap' }, [
        h('div', { class: 'progress-bar' }, [h('div', { class: 'progress-fill', style: 'width:' + pct + '%' })]),
        h('span', { class: 'progress-text', text: doneEx + '/' + totalEx + ' bài tập đã giải (' + pct + '%)' })
      ]),
      h('div', { class: 'hero-actions' }, [
        lastLesson ? h('a', { class: 'btn primary', href: '#/lesson/' + lastLesson.id, text: '▶ Học tiếp: ' + lastLesson.title }) : null,
        next && next !== lastLesson ? h('a', { class: 'btn' + (lastLesson ? '' : ' primary'), href: '#/lesson/' + next.id, text: (lastLesson ? 'Bài chưa xong đầu tiên: ' : '▶ Bắt đầu: ') + next.title }) : null,
        h('a', { class: 'btn', href: '#/playground', text: '🧪 Playground' })
      ])
    ]);
    main.appendChild(hero);

    var grid = h('section', { class: 'module-grid' });
    MODULES.forEach(function (m, i) {
      var st = moduleStats(m);
      var card = h('article', { class: 'module-card' }, [
        h('div', { class: 'module-step', text: 'Chặng ' + i }),
        h('h2', { text: m.title }),
        h('div', { class: 'module-desc', html: m.desc }),
        h('div', { class: 'progress-bar small' }, [h('div', { class: 'progress-fill', style: 'width:' + (st.total ? st.done * 100 / st.total : 0) + '%' })]),
        h('ol', { class: 'module-lessons' }, m.lessons.map(function (l) {
          var ls = lessonStats(l);
          return h('li', { class: ls.complete ? 'complete' : '' }, [
            h('a', { href: '#/lesson/' + l.id, text: l.title }),
            ls.total ? h('span', { class: 'muted', text: ' · ' + ls.done + '/' + ls.total }) : null
          ]);
        }))
      ]);
      grid.appendChild(card);
    });
    main.appendChild(grid);

    main.appendChild(h('section', { class: 'prose tips' }, [
      h('h2', { text: 'Cách học để thực sự nhớ' }),
      h('ol', null, [
        h('li', { html: '<strong>Gõ lại ví dụ</strong> thay vì chỉ đọc. Bấm ▶ trên mỗi ví dụ, sửa một chút, đoán output trước rồi mới chạy.' }),
        h('li', { html: '<strong>Tự làm trước khi xem gợi ý.</strong> Bí 15–20 phút mới mở gợi ý 1, rồi gợi ý 2… Lời giải là phương án cuối.' }),
        h('li', { html: '<strong>Giải xong thì trả lời câu "Tại sao?"</strong> hiện ra sau mỗi bài — phỏng vấn viên hỏi chính những câu đó.' }),
        h('li', { html: '<strong>Ôn lại sau 1 ngày, 1 tuần</strong>: nút ↺ Reset ở mỗi bài để làm lại từ đầu.' })
      ]),
      h('h3', { text: 'Phím tắt trong editor' }),
      h('ul', null, [
        h('li', { html: '<kbd>Ctrl</kbd>+<kbd>Enter</kbd>: chạy code · <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd>: chạy test' }),
        h('li', { html: '<kbd>Tab</kbd> / <kbd>Shift</kbd>+<kbd>Tab</kbd>: thụt/lùi dòng · <kbd>Ctrl</kbd>+<kbd>/</kbd>: comment' }),
        h('li', { html: '<kbd>Esc</kbd> rồi <kbd>Tab</kbd>: thoát khỏi editor bằng bàn phím' })
      ]),
      h('p', { class: 'muted' }, [
        'Tiến độ lưu trong trình duyệt này. ',
        h('button', {
          class: 'link-btn', type: 'button', text: 'Xoá toàn bộ tiến độ',
          onclick: function () {
            if (!confirm('Xoá toàn bộ code đã viết và tiến độ? Không hoàn tác được.')) return;
            var theme = store.theme;
            store = { code: {}, passed: {}, read: {}, hints: {}, last: '', playground: null, theme: theme };
            save(true);
            route();
          }
        })
      ])
    ]));
    renderSidebar(null);
    document.title = 'JS Learn — Lộ trình';
  }

  // ---------- trang bài học ----------
  function showLesson(lesson, exId) {
    var main = $('#main');
    main.innerHTML = '';
    store.last = lesson.id;
    save();

    var prev = lessons[lesson.index - 1], next = lessons[lesson.index + 1];
    var hasEx = lesson.exercises.length > 0;
    var layout = h('div', { class: 'lesson-layout' + (hasEx ? ' with-ex' : '') });

    var article = h('article', { class: 'lesson' }, [
      h('div', { class: 'crumbs', text: lesson.module.title + ' · Bài ' + (lesson.module.lessons.indexOf(lesson) + 1) + '/' + lesson.module.lessons.length }),
      h('h1', { text: lesson.title }),
      h('div', { class: 'prose', html: lesson.html })
    ]);

    var foot = h('div', { class: 'lesson-foot' }, [
      prev ? h('a', { class: 'btn', href: '#/lesson/' + prev.id, text: '← ' + prev.title }) : h('span'),
      !hasEx ? h('button', {
        class: 'btn' + (store.read[lesson.id] ? '' : ' primary'), type: 'button',
        text: store.read[lesson.id] ? '✓ Đã đọc' : 'Đánh dấu đã đọc',
        onclick: function (e) {
          store.read[lesson.id] = !store.read[lesson.id];
          save();
          e.target.textContent = store.read[lesson.id] ? '✓ Đã đọc' : 'Đánh dấu đã đọc';
          e.target.classList.toggle('primary', !store.read[lesson.id]);
          renderSidebar(lesson.id);
        }
      }) : null,
      next ? h('a', { class: 'btn', href: '#/lesson/' + next.id, text: next.title + ' →' }) : h('span')
    ]);
    article.appendChild(foot);
    layout.appendChild(article);

    enhanceSnippets(article);

    if (hasEx) {
      var ws = h('section', { class: 'workspace', 'aria-label': 'Bài tập' });
      layout.appendChild(ws);
      var initial = lesson.exercises.filter(function (ex) { return ex.id === exId; })[0] ||
        lesson.exercises.filter(function (ex) { return !store.passed[ex.id]; })[0] ||
        lesson.exercises[0];
      renderWorkspace(ws, lesson, initial);
    }

    main.appendChild(layout);
    main.scrollTop = 0;
    window.scrollTo(0, 0);
    renderSidebar(lesson.id);
    document.title = lesson.title + ' — JS Learn';
  }

  // Ví dụ trong bài có nút ▶ chạy ngay và nút mở trong Playground
  function enhanceSnippets(ctx) {
    highlightBlocks(ctx);
    $all('pre[data-run]', ctx).forEach(function (pre) {
      var code = pre.textContent;
      var outHost = h('div', { class: 'snippet-out', hidden: true });
      var out = createConsole(outHost, null);
      var bar = h('div', { class: 'snippet-bar' }, [
        h('button', {
          class: 'btn tiny primary', type: 'button', text: '▶ Chạy',
          onclick: function () { outHost.hidden = false; runInConsole(code, out); }
        }),
        h('button', {
          class: 'btn tiny', type: 'button', text: '✎ Sửa trong Playground',
          onclick: function () {
            store.playground = code;
            save(true);
            location.hash = '#/playground';
          }
        })
      ]);
      pre.parentNode.insertBefore(bar, pre.nextSibling);
      bar.parentNode.insertBefore(outHost, bar.nextSibling);
    });
  }

  function exampleNodes(ex) {
    var examples = ex.tests.filter(function (t) { return !t.hidden && !t.gen; }).slice(0, 3);
    if (!examples.length) return null;
    var judge = window.createJudge();
    return h('div', { class: 'examples' }, [h('div', { class: 'examples-title', text: 'Ví dụ' })].concat(examples.map(function (t) {
      var call = t.code
        ? (t.label || t.code)
        : ex.fn + '(' + t.args.map(function (a) { return judge.inspect(a, { nested: true, maxLen: 200 }); }).join(', ') + ')';
      return h('pre', { class: 'example' }, [
        h('code', { text: call + '\n→ ' + judge.inspect(t.expected, { nested: true, maxLen: 200 }) })
      ]);
    })));
  }

  function renderWorkspace(ws, lesson, ex) {
    stopCurrent();
    ws.innerHTML = '';
    if (location.hash !== '#/lesson/' + lesson.id + '/' + ex.id) {
      history.replaceState(null, '', '#/lesson/' + lesson.id + '/' + ex.id);
    }

    var tabs = h('div', { class: 'ex-tabs', role: 'tablist' }, lesson.exercises.map(function (e, i) {
      return h('button', {
        class: 'ex-tab' + (e === ex ? ' active' : '') + (store.passed[e.id] ? ' passed' : ''),
        type: 'button', role: 'tab', 'aria-selected': e === ex ? 'true' : 'false',
        title: e.title,
        onclick: function () { renderWorkspace(ws, lesson, e); }
      }, [(store.passed[e.id] ? '✓ ' : (i + 1) + '. ') + e.title]);
    }));
    ws.appendChild(tabs);

    var prompt = h('div', { class: 'ex-prompt' }, [
      h('div', { class: 'ex-head' }, [
        h('h2', { text: ex.title }),
        h('span', { class: 'badge diff-' + ex.difficulty, text: DIFFICULTY[ex.difficulty] || ex.difficulty })
      ]),
      h('div', { class: 'prose', html: ex.prompt }),
      exampleNodes(ex),
      ex.helpers ? h('details', { class: 'helpers' }, [
        h('summary', { text: 'Code có sẵn (không cần viết lại)' }),
        h('pre', null, [h('code', { class: 'language-js', text: ex.helpers })])
      ]) : null
    ]);
    ws.appendChild(prompt);
    highlightBlocks(prompt);

    var edHost = h('div', { class: 'ex-editor' });
    ws.appendChild(edHost);
    var saved = store.code[ex.id];
    var editor = window.Editor.create(edHost, {
      value: saved !== undefined ? saved : ex.starter,
      label: 'Code cho bài ' + ex.title,
      onChange: function (v) { store.code[ex.id] = v; save(); },
      onRun: function () { doRun(); },
      onSubmit: function () { doTest(); }
    });

    var runBtn, testBtn, stopBtn;
    var hintBox = h('div', { class: 'hint-box' });
    var hintsShown = store.hints[ex.id] || 0;

    function showHints() {
      hintBox.innerHTML = '';
      ex.hints.slice(0, hintsShown).forEach(function (html, i) {
        hintBox.appendChild(h('div', { class: 'hint' }, [
          h('strong', { text: 'Gợi ý ' + (i + 1) + ': ' }), h('span', { html: html })
        ]));
      });
      highlightBlocks(hintBox);
      if (hintBtn) {
        hintBtn.textContent = '💡 Gợi ý (' + hintsShown + '/' + ex.hints.length + ')';
        hintBtn.disabled = hintsShown >= ex.hints.length;
      }
    }

    function setBusy(busy) {
      runBtn.disabled = busy;
      testBtn.disabled = busy;
      stopBtn.hidden = !busy;
    }

    runBtn = h('button', { class: 'btn', type: 'button', title: 'Ctrl+Enter', text: '▶ Chạy', onclick: function () { doRun(); } });
    testBtn = h('button', { class: 'btn primary', type: 'button', title: 'Ctrl+Shift+Enter', text: '✓ Chạy test', onclick: function () { doTest(); } });
    stopBtn = h('button', { class: 'btn danger', type: 'button', hidden: true, text: '■ Dừng', onclick: function () { stopCurrent(); } });
    var hintBtn = ex.hints.length ? h('button', {
      class: 'btn', type: 'button',
      onclick: function () {
        hintsShown = Math.min(ex.hints.length, hintsShown + 1);
        store.hints[ex.id] = hintsShown;
        save();
        showHints();
      }
    }) : null;

    var toolbar = h('div', { class: 'toolbar' }, [
      testBtn, runBtn, stopBtn,
      h('button', { class: 'btn', type: 'button', text: '🔍 Kiểm tra cú pháp', onclick: function () { checkSyntax(editor.getValue(), out, editor); } }),
      hintBtn,
      h('button', {
        class: 'btn', type: 'button', text: '📖 Lời giải',
        onclick: function () {
          if (!store.passed[ex.id] && !confirm('Xem lời giải khi chưa giải xong sẽ làm bạn nhớ kém hơn.\nĐã thử hết gợi ý chưa? Vẫn xem?')) return;
          showSolution();
        }
      }),
      h('button', {
        class: 'btn ghost', type: 'button', text: '↺ Reset',
        onclick: function () {
          if (!confirm('Đưa code về trạng thái ban đầu?')) return;
          editor.setValue(ex.starter);
          delete store.code[ex.id];
          save();
        }
      })
    ]);
    ws.appendChild(toolbar);
    ws.appendChild(hintBox);
    showHints();

    var solutionBox = h('div', { class: 'solution-box', hidden: true });
    ws.appendChild(solutionBox);

    function showSolution() {
      solutionBox.hidden = false;
      solutionBox.innerHTML = '';
      solutionBox.appendChild(h('div', { class: 'solution-head' }, [
        h('strong', { text: 'Lời giải tham khảo' }),
        h('button', {
          class: 'btn tiny', type: 'button', text: 'Chép vào editor',
          onclick: function () {
            if (confirm('Thay code hiện tại bằng lời giải?')) editor.setValue(ex.solution);
          }
        })
      ]));
      solutionBox.appendChild(h('pre', null, [h('code', { class: 'language-js', text: ex.solution })]));
      if (ex.explain) solutionBox.appendChild(h('div', { class: 'prose', html: ex.explain }));
      highlightBlocks(solutionBox);
      solutionBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    var outHost = h('div', { class: 'ex-output' });
    ws.appendChild(outHost);
    var out = createConsole(outHost, editor);

    function doRun() {
      runInConsole(editor.getValue(), out, {
        exercise: ex,
        onStart: function () { setBusy(true); },
        onEnd: function () { setBusy(false); }
      });
    }

    function doTest() {
      stopCurrent();
      out.clear();
      setBusy(true);
      var results = h('div', { class: 'results' });
      var summary = h('div', { class: 'results-summary running', text: 'Đang chạy test…' });
      out.node(summary);
      out.node(results);
      var passed = 0, count = 0, hadError = false;

      currentRun = window.Runner.run({
        code: editor.getValue(),
        mode: 'test',
        exercise: ex,
        timeout: ex.timeout,
        onEvent: function (ev) {
          if (ev.type === 'log') out.log(ev.level, ev.text);
          else if (ev.type === 'error') { hadError = true; reportError(out, ev); }
          else if (ev.type === 'test') {
            count++;
            if (ev.result.pass) passed++;
            results.appendChild(resultRow(ev.result, editor));
          }
          if (ev.type === 'done' || ev.type === 'timeout' || ev.type === 'stopped') {
            currentRun = null;
            setBusy(false);
            var total = ex.tests.length;
            summary.classList.remove('running');
            if (ev.type === 'timeout') {
              summary.className = 'results-summary fail';
              summary.textContent = '⏱ Quá thời gian ' + ev.timeout / 1000 + 's ở test #' + (count + 1) +
                ' — vòng lặp vô hạn, hoặc thuật toán quá chậm với input lớn (xem lại độ phức tạp).';
            } else if (ev.type === 'stopped') {
              summary.className = 'results-summary';
              summary.textContent = 'Đã dừng.';
            } else if (ev.failed) {
              summary.className = 'results-summary fail';
              summary.textContent = 'Code có lỗi cú pháp nên chưa chạy được test nào.';
            } else if (passed === total) {
              summary.className = 'results-summary pass';
              summary.textContent = '🎉 Đạt ' + passed + '/' + total + ' test (' + ev.elapsed + ' ms)';
              onSolved();
            } else {
              summary.className = 'results-summary fail';
              summary.textContent = 'Đạt ' + passed + '/' + total + ' test' + (hadError ? ' — có lỗi khi chạy, xem bên dưới.' : '');
            }
          }
        }
      });
    }

    function onSolved() {
      var first = !store.passed[ex.id];
      store.passed[ex.id] = true;
      save(true);
      var box = h('div', { class: 'solved' }, [
        h('div', { class: 'solved-title', text: first ? '✅ Giải xong! Trước khi qua bài khác:' : '✅ Vẫn đạt. Ôn lại câu hỏi:' })
      ]);
      if (ex.followUp) {
        box.appendChild(h('div', { class: 'prose followup' }, [
          h('div', { html: '<strong>🤔 Tại sao?</strong> ' }),
          h('div', { html: ex.followUp })
        ]));
      }
      box.appendChild(h('button', { class: 'btn tiny', type: 'button', text: '📖 So sánh với lời giải mẫu', onclick: showSolution }));
      var nextEx = lesson.exercises[lesson.exercises.indexOf(ex) + 1];
      if (nextEx) {
        box.appendChild(h('button', {
          class: 'btn tiny primary', type: 'button', text: 'Bài tiếp: ' + nextEx.title + ' →',
          onclick: function () { renderWorkspace(ws, lesson, nextEx); }
        }));
      } else if (lessons[lesson.index + 1]) {
        box.appendChild(h('a', { class: 'btn tiny primary', href: '#/lesson/' + lessons[lesson.index + 1].id, text: 'Bài học tiếp theo →' }));
      }
      out.node(box);
      $all('.ex-tab', ws).forEach(function (tab, i) {
        if (lesson.exercises[i] === ex) { tab.classList.add('passed'); tab.textContent = '✓ ' + ex.title; }
      });
      renderSidebar(lesson.id);
    }
  }

  function resultRow(r, editor) {
    var row = h('div', { class: 'result ' + (r.pass ? 'pass' : 'fail') });
    var title = (r.pass ? '✓' : '✗') + ' Test ' + (r.index + 1) + (r.hidden ? ' (ẩn)' : '') + (r.ms !== undefined ? ' · ' + r.ms + ' ms' : '');
    row.appendChild(h('div', { class: 'result-title', text: title }));
    var dl = h('dl');
    function item(k, v, cls) {
      dl.appendChild(h('dt', { text: k }));
      dl.appendChild(h('dd', { class: cls || '', text: v }));
    }
    if (r.input) item(r.hidden ? 'Mô tả' : 'Input', r.input);
    if (!r.pass || !r.hidden) item('Mong đợi', r.expected);
    if (r.error) item('Lỗi', r.error, 'err');
    else if (!r.pass || !r.hidden) item('Bạn trả về', r.got, r.pass ? '' : 'err');
    row.appendChild(dl);
    if (r.error) {
      var tip = explainError(r.error);
      if (tip) row.appendChild(h('div', { class: 'console-tip', text: '💡 ' + tip }));
      if (r.line) {
        editor.markError(r.line);
        row.appendChild(h('button', { class: 'line-link', type: 'button', text: 'tới dòng ' + r.line, onclick: function () { editor.goToLine(r.line); } }));
      }
    }
    return row;
  }

  // ---------- playground ----------
  function showPlayground() {
    var main = $('#main');
    main.innerHTML = '';
    var wrap = h('section', { class: 'playground' }, [
      h('div', { class: 'pg-head' }, [
        h('h1', { text: '🧪 Playground' }),
        h('p', { class: 'muted', text: 'Thử bất cứ thứ gì. Code được tự lưu trong trình duyệt.' })
      ])
    ]);
    var edHost = h('div', { class: 'pg-editor' });
    var outHost = h('div', { class: 'pg-output' });
    var editor = window.Editor.create(edHost, {
      value: store.playground || PLAYGROUND_DEFAULT,
      label: 'Playground',
      onChange: function (v) { store.playground = v; save(); },
      onRun: function () { run(); }
    });
    var out = createConsole(outHost, editor);
    var runBtn = h('button', { class: 'btn primary', type: 'button', title: 'Ctrl+Enter', text: '▶ Chạy', onclick: function () { run(); } });
    var stopBtn = h('button', { class: 'btn danger', type: 'button', hidden: true, text: '■ Dừng', onclick: function () { stopCurrent(); } });
    function run() {
      runInConsole(editor.getValue(), out, {
        onStart: function () { runBtn.disabled = true; stopBtn.hidden = false; },
        onEnd: function () { runBtn.disabled = false; stopBtn.hidden = true; }
      });
    }
    wrap.appendChild(h('div', { class: 'toolbar' }, [
      runBtn, stopBtn,
      h('button', { class: 'btn', type: 'button', text: '🔍 Kiểm tra cú pháp', onclick: function () { checkSyntax(editor.getValue(), out, editor); } }),
      h('button', { class: 'btn ghost', type: 'button', text: 'Xoá output', onclick: function () { out.clear(); } }),
      h('button', {
        class: 'btn ghost', type: 'button', text: '↺ Code mẫu',
        onclick: function () { if (confirm('Thay code hiện tại bằng code mẫu?')) editor.setValue(PLAYGROUND_DEFAULT); }
      })
    ]));
    wrap.appendChild(h('div', { class: 'pg-grid' }, [edHost, outHost]));
    main.appendChild(wrap);
    renderSidebar('playground');
    document.title = 'Playground — JS Learn';
    editor.focus();
  }

  // ---------- router ----------
  function route() {
    stopCurrent();
    document.body.classList.remove('nav-open');
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    if (parts[0] === 'lesson' && lessonById[parts[1]]) showLesson(lessonById[parts[1]], parts[2]);
    else if (parts[0] === 'playground') showPlayground();
    else showHome();
  }

  // ---------- theme ----------
  function applyTheme() {
    if (store.theme) document.documentElement.setAttribute('data-theme', store.theme);
    else document.documentElement.removeAttribute('data-theme');
  }

  function init() {
    applyTheme();
    $('#theme-toggle').addEventListener('click', function () {
      var dark = store.theme ? store.theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      store.theme = dark ? 'light' : 'dark';
      save(true);
      applyTheme();
    });
    $('#nav-toggle').addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
    $('#nav-scrim').addEventListener('click', function () {
      document.body.classList.remove('nav-open');
    });
    window.addEventListener('hashchange', function () {
      // Đổi tab bài tập dùng replaceState nên không kích hoạt hashchange
      route();
    });
    window.addEventListener('beforeunload', function () { save(true); });
    if (!MODULES.length) {
      $('#main').innerHTML = '<p class="prose">Không tải được nội dung. Chạy <code>npm run build</code> để tạo js/content.generated.js.</p>';
      return;
    }
    route();
  }

  init();
})();
