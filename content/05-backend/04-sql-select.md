---
id: be-sql-select
snippetSchema: ./_shop-seed.js
title: SQL cơ bản — SELECT
---
Hầu hết backend lưu dữ liệu trong **cơ sở dữ liệu quan hệ** (PostgreSQL, MySQL, Oracle — ở Hàn MySQL/Oracle rất phổ biến). Dữ liệu nằm trong **bảng** (table) gồm **dòng** (row) và **cột** (column); ta truy vấn bằng **SQL**.

Mọi ví dụ và bài tập từ đây chạy trên **SQLite thật** (biên dịch sang WebAssembly) với dữ liệu một cửa hàng nhỏ:

```text
users        (id, name, email, city, created_at)
products     (id, name, category, price, stock)
orders       (id, user_id → users.id, status, created_at)
order_items  (id, order_id → orders.id, product_id → products.id, quantity, unit_price)
```

Playground có chế độ **SQL** để bạn tự tạo bảng và thử thoải mái.

## SELECT ... FROM ... WHERE

```sql run
SELECT name, price
FROM products
WHERE category = 'books';
```

- Chuỗi dùng **nháy đơn** `'books'`. Nháy kép `"books"` trong SQL nghĩa là **tên cột**!
- `SELECT *` lấy mọi cột — tiện khi thử nghiệm, nhưng trong code thật nên ghi rõ cột cần (ít dữ liệu truyền hơn, không vỡ khi bảng thêm cột).

## Điều kiện

```sql run
SELECT name, price, stock
FROM products
WHERE price BETWEEN 30000 AND 130000      -- gồm cả hai đầu
  AND category IN ('electronics', 'books')
  AND name LIKE '%e%'                      -- % = chuỗi bất kỳ, _ = một ký tự
  AND stock > 0;
```

## NULL — "không biết", không phải 0 hay chuỗi rỗng

```sql run
SELECT name, city FROM users WHERE city = NULL;   -- KHÔNG trả về gì!
SELECT name, city FROM users WHERE city IS NULL;  -- đúng
SELECT name, COALESCE(city, '(chưa có)') AS city FROM users;
```

So sánh bất kỳ thứ gì với `NULL` bằng `=`, `<>`, `<`... đều cho kết quả **NULL** (không phải true), nên dòng bị loại. Luôn dùng `IS NULL` / `IS NOT NULL`.

## Sắp xếp và giới hạn

```sql run
SELECT id, name, price
FROM products
ORDER BY price DESC, id ASC   -- giá giảm dần; bằng giá thì theo id
LIMIT 3 OFFSET 0;             -- 3 dòng đầu
```

- **Không có `ORDER BY` thì thứ tự kết quả không được đảm bảo** — dù hôm nay trông có vẻ theo id.
- Phân trang: trang `p` (bắt đầu từ 1), mỗi trang `n` dòng → `LIMIT n OFFSET (p - 1) * n`.

## Tính toán và đặt tên cột

```sql run
SELECT name,
       price,
       price * 0.9 AS sale_price,
       UPPER(category) AS category
FROM products
WHERE price > 300000;

SELECT DISTINCT category FROM products ORDER BY category;
```

## Thứ tự viết và thứ tự thực thi

Viết: `SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT`

Thực thi (logic): `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`

Vì `WHERE` chạy **trước** `SELECT`, bạn thường **không** dùng được alias của `SELECT` trong `WHERE` (Postgres/MySQL báo lỗi; SQLite dễ dãi hơn). Nhưng `ORDER BY` thì dùng được.

## Câu hỏi tại sao

- Tại sao `NULL = NULL` không phải true? Cách thiết kế "logic ba giá trị" (true / false / unknown) này giúp gì và gây khó gì?
- `LIMIT 20 OFFSET 100000` chậm hơn nhiều so với `LIMIT 20 OFFSET 0` dù cùng trả về 20 dòng. Tại sao? (Gợi ý: database vẫn phải đọc và bỏ qua 100.000 dòng.)
