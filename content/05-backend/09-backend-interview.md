---
id: be-interview
title: Phỏng vấn kỹ thuật Backend (기술면접)
---
Phỏng vấn backend cho vị trí junior/신입 ở Hàn thường gồm: **코딩테스트** (thuật toán) → **기술면접** (câu hỏi kiến thức nền + hỏi sâu về dự án đã làm) → **인성면접** (văn hoá, thái độ). Phần kiến thức nền xoay quanh một danh sách khá ổn định. Bảng dưới có **thuật ngữ tiếng Hàn** để bạn nhận ra câu hỏi và trả lời đúng từ khoá.

> **Cách luyện:** với mỗi câu, tự trả lời **thành tiếng** trong 1–2 phút trước khi đọc gợi ý. Người phỏng vấn ở Hàn rất hay hỏi **꼬리 질문** (câu hỏi nối đuôi): trả lời xong câu A, họ hỏi "tại sao?", "nếu ... thì sao?" — nên phải hiểu **lý do**, không chỉ thuộc định nghĩa.

## Mạng & HTTP (네트워크)

| Câu hỏi | Từ khoá tiếng Hàn | Ý chính cần nói |
| --- | --- | --- |
| Gõ URL vào trình duyệt thì chuyện gì xảy ra? | URL 입력 시 동작 과정 | DNS → TCP 3-way handshake → TLS → HTTP request → server xử lý → response → render |
| TCP vs UDP | TCP와 UDP의 차이 | tin cậy, có thứ tự, có kết nối vs nhanh, không đảm bảo (video call, game, DNS) |
| HTTP vs HTTPS | HTTP와 HTTPS 차이 | TLS mã hoá, chứng chỉ, khoá công khai/đối xứng |
| GET vs POST | GET과 POST 차이 | ngữ nghĩa, idempotent (멱등성), body, cache, độ dài URL |
| Status code 401 vs 403 | 상태 코드 | chưa xác thực vs không có quyền |
| REST là gì? | REST API, RESTful | tài nguyên + method, stateless, URL là danh từ |
| Cookie vs Session vs JWT | 쿠키, 세션, 토큰 | lưu ở đâu, thu hồi, scale-out, XSS/CSRF |
| CORS là gì? | CORS, 동일 출처 정책 | chính sách cùng nguồn của trình duyệt, header Access-Control-Allow-Origin |

## Database (데이터베이스)

| Câu hỏi | Từ khoá tiếng Hàn | Ý chính cần nói |
| --- | --- | --- |
| Index là gì, tại sao nhanh? | 인덱스 | B+tree, O(log n), đổi lại ghi chậm & tốn dung lượng |
| Khi nào index không được dùng? | 인덱스를 타지 않는 경우 | hàm trên cột, `LIKE '%x'`, cardinality thấp, sai thứ tự index ghép |
| Transaction và ACID | 트랜잭션, 원자성 일관성 격리성 지속성 | tất cả hoặc không; ví dụ chuyển tiền |
| Isolation level | 트랜잭션 격리 수준 | 4 mức; dirty / non-repeatable / phantom read |
| Deadlock | 교착 상태 (데드락) | hai bên chờ khoá của nhau; khoá theo thứ tự cố định, timeout |
| Chuẩn hoá | 정규화, 반정규화 | 1NF–3NF, loại dư thừa; phi chuẩn hoá để đọc nhanh |
| JOIN các loại | 조인 종류 | INNER / LEFT / RIGHT / FULL |
| N+1 là gì? | N+1 문제 | lazy loading; fetch join, batch, IN |
| SQL injection | SQL 인젝션 | prepared statement (바인딩 변수) |
| RDBMS vs NoSQL | RDB와 NoSQL 차이 | schema, JOIN, transaction vs mở rộng ngang, dữ liệu linh hoạt |

## Hệ điều hành & runtime (운영체제)

| Câu hỏi | Từ khoá tiếng Hàn | Ý chính cần nói |
| --- | --- | --- |
| Process vs Thread | 프로세스와 스레드 | bộ nhớ riêng vs dùng chung; chi phí chuyển ngữ cảnh |
| Sync/Async, Blocking/Non-blocking | 동기 비동기, 블로킹 논블로킹 | hai trục khác nhau; ví dụ I/O |
| Node.js xử lý đồng thời thế nào? | 이벤트 루프 | một luồng JS + event loop + thread pool (libuv) cho I/O; tác vụ CPU nặng chặn mọi request |
| Race condition | 경쟁 상태, 동시성 | lost update; khoá, thao tác nguyên tử |

## Kiến trúc & vận hành (아키텍처)

| Câu hỏi | Từ khoá tiếng Hàn | Ý chính cần nói |
| --- | --- | --- |
| Scale-up vs scale-out | 수직 확장, 수평 확장 | máy mạnh hơn vs nhiều máy; stateless là điều kiện để scale-out |
| Load balancer | 로드 밸런서 | phân phối request; round robin, health check |
| Cache, Redis | 캐시, 레디스 | cache-aside, TTL, invalidation; cái gì không nên cache |
| Connection pool | 커넥션 풀 | tái sử dụng kết nối; kích thước pool |
| Monolith vs Microservices | 모놀리식, MSA | đơn giản vs triển khai độc lập; chi phí vận hành, transaction phân tán |
| Docker là gì? | 도커, 컨테이너 | đóng gói ứng dụng + môi trường; khác VM |

## Câu hỏi về dự án (프로젝트 질문) — phần quyết định

Người phỏng vấn sẽ đào sâu vào **dự án bạn ghi trong CV**. Chuẩn bị cho mỗi dự án:

1. Bạn phụ trách phần nào? Kiến trúc tổng thể ra sao (vẽ được trên giấy)?
2. **Tại sao** chọn công nghệ đó (DB nào, framework nào)? Có cân nhắc lựa chọn khác không?
3. Vấn đề khó nhất gặp phải (트러블슈팅 경험) và cách bạn **đo**, **tìm nguyên nhân**, **sửa**. Có số liệu càng tốt ("API giảm từ 1,2s xuống 150ms nhờ thêm index và sửa N+1").
4. Nếu làm lại, bạn sẽ làm khác điều gì?

> Với web app bạn đang làm: chọn **một API** quan trọng, đo thời gian phản hồi, xem `EXPLAIN` của các truy vấn chính, kiểm tra có N+1 không. Tìm được và sửa được một vấn đề thật là câu chuyện phỏng vấn giá trị hơn mọi định nghĩa thuộc lòng.

## Gợi ý lộ trình sau chặng này

- **Thực hành với Node thật:** Express + PostgreSQL (hoặc MySQL) qua Docker, viết lại các bài trong chặng này thành một API chạy được, có test bằng `supertest`.
- **Thị trường Hàn:** backend chủ yếu dùng **Java + Spring Boot + JPA + MySQL**. Mọi khái niệm ở đây (HTTP, REST, SQL, index, transaction, N+1) dùng nguyên vẹn bên Spring — chỉ đổi cú pháp.

## Câu hỏi tại sao

- Chọn một câu bất kỳ ở trên và tự đặt ba câu 꼬리 질문 cho nó. Bạn trả lời được đến tầng thứ mấy?
- Tại sao câu hỏi về dự án lại quan trọng hơn câu hỏi định nghĩa trong mắt người tuyển dụng?
