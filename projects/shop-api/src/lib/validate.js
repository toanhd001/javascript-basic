import { badRequest } from '../errors.js';

// Query string và params luôn là CHUỖI. Hàm này chuyển "12" → 12, và từ chối "1.5", "abc", "-1", "".
export function parseIntParam(value, { name, min = 1, max = Number.MAX_SAFE_INTEGER, defaultValue } = {}) {
  if (value === undefined && defaultValue !== undefined) return defaultValue;
  if (typeof value !== 'string' || !/^-?\d+$/.test(value)) throw badRequest(`${name} must be an integer`);
  const n = Number(value);
  if (n < min || n > max) throw badRequest(`${name} must be between ${min} and ${max}`);
  return n;
}

export function requireString(value, { name, min = 1, max = 200 } = {}) {
  if (typeof value !== 'string') throw badRequest(`${name} must be a string`);
  const trimmed = value.trim();
  if (trimmed.length < min || trimmed.length > max) throw badRequest(`${name} must be ${min}-${max} characters`);
  return trimmed;
}

export function requireInt(value, { name, min = 1, max = Number.MAX_SAFE_INTEGER } = {}) {
  if (!Number.isInteger(value) || value < min || value > max) {
    throw badRequest(`${name} must be an integer between ${min} and ${max}`);
  }
  return value;
}

export function isEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}
