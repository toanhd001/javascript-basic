const SHOP = require('./_shop-seed.js');

module.exports = [
  {
    id: 'sql-index-foreign-key',
    title: 'Đánh index cho khoá ngoại',
    difficulty: 'easy',
    kind: 'sql',
    schema: SHOP,
    prompt: `
API \`GET /users/:id/orders\` chạy truy vấn \`SELECT * FROM orders WHERE user_id = ?\` và đang **quét toàn bộ bảng** (chạy \`EXPLAIN QUERY PLAN\` để thấy \`SCAN orders\`).

Viết câu lệnh tạo index để truy vấn này (và phép JOIN \`users\` → \`orders\`) dùng **SEARCH** thay vì **SCAN**.
`,
    starter: `
EXPLAIN QUERY PLAN SELECT * FROM orders WHERE user_id = 7;
`,
    solution: `
CREATE INDEX idx_orders_user_id ON orders (user_id);
`,
    hints: ['`CREATE INDEX tên_index ON bảng (cột);` — đặt tên có ý nghĩa, VD `idx_orders_user_id`.'],
    tests: [
      { label: "kế hoạch của WHERE user_id = 7", plan: 'SELECT * FROM orders WHERE user_id = 7', planIncludes: 'USING', planExcludes: 'SCAN' },
      { label: 'kế hoạch của JOIN users → orders', plan: 'SELECT u.name, o.id FROM users u JOIN orders o ON o.user_id = u.id WHERE u.id = 7', planIncludes: 'SEARCH o USING', planExcludes: 'SCAN' },
      { label: 'dữ liệu không bị thay đổi', after: 'SELECT COUNT(*) FROM orders', expected: [[10]] }
    ]
  },
  {
    id: 'sql-composite-index',
    title: 'Index ghép cho truy vấn có sắp xếp',
    difficulty: 'medium',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Trang "Lịch sử mua hàng" chạy:

\`\`\`sql
SELECT id, created_at FROM orders
WHERE user_id = ? AND status = 'paid'
ORDER BY created_at DESC;
\`\`\`

Tạo **một** index sao cho database:
1. tìm theo **cả** \`user_id\` và \`status\` bằng index, và
2. **không** phải sắp xếp thêm (kế hoạch không có \`USE TEMP B-TREE FOR ORDER BY\`).

Index đó cũng phải phục vụ được truy vấn chỉ lọc \`WHERE user_id = ?\`.
`,
    starter: `
CREATE INDEX idx_orders_user ON orders (user_id);

EXPLAIN QUERY PLAN
SELECT id, created_at FROM orders
WHERE user_id = 1 AND status = 'paid'
ORDER BY created_at DESC;
`,
    solution: `
CREATE INDEX idx_orders_user_status_created ON orders (user_id, status, created_at);
`,
    hints: [
      'Index một cột `(user_id)` tìm được theo user nhưng vẫn phải lọc `status` và sắp xếp lại — xem kế hoạch của code có sẵn.',
      'Thứ tự cột trong index ghép: các cột so sánh **bằng** (`=`) trước, cột dùng để **sắp xếp** sau cùng.'
    ],
    explain: 'Index `(user_id, status, created_at)`: các dòng của cùng `(user_id, status)` nằm liền nhau trong B-tree và **đã sắp theo `created_at`** — database chỉ cần đọc ngược đoạn đó. Thêm nữa, `id` (rowid) và `created_at` đều có trong index nên SQLite không cần quay lại bảng gốc: đó là **covering index**.',
    followUp: 'Nếu đổi thứ tự thành `(created_at, user_id, status)` thì sao? Thử tạo và xem `EXPLAIN QUERY PLAN`. Giải thích bằng quy tắc tiền tố bên trái.',
    tests: [
      { label: 'tìm theo user_id và status', plan: "SELECT id, created_at FROM orders WHERE user_id = 1 AND status = 'paid' ORDER BY created_at DESC", planIncludes: 'user_id=? AND status=?' },
      { label: 'không phải sắp xếp thêm', plan: "SELECT id, created_at FROM orders WHERE user_id = 1 AND status = 'paid' ORDER BY created_at DESC", planIncludes: 'USING', planExcludes: 'TEMP B-TREE' },
      { label: 'truy vấn chỉ lọc user_id vẫn dùng index', plan: 'SELECT * FROM orders WHERE user_id = 1', planIncludes: 'USING', planExcludes: 'SCAN' }
    ]
  }
];
