module.exports = [
  {
    id: 'fast-power',
    title: 'Luỹ thừa nhanh (Pow(x, n))',
    difficulty: 'medium',
    fn: 'myPow',
    compare: 'float',
    prompt: `
Tính \`x^n\` với \`n\` là số nguyên (có thể **âm**, \`|n|\` tới 2^31). Không dùng \`**\` hay \`Math.pow\`. Phải đạt O(log n). (LeetCode 50)
`,
    starter: `
function myPow(x, n) {

}
`,
    solution: `
function myPow(x, n) {
  if (n < 0) return 1 / myPow(x, -n);
  if (n === 0) return 1;
  const half = myPow(x, Math.floor(n / 2));
  return n % 2 === 0 ? half * half : half * half * x;
}
`,
    hints: [
      'Base case: `n === 0` → 1. Số mũ âm: `x^-n = 1 / x^n`.',
      'Tính `half = myPow(x, floor(n/2))` **một lần** rồi dùng lại; gọi hai lần sẽ thành O(n).'
    ],
    explain: 'Độ sâu đệ quy ~31 với n = 2^31. Lỗi kinh điển: `return myPow(x, n/2) * myPow(x, n/2)` — đúng nhưng O(n) vì gọi hai lần cùng một thứ.',
    tests: [
      { args: [2, 10], expected: 1024 },
      { args: [2.1, 3], expected: 9.261 },
      { args: [2, -2], expected: 0.25 },
      { args: [5, 0], expected: 1 },
      { args: [1.0000001, 2147483647], expected: 1.0000001 ** 2147483647, hidden: true, label: 'n = 2^31 − 1 — cần O(log n)' },
      { args: [-2, 3], expected: -8 }
    ]
  },
  {
    id: 'flatten-deep',
    title: 'Làm phẳng mảng lồng nhau',
    difficulty: 'easy',
    fn: 'flatten',
    prompt: `
Viết \`flatten(arr)\` trả về mảng một chiều chứa mọi phần tử của mảng lồng nhau **nhiều tầng tuỳ ý**, giữ thứ tự. Không dùng \`arr.flat()\`.

\`flatten([1, [2, [3, [4]], 5]])\` → \`[1, 2, 3, 4, 5]\`
`,
    starter: `
function flatten(arr) {

}
`,
    solution: `
function flatten(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const x of flatten(item)) result.push(x);
    } else {
      result.push(item);
    }
  }
  return result;
}
`,
    hints: [
      'Duyệt từng phần tử: nếu là mảng thì gọi đệ quy `flatten(item)` và đẩy mọi phần tử của kết quả vào; không thì đẩy chính nó.',
      'Tránh `result.push(...flatten(item))` khi mảng con rất lớn (giới hạn số tham số).'
    ],
    followUp: 'Viết lại **không dùng đệ quy** (dùng stack). Thứ tự kết quả có bị đảo không, và sửa thế nào?',
    tests: [
      { args: [[1, [2, [3, [4]], 5]]], expected: [1, 2, 3, 4, 5] },
      { args: [[]], expected: [] },
      { args: [[[[]]]], expected: [] },
      { args: [[1, 2, 3]], expected: [1, 2, 3] },
      { args: [[['a'], [['b', ['c']]], 'd']], expected: ['a', 'b', 'c', 'd'] }
    ]
  },
  {
    id: 'deep-sum',
    title: 'Tổng các số trong JSON',
    difficulty: 'medium',
    fn: 'deepSum',
    prompt: `
Cho một giá trị kiểu JSON (số, chuỗi, boolean, null, mảng, object lồng nhau tuỳ ý). Viết \`deepSum(value)\` trả về **tổng mọi số** nằm ở bất kỳ đâu bên trong (bỏ qua chuỗi kể cả chuỗi chứa số).

\`deepSum({ a: 1, b: [2, { c: 3, d: "4" }], e: null })\` → \`6\`
`,
    starter: `
function deepSum(value) {

}
`,
    solution: `
function deepSum(value) {
  if (typeof value === "number") return value;
  if (value === null || typeof value !== "object") return 0;
  let total = 0;
  for (const child of Object.values(value)) total += deepSum(child);
  return total;
}
`,
    hints: [
      'Base case: số → trả về chính nó; các kiểu nguyên thuỷ khác (chuỗi, boolean, null) → 0.',
      'Mảng và object đều duyệt được bằng `Object.values(value)` — gọi đệ quy cho từng phần tử con và cộng lại.'
    ],
    explain: 'Cấu trúc **tự lồng nhau** (JSON, cây thư mục, DOM) là nơi đệ quy toả sáng: code bám sát định nghĩa dữ liệu. Lưu ý `typeof null === "object"` — phải loại `null` trước.',
    tests: [
      { args: [{ a: 1, b: [2, { c: 3, d: '4' }], e: null }], expected: 6 },
      { args: [5], expected: 5 },
      { args: ['10'], expected: 0 },
      { args: [[[[[1]]], 2, [3, [4]]]], expected: 10 },
      { args: [{ x: true, y: { z: -5, w: [1.5] } }], expected: -3.5 },
      { args: [null], expected: 0 }
    ]
  }
];
