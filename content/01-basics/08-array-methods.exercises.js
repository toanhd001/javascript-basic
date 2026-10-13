module.exports = [
  {
    id: 'sum-squares-evens',
    title: 'Tổng bình phương số chẵn',
    difficulty: 'easy',
    fn: 'sumSquaresOfEvens',
    prompt: `
Viết \`sumSquaresOfEvens(nums)\` trả về tổng bình phương của các số **chẵn** trong mảng. Hãy dùng \`filter\`, \`map\`, \`reduce\`.

\`sumSquaresOfEvens([1, 2, 3, 4])\` → \`4 + 16 = 20\`
`,
    starter: `
function sumSquaresOfEvens(nums) {
  return nums;
}
`,
    solution: `
function sumSquaresOfEvens(nums) {
  return nums
    .filter((n) => n % 2 === 0)
    .map((n) => n * n)
    .reduce((sum, n) => sum + n, 0);
}
`,
    hints: ['`.filter(n => n % 2 === 0).map(n => n * n).reduce((s, n) => s + n, 0)`'],
    tests: [
      { args: [[1, 2, 3, 4]], expected: 20 },
      { args: [[1, 3, 5]], expected: 0 },
      { args: [[]], expected: 0 },
      { args: [[-2, 2]], expected: 8 }
    ]
  },
  {
    id: 'sort-numbers',
    title: 'Sắp xếp đúng cách',
    difficulty: 'easy',
    fn: 'sortNumbers',
    prompt: `
Viết \`sortNumbers(nums)\` trả về mảng **mới** đã sắp xếp tăng dần, **không làm thay đổi** mảng đầu vào.
`,
    starter: `
function sortNumbers(nums) {
  return nums.sort();
}
`,
    solution: `
function sortNumbers(nums) {
  return [...nums].sort((a, b) => a - b);
}
`,
    hints: [
      'Code sẵn có **hai** lỗi. Chạy test để thấy.',
      'Copy trước khi sort: `[...nums]`. Và truyền comparator `(a, b) => a - b`.'
    ],
    followUp: '`(a, b) => a - b` có thể sai với số rất lớn không? (Gợi ý: hai số đều là số thực bình thường thì không, nhưng nếu so sánh BigInt hoặc chuỗi thì sao?)',
    tests: [
      { args: [[10, 9, 1, 100]], expected: [1, 9, 10, 100] },
      { args: [[3, -1, 2]], expected: [-1, 2, 3] },
      { args: [[]], expected: [] },
      { code: 'const a = [3, 1, 2]; sortNumbers(a); return a;', label: 'Mảng gốc [3, 1, 2] không bị đổi', expected: [3, 1, 2] }
    ]
  },
  {
    id: 'sort-people',
    title: 'Sắp xếp nhiều tiêu chí',
    difficulty: 'medium',
    fn: 'rankStudents',
    prompt: `
Cho mảng học sinh \`{ name, score }\`. Viết \`rankStudents(students)\` trả về **mảng tên** đã sắp xếp theo:
1. \`score\` **giảm dần**
2. Nếu bằng điểm: \`name\` tăng dần theo bảng chữ cái
`,
    starter: `
function rankStudents(students) {

}
`,
    solution: `
function rankStudents(students) {
  return [...students]
    .sort((a, b) => b.score - a.score || (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    .map((s) => s.name);
}
`,
    hints: [
      'Comparator: `b.score - a.score` cho giảm dần. Nếu kết quả là 0 thì `||` sẽ chuyển sang tiêu chí thứ hai.',
      'So sánh chuỗi: `a.name < b.name ? -1 : a.name > b.name ? 1 : 0` hoặc `a.name.localeCompare(b.name)`.'
    ],
    tests: [
      { args: [[{ name: 'An', score: 8 }, { name: 'Binh', score: 9 }, { name: 'Chi', score: 8 }]], expected: ['Binh', 'An', 'Chi'] },
      { args: [[{ name: 'Zed', score: 5 }, { name: 'Amy', score: 5 }]], expected: ['Amy', 'Zed'] },
      { args: [[]], expected: [] }
    ]
  },
  {
    id: 'top-words',
    title: 'Từ xuất hiện nhiều nhất',
    difficulty: 'medium',
    fn: 'topWords',
    prompt: `
Viết \`topWords(text, k)\` trả về mảng \`k\` từ xuất hiện nhiều nhất trong \`text\` (không phân biệt hoa thường, từ gồm chữ a–z, phân cách bởi bất kỳ ký tự nào khác). Sắp theo số lần xuất hiện **giảm dần**, bằng nhau thì theo **thứ tự từ điển**.

\`topWords("the cat and the hat and the bat", 2)\` → \`["the", "and"]\`
`,
    starter: `
function topWords(text, k) {

}
`,
    solution: `
function topWords(text, k) {
  const words = text.toLowerCase().match(/[a-z]+/g) || [];
  const freq = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;
  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a] || (a < b ? -1 : 1))
    .slice(0, k);
}
`,
    hints: [
      'Tách từ: `text.toLowerCase().match(/[a-z]+/g)` (nhớ trường hợp không có từ nào thì `match` trả về `null`).',
      'Đếm tần suất vào object, rồi sắp `Object.keys(freq)` bằng comparator hai tiêu chí, cuối cùng `slice(0, k)`.'
    ],
    explain: 'O(n + m log m) với m là số từ khác nhau. Đây là "Top K Frequent Words" (LeetCode 692). Khi m rất lớn và k nhỏ, dùng heap kích thước k cho O(m log k).',
    tests: [
      { args: ['the cat and the hat and the bat', 2], expected: ['the', 'and'] },
      { args: ['b a c b a', 3], expected: ['a', 'b', 'c'] },
      { args: ['Hello, hello! HELLO? world.', 1], expected: ['hello'] },
      { args: ['', 3], expected: [] }
    ]
  }
];
