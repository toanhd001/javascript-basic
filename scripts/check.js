#!/usr/bin/env node
/*
 * check.js — kiểm tra chất lượng nội dung (chạy: npm test)
 *   1. js/content.generated.js khớp với content/ (đã chạy build chưa?)
 *   2. id bài học / bài tập không trùng
 *   3. Code khởi đầu (starter) đúng cú pháp và KHÔNG tự qua hết test (nếu qua thì test vô nghĩa)
 *   4. Lời giải mẫu qua 100% test, và đủ nhanh
 *   5. Các ví dụ ```js run / ```sql run trong bài học chạy không lỗi
 * Bài SQL và bài API dùng database được chấm bằng đúng bản SQLite (js/vendor/sqljs.bundle.js) gửi cho trình duyệt.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { performance } = require('perf_hooks');
const { buildCurriculum, render, OUT } = require('./build');

const ROOT = path.join(__dirname, '..');
const JUDGE_SRC = fs.readFileSync(path.join(ROOT, 'js', 'judge-core.js'), 'utf8');
const { createJudge } = require('../js/judge-core.js');
const { createSqlJudge } = require('../js/sql-judge.js');

// Nạp SQLite từ file vendor (glue + wasm base64), giống hệt trình duyệt
const SQL_BUNDLE = (() => {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'js', 'vendor', 'sqljs.bundle.js'), 'utf8'), sandbox);
  const b = sandbox.window.SQLJS_BUNDLE;
  return { glue: b.glue, wasm: new Uint8Array(Buffer.from(b.wasm, 'base64')) };
})();

function installSql(ctx) {
  vm.runInContext(`var initSqlJs = (function () {\n${SQL_BUNDLE.glue}\nreturn initSqlJs;\n})();`, ctx);
  ctx.__SQLJS_WASM = SQL_BUNDLE.wasm;
  ctx.__sqlReady = vm.runInContext('initSqlJs({ wasmBinary: __SQLJS_WASM })', ctx);
  return ctx.__sqlReady;
}

let sqlPromise = null;
function getSQL() {
  if (!sqlPromise) sqlPromise = installSql(vm.createContext({ console }));
  return sqlPromise;
}

async function runSqlExercise(ex, sql) {
  const SQL = await getSQL();
  const results = [];
  await createSqlJudge(createJudge()).runSqlTests(SQL, ex, sql, () => performance.now(), (r) => results.push(r));
  return { results, topError: null };
}
const SLOW_MS = 1500;

let failures = 0;
let warnings = 0;
function fail(msg) { failures++; console.log('  ✗ ' + msg); }
function warn(msg) { warnings++; console.log('  ⚠ ' + msg); }

function makeContext(logs, withSql) {
  const sink = (...args) => { if (logs) logs.push(args.map(String).join(' ')); };
  const ctx = vm.createContext({
    console: { log: sink, info: sink, warn: sink, error: sink, debug: sink, table: sink, dir: sink },
    setTimeout, clearTimeout, setInterval, clearInterval, queueMicrotask, structuredClone,
    performance, URL, URLSearchParams, atob, btoa, TextEncoder, TextDecoder
  });
  vm.runInContext(JUDGE_SRC, ctx);
  if (withSql) installSql(ctx);
  return ctx;
}

// Promise không bao giờ settle (VD starter của bài promiseAll) sẽ làm Node thoát im lặng → cần timeout.
function withTimeout(promise, ms) {
  let timer;
  return Promise.race([
    promise,
    new Promise((resolve) => { timer = setTimeout(() => resolve({ timedOut: true, results: [] }), ms); })
  ]).finally(() => clearTimeout(timer));
}

async function runExercise(ex, code, opts = {}) {
  if (ex.kind === 'sql') return runSqlExercise(ex, code);
  const ctx = makeContext(null, ex.needsSql);
  if (ex.needsSql) await ctx.__sqlReady;
  const results = [];
  let topError = null;
  try {
    if (ex.helpers) vm.runInContext(ex.helpers, ctx, { timeout: 5000 });
    vm.runInContext(code, ctx, { timeout: 5000, filename: ex.id + '.js' });
  } catch (e) {
    topError = e;
  }
  const judge = vm.runInContext('createJudge()', ctx);
  const env = {
    // Gọi hàm qua vm.runInContext để có timeout thật: vòng lặp đồng bộ vô hạn không thể bị Promise ngắt.
    lookup: (name) => {
      const value = vm.runInContext(`typeof ${name} !== "undefined" ? ${name} : undefined`, ctx);
      if (typeof value !== 'function') return value;
      return (...args) => {
        ctx.__args = args;
        return vm.runInContext(`${name}(...__args)`, ctx, { timeout: opts.syncTimeout || 10000 });
      };
    },
    runCode: (body, result) => {
      ctx.__result = result;
      return vm.runInContext(`(async function (result) {\n${body}\n})(__result)`, ctx, { timeout: opts.syncTimeout || 10000 });
    },
    now: () => performance.now()
  };
  // Starter thường cố ý chậm (O(n²)); chạy test lớn với nó chỉ làm treo script → bỏ qua test `gen`.
  const tests = opts.skipGen ? ex.tests.filter((t) => !t.gen) : ex.tests;
  await judge.runTests(env, { fn: ex.fn, tests, compare: ex.compare }, (r) => results.push(r));
  return { results, topError };
}

async function main() {
  console.log('1. File sinh ra có khớp content/ không');
  const modules = buildCurriculum();
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  if (current !== render(modules)) fail('js/content.generated.js đã cũ → chạy: npm run build');

  // Chấm trên dữ liệu ĐÚNG NHƯ TRÌNH DUYỆT NHẬN (đọc lại file sinh ra), không phải object gốc trong bộ nhớ
  const sandbox = { window: {} };
  vm.runInNewContext(render(modules), sandbox);
  const shipped = sandbox.window.CURRICULUM;
  modules.forEach((m, i) => m.lessons.forEach((l, j) => l.exercises.forEach((ex, k) => {
    ex.tests = shipped[i].lessons[j].exercises[k].tests;
  })));

  console.log('2. Trùng id');
  const seen = new Set();
  for (const m of modules) {
    for (const l of m.lessons) {
      for (const id of [l.id, ...l.exercises.map((e) => e.id)]) {
        if (seen.has(id)) fail('id bị trùng: ' + id);
        seen.add(id);
      }
    }
  }

  console.log('3–4. Bài tập');
  let exCount = 0;
  for (const m of modules) {
    for (const l of m.lessons) {
      for (const ex of l.exercises) {
        exCount++;
        const where = `[${l.id} › ${ex.id}]`;
        if (ex.kind !== 'sql' && !ex.fn && ex.tests.some((t) => !t.code)) fail(`${where} có test dùng args nhưng thiếu "fn"`);
        if (ex.kind === 'sql' && !ex.schema) fail(`${where} bài SQL thiếu "schema"`);
        if (!ex.tests.length) fail(`${where} không có test nào`);
        if (ex.kind !== 'sql') try {
          new vm.Script(ex.starter);
          if (ex.brokenStarter) fail(`${where} đánh dấu brokenStarter nhưng starter không có lỗi cú pháp`);
        } catch (e) {
          if (!ex.brokenStarter) fail(`${where} starter lỗi cú pháp: ${e.message}`);
        }

        const sol = await withTimeout(runExercise(ex, ex.solution), 15000);
        if (sol.timedOut) fail(`${where} lời giải chạy quá 15s`);
        if (sol.topError) fail(`${where} lời giải ném lỗi khi khởi chạy: ${sol.topError.message}`);
        sol.results.forEach((r) => {
          if (!r.pass) fail(`${where} lời giải trượt test ${r.index + 1}: ${r.error || `trả về ${r.got}, mong đợi ${r.expected}`}`);
          else if (r.ms > SLOW_MS) warn(`${where} test ${r.index + 1} chậm (${r.ms} ms)`);
        });

        const start = await withTimeout(runExercise(ex, ex.starter, { skipGen: true, syncTimeout: 1000 }), 3000);
        const hasGen = ex.tests.some((t) => t.gen);
        if (!hasGen && start.results.length && start.results.every((r) => r.pass)) {
          fail(`${where} code khởi đầu đã qua hết test — test chưa đủ chặt`);
        }
      }
    }
  }

  console.log('5. Ví dụ ```js run trong bài học');
  let snippetCount = 0;
  const unhandled = [];
  process.on('unhandledRejection', (e) => unhandled.push(e));
  for (const m of modules) {
    for (const l of m.lessons) {
      const src = fs.readFileSync(path.join(ROOT, l.source), 'utf8');
      // ```sql run error → ví dụ CỐ Ý gây lỗi (minh hoạ ràng buộc...): phải ném lỗi
      const re = /```(js|sql) run( error)?\n([\s\S]*?)```/g;
      let match;
      while ((match = re.exec(src))) {
        snippetCount++;
        const code = match[3];
        const expectError = !!match[2];
        try {
          if (match[1] === 'sql') {
            const db = new (await getSQL()).Database();
            try {
              if (l.snippetSchema) db.exec(l.snippetSchema);
              db.exec(code);
            } finally {
              db.close();
            }
          } else {
            const ctx = makeContext([], l.snippetNeedsSql);
            if (l.snippetHelpers) vm.runInContext(l.snippetHelpers, ctx, { timeout: 3000 });
            vm.runInContext(code, ctx, { timeout: 3000 });
          }
          if (expectError) fail(`[${l.id}] ví dụ #${snippetCount} đánh dấu "run error" nhưng không có lỗi`);
        } catch (e) {
          if (!expectError) fail(`[${l.id}] ví dụ #${snippetCount} lỗi: ${e.message}\n${code.split('\n').slice(0, 3).join('\n')}`);
        }
      }
    }
  }
  await new Promise((r) => setTimeout(r, 1200)); // đợi các setTimeout trong ví dụ
  unhandled.forEach((e) => fail('Promise bị reject không được xử lý trong một ví dụ: ' + (e && e.message)));

  console.log(`\n${exCount} bài tập, ${snippetCount} ví dụ chạy được · ${failures} lỗi · ${warnings} cảnh báo`);
  process.exit(failures ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
