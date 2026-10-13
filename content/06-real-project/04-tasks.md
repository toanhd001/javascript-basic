---
id: rp-tasks
title: Làm 6 nhiệm vụ của shop-api
---
Đây là phần **thực hành chính** của chặng: code chạy trên máy bạn, với PostgreSQL thật. Hướng dẫn chi tiết, sơ đồ thư mục và cách xử lý lỗi nằm trong `projects/shop-api/README.md`.

## 1. Chuẩn bị (một lần)

```bash
cd projects/shop-api
npm install
docker compose up -d db
npm run migrate
npm run seed
npm test            # 19 test "phần mẫu" phải qua; các test nhiệm vụ trượt — bình thường
```

## 2. Vòng lặp làm một nhiệm vụ

1. `npm run task` để xem danh sách, đọc **comment hướng dẫn** ngay trên dòng `throw notImplemented('NHIỆM VỤ n ...')`.
2. Đọc code **MẪU** gần đó (`register`, `products.create`, `cancelOrder`) — chúng dùng đúng các kỹ thuật bạn cần.
3. Viết code. Chạy `npm run dev` và thử bằng `curl` / Postman nếu muốn xem tận mắt.
4. `npm run task -- n` cho đến khi tất cả test của nhiệm vụ đó qua.
5. `npm test` để chắc không làm hỏng phần khác.
6. Mở `solutions/` để **so sánh** (không phải để chép), rồi trả lời câu "tại sao" bên dưới.

## 3. Đọc kết quả test

```text
not ok 6 - 5 request ĐỒNG THỜI mua sản phẩm chỉ còn 3 cái → đúng 3 thành công, kho về 0
  error: |-
    Expected values to be strictly deep-equal:
    + actual - expected
      [ 201, 201, 201,
    +   201,
    +   201
    -   409,
    -   409 ]
```

Dòng `+` là **thực tế** code của bạn trả về, `-` là **mong đợi**. Ở ví dụ trên: 5 đơn đều thành công trong khi kho chỉ có 3 → bán vượt.

## 4. Debug với database

```bash
docker compose exec db psql -U shop -d shop
```

```sql
SELECT id, name, stock FROM products ORDER BY id;
EXPLAIN SELECT * FROM orders WHERE user_id = 1;   -- Nhiệm vụ 6
SELECT * FROM schema_migrations;                  -- migration nào đã chạy
```

Muốn làm lại dữ liệu sạch: `npm run seed`. Test dùng database riêng `shop_test` và tự dựng lại từ đầu mỗi lần, nên không ảnh hưởng dữ liệu dev.

## 5. Sáu nhiệm vụ

| # | Việc | Học được | Câu hỏi tại sao |
| --- | --- | --- | --- |
| 1 | `GET /products/:id` | placeholder `$1`, 400 vs 404 | Tại sao `/products/abc` là 400 mà không phải 404? |
| 2 | `GET /products` lọc + sắp xếp + phân trang | WHERE động, whitelist ORDER BY, escape LIKE | Tại sao `sort` không truyền qua placeholder được? |
| 3 | `POST /auth/login` | so mật khẩu băm, cấp JWT | Tại sao "sai email" và "sai mật khẩu" phải trả cùng một thông báo? |
| 4 | `POST /orders` | transaction, trừ kho nguyên tử, tránh deadlock | Tại sao xử lý item theo `productId` tăng dần lại tránh được deadlock? |
| 5 | `GET /me/orders` | sửa N+1, `= ANY($1)` | Khi nào JOIN một lần tốt hơn hai truy vấn, và ngược lại? |
| 6 | Migration tạo index | migration, `EXPLAIN` | Tại sao test phải tắt `enable_seqscan` mới thấy index được dùng? |

Gợi ý thứ tự: **1 → 2 → 3 → 5 → 6 → 4**. Nhiệm vụ 4 khó nhất vì lỗi của nó chỉ lộ ra khi có nhiều request **cùng lúc** — test đã mô phỏng điều đó cho bạn.

## 6. Mang vào phỏng vấn

Sau khi xong, bạn có một câu chuyện thật để kể trong phần 프로젝트 질문: *"Em viết API đặt hàng; lúc đầu dùng SELECT rồi UPDATE nên khi test 5 request đồng thời thì bán vượt kho. Em đổi sang UPDATE có điều kiện trong transaction, xử lý theo thứ tự id để tránh deadlock, và viết test tái hiện race condition."* — đó là loại câu trả lời người phỏng vấn muốn nghe: vấn đề → nguyên nhân → cách sửa → cách kiểm chứng.
