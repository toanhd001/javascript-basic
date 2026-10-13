// NHIỆM VỤ 2 — GET /products: lọc, sắp xếp, phân trang
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setupTestServer } from './helpers.js';

const t = setupTestServer();
const ids = (res) => res.body.data.map((p) => p.id);

test('mặc định: page=1, limit=10, sắp theo id', async () => {
  const res = await t.api('GET', '/products');
  assert.equal(res.status, 200);
  assert.deepEqual(ids(res), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.equal(res.body.page, 1);
  assert.equal(res.body.limit, 10);
  assert.equal(res.body.total, 10);
  assert.deepEqual(res.body.data[0], { id: 1, name: 'Laptop Pro 14', category: 'electronics', price: 1890000, stock: 5 });
});

test('total là SỐ, không phải chuỗi (COUNT(*) trả về bigint)', async () => {
  const res = await t.api('GET', '/products?category=books');
  assert.equal(typeof res.body.total, 'number');
  assert.equal(res.body.total, 2);
  assert.deepEqual(ids(res), [5, 6]);
});

test('q tìm trong tên, không phân biệt hoa thường', async () => {
  assert.deepEqual(ids(await t.api('GET', '/products?q=key')), [3]);
  assert.deepEqual(ids(await t.api('GET', '/products?q=KEY')), [3]);
});

test('q chứa % hoặc _ được hiểu là ký tự thường, không phải ký tự đại diện', async () => {
  assert.equal((await t.api('GET', '/products?q=%25')).body.total, 0);
  assert.equal((await t.api('GET', '/products?q=_')).body.total, 0);
});

test('lọc theo khoảng giá', async () => {
  assert.deepEqual(ids(await t.api('GET', '/products?minPrice=30000&maxPrice=50000')), [2, 5, 6]);
});

test('sắp xếp theo giá tăng / giảm, và theo tên', async () => {
  assert.deepEqual(ids(await t.api('GET', '/products?sort=price_asc&limit=3')), [8, 7, 5]);
  assert.deepEqual(ids(await t.api('GET', '/products?sort=price_desc&limit=2&page=2')), [10, 3]);
  assert.deepEqual(ids(await t.api('GET', '/products?sort=name&limit=3')), [5, 7, 6]);
});

test('bằng giá thì xếp tiếp theo id', async () => {
  await t.sql("INSERT INTO products (name, category, price, stock) VALUES ('Mouse Pad', 'electronics', 35000, 9)");
  assert.deepEqual(ids(await t.api('GET', '/products?sort=price_asc&page=2&limit=3')), [2, 11, 6]);
});

test('kết hợp nhiều điều kiện, total đếm theo bộ lọc', async () => {
  const res = await t.api('GET', '/products?category=electronics&sort=price_desc&limit=2');
  assert.deepEqual(ids(res), [1, 3]);
  assert.equal(res.body.total, 4);
});

test('trang vượt quá dữ liệu → mảng rỗng, total vẫn đúng', async () => {
  const res = await t.api('GET', '/products?page=5&limit=3');
  assert.deepEqual(res.body, { data: [], page: 5, limit: 3, total: 10 });
});

test('tham số không hợp lệ → 400', async () => {
  for (const q of ['page=0', 'limit=51', 'limit=abc', 'page=1.5', 'minPrice=-1', 'maxPrice=x']) {
    assert.equal((await t.api('GET', '/products?' + q)).status, 400, q);
  }
  const res = await t.api('GET', '/products?sort=random');
  assert.equal(res.status, 400);
  assert.deepEqual(res.body, { error: 'sort must be one of: id, price_asc, price_desc, name' });
});

test('chuỗi tấn công SQL injection không có tác dụng', async () => {
  const res = await t.api('GET', '/products?category=' + encodeURIComponent("x' OR '1'='1"));
  assert.equal(res.status, 200);
  assert.equal(res.body.total, 0);
  const res2 = await t.api('GET', '/products?sort=' + encodeURIComponent('price; DROP TABLE products'));
  assert.equal(res2.status, 400);
  assert.equal((await t.sql('SELECT COUNT(*)::int AS n FROM products'))[0].n, 10);
});
