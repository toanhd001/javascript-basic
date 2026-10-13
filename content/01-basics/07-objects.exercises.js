module.exports = [
  {
    id: 'char-frequency',
    title: 'Đếm tần suất ký tự',
    difficulty: 'easy',
    fn: 'charFrequency',
    prompt: `
Viết \`charFrequency(s)\` trả về object đếm số lần xuất hiện của mỗi ký tự **chữ cái** (không phân biệt hoa thường, key là chữ thường). Bỏ qua ký tự không phải chữ cái a–z.

\`charFrequency("Hello!")\` → \`{ h: 1, e: 1, l: 2, o: 1 }\`
`,
    starter: `
function charFrequency(s) {
  const freq = {};

  return freq;
}
`,
    solution: `
function charFrequency(s) {
  const freq = {};
  for (const raw of s) {
    const ch = raw.toLowerCase();
    if (ch < "a" || ch > "z") continue;
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
`,
    hints: [
      'Pattern: `freq[ch] = (freq[ch] || 0) + 1;`',
      'Kiểm tra chữ cái: sau khi `toLowerCase()`, so sánh chuỗi `ch >= "a" && ch <= "z"` hoặc dùng regex `/[a-z]/`.'
    ],
    followUp: 'Thứ tự key trong object có quan trọng với bộ chấm không? Bộ chấm so sánh `{a: 1, b: 2}` với `{b: 2, a: 1}` thế nào — và **tại sao** nên như vậy?',
    tests: [
      { args: ['Hello!'], expected: { h: 1, e: 1, l: 2, o: 1 } },
      { args: ['banana'], expected: { b: 1, a: 3, n: 2 } },
      { args: [''], expected: {} },
      { args: ['AaA 123'], expected: { a: 3 } }
    ]
  },
  {
    id: 'invert-object',
    title: 'Đảo key ↔ value',
    difficulty: 'easy',
    fn: 'invert',
    prompt: `
Viết \`invert(obj)\` trả về object mới với key và value đổi chỗ cho nhau. Nếu nhiều key có cùng value, giữ key **xuất hiện sau cùng**.

\`invert({ a: "x", b: "y" })\` → \`{ x: "a", y: "b" }\`
`,
    starter: `
function invert(obj) {

}
`,
    solution: `
function invert(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }
  return result;
}
`,
    hints: ['Duyệt `Object.entries(obj)` và gán `result[value] = key`.'],
    tests: [
      { args: [{ a: 'x', b: 'y' }], expected: { x: 'a', y: 'b' } },
      { args: [{ a: 1, b: 2 }], expected: { 1: 'a', 2: 'b' } },
      { args: [{ a: 'x', b: 'x' }], expected: { x: 'b' } },
      { args: [{}], expected: {} }
    ]
  },
  {
    id: 'group-by',
    title: 'Nhóm theo key (groupBy)',
    difficulty: 'medium',
    fn: 'groupBy',
    prompt: `
Viết \`groupBy(items, keyFn)\` trả về object, trong đó mỗi key là \`keyFn(item)\` và value là **mảng** các item có cùng key (giữ thứ tự xuất hiện).

\`\`\`js
groupBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? "chan" : "le"))
// { le: [1, 3, 5], chan: [2, 4] }
\`\`\`
`,
    starter: `
function groupBy(items, keyFn) {

}
`,
    solution: `
function groupBy(items, keyFn) {
  const groups = {};
  for (const item of items) {
    const key = keyFn(item);
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  }
  return groups;
}
`,
    hints: [
      'Với mỗi item: tính key, nếu `groups[key]` chưa có thì tạo `[]`, rồi `push`.',
      'Viết gọn: `(groups[key] ??= []).push(item);`'
    ],
    explain: 'Đây là pattern "bucket": gom phần tử vào các nhóm theo một khoá. Bài **Group Anagrams** ở chặng DSA chính là groupBy với key = chuỗi đã sắp xếp.',
    followUp: 'JS hiện đại đã có `Object.groupBy(items, keyFn)`. Khi đi phỏng vấn, bạn nên dùng hàm có sẵn hay tự viết? Hỏi người phỏng vấn thế nào cho khéo?',
    tests: [
      { code: 'return groupBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? "chan" : "le"));', label: 'groupBy([1..5], chẵn/lẻ)', expected: { le: [1, 3, 5], chan: [2, 4] } },
      { code: 'return groupBy(["an", "binh", "anh", "bao"], (s) => s[0]);', label: 'groupBy(tên, chữ cái đầu)', expected: { a: ['an', 'anh'], b: ['binh', 'bao'] } },
      { code: 'return groupBy([], (x) => x);', label: 'mảng rỗng', expected: {} },
      { code: 'return groupBy([{ n: "A", age: 20 }, { n: "B", age: 21 }, { n: "C", age: 20 }], (p) => p.age);', label: 'nhóm người theo tuổi', expected: { 20: [{ n: 'A', age: 20 }, { n: 'C', age: 20 }], 21: [{ n: 'B', age: 21 }] } }
    ]
  }
];
