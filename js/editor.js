/*
 * editor.js — editor code tối giản: <textarea> trong suốt đặt chồng lên một <pre> được tô màu.
 *
 * Trade-off: một editor thật (CodeMirror/Monaco) có autocomplete, nhiều tính năng hơn, nhưng cần
 * tải thư viện ~MB từ mạng. Ở đây ưu tiên: mở index.html là chạy, không phụ thuộc gì, đọc hiểu được.
 */
(function (root) {
  var TOKEN = /(\/\/[^\n]*|\/\*[\s\S]*?(?:\*\/|$))|("(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?|`(?:\\[\s\S]|[^`\\])*`?)|(\b(?:0[xX][\da-fA-F_]+|0[bB][01_]+|\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?)n?\b)|\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|let|new|of|return|static|super|switch|throw|try|typeof|var|void|while|yield|async|await)\b|\b(true|false|null|undefined|NaN|Infinity|this)\b|\b([A-Z][\w$]*)\b|([A-Za-z_$][\w$]*)(?=\s*\()/g;
  var CLASSES = [null, 'c', 's', 'n', 'k', 'l', 't', 'f'];

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function highlight(code) {
    var out = '', last = 0, m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(code))) {
      if (m[0] === '') { TOKEN.lastIndex++; continue; }
      if (m.index > last) out += esc(code.slice(last, m.index));
      var cls = 'f';
      for (var g = 1; g < CLASSES.length; g++) if (m[g] !== undefined) { cls = CLASSES[g]; break; }
      out += '<span class="tok-' + cls + '">' + esc(m[0]) + '</span>';
      last = TOKEN.lastIndex;
    }
    return out + esc(code.slice(last));
  }

  var PAIRS = { '{': '}', '[': ']', '(': ')' };

  function createEditor(host, opts) {
    opts = opts || {};
    host.classList.add('editor');
    host.innerHTML =
      '<div class="ed-gutter" aria-hidden="true"><div class="ed-lines"></div></div>' +
      '<div class="ed-main"><pre class="ed-hl" aria-hidden="true"><code></code></pre>' +
      '<textarea class="ed-input" spellcheck="false" autocapitalize="off" autocomplete="off" ' +
      'autocorrect="off" wrap="off" aria-label="' + (opts.label || 'Code editor') + '"></textarea></div>';

    var ta = host.querySelector('textarea');
    var pre = host.querySelector('.ed-hl');
    var codeEl = pre.firstChild;
    var linesEl = host.querySelector('.ed-lines');
    var lineCount = 0;
    var errorLine = null;
    var tabEscapes = false; // nhấn Esc rồi Tab để rời editor bằng bàn phím

    function render() {
      codeEl.innerHTML = highlight(ta.value) + '\n';
      var n = ta.value.split('\n').length;
      if (n !== lineCount) {
        var html = '';
        for (var i = 1; i <= n; i++) html += '<div data-line="' + i + '">' + i + '</div>';
        linesEl.innerHTML = html;
        lineCount = n;
        markError(errorLine);
      }
      syncScroll();
    }

    function syncScroll() {
      pre.scrollTop = ta.scrollTop;
      pre.scrollLeft = ta.scrollLeft;
      linesEl.style.transform = 'translateY(' + -ta.scrollTop + 'px)';
    }

    function markError(line) {
      var prev = linesEl.querySelector('.err');
      if (prev) prev.classList.remove('err');
      errorLine = line;
      if (line) {
        var el = linesEl.querySelector('[data-line="' + line + '"]');
        if (el) el.classList.add('err');
      }
    }

    function insert(text) {
      ta.focus();
      // execCommand giữ được lịch sử Undo (Ctrl+Z); setRangeText là phương án dự phòng
      var ok = false;
      try { ok = document.execCommand('insertText', false, text); } catch (e) { ok = false; }
      if (!ok) {
        ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, 'end');
        ta.dispatchEvent(new Event('input'));
      }
    }

    function lineStartOf(pos) {
      return ta.value.lastIndexOf('\n', pos - 1) + 1;
    }

    // Thay thế toàn bộ các dòng đang được chọn bằng transform(dòng)
    function mapSelectedLines(transform) {
      var v = ta.value;
      var s = lineStartOf(ta.selectionStart);
      var endPos = ta.selectionEnd;
      if (endPos > s && v[endPos - 1] === '\n') endPos--;
      var e = v.indexOf('\n', endPos);
      if (e === -1) e = v.length;
      var block = v.slice(s, e);
      var replaced = block.split('\n').map(transform).join('\n');
      ta.setSelectionRange(s, e);
      insert(replaced);
      ta.setSelectionRange(s, s + replaced.length);
    }

    ta.addEventListener('input', function () {
      markError(null);
      render();
      if (opts.onChange) opts.onChange(ta.value);
    });
    ta.addEventListener('scroll', syncScroll);

    ta.addEventListener('keydown', function (e) {
      var mod = e.ctrlKey || e.metaKey;
      if (mod && e.key === 'Enter') {
        e.preventDefault();
        if (e.shiftKey) { if (opts.onSubmit) opts.onSubmit(); } else if (opts.onRun) opts.onRun();
        return;
      }
      if (mod && e.key === '/') {
        e.preventDefault();
        var lines = ta.value.slice(lineStartOf(ta.selectionStart), ta.selectionEnd).split('\n');
        var allCommented = lines.every(function (l) { return /^\s*\/\//.test(l) || !l.trim(); });
        mapSelectedLines(function (l) {
          if (!l.trim()) return l;
          return allCommented ? l.replace(/^(\s*)\/\/ ?/, '$1') : l.replace(/^(\s*)/, '$1// ');
        });
        return;
      }
      if (e.key === 'Escape') { tabEscapes = true; return; }
      if (e.key === 'Tab') {
        if (tabEscapes) { tabEscapes = false; return; }
        e.preventDefault();
        var multi = ta.value.slice(ta.selectionStart, ta.selectionEnd).indexOf('\n') !== -1;
        if (e.shiftKey) mapSelectedLines(function (l) { return l.replace(/^ {1,2}/, ''); });
        else if (multi) mapSelectedLines(function (l) { return '  ' + l; });
        else insert('  ');
        return;
      }
      tabEscapes = false;
      if (e.key === 'Enter' && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        var pos = ta.selectionStart;
        var lineStart = lineStartOf(pos);
        var indent = /^[ \t]*/.exec(ta.value.slice(lineStart, pos))[0];
        var before = ta.value[pos - 1], after = ta.value[ta.selectionEnd];
        if (PAIRS[before]) {
          if (after === PAIRS[before]) {
            insert('\n' + indent + '  \n' + indent);
            var caret = pos + 1 + indent.length + 2;
            ta.setSelectionRange(caret, caret);
          } else {
            insert('\n' + indent + '  ');
          }
        } else {
          insert('\n' + indent);
        }
        return;
      }
      if ((e.key === '}' || e.key === ']' || e.key === ')') && ta.selectionStart === ta.selectionEnd) {
        var p = ta.selectionStart;
        var ls = lineStartOf(p);
        var head = ta.value.slice(ls, p);
        if (/^ {2,}$/.test(head)) {
          e.preventDefault();
          ta.setSelectionRange(p - 2, p);
          insert(e.key);
        }
      }
    });

    linesEl.addEventListener('click', function (e) {
      var n = e.target && e.target.getAttribute('data-line');
      if (n) goToLine(Number(n));
    });

    function goToLine(n) {
      var lines = ta.value.split('\n');
      var pos = 0;
      for (var i = 0; i < n - 1 && i < lines.length; i++) pos += lines[i].length + 1;
      ta.focus();
      ta.setSelectionRange(pos, pos + (lines[n - 1] || '').length);
      var lh = parseFloat(getComputedStyle(ta).lineHeight) || 20;
      ta.scrollTop = Math.max(0, (n - 4) * lh);
      syncScroll();
    }

    ta.value = opts.value || '';
    ta.readOnly = !!opts.readOnly;
    render();

    return {
      getValue: function () { return ta.value; },
      setValue: function (v) {
        ta.value = v;
        markError(null);
        render();
        if (opts.onChange) opts.onChange(v);
      },
      markError: markError,
      goToLine: goToLine,
      focus: function () { ta.focus(); },
      textarea: ta
    };
  }

  root.Editor = { create: createEditor, highlight: highlight };
})(window);
