---
id: ct-input-output
title: Đọc input và in output
---
Có hai kiểu đề coding test bạn sẽ gặp:

| Kiểu | Nền tảng hay gặp | Bạn viết gì |
| --- | --- | --- |
| **Viết hàm** | LeetCode, CodeSignal, phần lớn vòng phỏng vấn | Một hàm nhận tham số, `return` kết quả |
| **Đọc stdin / in stdout** | HackerRank, Codeforces, AtCoder, nhiều bài test tuyển dụng | Cả chương trình: tự đọc input dạng chữ, tự in kết quả |

Kiểu thứ hai hay làm người mới mất điểm **không phải vì thuật toán** mà vì đọc input sai.

## Đọc stdin trong Node.js

Trên nền tảng chạy Node, mẫu an toàn và nhanh nhất là đọc **toàn bộ** input một lần:

```js
const input = require("fs").readFileSync(0, "utf8"); // 0 = stdin
const lines = input.trim().split("\n");

const n = Number(lines[0]);
const nums = lines[1].split(" ").map(Number);

// ... giải ...
console.log(result);
```

Một số nền tảng (HackerRank) cho sẵn khung dùng `process.stdin.on("data")`; chỉ cần viết phần xử lý trong hàm `main`.

> **Tại sao đọc hết một lần?** Đọc từng dòng bằng `readline` là bất đồng bộ, dễ viết sai thứ tự, và chậm hơn với input hàng trăm nghìn dòng. `readFileSync(0)` đơn giản và nhanh.

## Tách chuỗi input — các bẫy thường gặp

```js run
// Giả lập nội dung stdin
const input = "3\n1 2  3\r\n\n";

console.log(JSON.stringify(input.split("\n")));                // dòng rỗng cuối + \r!
console.log(JSON.stringify(input.trim().split(/\r?\n/)));      // an toàn hơn
console.log("1 2  3".split(" "));                              // nhiều dấu cách → phần tử ""
console.log("1 2  3".trim().split(/\s+/).map(Number));         // an toàn
```

Mẫu "đọc mọi số trong input" — bỏ qua hoàn toàn chuyện xuống dòng:

```js run
const input = "2 3\n1 2 3\n4 5 6\n";
const data = input.split(/\s+/).filter(Boolean).map(Number);
let pos = 0;
const next = () => data[pos++];

const rows = next(), cols = next();
const grid = [];
for (let r = 0; r < rows; r++) {
  const row = [];
  for (let c = 0; c < cols; c++) row.push(next());
  grid.push(row);
}
console.log(grid);
```

## In output

- In **đúng định dạng** đề yêu cầu: thừa một dấu cách hay dòng trống có thể bị chấm sai.
- In nhiều dòng: gom vào mảng rồi `console.log(lines.join("\n"))` **một lần** — gọi `console.log` 10^5 lần rất chậm.

```js run
const results = [3, 1, 4];
console.log(results.join(" "));   // "3 1 4" trên một dòng
console.log(results.join("\n"));  // mỗi số một dòng
console.log((2 / 3).toFixed(2));  // "0.67" — làm tròn số thập phân khi đề yêu cầu
```

## Luyện tập theo kiểu "stdin"

Các bài tập dưới đây mô phỏng kiểu đề đọc stdin: hàm `solve(input)` nhận **toàn bộ input dạng chuỗi** và trả về **toàn bộ output dạng chuỗi**. Khi làm bài thật, bạn chỉ cần thêm dòng đọc stdin và `console.log(solve(input))`.

## Câu hỏi tại sao

- Tách logic vào hàm `solve(input) → output` thay vì đọc/in rải rác: lợi ích khi tự test với nhiều input mẫu là gì?
- Tại sao gọi `console.log` 100.000 lần chậm hơn nhiều so với gọi một lần với chuỗi lớn? (Gợi ý: mỗi lần là một thao tác I/O.)
