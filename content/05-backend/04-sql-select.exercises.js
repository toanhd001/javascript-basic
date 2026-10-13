const SHOP = require('./_shop-seed.js');

module.exports = [
  {
    id: 'sql-select-filter',
    title: 'Sản phẩm điện tử còn hàng',
    difficulty: 'easy',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Lấy \`name\`, \`price\` của các sản phẩm thuộc danh mục \`electronics\` **còn hàng** (\`stock > 0\`), sắp theo giá **giảm dần**.
`,
    starter: `
SELECT *
FROM products;
`,
    solution: `
SELECT name, price
FROM products
WHERE category = 'electronics' AND stock > 0
ORDER BY price DESC;
`,
    hints: ['`WHERE category = \'electronics\' AND stock > 0` rồi `ORDER BY price DESC`.'],
    tests: [
      { label: 'Dữ liệu mẫu', ordered: true, columns: ['name', 'price'], expected: [['Laptop Pro 14', 1890000], ['Mechanical Keyboard', 129000], ['Wireless Mouse', 35000]] },
      {
        label: 'Thêm 2 sản phẩm điện tử (1 hết hàng)', hidden: true, ordered: true, columns: ['name', 'price'],
        setup: "INSERT INTO products (name, category, price, stock) VALUES ('Monitor 27', 'electronics', 289000, 9), ('Webcam', 'electronics', 79000, 0);",
        expected: [['Laptop Pro 14', 1890000], ['Monitor 27', 289000], ['Mechanical Keyboard', 129000], ['Wireless Mouse', 35000]]
      }
    ]
  },
  {
    id: 'sql-null-like',
    title: 'Gmail hoặc chưa có thành phố',
    difficulty: 'easy',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Lấy \`name\`, \`email\` của người dùng có email đuôi \`@gmail.com\` **hoặc** chưa khai báo thành phố (\`city\` là NULL). Sắp theo \`id\` tăng dần.
`,
    starter: `
SELECT name, email
FROM users
WHERE email LIKE '%@gmail.com' OR city = NULL
ORDER BY id;
`,
    solution: `
SELECT name, email
FROM users
WHERE email LIKE '%@gmail.com' OR city IS NULL
ORDER BY id;
`,
    hints: ['Code có sẵn gần đúng. Chạy thử xem người dùng `Dũng` (city NULL) có xuất hiện không. Đọc lại phần NULL trong bài.'],
    tests: [
      { label: 'Dữ liệu mẫu', ordered: true, expected: [['An', 'an@gmail.com'], ['Chi', 'chi@gmail.com'], ['Dũng', 'dung@kakao.com'], ['Minh', 'minh@gmail.com']] },
      {
        label: 'Thêm người dùng không có thành phố', hidden: true, ordered: true,
        setup: "INSERT INTO users (id, name, email, city, created_at) VALUES (9, 'Tuấn', 'tuan@daum.net', NULL, '2024-06-01'), (10, 'Yuna', 'yuna@gmail.co.kr', 'Seoul', '2024-06-02');",
        expected: [['An', 'an@gmail.com'], ['Chi', 'chi@gmail.com'], ['Dũng', 'dung@kakao.com'], ['Minh', 'minh@gmail.com'], ['Tuấn', 'tuan@daum.net']]
      }
    ]
  },
  {
    id: 'sql-pagination',
    title: 'Phân trang',
    difficulty: 'easy',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Danh sách sản phẩm sắp theo \`price\` tăng dần (bằng giá thì theo \`id\` tăng dần), mỗi trang **3** sản phẩm. Lấy \`id\`, \`name\`, \`price\` của **trang 2**.
`,
    starter: `
SELECT id, name, price
FROM products
ORDER BY price
LIMIT 3;
`,
    solution: `
SELECT id, name, price
FROM products
ORDER BY price ASC, id ASC
LIMIT 3 OFFSET 3;
`,
    hints: ['Trang p, mỗi trang n dòng: `LIMIT n OFFSET (p - 1) * n`.', 'Thêm tiêu chí phụ `id` vào ORDER BY để thứ tự ổn định khi có giá bằng nhau.'],
    tests: [
      { label: 'Dữ liệu mẫu', ordered: true, expected: [[2, 'Wireless Mouse', 35000], [6, 'Designing Data-Intensive Applications', 48000], [4, 'USB-C Hub', 59000]] },
      {
        label: 'Thêm sản phẩm giá 30.000 và hai sản phẩm cùng giá 35.000', hidden: true, ordered: true,
        setup: "INSERT INTO products (id, name, category, price, stock) VALUES (11, 'Notebook', 'books', 30000, 5), (12, 'Mouse Pad', 'electronics', 35000, 50);",
        expected: [[5, 'Clean Code', 32000], [2, 'Wireless Mouse', 35000], [12, 'Mouse Pad', 35000]]
      }
    ]
  },
  {
    id: 'sql-in-between',
    title: 'Đơn hàng tháng 5',
    difficulty: 'easy',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Lấy \`id\`, \`status\`, \`created_at\` của các đơn hàng tạo trong **tháng 5/2024** có trạng thái \`paid\` **hoặc** \`pending\`, sắp theo \`created_at\` tăng dần.

Gợi ý: \`created_at\` lưu dạng chuỗi \`'YYYY-MM-DD'\` nên so sánh chuỗi theo thứ tự từ điển vẫn đúng.
`,
    starter: `
SELECT id, status, created_at
FROM orders
WHERE status = 'paid' OR status = 'pending' AND created_at LIKE '2024-05%';
`,
    solution: `
SELECT id, status, created_at
FROM orders
WHERE created_at BETWEEN '2024-05-01' AND '2024-05-31'
  AND status IN ('paid', 'pending')
ORDER BY created_at;
`,
    hints: [
      'Code có sẵn sai vì độ ưu tiên: `AND` được tính trước `OR`. Dùng ngoặc, hoặc `IN (...)`.',
      'Đừng quên `ORDER BY`.'
    ],
    explain: '`a OR b AND c` nghĩa là `a OR (b AND c)` — giống `+` và `*` trong toán. Bug này rất hay gặp và **không báo lỗi**, chỉ trả kết quả sai. Viết ngoặc rõ ràng, hoặc dùng `IN`.',
    tests: [
      { label: 'Dữ liệu mẫu', ordered: true, expected: [[1, 'paid', '2024-05-01'], [2, 'paid', '2024-05-10'], [3, 'pending', '2024-05-11'], [4, 'paid', '2024-05-12'], [6, 'paid', '2024-05-20']] },
      {
        label: 'Thêm đơn ngày 31/5 và 1/6', hidden: true, ordered: true,
        setup: "INSERT INTO orders (id, user_id, status, created_at) VALUES (11, 2, 'pending', '2024-05-31'), (12, 2, 'paid', '2024-04-30');",
        expected: [[1, 'paid', '2024-05-01'], [2, 'paid', '2024-05-10'], [3, 'pending', '2024-05-11'], [4, 'paid', '2024-05-12'], [6, 'paid', '2024-05-20'], [11, 'pending', '2024-05-31']]
      }
    ]
  }
];
