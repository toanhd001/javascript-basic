/*
 * sql-judge.js — chấm bài SQL (SQLite thật qua sql.js), dùng chung cho Web Worker và Node.
 * Giống judge-core.js: createSqlJudge() phải tự chứa để có thể .toString() nhúng vào Worker.
 *
 * Một test SQL:
 *   { label, setup?, after?, expected?, columns?, ordered?, expectError?, plan?, planIncludes?, planExcludes?, hidden? }
 *   - Mỗi test chạy trên database MỚI: schema của bài → setup của test → SQL người học.
 *   - Không có `after`: so sánh kết quả của câu lệnh CUỐI CÙNG trả về dữ liệu.
 *   - Có `after`: chạy thêm câu SQL này (VD SELECT lại bảng sau UPDATE) và so sánh kết quả của nó.
 *   - expectError: `after` PHẢI bị lỗi (VD vi phạm ràng buộc NOT NULL / UNIQUE).
 *   - plan + planIncludes/planExcludes: kiểm tra EXPLAIN QUERY PLAN (bài về index).
 */
(function (root) {
  function createSqlJudge(judge) {
    function cellText(v) {
      if (v === null || v === undefined) return 'NULL';
      if (v instanceof Uint8Array) return '<blob ' + v.length + ' bytes>';
      return String(v);
    }

    // Bảng chữ căn cột, giống output của sqlite3 / psql
    function formatTable(columns, rows, limit) {
      limit = limit || 50;
      if (!columns || !columns.length) return '(không có kết quả)';
      var shown = rows.slice(0, limit);
      var widths = columns.map(function (c, i) {
        var w = String(c).length;
        shown.forEach(function (r) { w = Math.max(w, cellText(r[i]).length); });
        return Math.min(w, 40);
      });
      function line(cells) {
        return cells.map(function (c, i) {
          var s = cellText(c);
          if (s.length > widths[i]) s = s.slice(0, widths[i] - 1) + '…';
          return s + ' '.repeat(widths[i] - s.length);
        }).join(' | ');
      }
      var out = [line(columns), widths.map(function (w) { return '-'.repeat(w); }).join('-+-')];
      shown.forEach(function (r) { out.push(line(r)); });
      if (rows.length > limit) out.push('… thêm ' + (rows.length - limit) + ' dòng');
      out.push('(' + rows.length + ' dòng)');
      return out.join('\n');
    }

    function lastSet(sets) {
      return sets && sets.length ? sets[sets.length - 1] : { columns: [], values: [] };
    }

    function freshDb(SQL, schema, setup) {
      var db = new SQL.Database();
      if (schema) db.exec(schema);
      if (setup) db.exec(setup);
      return db;
    }

    function errText(e) {
      return (e && e.message ? e.message : String(e)).replace(/^Error:\s*/, '');
    }

    async function runSqlTests(SQL, ex, userSql, now, onResult) {
      var passed = 0;
      var tests = ex.tests || [];
      for (var i = 0; i < tests.length; i++) {
        var t = tests[i];
        var r = { index: i, hidden: !!t.hidden, label: t.label || '', input: t.label || 'Dữ liệu mẫu của bài' };
        var db = null;
        var start = now();
        try {
          db = freshDb(SQL, ex.schema, t.setup);
          var sets;
          try {
            sets = db.exec(userSql);
          } catch (e) {
            throw new Error('Lỗi SQL: ' + errText(e));
          }
          if (t.expectError) {
            var failed = false, msg = '';
            try { db.exec(t.after); } catch (e) { failed = true; msg = errText(e); }
            r.pass = failed;
            r.expected = 'câu lệnh sau phải bị CSDL từ chối: ' + t.after;
            r.got = failed ? 'bị từ chối: ' + msg : 'câu lệnh vẫn chạy thành công (thiếu ràng buộc?)';
          } else if (t.plan) {
            var plan = db.exec('EXPLAIN QUERY PLAN ' + t.plan);
            var details = lastSet(plan).values.map(function (row) { return row[row.length - 1]; }).join(' / ');
            r.pass = (!t.planIncludes || details.indexOf(t.planIncludes) !== -1) &&
              (!t.planExcludes || details.indexOf(t.planExcludes) === -1);
            r.expected = 'kế hoạch truy vấn' + (t.planIncludes ? ' có "' + t.planIncludes + '"' : '') +
              (t.planExcludes ? ' và không có "' + t.planExcludes + '"' : '');
            r.got = details || '(trống)';
          } else {
            var set = t.after ? lastSet(db.exec(t.after)) : lastSet(sets);
            var got = set.values;
            var mode = t.ordered ? null : 'unordered';
            r.pass = judge.compare(got, t.expected, mode);
            if (r.pass && t.columns) {
              r.pass = judge.deepEqual(set.columns.map(function (c) { return String(c).toLowerCase(); }),
                t.columns.map(function (c) { return c.toLowerCase(); }));
              if (!r.pass) r.error = 'Đúng dữ liệu nhưng sai tên cột: ' + set.columns.join(', ') + ' (cần: ' + t.columns.join(', ') + '). Dùng AS để đặt tên.';
            }
            r.got = formatTable(set.columns, got, 30);
            r.expected = formatTable(t.columns || set.columns, t.expected, 30) + (t.ordered ? '\n(thứ tự dòng PHẢI đúng)' : '');
          }
        } catch (e) {
          r.pass = false;
          r.error = errText(e);
        } finally {
          if (db) db.close();
        }
        r.ms = Math.round((now() - start) * 10) / 10;
        if (r.pass) passed++;
        if (onResult) onResult(r);
      }
      return { passed: passed, total: tests.length };
    }

    return { formatTable: formatTable, lastSet: lastSet, freshDb: freshDb, runSqlTests: runSqlTests, errText: errText };
  }

  root.createSqlJudge = createSqlJudge;
  if (typeof module !== 'undefined' && module.exports) module.exports = { createSqlJudge: createSqlJudge };
})(typeof window !== 'undefined' ? window : globalThis);
