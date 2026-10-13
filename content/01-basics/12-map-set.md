---
id: map-set
title: Map và Set
---
`Map` và `Set` là hai cấu trúc **hash** có sẵn của JS: thêm, xoá, tra cứu trung bình **O(1)**. Đây là vũ khí chính để biến lời giải O(n²) thành O(n).

## Set — tập hợp không trùng lặp

```js run
const s = new Set([1, 2, 2, 3, 3, 3]);
console.log(s, s.size);         // Set {1,2,3}  3
s.add(4);
s.delete(1);
console.log(s.has(2), s.has(1)); // true false — O(1)

const unique = [...new Set([3, 1, 3, 2, 1])]; // khử trùng lặp, giữ thứ tự xuất hiện
console.log(unique);

for (const v of s) console.log(v);
```

> So sánh: `arr.includes(x)` là **O(n)**, `set.has(x)` là **O(1)**. Trong vòng lặp n lần: O(n²) so với O(n). Với n = 10^5, đó là khác biệt giữa 10 tỉ và 100 nghìn bước.

## Map — từ điển key → value

```js run
const m = new Map();
m.set("an", 8);
m.set("binh", 6);
m.set(42, "key là số");
m.set(true, "key là boolean");
console.log(m.get("an"), m.get(42), m.size);
console.log(m.has("chi"), m.get("chi")); // false undefined

m.set("an", m.get("an") + 1);            // cập nhật
for (const [key, value] of m) console.log(key, "→", value);
console.log([...m.keys()], [...m.values()]);
```

## Đếm tần suất với Map

```js run
function countWords(words) {
  const freq = new Map();
  for (const w of words) {
    freq.set(w, (freq.get(w) || 0) + 1);
  }
  return freq;
}
console.log(countWords(["a", "b", "a", "c", "a"]));
```

## Map hay Object?

| | `Map` | Object `{}` |
| --- | --- | --- |
| Kiểu của key | **Bất kỳ** (số, object, boolean...) | chỉ chuỗi / symbol (số bị đổi thành chuỗi) |
| Thứ tự duyệt | đúng thứ tự thêm vào | key dạng số nguyên được xếp trước, tăng dần |
| Số phần tử | `map.size` O(1) | `Object.keys(o).length` O(n) |
| Key "nguy hiểm" | không có | `"__proto__"`, `"constructor"` có thể gây lỗi |
| Chuyển sang JSON | phải tự chuyển | `JSON.stringify` trực tiếp |
| Thêm/xoá liên tục | tối ưu cho việc này | chậm hơn khi xoá nhiều |

```js run
const o = {};
o[1] = "a";
console.log(Object.keys(o));       // ["1"] — key bị đổi thành chuỗi
const m = new Map([[1, "a"]]);
console.log(m.has(1), m.has("1")); // true false

const objKey = { id: 7 };
const visited = new Map([[objKey, true]]);
console.log(visited.get(objKey));  // object làm key được (so theo tham chiếu)
```

**Khuyến nghị cho coding test:** dùng `Map`/`Set` khi đếm và tra cứu. Dùng object khi cần dữ liệu có cấu trúc cố định (như `{ name, age }`) hoặc trả kết quả dạng object.

## Bẫy: key là mảng/object

```js run
const seen = new Set();
seen.add([1, 2]);
console.log(seen.has([1, 2]));     // false — hai mảng khác tham chiếu!

const seen2 = new Set();
seen2.add([1, 2].join(","));       // chuyển thành chuỗi làm key
console.log(seen2.has("1,2"));     // true
```

Hay gặp khi lưu toạ độ `(row, col)` đã đi qua trong bài lưới (grid): dùng key `row + "," + col` hoặc `row * cols + col`.

## Câu hỏi tại sao

- "Hash map là O(1)" — O(1) **trung bình**. Trường hợp xấu nhất là bao nhiêu và khi nào xảy ra?
- Tại sao key `row * cols + col` thường nhanh hơn `row + "," + col`? Khi nào nó sai?
- `WeakMap` khác `Map` thế nào, và tại sao nó hữu ích để gắn dữ liệu vào DOM node mà không gây memory leak?
