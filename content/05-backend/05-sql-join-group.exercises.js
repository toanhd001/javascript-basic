const SHOP = require('./_shop-seed.js');

module.exports = [
  {
    id: 'sql-users-per-city',
    title: 'Số người dùng mỗi thành phố',
    difficulty: 'easy',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Đếm số người dùng ở mỗi thành phố (bỏ qua người chưa có thành phố). Cột kết quả: \`city\`, \`user_count\`. Sắp theo \`user_count\` **giảm dần**, bằng nhau thì theo \`city\` tăng dần.
`,
    starter: `
SELECT city, COUNT(*)
FROM users;
`,
    solution: `
SELECT city, COUNT(*) AS user_count
FROM users
WHERE city IS NOT NULL
GROUP BY city
ORDER BY user_count DESC, city ASC;
`,
    hints: ['`GROUP BY city`, đặt tên cột bằng `AS user_count`, loại NULL bằng `WHERE city IS NOT NULL`.'],
    tests: [
      { label: 'Dữ liệu mẫu', ordered: true, columns: ['city', 'user_count'], expected: [['Seoul', 3], ['Busan', 2], ['Daegu', 1], ['Incheon', 1]] },
      {
        label: 'Thêm người dùng ở Daegu', hidden: true, ordered: true, columns: ['city', 'user_count'],
        setup: "INSERT INTO users (id, name, email, city, created_at) VALUES (9, 'Lan', 'lan@naver.com', 'Daegu', '2024-06-01'), (10, 'Sora', 'sora@naver.com', 'Daegu', '2024-06-01');",
        expected: [['Daegu', 3], ['Seoul', 3], ['Busan', 2], ['Incheon', 1]]
      }
    ]
  },
  {
    id: 'sql-orders-per-user',
    title: 'Số đơn của mỗi người (kể cả 0)',
    difficulty: 'medium',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Với **mọi** người dùng, lấy \`id\`, \`name\` và số đơn hàng \`order_count\` (người chưa có đơn nào phải hiện \`0\`). Sắp theo \`id\`.
`,
    starter: `
SELECT u.id, u.name, COUNT(*) AS order_count
FROM users u
JOIN orders o ON o.user_id = u.id
GROUP BY u.id
ORDER BY u.id;
`,
    solution: `
SELECT u.id, u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
GROUP BY u.id, u.name
ORDER BY u.id;
`,
    hints: [
      '`JOIN` (INNER) loại mất người chưa có đơn. Cần `LEFT JOIN`.',
      'Với LEFT JOIN, `COUNT(*)` đếm cả dòng NULL → người không có đơn bị tính 1. Dùng `COUNT(o.id)`.'
    ],
    explain: 'Hai lỗi chồng lên nhau trong code có sẵn — và cả hai **không báo lỗi**, chỉ cho số sai. Đây là câu hỏi SQL phỏng vấn rất phổ biến.',
    tests: [
      { label: 'Dữ liệu mẫu', ordered: true, columns: ['id', 'name', 'order_count'], expected: [[1, 'An', 3], [2, 'Bình', 1], [3, 'Chi', 2], [4, 'Dũng', 0], [5, 'Hà', 1], [6, 'Minh', 1], [7, 'Jisoo', 2], [8, 'Minho', 0]] },
      {
        label: 'Người dùng mới chưa có đơn + đơn mới của Minho', hidden: true, ordered: true, columns: ['id', 'name', 'order_count'],
        setup: "INSERT INTO users (id, name, email, city, created_at) VALUES (9, 'Lan', 'lan@naver.com', 'Daegu', '2024-06-01'); INSERT INTO orders (id, user_id, status, created_at) VALUES (11, 8, 'paid', '2024-06-07');",
        expected: [[1, 'An', 3], [2, 'Bình', 1], [3, 'Chi', 2], [4, 'Dũng', 0], [5, 'Hà', 1], [6, 'Minh', 1], [7, 'Jisoo', 2], [8, 'Minho', 1], [9, 'Lan', 0]]
      }
    ]
  },
  {
    id: 'sql-revenue-by-category',
    title: 'Doanh thu theo danh mục',
    difficulty: 'medium',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Tính doanh thu \`revenue\` = tổng \`quantity * unit_price\` theo **danh mục sản phẩm**, chỉ tính các đơn có \`status = 'paid'\`. Chỉ giữ danh mục có doanh thu **≥ 150.000**. Cột: \`category\`, \`revenue\`; sắp theo doanh thu giảm dần.
`,
    starter: `
SELECT p.category, SUM(oi.quantity * oi.unit_price) AS revenue
FROM order_items oi
JOIN products p ON p.id = oi.product_id
GROUP BY p.category
ORDER BY revenue DESC;
`,
    solution: `
SELECT p.category, SUM(oi.quantity * oi.unit_price) AS revenue
FROM order_items oi
JOIN orders o ON o.id = oi.order_id
JOIN products p ON p.id = oi.product_id
WHERE o.status = 'paid'
GROUP BY p.category
HAVING SUM(oi.quantity * oi.unit_price) >= 150000
ORDER BY revenue DESC;
`,
    hints: [
      'Trạng thái nằm ở bảng `orders` — cần JOIN thêm bảng này rồi lọc bằng `WHERE`.',
      'Điều kiện trên **tổng** (sau khi gộp) phải viết trong `HAVING`, không phải `WHERE`.'
    ],
    tests: [
      { label: 'Dữ liệu mẫu', ordered: true, columns: ['category', 'revenue'], expected: [['electronics', 2124000], ['furniture', 320000], ['books', 208000]] },
      {
        label: 'Đơn pending của Bình được thanh toán', hidden: true, ordered: true, columns: ['category', 'revenue'],
        setup: "UPDATE orders SET status = 'paid' WHERE id = 3; INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (3, 8, 1, 18000);",
        expected: [['electronics', 2253000], ['furniture', 320000], ['books', 208000], ['food', 153000]]
      }
    ]
  },
  {
    id: 'sql-top-customers',
    title: 'Top 3 khách hàng',
    difficulty: 'medium',
    kind: 'sql',
    schema: SHOP,
    prompt: `
Tìm 3 khách hàng **chi tiêu nhiều nhất** (chỉ tính đơn \`paid\`). Cột: \`name\`, \`total_spent\`; sắp giảm dần theo \`total_spent\`.
`,
    starter: `
SELECT u.name
FROM users u;
`,
    solution: `
SELECT u.name, SUM(oi.quantity * oi.unit_price) AS total_spent
FROM users u
JOIN orders o ON o.user_id = u.id
JOIN order_items oi ON oi.order_id = o.id
WHERE o.status = 'paid'
GROUP BY u.id, u.name
ORDER BY total_spent DESC
LIMIT 3;
`,
    hints: ['JOIN ba bảng `users → orders → order_items`, lọc `paid`, `GROUP BY u.id`, `ORDER BY ... DESC LIMIT 3`.', 'Nên `GROUP BY u.id` chứ không chỉ `u.name` — hai người có thể trùng tên.'],
    tests: [
      { label: 'Dữ liệu mẫu', ordered: true, columns: ['name', 'total_spent'], expected: [['An', 2040000], ['Hà', 320000], ['Jisoo', 183000]] },
      {
        label: 'Có hai khách cùng tên "An"', hidden: true, ordered: true, columns: ['name', 'total_spent'],
        setup: "INSERT INTO users (id, name, email, city, created_at) VALUES (9, 'An', 'an2@naver.com', 'Busan', '2024-06-01'); INSERT INTO orders (id, user_id, status, created_at) VALUES (11, 9, 'paid', '2024-06-08'); INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (11, 9, 1, 450000);",
        expected: [['An', 2040000], ['An', 450000], ['Hà', 320000]]
      }
    ]
  }
];
