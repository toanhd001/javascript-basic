---
id: ct-pitfalls
title: Bẫy JS trong coding test (cheat sheet)
---
Những lỗi dưới đây **chạy đúng với ví dụ mẫu** nhưng trượt test ẩn. Hãy đọc kỹ từng mục và bấm chạy thử.

## 1. `sort()` không có comparator

```js run
console.log([5, 25, 100, 1].sort());                 // [1, 100, 25, 5] ⚠️
console.log([5, 25, 100, 1].sort((a, b) => a - b));  // [1, 5, 25, 100]
```

## 2. `Math.max(...arr)` với mảng lớn

Spread biến mỗi phần tử thành một tham số hàm; mảng ~10^5 – 10^6 phần tử sẽ vượt giới hạn stack.

```js run
const big = Array.from({ length: 1_000_000 }, (_, i) => i);
try {
  console.log(Math.max(...big));
} catch (e) {
  console.log("Lỗi:", e.name, "-", e.message);
}
let max = -Infinity;
for (const x of big) if (x > max) max = x;
console.log("Vòng lặp:", max);
```

## 3. Mảng 2 chiều với `fill`

```js run
const wrong = new Array(2).fill([]);            // hai hàng là CÙNG một mảng
wrong[0].push(1);
console.log(JSON.stringify(wrong));             // [[1],[1]]
const right = Array.from({ length: 2 }, () => []);
right[0].push(1);
console.log(JSON.stringify(right));             // [[1],[]]
```

## 4. Chia lấy nguyên và số âm

```js run
console.log(7 / 2, Math.floor(7 / 2), Math.trunc(-7 / 2), Math.floor(-7 / 2)); // 3.5 3 -3 -4
console.log(~~(7 / 2), (7 / 2) | 0);  // 3 3 — nhanh, nhưng SAI khi vượt 2^31
console.log((3e9 / 1) | 0);            // -1294967296 ⚠️
console.log(-7 % 3, ((-7 % 3) + 3) % 3); // -1 2 — modulo luôn dương
```

## 5. Số lớn: vượt `2^53` và modulo 10^9+7

```js run
const MOD = 1_000_000_007;
const a = 999_999_999, b = 999_999_999;
console.log(a * b);                       // 999999998000000000 — đã mất chính xác
console.log((a * b) % MOD);               // SAI
console.log(Number((BigInt(a) * BigInt(b)) % BigInt(MOD))); // ĐÚNG
```

Khi đề yêu cầu "modulo 10^9 + 7" và có **phép nhân** hai số cỡ 10^9: tích lên tới 10^18 > 2^53 ≈ 9·10^15. Dùng `BigInt` cho phép nhân, hoặc kỹ thuật nhân tách nhỏ. Phép **cộng** thì an toàn (2·10^9 vẫn nhỏ).

## 6. `shift()` trong vòng lặp → O(n²)

```js run
const N = 20_000;
let q = Array.from({ length: N }, (_, i) => i);
let t = Date.now();
while (q.length) q.shift();
console.log("shift():", Date.now() - t, "ms");

q = Array.from({ length: N }, (_, i) => i);
t = Date.now();
let head = 0;
while (head < q.length) head++;            // "xoá" bằng cách tăng con trỏ
console.log("con trỏ head:", Date.now() - t, "ms");
```

Đo trên Node 22: `shift()` hết mảng 30.000 phần tử mất ~1,2 giây, 100.000 phần tử mất **~15 giây** — trong khi con trỏ `head` gần như 0 ms. V8 chỉ tối ưu `shift()` cho mảng nhỏ, nên đừng trông vào nó: dùng con trỏ `head` là cách chắc chắn O(1).

## 7. Ghép chuỗi trong vòng lặp

Dùng mảng + `join` khi xây chuỗi lớn từng phần — luôn O(n) tổng cộng, không phụ thuộc tối ưu của engine.

## 8. `for...in` với mảng, `==`, và truthy

```js run
for (const i in [10, 20]) console.log(typeof i, i + 1);  // "string" "01" "11" ⚠️
const idx = [5, 6].indexOf(5);
if (idx) console.log("tìm thấy"); else console.log("tưởng là không tìm thấy (idx = 0)!");
```

## 9. Sao chép mảng/object khi đệ quy (backtracking)

```js run
const result = [];
const path = [];
for (const x of [1, 2]) {
  path.push(x);
  result.push(path);        // ⚠️ đẩy THAM CHIẾU — sau này path đổi thì result cũng đổi
}
console.log(JSON.stringify(result));
const fixed = [];
const p2 = [];
for (const x of [1, 2]) {
  p2.push(x);
  fixed.push([...p2]);      // đẩy BẢN SAO
}
console.log(JSON.stringify(fixed));
```

## 10. JS không có sẵn...

| Cần | Python/Java/C++ có | JS: dùng gì |
| --- | --- | --- |
| Priority queue / heap | `heapq`, `PriorityQueue` | **Tự viết** (bài Heap ở chặng DSA) — nên thuộc lòng |
| Deque | `collections.deque` | mảng + con trỏ, hoặc tự viết |
| Sorted set / TreeMap | `TreeMap`, `std::set` | sort + binary search, hoặc tránh |
| Counter | `collections.Counter` | `Map` + `(m.get(k) \|\| 0) + 1` |
| Số nguyên lớn | `int` (Python) | `BigInt` |

## Câu hỏi tại sao

- Mục nào trong danh sách trên bạn **đã từng** mắc? Viết lại nó ra giấy — đây là cheat sheet riêng của bạn trước mỗi buổi thi.
- Tại sao JS không có priority queue trong thư viện chuẩn, trong khi gần như mọi ngôn ngữ khác đều có? (Gợi ý: JS ban đầu được thiết kế cho việc gì?)
