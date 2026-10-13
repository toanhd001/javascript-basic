---
id: be-sql-write-design
snippetSchema: ./_shop-seed.js
title: SQL — ghi dữ liệu, ràng buộc, thiết kế bảng
---
## INSERT, UPDATE, DELETE

```sql run
INSERT INTO products (name, category, price, stock)
VALUES ('Monitor 27', 'electronics', 289000, 10);

UPDATE products SET stock = stock - 1 WHERE id = 2;

DELETE FROM products WHERE stock = 0 AND category = 'food';

SELECT id, name, stock FROM products ORDER BY id;
```

> **Luôn có `WHERE` khi UPDATE/DELETE.** `DELETE FROM products;` xoá **toàn bộ** bảng. Thói quen an toàn: viết câu `SELECT` với đúng `WHERE` đó trước, xem kết quả, rồi mới đổi thành `UPDATE`/`DELETE`.

## Ràng buộc (constraint) — để database tự bảo vệ dữ liệu

```sql
CREATE TABLE accounts (
  id       INTEGER PRIMARY KEY,                     -- khoá chính: duy nhất, không NULL
  email    TEXT NOT NULL UNIQUE,                    -- bắt buộc, không trùng
  owner_id INTEGER NOT NULL REFERENCES users(id),   -- khoá ngoại: phải trỏ tới user có thật
  balance  INTEGER NOT NULL DEFAULT 0 CHECK (balance >= 0),
  UNIQUE (owner_id, email)                          -- ràng buộc trên nhiều cột
);
```

```sql run error
CREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE);
INSERT INTO tags (name) VALUES ('sale');
INSERT INTO tags (name) VALUES ('sale');  -- lỗi: UNIQUE constraint failed
```

Tại sao không chỉ kiểm tra trong code backend? Vì **mọi** đường ghi dữ liệu (nhiều service, script sửa tay, bug, hai request đồng thời) đều đi qua database. Code kiểm tra "email đã tồn tại chưa" rồi mới INSERT vẫn có thể bị hai request cùng lúc vượt qua — chỉ `UNIQUE` ở database chặn được chắc chắn.

> **Lưu ý SQLite:** khoá ngoại chỉ được kiểm tra khi bật `PRAGMA foreign_keys = ON;` (PostgreSQL và MySQL InnoDB luôn kiểm tra).

## UPSERT — thêm, hoặc cập nhật nếu đã có

```sql run
CREATE TABLE stock_log (product_id INTEGER PRIMARY KEY, views INTEGER NOT NULL);
INSERT INTO stock_log VALUES (1, 1)
  ON CONFLICT (product_id) DO UPDATE SET views = views + 1;
INSERT INTO stock_log VALUES (1, 1)
  ON CONFLICT (product_id) DO UPDATE SET views = views + 1;
SELECT * FROM stock_log;   -- views = 2
```

Một câu lệnh, nguyên tử — tốt hơn "SELECT xem có chưa → INSERT hoặc UPDATE" (hai request đồng thời sẽ cùng thấy "chưa có").

## Chuẩn hoá (정규화, normalization)

Mục tiêu: **mỗi sự thật chỉ lưu ở một chỗ** để không bị mâu thuẫn khi cập nhật.

| Dạng | Quy tắc (rút gọn) | Vi phạm điển hình |
| --- | --- | --- |
| 1NF | mỗi ô một giá trị nguyên tử, không có nhóm lặp | cột `phones = "010-1111, 010-2222"` |
| 2NF | 1NF + mọi cột phụ thuộc **toàn bộ** khoá chính | bảng `(order_id, product_id, product_name)` — `product_name` chỉ phụ thuộc `product_id` |
| 3NF | 2NF + không phụ thuộc bắc cầu qua cột không phải khoá | `orders(…, user_id, user_city)` — `user_city` phụ thuộc `user_id` |

**Phi chuẩn hoá** (denormalization) có chủ đích: chấp nhận lặp dữ liệu để đọc nhanh (VD lưu sẵn `order_count` trong `users`), đổi lại phải tự giữ đồng bộ khi ghi.

## Câu hỏi tại sao

- Khoá chính nên là số tự tăng, UUID, hay "khoá tự nhiên" như email? Trade-off của mỗi lựa chọn? (Gợi ý: email có thể đổi; UUID ngẫu nhiên làm index phân mảnh; id tự tăng lộ số lượng bản ghi.)
- Xoá cứng (`DELETE`) hay xoá mềm (`deleted_at` timestamp)? Mỗi cách ảnh hưởng thế nào tới khoá ngoại, `UNIQUE`, và luật bảo vệ dữ liệu cá nhân?
