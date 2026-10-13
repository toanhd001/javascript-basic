---
id: rp-docker
title: Docker cho lập trình viên backend
---
## Vấn đề Docker giải quyết

"Máy em chạy được mà!" — vì máy bạn có Postgres 16, máy đồng nghiệp có Postgres 13, server production lại cấu hình khác. Docker đóng gói **ứng dụng + môi trường** (hệ điều hành tối giản, runtime, thư viện) thành một **image** chạy giống nhau ở mọi nơi.

| Khái niệm | Giống như | Ví dụ |
| --- | --- | --- |
| **Image** | bản thiết kế, chỉ đọc | `postgres:16-alpine`, image API bạn build |
| **Container** | một lần chạy image (tiến trình cô lập) | container `shop-api-db-1` |
| **Volume** | ổ đĩa gắn ngoài, sống lâu hơn container | dữ liệu Postgres trong `pgdata` |
| **Port mapping** | nối cổng máy bạn vào cổng container | `5432:5432` |
| **Network** | mạng riêng giữa các container | API gọi Postgres bằng hostname `db` |
| **Compose** | file khai báo cả hệ thống nhiều container | `docker-compose.yml` |

## Container ≠ máy ảo

Máy ảo (VM) chạy **cả một hệ điều hành** riêng (vài GB, khởi động hàng chục giây). Container dùng chung **kernel** của máy chủ, chỉ cô lập tiến trình, file system, mạng → nhẹ (vài chục MB) và khởi động trong mili-giây. Đổi lại, cô lập kém hơn VM.

## Dockerfile — công thức build image

```text
FROM node:22-alpine                 # bắt đầu từ image có sẵn Node 22 (Alpine Linux: rất nhỏ)
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev               # cài dependencies production
COPY src ./src                      # rồi mới copy source code
USER node                           # không chạy bằng root
CMD ["node", "src/server.js"]
```

Mỗi dòng tạo ra một **layer** được cache. Docker chỉ build lại từ layer đầu tiên bị thay đổi. Vì vậy copy `package.json` và chạy `npm ci` **trước** khi copy code: sửa code không làm cài lại `node_modules` (tiết kiệm hàng phút mỗi lần build).

## docker-compose.yml của project

```text
services:
  db:
    image: postgres:16-alpine
    environment: { POSTGRES_USER: shop, POSTGRES_PASSWORD: shop, POSTGRES_DB: shop }
    ports: ["5432:5432"]
    volumes: [pgdata:/var/lib/postgresql/data]
    healthcheck: { test: ["CMD-SHELL", "pg_isready -U shop -d shop"] }
  api:
    build: .
    environment: { DATABASE_URL: postgres://shop:shop@db:5432/shop }
    depends_on: { db: { condition: service_healthy } }
```

- Trong mạng của compose, container API gọi database bằng **tên service** `db`, không phải `localhost` (`localhost` bên trong container là chính container đó!).
- `depends_on` + `service_healthy`: chờ Postgres **sẵn sàng nhận kết nối**, không chỉ "đã khởi động tiến trình".
- Không có volume, `docker compose down` sẽ **xoá sạch dữ liệu**.

## Lệnh hay dùng

| Lệnh | Tác dụng |
| --- | --- |
| `docker compose up -d db` | chạy service `db` ở chế độ nền |
| `docker compose ps` / `logs -f db` | trạng thái / log |
| `docker compose exec db psql -U shop -d shop` | chạy lệnh bên trong container |
| `docker compose down` / `down -v` | dừng (giữ dữ liệu) / dừng và xoá dữ liệu |
| `docker build -t shop-api .` | build image |
| `docker images` / `docker ps -a` | liệt kê image / container |

## Dev workflow được khuyên dùng

**Database** chạy trong Docker (giống production, dễ xoá làm lại), **code** chạy trực tiếp trên máy (`npm run dev`: sửa là thấy ngay, debug dễ). Chỉ khi muốn kiểm tra image production mới chạy cả API trong Docker.

## Câu hỏi tại sao

- Tại sao image production nên chạy bằng user không phải `root`? Chuyện gì xảy ra nếu ứng dụng bị chiếm quyền?
- Có nên chạy PostgreSQL production trong Docker không? So sánh với dịch vụ quản lý sẵn (AWS RDS, Naver Cloud DB...): ai lo backup, nâng cấp, failover?
- Tại sao `.dockerignore` loại `node_modules` của máy bạn ra khỏi build? (Gợi ý: thư viện native biên dịch cho macOS/Windows không chạy trên Linux Alpine.)
