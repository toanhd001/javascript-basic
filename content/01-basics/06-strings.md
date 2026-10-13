---
id: strings
title: Chuỗi (String)
---
## Chuỗi là bất biến (immutable)

```js run
let s = "hello";
s[0] = "H";          // không có tác dụng (không lỗi, nhưng không đổi)
console.log(s);      // "hello"
s = "H" + s.slice(1); // phải tạo chuỗi MỚI
console.log(s);
```

Hệ quả: mỗi lần "sửa" chuỗi là tạo chuỗi mới. Ghép chuỗi trong vòng lặp lớn nên gom vào **mảng** rồi `join("")` (an toàn về hiệu năng ở mọi engine).

## Truy cập ký tự và duyệt

```js run
const word = "JavaScript";
console.log(word.length, word[0], word.at(-1), word.charAt(4));
for (const ch of word) {
  if (ch === ch.toUpperCase()) console.log("chữ hoa:", ch);
}
```

## Template literal

```js run
const name = "An";
const age = 20;
console.log(`Tên: ${name}, sang năm ${age + 1} tuổi`);
console.log(`Chuỗi
nhiều dòng`);
```

## Các phương thức hay dùng

```js run
const t = "  Hello World  ";
console.log(t.trim());                    // bỏ khoảng trắng hai đầu
console.log(t.toLowerCase(), t.toUpperCase());
console.log("a,b,c".split(","));          // ["a","b","c"]
console.log("abc".split(""));             // ["a","b","c"] — chuỗi → mảng ký tự
console.log(["x", "y"].join("+"));        // "x+y"
console.log("banana".indexOf("an"), "banana".includes("nan"));
console.log("banana".replaceAll("a", "o"));
console.log("hello".slice(1, 4));         // "ell" — [1, 4)
console.log("5".padStart(3, "0"));        // "005"
console.log("ab".repeat(3));              // "ababab"
console.log("hello".startsWith("he"), "hello".endsWith("lo"));
```

## Mã ký tự — mẹo cho coding test

Nhiều bài chỉ có chữ thường `a`–`z`. Đổi ký tự sang số 0–25 để dùng mảng đếm thay vì object:

```js run
console.log("a".charCodeAt(0), "z".charCodeAt(0)); // 97 122
console.log(String.fromCharCode(65));               // "A"

const counts = new Array(26).fill(0);
for (const ch of "hello") {
  counts[ch.charCodeAt(0) - 97]++;
}
console.log(counts[11]); // số chữ "l" = 2
```

## Đảo chuỗi, kiểm tra ký tự

```js run
console.log("abc".split("").reverse().join(""));  // "cba"
console.log([..."abc"].reverse().join(""));       // cách khác

const isLetterOrDigit = (c) => /[a-z0-9]/i.test(c);
console.log(isLetterOrDigit("a"), isLetterOrDigit("!"));
```

> **Lưu ý Unicode:** `"😀".length` là 2 vì emoji chiếm hai "đơn vị UTF-16". `[..."😀"]` thì tách đúng thành 1 ký tự. Coding test hầu như chỉ dùng ASCII, nhưng phỏng vấn có thể hỏi điều này.

## Câu hỏi tại sao

- Tại sao chuỗi được thiết kế bất biến trong JS (và Java, Python)? Lợi ích cho việc dùng chuỗi làm key của object/Map là gì?
- `s.split("").reverse().join("")` là O(n) nhưng tạo ra mấy mảng/chuỗi trung gian? Khi nào chi phí bộ nhớ đó đáng lo?
