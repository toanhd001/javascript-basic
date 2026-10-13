---
id: variables-types
title: Biến và kiểu dữ liệu
---
## Khai báo biến: `const`, `let` (và vì sao tránh `var`)

```js run
const pi = 3.14;      // không gán lại được
let count = 0;        // gán lại được
count = count + 1;
console.log(pi, count);

try {
  pi = 3;             // TypeError
} catch (e) {
  console.log(e.message);
}
```

**Quy tắc thực tế:** mặc định dùng `const`; chỉ dùng `let` khi biết chắc sẽ gán lại (biến đếm, biến tích luỹ). Không dùng `var`.

Tại sao? `var` có hai đặc điểm dễ gây bug:

- **Function scope** thay vì block scope: biến khai báo trong `if`/`for` "lọt" ra ngoài.
- **Hoisting** với giá trị `undefined`: dùng trước khi khai báo không báo lỗi mà ra `undefined` một cách âm thầm.

```js run
if (true) {
  var leaked = "var lọt ra ngoài block";
  let safe = "let ở yên trong block";
}
console.log(leaked);
console.log(typeof safe); // "undefined" vì safe không tồn tại ở đây
```

> `const` **không** có nghĩa là giá trị bất biến. `const arr = []` vẫn `arr.push(1)` được — chỉ là không gán `arr = ...` lần nữa. `const` khoá **biến**, không khoá **object** mà biến trỏ tới.

## 7 kiểu nguyên thuỷ (primitive) + object

| Kiểu | Ví dụ | `typeof` |
| --- | --- | --- |
| number | `42`, `3.14`, `NaN`, `Infinity` | `"number"` |
| string | `"hi"`, `'hi'`, `` `hi` `` | `"string"` |
| boolean | `true`, `false` | `"boolean"` |
| undefined | biến chưa gán giá trị | `"undefined"` |
| null | "cố ý không có giá trị" | `"object"` ⚠️ (bug lịch sử) |
| bigint | `123n` | `"bigint"` |
| symbol | `Symbol("id")` | `"symbol"` |
| object | `{}`, `[]`, hàm, `Map`... | `"object"` / `"function"` |

```js run
console.log(typeof 42, typeof "a", typeof true, typeof undefined);
console.log(typeof null);         // "object" — bug từ 1995, không sửa được vì sẽ phá web cũ
console.log(typeof [1, 2]);       // "object" — mảng cũng là object!
console.log(Array.isArray([1, 2])); // cách đúng để kiểm tra mảng
console.log(typeof function () {}); // "function"
```

## Number: chỉ có MỘT kiểu số

JS không tách `int`/`float` như Java/C++. Mọi số là số thực 64-bit (IEEE 754). Hệ quả cần nhớ cho coding test:

```js run
console.log(0.1 + 0.2);              // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);      // false!
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // cách so sánh số thực

console.log(7 / 2);                  // 3.5 — chia KHÔNG làm tròn như C++/Java
console.log(Math.floor(7 / 2));      // 3 — chia lấy phần nguyên

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 ≈ 9 * 10^15
console.log(2 ** 53 + 1);             // 9007199254740992 — sai! vượt ngưỡng an toàn
console.log(2n ** 53n + 1n);          // BigInt thì đúng

console.log(0 / 0, 1 / 0);           // NaN Infinity
console.log(NaN === NaN);            // false — dùng Number.isNaN(x)
```

## `null` vs `undefined`

- `undefined`: "chưa có giá trị" — biến chưa gán, thuộc tính không tồn tại, hàm không `return`.
- `null`: lập trình viên **chủ động** gán để nói "không có gì".

## Ép kiểu ngầm và `==` vs `===`

`==` tự đổi kiểu trước khi so sánh, với những luật rất khó nhớ. `===` so sánh cả kiểu lẫn giá trị.

```js run
console.log(1 == "1", 1 === "1");     // true false
console.log(0 == "", 0 === "");       // true false
console.log(null == undefined);       // true
console.log("5" + 1, "5" - 1);        // "51" 4  — + ưu tiên nối chuỗi, - thì ép về số
console.log(Number("42"), Number("4x"), parseInt("42px", 10)); // 42 NaN 42
console.log(String(42), (42).toString(), 42 + "");
```

**Luôn dùng `===` và `!==`.** Nút 🔍 Kiểm tra cú pháp sẽ nhắc nếu bạn lỡ dùng `==`.

## Câu hỏi tại sao

- Tại sao `typeof null === "object"` mà không ai sửa? Điều đó nói gì về việc thiết kế một ngôn ngữ chạy trên hàng tỉ trang web?
- Trade-off của việc JS chỉ có một kiểu `number`: đơn giản hơn cho người mới, nhưng mất gì khi làm bài cần số nguyên rất lớn (VD tính giai thừa, modulo 10^9+7)?
- Khi nào `==` lại *có ích*? (Gợi ý: `x == null` bắt cả `null` lẫn `undefined`.) Có đáng để đổi lấy rủi ro không?
