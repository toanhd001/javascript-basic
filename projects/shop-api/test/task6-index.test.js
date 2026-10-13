// NHIỆM VỤ 6 — viết migration tạo index cho orders(user_id)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setupTestServer } from './helpers.js';

const t = setupTestServer();

test('có index bắt đầu bằng cột user_id trên bảng orders', async () => {
  const rows = await t.sql("SELECT indexdef FROM pg_indexes WHERE tablename = 'orders'");
  assert.ok(rows.some((r) => /\(user_id\b/.test(r.indexdef)), 'chưa có: ' + rows.map((r) => r.indexdef).join(' | '));
});

test('migration được ghi nhận trong schema_migrations', async () => {
  const rows = await t.sql("SELECT name FROM schema_migrations WHERE name <> '001_init.sql'");
  assert.ok(rows.length >= 1, 'chưa có migration mới nào trong db/migrations/');
});

test('EXPLAIN dùng index khi tìm đơn theo user_id', async () => {
  // Bảng nhỏ thì Postgres thích quét tuần tự hơn; tắt seqscan để xem nó CÓ THỂ dùng index không
  const plan = await t.db.transaction(async (tx) => {
    await tx.query('SET LOCAL enable_seqscan = off');
    const { rows } = await tx.query('EXPLAIN SELECT * FROM orders WHERE user_id = 1');
    return rows.map((r) => r['QUERY PLAN']).join('\n');
  });
  assert.match(plan, /Index/, plan);
});
