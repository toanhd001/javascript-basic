-- NHIỆM VỤ 6: khoá ngoại KHÔNG tự có index trong PostgreSQL.
-- Thêm cả created_at để truy vấn "đơn của user, mới nhất trước" đọc thẳng theo thứ tự của index.
CREATE INDEX idx_orders_user_id_created_at ON orders (user_id, created_at DESC);

-- Bảng lớn đang chạy production: dùng CREATE INDEX CONCURRENTLY để không khoá ghi bảng
-- (nhưng CONCURRENTLY không chạy được bên trong transaction — migrate.js bọc mỗi file trong BEGIN/COMMIT).
