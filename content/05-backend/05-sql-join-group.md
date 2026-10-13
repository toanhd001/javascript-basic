---
id: be-sql-join-group
snippetSchema: ./_shop-seed.js
title: SQL — JOIN và GROUP BY
---
## Gộp nhóm: COUNT, SUM, AVG, MIN, MAX

```sql run
SELECT COUNT(*) AS total_products,
       SUM(stock) AS total_stock,
       AVG(price) AS avg_price,
       MIN(price) AS cheapest,
       MAX(price) AS most_expensive
FROM products;
```

`GROUP BY` chia các dòng thành **nhóm** rồi tính hàm gộp cho từng nhóm:

```sql run
SELECT category, COUNT(*) AS n, MIN(price) AS min_price
FROM products
GROUP BY category
ORDER BY n DESC;
```

> **Quy tắc:** mỗi cột trong `SELECT` phải hoặc nằm trong `GROUP BY`, hoặc nằm trong một hàm gộp. `SELECT category, name ... GROUP BY category` là vô nghĩa (một nhóm có nhiều `name`, lấy cái nào?) — PostgreSQL báo lỗi, MySQL/SQLite thì lặng lẽ chọn bừa một giá trị.

## WHERE vs HAVING

- `WHERE` lọc **dòng** — **trước** khi gộp nhóm.
- `HAVING` lọc **nhóm** — **sau** khi gộp, dùng được hàm gộp.

```sql run
SELECT category, COUNT(*) AS n
FROM products
WHERE stock > 0          -- bỏ các sản phẩm hết hàng trước
GROUP BY category
HAVING COUNT(*) >= 2;    -- chỉ giữ danh mục còn ≥ 2 sản phẩm
```

## JOIN — ghép các bảng

Dữ liệu được tách ra nhiều bảng (chuẩn hoá) để không lặp lại; JOIN ghép chúng lại khi đọc.

```sql run
SELECT o.id AS order_id, u.name AS customer, o.status
FROM orders AS o
JOIN users AS u ON u.id = o.user_id     -- INNER JOIN: chỉ giữ dòng ghép được ở cả hai bên
WHERE o.created_at >= '2024-06-01';
```

### LEFT JOIN — giữ tất cả dòng bên trái

```sql run
SELECT u.name, o.id AS order_id
FROM users AS u
LEFT JOIN orders AS o ON o.user_id = u.id
WHERE u.id IN (4, 7);      -- Dũng chưa có đơn → order_id là NULL
```

| JOIN | Giữ lại |
| --- | --- |
| `INNER JOIN` | dòng có cặp ghép ở **cả hai** bảng |
| `LEFT JOIN` | **mọi** dòng bảng trái; bên phải không có thì NULL |
| `RIGHT JOIN` | ngược lại của LEFT |
| `FULL OUTER JOIN` | mọi dòng của cả hai bảng |

Mẫu "tìm cái **không có**": `LEFT JOIN ... WHERE right.id IS NULL` (VD người dùng chưa từng đặt hàng).

### Bẫy COUNT với LEFT JOIN

```sql run
SELECT u.name,
       COUNT(*)    AS count_star,   -- SAI: đếm cả dòng NULL → Dũng có "1 đơn"
       COUNT(o.id) AS count_orders  -- ĐÚNG: COUNT(cột) bỏ qua NULL
FROM users AS u
LEFT JOIN orders AS o ON o.user_id = u.id
GROUP BY u.id
ORDER BY u.id;
```

## JOIN nhiều bảng

```sql run
SELECT o.id AS order_id, p.name AS product, oi.quantity, oi.quantity * oi.unit_price AS line_total
FROM orders AS o
JOIN order_items AS oi ON oi.order_id = o.id
JOIN products AS p ON p.id = oi.product_id
WHERE o.user_id = 1
ORDER BY o.id, oi.id;
```

## Subquery và CTE (WITH)

```sql run
-- Sản phẩm đắt hơn giá trung bình
SELECT name, price FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- CTE: đặt tên cho một bước trung gian, dễ đọc hơn subquery lồng nhau
WITH spending AS (
  SELECT o.user_id, SUM(oi.quantity * oi.unit_price) AS total
  FROM orders o JOIN order_items oi ON oi.order_id = o.id
  WHERE o.status = 'paid'
  GROUP BY o.user_id
)
SELECT u.name, s.total FROM spending s JOIN users u ON u.id = s.user_id
ORDER BY s.total DESC;
```

## Câu hỏi tại sao

- Tại sao lưu `unit_price` trong `order_items` thay vì JOIN tới `products.price` lúc cần? (Gợi ý: giá sản phẩm thay đổi theo thời gian.)
- `COUNT(*)`, `COUNT(1)`, `COUNT(column)` khác nhau thế nào? Cái nào bỏ qua NULL?
- JOIN hai bảng 1 triệu dòng có chậm không? Điều gì quyết định tốc độ? (Gợi ý: bài Index.)
