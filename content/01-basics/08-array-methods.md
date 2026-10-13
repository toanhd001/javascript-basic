---
id: array-methods
title: map, filter, reduce, sort
---
Các phương thức nhận **hàm callback** giúp viết xử lý mảng ngắn gọn, ít bug hơn vòng lặp thủ công. Code JS hiện đại (và phần lớn lời giải coding test) dùng chúng liên tục.

## map — biến đổi từng phần tử

```js run
const nums = [1, 2, 3, 4];
const doubled = nums.map((n) => n * 2);
console.log(doubled, nums);               // mảng mới, mảng gốc giữ nguyên
console.log(nums.map((n, i) => n * i));   // callback nhận cả chỉ số
```

## filter — giữ phần tử thoả điều kiện

```js run
const nums = [5, 12, 8, 130, 44];
console.log(nums.filter((n) => n > 10));
console.log(["a", "", "b", null].filter(Boolean)); // bỏ giá trị falsy
```

## reduce — gộp cả mảng thành một giá trị

```js run
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0); // 0 là giá trị khởi đầu của acc
console.log(sum);

const freq = ["a", "b", "a"].reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;                                   // nhớ return acc!
}, {});
console.log(freq);
```

> Luôn truyền giá trị khởi đầu cho `reduce`. Không truyền thì `[].reduce(...)` ném TypeError.

## find, findIndex, some, every

```js run
const users = [{ id: 1, name: "An" }, { id: 2, name: "Bình" }];
console.log(users.find((u) => u.id === 2));      // object hoặc undefined
console.log(users.findIndex((u) => u.id === 9)); // -1
console.log([1, 3, 5].some((n) => n % 2 === 0)); // có ít nhất một?
console.log([1, 3, 5].every((n) => n % 2 === 1)); // tất cả?
```

## sort — bẫy số 1 của JS trong coding test

`sort()` **sửa mảng gốc** và mặc định so sánh như **chuỗi**:

```js run
console.log([10, 9, 1, 100].sort());               // [1, 10, 100, 9] ⚠️
console.log([10, 9, 1, 100].sort((a, b) => a - b)); // tăng dần
console.log([10, 9, 1, 100].sort((a, b) => b - a)); // giảm dần
```

Hàm so sánh `(a, b)` trả về **số âm** nếu a đứng trước, **dương** nếu b đứng trước, **0** nếu như nhau.

```js run
const people = [
  { name: "Chi", age: 25 },
  { name: "An", age: 30 },
  { name: "Bình", age: 25 }
];
// sắp theo tuổi tăng dần, cùng tuổi thì theo tên
people.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));
console.log(people.map((p) => p.name + " " + p.age));

const words = ["banana", "Apple", "cherry"];
console.log([...words].sort());                                   // hoa đứng trước thường
console.log([...words].sort((a, b) => a.localeCompare(b)));
```

- Độ phức tạp: O(n log n). Từ ES2019, `sort` là **stable** (phần tử bằng nhau giữ thứ tự cũ).
- Muốn không đổi mảng gốc: `[...arr].sort(...)` hoặc `arr.toSorted(...)` (mới).

## Chuỗi phương thức (chaining)

```js run
const orders = [
  { item: "áo", price: 200, qty: 2 },
  { item: "quần", price: 350, qty: 1 },
  { item: "mũ", price: 80, qty: 5 }
];
const bigTotal = orders
  .map((o) => o.price * o.qty)
  .filter((t) => t >= 400)
  .reduce((s, t) => s + t, 0);
console.log(bigTotal); // 400 + 400 = 800
```

> **Trade-off:** chaining dễ đọc nhưng mỗi bước tạo một mảng mới và duyệt lại từ đầu. Với n = 10^6 và nhiều bước, một vòng `for` duy nhất có thể nhanh hơn đáng kể. Trong phỏng vấn, viết bản dễ đọc rồi nói ra trade-off này là điểm cộng.

## Câu hỏi tại sao

- Tại sao `sort()` mặc định so sánh như chuỗi? (Gợi ý: mảng JS có thể chứa lẫn số, chuỗi, object.)
- `forEach` vs `map`: dùng `map` mà không dùng giá trị trả về có sai không? Người review code sẽ nghĩ gì?
- Khi nào `reduce` làm code **khó đọc** hơn vòng lặp?
