#!/usr/bin/env node
/*
 * vendor-sqljs.js — đóng gói sql.js (SQLite biên dịch sang WebAssembly) thành MỘT file JS:
 *   js/vendor/sqljs.bundle.js  →  window.SQLJS_BUNDLE = { version, glue, wasm }
 *     glue: mã nguồn sql-wasm.js (dạng chuỗi, được nhúng vào Web Worker)
 *     wasm: file .wasm mã hoá base64
 *
 * Tại sao không để nguyên .wasm? Trình duyệt chặn fetch() file local qua file://,
 * nên muốn mở index.html trực tiếp vẫn chạy được SQL thì phải nạp qua <script>.
 *
 * Dùng: npm pack sql.js@1.13.0 && tar xzf sql.js-1.13.0.tgz
 *       node scripts/vendor-sqljs.js ./package
 */
'use strict';
const fs = require('fs');
const path = require('path');

const pkgDir = process.argv[2];
if (!pkgDir) {
  console.error('Dùng: node scripts/vendor-sqljs.js <thư mục package của sql.js>');
  process.exit(1);
}
const pkg = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8'));
const glue = fs.readFileSync(path.join(pkgDir, 'dist', 'sql-wasm.js'), 'utf8');
const wasm = fs.readFileSync(path.join(pkgDir, 'dist', 'sql-wasm.wasm')).toString('base64');
const outDir = path.join(__dirname, '..', 'js', 'vendor');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'sqljs.bundle.js'),
  `/* sql.js ${pkg.version} (MIT, https://github.com/sql-js/sql.js) — đóng gói bởi scripts/vendor-sqljs.js */\n` +
  `window.SQLJS_BUNDLE = ${JSON.stringify({ version: pkg.version, glue, wasm })};\n`
);
fs.copyFileSync(path.join(pkgDir, 'LICENSE'), path.join(outDir, 'sqljs.LICENSE'));
console.log(`✔ sql.js ${pkg.version} → js/vendor/sqljs.bundle.js`);
