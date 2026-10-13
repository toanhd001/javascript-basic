import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);
const KEY_LENGTH = 32;

// Lưu dạng "scrypt$<salt hex>$<hash hex>".
// scrypt cố tình CHẬM và tốn bộ nhớ → brute-force đắt. Salt ngẫu nhiên → hai người cùng mật khẩu có hash khác nhau.
export async function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = await scrypt(password, salt, KEY_LENGTH);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

export async function verifyPassword(password, stored) {
  const [algorithm, saltHex, hashHex] = String(stored).split('$');
  if (algorithm !== 'scrypt' || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, 'hex');
  const actual = await scrypt(String(password), Buffer.from(saltHex, 'hex'), expected.length);
  // So sánh thời gian hằng số: không để lộ "đúng được bao nhiêu byte" qua thời gian phản hồi
  return timingSafeEqual(actual, expected);
}
