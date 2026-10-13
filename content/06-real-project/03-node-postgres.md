---
id: rp-node-postgres
title: Node.js + PostgreSQL với thư viện pg
---
## Pool và truy vấn

```js
import pg from 'pg';
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 10 });

const { rows, rowCount } = await pool.query(
  'SELECT id, name, price FROM products WHERE category = $1 AND price <= $2',
  ['books', 50000]
);
```

- PostgreSQL dùng placeholder **đánh số** `$1, $2, ...` (MySQL/SQLite dùng `?`). Cùng một giá trị dùng hai lần thì viết lại `$1` hai lần.
- Placeholder chỉ thay được **giá trị** — không thay được tên bảng, tên cột, `ASC/DESC`. Những thứ đó phải lấy từ **whitelist** trong code.

## Bẫy kiểu dữ liệu

```js
const { rows } = await pool.query('SELECT COUNT(*) AS n, SUM(price) AS s FROM products');
console.log(rows[0]);   // { n: '10', s: '3008000' }  ← CHUỖI!
```

| Kiểu Postgres | pg trả về | Lý do / cách xử lý |
| --- | --- | --- |
| `integer` | number | an toàn |
| `bigint` (COUNT, SUM của integer, BIGSERIAL) | **string** | có thể vượt 2^53 → pg không dám đổi thành number. Ép `COUNT(*)::int` nếu chắc chắn nhỏ |
| `numeric` / `decimal` (tiền tệ) | **string** | giữ chính xác tuyệt đối; dùng thư viện số thập phân nếu cần tính |
| `timestamptz` | `Date` | `JSON.stringify` thành chuỗi ISO UTC |
| `json` / `jsonb` | object | |
| mảng `integer[]` | mảng JS | truyền mảng làm tham số được: `WHERE id = ANY($1)` |

## Transaction phải dùng MỘT kết nối

Bug kinh điển:

```js
// ❌ SAI: pool.query mỗi lần có thể lấy một kết nối KHÁC → BEGIN, UPDATE, COMMIT nằm ở 3 kết nối khác nhau
await pool.query('BEGIN');
await pool.query('UPDATE ...');
await pool.query('COMMIT');

// ✅ ĐÚNG: mượn một client, làm hết trên client đó, luôn trả lại
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query('UPDATE ...');
  await client.query('COMMIT');
} catch (err) {
  await client.query('ROLLBACK');
  throw err;
} finally {
  client.release();          // quên dòng này → pool cạn dần → cả API treo
}
```

Project gói đoạn trên thành `db.transaction(async (tx) => { ... })` — bên trong **phải** dùng `tx.query`, không phải `db.query`.

## Đồng thời: kiểm tra và ghi trong cùng một câu lệnh

```sql
-- Trừ kho an toàn: điều kiện và thao tác ghi là MỘT câu lệnh nguyên tử
UPDATE products SET stock = stock - $1
WHERE id = $2 AND stock >= $1
RETURNING name, price;        -- 0 dòng trả về = không đủ hàng (hoặc không tồn tại)
```

Postgres khoá dòng khi `UPDATE`; request thứ hai phải chờ, rồi đánh giá lại `stock >= $1` trên giá trị **mới**. Trong project, test gửi 5 request mua đồng thời sản phẩm còn 3 cái: cách "SELECT rồi UPDATE" để cả 5 thành công; cách trên cho đúng 3.

Khi cần đọc rồi quyết định phức tạp hơn: `SELECT ... FOR UPDATE` khoá dòng tới hết transaction (xem `cancelOrder` trong project).

## Mã lỗi Postgres

Lỗi từ database có thuộc tính `code` (5 ký tự). Vài mã hay gặp:

| code | Tên | Thường dịch thành |
| --- | --- | --- |
| `23505` | unique_violation | 409 Conflict (email đã tồn tại) |
| `23503` | foreign_key_violation | 409 / 400 (tham chiếu tới dòng không tồn tại, hoặc xoá dòng đang được tham chiếu) |
| `23502` | not_null_violation | 400 |
| `23514` | check_violation | 400 |
| `22P02` | invalid_text_representation | 400 (VD `'abc'` cho cột integer) |
| `40P01` | deadlock_detected | thử lại transaction |
| `40001` | serialization_failure | thử lại transaction (mức SERIALIZABLE) |

## Câu hỏi tại sao

- Tại sao pg không tự đổi `bigint` thành `number`? Nếu bạn tự cấu hình cho nó đổi, rủi ro là gì?
- Pool `max: 10` mà có 100 request đồng thời thì sao? Tăng lên `max: 500` có giải quyết được không? (Gợi ý: giới hạn `max_connections` của Postgres, mỗi kết nối tốn RAM ở server.)
- Lỗi `40P01` (deadlock) thì "thử lại" là hợp lý, còn `23505` thì không. Tại sao?
