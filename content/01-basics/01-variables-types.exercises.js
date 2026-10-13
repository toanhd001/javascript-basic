module.exports = [
  {
    id: 'get-type',
    title: 'Đoán kiểu dữ liệu',
    difficulty: 'easy',
    fn: 'getType',
    prompt: `
Viết hàm \`getType(value)\` trả về tên kiểu của \`value\` dưới dạng chuỗi, **sửa** những chỗ \`typeof\` "nói dối":

- Mảng → \`"array"\` (thay vì \`"object"\`)
- \`null\` → \`"null"\` (thay vì \`"object"\`)
- Còn lại → giống \`typeof\` (\`"number"\`, \`"string"\`, \`"boolean"\`, \`"undefined"\`, \`"object"\`, \`"function"\`, \`"bigint"\`...)
`,
    starter: `
function getType(value) {

}
`,
    solution: `
function getType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
`,
    hints: [
      'Xử lý hai trường hợp đặc biệt trước bằng `if`, rồi `return typeof value` cho phần còn lại.',
      'Kiểm tra mảng bằng `Array.isArray(value)`; kiểm tra null bằng `value === null`.'
    ],
    explain: 'Thứ tự kiểm tra quan trọng: phải bắt `null` và mảng **trước** khi rơi vào `typeof`. Đây là mẫu "xử lý trường hợp đặc biệt trước, trường hợp chung sau" (guard clause) — bạn sẽ dùng nó trong hầu hết bài thuật toán (mảng rỗng, n = 0...).',
    followUp: 'Tại sao `Array.isArray` tồn tại trong khi đã có `instanceof Array`? (Gợi ý: mảng tạo ra trong một iframe/worker khác.)',
    tests: [
      { args: [42], expected: 'number' },
      { args: ['hi'], expected: 'string' },
      { args: [null], expected: 'null' },
      { args: [[1, 2]], expected: 'array' },
      { args: [{ a: 1 }], expected: 'object' },
      { args: [undefined], expected: 'undefined' },
      { args: [true], expected: 'boolean' },
      { code: 'return getType(function () {});', label: 'getType(function () {})', expected: 'function' },
      { code: 'return getType(10n);', label: 'getType(10n)', expected: 'bigint' }
    ]
  },
  {
    id: 'safe-add',
    title: 'Cộng số an toàn',
    difficulty: 'easy',
    fn: 'safeAdd',
    prompt: `
Input đọc từ bàn phím/file thường là **chuỗi**. Viết \`safeAdd(a, b)\` nhận hai giá trị (có thể là số hoặc chuỗi chứa số) và trả về **tổng dạng số**.

Nếu một trong hai không chuyển được thành số hợp lệ, trả về \`null\`.
`,
    starter: `
function safeAdd(a, b) {

}
`,
    solution: `
function safeAdd(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) return null;
  return x + y;
}
`,
    hints: [
      '`"5" + 1` cho `"51"`. Hãy đổi cả hai sang số bằng `Number(...)` trước khi cộng.',
      '`Number("abc")` là `NaN`. Kiểm tra bằng `Number.isNaN(x)` — không dùng `x === NaN` vì luôn false.'
    ],
    explain: '`Number(x)` chuyển cả chuỗi; nếu có ký tự lạ thì ra `NaN`. Khác với `parseInt("12abc", 10)` = 12 (đọc đến khi gặp ký tự lạ). Trong coding test, khi đã biết input là số hợp lệ, `Number(...)` hoặc dấu `+` đứng trước (`+str`) là cách nhanh nhất.',
    followUp: 'Tại sao `NaN === NaN` lại là `false`? Nếu bạn thiết kế ngôn ngữ, bạn có giữ quy tắc này không — và trade-off là gì?',
    tests: [
      { args: [1, 2], expected: 3 },
      { args: ['5', '10'], expected: 15 },
      { args: ['5', 1], expected: 6 },
      { args: ['abc', 1], expected: null },
      { args: [2, '3.5'], expected: 5.5 },
      { args: ['7', 'x7'], expected: null }
    ]
  },
  {
    id: 'is-safe-integer-sum',
    title: 'Có tràn số không?',
    difficulty: 'easy',
    fn: 'sumIsSafe',
    prompt: `
Viết \`sumIsSafe(a, b)\` trả về \`true\` nếu \`a + b\` vẫn là số nguyên **chính xác** trong JS (không vượt \`Number.MAX_SAFE_INTEGER\`), ngược lại \`false\`. Giả sử \`a\`, \`b\` là số nguyên không âm.
`,
    starter: `
function sumIsSafe(a, b) {

}
`,
    solution: `
function sumIsSafe(a, b) {
  return a <= Number.MAX_SAFE_INTEGER - b;
}
`,
    hints: [
      'Có hàm sẵn `Number.isSafeInteger(x)`, nhưng nếu `a + b` đã tràn thì kết quả cộng có thể đã sai — so sánh trước khi cộng sẽ chắc hơn.',
      '`a + b <= MAX` tương đương `a <= MAX - b`, và vế phải không bao giờ tràn.'
    ],
    explain: 'Kỹ thuật "chuyển vế để tránh tràn" (`a <= MAX - b` thay vì `a + b <= MAX`) xuất hiện ở mọi ngôn ngữ có giới hạn số — C++, Java với `int`. Trong JS, khi bài yêu cầu kết quả lớn hơn ~9·10^15, hãy dùng `BigInt` hoặc lấy modulo sau mỗi phép tính.',
    followUp: 'Đề bài hay ghi "trả về kết quả modulo 10^9 + 7". Tại sao lại là số này, và tại sao phải lấy modulo **sau từng bước** chứ không phải chỉ ở cuối?',
    tests: [
      { args: [1, 2], expected: true },
      { args: [9007199254740990, 1], expected: true },
      { args: [9007199254740991, 1], expected: false },
      { args: [4503599627370496, 4503599627370496], expected: false },
      { args: [0, 9007199254740991], expected: true }
    ]
  }
];
