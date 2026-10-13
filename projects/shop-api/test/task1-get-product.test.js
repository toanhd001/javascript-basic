// NHIỆM VỤ 1 — GET /products/:id
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setupTestServer } from './helpers.js';

const t = setupTestServer();

test('sản phẩm tồn tại → 200', async () => {
  const res = await t.api('GET', '/products/3');
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { id: 3, name: 'Mechanical Keyboard', category: 'electronics', price: 129000, stock: 40 });
});

test('không tồn tại → 404', async () => {
  const res = await t.api('GET', '/products/999');
  assert.equal(res.status, 404);
  assert.deepEqual(res.body, { error: 'Product not found' });
});

test('id không phải số nguyên dương → 400', async () => {
  for (const id of ['abc', '0', '-3', '1.5', '1%20OR%201=1']) {
    const res = await t.api('GET', `/products/${id}`);
    assert.equal(res.status, 400, `id = ${id}`);
  }
});
