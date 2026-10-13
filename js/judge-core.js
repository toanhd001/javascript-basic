/*
 * judge-core.js — phần "chấm bài" dùng chung cho:
 *   - trình duyệt: được .toString() rồi nhúng nguyên vào Web Worker (xem runner.js)
 *   - Node: scripts/check.js dùng để kiểm tra mọi lời giải mẫu đều qua test
 *
 * Vì bị .toString(), createJudge() phải tự chứa toàn bộ, không tham chiếu biến bên ngoài.
 */
(function (root) {
  function createJudge() {
    var toStr = Object.prototype.toString;

    function tag(v) {
      return toStr.call(v).slice(8, -1);
    }

    function isIdent(k) {
      return /^[A-Za-z_$][\w$]*$/.test(k);
    }

    // In giá trị gần giống console.log của Node: [ 1, 2 ], { a: 1 }, Map(1) { 'x' => 1 }
    function inspect(value, opts) {
      var nested = !!(opts && opts.nested);
      var maxLen = (opts && opts.maxLen) || 0;
      var seen = [];

      function fmt(v, depth, inner) {
        if (v === null) return 'null';
        var t = typeof v;
        if (t === 'undefined') return 'undefined';
        if (t === 'string') return inner ? JSON.stringify(v) : v;
        if (t === 'number') return v === 0 && 1 / v < 0 ? '-0' : String(v);
        if (t === 'bigint') return String(v) + 'n';
        if (t === 'boolean' || t === 'symbol') return String(v);
        if (t === 'function') {
          var src = '';
          try { src = Function.prototype.toString.call(v); } catch (e) { /* bỏ qua */ }
          return (/^class[\s{]/.test(src) ? '[class ' : '[Function: ') + (v.name || '(anonymous)') + ']';
        }
        if (seen.indexOf(v) !== -1) return '[Circular]';
        var tg = tag(v);
        if (depth > 6) return tg === 'Array' ? '[Array]' : '[Object]';
        seen.push(v);
        try {
          var parts = [], i, n;
          if (tg === 'Array') {
            if (v.length === 0) return '[]';
            n = Math.min(v.length, 100);
            for (i = 0; i < n; i++) parts.push(i in v ? fmt(v[i], depth + 1, true) : '<empty>');
            if (v.length > n) parts.push('... thêm ' + (v.length - n) + ' phần tử');
            return '[ ' + parts.join(', ') + ' ]';
          }
          if (tg === 'Map') {
            if (v.size === 0) return 'Map(0) {}';
            v.forEach(function (val, key) {
              if (parts.length < 100) parts.push(fmt(key, depth + 1, true) + ' => ' + fmt(val, depth + 1, true));
            });
            return 'Map(' + v.size + ') { ' + parts.join(', ') + ' }';
          }
          if (tg === 'Set') {
            if (v.size === 0) return 'Set(0) {}';
            v.forEach(function (val) {
              if (parts.length < 100) parts.push(fmt(val, depth + 1, true));
            });
            return 'Set(' + v.size + ') { ' + parts.join(', ') + ' }';
          }
          if (tg === 'Error') return (v.name || 'Error') + ': ' + v.message;
          if (tg === 'Date') return isNaN(v.getTime()) ? 'Invalid Date' : v.toISOString();
          if (tg === 'RegExp') return String(v);
          if (tg === 'Promise') return 'Promise { ... }';

          var keys = Object.keys(v);
          var proto = Object.getPrototypeOf(v);
          var name = '';
          if (proto === null) name = '[Object: null prototype] ';
          else if (proto.constructor && proto.constructor.name && proto.constructor.name !== 'Object') {
            name = proto.constructor.name + ' ';
          }
          if (keys.length === 0) return name + '{}';
          n = Math.min(keys.length, 50);
          for (i = 0; i < n; i++) {
            var k = keys[i];
            parts.push((isIdent(k) ? k : JSON.stringify(k)) + ': ' + fmt(v[k], depth + 1, true));
          }
          if (keys.length > n) parts.push('... thêm ' + (keys.length - n) + ' key');
          return name + '{ ' + parts.join(', ') + ' }';
        } finally {
          seen.pop();
        }
      }

      var out = fmt(value, 0, nested);
      if (maxLen && out.length > maxLen) out = out.slice(0, maxLen) + ' …';
      return out;
    }

    // Sao chép sâu mảng/object thường để code của người học không làm hỏng dữ liệu test gốc
    function clone(v) {
      if (v === null || typeof v !== 'object') return v;
      var tg = tag(v), out, i;
      if (tg === 'Array') {
        out = [];
        for (i = 0; i < v.length; i++) out.push(clone(v[i]));
        return out;
      }
      if (tg === 'Object') {
        out = {};
        var keys = Object.keys(v);
        for (i = 0; i < keys.length; i++) out[keys[i]] = clone(v[keys[i]]);
        return out;
      }
      return v;
    }

    function deepEqual(a, b, tol) {
      if (a === b) return true;
      if (typeof a === 'number' && typeof b === 'number') {
        if (a !== a && b !== b) return true; // NaN === NaN khi chấm
        if (tol) return Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
        return false;
      }
      if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') return false;
      var ta = tag(a), tb = tag(b), i;
      if (ta !== tb) return false;
      if (ta === 'Array') {
        if (a.length !== b.length) return false;
        for (i = 0; i < a.length; i++) if (!deepEqual(a[i], b[i], tol)) return false;
        return true;
      }
      if (ta === 'Map') {
        if (a.size !== b.size) return false;
        var ok = true;
        a.forEach(function (val, key) {
          if (ok && (!b.has(key) || !deepEqual(val, b.get(key), tol))) ok = false;
        });
        return ok;
      }
      if (ta === 'Set') {
        if (a.size !== b.size) return false;
        var all = true;
        a.forEach(function (val) { if (all && !b.has(val)) all = false; });
        return all;
      }
      if (ta === 'Date') return a.getTime() === b.getTime();
      var ka = Object.keys(a), kb = Object.keys(b);
      if (ka.length !== kb.length) return false;
      for (i = 0; i < ka.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(b, ka[i])) return false;
        if (!deepEqual(a[ka[i]], b[ka[i]], tol)) return false;
      }
      return true;
    }

    function sortByKey(arr) {
      return arr
        .map(function (x) { return { k: inspect(x, { nested: true }), v: x }; })
        .sort(function (x, y) { return x.k < y.k ? -1 : x.k > y.k ? 1 : 0; })
        .map(function (x) { return x.v; });
    }

    // 'unordered'      : thứ tự các phần tử ở cấp ngoài cùng không quan trọng
    // 'unordered-deep' : thứ tự không quan trọng ở mọi cấp (VD: group anagrams, subsets)
    function normalize(v, mode) {
      if (tag(v) !== 'Array') return v;
      if (mode === 'unordered') return sortByKey(clone(v));
      if (mode === 'unordered-deep') {
        return sortByKey(v.map(function (x) { return normalize(x, mode); }));
      }
      return v;
    }

    function compare(got, expected, mode) {
      if (mode === 'float') return deepEqual(got, expected, 1e-6);
      return deepEqual(normalize(got, mode), normalize(expected, mode));
    }

    function errorText(e) {
      if (e && typeof e === 'object' && 'message' in e) return (e.name || 'Error') + ': ' + e.message;
      return 'Uncaught ' + inspect(e, { nested: true });
    }

    /*
     * env = {
     *   lookup(name)  -> giá trị biến global tên `name` (hàm người học viết)
     *   runCode(body, result) -> Promise kết quả của thân một async function có tham số `result`
 *                     (dùng cho test kiểu `code` / `gen` / `check`)
     *   now()         -> mili-giây
     *   errorLine(e)  -> (tuỳ chọn) số dòng trong code người học gây ra lỗi
     * }
     */
    async function runTests(env, ex, onResult) {
      var tests = ex.tests || [];
      var passed = 0;
      for (var i = 0; i < tests.length; i++) {
        var t = tests[i];
        var r = { index: i, hidden: !!(t.hidden || t.gen), label: t.label || '' };
        try {
          var got, start;
          if (t.code) {
            r.input = t.label || t.code;
            start = env.now();
            got = await env.runCode(t.code);
          } else {
            var args = t.gen ? await env.runCode(t.gen) : clone(t.args || []);
            r.input = t.gen
              ? (t.label || 'Input lớn sinh tự động')
              : args.map(function (a) { return inspect(a, { nested: true }); }).join(', ');
            var fn = env.lookup(ex.fn);
            if (typeof fn !== 'function') {
              throw new ReferenceError('Không tìm thấy hàm `' + ex.fn + '`. Bạn đã khai báo đúng tên chưa?');
            }
            start = env.now();
            got = fn.apply(null, args);
          }
          if (got && typeof got.then === 'function') got = await got;
          r.ms = Math.round((env.now() - start) * 10) / 10;
          r.got = inspect(got, { nested: true, maxLen: 400 });
          if (t.check) {
            // kết quả quá lớn để ghi sẵn: một đoạn code nhận `result` và trả về true/false
            r.pass = (await env.runCode(t.check, got)) === true;
            r.expected = t.expectedText || 'thoả điều kiện kiểm tra';
          } else {
            r.pass = compare(got, t.expected, t.compare || ex.compare);
            r.expected = inspect(t.expected, { nested: true, maxLen: 400 });
          }
        } catch (e) {
          r.pass = false;
          r.error = errorText(e);
          if (env.errorLine) r.line = env.errorLine(e);
          r.expected = t.check ? (t.expectedText || 'thoả điều kiện kiểm tra') : inspect(t.expected, { nested: true, maxLen: 400 });
        }
        if (r.input && r.input.length > 300) r.input = r.input.slice(0, 300) + ' …';
        if (r.pass) passed++;
        if (onResult) onResult(r);
      }
      return { passed: passed, total: tests.length };
    }

    return {
      inspect: inspect,
      clone: clone,
      deepEqual: deepEqual,
      compare: compare,
      runTests: runTests,
      errorText: errorText
    };
  }

  root.createJudge = createJudge;
  if (typeof module !== 'undefined' && module.exports) module.exports = { createJudge: createJudge };
})(typeof window !== 'undefined' ? window : globalThis);
