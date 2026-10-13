const SHOP = require('./_shop-seed.js');

const CART = SHOP + `

CREATE TABLE cart_items (
  user_id INTEGER NOT NULL REFERENCES users(id),
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  PRIMARY KEY (user_id, product_id)
);
INSERT INTO cart_items VALUES (1, 3, 1), (2, 5, 4);`;

module.exports = [
  {
    id: 'sql-modify-products',
    title: 'Cập nhật kho hàng',
    difficulty: 'medium',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Viết các câu lệnh (cách nhau bởi \`;\`) để:

1. Thêm sản phẩm \`'Monitor 27'\`, danh mục \`'electronics'\`, giá \`289000\`, tồn kho \`10\`.
2. Giảm giá **10%** cho mọi sản phẩm danh mục \`'books'\` (giá là số nguyên — làm tròn bằng \`CAST(... AS INTEGER)\` hoặc nhân \`* 9 / 10\`).
3. Xoá các sản phẩm **hết hàng** (\`stock = 0\`) **chưa từng được bán** (không xuất hiện trong \`order_items\`).

Bộ chấm sẽ chạy \`SELECT id, name, price, stock FROM products ORDER BY id\` sau code của bạn.
`,
    starter: `
INSERT INTO products (name, category, price, stock)
VALUES ('Monitor 27', 'electronics', 289000, 10);

-- 2. giảm giá sách

-- 3. xoá sản phẩm hết hàng chưa từng bán
`,
    solution: `
INSERT INTO products (name, category, price, stock)
VALUES ('Monitor 27', 'electronics', 289000, 10);

UPDATE products
SET price = price * 9 / 10
WHERE category = 'books';

DELETE FROM products
WHERE stock = 0
  AND id NOT IN (SELECT product_id FROM order_items);
`,
    hints: [
      'Phép chia số nguyên trong SQLite: `price * 9 / 10` (nhân trước để không mất phần lẻ).',
      'Điều kiện "chưa từng được bán": `id NOT IN (SELECT product_id FROM order_items)` hoặc `NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = products.id)`.',
      '`Green Tea Set` hết hàng nhưng **đã từng bán** (đơn 9) → phải giữ lại, vì `order_items` còn tham chiếu tới nó.'
    ],
    explain: 'Nếu xoá cả sản phẩm đã bán, các dòng `order_items` cũ sẽ trỏ tới sản phẩm không còn tồn tại — với khoá ngoại bật, database sẽ từ chối; không bật thì dữ liệu lịch sử bị hỏng. Đó là lý do hệ thống thật thường **xoá mềm** sản phẩm.',
    tests: [
      {
        label: 'Bảng products sau khi chạy', ordered: true,
        after: 'SELECT id, name, price, stock FROM products ORDER BY id',
        expected: [[1, 'Laptop Pro 14', 1890000, 5], [2, 'Wireless Mouse', 35000, 120], [3, 'Mechanical Keyboard', 129000, 40], [5, 'Clean Code', 28800, 25], [6, 'Designing Data-Intensive Applications', 43200, 12], [7, 'Coffee Beans 1kg', 27000, 60], [8, 'Green Tea Set', 18000, 0], [9, 'Standing Desk', 450000, 3], [10, 'Office Chair', 320000, 7], [11, 'Monitor 27', 289000, 10]]
      },
      {
        label: 'Dữ liệu khác: thêm sách và sản phẩm hết hàng', hidden: true, ordered: true,
        setup: "INSERT INTO products (id, name, category, price, stock) VALUES (20, 'SQL Antipatterns', 'books', 41000, 2), (21, 'Old Cable', 'electronics', 5000, 0); UPDATE products SET stock = 0 WHERE id = 7;",
        after: 'SELECT id, name, price, stock FROM products ORDER BY id',
        expected: [[1, 'Laptop Pro 14', 1890000, 5], [2, 'Wireless Mouse', 35000, 120], [3, 'Mechanical Keyboard', 129000, 40], [5, 'Clean Code', 28800, 25], [6, 'Designing Data-Intensive Applications', 43200, 12], [7, 'Coffee Beans 1kg', 27000, 0], [8, 'Green Tea Set', 18000, 0], [9, 'Standing Desk', 450000, 3], [10, 'Office Chair', 320000, 7], [20, 'SQL Antipatterns', 36900, 2], [22, 'Monitor 27', 289000, 10]]
      }
    ]
  },
  {
    id: 'sql-create-reviews',
    title: 'Thiết kế bảng có ràng buộc',
    difficulty: 'medium',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Tạo bảng \`reviews\` lưu đánh giá sản phẩm, với các cột:

| Cột | Yêu cầu |
| --- | --- |
| \`id\` | INTEGER, khoá chính |
| \`product_id\` | bắt buộc, khoá ngoại tới \`products(id)\` |
| \`user_id\` | bắt buộc, khoá ngoại tới \`users(id)\` |
| \`rating\` | INTEGER bắt buộc, chỉ từ **1 đến 5** |
| \`comment\` | TEXT, không bắt buộc |

Thêm ràng buộc: mỗi người dùng chỉ được đánh giá **một lần** cho mỗi sản phẩm. Bộ chấm sẽ thử chèn dữ liệu sai và kiểm tra database có **từ chối** không.
`,
    starter: `
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  user_id INTEGER,
  rating INTEGER,
  comment TEXT
);
`,
    solution: `
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  UNIQUE (product_id, user_id)
);
`,
    hints: [
      '`NOT NULL`, `REFERENCES bảng(cột)`, `CHECK (rating BETWEEN 1 AND 5)`.',
      'Ràng buộc trên hai cột: thêm dòng `UNIQUE (product_id, user_id)` cuối định nghĩa bảng.'
    ],
    tests: [
      { label: 'Chèn đánh giá hợp lệ', after: "INSERT INTO reviews (product_id, user_id, rating, comment) VALUES (1, 1, 5, 'Tốt'), (1, 2, 4, NULL); SELECT product_id, user_id, rating FROM reviews ORDER BY user_id", ordered: true, expected: [[1, 1, 5], [1, 2, 4]] },
      { label: 'rating = 6 phải bị từ chối', expectError: true, after: 'INSERT INTO reviews (product_id, user_id, rating) VALUES (1, 1, 6)' },
      { label: 'rating = 0 phải bị từ chối', expectError: true, after: 'INSERT INTO reviews (product_id, user_id, rating) VALUES (1, 1, 0)' },
      { label: 'thiếu rating phải bị từ chối', expectError: true, after: 'INSERT INTO reviews (product_id, user_id) VALUES (1, 1)' },
      { label: 'thiếu user_id phải bị từ chối', expectError: true, after: 'INSERT INTO reviews (product_id, rating) VALUES (1, 3)' },
      { label: 'một người đánh giá cùng sản phẩm hai lần phải bị từ chối', expectError: true, after: 'INSERT INTO reviews (product_id, user_id, rating) VALUES (2, 3, 5); INSERT INTO reviews (product_id, user_id, rating) VALUES (2, 3, 1)' },
      { label: 'product_id không tồn tại phải bị từ chối (khoá ngoại bật)', setup: 'PRAGMA foreign_keys = ON;', expectError: true, after: 'INSERT INTO reviews (product_id, user_id, rating) VALUES (999, 1, 5)' }
    ]
  },
  {
    id: 'sql-upsert-cart',
    title: 'Thêm vào giỏ hàng (UPSERT)',
    difficulty: 'medium',
    kind: 'sql',
    schema: CART,
    prompt: `
Bảng \`cart_items(user_id, product_id, quantity)\` có khoá chính ghép \`(user_id, product_id)\`. Viết **một câu lệnh** để người dùng \`1\` thêm **2** sản phẩm \`3\` vào giỏ: nếu đã có dòng đó thì **cộng dồn** \`quantity\`, chưa có thì thêm mới.

Bộ chấm chạy câu lệnh trên các trạng thái giỏ hàng khác nhau, rồi \`SELECT * FROM cart_items ORDER BY user_id, product_id\`.
`,
    starter: `
INSERT INTO cart_items (user_id, product_id, quantity)
VALUES (1, 3, 2);
`,
    solution: `
INSERT INTO cart_items (user_id, product_id, quantity)
VALUES (1, 3, 2)
ON CONFLICT (user_id, product_id)
DO UPDATE SET quantity = quantity + excluded.quantity;
`,
    hints: [
      '`INSERT ... ON CONFLICT (cột khoá) DO UPDATE SET ...`',
      '`excluded.quantity` là giá trị bạn **định** chèn (2); `quantity` là giá trị đang có trong bảng.'
    ],
    explain: 'Cú pháp này có trong SQLite và PostgreSQL. MySQL viết `INSERT ... ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)`. Ý tưởng giống nhau: một thao tác nguyên tử, không có khoảng hở giữa "kiểm tra" và "ghi".',
    tests: [
      { label: 'Giỏ đã có 1 sản phẩm 3 → thành 3', after: 'SELECT * FROM cart_items ORDER BY user_id, product_id', ordered: true, expected: [[1, 3, 3], [2, 5, 4]] },
      { label: 'Giỏ chưa có sản phẩm 3 → thêm mới 2', setup: 'DELETE FROM cart_items WHERE user_id = 1;', after: 'SELECT * FROM cart_items ORDER BY user_id, product_id', ordered: true, expected: [[1, 3, 2], [2, 5, 4]] },
      { label: 'Giỏ đang có 5 → thành 7', hidden: true, setup: 'UPDATE cart_items SET quantity = 5 WHERE user_id = 1;', after: 'SELECT * FROM cart_items ORDER BY user_id, product_id', ordered: true, expected: [[1, 3, 7], [2, 5, 4]] }
    ]
  }
];
