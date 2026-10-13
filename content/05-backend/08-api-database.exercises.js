const apiHelpers = require('./_api-helpers.js');
const SHOP = require('./_shop-seed.js');

const BANK = `
CREATE TABLE accounts (
  id INTEGER PRIMARY KEY,
  owner TEXT NOT NULL,
  balance INTEGER NOT NULL CHECK (balance >= 0)
);
INSERT INTO accounts (id, owner, balance) VALUES (1, 'An', 500000), (2, 'Jisoo', 100000), (3, 'Minho', 0);
`.trim();

const shopHelpers = apiHelpers({ seed: SHOP });
const bankHelpers = apiHelpers({ seed: BANK });

module.exports = [
  {
    id: 'api-fix-sql-injection',
    title: 'Vá lỗ hổng SQL injection',
    difficulty: 'medium',
    needsSql: true,
    helpers: shopHelpers,
    prompt: `
\`GET /users/search?name=...\` trả về \`[{ id, name, city }]\` của người dùng có tên **chứa** chuỗi \`name\`, sắp theo \`id\`. Code có sẵn chạy đúng với input bình thường nhưng bị **SQL injection** và **vỡ** khi tên có dấu nháy.

Sửa lại để:
- Dùng **tham số hoá** (\`query(sql, [params])\`), không ghép chuỗi.
- Thiếu \`name\` hoặc \`name\` rỗng → \`400 { "error": "name is required" }\`.
`,
    starter: `
const app = createApp();

app.get("/users/search", (req, res) => {
  const name = req.query.name;
  const rows = query("SELECT id, name, city FROM users WHERE name LIKE '%" + name + "%' ORDER BY id");
  res.json(rows);
});
`,
    solution: `
const app = createApp();

app.get("/users/search", (req, res) => {
  const name = req.query.name;
  if (!name) return res.status(400).json({ error: "name is required" });
  const rows = query("SELECT id, name, city FROM users WHERE name LIKE ? ORDER BY id", ["%" + name + "%"]);
  res.json(rows);
});
`,
    hints: [
      'Placeholder `?` thay cho **toàn bộ** giá trị, kể cả các dấu `%`: `WHERE name LIKE ?` với tham số `"%" + name + "%"`.',
      'Không viết `LIKE \'%?%\'` — dấu `?` nằm trong chuỗi SQL sẽ chỉ là ký tự `?` bình thường.'
    ],
    explain: 'Tham số hoá đảm bảo input luôn được coi là **dữ liệu**. Input `%` vẫn khớp mọi tên (đó là ký tự đại diện của LIKE, không phải injection) — muốn chặn thì escape `%`/`_` và dùng `LIKE ? ESCAPE \'\\\\\'`.',
    tests: [
      { code: 'await resetDb(); const r = await request(app, { path: "/users/search?name=Min" }); return [r.status, r.body];', label: 'name=Min', expected: [200, [{ id: 6, name: 'Minh', city: 'Busan' }, { id: 8, name: 'Minho', city: 'Daegu' }]] },
      { code: 'await resetDb(); const r = await request(app, { path: "/users/search?name=" + encodeURIComponent("x\' OR \'1\'=\'1") }); return [r.status, r.body];', label: "tấn công: name = x' OR '1'='1", expected: [200, []] },
      { code: 'await resetDb(); const r = await request(app, { path: "/users/search?name=" + encodeURIComponent("O\'Brien") }); return [r.status, r.body];', label: "tên có dấu nháy: O'Brien", expected: [200, []] },
      { code: 'await resetDb(); const r = await request(app, { path: "/users/search?name=" + encodeURIComponent("zz%\' UNION SELECT id, email, created_at FROM users --") }); return [r.status, r.body.length];', label: 'tấn công UNION để đọc email', expected: [200, 0] },
      { code: 'await resetDb(); const r = await request(app, { path: "/users/search" }); return [r.status, r.body];', label: 'thiếu name', expected: [400, { error: 'name is required' }] }
    ]
  },
  {
    id: 'api-products-pagination',
    title: 'API danh sách có lọc & phân trang',
    difficulty: 'medium',
    needsSql: true,
    helpers: shopHelpers,
    prompt: `
Viết \`GET /products\` với query:
- \`category\` (tuỳ chọn): lọc theo danh mục
- \`page\` (mặc định 1) và \`limit\` (mặc định 5): phải là **số nguyên**, \`page >= 1\`, \`1 <= limit <= 50\`. Sai → \`400 { "error": "invalid pagination" }\`.

Sắp theo \`id\`. Trả về:

\`\`\`json
{ "data": [{ "id": 1, "name": "...", "price": 1890000 }], "page": 1, "limit": 5, "total": 10 }
\`\`\`

\`total\` là tổng số sản phẩm **khớp bộ lọc** (không phải chỉ trang hiện tại). Dùng tham số hoá cho mọi giá trị.
`,
    starter: `
const app = createApp();

app.get("/products", (req, res) => {
  const data = query("SELECT id, name, price FROM products ORDER BY id");
  res.json({ data, page: 1, limit: data.length, total: data.length });
});
`,
    solution: `
const app = createApp();

function parsePositiveInt(value, fallback) {
  if (value === undefined) return fallback;
  if (!/^\\d+$/.test(value)) return NaN;
  return Number(value);
}

app.get("/products", (req, res) => {
  const page = parsePositiveInt(req.query.page, 1);
  const limit = parsePositiveInt(req.query.limit, 5);
  if (!(page >= 1) || !(limit >= 1 && limit <= 50)) {
    return res.status(400).json({ error: "invalid pagination" });
  }
  const where = req.query.category ? "WHERE category = ?" : "";
  const params = req.query.category ? [req.query.category] : [];
  const total = query("SELECT COUNT(*) AS n FROM products " + where, params)[0].n;
  const data = query(
    "SELECT id, name, price FROM products " + where + " ORDER BY id LIMIT ? OFFSET ?",
    [...params, limit, (page - 1) * limit]
  );
  res.json({ data, page, limit, total });
});
`,
    hints: [
      'Query string luôn là chuỗi: `"2"`, `"abc"`, `"1.5"`, `"-1"`. Kiểm tra bằng regex `/^\\d+$/` trước khi `Number(...)`.',
      'Hai truy vấn: `SELECT COUNT(*)` (với cùng WHERE) để lấy `total`, và `SELECT ... LIMIT ? OFFSET ?` để lấy trang.',
      'Ghép **phần cố định** của SQL (`WHERE category = ?`) là an toàn; chỉ **giá trị** mới phải đi qua tham số.'
    ],
    tests: [
      { code: 'await resetDb(); const r = await request(app, { path: "/products" }); return [r.status, r.body];', label: 'mặc định page=1, limit=5', expected: [200, { data: [{ id: 1, name: 'Laptop Pro 14', price: 1890000 }, { id: 2, name: 'Wireless Mouse', price: 35000 }, { id: 3, name: 'Mechanical Keyboard', price: 129000 }, { id: 4, name: 'USB-C Hub', price: 59000 }, { id: 5, name: 'Clean Code', price: 32000 }], page: 1, limit: 5, total: 10 }] },
      { code: 'await resetDb(); const r = await request(app, { path: "/products?page=2&limit=4" }); return [r.status, r.body];', label: 'page=2&limit=4', expected: [200, { data: [{ id: 5, name: 'Clean Code', price: 32000 }, { id: 6, name: 'Designing Data-Intensive Applications', price: 48000 }, { id: 7, name: 'Coffee Beans 1kg', price: 27000 }, { id: 8, name: 'Green Tea Set', price: 18000 }], page: 2, limit: 4, total: 10 }] },
      { code: 'await resetDb(); const r = await request(app, { path: "/products?category=electronics&limit=2&page=2" }); return [r.status, r.body];', label: 'lọc electronics, trang 2', expected: [200, { data: [{ id: 3, name: 'Mechanical Keyboard', price: 129000 }, { id: 4, name: 'USB-C Hub', price: 59000 }], page: 2, limit: 2, total: 4 }] },
      { code: 'await resetDb(); const r = await request(app, { path: "/products?category=toys" }); return [r.status, r.body];', label: 'danh mục không có sản phẩm', expected: [200, { data: [], page: 1, limit: 5, total: 0 }] },
      { code: 'await resetDb(); const out = []; for (const q of ["page=0", "limit=51", "limit=abc", "page=1.5", "page=-1", "limit=0"]) out.push((await request(app, { path: "/products?" + q })).status); return out;', label: 'các tham số không hợp lệ', expected: [400, 400, 400, 400, 400, 400] },
      { code: 'await resetDb(); const r = await request(app, { path: "/products?category=" + encodeURIComponent("x\' OR \'1\'=\'1") }); return r.body.total;', label: 'category chứa chuỗi tấn công', expected: 0 }
    ]
  },
  {
    id: 'api-n-plus-one',
    title: 'Sửa lỗi N+1 query',
    difficulty: 'hard',
    needsSql: true,
    helpers: shopHelpers,
    prompt: `
\`GET /users/:id/orders\` trả về các đơn hàng của người dùng (theo \`id\` đơn tăng dần), mỗi đơn kèm danh sách sản phẩm (theo \`id\` của \`order_items\`):

\`\`\`json
[{ "id": 1, "status": "paid", "items": [{ "product": "Laptop Pro 14", "quantity": 1 }] }]
\`\`\`

Người dùng không tồn tại → \`404 { "error": "User not found" }\`; tồn tại nhưng chưa có đơn → \`[]\`.

Code có sẵn trả **đúng kết quả** nhưng chạy \`1 + số đơn + số sản phẩm\` truy vấn. Viết lại sao cho **tối đa 3 truy vấn** bất kể có bao nhiêu đơn (\`queryLog\` đếm mọi lần gọi \`query\`).
`,
    starter: `
const app = createApp();

app.get("/users/:id/orders", (req, res) => {
  const userId = Number(req.params.id);
  const users = query("SELECT id FROM users WHERE id = ?", [userId]);
  if (users.length === 0) return res.status(404).json({ error: "User not found" });
  const orders = query("SELECT id, status FROM orders WHERE user_id = ? ORDER BY id", [userId]);
  for (const order of orders) {
    const items = query("SELECT product_id, quantity FROM order_items WHERE order_id = ? ORDER BY id", [order.id]);
    order.items = items.map((it) => ({
      product: query("SELECT name FROM products WHERE id = ?", [it.product_id])[0].name,
      quantity: it.quantity
    }));
  }
  res.json(orders);
});
`,
    solution: `
const app = createApp();

app.get("/users/:id/orders", (req, res) => {
  const userId = Number(req.params.id);
  const users = query("SELECT id FROM users WHERE id = ?", [userId]);
  if (users.length === 0) return res.status(404).json({ error: "User not found" });
  const rows = query(
    "SELECT o.id AS order_id, o.status, p.name AS product, oi.quantity " +
    "FROM orders o " +
    "LEFT JOIN order_items oi ON oi.order_id = o.id " +
    "LEFT JOIN products p ON p.id = oi.product_id " +
    "WHERE o.user_id = ? " +
    "ORDER BY o.id, oi.id",
    [userId]
  );
  const orders = [];
  const byId = new Map();
  for (const row of rows) {
    let order = byId.get(row.order_id);
    if (!order) {
      order = { id: row.order_id, status: row.status, items: [] };
      byId.set(row.order_id, order);
      orders.push(order);
    }
    if (row.product !== null) order.items.push({ product: row.product, quantity: row.quantity });
  }
  res.json(orders);
});
`,
    hints: [
      'Một truy vấn JOIN `orders → order_items → products` lọc theo `o.user_id`, `ORDER BY o.id, oi.id`, trả về mỗi dòng là một sản phẩm trong một đơn.',
      'Gom nhóm trong JS: duyệt các dòng, dùng `Map` từ `order_id` → object đơn hàng; push sản phẩm vào `items`.',
      'Dùng `LEFT JOIN` cho `order_items` để đơn không có sản phẩm nào vẫn xuất hiện (với `items: []`).'
    ],
    explain: 'Từ `1 + N + M` truy vấn xuống 2. Cách khác cũng đạt yêu cầu: truy vấn đơn hàng, rồi **một** truy vấn `... WHERE order_id IN (?, ?, ?)` cho mọi sản phẩm (cách ORM dùng với "batch fetching"). JOIN trả về dữ liệu đơn hàng lặp lại ở mỗi dòng; IN thì không lặp nhưng cần hai lượt.',
    followUp: 'Với người dùng có 10.000 đơn, API này vẫn trả về tất cả. Bạn sẽ thêm phân trang kiểu nào (offset hay cursor), và phân trang **đơn hàng** hay **dòng** của JOIN? Tại sao `LIMIT` trên truy vấn JOIN lại cắt sai?',
    tests: [
      { code: 'await resetDb(); const r = await request(app, { path: "/users/1/orders" }); return [r.status, r.body];', label: 'GET /users/1/orders', expected: [200, [{ id: 1, status: 'paid', items: [{ product: 'Laptop Pro 14', quantity: 1 }, { product: 'Wireless Mouse', quantity: 2 }] }, { id: 2, status: 'paid', items: [{ product: 'Clean Code', quantity: 1 }, { product: 'Designing Data-Intensive Applications', quantity: 1 }] }, { id: 9, status: 'cancelled', items: [{ product: 'Green Tea Set', quantity: 2 }] }]] },
      { code: 'await resetDb(); const r = await request(app, { path: "/users/4/orders" }); return [r.status, r.body];', label: 'người dùng chưa có đơn', expected: [200, []] },
      { code: 'await resetDb(); const r = await request(app, { path: "/users/99/orders" }); return [r.status, r.body];', label: 'người dùng không tồn tại', expected: [404, { error: 'User not found' }] },
      { code: 'await resetDb(); await request(app, { path: "/users/1/orders" }); return queryLog.length <= 3;', label: 'số truy vấn cho user 1 (3 đơn, 5 sản phẩm) ≤ 3', expected: true },
      { code: 'await resetDb(); for (let i = 0; i < 40; i++) { execute("INSERT INTO orders (user_id, status, created_at) VALUES (8, \'paid\', \'2024-07-01\')"); execute("INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (last_insert_rowid(), 7, 1, 27000)"); } queryLog.length = 0; const r = await request(app, { path: "/users/8/orders" }); return [r.body.length, r.body[39].items[0].product, queryLog.length <= 3];', label: 'user có 40 đơn: vẫn ≤ 3 truy vấn', expected: [40, 'Coffee Beans 1kg', true] }
    ]
  },
  {
    id: 'api-transfer-transaction',
    title: 'Chuyển tiền với transaction',
    difficulty: 'hard',
    needsSql: true,
    helpers: bankHelpers,
    prompt: `
Bảng \`accounts(id, owner, balance)\` có ràng buộc \`CHECK (balance >= 0)\`. Viết \`POST /transfers\` với body \`{ "fromId": 1, "toId": 2, "amount": 50000 }\`:

1. \`amount\` phải là **số nguyên dương**, \`fromId !== toId\` → sai: \`400 { "error": "invalid transfer" }\`.
2. Một trong hai tài khoản không tồn tại → \`404 { "error": "Account not found" }\`.
3. Không đủ số dư → \`409 { "error": "Insufficient funds" }\`.
4. Thành công → \`200 { "fromBalance": ..., "toBalance": ... }\`.

**Bất biến bắt buộc:** trong **mọi** trường hợp lỗi, không tài khoản nào bị thay đổi, và tổng tiền trong hệ thống luôn không đổi. Dùng transaction (\`db.exec("BEGIN")\` / \`"COMMIT"\` / \`"ROLLBACK"\`).
`,
    starter: `
const app = createApp();

app.post("/transfers", (req, res) => {
  const { fromId, toId, amount } = req.body;
  execute("UPDATE accounts SET balance = balance - ? WHERE id = ?", [amount, fromId]);
  const to = execute("UPDATE accounts SET balance = balance + ? WHERE id = ?", [amount, toId]);
  if (to.changes === 0) return res.status(404).json({ error: "Account not found" });
  const balances = query("SELECT id, balance FROM accounts WHERE id IN (?, ?)", [fromId, toId]);
  res.json({
    fromBalance: balances.find((a) => a.id === fromId).balance,
    toBalance: balances.find((a) => a.id === toId).balance
  });
});
`,
    solution: `
const app = createApp();

app.post("/transfers", (req, res) => {
  const { fromId, toId, amount } = req.body || {};
  if (!Number.isInteger(amount) || amount <= 0 || fromId === toId) {
    return res.status(400).json({ error: "invalid transfer" });
  }
  db.exec("BEGIN");
  try {
    const from = query("SELECT balance FROM accounts WHERE id = ?", [fromId])[0];
    const to = query("SELECT balance FROM accounts WHERE id = ?", [toId])[0];
    if (!from || !to) {
      db.exec("ROLLBACK");
      return res.status(404).json({ error: "Account not found" });
    }
    if (from.balance < amount) {
      db.exec("ROLLBACK");
      return res.status(409).json({ error: "Insufficient funds" });
    }
    execute("UPDATE accounts SET balance = balance - ? WHERE id = ?", [amount, fromId]);
    execute("UPDATE accounts SET balance = balance + ? WHERE id = ?", [amount, toId]);
    db.exec("COMMIT");
    res.json({ fromBalance: from.balance - amount, toBalance: to.balance + amount });
  } catch (err) {
    db.exec("ROLLBACK");
    throw err;
  }
});
`,
    hints: [
      'Code có sẵn trừ tiền người gửi **trước** khi biết người nhận có tồn tại — chuyển tới tài khoản 999 làm tiền biến mất. Chạy test để thấy.',
      'Validate input trước khi mở transaction. Trong transaction: đọc cả hai tài khoản, kiểm tra tồn tại và số dư, rồi mới UPDATE.',
      'Mọi đường thoát sau `BEGIN` (return lỗi, exception) đều phải `ROLLBACK`.'
    ],
    explain: 'Trong database thật có nhiều request đồng thời, "đọc số dư rồi mới trừ" vẫn có thể bị **lost update** nếu hai giao dịch cùng đọc trước khi ai kịp ghi. Cách chắc chắn: `UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?` rồi kiểm tra `changes === 1`, hoặc `SELECT ... FOR UPDATE` để khoá dòng (MySQL/PostgreSQL).',
    followUp: 'Hai request chuyển tiền chéo nhau cùng lúc: A→B và B→A, mỗi bên khoá tài khoản nguồn trước. Chuyện gì xảy ra? Quy tắc nào giúp tránh deadlock? (Gợi ý: luôn khoá theo thứ tự id tăng dần.)',
    tests: [
      { code: 'await resetDb(); const r = await request(app, { method: "POST", path: "/transfers", body: { fromId: 1, toId: 2, amount: 50000 } }); return [r.status, r.body, query("SELECT balance FROM accounts ORDER BY id").map((a) => a.balance)];', label: 'An chuyển 50.000 cho Jisoo', expected: [200, { fromBalance: 450000, toBalance: 150000 }, [450000, 150000, 0]] },
      { code: 'await resetDb(); const r = await request(app, { method: "POST", path: "/transfers", body: { fromId: 1, toId: 999, amount: 50000 } }); return [r.status, r.body, query("SELECT balance FROM accounts ORDER BY id").map((a) => a.balance)];', label: 'chuyển tới tài khoản không tồn tại → không mất tiền', expected: [404, { error: 'Account not found' }, [500000, 100000, 0]] },
      { code: 'await resetDb(); const r = await request(app, { method: "POST", path: "/transfers", body: { fromId: 999, toId: 1, amount: 50000 } }); return [r.status, query("SELECT balance FROM accounts ORDER BY id").map((a) => a.balance)];', label: 'tài khoản nguồn không tồn tại', expected: [404, [500000, 100000, 0]] },
      { code: 'await resetDb(); const r = await request(app, { method: "POST", path: "/transfers", body: { fromId: 2, toId: 3, amount: 100001 } }); return [r.status, r.body, query("SELECT balance FROM accounts ORDER BY id").map((a) => a.balance)];', label: 'không đủ số dư → 409', expected: [409, { error: 'Insufficient funds' }, [500000, 100000, 0]] },
      { code: 'await resetDb(); const out = []; for (const body of [{ fromId: 1, toId: 2, amount: -5 }, { fromId: 1, toId: 2, amount: 1.5 }, { fromId: 1, toId: 2, amount: "100" }, { fromId: 1, toId: 1, amount: 10 }, {}]) out.push((await request(app, { method: "POST", path: "/transfers", body })).status); out.push(query("SELECT SUM(balance) AS s FROM accounts")[0].s); return out;', label: 'input không hợp lệ', expected: [400, 400, 400, 400, 400, 600000] },
      { code: 'await resetDb(); await request(app, { method: "POST", path: "/transfers", body: { fromId: 1, toId: 999, amount: 1 } }); const r = await request(app, { method: "POST", path: "/transfers", body: { fromId: 2, toId: 3, amount: 30000 } }); return [r.status, r.body];', label: 'request sau một lần lỗi vẫn chạy bình thường (transaction không bị treo)', expected: [200, { fromBalance: 70000, toBalance: 30000 }] }
    ]
  }
];
