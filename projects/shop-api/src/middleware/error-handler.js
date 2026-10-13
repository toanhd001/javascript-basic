import { HttpError } from '../errors.js';

// Mã lỗi của PostgreSQL (https://www.postgresql.org/docs/current/errcodes-appendix.html)
const PG_ERRORS = {
  '23505': [409, 'Duplicate value'],                 // unique_violation
  '23503': [409, 'Related resource missing or in use'], // foreign_key_violation
  '23514': [400, 'Value violates a constraint'],     // check_violation
  '22P02': [400, 'Invalid input']                    // invalid_text_representation
};

export function notFoundHandler(req, res) {
  res.status(404).json({ error: 'Not Found' });
}

// 4 tham số → Express biết đây là error handler. Express 5 tự chuyển lỗi của handler async tới đây.
export function errorHandler(config) {
  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    if (err instanceof HttpError) {
      return res.status(err.status).json(err.details ? { error: err.message, details: err.details } : { error: err.message });
    }
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
    if (err.code && PG_ERRORS[err.code]) {
      const [status, message] = PG_ERRORS[err.code];
      return res.status(status).json({ error: message });
    }
    // Lỗi không lường trước = bug: ghi log đầy đủ ở server, trả thông điệp chung chung cho client
    console.error(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  };
}
