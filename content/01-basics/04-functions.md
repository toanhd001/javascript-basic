---
id: functions
title: Hàm
---
Hàm là đơn vị cơ bản để **đóng gói** logic: đặt tên cho một việc, tái sử dụng, và test riêng được.

## Ba cách viết hàm

```js run
// 1. Function declaration — được "hoist": gọi được trước dòng khai báo
console.log(square(4));
function square(x) {
  return x * x;
}

// 2. Function expression — gán hàm vào biến
const cube = function (x) {
  return x * x * x;
};

// 3. Arrow function — ngắn gọn, hay dùng làm callback
const double = (x) => x * 2;          // một biểu thức: tự động return
const add = (a, b) => {
  const sum = a + b;                   // có {} thì phải return rõ ràng
  return sum;
};
console.log(cube(2), double(5), add(1, 2));
```

> **Bẫy arrow function:** `const f = (x) => { x * 2 };` trả về `undefined` vì có `{}` mà không có `return`. Muốn trả object thì bọc ngoặc: `() => ({ a: 1 })`.

## Tham số: mặc định, rest, và truyền thiếu/thừa

```js run
function greet(name = "bạn", greeting = "Xin chào") {
  return greeting + ", " + name + "!";
}
console.log(greet());           // dùng giá trị mặc định
console.log(greet("An"));

function total(...nums) {       // rest: gom mọi tham số còn lại vào MẢNG
  let s = 0;
  for (const n of nums) s += n;
  return s;
}
console.log(total(1, 2, 3, 4));

const arr = [5, 6, 7];
console.log(total(...arr));     // spread: "rải" mảng thành từng tham số

function f(a, b) { return [a, b]; }
console.log(f(1));              // [1, undefined] — thiếu thì là undefined, KHÔNG lỗi
console.log(f(1, 2, 3));        // thừa thì bị bỏ qua
```

## Hàm là giá trị ("first-class")

Hàm có thể gán vào biến, truyền vào hàm khác (callback), và được trả về từ hàm khác. Đây là nền tảng của `map`/`filter`/`sort` và closure.

```js run
function applyTwice(fn, x) {
  return fn(fn(x));
}
console.log(applyTwice((n) => n + 3, 10)); // 16

function makeMultiplier(k) {
  return (x) => x * k;  // trả về một hàm mới
}
const triple = makeMultiplier(3);
console.log(triple(7)); // 21
```

## Hàm thuần (pure function)

Hàm **thuần** chỉ phụ thuộc vào tham số và không thay đổi gì bên ngoài. Dễ test, dễ hiểu. Hàm **có side effect** thì sửa biến bên ngoài, sửa tham số, in ra màn hình...

```js run
const nums = [3, 1, 2];

function sortedCopy(arr) {        // thuần: không đụng vào mảng gốc
  return [...arr].sort((a, b) => a - b);
}
console.log(sortedCopy(nums), nums);

function sortInPlace(arr) {       // side effect: sửa mảng của người gọi
  arr.sort((a, b) => a - b);
}
sortInPlace(nums);
console.log(nums);
```

> Trong coding test, **đề bài thường nói rõ** có được sửa input không ("in-place", "O(1) extra space"). Nếu không nói, an toàn nhất là đừng sửa.

## Câu hỏi tại sao

- Function declaration được hoist, còn `const f = () => {}` thì không. Ưu/nhược điểm của mỗi kiểu khi file code dài?
- Tại sao JS không báo lỗi khi gọi hàm thiếu tham số? Ngôn ngữ kiểu tĩnh (TypeScript, Java) xử lý khác thế nào, và trade-off là gì?
