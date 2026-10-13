// Lỗi "dự kiến" mang theo HTTP status. Error handler (src/middleware/error-handler.js) chuyển nó thành response.
export class HttpError extends Error {
  constructor(status, message, details) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.details = details;
  }
}

export const badRequest = (message, details) => new HttpError(400, message, details);
export const unauthorized = (message = 'Unauthorized') => new HttpError(401, message);
export const forbidden = (message = 'Forbidden') => new HttpError(403, message);
export const notFound = (message = 'Not Found') => new HttpError(404, message);
export const conflict = (message) => new HttpError(409, message);

// Dùng cho các chỗ bạn phải tự viết (xem README: Nhiệm vụ)
export const notImplemented = (task) => new HttpError(501, `Not implemented yet: ${task}`);
