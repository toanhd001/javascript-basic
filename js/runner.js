/*
 * runner.js — chạy code của người học trong một Web Worker riêng.
 *
 * Tại sao Worker mà không eval() thẳng trên trang?
 *   - while(true){} trong eval sẽ đóng băng cả tab; Worker thì ta terminate() được sau N giây.
 *   - Code người học không đụng được vào DOM / localStorage của trang.
 *
 * Source của Worker = [phần mồi (judge + console giả + bộ đếm timer)] + [helpers của bài] + [code người học].
 * Vì code người học nằm cùng một script, mọi khai báo top-level (function, class, const...) đều là global,
 * nên bộ chấm tìm được hàm theo tên. `offset` dùng để đổi số dòng lỗi về đúng dòng trong editor.
 */
(function (root) {
  // Hàm này được .toString() và chạy BÊN TRONG worker — không được dùng biến bên ngoài.
  function workerBoot(self, judge, offset) {
    var post = self.postMessage.bind(self);
    var realSetTimeout = self.setTimeout, realClearTimeout = self.clearTimeout;
    var realSetInterval = self.setInterval, realClearInterval = self.clearInterval;
    var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    var logCount = 0, LOG_LIMIT = 1000;
    var active = {}; // các timer còn chờ
    var mode = null, finished = false;

    function errorLine(e) {
      var stack = e && e.stack ? String(e.stack) : '';
      var lines = stack.split('\n');
      for (var i = 0; i < lines.length; i++) {
        var m = /blob:[^\s)]*?:(\d+):(\d+)\)?\s*$/.exec(lines[i]);
        if (m) {
          var line = Number(m[1]) - offset;
          return line > 0 ? line : null;
        }
      }
      return null;
    }

    function emit(level, args) {
      logCount++;
      if (logCount > LOG_LIMIT) {
        if (logCount === LOG_LIMIT + 1) {
          post({ type: 'log', level: 'warn', text: '… đã ẩn bớt output (quá ' + LOG_LIMIT + ' dòng)' });
        }
        return;
      }
      var text = Array.prototype.map.call(args, function (a) { return judge.inspect(a); }).join(' ');
      post({ type: 'log', level: level, text: text });
    }

    ['log', 'info', 'warn', 'error', 'debug', 'table', 'dir'].forEach(function (level) {
      console[level] = function () {
        emit(level === 'table' || level === 'dir' || level === 'debug' ? 'log' : level, arguments);
      };
    });

    function pendingCount() {
      return Object.keys(active).length;
    }

    function checkIdle() {
      if (mode !== 'run' || finished || pendingCount() > 0) return;
      // chờ thêm một nhịp để các microtask (Promise.then) chạy xong
      realSetTimeout(function () {
        if (!finished && pendingCount() === 0) {
          finished = true;
          post({ type: 'done' });
        }
      }, 0);
    }

    self.setTimeout = function (fn, ms) {
      var args = Array.prototype.slice.call(arguments, 2);
      var id = realSetTimeout(function () {
        delete active[id];
        try {
          if (typeof fn === 'function') fn.apply(null, args);
        } finally {
          checkIdle();
        }
      }, ms);
      active[id] = true;
      return id;
    };
    self.clearTimeout = function (id) {
      delete active[id];
      realClearTimeout(id);
      checkIdle();
    };
    self.setInterval = function () {
      var id = realSetInterval.apply(self, arguments);
      active[id] = true;
      return id;
    };
    self.clearInterval = function (id) {
      delete active[id];
      realClearInterval(id);
      checkIdle();
    };

    self.addEventListener('error', function (e) {
      e.preventDefault();
      var line = e.lineno ? e.lineno - offset : null;
      post({
        type: 'error',
        message: e.message || 'Lỗi không xác định',
        line: line > 0 ? line : (e.error ? errorLine(e.error) : null)
      });
    });
    self.addEventListener('unhandledrejection', function (e) {
      e.preventDefault();
      post({
        type: 'error',
        message: 'Uncaught (in promise) ' + judge.errorText(e.reason),
        line: errorLine(e.reason)
      });
    });

    self.onmessage = function (msg) {
      var data = msg.data;
      mode = data.mode;
      if (mode === 'run') {
        checkIdle();
        return;
      }
      if (mode === 'test') {
        var env = {
          lookup: function (name) {
            return new Function('return typeof ' + name + ' !== "undefined" ? ' + name + ' : undefined;')();
          },
          runCode: function (body, result) {
            return new AsyncFunction('result', body)(result);
          },
          now: function () { return performance.now(); },
          errorLine: errorLine
        };
        judge.runTests(env, data.exercise, function (r) {
          post({ type: 'test', result: r });
        }).then(function (summary) {
          finished = true;
          post({ type: 'done', summary: summary });
        });
      }
    };
  }

  function buildSource(code, helpers, mode) {
    if (mode === 'check') {
      // Bọc trong một hàm KHÔNG được gọi: trình duyệt phải parse (bắt lỗi cú pháp) nhưng không chạy.
      return {
        source: 'function __syntaxCheck__() {\n' + code + '\n}\npostMessage({ type: "done" });\n',
        offset: 1
      };
    }
    // offset = số dòng đứng trước code người học; phải biết ngay từ đầu để báo đúng dòng
    // cả với lỗi xảy ra ở top-level (trước khi worker nhận được message nào).
    var head = 'var __judge = (' + root.createJudge.toString() + ')();\n' +
      '(' + workerBoot.toString() + ')(self, __judge, __OFFSET__);';
    if (helpers) head += '\n' + helpers;
    var offset = head.split('\n').length;
    head = head.replace('__OFFSET__', String(offset));
    return { source: head + '\n' + code + '\n', offset: offset };
  }

  /*
   * run({ code, mode: 'run' | 'test' | 'check', exercise, timeout, onEvent })
   * onEvent nhận: {type:'log'|'error'|'test'|'done'|'timeout'|'stopped', ...}
   * Trả về { stop() }.
   */
  function run(opts) {
    var mode = opts.mode || 'run';
    var ex = opts.exercise || null;
    var built = buildSource(opts.code, ex && mode !== 'check' ? ex.helpers : '', mode);
    var url = URL.createObjectURL(new Blob([built.source], { type: 'text/javascript' }));
    var worker = new Worker(url);
    var ended = false;
    var startedAt = performance.now();
    var timeout = opts.timeout || (mode === 'test' ? 6000 : 5000);

    function finish(ev) {
      if (ended) return;
      ended = true;
      clearTimeout(timer);
      worker.terminate();
      URL.revokeObjectURL(url);
      ev.elapsed = Math.round(performance.now() - startedAt);
      opts.onEvent(ev);
    }

    var timer = setTimeout(function () {
      finish({ type: 'timeout', timeout: timeout });
    }, timeout);

    worker.onmessage = function (e) {
      if (ended) return;
      var m = e.data;
      if (m.type === 'done') finish(m);
      else opts.onEvent(m);
    };
    // Chỉ lỗi cú pháp mới tới được đây (lỗi runtime đã được worker tự bắt và gửi về).
    worker.onerror = function (e) {
      e.preventDefault();
      var line = e.lineno ? e.lineno - built.offset : null;
      if (ended) return;
      opts.onEvent({ type: 'error', message: e.message || 'SyntaxError', line: line > 0 ? line : null, syntax: true });
      finish({ type: 'done', failed: true });
    };

    if (mode !== 'check') {
      worker.postMessage({
        mode: mode,
        exercise: ex ? { fn: ex.fn, tests: ex.tests, compare: ex.compare } : null
      });
    }

    return {
      stop: function () { finish({ type: 'stopped' }); }
    };
  }

  root.Runner = { run: run, buildSource: buildSource };
})(window);
