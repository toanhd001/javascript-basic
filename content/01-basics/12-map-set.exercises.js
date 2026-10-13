module.exports = [
  {
    id: 'unique-in-order',
    title: 'Khử trùng lặp giữ thứ tự',
    difficulty: 'easy',
    fn: 'uniqueInOrder',
    prompt: `
Viết \`uniqueInOrder(arr)\` trả về mảng các giá trị không trùng lặp, **giữ thứ tự xuất hiện lần đầu**. Bộ test có mảng 800.000 phần tử — \`includes\` trong vòng lặp sẽ quá chậm.
`,
    starter: `
function uniqueInOrder(arr) {
  const result = [];
  for (const x of arr) {
    if (!result.includes(x)) result.push(x);
  }
  return result;
}
`,
    solution: `
function uniqueInOrder(arr) {
  return [...new Set(arr)];
}
`,
    hints: [
      'Code có sẵn đúng nhưng O(n²). Chạy test để thấy test ẩn bị quá thời gian.',
      '`Set` giữ thứ tự thêm vào: `[...new Set(arr)]`.'
    ],
    followUp: 'Code ban đầu chạy đúng với input nhỏ nhưng timeout với input lớn. Trong coding test thật, làm sao bạn biết trước khi nộp rằng O(n²) sẽ không qua? (Gợi ý: đọc ràng buộc n trong đề.)',
    tests: [
      { args: [[3, 1, 3, 2, 1]], expected: [3, 1, 2] },
      { args: [['a', 'b', 'a']], expected: ['a', 'b'] },
      { args: [[]], expected: [] },
      {
        gen: 'return [Array.from({ length: 800000 }, (_, i) => i % 600000)];',
        check: 'return Array.isArray(result) && result.length === 600000 && result[0] === 0 && result[599999] === 599999;',
        label: 'n = 800.000 phần tử (600.000 giá trị khác nhau) — cần O(n)',
        expectedText: 'mảng 600.000 phần tử [0, 1, ..., 599999]'
      }
    ]
  },
  {
    id: 'array-intersection',
    title: 'Giao của hai mảng',
    difficulty: 'easy',
    fn: 'intersection',
    prompt: `
Viết \`intersection(a, b)\` trả về các giá trị **khác nhau** xuất hiện ở cả hai mảng, theo thứ tự xuất hiện trong \`a\`. Yêu cầu O(n + m).
`,
    starter: `
function intersection(a, b) {

}
`,
    solution: `
function intersection(a, b) {
  const inB = new Set(b);
  const added = new Set();
  const result = [];
  for (const x of a) {
    if (inB.has(x) && !added.has(x)) {
      added.add(x);
      result.push(x);
    }
  }
  return result;
}
`,
    hints: [
      'Đưa `b` vào một `Set` để tra cứu O(1).',
      'Cần thêm một `Set` nữa để không thêm trùng giá trị đã có trong kết quả.'
    ],
    tests: [
      { args: [[1, 2, 2, 1], [2, 2]], expected: [2] },
      { args: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [4, 9] },
      { args: [[1, 2], [3, 4]], expected: [] },
      { args: [[], [1]], expected: [] }
    ]
  },
  {
    id: 'first-unique-char',
    title: 'Ký tự không lặp đầu tiên',
    difficulty: 'easy',
    fn: 'firstUniqChar',
    prompt: `
Viết \`firstUniqChar(s)\` trả về **chỉ số** của ký tự đầu tiên chỉ xuất hiện đúng một lần trong \`s\`. Không có thì trả về \`-1\`.

\`firstUniqChar("leetcode")\` → \`0\`, \`firstUniqChar("loveleetcode")\` → \`2\`
`,
    starter: `
function firstUniqChar(s) {

}
`,
    solution: `
function firstUniqChar(s) {
  const freq = new Map();
  for (const ch of s) freq.set(ch, (freq.get(ch) || 0) + 1);
  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) return i;
  }
  return -1;
}
`,
    hints: [
      'Hai lần duyệt: lần 1 đếm tần suất, lần 2 tìm chỉ số đầu tiên có tần suất 1.',
      'Hai lần duyệt O(n) vẫn là O(n). "Một lần duyệt" không phải lúc nào cũng cần thiết.'
    ],
    followUp: 'Nếu chuỗi đến dạng **stream** (từng ký tự một, không lưu lại được toàn bộ) và mỗi lúc phải trả lời "ký tự không lặp đầu tiên hiện tại là gì?", bạn cần cấu trúc dữ liệu gì?',
    tests: [
      { args: ['leetcode'], expected: 0 },
      { args: ['loveleetcode'], expected: 2 },
      { args: ['aabb'], expected: -1 },
      { args: [''], expected: -1 },
      { args: ['z'], expected: 0 }
    ]
  }
];
