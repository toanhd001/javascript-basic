#!/usr/bin/env node
/*
 * build.js — gom nội dung trong content/ thành js/content.generated.js
 *
 * Cấu trúc:
 *   content/<NN-module>/module.md          frontmatter (id, title) + mô tả ngắn
 *   content/<NN-module>/<NN-lesson>.md     frontmatter (id, title) + lý thuyết (markdown)
 *   content/<NN-module>/<NN-lesson>.exercises.js   (tuỳ chọn) module.exports = [ ...bài tập ]
 *
 * Tại sao có bước build? Để mở index.html trực tiếp (file://) vẫn chạy — trình duyệt chặn fetch()
 * file .md qua file://, nhưng cho phép <script src>. Đổi lại: sửa nội dung xong phải chạy `npm run build`.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');
const OUT = path.join(ROOT, 'js', 'content.generated.js');

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function inline(s) {
  const codes = [];
  s = s.replace(/``(.+?)``|`([^`]+)`/g, (_, a, b) => {
    codes.push(a !== undefined ? a : b);
    return '\u0000' + (codes.length - 1) + '\u0000';
  });
  s = esc(s);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^\w*])\*(?!\s)([^*]+?)\*(?!\w)/g, '$1<em>$2</em>');
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, href) =>
    href.startsWith('#')
      ? `<a href="${href}">${text}</a>`
      : `<a href="${href}" target="_blank" rel="noopener">${text}</a>`);
  s = s.replace(/\u0000(\d+)\u0000/g, (_, n) => '<code>' + esc(codes[Number(n)]) + '</code>');
  return s;
}

const BLOCK_START = /^(```|#{1,4}\s|>|\s*[-*]\s+|\s*\d+\.\s+|\|)/;

function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    const fence = /^```(\w*)\s*(.*)$/.exec(line);
    if (fence) {
      const lang = fence[1] || 'text';
      const flags = fence[2] || '';
      const body = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) body.push(lines[i++]);
      i++;
      html += `<pre class="code"${/\brun\b/.test(flags) ? ' data-run' : ''}><code class="language-${lang}">${esc(body.join('\n'))}</code></pre>\n`;
      continue;
    }
    if (/^\s*$/.test(line)) { i++; continue; }

    const heading = /^(#{1,4})\s+(.*)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      html += `<h${level}>${inline(heading[2])}</h${level}>\n`;
      i++;
      continue;
    }
    if (/^---+\s*$/.test(line)) { html += '<hr>\n'; i++; continue; }

    if (/^>/.test(line)) {
      const body = [];
      while (i < lines.length && /^>/.test(lines[i])) body.push(lines[i++].replace(/^>\s?/, ''));
      html += `<blockquote>${mdToHtml(body.join('\n'))}</blockquote>\n`;
      continue;
    }

    if (/^\|/.test(line) && i + 1 < lines.length && /^\|?\s*:?-{2,}/.test(lines[i + 1])) {
      const cells = (l) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map((c) => inline(c.trim().replace(/\\\|/g, '|')));
      const head = cells(line);
      i += 2;
      let rows = '';
      while (i < lines.length && /^\|/.test(lines[i])) {
        rows += '<tr>' + cells(lines[i]).map((c) => `<td>${c}</td>`).join('') + '</tr>\n';
        i++;
      }
      html += '<table><thead><tr>' + head.map((c) => `<th>${c}</th>`).join('') + '</tr></thead>\n<tbody>\n' + rows + '</tbody></table>\n';
      continue;
    }

    const listMatch = /^\s*([-*]|\d+\.)\s+/.exec(line);
    if (listMatch) {
      const ordered = /\d/.test(listMatch[1]);
      const itemRe = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;
      const items = [];
      while (i < lines.length) {
        if (itemRe.test(lines[i])) {
          items.push(lines[i].replace(itemRe, ''));
          i++;
        } else if (/^\s{2,}\S/.test(lines[i]) && items.length) {
          items[items.length - 1] += ' ' + lines[i].trim();
          i++;
        } else break;
      }
      const tag = ordered ? 'ol' : 'ul';
      html += `<${tag}>` + items.map((it) => `<li>${inline(it)}</li>`).join('') + `</${tag}>\n`;
      continue;
    }

    const para = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !BLOCK_START.test(lines[i]) && !/^---+\s*$/.test(lines[i])) {
      para.push(lines[i++].trim());
    }
    if (!para.length) { para.push(line.trim()); i++; }
    html += `<p>${inline(para.join(' '))}</p>\n`;
  }
  return html;
}

function parseFrontmatter(src, file) {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(src.replace(/\r\n/g, '\n'));
  if (!m) throw new Error(`${file}: thiếu frontmatter (--- id: ... title: ... ---)`);
  const meta = {};
  m[1].split('\n').forEach((l) => {
    const kv = /^(\w+):\s*(.*)$/.exec(l);
    if (kv) meta[kv[1]] = kv[2].trim();
  });
  if (!meta.id || !meta.title) throw new Error(`${file}: frontmatter cần id và title`);
  return { meta, body: src.replace(/\r\n/g, '\n').slice(m[0].length) };
}

function loadExercises(file) {
  delete require.cache[require.resolve(file)];
  const list = require(file);
  return list.map((ex) => {
    for (const k of ['id', 'title', 'prompt', 'starter', 'solution', 'tests']) {
      if (ex[k] === undefined) throw new Error(`${file}: bài "${ex.id || '?'}" thiếu trường "${k}"`);
    }
    return {
      id: ex.id,
      title: ex.title,
      difficulty: ex.difficulty || 'easy',
      prompt: mdToHtml(ex.prompt),
      fn: ex.fn || null,
      starter: ex.starter.replace(/^\n/, ''),
      solution: ex.solution.replace(/^\n/, ''),
      explain: ex.explain ? mdToHtml(ex.explain) : '',
      hints: (ex.hints || []).map((x) => mdToHtml(x)),
      followUp: ex.followUp ? mdToHtml(ex.followUp) : '',
      helpers: ex.helpers ? ex.helpers.replace(/^\n/, '').replace(/\n$/, '') : '',
      compare: ex.compare || null,
      timeout: ex.timeout || null,
      brokenStarter: !!ex.brokenStarter,
      tests: ex.tests
    };
  });
}

function buildCurriculum() {
  const modules = [];
  const dirs = fs.readdirSync(CONTENT).filter((d) => fs.statSync(path.join(CONTENT, d)).isDirectory()).sort();
  for (const dir of dirs) {
    const full = path.join(CONTENT, dir);
    const modFile = path.join(full, 'module.md');
    const mod = parseFrontmatter(fs.readFileSync(modFile, 'utf8'), modFile);
    const lessons = [];
    const files = fs.readdirSync(full).filter((f) => f.endsWith('.md') && f !== 'module.md').sort();
    for (const f of files) {
      const file = path.join(full, f);
      const { meta, body } = parseFrontmatter(fs.readFileSync(file, 'utf8'), file);
      const exFile = file.replace(/\.md$/, '.exercises.js');
      lessons.push({
        id: meta.id,
        title: meta.title,
        html: mdToHtml(body),
        source: path.relative(ROOT, file),
        exercises: fs.existsSync(exFile) ? loadExercises(exFile) : []
      });
    }
    modules.push({ id: mod.meta.id, title: mod.meta.title, desc: mdToHtml(mod.body), lessons });
  }
  return modules;
}

// Giống JSON.stringify nhưng ra JS literal: giữ được undefined, NaN, ±Infinity, -0
// (JSON đổi chúng thành null — làm sai các test kiểu `expected: [undefined]` hay `-Infinity`).
function toJs(value, indent = '') {
  if (value === undefined) return 'undefined';
  if (typeof value === 'number') {
    if (Number.isNaN(value)) return 'NaN';
    if (value === Infinity) return 'Infinity';
    if (value === -Infinity) return '-Infinity';
    if (Object.is(value, -0)) return '-0';
    return String(value);
  }
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  const inner = indent + ' ';
  if (Array.isArray(value)) {
    if (!value.length) return '[]';
    return '[\n' + value.map((v) => inner + toJs(v, inner)).join(',\n') + '\n' + indent + ']';
  }
  const keys = Object.keys(value);
  if (!keys.length) return '{}';
  return '{\n' + keys.map((k) => inner + JSON.stringify(k) + ': ' + toJs(value[k], inner)).join(',\n') + '\n' + indent + '}';
}

function render(modules) {
  return '/* FILE TỰ SINH bởi scripts/build.js — đừng sửa tay. Sửa trong content/ rồi chạy: npm run build */\n' +
    'window.CURRICULUM = ' + toJs(modules) + ';\n';
}

module.exports = { buildCurriculum, render, mdToHtml, OUT };

if (require.main === module) {
  const modules = buildCurriculum();
  fs.writeFileSync(OUT, render(modules));
  const lessonCount = modules.reduce((n, m) => n + m.lessons.length, 0);
  const exCount = modules.reduce((n, m) => n + m.lessons.reduce((k, l) => k + l.exercises.length, 0), 0);
  console.log(`✔ ${modules.length} chặng, ${lessonCount} bài học, ${exCount} bài tập → ${path.relative(ROOT, OUT)}`);
}
