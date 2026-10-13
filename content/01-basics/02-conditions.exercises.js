module.exports = [
  {
    id: 'fizzbuzz-one',
    title: 'FizzBuzz một số',
    difficulty: 'easy',
    fn: 'fizzBuzzOne',
    prompt: `
Viết \`fizzBuzzOne(n)\` trả về:
- \`"FizzBuzz"\` nếu \`n\` chia hết cho cả 3 và 5
- \`"Fizz"\` nếu chỉ chia hết cho 3
- \`"Buzz"\` nếu chỉ chia hết cho 5
- Ngược lại trả về \`n\` dưới dạng **chuỗi** (VD \`"7"\`)
`,
    starter: `
function fizzBuzzOne(n) {

}
`,
    solution: `
function fizzBuzzOne(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}
`,
    hints: [
      '"Chia hết cho 3" nghĩa là `n % 3 === 0`.',
      'Thứ tự `if` quan trọng: kiểm tra trường hợp "cả 3 và 5" **trước**, nếu không 15 sẽ trả về "Fizz".'
    ],
    explain: 'Lỗi hay gặp nhất là đặt `n % 3` lên trước. Nguyên tắc: điều kiện **cụ thể hơn** (hẹp hơn) phải đứng trước điều kiện tổng quát.',
    followUp: 'Nếu đề thêm luật "chia hết cho 7 → Bazz" (và các tổ hợp như "FizzBazz"), cách viết if/else hiện tại phải thêm bao nhiêu nhánh? Bạn sẽ thiết kế lại thế nào để thêm luật mà không phải sửa nhiều code?',
    tests: [
      { args: [3], expected: 'Fizz' },
      { args: [5], expected: 'Buzz' },
      { args: [15], expected: 'FizzBuzz' },
      { args: [7], expected: '7' },
      { args: [30], expected: 'FizzBuzz' },
      { args: [9], expected: 'Fizz' },
      { args: [1], expected: '1' }
    ]
  },
  {
    id: 'leap-year',
    title: 'Năm nhuận',
    difficulty: 'easy',
    fn: 'isLeapYear',
    prompt: `
Năm nhuận là năm **chia hết cho 4**, trừ những năm **chia hết cho 100** — nhưng những năm **chia hết cho 400** thì vẫn là năm nhuận.

Viết \`isLeapYear(year)\` trả về \`true\`/\`false\`.
`,
    starter: `
function isLeapYear(year) {

}
`,
    solution: `
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}
`,
    hints: [
      'Lại là bài "thứ tự điều kiện": xét 400 trước, rồi 100, rồi 4.',
      'Có thể viết một dòng: `(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0`.'
    ],
    followUp: 'Bản một dòng và bản nhiều `if`: bản nào dễ đọc hơn với người mới vào dự án? Bản nào dễ sai hơn khi sửa?',
    tests: [
      { args: [2024], expected: true },
      { args: [2023], expected: false },
      { args: [1900], expected: false },
      { args: [2000], expected: true },
      { args: [2100], expected: false },
      { args: [1600], expected: true }
    ]
  },
  {
    id: 'grade',
    title: 'Xếp loại điểm',
    difficulty: 'easy',
    fn: 'grade',
    prompt: `
Viết \`grade(score)\` với \`score\` từ 0 đến 10:

| Điểm | Xếp loại |
| --- | --- |
| ≥ 8.5 | \`"A"\` |
| ≥ 7 | \`"B"\` |
| ≥ 5.5 | \`"C"\` |
| ≥ 4 | \`"D"\` |
| còn lại | \`"F"\` |

Nếu \`score\` không phải số hợp lệ trong khoảng [0, 10] (âm, > 10, \`NaN\`, hoặc không phải kiểu number), trả về \`null\`.
`,
    starter: `
function grade(score) {

}
`,
    solution: `
function grade(score) {
  if (typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 10) return null;
  if (score >= 8.5) return "A";
  if (score >= 7) return "B";
  if (score >= 5.5) return "C";
  if (score >= 4) return "D";
  return "F";
}
`,
    hints: [
      'Kiểm tra input không hợp lệ đầu tiên (guard clause), rồi xét từ mức cao xuống thấp.',
      '`NaN < 0` và `NaN > 10` đều là `false`, nên phải kiểm tra `Number.isNaN` riêng.'
    ],
    followUp: 'Tại sao `NaN` lọt qua được điều kiện `score < 0 || score > 10`? Đây là lý do nhiều hệ thống thật bị bug với dữ liệu thiếu.',
    tests: [
      { args: [9], expected: 'A' },
      { args: [8.5], expected: 'A' },
      { args: [7], expected: 'B' },
      { args: [6], expected: 'C' },
      { args: [4], expected: 'D' },
      { args: [3.9], expected: 'F' },
      { args: [0], expected: 'F' },
      { args: [10], expected: 'A' },
      { args: [-1], expected: null },
      { args: [11], expected: null },
      { args: ['9'], expected: null },
      { code: 'return grade(NaN);', label: 'grade(NaN)', expected: null }
    ]
  }
];
