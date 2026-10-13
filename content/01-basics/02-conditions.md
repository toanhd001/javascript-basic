---
id: conditions
title: Toán tử và điều kiện
---
## Toán tử số học

```js run
console.log(7 + 2, 7 - 2, 7 * 2, 7 / 2); // 9 5 14 3.5
console.log(7 % 2);    // 1 — phần dư, dùng kiểm tra chẵn/lẻ, chia hết
console.log(2 ** 10);  // 1024 — luỹ thừa
let x = 5;
x += 3;  // x = x + 3
x++;     // x = x + 1
console.log(x); // 9
```

> **Bẫy với số âm:** `-7 % 2` là `-1` (không phải `1`), và `Math.floor(-7 / 2)` là `-4` trong khi `Math.trunc(-7 / 2)` là `-3`. Khi kiểm tra số lẻ, viết `n % 2 !== 0` thay vì `n % 2 === 1`.

```js run
console.log(-7 % 2);                 // -1
console.log(Math.floor(-7 / 2));     // -4 (làm tròn xuống)
console.log(Math.trunc(-7 / 2));     // -3 (bỏ phần thập phân)
console.log(-7 % 2 === 1, -7 % 2 !== 0); // false true
```

## So sánh và logic

`===`, `!==`, `<`, `<=`, `>`, `>=` cho ra boolean. Kết hợp bằng `&&` (và), `||` (hoặc), `!` (phủ định).

### Truthy và falsy

Trong điều kiện, JS tự đổi giá trị sang boolean. Chỉ có **8 giá trị falsy**; mọi thứ còn lại là truthy (kể cả `[]`, `{}`, `"0"`):

`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

```js run
const values = [0, "", "0", [], {}, null, NaN, "false"];
for (const v of values) {
  console.log(JSON.stringify(v), "→", v ? "truthy" : "falsy");
}
```

> **Bẫy kinh điển:** `if (index)` để kiểm tra "có tìm thấy không" sẽ sai khi `index === 0`. Hãy viết rõ: `if (index !== -1)`.

### Short-circuit, `??` và `?.`

```js run
const user = { name: "An", settings: null };

console.log(user.age || 18);    // 18 — || lấy vế phải khi vế trái FALSY
console.log(0 || 18);           // 18 — có thể sai ý nếu 0 là giá trị hợp lệ!
console.log(0 ?? 18);           // 0  — ?? chỉ lấy vế phải khi null/undefined

console.log(user.settings?.theme);  // undefined thay vì TypeError
console.log(user.name && user.name.toUpperCase()); // "AN"
```

## if / else if / else và toán tử ba ngôi

```js run
function classify(n) {
  if (n < 0) {
    return "âm";
  } else if (n === 0) {
    return "không";
  } else {
    return "dương";
  }
}
console.log(classify(-3), classify(0), classify(8));

const age = 20;
const label = age >= 18 ? "người lớn" : "trẻ em"; // ternary: điều kiện ? A : B
console.log(label);
```

**Early return** (thoát sớm) giúp code phẳng, dễ đọc hơn `if` lồng nhiều tầng:

```js
function price(age) {
  if (age < 6) return 0;
  if (age < 18) return 50;
  return 100;
}
```

## switch

Hữu ích khi so một giá trị với nhiều hằng số. Nhớ `break` (hoặc `return`), nếu không code sẽ "rơi" xuống case dưới.

```js run
function dayName(d) {
  switch (d) {
    case 0: return "CN";
    case 6: return "T7";
    default: return "Ngày thường";
  }
}
console.log(dayName(0), dayName(3));
```

## Câu hỏi tại sao

- Tại sao `||` để gán mặc định lại gây bug với `0` và `""`, và `??` ra đời để giải quyết vấn đề gì?
- Early return vs một hàm chỉ có một `return` ở cuối: mỗi phong cách có lợi gì? Đội của bạn nên chọn cái nào?
