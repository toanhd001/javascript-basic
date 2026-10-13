module.exports = [
  {
    id: 'hello-world',
    title: 'Hello, World!',
    difficulty: 'easy',
    fn: 'hello',
    prompt: `
Viết hàm \`hello()\` **trả về** chuỗi \`"Hello, World!"\` (đúng từng ký tự, có dấu phẩy và chấm than).
`,
    starter: `
function hello() {
  // viết code ở đây
}
`,
    solution: `
function hello() {
  return "Hello, World!";
}
`,
    hints: [
      'Dùng từ khoá `return` theo sau là chuỗi trong dấu nháy kép.'
    ],
    explain: 'Hàm chỉ cần `return` một chuỗi cố định. Nếu bạn viết `console.log("Hello, World!")` thay vì `return`, bộ chấm sẽ nhận `undefined`.',
    followUp: 'Thử đổi `return` thành `console.log` rồi chạy test lại. Tại sao test trượt dù màn hình vẫn in đúng chữ?',
    tests: [
      { args: [], expected: 'Hello, World!' }
    ]
  },
  {
    id: 'sum-two',
    title: 'Cộng hai số',
    difficulty: 'easy',
    fn: 'sum',
    prompt: `
Viết hàm \`sum(a, b)\` trả về tổng của hai số \`a\` và \`b\`.
`,
    starter: `
function sum(a, b) {

}
`,
    solution: `
function sum(a, b) {
  return a + b;
}
`,
    hints: ['`return a + b;`'],
    followUp: 'Gọi thử `sum("1", 2)` trong nút ▶ Chạy (thêm `console.log(sum("1", 2))`). Kết quả là gì và **tại sao**? Đây là "ép kiểu ngầm" — bài sau sẽ nói kỹ.',
    tests: [
      { args: [1, 2], expected: 3 },
      { args: [-5, 5], expected: 0 },
      { args: [0.5, 0.25], expected: 0.75 },
      { args: [1000000, 2345678], expected: 3345678 }
    ]
  },
  {
    id: 'fix-bugs',
    title: 'Sửa lỗi',
    difficulty: 'easy',
    fn: 'areaOfRectangle',
    brokenStarter: true, // cố ý sai cú pháp để người học tự sửa
    prompt: `
Đoạn code dưới đây có **3 lỗi**. Dùng nút **🔍 Kiểm tra cú pháp** và **▶ Chạy** để tìm và sửa, sao cho \`areaOfRectangle(w, h)\` trả về diện tích hình chữ nhật.
`,
    starter: `
function areaOfRectangle(width, height {
  const area = widht * height;
  console.log(area);
}
`,
    solution: `
function areaOfRectangle(width, height) {
  const area = width * height;
  return area;
}
`,
    hints: [
      'Lỗi 1 là lỗi cú pháp ở dòng khai báo hàm: thiếu một dấu ngoặc.',
      'Lỗi 2: tên biến bị gõ sai → ReferenceError.',
      'Lỗi 3: hàm in ra nhưng không trả về.'
    ],
    followUp: 'Trong 3 lỗi, lỗi nào trình duyệt báo **trước khi chạy**, lỗi nào chỉ lộ ra **khi chạy**, và lỗi nào **không hề báo lỗi** mà chỉ cho kết quả sai? Loại nào nguy hiểm nhất khi đi làm?',
    tests: [
      { args: [2, 3], expected: 6 },
      { args: [10, 10], expected: 100 },
      { args: [0, 7], expected: 0 }
    ]
  }
];
