---
id: rp-structure
title: Cấu trúc một dự án backend
---
## Chia lớp: routes → service → repository

```text
HTTP request
   │
   ▼
routes      đọc req (params, query, body), gọi service, chọn status code, trả JSON
   │
   ▼
service     nghiệp vụ: kiểm tra quy tắc, điều phối nhiều bước, quản lý transaction
   │
   ▼
repository  CHỈ có SQL: findById, list, insert...
   │
   ▼
PostgreSQL
```

Tại sao tách? Mỗi lớp **một lý do để thay đổi**: đổi định dạng response → chỉ sửa routes; đổi quy tắc giảm giá → service; tối ưu câu SQL → repository. Spring Boot bên Java dùng đúng mô hình này với tên `Controller → Service → Repository`.

Đừng chia lớp máy móc: route chỉ đọc một sản phẩm thì gọi thẳng repository là đủ (project làm vậy với products). Thêm lớp khi có **logic** cần đặt ở đó.

## Dependency injection: `createApp({ db, config })`

```js
// ❌ Khó test: module tự tạo kết nối tới database thật lúc import
import { pool } from './db.js';

// ✅ Nhận phụ thuộc từ bên ngoài
export function createApp({ db, config }) { /* ... */ }

// server.js:  createApp({ db: createDb(process.env.DATABASE_URL), config })
// test:       createApp({ db: createDb(TEST_DATABASE_URL), config: testConfig })
```

Test truyền database test; production truyền database thật; code ứng dụng không cần biết.

## Cấu hình qua biến môi trường (12-factor)

- Cùng một image chạy ở dev / staging / production, chỉ khác **biến môi trường** (`DATABASE_URL`, `JWT_SECRET`...).
- **Không** commit secret vào git. `.env` nằm trong `.gitignore`; chỉ commit `.env.example`.
- **Fail fast**: kiểm tra cấu hình ngay khi khởi động và dừng với thông báo rõ ràng, thay vì chạy được nửa ngày rồi lỗi khi request đầu tiên cần `JWT_SECRET`.

## Xử lý lỗi một chỗ

Service ném lỗi có ý nghĩa (`throw notFound('Product not found')`), error middleware dịch thành response. Express 5 tự chuyển lỗi của handler `async` tới error middleware (Express 4 thì không — phải bọc `try/catch` hoặc dùng thư viện).

## Graceful shutdown

Khi deploy phiên bản mới, Docker/Kubernetes gửi `SIGTERM`. Server tốt sẽ: ngừng nhận request mới → chờ request đang xử lý xong → đóng pool database → thoát. Không làm vậy, người dùng đang đặt hàng giữa chừng sẽ nhận lỗi.

## Câu hỏi tại sao

- Đặt logic transaction ở service hay repository? Nếu một nghiệp vụ cần ghi vào hai repository (orders và products) thì sao?
- `config.js` của project cho phép `JWT_SECRET` mặc định khi dev nhưng bắt buộc khi production. Trade-off của việc có giá trị mặc định là gì?
