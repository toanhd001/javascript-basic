---
id: be-api-database
snippetHelpers: ./_api-db-helpers.js
title: API + Database
---
Ghép hai mảnh lại: handler nhận request → truy vấn database → trả JSON. Trong bài này, mỗi handler có sẵn:

- `query(sql, params)` → mảng object (cho SELECT)
- `execute(sql, params)` → `{ changes, lastInsertId }` (cho INSERT/UPDATE/DELETE)
- `db.exec("BEGIN")`, `db.exec("COMMIT")`, `db.exec("ROLLBACK")` cho transaction

Chúng mô phỏng thư viện thật: `pg` (PostgreSQL), `mysql2`, `better-sqlite3` đều có API tương tự.

```js run
const app = createApp();

app.get("/products/:id", (req, res) => {
  const rows = query("SELECT id, name, price, stock FROM products WHERE id = ?", [Number(req.params.id)]);
  if (rows.length === 0) return res.status(404).json({ error: "Product not found" });
  res.json(rows[0]);
});

(async () => {
  console.log(await request(app, { path: "/products/3" }));
  console.log(await request(app, { path: "/products/404" }));
})();
```

## 1. SQL injection — lỗ hổng số một của backend

**Không bao giờ** ghép input của người dùng vào chuỗi SQL:

```js run
const app = createApp();

app.get("/login-unsafe", (req, res) => {
  const email = req.query.email;
  const sql = "SELECT id, name FROM users WHERE email = '" + email + "'";
  console.log("SQL thực sự chạy:", sql);
  res.json(query(sql));
});

(async () => {
  const attack = await request(app, { path: "/login-unsafe?email=" + encodeURIComponent("x' OR '1'='1") });
  console.log("Kẻ tấn công nhận được", attack.body.length, "người dùng!");
})();
```

Input `x' OR '1'='1` biến điều kiện thành `email = 'x' OR '1'='1'` — luôn đúng. Kẻ tấn công còn có thể `UNION SELECT` để đọc bảng mật khẩu, hoặc xoá dữ liệu.

**Cách đúng: tham số hoá (prepared statement / placeholder)** — gửi câu SQL và dữ liệu **riêng rẽ**; database không bao giờ hiểu dữ liệu là code:

```js
query("SELECT id, name FROM users WHERE email = ?", [email]);   // SQLite, MySQL
// PostgreSQL (pg):  client.query("... WHERE email = $1", [email])
```

ORM (Prisma, TypeORM, Sequelize; JPA/Hibernate bên Java) tham số hoá tự động — nhưng các hàm "raw query" của chúng vẫn có thể bị injection nếu bạn tự ghép chuỗi.

## 2. Vấn đề N+1 query

```js
// Lấy 50 đơn hàng → 1 truy vấn
const orders = query("SELECT * FROM orders WHERE user_id = ?", [userId]);
for (const o of orders) {
  // ... rồi mỗi đơn lại 1 truy vấn → tổng 1 + 50 = 51 truy vấn
  o.items = query("SELECT * FROM order_items WHERE order_id = ?", [o.id]);
}
```

Mỗi truy vấn tốn một vòng đi-về mạng tới database (~0,5–2 ms trong cùng datacenter). 51 truy vấn → API chậm hàng chục lần, và tệ hơn khi dữ liệu lớn dần. Đây là lỗi hiệu năng **phổ biến nhất** với ORM (lazy loading).

Cách sửa: lấy hết trong **một** truy vấn với `JOIN`, hoặc **hai** truy vấn với `WHERE order_id IN (...)`, rồi gom nhóm trong code.

## 3. Transaction trong code

```js
db.exec("BEGIN");
try {
  // ... nhiều câu lệnh
  db.exec("COMMIT");
} catch (err) {
  db.exec("ROLLBACK");
  throw err;
}
```

Mọi `return` sớm (VD trả 404 giữa chừng) cũng phải `ROLLBACK` — nếu không transaction treo, giữ khoá, và các request sau bị kẹt. Thư viện thật thường có helper kiểu `db.transaction(async (tx) => {...})` tự lo việc này.

## 4. Connection pool

Mở kết nối database tốn kém (bắt tay TCP, xác thực). Server giữ sẵn một **pool** vài chục kết nối và cho các request mượn. Pool quá nhỏ → request xếp hàng chờ; quá lớn → database quá tải. Một transaction quên `COMMIT/ROLLBACK` sẽ "giữ" một kết nối mãi mãi — đủ nhiều lần là cả API treo.

## Câu hỏi tại sao

- Đã escape dấu nháy (`'` → `''`) thì có an toàn như tham số hoá không? Tại sao người ta vẫn khuyên dùng placeholder?
- JOIN một lần trả về dữ liệu lặp lại (thông tin đơn hàng lặp ở mỗi dòng sản phẩm), còn cách "hai truy vấn + IN" thì không. Khi nào chọn cách nào?
- ORM giúp gì và giấu gì? Khi phỏng vấn được hỏi "JPA N+1 là gì, sửa thế nào?" bạn sẽ trả lời ra sao? (Gợi ý: fetch join, batch size, EntityGraph.)
