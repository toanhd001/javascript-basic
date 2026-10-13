// Dữ liệu mẫu "cửa hàng" dùng chung cho các bài SQL và API + Database của chặng Backend.
module.exports = `
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  city TEXT,
  created_at TEXT NOT NULL
);
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price INTEGER NOT NULL,      -- đơn vị: won
  stock INTEGER NOT NULL
);
CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'
  created_at TEXT NOT NULL
);
CREATE TABLE order_items (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id),
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua
);

INSERT INTO users (id, name, email, city, created_at) VALUES
  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),
  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),
  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),
  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),
  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),
  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),
  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),
  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');

INSERT INTO products (id, name, category, price, stock) VALUES
  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),
  (2, 'Wireless Mouse', 'electronics', 35000, 120),
  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),
  (4, 'USB-C Hub', 'electronics', 59000, 0),
  (5, 'Clean Code', 'books', 32000, 25),
  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),
  (7, 'Coffee Beans 1kg', 'food', 27000, 60),
  (8, 'Green Tea Set', 'food', 18000, 0),
  (9, 'Standing Desk', 'furniture', 450000, 3),
  (10, 'Office Chair', 'furniture', 320000, 7);

INSERT INTO orders (id, user_id, status, created_at) VALUES
  (1, 1, 'paid', '2024-05-01'),
  (2, 1, 'paid', '2024-05-10'),
  (3, 2, 'pending', '2024-05-11'),
  (4, 3, 'paid', '2024-05-12'),
  (5, 3, 'cancelled', '2024-05-13'),
  (6, 5, 'paid', '2024-05-20'),
  (7, 6, 'paid', '2024-06-01'),
  (8, 7, 'pending', '2024-06-02'),
  (9, 1, 'cancelled', '2024-06-03'),
  (10, 7, 'paid', '2024-06-05');

INSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES
  (1, 1, 1, 1, 1890000),
  (2, 1, 2, 2, 35000),
  (3, 2, 5, 1, 32000),
  (4, 2, 6, 1, 48000),
  (5, 3, 3, 1, 129000),
  (6, 4, 7, 3, 27000),
  (7, 4, 2, 1, 35000),
  (8, 5, 9, 1, 450000),
  (9, 6, 10, 1, 320000),
  (10, 7, 6, 2, 48000),
  (11, 7, 5, 1, 32000),
  (12, 8, 1, 1, 1890000),
  (13, 9, 8, 2, 18000),
  (14, 10, 3, 1, 129000),
  (15, 10, 7, 2, 27000);
`.trim();
