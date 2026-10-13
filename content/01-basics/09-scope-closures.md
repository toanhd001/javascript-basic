---
id: scope-closures
title: Scope và closure
---
Closure là câu hỏi phỏng vấn JS **kinh điển nhất**. Hiểu nó cũng giúp bạn hiểu tại sao code bất đồng bộ đôi khi in ra giá trị "lạ".

## Scope — biến sống ở đâu

```js run
const global = "toàn cục";
function outer() {
  const a = "của outer";
  if (true) {
    const b = "chỉ trong block if";
    console.log(global, a, b); // thấy được cả 3
  }
  // console.log(b); // ReferenceError: b chỉ tồn tại trong block
}
outer();
```

Hàm bên trong **nhìn thấy** biến của hàm bên ngoài (lexical scope — xác định bởi **vị trí viết code**, không phải nơi gọi hàm).

## Closure — hàm "mang theo" biến của nơi nó được tạo

```js run
function makeCounter() {
  let count = 0;            // biến riêng, bên ngoài không đụng tới được
  return function () {
    count++;
    return count;
  };
}

const c1 = makeCounter();
const c2 = makeCounter();
console.log(c1(), c1(), c1()); // 1 2 3
console.log(c2());             // 1 — mỗi lần gọi makeCounter tạo một count riêng
```

`makeCounter` đã chạy xong, nhưng `count` **không bị xoá** vì hàm trả về vẫn tham chiếu tới nó. Đó là closure: hàm + môi trường biến mà nó được tạo ra.

Ứng dụng: biến private, factory function, memoize (nhớ kết quả), `once`, debounce/throttle, giữ state trong React hooks.

## Câu hỏi phỏng vấn kinh điển: `var` trong vòng lặp

```js run
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0);
}
```

- Với `var`: chỉ có **một** biến `i` cho cả vòng lặp. Khi các callback chạy (sau vòng lặp), `i` đã là 3 → in `3 3 3`.
- Với `let`: mỗi vòng lặp tạo một biến `j` **mới** → mỗi closure nhớ giá trị riêng → `0 1 2`.

## Hoisting và Temporal Dead Zone (TDZ)

```js run
console.log(typeof hoistedVar); // "undefined" — var được hoist với giá trị undefined
var hoistedVar = 1;

try {
  console.log(notYet);          // let/const cũng được hoist nhưng ở "vùng chết" đến dòng khai báo
} catch (e) {
  console.log(e.name + ": " + e.message);
}
let notYet = 2;
```

## Memoize — closure + cache

```js run
function memoize(fn) {
  const cache = new Map();
  return function (n) {
    if (cache.has(n)) return cache.get(n);
    const result = fn(n);
    cache.set(n, result);
    return result;
  };
}

let calls = 0;
const slowSquare = (n) => { calls++; return n * n; };
const fastSquare = memoize(slowSquare);
fastSquare(9); fastSquare(9); fastSquare(9);
console.log("số lần thực sự tính:", calls); // 1
```

Ý tưởng này chính là **quy hoạch động top-down** ở chặng DSA.

## Câu hỏi tại sao

- Closure giữ biến lại trong bộ nhớ. Khi nào điều đó gây **rò rỉ bộ nhớ** (memory leak)? (Gợi ý: event listener không được gỡ.)
- Trước khi có `class` và `#private`, người ta tạo biến private bằng closure. So sánh hai cách: cách nào tốn bộ nhớ hơn khi tạo 1 triệu object?
