---
id: be-index-transaction
snippetSchema: ./_shop-seed.js
title: Index và Transaction
---
Hai chủ đề được hỏi **nhiều nhất** trong phỏng vấn backend ở Hàn (인덱스, 트랜잭션).

## Index — mục lục của bảng

Không có index, tìm `WHERE user_id = 7` phải **đọc mọi dòng** (full table scan, O(n)). Index là một cấu trúc **B-tree** (B+tree) sắp sẵn theo cột được đánh index, trỏ về dòng gốc → tìm kiếm O(log n), giống tra mục lục sách.

```sql run
EXPLAIN QUERY PLAN SELECT * FROM orders WHERE user_id = 7;   -- SCAN orders: quét cả bảng

CREATE INDEX idx_orders_user ON orders (user_id);

EXPLAIN QUERY PLAN SELECT * FROM orders WHERE user_id = 7;   -- SEARCH ... USING INDEX
```

`EXPLAIN` (MySQL, PostgreSQL: `EXPLAIN ANALYZE`) là công cụ số một khi một API chậm: xem database **thực sự** làm gì.

> Khoá chính và cột `UNIQUE` tự có index. **Khoá ngoại thì không** (trong SQLite, PostgreSQL) — một nguồn chậm rất phổ biến khi JOIN.

### Vì sao B-tree mà không phải hash?

Hash tra cứu bằng `=` rất nhanh nhưng **không hỗ trợ khoảng** (`<`, `BETWEEN`, `ORDER BY`, `LIKE 'abc%'`). B-tree giữ dữ liệu **có thứ tự** nên làm được cả hai, và rất nông (3–4 tầng cho hàng triệu dòng) → ít lần đọc đĩa.

### Index ghép (composite) và quy tắc "tiền tố bên trái"

Index `(user_id, status, created_at)` sắp xếp như danh bạ theo (họ, tên đệm, tên):

| Truy vấn | Dùng được index? |
| --- | --- |
| `WHERE user_id = 1` | ✔ (tiền tố trái) |
| `WHERE user_id = 1 AND status = 'paid'` | ✔ |
| `WHERE user_id = 1 AND status = 'paid' ORDER BY created_at` | ✔ — kể cả **không cần sắp xếp lại** |
| `WHERE status = 'paid'` | ✘ — thiếu cột đầu tiên |
| `WHERE user_id = 1 ORDER BY created_at` | một phần — phải sắp xếp thêm |

### Khi nào index không giúp, hoặc gây hại

- Bọc cột trong hàm: `WHERE LOWER(email) = ...`, `WHERE price * 2 > ...` → không dùng được index (trừ khi tạo index trên biểu thức).
- `LIKE '%abc'` (wildcard ở đầu).
- Cột ít giá trị khác nhau (VD `status` chỉ 3 giá trị) → quét bảng có khi còn nhanh hơn.
- **Mỗi index làm INSERT/UPDATE/DELETE chậm hơn** (phải cập nhật cả index) và tốn dung lượng. Đánh index theo **truy vấn thực tế**, không phải "cột nào cũng đánh".

## Transaction — tất cả hoặc không gì cả

Chuyển 100.000 won từ An sang Jisoo là **hai** câu UPDATE. Nếu server sập giữa chừng, tiền biến mất. Transaction gom chúng thành một đơn vị:

```sql run
CREATE TABLE accounts (id INTEGER PRIMARY KEY, owner TEXT, balance INTEGER CHECK (balance >= 0));
INSERT INTO accounts VALUES (1, 'An', 500000), (2, 'Jisoo', 100000);

BEGIN;
UPDATE accounts SET balance = balance - 100000 WHERE id = 1;
UPDATE accounts SET balance = balance + 100000 WHERE id = 2;
COMMIT;                       -- hoặc ROLLBACK; để huỷ mọi thay đổi từ BEGIN

SELECT * FROM accounts;
```

### ACID

| | Ý nghĩa |
| --- | --- |
| **A**tomicity (원자성) | tất cả câu lệnh thành công, hoặc không câu nào có hiệu lực |
| **C**onsistency (일관성) | trước và sau transaction, dữ liệu thoả mọi ràng buộc |
| **I**solation (격리성) | các transaction chạy đồng thời không thấy trạng thái dở dang của nhau (ở mức độ tuỳ cấu hình) |
| **D**urability (지속성) | đã COMMIT thì không mất, kể cả mất điện |

### Mức cô lập (isolation level) và các hiện tượng

| Hiện tượng | Mô tả |
| --- | --- |
| Dirty read | đọc dữ liệu transaction khác **chưa commit** (có thể bị rollback) |
| Non-repeatable read | đọc lại cùng một dòng trong một transaction, giá trị đã **bị sửa** |
| Phantom read | chạy lại cùng truy vấn, xuất hiện **dòng mới** |

| Mức | Dirty | Non-repeatable | Phantom |
| --- | --- | --- | --- |
| READ UNCOMMITTED | có thể | có thể | có thể |
| READ COMMITTED (mặc định PostgreSQL, Oracle) | ✘ | có thể | có thể |
| REPEATABLE READ (mặc định MySQL InnoDB) | ✘ | ✘ | có thể (InnoDB hạn chế phần lớn) |
| SERIALIZABLE | ✘ | ✘ | ✘ |

Mức càng cao càng an toàn nhưng càng nhiều khoá/xung đột → chậm hơn.

### Lost update — bug đồng thời kinh điển

Hai request cùng đọc `stock = 1`, cùng thấy còn hàng, cùng trừ → `stock = -1` (bán quá số lượng). Cách chống:

- Cập nhật nguyên tử có điều kiện: `UPDATE products SET stock = stock - 1 WHERE id = ? AND stock >= 1` rồi kiểm tra số dòng bị ảnh hưởng.
- Khoá dòng: `SELECT ... FOR UPDATE` (MySQL, PostgreSQL).
- Optimistic locking: cột `version`, `UPDATE ... WHERE id = ? AND version = ?`.

## Câu hỏi tại sao

- Index làm đọc nhanh, ghi chậm. Với bảng log ghi liên tục mà hiếm khi đọc, bạn đánh index thế nào?
- Tại sao không đặt mọi transaction ở mức SERIALIZABLE cho an toàn?
- Deadlock (교착 상태) xảy ra khi nào giữa hai transaction? Một quy tắc đơn giản giúp tránh nó là gì? (Gợi ý: thứ tự khoá các dòng.)
