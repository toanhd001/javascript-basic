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
    var holds = 0;   // các Promise "giữ worker sống" (VD đang khởi tạo SQLite)
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
      if (mode !== 'run' || finished || pendingCount() > 0 || holds > 0) return;
      // chờ thêm một nhịp để các microtask (Promise.then) chạy xong
      realSetTimeout(function () {
        if (!finished && pendingCount() === 0 && holds === 0) {
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

    // Helpers bất đồng bộ (VD request() phải chờ SQLite khởi tạo) gọi __hold để chế độ ▶ Chạy
    // không kết thúc sớm khi chưa có setTimeout nào đang chờ.
    self.__hold = function (promise) {
      holds++;
      return Promise.resolve(promise).finally(function () {
        holds--;
        checkIdle();
      });
    };

    function finishWith(summary) {
      finished = true;
      post({ type: 'done', summary: summary });
    }

    async function runSql(data) {
      var sqlJudge = createSqlJudge(judge);
      var SQL = await self.__sqlReady;
      if (data.mode === 'sql-test') {
        var summary = await sqlJudge.runSqlTests(SQL, data.exercise, data.code,
          function () { return performance.now(); },
          function (r) { post({ type: 'test', result: r }); });
        finishWith(summary);
        return;
      }
      var db = null;
      try {
        db = sqlJudge.freshDb(SQL, data.schema || '', '');
      } catch (e) {
        post({ type: 'error', message: 'Lỗi khi nạp dữ liệu mẫu: ' + sqlJudge.errText(e) });
        finishWith(null);
        return;
      }
      try {
        var sets = db.exec(data.code);
        sets.forEach(function (set) {
          post({ type: 'log', level: 'log', text: sqlJudge.formatTable(set.columns, set.values, 100) });
        });
        if (!sets.length) {
          post({ type: 'log', level: 'info', text: 'Câu lệnh chạy xong, không trả về bảng nào (' + db.getRowsModified() + ' dòng bị thay đổi ở câu lệnh cuối).' });
        }
      } catch (e) {
        post({ type: 'error', message: 'Lỗi SQL: ' + sqlJudge.errText(e) });
      } finally {
        db.close();
      }
      finishWith(null);
    }

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
      if (mode === 'sql-run' || mode === 'sql-test') {
        runSql(data).catch(function (e) {
          post({ type: 'error', message: judge.errorText(e) });
          finishWith(null);
        });
        return;
      }
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
        Promise.resolve(self.__sqlReady).then(function () {
          return judge.runTests(env, data.exercise, function (r) {
            post({ type: 'test', result: r });
          });
        }).then(finishWith, function (e) {
          post({ type: 'error', message: judge.errorText(e) });
          finishWith(null);
        });
      }
    };
  }

  // Mã khởi tạo SQLite đặt ở đầu worker: glue của sql.js (bọc trong hàm để không lộ biến nội bộ)
  // + wasm giải mã từ base64. __sqlReady là Promise trả về đối tượng SQL của sql.js.
  function sqlHead() {
    var bundle = root.SQLJS_BUNDLE;
    if (!bundle) throw new Error('Chưa nạp SQLite (js/vendor/sqljs.bundle.js)');
    return 'var initSqlJs = (function () {\n' + bundle.glue + '\nreturn initSqlJs;\n})();\n' +
      'var __SQLJS_WASM = (function (s) { var b = atob(s), a = new Uint8Array(b.length); ' +
      'for (var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; })(' + JSON.stringify(bundle.wasm) + ');\n' +
      'self.__sqlReady = initSqlJs({ wasmBinary: __SQLJS_WASM });\n' +
      'var createSqlJudge = ' + root.createSqlJudge.toString() + ';';
  }

  function isSqlKind(ex, opts) {
    return (ex && ex.kind === 'sql') || opts.language === 'sql';
  }

  function needsSql(opts) {
    var ex = opts.exercise;
    return isSqlKind(ex, opts) || !!(ex && ex.needsSql && opts.mode !== 'check');
  }

  function buildSource(code, helpers, mode, withSql) {
    if (mode === 'check') {
      // Bọc trong một hàm KHÔNG được gọi: trình duyệt phải parse (bắt lỗi cú pháp) nhưng không chạy.
      return {
        source: 'function __syntaxCheck__() {\n' + code + '\n}\npostMessage({ type: "done" });\n',
        offset: 1
      };
    }
    // offset = số dòng đứng trước code người học; phải biết ngay từ đầu để báo đúng dòng
    // cả với lỗi xảy ra ở top-level (trước khi worker nhận được message nào).
    var head = (withSql ? sqlHead() + '\n' : '') +
      'var __judge = (' + root.createJudge.toString() + ')();\n' +
      '(' + workerBoot.toString() + ')(self, __judge, __OFFSET__);';
    if (mode === 'sql-run' || mode === 'sql-test') {
      // Bài SQL: code người học là SQL, được gửi qua message chứ không ghép vào script
      return { source: head.replace('__OFFSET__', '0') + '\n', offset: 0 };
    }
    if (helpers) head += '\n' + helpers;
    var offset = head.split('\n').length;
    head = head.replace('__OFFSET__', String(offset));
    return { source: head + '\n' + code + '\n', offset: offset };
  }

  /*
   * run({ code, mode: 'run' | 'test' | 'check', exercise, language?, schema?, timeout, onEvent })
 *   exercise.kind === 'sql' hoặc language === 'sql': code là SQL, chạy trên SQLite (sql.js)
 *   exercise.needsSql: bài JavaScript có dùng biến `db` (SQLite) trong helpers
   * onEvent nhận: {type:'log'|'error'|'test'|'done'|'timeout'|'stopped', ...}
   * Trả về { stop() }.
   */
  var sqlLoading = null;

  // Nạp file SQLite (~1MB) chỉ khi cần, bằng <script> để chạy được cả qua file://
  function ensureSql() {
    if (root.SQLJS_BUNDLE) return Promise.resolve();
    if (!sqlLoading) {
      sqlLoading = new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = 'js/vendor/sqljs.bundle.js';
        s.onload = function () { resolve(); };
        s.onerror = function () {
          sqlLoading = null;
          reject(new Error('Không tải được js/vendor/sqljs.bundle.js'));
        };
        document.head.appendChild(s);
      });
    }
    return sqlLoading;
  }

  function run(opts) {
    if (!needsSql(opts) || root.SQLJS_BUNDLE) return start(opts);
    // Phải tải SQLite trước: trả về handle ngay, khởi động worker khi tải xong
    var inner = null, cancelled = false;
    ensureSql().then(function () {
      if (!cancelled) inner = start(opts);
    }, function (e) {
      if (cancelled) return;
      opts.onEvent({ type: 'error', message: e.message });
      opts.onEvent({ type: 'done', failed: true, elapsed: 0 });
    });
    return {
      stop: function () {
        if (inner) inner.stop();
        else if (!cancelled) {
          cancelled = true;
          opts.onEvent({ type: 'stopped' });
        }
      }
    };
  }

  function start(opts) {
    var ex = opts.exercise || null;
    var mode = opts.mode || 'run';
    if (isSqlKind(ex, opts) && mode !== 'check') mode = mode === 'test' ? 'sql-test' : 'sql-run';
    var built = buildSource(opts.code, ex && mode !== 'check' ? ex.helpers : '', mode, needsSql(opts));
    var url = URL.createObjectURL(new Blob([built.source], { type: 'text/javascript' }));
    var worker = new Worker(url);
    var ended = false;
    var startedAt = performance.now();
    var timeout = opts.timeout || (mode === 'test' || mode === 'sql-test' ? 6000 : 5000);

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
        code: opts.code,
        schema: ex ? ex.schema : opts.schema,
        exercise: ex ? { fn: ex.fn, tests: ex.tests, compare: ex.compare, schema: ex.schema } : null
      });
    }

    return {
      stop: function () { finish({ type: 'stopped' }); }
    };
  }

  root.Runner = { run: run, buildSource: buildSource, ensureSql: ensureSql };
})(window);
