# shop-api — dự án backend thật: Express + PostgreSQL + Docker

API cho một cửa hàng nhỏ (người dùng, sản phẩm, đơn hàng), dùng đúng bộ dữ liệu của các bài SQL trên trang JS Learn — nhưng lần này chạy **thật**: Node.js 22, Express 5, PostgreSQL 16 trong Docker, test tự động bằng `node:test` trên database thật.

Một phần đã được viết sẵn làm **mẫu** (đăng ký, xác thực, tạo sản phẩm, huỷ đơn bằng transaction). **6 nhiệm vụ** để trống cho bạn tự làm — mỗi nhiệm vụ có bộ test kiểm tra, kể cả test gửi request **đồng thời**.

## Cần cài

- [Node.js 22+](https://nodejs.org)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/macOS) hoặc Docker Engine (Linux)

## Bắt đầu (5 phút)

```bash
cd projects/shop-api
npm install                    # cài express + pg
docker compose up -d db        # chạy PostgreSQL trong container (lần đầu sẽ tải image ~100MB)
npm run migrate                # tạo bảng (db/migrations/*.sql)
npm run seed                   # nạp dữ liệu mẫu — mọi tài khoản có mật khẩu: password123
npm run dev                    # chạy API ở http://localhost:3000, tự khởi động lại khi sửa code
```

Thử API (terminal khác, hoặc dùng Postman / extension REST Client của VS Code):

```bash
curl localhost:3000/health
curl -X POST localhost:3000/auth/register -H "content-type: application/json" \
     -d '{"email":"toi@example.com","name":"Tôi","password":"password123"}'
curl localhost:3000/products/1          # → 501: đây là Nhiệm vụ 1 của bạn
```

Xem dữ liệu trực tiếp trong Postgres:

```bash
docker compose exec db psql -U shop -d shop
shop=# \dt                              -- liệt kê bảng
shop=# SELECT * FROM products LIMIT 3;
shop=# \q
```

## Cấu trúc

```
src/
  server.js                 điểm khởi động: đọc config, tạo pool DB, listen, tắt êm khi nhận SIGTERM
  app.js                    createApp({ db, config }) — middleware, routes, error handler
  config.js                 đọc biến môi trường, báo lỗi ngay nếu cấu hình sai
  db.js                     pool PostgreSQL + db.transaction() + đếm số truy vấn
  errors.js                 HttpError và các hàm tắt: badRequest, notFound, conflict...
  lib/                      password (scrypt), token (JWT HS256), validate
  middleware/               auth (requireAuth, requireRole), error-handler, request-logger
  modules/
    auth/       auth.routes.js → auth.service.js
    products/   products.routes.js → products.repository.js
    orders/     orders.routes.js → orders.service.js → orders.repository.js
db/
  migrations/               001_init.sql, ... — mỗi file chạy đúng một lần
  seed.sql                  dữ liệu mẫu
  init/                     tạo database shop_test khi container Postgres khởi tạo lần đầu
test/                       core.test.js (phần mẫu) + task1..6 (nhiệm vụ)
solutions/                  lời giải tham khảo — chỉ mở sau khi đã tự làm
```

Các lớp: **routes** lo HTTP (đọc request, chọn status code) → **service** lo nghiệp vụ và transaction → **repository** chỉ chứa SQL. Đọc các file "MẪU" trước khi làm nhiệm vụ.

## Nhiệm vụ

```bash
npm run task            # liệt kê
npm run task -- 1       # chạy test của Nhiệm vụ 1
npm test                # chạy tất cả (phần mẫu luôn phải qua)
```

Mỗi chỗ cần viết có `throw notImplemented('NHIỆM VỤ n ...')` kèm hướng dẫn chi tiết trong comment ngay phía trên.

| # | Nhiệm vụ | File | Học được |
| --- | --- | --- | --- |
| 1 | `GET /products/:id` | `products.routes.js`, `products.repository.js` | placeholder `$1`, 400 vs 404 |
| 2 | `GET /products` — lọc, sắp xếp, phân trang | như trên | xây WHERE động, whitelist ORDER BY, escape LIKE, `COUNT(*)::int` |
| 3 | `POST /auth/login` | `auth.service.js` | so mật khẩu băm, cấp JWT, không lộ email nào tồn tại |
| 4 | `POST /orders` | `orders.service.js` | **transaction**, trừ kho nguyên tử, chống bán vượt khi có request đồng thời, tránh deadlock |
| 5 | `GET /me/orders` | `orders.repository.js` | sửa **N+1** (tối đa 2 truy vấn), `= ANY($1)` |
| 6 | Index cho `orders(user_id)` | tạo `db/migrations/002_....sql` | viết migration, `EXPLAIN` |

Gợi ý thứ tự: 1 → 2 → 3 → 5 → 6 → 4 (khó nhất). Bí quá 30 phút: đọc lại comment hướng dẫn, `console.log` giá trị trung gian, chạy câu SQL trong `psql` — rồi mới mở `solutions/`.

> **Nhiệm vụ 4 có thể "đúng" khi bạn test bằng tay nhưng vẫn trượt test.** Test gửi 5 request mua cùng lúc một sản phẩm chỉ còn 3 cái. Cách "SELECT stock → kiểm tra → UPDATE stock = giá_trị_mới" sẽ để cả 5 request thành công (bán vượt 2 cái) — vì cả 5 cùng đọc thấy `stock = 3` trước khi ai kịp ghi. Đó là lỗi **lost update** thật, chỉ lộ ra khi có tải.

## Chạy toàn bộ bằng Docker

```bash
docker compose --profile full up --build     # build image API + chạy cùng Postgres
docker compose --profile full down           # dừng (dữ liệu vẫn còn trong volume)
```

Container API tự chạy migration rồi khởi động server (`NODE_ENV=production`, xem `Dockerfile`).

## Lệnh Docker hay dùng

| Lệnh | Tác dụng |
| --- | --- |
| `docker compose up -d db` | chạy Postgres ở chế độ nền |
| `docker compose ps` | xem container nào đang chạy, có healthy không |
| `docker compose logs -f db` | xem log |
| `docker compose exec db psql -U shop -d shop` | mở psql bên trong container |
| `docker compose down` | dừng và xoá container (**giữ** dữ liệu trong volume) |
| `docker compose down -v` | dừng và **xoá luôn dữ liệu** (làm lại từ đầu) |

## Gặp lỗi?

| Triệu chứng | Nguyên nhân / cách sửa |
| --- | --- |
| `ECONNREFUSED 127.0.0.1:5432` | Postgres chưa chạy: `docker compose up -d db`, đợi `docker compose ps` báo `healthy` |
| `port is already allocated` / 5432 đã bị chiếm | Máy đã có Postgres khác. Chạy `DB_PORT=5433 docker compose up -d db` và đặt `DATABASE_URL=postgres://shop:shop@localhost:5433/shop`, `TEST_DATABASE_URL=postgres://shop:shop@localhost:5433/shop_test` |
| `database "shop_test" does not exist` | Volume được tạo trước khi có `db/init`. `docker compose down -v && docker compose up -d db` |
| `relation "products" does not exist` | Chưa chạy `npm run migrate` |
| Test treo / `too many clients` | Một transaction không `COMMIT`/`ROLLBACK`, hoặc kết nối không được `release()` |

Trên Windows (PowerShell), đặt biến môi trường kiểu: `$env:DB_PORT=5433; docker compose up -d db`.

## Làm xong 6 nhiệm vụ? Mở rộng tiếp

- Refresh token + đăng xuất (lưu token bị thu hồi trong bảng hoặc Redis).
- Phân trang kiểu cursor cho `/me/orders`.
- Rate limit dùng Redis (thêm service `redis` vào `docker-compose.yml`).
- Tài liệu API bằng OpenAPI/Swagger.
- Viết lại cùng API bằng **Java + Spring Boot + JPA** — stack phổ biến nhất ở các công ty Hàn — và so sánh.
