---
id: dsa-recursion
title: Đệ quy
---
Hàm **đệ quy** gọi lại chính nó với bài toán **nhỏ hơn**. Đây là nền tảng của cây, đồ thị (DFS), backtracking, chia để trị và quy hoạch động.

## Hai thành phần bắt buộc

1. **Base case** (điều kiện dừng): bài toán đủ nhỏ để trả lời ngay.
2. **Bước đệ quy**: đưa bài toán về phiên bản nhỏ hơn, **tin rằng** lời gọi đệ quy trả về đúng, rồi kết hợp.

```js run
function factorial(n) {
  if (n <= 1) return 1;          // base case
  return n * factorial(n - 1);   // bước đệ quy: n! = n × (n−1)!
}
console.log(factorial(5)); // 120

function sumDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
console.log(sumDigits(9875)); // 29
```

> **"Leap of faith":** khi viết bước đệ quy, đừng cố "chạy" trong đầu toàn bộ chuỗi lời gọi. Chỉ cần: (1) base case đúng, (2) giả sử lời gọi nhỏ hơn đã đúng thì kết hợp có đúng không. Đó là quy nạp toán học.

## Call stack

Mỗi lời gọi chưa xong nằm trên **call stack**. Đệ quy quá sâu → `RangeError: Maximum call stack size exceeded` (thường khoảng 10.000 tầng trong JS).

```js run
function depth(n) {
  return n === 0 ? 0 : 1 + depth(n - 1);
}
console.log(depth(5000));
try {
  depth(1e6);
} catch (e) {
  console.log(e.name + ": " + e.message);
}
```

Vì vậy với dữ liệu lớn (linked list 10^5 node, DFS trên đồ thị lớn), hãy cân nhắc viết lại bằng vòng lặp + stack.

## Cây đệ quy và chi phí

```js run
let calls = 0;
function fib(n) {
  calls++;
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2); // hai nhánh → cây nhị phân lời gọi
}
console.log(fib(25), "— số lời gọi:", calls); // ~250.000 lời gọi cho n = 25!
```

`fib(n)` ngây thơ là **O(2^n)** vì tính lại cùng một giá trị rất nhiều lần (`fib(23)` được tính 2 lần, `fib(22)` 3 lần...). Thêm memo (bài Closure) → O(n). Đó là cầu nối sang **quy hoạch động**.

## Chia để trị

Chia bài toán thành các phần **độc lập**, giải từng phần, rồi gộp. Ví dụ: merge sort (bài Sắp xếp), luỹ thừa nhanh:

```
x^n = (x^(n/2))²        nếu n chẵn
x^n = x · (x^(n/2))²    nếu n lẻ
```

Chỉ cần log₂(n) tầng thay vì n phép nhân.

## Câu hỏi tại sao

- Đệ quy và vòng lặp có sức mạnh tương đương. Khi nào đệ quy làm code **rõ ràng hơn hẳn**? (Gợi ý: cấu trúc tự lồng nhau như cây, JSON, thư mục.)
- Một số ngôn ngữ tối ưu "tail call" để đệ quy không tốn stack. JS (V8) không làm điều đó. Hệ quả thực tế là gì?
