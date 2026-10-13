---
id: objects
title: Object
---
Object lưu cặp **key → value**. Trong coding test, object (và `Map`) là công cụ đếm tần suất và tra cứu O(1) — nền tảng của hàng trăm bài "hash map".

## Tạo, đọc, ghi, xoá

```js run
const user = { name: "An", age: 20, "favorite color": "xanh" };
console.log(user.name);              // dot notation
console.log(user["favorite color"]); // bracket: key có dấu cách / key nằm trong biến

const key = "age";
console.log(user[key]);              // 20 — user.key sẽ tìm key tên "key"!

user.city = "Hà Nội";                // thêm
user.age += 1;                       // sửa
delete user["favorite color"];       // xoá
console.log(user);
console.log("city" in user, user.zip); // true undefined
```

## Duyệt object

```js run
const scores = { an: 8, binh: 6, chi: 9 };
console.log(Object.keys(scores));    // ["an","binh","chi"]
console.log(Object.values(scores));  // [8,6,9]
for (const [name, score] of Object.entries(scores)) {
  console.log(name, "→", score);
}
```

## Đếm tần suất — pattern quan trọng nhất

```js run
function countChars(str) {
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(countChars("banana")); // { b: 1, a: 3, n: 2 }
```

`(freq[ch] || 0) + 1`: nếu chưa có key thì `freq[ch]` là `undefined` → dùng 0.

## Destructuring và shorthand

```js run
const point = { x: 3, y: 4, label: "P" };
const { x, y } = point;                  // lấy ra biến
const { label: name = "?", z = 0 } = point; // đổi tên + giá trị mặc định
console.log(x, y, name, z);

const a = 1, b = 2;
const obj = { a, b };                    // shorthand cho { a: a, b: b }
console.log(obj);

function area({ width, height }) {       // destructuring tham số
  return width * height;
}
console.log(area({ width: 2, height: 5 }));
```

## Sao chép nông vs sâu

```js run
const original = { name: "An", tags: ["js"] };
const shallow = { ...original };     // spread: copy NÔNG
shallow.name = "Bình";
shallow.tags.push("css");            // tags vẫn là CÙNG một mảng!
console.log(original);               // name giữ nguyên, nhưng tags bị đổi

const deep = structuredClone(original); // copy SÂU
deep.tags.push("html");
console.log(original.tags, deep.tags);
```

## JSON

```js run
const data = { id: 1, items: [1, 2] };
const text = JSON.stringify(data);   // object → chuỗi
console.log(text, typeof text);
const back = JSON.parse(text);       // chuỗi → object
console.log(back.items[1]);
```

## Câu hỏi tại sao

- Tại sao `user.key` và `user[key]` khác nhau? Lỗi này hay xuất hiện ở đâu trong bài đếm tần suất?
- Copy nông nhanh và rẻ, copy sâu an toàn nhưng tốn. Trong React/Redux, người ta lại cố tình dùng copy nông — tại sao điều đó vẫn đúng?
- Object với key là số (`obj[1]`) thì key thực sự là gì? (Gợi ý: `Object.keys({1: "a"})`.)
