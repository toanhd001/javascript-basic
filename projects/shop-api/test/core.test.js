// Các tính năng đã viết sẵn (làm mẫu). Những test này phải qua ngay từ đầu.
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { setupTestServer } from './helpers.js';
import { signToken } from '../src/lib/token.js';

const t = setupTestServer();

describe('hệ thống', () => {
  test('GET /health kiểm tra được database', async () => {
    const res = await t.api('GET', '/health');
    assert.equal(res.status, 200);
    assert.deepEqual(res.body, { status: 'ok', db: 'up' });
  });

  test('route không tồn tại → 404 JSON', async () => {
    const res = await t.api('GET', '/khong-co');
    assert.equal(res.status, 404);
    assert.deepEqual(res.body, { error: 'Not Found' });
  });

  test('body JSON hỏng → 400', async () => {
    const res = await t.api('POST', '/auth/register', { rawBody: '{"email": ' });
    assert.equal(res.status, 400);
    assert.deepEqual(res.body, { error: 'Invalid JSON body' });
  });

  test('không lộ header X-Powered-By', async () => {
    const res = await t.api('GET', '/health');
    assert.equal(res.headers.get('x-powered-by'), null);
  });
});

describe('POST /auth/register', () => {
  test('tạo user, email được chuẩn hoá chữ thường, mật khẩu được băm', async () => {
    const res = await t.api('POST', '/auth/register', { body: { email: '  Minho@Example.COM ', name: 'Minho', password: 'super-secret-1' } });
    assert.equal(res.status, 201);
    assert.deepEqual(res.body, { id: 4, email: 'minho@example.com', name: 'Minho', role: 'user' });
    const [row] = await t.sql('SELECT password_hash FROM users WHERE id = 4');
    assert.match(row.password_hash, /^scrypt\$/);
    assert.ok(!row.password_hash.includes('super-secret-1'));
  });

  test('email đã tồn tại (khác hoa thường) → 409', async () => {
    const res = await t.api('POST', '/auth/register', { body: { email: 'AN@example.com', name: 'An 2', password: 'password123' } });
    assert.equal(res.status, 409);
    assert.deepEqual(res.body, { error: 'Email already registered' });
  });

  test('dữ liệu không hợp lệ → 400', async () => {
    for (const body of [{}, { email: 'khong-phai-email', name: 'A', password: 'password123' }, { email: 'a@b.co', name: 'A', password: 'ngan' }, { email: 'a@b.co', name: '', password: 'password123' }]) {
      const res = await t.api('POST', '/auth/register', { body });
      assert.equal(res.status, 400, JSON.stringify(body));
    }
  });
});

describe('xác thực (GET /me)', () => {
  test('không có token → 401', async () => {
    const res = await t.api('GET', '/me');
    assert.equal(res.status, 401);
  });

  test('token hợp lệ → thông tin user', async () => {
    const res = await t.api('GET', '/me', { token: t.AN() });
    assert.equal(res.status, 200);
    assert.deepEqual(res.body, { id: 1, email: 'an@example.com', name: 'An', role: 'user' });
  });

  test('token hết hạn → 401', async () => {
    const expired = signToken({ sub: 1, role: 'user' }, t.config.jwtSecret, { expiresInSec: 60, now: Date.now() - 3600_000 });
    assert.equal((await t.api('GET', '/me', { token: expired })).status, 401);
  });

  test('token bị sửa payload (tự nâng quyền admin) → 401', async () => {
    const [h, , s] = t.AN().split('.');
    const forged = Buffer.from(JSON.stringify({ sub: 1, role: 'admin', exp: 9999999999 })).toString('base64url');
    assert.equal((await t.api('GET', '/me', { token: `${h}.${forged}.${s}` })).status, 401);
  });

  test('token ký bằng secret khác → 401', async () => {
    const other = signToken({ sub: 1, role: 'admin' }, 'secret-cua-ke-tan-cong');
    assert.equal((await t.api('GET', '/me', { token: other })).status, 401);
  });
});

describe('POST /products (chỉ admin)', () => {
  const product = { name: 'Monitor 27', category: 'electronics', price: 289000, stock: 10 };

  test('user thường → 403', async () => {
    assert.equal((await t.api('POST', '/products', { token: t.AN(), body: product })).status, 403);
  });

  test('admin → 201 + Location', async () => {
    const res = await t.api('POST', '/products', { token: t.ADMIN(), body: product });
    assert.equal(res.status, 201);
    assert.deepEqual(res.body, { id: 11, ...product });
    assert.equal(res.headers.get('location'), '/products/11');
  });

  test('giá âm → 400', async () => {
    assert.equal((await t.api('POST', '/products', { token: t.ADMIN(), body: { ...product, price: -1 } })).status, 400);
  });
});

describe('POST /orders/:id/cancel (mẫu transaction)', () => {
  test('An huỷ đơn pending của mình → hàng được trả về kho', async () => {
    const res = await t.api('POST', '/orders/2/cancel', { token: t.AN() });
    assert.equal(res.status, 200);
    assert.deepEqual(res.body, { id: 2, status: 'cancelled' });
    const [p] = await t.sql('SELECT stock FROM products WHERE id = 5');
    assert.equal(p.stock, 26);
  });

  test('huỷ hai lần → lần hai 409, kho chỉ được cộng một lần', async () => {
    await t.api('POST', '/orders/2/cancel', { token: t.AN() });
    const again = await t.api('POST', '/orders/2/cancel', { token: t.AN() });
    assert.equal(again.status, 409);
    const [p] = await t.sql('SELECT stock FROM products WHERE id = 5');
    assert.equal(p.stock, 26);
  });

  test('hai request huỷ ĐỒNG THỜI → chỉ một thành công (nhờ SELECT ... FOR UPDATE)', async () => {
    const results = await Promise.all([1, 2, 3].map(() => t.api('POST', '/orders/2/cancel', { token: t.AN() })));
    assert.deepEqual(results.map((r) => r.status).sort(), [200, 409, 409]);
    const [p] = await t.sql('SELECT stock FROM products WHERE id = 5');
    assert.equal(p.stock, 26);
  });

  test('huỷ đơn của người khác → 403; đơn đã thanh toán → 409; không tồn tại → 404', async () => {
    assert.equal((await t.api('POST', '/orders/2/cancel', { token: t.JISOO() })).status, 403);
    assert.equal((await t.api('POST', '/orders/1/cancel', { token: t.AN() })).status, 409);
    assert.equal((await t.api('POST', '/orders/999/cancel', { token: t.AN() })).status, 404);
  });
});
