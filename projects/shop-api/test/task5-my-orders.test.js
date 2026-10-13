// NHIỆM VỤ 5 — GET /me/orders không bị N+1
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setupTestServer } from './helpers.js';

const t = setupTestServer();

test('đơn hàng của An, mới nhất trước, kèm sản phẩm', async () => {
  const res = await t.api('GET', '/me/orders', { token: t.AN() });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, [
    { id: 2, status: 'pending', total: 32000, createdAt: '2024-05-10T10:00:00.000Z', items: [{ productId: 5, name: 'Clean Code', quantity: 1, unitPrice: 32000 }] },
    {
      id: 1,
      status: 'paid',
      total: 1960000,
      createdAt: '2024-05-01T10:00:00.000Z',
      items: [
        { productId: 1, name: 'Laptop Pro 14', quantity: 1, unitPrice: 1890000 },
        { productId: 2, name: 'Wireless Mouse', quantity: 2, unitPrice: 35000 }
      ]
    }
  ]);
});

test('người chưa có đơn → []', async () => {
  const res = await t.api('GET', '/me/orders', { token: t.ADMIN() });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, []);
});

test('chưa đăng nhập → 401', async () => {
  assert.equal((await t.api('GET', '/me/orders')).status, 401);
});

test('30 đơn hàng vẫn chỉ tối đa 2 truy vấn', async () => {
  for (let i = 0; i < 30; i++) {
    const [o] = await t.sql("INSERT INTO orders (user_id, status, total, created_at) VALUES (2, 'paid', 54000, '2024-07-01T00:00:00Z') RETURNING id");
    await t.sql('INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES ($1, 7, 2, 27000)', [o.id]);
  }
  t.db.resetQueryCount();
  const res = await t.api('GET', '/me/orders', { token: t.JISOO() });
  assert.equal(res.status, 200);
  assert.equal(res.body.length, 31);
  assert.equal(res.body[0].id, 33, 'cùng created_at thì id lớn hơn đứng trước');
  assert.deepEqual(res.body[0].items, [{ productId: 7, name: 'Coffee Beans 1kg', quantity: 2, unitPrice: 27000 }]);
  assert.ok(t.db.queryCount <= 2, `đã chạy ${t.db.queryCount} truy vấn (tối đa 2)`);
});
