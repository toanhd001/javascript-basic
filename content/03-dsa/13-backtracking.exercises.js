module.exports = [
  {
    id: 'subsets',
    title: 'Subsets',
    difficulty: 'medium',
    fn: 'subsets',
    compare: 'unordered-deep',
    prompt: `
Trả về **mọi tập con** của mảng \`nums\` (các phần tử khác nhau). Thứ tự không quan trọng. (LeetCode 78)
`,
    starter: `
function subsets(nums) {

}
`,
    solution: `
function subsets(nums) {
  const result = [];
  const path = [];
  function backtrack(start) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  }
  backtrack(0);
  return result;
}
`,
    hints: [
      'Khuôn mẫu trong bài học: mỗi lần vào hàm đệ quy là một tập con → lưu bản sao `[...path]`.',
      'Cách khác không đệ quy: bắt đầu với `[[]]`, với mỗi số x, thêm x vào **mọi** tập con đã có để tạo tập con mới.'
    ],
    tests: [
      { args: [[1, 2, 3]], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
      { args: [[0]], expected: [[], [0]] },
      { args: [[]], expected: [[]] },
      { gen: 'return [Array.from({ length: 16 }, (_, i) => i)];', check: 'return result.length === 65536 && new Set(result.map((s) => [...s].sort((a, b) => a - b).join(","))).size === 65536;', label: 'n = 16 → 65.536 tập con', expectedText: '65.536 tập con khác nhau' }
    ]
  },
  {
    id: 'permutations',
    title: 'Permutations',
    difficulty: 'medium',
    fn: 'permute',
    compare: 'unordered',
    prompt: `
Trả về **mọi hoán vị** của mảng \`nums\` (các phần tử khác nhau). Thứ tự các hoán vị không quan trọng. (LeetCode 46)
`,
    starter: `
function permute(nums) {

}
`,
    solution: `
function permute(nums) {
  const result = [];
  const path = [];
  const used = new Array(nums.length).fill(false);
  function backtrack() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack();
      path.pop();
      used[i] = false;
    }
  }
  backtrack();
  return result;
}
`,
    hints: [
      'Khác với tập con: mỗi tầng được chọn **bất kỳ** phần tử nào **chưa dùng** (không chỉ các phần tử sau i).',
      'Mảng `used[i]` đánh dấu phần tử đã nằm trong `path`. Nhớ bỏ đánh dấu khi quay lui.'
    ],
    tests: [
      { args: [[1, 2, 3]], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
      { args: [[0, 1]], expected: [[0, 1], [1, 0]] },
      { args: [[1]], expected: [[1]] },
      { gen: 'return [[1, 2, 3, 4, 5, 6, 7, 8]];', check: 'return result.length === 40320 && new Set(result.map((p) => p.join(""))).size === 40320 && result.every((p) => p.length === 8);', label: 'n = 8 → 40.320 hoán vị', expectedText: '40.320 hoán vị khác nhau' }
    ]
  },
  {
    id: 'combination-sum',
    title: 'Combination Sum',
    difficulty: 'medium',
    fn: 'combinationSum',
    compare: 'unordered-deep',
    prompt: `
\`candidates\` là các số nguyên dương **khác nhau**. Tìm mọi tổ hợp có tổng bằng \`target\`; mỗi số được dùng **nhiều lần**. Hai tổ hợp chỉ khác thứ tự coi là một. (LeetCode 39)

\`combinationSum([2,3,6,7], 7)\` → \`[[2,2,3],[7]]\`
`,
    starter: `
function combinationSum(candidates, target) {

}
`,
    solution: `
function combinationSum(candidates, target) {
  const nums = [...candidates].sort((a, b) => a - b);
  const result = [];
  const path = [];
  function backtrack(start, remaining) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (nums[i] > remaining) break;
      path.push(nums[i]);
      backtrack(i, remaining - nums[i]);
      path.pop();
    }
  }
  backtrack(0, target);
  return result;
}
`,
    hints: [
      'Để tránh `[2,3,2]` và `[2,2,3]` cùng xuất hiện: chỉ chọn các số từ vị trí `start` trở đi.',
      'Được dùng lại số hiện tại → gọi đệ quy với `start = i` (không phải `i + 1`).',
      'Cắt tỉa: sort trước, nếu `nums[i] > remaining` thì `break`.'
    ],
    tests: [
      { args: [[2, 3, 6, 7], 7], expected: [[2, 2, 3], [7]] },
      { args: [[2, 3, 5], 8], expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] },
      { args: [[2], 1], expected: [] },
      { args: [[7, 3, 2], 7], expected: [[2, 2, 3], [7]] }
    ]
  },
  {
    id: 'n-queens',
    title: 'N-Queens (đếm số cách)',
    difficulty: 'hard',
    fn: 'totalNQueens',
    prompt: `
Đếm số cách đặt \`n\` quân hậu lên bàn cờ \`n × n\` sao cho không quân nào ăn được quân nào (cùng hàng, cùng cột, cùng đường chéo). \`1 <= n <= 11\`. (LeetCode 52)
`,
    starter: `
function totalNQueens(n) {

}
`,
    solution: `
function totalNQueens(n) {
  const cols = new Array(n).fill(false);
  const diag1 = new Array(2 * n).fill(false);
  const diag2 = new Array(2 * n).fill(false);
  let count = 0;
  function place(row) {
    if (row === n) {
      count++;
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols[c] || diag1[row + c] || diag2[row - c + n]) continue;
      cols[c] = diag1[row + c] = diag2[row - c + n] = true;
      place(row + 1);
      cols[c] = diag1[row + c] = diag2[row - c + n] = false;
    }
  }
  place(0);
  return count;
}
`,
    hints: [
      'Đặt từng hàng một → tự động không có hai quân cùng hàng. Mỗi hàng thử mọi cột.',
      'Các ô trên cùng đường chéo "\\" có `row - col` bằng nhau; đường chéo "/" có `row + col` bằng nhau.',
      'Dùng 3 mảng boolean (cột, chéo 1, chéo 2) để kiểm tra O(1) thay vì quét bàn cờ.'
    ],
    tests: [
      { args: [1], expected: 1 },
      { args: [4], expected: 2 },
      { args: [6], expected: 4 },
      { args: [8], expected: 92 },
      { args: [11], expected: 2680, hidden: true, label: 'n = 11 — cần cắt tỉa O(1) mỗi ô' }
    ]
  }
];
