module.exports = [
  {
    id: 'max-of',
    title: 'Max của nhiều số',
    difficulty: 'easy',
    fn: 'maxOf',
    prompt: `
Viết \`maxOf(...nums)\` nhận **số lượng tham số tuỳ ý** và trả về số lớn nhất. Nếu không có tham số nào, trả về \`-Infinity\`.

Yêu cầu: **tự viết vòng lặp**, không dùng \`Math.max\`.
`,
    starter: `
function maxOf(...nums) {

}
`,
    solution: `
function maxOf(...nums) {
  let best = -Infinity;
  for (const n of nums) {
    if (n > best) best = n;
  }
  return best;
}
`,
    hints: [
      '`...nums` gom mọi tham số thành một mảng.',
      'Khởi tạo `best = -Infinity` — mọi số đều lớn hơn nó, nên không cần xử lý riêng phần tử đầu tiên.'
    ],
    explain: 'Khởi tạo bằng `-Infinity` (hoặc `Infinity` khi tìm min) là mẹo rất hay dùng trong coding test, tránh bug khi khởi tạo `best = 0` mà mọi số đều âm.',
    followUp: 'Nếu khởi tạo `best = 0` thì test nào sẽ trượt? Còn `best = nums[0]` thì có vấn đề gì với input rỗng?',
    tests: [
      { args: [1, 5, 3], expected: 5 },
      { args: [-3, -1, -7], expected: -1 },
      { args: [42], expected: 42 },
      { args: [], expected: -Infinity }
    ]
  },
  {
    id: 'apply-n-times',
    title: 'Áp dụng hàm n lần',
    difficulty: 'easy',
    fn: 'applyN',
    prompt: `
Viết \`applyN(fn, n, x)\` trả về kết quả khi áp dụng hàm \`fn\` lên \`x\` đúng \`n\` lần: \`fn(fn(...fn(x)))\`. Nếu \`n = 0\` trả về \`x\`.
`,
    starter: `
function applyN(fn, n, x) {

}
`,
    solution: `
function applyN(fn, n, x) {
  let result = x;
  for (let i = 0; i < n; i++) {
    result = fn(result);
  }
  return result;
}
`,
    hints: ['Giữ một biến `result`, mỗi vòng gán `result = fn(result)`.'],
    tests: [
      { code: 'return applyN((v) => v + 1, 5, 0);', label: 'applyN(v => v + 1, 5, 0)', expected: 5 },
      { code: 'return applyN((v) => v * 2, 10, 1);', label: 'applyN(v => v * 2, 10, 1)', expected: 1024 },
      { code: 'return applyN((s) => s + "!", 3, "hi");', label: 'applyN(s => s + "!", 3, "hi")', expected: 'hi!!!' },
      { code: 'return applyN((v) => v * 100, 0, 7);', label: 'applyN(v => v * 100, 0, 7)', expected: 7 }
    ]
  },
  {
    id: 'make-multiplier',
    title: 'Hàm tạo hàm',
    difficulty: 'easy',
    fn: 'makeAdder',
    prompt: `
Viết \`makeAdder(k)\` trả về **một hàm** nhận \`x\` và trả về \`x + k\`.

\`\`\`js
const add5 = makeAdder(5);
add5(10); // 15
\`\`\`
`,
    starter: `
function makeAdder(k) {

}
`,
    solution: `
function makeAdder(k) {
  return (x) => x + k;
}
`,
    hints: ['`return (x) => x + k;` — hàm bên trong "nhớ" được `k` của lần gọi `makeAdder`.'],
    followUp: 'Gọi `makeAdder(5)` xong thì hàm `makeAdder` đã chạy xong và kết thúc. Vậy **tại sao** hàm trả về vẫn còn nhớ `k = 5`? (Bài "Scope và closure" sẽ trả lời.)',
    tests: [
      { code: 'const add5 = makeAdder(5); return add5(10);', label: 'makeAdder(5)(10)', expected: 15 },
      { code: 'const a = makeAdder(1), b = makeAdder(100); return [a(1), b(1), a(2)];', label: 'hai hàm độc lập', expected: [2, 101, 3] },
      { code: 'return typeof makeAdder(3);', label: 'typeof makeAdder(3)', expected: 'function' }
    ]
  }
];
