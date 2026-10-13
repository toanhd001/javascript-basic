// Khung test dùng chung: database test thật (PostgreSQL) + server thật chạy ở cổng ngẫu nhiên + fetch.
import { before, after, beforeEach } from 'node:test';
import pg from 'pg';
import { loadConfig } from '../src/config.js';
import { createDb } from '../src/db.js';
import { createApp } from '../src/app.js';
import { migrate } from '../scripts/migrate.js';
import { seed } from '../scripts/seed.js';
import { signToken } from '../src/lib/token.js';

const TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'postgres://shop:shop@localhost:5432/shop_test';

// Xoá sạch schema rồi chạy lại mọi migration → database test luôn khớp đúng db/migrations/
async function rebuildSchema(url) {
  const client = new pg.Client({ connectionString: url });
  try {
    await client.connect();
  } catch (err) {
    const hint = err.code === 'ECONNREFUSED'
      ? 'Postgres chưa chạy. Chạy: docker compose up -d db'
      : err.code === '3D000'
        ? 'Chưa có database shop_test. Volume Postgres được tạo trước khi có db/init? Chạy: docker compose down -v && docker compose up -d db'
        : 'Kiểm tra TEST_DATABASE_URL';
    throw new Error(`Không kết nối được database test (${TEST_DATABASE_URL}): ${err.message}\n→ ${hint}`);
  }
  try {
    await client.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public;');
  } finally {
    await client.end();
  }
  await migrate(url, { log: () => {} });
}

export function setupTestServer() {
  const ctx = {};

  before(async () => {
    ctx.config = loadConfig({ NODE_ENV: 'test', DATABASE_URL: TEST_DATABASE_URL, PORT: '0', JWT_SECRET: 'test-secret' });
    await rebuildSchema(TEST_DATABASE_URL);
    ctx.db = createDb(TEST_DATABASE_URL, { max: 10 });
    const app = createApp({ db: ctx.db, config: ctx.config });
    await new Promise((resolve) => {
      ctx.server = app.listen(0, '127.0.0.1', resolve);
    });
    ctx.baseUrl = `http://127.0.0.1:${ctx.server.address().port}`;
  });

  beforeEach(async () => {
    await seed(ctx.db);
    ctx.db.resetQueryCount();
  });

  after(async () => {
    ctx.server?.closeAllConnections();
    await new Promise((resolve) => (ctx.server ? ctx.server.close(resolve) : resolve()));
    await ctx.db?.close();
  });

  // Token hợp lệ cho user bất kỳ — để test các nhiệm vụ khác không phụ thuộc Nhiệm vụ 3 (login)
  ctx.tokenFor = (userId, role = 'user') => signToken({ sub: userId, role }, ctx.config.jwtSecret);
  ctx.AN = () => ctx.tokenFor(1);
  ctx.JISOO = () => ctx.tokenFor(2);
  ctx.ADMIN = () => ctx.tokenFor(3, 'admin');

  // await ctx.api('POST', '/orders', { token, body }) → { status, headers, body }
  ctx.api = async (method, path, { token, body, rawBody } = {}) => {
    const headers = {};
    if (token) headers.authorization = 'Bearer ' + token;
    let payload;
    if (rawBody !== undefined || body !== undefined) {
      headers['content-type'] = 'application/json';
      payload = rawBody !== undefined ? rawBody : JSON.stringify(body);
    }
    const res = await fetch(ctx.baseUrl + path, { method, headers, body: payload });
    const text = await res.text();
    let parsed;
    try {
      parsed = text ? JSON.parse(text) : undefined;
    } catch {
      parsed = text;
    }
    return { status: res.status, headers: res.headers, body: parsed };
  };

  ctx.sql = async (text, params) => (await ctx.db.query(text, params)).rows;
  return ctx;
}
