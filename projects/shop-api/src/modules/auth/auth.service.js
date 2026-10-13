import { hashPassword, verifyPassword } from '../../lib/password.js'; // verifyPassword: dùng ở Nhiệm vụ 3
import { signToken } from '../../lib/token.js';                         // dùng ở Nhiệm vụ 3
import { badRequest, conflict, notFound, unauthorized, notImplemented } from '../../errors.js';
import { isEmail, requireString } from '../../lib/validate.js';

const publicUser = (row) => ({ id: row.id, email: row.email, name: row.name, role: row.role });

// MẪU: validate → băm mật khẩu → INSERT ... RETURNING → bắt lỗi trùng email (mã 23505)
export async function register(db, body = {}) {
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!isEmail(email)) throw badRequest('email is invalid');
  const name = requireString(body.name, { name: 'name', max: 100 });
  if (typeof body.password !== 'string' || body.password.length < 8 || body.password.length > 200) {
    throw badRequest('password must be 8-200 characters');
  }
  const passwordHash = await hashPassword(body.password);
  try {
    const { rows } = await db.query(
      'INSERT INTO users (email, name, password_hash) VALUES ($1, $2, $3) RETURNING id, email, name, role',
      [email, name, passwordHash]
    );
    return publicUser(rows[0]);
  } catch (err) {
    // Không "SELECT xem email có chưa rồi mới INSERT": hai request đồng thời sẽ cùng lọt qua.
    // Để ràng buộc UNIQUE của database quyết định, rồi dịch lỗi của nó.
    if (err.code === '23505') throw conflict('Email already registered');
    throw err;
  }
}

/*
 * NHIỆM VỤ 3 — Đăng nhập
 * Trả về { token, user: { id, email, name, role } }.
 *  1. Thiếu email hoặc password (không phải chuỗi) → throw badRequest('email and password are required')
 *  2. Tìm user theo email KHÔNG phân biệt hoa thường (email được lưu dạng chữ thường lúc đăng ký)
 *  3. Không có user, HOẶC sai mật khẩu → throw unauthorized('Invalid email or password')
 *     (cùng một thông báo cho cả hai: đừng cho kẻ tấn công biết email nào tồn tại)
 *  4. Tạo token: signToken({ sub: user.id, role: user.role }, config.jwtSecret, { expiresInSec: config.tokenTtlSec })
 * Dùng: db.query(...), verifyPassword(plain, hash), signToken(...)
 */
export async function login(db, config, body = {}) {
  throw notImplemented('NHIỆM VỤ 3 (src/modules/auth/auth.service.js → login)');
}

export async function getUser(db, id) {
  const { rows } = await db.query('SELECT id, email, name, role FROM users WHERE id = $1', [id]);
  if (rows.length === 0) throw notFound('User not found');
  return publicUser(rows[0]);
}
