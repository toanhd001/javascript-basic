---
id: welcome
title: Chào JavaScript — chạy code đầu tiên
---
JavaScript (JS) là ngôn ngữ chạy trong **mọi trình duyệt** và cả phía server (Node.js). Với coding test, JS là lựa chọn rất phổ biến vì cú pháp gọn và có sẵn mảng, object, `Map`, `Set`.

## Trang này hoạt động thế nào

Mỗi bài gồm hai phần:

1. **Lý thuyết** (bên trái): đọc, rồi bấm **▶ Chạy** dưới mỗi ví dụ để xem kết quả ngay.
2. **Bài tập** (bên phải): viết code vào editor, bấm **✓ Chạy test** để chấm. Code của bạn được chạy trong một "sandbox" riêng (Web Worker) nên dù lỡ viết vòng lặp vô hạn, trang cũng không bị treo — nó tự dừng sau vài giây.

## `console.log` — cửa sổ nhìn vào chương trình

`console.log(...)` in giá trị ra màn hình. Đây là công cụ debug số một: khi không hiểu code đang làm gì, hãy **in ra** thay vì đoán.

```js run
console.log("Xin chào!");
console.log(1 + 2);
console.log("Tổng:", 1 + 2, "— in được nhiều giá trị cùng lúc");
console.log([1, 2, 3], { ten: "An", tuoi: 20 });
```

## Hàm và `return`

Hầu hết bài tập (và hầu hết coding test như LeetCode) yêu cầu bạn viết một **hàm** nhận input qua tham số và **trả về** (`return`) kết quả. Bộ chấm sẽ gọi hàm của bạn với nhiều input khác nhau rồi so sánh giá trị trả về.

```js run
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // 5
```

> **In ra khác trả về.** `console.log` chỉ hiển thị cho người đọc; `return` mới là giá trị mà code khác (và bộ chấm) nhận được. Lỗi phổ biến nhất của người mới: hàm `console.log(kết quả)` nhưng quên `return`, nên bộ chấm nhận `undefined`.

## Đọc thông báo lỗi

Lỗi không đáng sợ — nó cho bạn biết **loại lỗi**, **lý do** và **dòng** gây lỗi. Bấm chạy ví dụ dưới đây:

```js run
try {
  const name = "JS";
  console.log(nmae); // gõ sai tên biến
} catch (error) {
  console.log(error.name + ": " + error.message);
}
```

Ba loại lỗi bạn sẽ gặp nhiều nhất:

| Lỗi | Nghĩa | Ví dụ |
| --- | --- | --- |
| `SyntaxError` | Viết sai ngữ pháp, code **không chạy được dòng nào** | thiếu `}`, thiếu `)` |
| `ReferenceError` | Dùng biến chưa khai báo | gõ sai tên `nmae` |
| `TypeError` | Dùng giá trị sai kiểu | gọi `undefined.length` |

Trong editor, dòng gây lỗi sẽ được **tô đỏ ở cột số dòng**; bấm vào nút "dòng N" để nhảy tới.

## Ba nút bạn nên dùng thường xuyên

- **🔍 Kiểm tra cú pháp**: bắt lỗi cú pháp mà *không chạy code*, kèm gợi ý các "bẫy" hay gặp trong coding test (dùng `==`, `sort()` không comparator...).
- **▶ Chạy**: chạy code và xem `console.log`, không chấm điểm.
- **✓ Chạy test**: chấm với bộ test, kể cả **test ẩn** với input lớn để kiểm tra tốc độ — giống coding test thật.

## Câu hỏi tại sao

- Tại sao bộ chấm so sánh **giá trị trả về** chứ không đọc những gì bạn `console.log`? (Gợi ý: nghĩ về việc một hàm được dùng lại ở chỗ khác.)
- Tại sao `SyntaxError` làm cả chương trình không chạy, còn `TypeError` thì các dòng trước đó vẫn chạy?
