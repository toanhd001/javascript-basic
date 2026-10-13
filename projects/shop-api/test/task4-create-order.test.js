// NHIỆM VỤ 4 — POST /orders: transaction + chống bán vượt số lượng khi có request đồng thời
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setupTestServer } from './helpers.js';

const t = setupTestServer();
const stock = async (id) => (await t.sql('SELECT stock FROM products WHERE id = $1', [id]))[0].stock;
const orderCount = async () => (await t.sql('SELECT COUNT(*)::int AS n FROM orders'))[0].n;

test('đặt hàng thành công → 201, trừ kho, lưu đơn và các dòng hàng', async () => {
  const res = await t.api('POST', '/orders', { token: t.AN(), body: { items: [{ productId: 2, quantity: 3 }, { productId: 1, quantity: 1 }] } });
  assert.equal(res.status, 201);
  assert.deepEqual(res.body, {
    id: 4,
    status: 'pending',
    total: 1995000,
    items: [
      { productId: 1, name: 'Laptop Pro 14', quantity: 1, unitPrice: 1890000 },
      { productId: 2, name: 'Wireless Mouse', quantity: 3, unitPrice: 35000 }
    ]
  });
  assert.equal(await stock(1), 4);
  assert.equal(await stock(2), 117);
  const [order] = await t.sql('SELECT user_id, status, total FROM orders WHERE id = 4');
  assert.deepEqual(order, { user_id: 1, status: 'pending', total: 1995000 });
  const items = await t.sql('SELECT product_id, quantity, unit_price FROM order_items WHERE order_id = 4 ORDER BY product_id');
  assert.deepEqual(items, [{ product_id: 1, quantity: 1, unit_price: 1890000 }, { product_id: 2, quantity: 3, unit_price: 35000 }]);
});

test('một sản phẩm không đủ hàng → 409 và KHÔNG thay đổi gì (kể cả sản phẩm đủ hàng)', async () => {
  const res = await t.api('POST', '/orders', { token: t.AN(), body: { items: [{ productId: 2, quantity: 1 }, { productId: 9, quantity: 4 }] } });
  assert.equal(res.status, 409);
  assert.deepEqual(res.body, { error: 'Insufficient stock for product 9' });
  assert.equal(await stock(2), 120);
  assert.equal(await stock(9), 3);
  assert.equal(await orderCount(), 3);
});

test('sản phẩm hết hàng → 409; không tồn tại → 404', async () => {
  const out = await t.api('POST', '/orders', { token: t.AN(), body: { items: [{ productId: 4, quantity: 1 }] } });
  assert.equal(out.status, 409);
  const missing = await t.api('POST', '/orders', { token: t.AN(), body: { items: [{ productId: 999, quantity: 1 }] } });
  assert.equal(missing.status, 404);
  assert.deepEqual(missing.body, { error: 'Product 999 not found' });
  assert.equal(await orderCount(), 3);
});

test('dữ liệu không hợp lệ → 400', async () => {
  const bodies = [
    {},
    { items: [] },
    { items: 'abc' },
    { items: Array.from({ length: 21 }, (_, i) => ({ productId: (i % 10) + 1, quantity: 1 })) },
    { items: [{ productId: 1, quantity: 0 }] },
    { items: [{ productId: 1, quantity: 1.5 }] },
    { items: [{ productId: 1, quantity: 101 }] },
    { items: [{ productId: '1', quantity: 1 }] },
    { items: [{ productId: 0, quantity: 1 }] }
  ];
  for (const body of bodies) {
    const res = await t.api('POST', '/orders', { token: t.AN(), body });
    assert.equal(res.status, 400, JSON.stringify(body).slice(0, 80));
  }
  const dup = await t.api('POST', '/orders', { token: t.AN(), body: { items: [{ productId: 1, quantity: 1 }, { productId: 1, quantity: 2 }] } });
  assert.equal(dup.status, 400);
  assert.deepEqual(dup.body, { error: 'duplicate productId' });
});

test('chưa đăng nhập → 401', async () => {
  assert.equal((await t.api('POST', '/orders', { body: { items: [{ productId: 1, quantity: 1 }] } })).status, 401);
});

test('5 request ĐỒNG THỜI mua sản phẩm chỉ còn 3 cái → đúng 3 thành công, kho về 0 (không bán vượt)', async () => {
  const results = await Promise.all(
    [1, 2, 3, 4, 5].map(() => t.api('POST', '/orders', { token: t.JISOO(), body: { items: [{ productId: 9, quantity: 1 }] } }))
  );
  assert.deepEqual(results.map((r) => r.status).sort(), [201, 201, 201, 409, 409]);
  assert.equal(await stock(9), 0);
  assert.equal(await orderCount(), 6);
});

test('request đồng thời đặt cùng hai sản phẩm theo thứ tự khác nhau → không deadlock, không lỗi 500', async () => {
  const bodies = Array.from({ length: 8 }, (_, i) => ({
    items: i % 2 ? [{ productId: 9, quantity: 1 }, { productId: 10, quantity: 1 }] : [{ productId: 10, quantity: 1 }, { productId: 9, quantity: 1 }]
  }));
  const results = await Promise.all(bodies.map((body) => t.api('POST', '/orders', { token: t.AN(), body })));
  const statuses = results.map((r) => r.status);
  assert.ok(!statuses.includes(500), 'có request lỗi 500 (deadlock?): ' + statuses.join(','));
  assert.equal(statuses.filter((s) => s === 201).length, 3);
  assert.equal(await stock(9), 0);
  assert.equal(await stock(10), 4);
});
