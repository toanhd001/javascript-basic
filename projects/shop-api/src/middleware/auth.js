import { verifyToken } from '../lib/token.js';
import { unauthorized, forbidden } from '../errors.js';

// Đọc "Authorization: Bearer <token>", kiểm chữ ký + hạn → req.user = { id, role }.
// Không truy vấn database: đó là ưu điểm (nhanh, stateless) và nhược điểm (không thu hồi được token ngay) của JWT.
export function requireAuth(config) {
  return (req, res, next) => {
    const header = req.get('authorization') || '';
    if (!header.startsWith('Bearer ')) throw unauthorized();
    const payload = verifyToken(header.slice('Bearer '.length), config.jwtSecret);
    if (!payload) throw unauthorized();
    req.user = { id: payload.sub, role: payload.role };
    next();
  };
}

export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) throw forbidden();
    next();
  };
}
