---
id: be-rest-api
snippetHelpers: ./_api-helpers.js
title: Thiết kế REST API
---
REST là **quy ước** tổ chức API quanh **tài nguyên** (resource): URL là **danh từ**, method HTTP là **động từ**.

## Quy ước đặt URL

| Hành động | Method + URL | Thành công |
| --- | --- | --- |
| Lấy danh sách | `GET /todos` | `200` + mảng |
| Lấy một | `GET /todos/42` | `200` + object, hoặc `404` |
| Tạo mới | `POST /todos` | `201` + object vừa tạo |
| Sửa một phần | `PATCH /todos/42` | `200` + object sau khi sửa |
| Thay thế toàn bộ | `PUT /todos/42` | `200` |
| Xoá | `DELETE /todos/42` | `204` (không body) |
| Tài nguyên con | `GET /users/7/orders` | `200` |

- ✅ `GET /users/7/orders` — ❌ `GET /getOrdersOfUser?id=7`
- ✅ danh từ số nhiều `/products` — ❌ động từ `/createProduct`
- Lọc, sắp xếp, phân trang đặt trong **query**: `GET /products?category=books&sort=-price&page=2`

## Viết API với mini-Express

Các bài trong chặng này dùng một framework mini có **cú pháp giống hệt Express** (thư viện backend phổ biến nhất của Node.js), chạy ngay trong trình duyệt:

```js run
const app = createApp();
const users = [{ id: 1, name: "An" }, { id: 2, name: "Jisoo" }];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);        // params luôn là CHUỖI
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.post("/users", (req, res) => {
  const { name } = req.body || {};
  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "name is required" });
  }
  const user = { id: users.length + 1, name: name.trim() };
  users.push(user);
  res.status(201).json(user);
});

(async () => {
  console.log(await request(app, { path: "/users/2" }));
  console.log(await request(app, { path: "/users/99" }));
  console.log(await request(app, { method: "POST", path: "/users", body: { name: "  Minho " } }));
  console.log(await request(app, { method: "POST", path: "/users", body: {} }));
})();
```

`request(app, {...})` giả lập một HTTP request (giống thư viện test `supertest`). Trong Express thật, bạn chỉ cần thêm `app.listen(3000)`.

> **`return res.status(...)...`** — chữ `return` rất quan trọng. Thiếu nó, code chạy tiếp xuống dưới và cố gửi response lần thứ hai → lỗi "Cannot set headers after they are sent" (lỗi Express phổ biến nhất của người mới).

## Validate input: đừng bao giờ tin client

Client có thể gửi **bất cứ thứ gì**: thiếu trường, sai kiểu (`"price": "abc"`), chuỗi rỗng, số âm, chuỗi 10MB... Kiểm tra **ở server**, kể cả khi frontend đã kiểm tra (frontend có thể bị bỏ qua bằng `curl`).

Trả lỗi có **cấu trúc nhất quán** để frontend xử lý được:

```json
{ "error": "title must be 1-100 characters" }
```

## Phân trang (pagination)

Không bao giờ trả về "tất cả" — bảng có thể có 10 triệu dòng.

- **Offset**: `?page=3&limit=20` → bỏ qua 40 dòng đầu. Dễ làm, nhảy trang được; nhưng chậm ở trang sâu và bị lệch khi có dữ liệu mới chen vào.
- **Cursor**: `?after=1543&limit=20` → lấy các dòng có id > 1543. Nhanh và ổn định; nhưng không nhảy thẳng tới trang 50 được. Feed vô hạn (Instagram, Kakao) dùng kiểu này.

## Câu hỏi tại sao

- Tại sao `POST` tạo mới trả về `201` kèm object vừa tạo (có `id`), thay vì chỉ `200 {"ok": true}`?
- Validate ở frontend rồi, tại sao server vẫn phải validate? Còn ngược lại — có validate ở server rồi thì frontend có cần nữa không?
- REST không phải lựa chọn duy nhất. GraphQL và gRPC giải quyết vấn đề gì mà REST làm không tốt? (Gợi ý: over-fetching, nhiều round-trip, giao tiếp giữa các service.)
