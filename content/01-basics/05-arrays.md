---
id: arrays
title: Mảng (Array)
---
Mảng là cấu trúc dữ liệu dùng nhiều nhất trong coding test. Nắm vững **độ phức tạp** của từng thao tác quan trọng không kém cú pháp.

## Tạo và truy cập

```js run
const a = [10, 20, 30];
console.log(a[0], a[a.length - 1]); // phần tử đầu, cuối
console.log(a.at(-1));              // cuối (cú pháp mới)
console.log(a[99]);                 // undefined — KHÔNG báo lỗi khi vượt chỉ số!

a[1] = 99;                          // sửa được dù a là const
console.log(a, a.length);

const zeros = new Array(5).fill(0);              // [0,0,0,0,0]
const squares = Array.from({ length: 5 }, (_, i) => i * i); // [0,1,4,9,16]
console.log(zeros, squares);
```

## Thêm / xoá và độ phức tạp

| Thao tác | Ý nghĩa | Độ phức tạp |
| --- | --- | --- |
| `push(x)` / `pop()` | thêm / xoá ở **cuối** | O(1) |
| `unshift(x)` / `shift()` | thêm / xoá ở **đầu** | **O(n)** — phải dời mọi phần tử |
| `arr[i]` | đọc/ghi theo chỉ số | O(1) |
| `includes(x)`, `indexOf(x)` | tìm kiếm tuyến tính | O(n) |
| `slice(a, b)` | sao chép đoạn [a, b) | O(b − a) |
| `splice(i, k, ...)` | xoá/chèn ở giữa (sửa mảng gốc) | O(n) |
| `[...arr]` | sao chép nông | O(n) |

```js run
const s = [1, 2, 3];
s.push(4);         // [1,2,3,4]
const last = s.pop();
s.unshift(0);      // [0,1,2,3]
const first = s.shift();
console.log(s, last, first);

const b = [10, 20, 30, 40, 50];
console.log(b.slice(1, 3));   // [20, 30] — không đổi b
const removed = b.splice(1, 2); // xoá 2 phần tử từ chỉ số 1 — ĐỔI b
console.log(removed, b);
```

> **Tại sao `shift()` là O(n)?** Mảng lưu các phần tử liền nhau trong bộ nhớ. Bỏ phần tử đầu thì mọi phần tử còn lại phải dịch về trước một ô. Một vòng lặp gọi `shift()` n lần là O(n²) — lý do BFS viết bằng `shift()` hay bị timeout.

## Mảng là tham chiếu (reference)

```js run
const x = [1, 2, 3];
const y = x;        // y và x là CÙNG một mảng
y.push(4);
console.log(x);     // [1, 2, 3, 4] — x cũng đổi!

const z = [...x];   // sao chép: mảng mới
z.push(5);
console.log(x, z);

console.log([1, 2] === [1, 2]); // false — so sánh tham chiếu, không so nội dung
```

## Mảng 2 chiều — bẫy `fill`

```js run
// SAI: cả 3 hàng là CÙNG một mảng
const bad = new Array(3).fill(new Array(3).fill(0));
bad[0][0] = 1;
console.log(JSON.stringify(bad)); // [[1,0,0],[1,0,0],[1,0,0]]

// ĐÚNG: mỗi hàng là một mảng mới
const good = Array.from({ length: 3 }, () => new Array(3).fill(0));
good[0][0] = 1;
console.log(JSON.stringify(good)); // [[1,0,0],[0,0,0],[0,0,0]]
```

## Một số phương thức tiện dụng

```js run
const n = [3, 1, 4, 1, 5];
console.log(n.includes(4), n.indexOf(1), n.lastIndexOf(1));
console.log(n.join("-"));            // "3-1-4-1-5"
console.log([...n].reverse());       // reverse() SỬA mảng gốc → copy trước
console.log([1, [2, [3]]].flat(Infinity));
console.log(n.concat([9, 9]));
```

## Câu hỏi tại sao

- Tại sao `push`/`pop` là O(1) còn `shift`/`unshift` là O(n)? Nếu cần thêm/xoá ở **cả hai đầu** nhanh, bạn sẽ dùng cấu trúc nào?
- `[1, 2] === [1, 2]` là `false`. Vậy làm sao kiểm tra một mảng đã "thấy" chưa trong một `Set`? (Gợi ý: chuyển sang chuỗi làm key — chi phí là gì?)
