-- Dữ liệu mẫu. Mọi tài khoản có mật khẩu: password123
-- (password_hash tạo bởi scrypt — xem src/lib/password.js)

INSERT INTO users (email, name, password_hash, role) VALUES
  ('an@example.com', 'An', 'scrypt$6a2f1c9e8b7d4a3f5e6d7c8b9a0f1e2d$4f7cf260eb4071b4e60a1f8aacdd368b289410c9dc948054582bddf6eb3df6b9', 'user'),
  ('jisoo@example.com', 'Jisoo', 'scrypt$6a2f1c9e8b7d4a3f5e6d7c8b9a0f1e2d$4f7cf260eb4071b4e60a1f8aacdd368b289410c9dc948054582bddf6eb3df6b9', 'user'),
  ('admin@example.com', 'Admin', 'scrypt$6a2f1c9e8b7d4a3f5e6d7c8b9a0f1e2d$4f7cf260eb4071b4e60a1f8aacdd368b289410c9dc948054582bddf6eb3df6b9', 'admin');

INSERT INTO products (name, category, price, stock) VALUES
  ('Laptop Pro 14', 'electronics', 1890000, 5),
  ('Wireless Mouse', 'electronics', 35000, 120),
  ('Mechanical Keyboard', 'electronics', 129000, 40),
  ('USB-C Hub', 'electronics', 59000, 0),
  ('Clean Code', 'books', 32000, 25),
  ('Designing Data-Intensive Applications', 'books', 48000, 12),
  ('Coffee Beans 1kg', 'food', 27000, 60),
  ('Green Tea Set', 'food', 18000, 0),
  ('Standing Desk', 'furniture', 450000, 3),
  ('Office Chair', 'furniture', 320000, 7);

INSERT INTO orders (user_id, status, total, created_at) VALUES
  (1, 'paid', 1960000, '2024-05-01T10:00:00Z'),
  (1, 'pending', 32000, '2024-05-10T10:00:00Z'),
  (2, 'paid', 129000, '2024-05-11T10:00:00Z');

INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
  (1, 1, 1, 1890000),
  (1, 2, 2, 35000),
  (2, 5, 1, 32000),
  (3, 3, 1, 129000);
