---
id: be-http
title: HTTP — một request đi như thế nào
---
Mọi API bạn viết đều nói chuyện bằng **HTTP**. Hiểu HTTP ở mức "nhìn thấy từng byte" giúp bạn debug nhanh hơn rất nhiều so với chỉ biết dùng framework.

## Request và response chỉ là văn bản

Khi frontend gọi `fetch("/api/users/7")`, thứ thực sự đi qua mạng (HTTP/1.1) là một đoạn **chữ**:

```text
GET /api/users/7?fields=name HTTP/1.1
Host: shop.example.com
Authorization: Bearer abc123
Accept: application/json

```

Server trả về cũng là chữ:

```text
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 27

{"id":7,"name":"Jisoo"}
```

Cấu trúc luôn là: **dòng đầu** → các dòng **header** `Tên: giá trị` → **một dòng trống** → **body** (có thể rỗng). Dòng phân cách là `\r\n`.

## Method: bạn muốn làm gì

| Method | Ý nghĩa | Có body? | Safe | Idempotent |
| --- | --- | --- | --- | --- |
| `GET` | đọc tài nguyên | không | ✔ | ✔ |
| `POST` | tạo mới / hành động | có | ✘ | ✘ |
| `PUT` | thay thế **toàn bộ** tài nguyên | có | ✘ | ✔ |
| `PATCH` | sửa **một phần** | có | ✘ | ✘ (thường) |
| `DELETE` | xoá | thường không | ✘ | ✔ |

- **Safe**: không làm thay đổi dữ liệu trên server.
- **Idempotent** (멱등성): gọi 1 lần hay 10 lần thì **trạng thái cuối** như nhau. `DELETE /orders/5` lần thứ hai không xoá thêm gì. `POST /orders` hai lần tạo **hai** đơn hàng.

> **Tại sao idempotent quan trọng?** Mạng chập chờn → client không biết request đã tới server chưa → **gửi lại**. Với method idempotent, gửi lại luôn an toàn. Với `POST` thanh toán, gửi lại có thể **trừ tiền hai lần** — đó là lý do các API thanh toán (Toss, Stripe...) yêu cầu header `Idempotency-Key`.

## Status code: kết quả ra sao

| Nhóm | Ý nghĩa | Hay dùng |
| --- | --- | --- |
| 2xx | thành công | `200 OK`, `201 Created` (tạo mới), `204 No Content` (xoá xong, không có body) |
| 3xx | chuyển hướng | `301` (vĩnh viễn), `302`, `304 Not Modified` (dùng cache) |
| 4xx | **client** sai | `400` dữ liệu không hợp lệ, `401` chưa đăng nhập, `403` không có quyền, `404` không tìm thấy, `409` xung đột, `422`, `429` gửi quá nhiều |
| 5xx | **server** sai | `500` lỗi code, `502`/`503` server phía sau chết/quá tải, `504` timeout |

> **401 vs 403** là câu hỏi phỏng vấn kinh điển. `401 Unauthorized` thực chất nghĩa là "**chưa xác thực**" (không biết bạn là ai — thiếu/sai token). `403 Forbidden` là "biết bạn là ai, nhưng bạn **không có quyền**".

## Header hay gặp

- `Content-Type`: kiểu dữ liệu của body (`application/json`, `text/html`, `multipart/form-data`).
- `Content-Length`: độ dài body tính bằng **byte** (không phải số ký tự!).
- `Authorization`: thông tin xác thực, thường là `Bearer <token>`.
- `Cookie` / `Set-Cookie`: trình duyệt tự gửi kèm cookie mỗi request.
- `Cache-Control`, `ETag`: điều khiển cache.

```js run
// Số ký tự khác số byte: tiếng Việt, tiếng Hàn dùng nhiều byte trong UTF-8
for (const s of ["hello", "Xin chào", "안녕하세요"]) {
  const bytes = new TextEncoder().encode(s).length;
  console.log(JSON.stringify(s), "→", s.length, "ký tự,", bytes, "byte");
}
```

Ghi sai `Content-Length` (dùng `.length` của chuỗi) là bug thật: client đọc thiếu/thừa dữ liệu.

## URL và query string

```js run
const url = new URL("https://shop.example.com/api/products?category=books&page=2&q=clean%20code");
console.log(url.pathname);                       // "/api/products"
console.log(url.searchParams.get("category"));   // "books"
console.log(Number(url.searchParams.get("page"))); // 2 — query luôn là CHUỖI, nhớ đổi kiểu
console.log(url.searchParams.get("q"));          // "clean code" — đã giải mã %20
console.log(Object.fromEntries(url.searchParams));
```

## HTTP là **stateless**

Mỗi request độc lập; server **không tự nhớ** request trước. Muốn "nhớ" người dùng đã đăng nhập, client phải gửi kèm thứ gì đó mỗi lần (cookie chứa session id, hoặc token). Nhờ stateless, ta có thể đặt 10 server sau một load balancer và request nào tới server nào cũng được — đó là nền tảng của **scale-out** (수평 확장).

## HTTPS

HTTPS = HTTP chạy bên trong kết nối **TLS** được mã hoá. Nội dung (kể cả header `Authorization`, cookie) không đọc được trên đường truyền; chứng chỉ (certificate) giúp client chắc chắn đang nói chuyện với đúng server.

## Câu hỏi tại sao

- Tại sao `PUT` idempotent còn `PATCH` thì thường không? Cho ví dụ một `PATCH` không idempotent. (Gợi ý: `{"op": "increment", "field": "stock"}`.)
- Tại sao không nên đặt dữ liệu nhạy cảm (mật khẩu, token) trong **query string** dù đã dùng HTTPS? (Gợi ý: log server, lịch sử trình duyệt, header Referer.)
- HTTP stateless giúp scale-out dễ. Vậy session lưu trong bộ nhớ của một server thì phá vỡ điều gì, và giải pháp là gì?
