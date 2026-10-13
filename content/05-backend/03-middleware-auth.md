---
id: be-middleware-auth
snippetHelpers: ./_api-helpers.js
title: Middleware, xác thực và xử lý lỗi
---
## Middleware — dây chuyền xử lý request

Middleware là hàm `(req, res, next)` chạy **trước** handler. Nó có thể: đọc/sửa `req`, trả response luôn (chặn request), hoặc gọi `next()` để chuyển cho bước tiếp theo.

```text
request → [ghi log] → [đọc JSON body] → [xác thực] → [kiểm tra quyền] → handler → response
```

```js run
const app = createApp();

app.use((req, res, next) => {                      // chạy cho MỌI request
  const start = Date.now();
  next();
  console.log(req.method, req.path, "→", res.statusCode, `(${Date.now() - start}ms)`);
});

function requireJson(req, res, next) {             // middleware cho từng route
  if (req.headers["content-type"] !== "application/json") {
    return res.status(415).json({ error: "Content-Type must be application/json" });
  }
  next();
}

app.post("/echo", requireJson, (req, res) => res.json({ youSent: req.body }));

(async () => {
  console.log((await request(app, { method: "POST", path: "/echo", body: { a: 1 } })).status);
  const ok = await request(app, { method: "POST", path: "/echo", headers: { "Content-Type": "application/json" }, body: { a: 1 } });
  console.log(ok.status, ok.body);
})();
```

## Xác thực (authentication) vs phân quyền (authorization)

- **Authentication** (인증): bạn là **ai**? → thất bại trả `401`.
- **Authorization** (인가): bạn có **được phép** làm việc này không? → thất bại trả `403`.

### Session (cookie) vs Token (JWT)

| | Session + cookie | JWT (token tự chứa thông tin) |
| --- | --- | --- |
| Server lưu gì | bảng session (bộ nhớ / Redis / DB) | không cần lưu gì |
| Client gửi | cookie `sid=...` (trình duyệt tự gửi) | header `Authorization: Bearer <jwt>` |
| Đăng xuất / thu hồi ngay | dễ: xoá session | khó: token còn hạn vẫn dùng được → cần blacklist hoặc hạn ngắn + refresh token |
| Scale nhiều server | cần kho session chung (Redis) | dễ: server nào cũng tự kiểm chữ ký |
| Rủi ro hay gặp | CSRF (cookie tự gửi) | XSS lấy token nếu lưu ở localStorage |

JWT gồm 3 phần `header.payload.signature` mã hoá base64url. Payload **không được mã hoá**, ai cũng đọc được — chỉ có **chữ ký** chống sửa đổi. Đừng bao giờ để mật khẩu hay dữ liệu nhạy cảm trong JWT.

```js run
// Payload của JWT chỉ là base64 — đọc được không cần khoá bí mật!
const jwt = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjcsInJvbGUiOiJ1c2VyIn0.signature";
const payload = jwt.split(".")[1];
console.log(JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/"))));
```

### Mật khẩu: không bao giờ lưu dạng thô

Lưu **hash** bằng thuật toán **chậm có salt**: bcrypt, scrypt, argon2. Không dùng MD5/SHA-256 trơn (quá nhanh → brute-force được hàng tỉ lần/giây; thiếu salt → bị tra bảng rainbow).

## Xử lý lỗi tập trung

Thay vì `try/catch` trong mọi handler, ném lỗi và để **một** error middleware `(err, req, res, next)` (4 tham số) quyết định response:

- Lỗi "dự kiến" (404, 400, 409...) → trả đúng status và thông điệp.
- Lỗi bất ngờ (bug) → `500` với thông điệp **chung chung** và **ghi log** chi tiết ở server. Đừng trả stack trace hay câu SQL cho client — đó là thông tin cho kẻ tấn công.

## CORS

Trình duyệt chặn JavaScript ở `https://shop.kr` gọi API ở `https://api.other.kr` trừ khi server API trả header `Access-Control-Allow-Origin` cho phép. CORS là cơ chế **của trình duyệt** bảo vệ người dùng — `curl` hay server gọi server không bị ảnh hưởng. Lỗi CORS luôn sửa ở **phía server API**.

## Câu hỏi tại sao

- Thứ tự middleware có quan trọng không? Chuyện gì xảy ra nếu đặt middleware xác thực **sau** route handler?
- Tại sao lỗi 500 không nên trả nguyên `err.message` cho client? Cho một ví dụ thông điệp lỗi làm lộ thông tin.
- Với ứng dụng web thông thường (một frontend, một backend), bạn chọn session hay JWT? Tại sao? Còn với app mobile + nhiều microservice thì sao?
