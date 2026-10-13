-- Chạy MỘT lần khi container Postgres khởi tạo volume lần đầu: tạo thêm database riêng cho test.
-- (Test xoá sạch dữ liệu trước mỗi bài — không được chạy trên database dev của bạn.)
CREATE DATABASE shop_test OWNER shop;
