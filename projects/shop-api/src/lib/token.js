import { createHmac, timingSafeEqual } from 'node:crypto';

// JWT HS256 tự viết ĐỂ HỌC — token tạo ra đọc được trên jwt.io.
// Dự án thật: dùng thư viện đã được kiểm định (jose, jsonwebtoken).
// Nhớ: payload chỉ được mã hoá base64url, AI CŨNG ĐỌC ĐƯỢC. Chữ ký chỉ chống sửa đổi.

const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
const sign = (data, secret) => createHmac('sha256', secret).update(data).digest();

export function signToken(payload, secret, { expiresInSec = 3600, now = Date.now() } = {}) {
  const iat = Math.floor(now / 1000);
  const data = encode({ alg: 'HS256', typ: 'JWT' }) + '.' + encode({ ...payload, iat, exp: iat + expiresInSec });
  return data + '.' + sign(data, secret).toString('base64url');
}

// Trả về payload nếu token hợp lệ và còn hạn, ngược lại null
export function verifyToken(token, secret, { now = Date.now() } = {}) {
  const parts = String(token).split('.');
  if (parts.length !== 3) return null;
  const [headerPart, payloadPart, signaturePart] = parts;
  const expected = sign(headerPart + '.' + payloadPart, secret);
  const actual = Buffer.from(signaturePart, 'base64url');
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null;
  try {
    const header = JSON.parse(Buffer.from(headerPart, 'base64url').toString());
    const payload = JSON.parse(Buffer.from(payloadPart, 'base64url').toString());
    // Chỉ chấp nhận đúng thuật toán mình dùng — chống tấn công đổi "alg" thành "none"
    if (header.alg !== 'HS256') return null;
    if (typeof payload.exp !== 'number' || payload.exp * 1000 <= now) return null;
    return payload;
  } catch {
    return null;
  }
}
