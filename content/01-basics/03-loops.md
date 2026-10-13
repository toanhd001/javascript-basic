---
id: loops
title: Vòng lặp
---
Vòng lặp là "động cơ" của mọi thuật toán. Hiểu rõ vòng lặp chạy **bao nhiêu lần** chính là nền tảng của phân tích độ phức tạp (Big-O) sau này.

## `for` cổ điển — khi cần chỉ số

```js run
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}
// 3 phần: khởi tạo; điều kiện tiếp tục; bước nhảy
for (let i = 10; i > 0; i -= 3) console.log(i); // 10 7 4 1
```

## `while` — khi không biết trước số lần lặp

```js run
let n = 1234;
let digits = 0;
while (n > 0) {
  n = Math.floor(n / 10); // bỏ chữ số cuối
  digits++;
}
console.log(digits); // 4
```

`do...while` chạy thân vòng lặp ít nhất một lần trước khi kiểm tra điều kiện — hiếm khi cần.

## `for...of` — duyệt giá trị (mảng, chuỗi, Map, Set)

```js run
const fruits = ["táo", "cam", "xoài"];
for (const f of fruits) console.log(f);
for (const ch of "abc") console.log(ch);

// cần cả chỉ số lẫn giá trị:
for (const [i, f] of fruits.entries()) console.log(i, f);
```

## `for...in` — duyệt KEY của object (đừng dùng cho mảng)

```js run
const scores = { an: 8, binh: 7 };
for (const name in scores) console.log(name, scores[name]);

for (const i in ["a", "b"]) console.log(typeof i); // "string"! i là "0", "1"
```

## `break` và `continue`

```js run
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // bỏ qua phần còn lại, sang vòng tiếp theo
  if (i > 7) break;          // thoát hẳn vòng lặp
  console.log(i);            // 1 3 5 7
}
```

## Vòng lặp lồng nhau và số lần chạy

```js run
let steps = 0;
const n = 4;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    steps++;
  }
}
console.log(steps); // n * n = 16 → O(n²)
```

Với n = 100.000, hai vòng lồng nhau là 10 tỉ bước — quá chậm cho mọi coding test (thường giới hạn ~10^8 phép tính/giây). Ghi nhớ trực giác này; chặng sau sẽ học cách tránh nó.

> **Off-by-one** là lỗi phổ biến nhất với vòng lặp: `i <= arr.length` (thừa một vòng → `undefined`) hoặc bắt đầu từ 1 thay vì 0. Khi viết xong vòng lặp, hãy tự hỏi: *vòng đầu tiên i bằng mấy? Vòng cuối cùng i bằng mấy?*

## Câu hỏi tại sao

- Khi nào dùng `for` chỉ số thay vì `for...of`? (Gợi ý: cần so sánh phần tử `i` với `i + 1`, duyệt ngược, nhảy 2 bước.)
- Tại sao `while (n > 0) n = Math.floor(n / 10)` chỉ chạy khoảng log₁₀(n) lần? Điều này liên quan gì đến tìm kiếm nhị phân?
