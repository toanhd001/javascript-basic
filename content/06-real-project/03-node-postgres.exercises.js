module.exports = [
  {
    id: 'rp-build-where',
    title: 'Xây WHERE động với $1, $2...',
    difficulty: 'medium',
    fn: 'buildProductFilter',
    prompt: `
Viết \`buildProductFilter(filters)\` trả về \`{ where, values }\` để ghép vào câu SQL của PostgreSQL. \`filters\` có thể có (bỏ qua các trường \`undefined\`):

| Trường | Điều kiện sinh ra |
| --- | --- |
| \`category\` | \`category = $n\` |
| \`minPrice\` | \`price >= $n\` |
| \`maxPrice\` | \`price <= $n\` |
| \`q\` | \`name ILIKE $n\` với giá trị \`'%' + q + '%'\` |
| \`ids\` (mảng) | \`id = ANY($n)\` với giá trị là **cả mảng** |

Các điều kiện theo **đúng thứ tự trong bảng**, nối bằng \`" AND "\`, có tiền tố \`"WHERE "\`. Không có điều kiện nào → \`where\` là chuỗi rỗng.

\`\`\`js
buildProductFilter({ maxPrice: 50000, category: "books" })
// { where: "WHERE category = $1 AND price <= $2", values: ["books", 50000] }
\`\`\`
`,
    starter: `
function buildProductFilter(filters) {
  const conditions = [];
  const values = [];

  return { where: "", values };
}
`,
    solution: `
function buildProductFilter(filters) {
  const conditions = [];
  const values = [];
  const add = (sql, value) => {
    values.push(value);
    conditions.push(sql.replace("?", "$" + values.length));
  };
  if (filters.category !== undefined) add("category = ?", filters.category);
  if (filters.minPrice !== undefined) add("price >= ?", filters.minPrice);
  if (filters.maxPrice !== undefined) add("price <= ?", filters.maxPrice);
  if (filters.q !== undefined) add("name ILIKE ?", "%" + filters.q + "%");
  if (filters.ids !== undefined) add("id = ANY(?)", filters.ids);
  return { where: conditions.length ? "WHERE " + conditions.join(" AND ") : "", values };
}
`,
    hints: [
      'Số thứ tự placeholder = độ dài mảng `values` **sau khi** push giá trị.',
      'Viết một hàm phụ `add(sqlCoDauHoi, giaTri)` để khỏi lặp lại việc đếm.',
      'Kiểm tra `!== undefined` chứ không phải truthy: `minPrice: 0` là một bộ lọc hợp lệ!'
    ],
    explain: 'Đây chính là phần khó nhất của Nhiệm vụ 2 trong project. Thư viện query builder (Knex, Kysely) hay ORM làm việc này cho bạn — nhưng khi đọc log SQL chậm hoặc debug lỗi "bind message supplies 3 parameters, but prepared statement requires 2", bạn cần hiểu nó hoạt động thế nào.',
    tests: [
      { args: [{ maxPrice: 50000, category: 'books' }], expected: { where: 'WHERE category = $1 AND price <= $2', values: ['books', 50000] } },
      { args: [{}], expected: { where: '', values: [] } },
      { args: [{ minPrice: 0 }], expected: { where: 'WHERE price >= $1', values: [0] }, label: 'minPrice = 0 vẫn là bộ lọc' },
      { args: [{ q: 'pro', ids: [1, 3, 5] }], expected: { where: 'WHERE name ILIKE $1 AND id = ANY($2)', values: ['%pro%', [1, 3, 5]] } },
      { args: [{ category: 'electronics', minPrice: 10000, maxPrice: 200000, q: 'key', ids: [3] }], expected: { where: 'WHERE category = $1 AND price >= $2 AND price <= $3 AND name ILIKE $4 AND id = ANY($5)', values: ['electronics', 10000, 200000, '%key%', [3]] } },
      { args: [{ category: "x' OR '1'='1" }], expected: { where: 'WHERE category = $1', values: ["x' OR '1'='1"] }, label: 'chuỗi tấn công chỉ nằm trong values' }
    ]
  },
  {
    id: 'rp-insert-many',
    title: 'INSERT nhiều dòng trong một câu lệnh',
    difficulty: 'medium',
    fn: 'insertMany',
    prompt: `
Viết \`insertMany(table, columns, rows)\` trả về \`{ text, values }\` cho **một** câu INSERT nhiều dòng (nhanh hơn N câu INSERT riêng lẻ: một lượt đi-về mạng thay vì N):

\`\`\`js
insertMany("order_items", ["order_id", "product_id", "quantity"], [[7, 1, 2], [7, 5, 1]])
// {
//   text: "INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3), ($4, $5, $6)",
//   values: [7, 1, 2, 7, 5, 1]
// }
\`\`\`

\`table\` và \`columns\` chỉ được chứa chữ thường, số và \`_\` (bắt đầu bằng chữ) — sai thì \`throw new Error("Invalid identifier: <tên>")\` (vì chúng bị ghép thẳng vào SQL, không đi qua placeholder). \`rows\` rỗng → \`throw new Error("No rows")\`. Mỗi dòng phải có đúng số cột → \`throw new Error("Row 1 has 2 values, expected 3")\` (chỉ số bắt đầu từ 0).
`,
    starter: `
function insertMany(table, columns, rows) {

}
`,
    solution: `
function insertMany(table, columns, rows) {
  for (const name of [table, ...columns]) {
    if (!/^[a-z][a-z0-9_]*$/.test(name)) throw new Error("Invalid identifier: " + name);
  }
  if (rows.length === 0) throw new Error("No rows");
  const values = [];
  const tuples = rows.map((row, i) => {
    if (row.length !== columns.length) {
      throw new Error("Row " + i + " has " + row.length + " values, expected " + columns.length);
    }
    const placeholders = row.map((value) => {
      values.push(value);
      return "$" + values.length;
    });
    return "(" + placeholders.join(", ") + ")";
  });
  return {
    text: "INSERT INTO " + table + " (" + columns.join(", ") + ") VALUES " + tuples.join(", "),
    values
  };
}
`,
    hints: [
      'Duyệt từng dòng, từng giá trị: push vào `values`, placeholder là `"$" + values.length`.',
      'Kiểm tra tên bảng/cột bằng regex `/^[a-z][a-z0-9_]*$/` trước tiên.'
    ],
    explain: 'Postgres giới hạn 65.535 tham số mỗi câu lệnh — chèn hàng trăm nghìn dòng thì chia thành từng lô (batch), hoặc dùng `COPY` (nhanh nhất). Lời giải Nhiệm vụ 4 trong project dùng đúng kỹ thuật này cho `order_items`.',
    tests: [
      { args: ['order_items', ['order_id', 'product_id', 'quantity'], [[7, 1, 2], [7, 5, 1]]], expected: { text: 'INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3), ($4, $5, $6)', values: [7, 1, 2, 7, 5, 1] } },
      { args: ['tags', ['name'], [['sale']]], expected: { text: 'INSERT INTO tags (name) VALUES ($1)', values: ['sale'] } },
      { code: 'try { insertMany("users; DROP TABLE users", ["id"], [[1]]); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'tên bảng chứa SQL độc', expected: 'Invalid identifier: users; DROP TABLE users' },
      { code: 'try { insertMany("t", ["a", "Bad-Col"], [[1, 2]]); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'tên cột không hợp lệ', expected: 'Invalid identifier: Bad-Col' },
      { code: 'try { insertMany("t", ["a"], []); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'không có dòng nào', expected: 'No rows' },
      { code: 'try { insertMany("t", ["a", "b", "c"], [[1, 2, 3], [4, 5]]); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'dòng thiếu giá trị', expected: 'Row 1 has 2 values, expected 3' }
    ]
  },
  {
    id: 'rp-pg-error',
    title: 'Dịch lỗi PostgreSQL thành HTTP',
    difficulty: 'easy',
    fn: 'pgErrorToHttp',
    prompt: `
Viết \`pgErrorToHttp(err)\` nhận một lỗi (object có thể có \`code\`, \`constraint\`) và trả về \`{ status, error }\`:

| err.code | status | error |
| --- | --- | --- |
| \`23505\` | 409 | \`"Duplicate value"\` — riêng khi \`err.constraint === "users_email_key"\` thì \`"Email already registered"\` |
| \`23503\` | 409 | \`"Related resource missing or in use"\` |
| \`23502\`, \`23514\`, \`22P02\` | 400 | \`"Invalid input"\` |
| \`40P01\`, \`40001\` | 503 | \`"Please retry"\` |
| khác (kể cả không có code) | 500 | \`"Internal Server Error"\` |
`,
    starter: `
function pgErrorToHttp(err) {
  return { status: 500, error: err.message };
}
`,
    solution: `
function pgErrorToHttp(err) {
  switch (err && err.code) {
    case "23505":
      return { status: 409, error: err.constraint === "users_email_key" ? "Email already registered" : "Duplicate value" };
    case "23503":
      return { status: 409, error: "Related resource missing or in use" };
    case "23502":
    case "23514":
    case "22P02":
      return { status: 400, error: "Invalid input" };
    case "40P01":
    case "40001":
      return { status: 503, error: "Please retry" };
    default:
      return { status: 500, error: "Internal Server Error" };
  }
}
`,
    hints: ['`switch (err.code)` với nhiều `case` dùng chung một nhánh.', 'Code có sẵn để lộ `err.message` của database ra ngoài — đừng làm vậy với lỗi 500.'],
    explain: 'Tên ràng buộc (`users_email_key`) do Postgres tự đặt theo mẫu `<bảng>_<cột>_key` khi khai báo `UNIQUE` trên cột. Dựa vào tên ràng buộc để chọn thông điệp thân thiện là kỹ thuật phổ biến — nên đặt tên ràng buộc tường minh trong migration để không phụ thuộc quy ước tự đặt.',
    tests: [
      { args: [{ code: '23505', constraint: 'users_email_key', message: 'duplicate key value violates unique constraint "users_email_key"' }], expected: { status: 409, error: 'Email already registered' } },
      { args: [{ code: '23505', constraint: 'tags_name_key' }], expected: { status: 409, error: 'Duplicate value' } },
      { args: [{ code: '23503' }], expected: { status: 409, error: 'Related resource missing or in use' } },
      { args: [{ code: '22P02', message: 'invalid input syntax for type integer: "abc"' }], expected: { status: 400, error: 'Invalid input' } },
      { args: [{ code: '40P01' }], expected: { status: 503, error: 'Please retry' } },
      { args: [{ message: 'connect ECONNREFUSED 127.0.0.1:5432' }], expected: { status: 500, error: 'Internal Server Error' }, label: 'lỗi kết nối: không lộ địa chỉ database' }
    ]
  }
];
