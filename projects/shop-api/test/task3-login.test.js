// NHIỆM VỤ 3 — POST /auth/login
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setupTestServer } from './helpers.js';
import { verifyToken } from '../src/lib/token.js';

const t = setupTestServer();

test('đúng email + mật khẩu → token + user', async () => {
  const res = await t.api('POST', '/auth/login', { body: { email: 'an@example.com', password: 'password123' } });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body.user, { id: 1, email: 'an@example.com', name: 'An', role: 'user' });
  const payload = verifyToken(res.body.token, t.config.jwtSecret);
  assert.ok(payload, 'token phải ký bằng config.jwtSecret');
  assert.equal(payload.sub, 1);
  assert.equal(payload.role, 'user');
  assert.equal(payload.exp - payload.iat, t.config.tokenTtlSec);
});

test('token dùng được cho GET /me', async () => {
  const login = await t.api('POST', '/auth/login', { body: { email: 'admin@example.com', password: 'password123' } });
  const me = await t.api('GET', '/me', { token: login.body.token });
  assert.equal(me.status, 200);
  assert.equal(me.body.role, 'admin');
});

test('email không phân biệt hoa thường', async () => {
  const res = await t.api('POST', '/auth/login', { body: { email: 'JISOO@Example.com', password: 'password123' } });
  assert.equal(res.status, 200);
  assert.equal(res.body.user.id, 2);
});

test('sai mật khẩu và email không tồn tại → cùng một thông báo 401', async () => {
  const wrongPassword = await t.api('POST', '/auth/login', { body: { email: 'an@example.com', password: 'sai-mat-khau' } });
  const noUser = await t.api('POST', '/auth/login', { body: { email: 'ai-do@example.com', password: 'password123' } });
  assert.equal(wrongPassword.status, 401);
  assert.equal(noUser.status, 401);
  assert.deepEqual(wrongPassword.body, { error: 'Invalid email or password' });
  assert.deepEqual(noUser.body, wrongPassword.body);
});

test('thiếu trường → 400', async () => {
  for (const body of [{}, { email: 'an@example.com' }, { password: 'password123' }, { email: 1, password: 2 }]) {
    const res = await t.api('POST', '/auth/login', { body });
    assert.equal(res.status, 400, JSON.stringify(body));
    assert.deepEqual(res.body, { error: 'email and password are required' });
  }
});

test('đăng ký rồi đăng nhập bằng tài khoản mới', async () => {
  await t.api('POST', '/auth/register', { body: { email: 'new@example.com', name: 'New', password: 'mat-khau-moi-123' } });
  const res = await t.api('POST', '/auth/login', { body: { email: 'new@example.com', password: 'mat-khau-moi-123' } });
  assert.equal(res.status, 200);
  assert.equal(res.body.user.email, 'new@example.com');
});
