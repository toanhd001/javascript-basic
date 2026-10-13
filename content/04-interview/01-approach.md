---
id: interview-approach
title: Cách giải bài trong buổi phỏng vấn
---
Người phỏng vấn **không chỉ chấm code đúng hay sai**. Họ đánh giá: bạn có làm rõ yêu cầu không, có giao tiếp không, có xét trường hợp biên không, có phân tích được độ phức tạp và trade-off không. Một lời giải tối ưu viết trong im lặng thường **được điểm thấp hơn** một lời giải trung bình được trình bày rõ ràng rồi cải tiến dần.

## Khung 6 bước (UMPIRE)

1. **Understand — Hiểu đề** (2–5 phút)
   Nhắc lại đề bằng lời của bạn. Hỏi: kích thước input? có số âm/trùng lặp/rỗng không? input đã sắp xếp chưa? được sửa input không? trả về gì khi không có đáp án?
2. **Match — Nhận diện pattern**
   Bài này giống dạng nào đã gặp? (Xem bảng bên dưới.)
3. **Plan — Lên kế hoạch**
   Nói ra cách brute force và độ phức tạp của nó trước. Sau đó đề xuất cách tối ưu. **Thống nhất với người phỏng vấn trước khi code.**
4. **Implement — Viết code**
   Đặt tên biến rõ nghĩa. Vừa viết vừa nói bạn đang làm gì. Hàm phụ nếu logic dài.
5. **Review — Tự kiểm tra**
   Chạy tay với ví dụ nhỏ. Thử trường hợp biên: rỗng, một phần tử, tất cả giống nhau, giá trị cực lớn/âm.
6. **Evaluate — Đánh giá**
   Nêu độ phức tạp thời gian/bộ nhớ. Nói trade-off và hướng cải tiến nếu có thêm thời gian.

> **Bí thì làm gì?** Nói ra suy nghĩ ("em đang nghĩ đến hash map vì cần tra cứu nhanh, nhưng chưa rõ key là gì"). Thử ví dụ nhỏ bằng tay để tìm quy luật. Hỏi gợi ý cũng được — im lặng 5 phút mới là tín hiệu xấu.

## Bảng nhận diện pattern

| Nếu đề bài có... | Nghĩ đến |
| --- | --- |
| Mảng **đã sắp xếp**, tìm cặp/bộ ba | Hai con trỏ, binary search |
| "Tìm / đếm cặp có tổng/hiệu bằng k", "đã gặp chưa" | Hash map / Set |
| "Đoạn con / chuỗi con **liên tiếp** dài nhất / ngắn nhất" | Cửa sổ trượt |
| "Tổng đoạn con bằng k" (có số âm), truy vấn tổng đoạn | Prefix sum (+ hash map) |
| "Phần tử lớn hơn/nhỏ hơn tiếp theo", ngoặc, biểu thức | Stack / monotonic stack |
| "K lớn nhất / nhỏ nhất / gần nhất", gộp k dãy | Heap |
| "Giá trị nhỏ nhất sao cho vẫn khả thi", n hoặc giá trị tới 10^9 | Binary search trên đáp án |
| Cây | DFS đệ quy (khuôn kết hợp trái/phải), BFS cho theo tầng |
| Lưới, mạng lưới, quan hệ phụ thuộc | Đồ thị: BFS (đường ngắn nhất), DFS, topo sort, union-find |
| "Liệt kê **tất cả**" tập con / hoán vị / tổ hợp, n ≤ 20 | Backtracking |
| "Bao nhiêu cách", "lớn nhất/nhỏ nhất" với lựa chọn từng bước | Quy hoạch động |
| Linked list: giữa, chu trình, k từ cuối | Con trỏ nhanh – chậm |
| Khoảng thời gian, lịch họp | Sort + tham lam / quét |

## Kế hoạch ôn luyện gợi ý (8–12 tuần)

| Tuần | Nội dung | Mục tiêu |
| --- | --- | --- |
| 1–2 | Chặng 1 (JS cơ bản) | Viết code không cần tra cú pháp |
| 3 | Chặng 2 (coding test) + Big-O | Đọc ràng buộc → đoán được độ phức tạp cần đạt |
| 4–5 | Hash map, two pointers, sliding window, prefix sum, stack | Giải easy trong 15', medium trong 30' |
| 6 | Linked list, đệ quy, binary search, sorting | |
| 7–8 | Cây, heap, đồ thị | |
| 9–10 | Backtracking, DP, greedy | |
| 11–12 | Làm đề tổng hợp có bấm giờ, phỏng vấn thử với bạn bè | Nói to khi giải |

Sau khi xong các bài trên trang này, chuyển sang LeetCode/NeetCode 150 và luyện theo **pattern** chứ không theo số thứ tự bài.

## Những lỗi khiến ứng viên trượt dù code chạy đúng

- Lao vào code ngay, không hỏi làm rõ.
- Không nói được độ phức tạp, hoặc nói sai (quên `includes`/`slice`/`shift` là O(n)).
- Không tự test; để người phỏng vấn tìm bug.
- Tên biến `a`, `b`, `tmp2` khắp nơi.
- Khăng khăng một hướng khi người phỏng vấn đã gợi ý hướng khác.

## Câu hỏi tại sao

- Tại sao nên trình bày brute force trước dù biết nó không đủ nhanh? (Gợi ý: nó chứng minh bạn hiểu đề, cho bạn một "lưới an toàn", và là điểm xuất phát để tối ưu.)
- Nếu còn 5 phút mà lời giải tối ưu chưa xong, bạn sẽ làm gì?
