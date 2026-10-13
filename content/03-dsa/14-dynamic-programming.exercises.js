module.exports = [
  {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'easy',
    fn: 'climbStairs',
    prompt: `
Cầu thang \`n\` bậc, mỗi lần leo **1 hoặc 2** bậc. Có bao nhiêu cách để lên tới đỉnh? (\`1 <= n <= 70\`) (LeetCode 70)
`,
    starter: `
function climbStairs(n) {
  if (n <= 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
}
`,
    solution: `
function climbStairs(n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}
`,
    hints: [
      'Code có sẵn đúng nhưng O(2^n) — thử chạy với n = 45 sẽ thấy rất chậm.',
      'Thêm memo, hoặc lập bảng từ dưới lên: `dp[i] = dp[i-1] + dp[i-2]`. Chỉ cần nhớ hai giá trị trước.'
    ],
    tests: [
      { args: [1], expected: 1 },
      { args: [2], expected: 2 },
      { args: [3], expected: 3 },
      { args: [5], expected: 8 },
      { args: [70], expected: 308061521170129, hidden: true, label: 'n = 70 — O(2^n) sẽ không bao giờ xong' }
    ]
  },
  {
    id: 'house-robber',
    title: 'House Robber',
    difficulty: 'medium',
    fn: 'rob',
    prompt: `
Dãy nhà có số tiền \`nums[i]\`. Không được lấy ở **hai nhà liền kề** (chuông báo động). Lấy được nhiều nhất bao nhiêu? (LeetCode 198)

\`[2,7,9,3,1]\` → \`12\` (2 + 9 + 1)
`,
    starter: `
function rob(nums) {

}
`,
    solution: `
function rob(nums) {
  let skip = 0;
  let take = 0;
  for (const x of nums) {
    const newTake = skip + x;
    skip = Math.max(skip, take);
    take = newTake;
  }
  return Math.max(skip, take);
}
`,
    hints: [
      'Trạng thái: `dp[i]` = tiền lớn nhất có thể lấy từ i nhà đầu tiên.',
      'Với nhà thứ i: hoặc **bỏ qua** (`dp[i-1]`), hoặc **lấy** (`dp[i-2] + nums[i]`). Lấy max.',
      'Chỉ cần hai biến thay vì cả mảng.'
    ],
    explain: '`dp[i] = max(dp[i-1], dp[i-2] + nums[i])`. O(n) thời gian, O(1) bộ nhớ. Tham lam "lấy các nhà chẵn hoặc các nhà lẻ" là sai: thử `[2, 1, 1, 2]` (đáp án 4 = nhà 0 + nhà 3).',
    tests: [
      { args: [[1, 2, 3, 1]], expected: 4 },
      { args: [[2, 7, 9, 3, 1]], expected: 12 },
      { args: [[2, 1, 1, 2]], expected: 4 },
      { args: [[5]], expected: 5 },
      { args: [[]], expected: 0 }
    ]
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    difficulty: 'medium',
    fn: 'coinChange',
    prompt: `
Cho các mệnh giá \`coins\` (dùng không giới hạn) và \`amount\`. Trả về số đồng xu **ít nhất** để tạo đúng \`amount\`, hoặc \`-1\` nếu không thể. \`amount <= 10^4\`. (LeetCode 322)
`,
    starter: `
function coinChange(coins, amount) {

}
`,
    solution: `
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let x = 1; x <= amount; x++) {
    for (const c of coins) {
      if (c <= x && dp[x - c] + 1 < dp[x]) dp[x] = dp[x - c] + 1;
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
`,
    hints: [
      'Tham lam (lấy đồng lớn nhất trước) sai với `[1, 3, 4]`, amount 6.',
      '`dp[x]` = số xu ít nhất để tạo tổng x. `dp[x] = min(dp[x - c] + 1)` với mọi đồng `c <= x`. `dp[0] = 0`.'
    ],
    tests: [
      { args: [[1, 2, 5], 11], expected: 3 },
      { args: [[2], 3], expected: -1 },
      { args: [[1], 0], expected: 0 },
      { args: [[1, 3, 4], 6], expected: 2 },
      { args: [[186, 419, 83, 408], 6249], expected: 20 }
    ]
  },
  {
    id: 'unique-paths-obstacles',
    title: 'Đường đi trên lưới có vật cản',
    difficulty: 'medium',
    fn: 'uniquePathsWithObstacles',
    prompt: `
Robot ở góc trên trái của lưới, chỉ đi **sang phải** hoặc **xuống dưới**, muốn tới góc dưới phải. \`grid[r][c] = 1\` là vật cản. Đếm số đường đi. (LeetCode 63)
`,
    starter: `
function uniquePathsWithObstacles(grid) {

}
`,
    solution: `
function uniquePathsWithObstacles(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = new Array(cols).fill(0);
  dp[0] = grid[0][0] === 1 ? 0 : 1;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) dp[c] = 0;
      else if (c > 0) dp[c] += dp[c - 1];
    }
  }
  return dp[cols - 1];
}
`,
    hints: [
      '`dp[r][c]` = số đường tới ô (r, c) = `dp[r-1][c] + dp[r][c-1]`, và bằng 0 nếu ô là vật cản.',
      'Cẩn thận với hàng đầu/cột đầu và trường hợp ô xuất phát là vật cản.',
      'Tối ưu: chỉ cần một mảng 1 chiều `dp[c]`, cập nhật từ trái sang phải từng hàng.'
    ],
    tests: [
      { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]], expected: 2 },
      { args: [[[0, 1], [0, 0]]], expected: 1 },
      { args: [[[1]]], expected: 0 },
      { args: [[[0]]], expected: 1 },
      { args: [[[0, 0], [1, 1], [0, 0]]], expected: 0 }
    ]
  },
  {
    id: 'longest-increasing-subsequence',
    title: 'Dãy con tăng dài nhất (LIS)',
    difficulty: 'medium',
    fn: 'lengthOfLIS',
    prompt: `
Độ dài **dãy con tăng nghiêm ngặt** dài nhất (không cần liên tiếp). (LeetCode 300)

\`[10,9,2,5,3,7,101,18]\` → \`4\` (\`[2,3,7,101]\`)

O(n²) qua test thường; test ẩn có n = 10^5 cần O(n log n).
`,
    starter: `
function lengthOfLIS(nums) {

}
`,
    solution: `
function lengthOfLIS(nums) {
  const tails = [];
  for (const x of nums) {
    let lo = 0;
    let hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = x;
  }
  return tails.length;
}
`,
    hints: [
      'O(n²): `dp[i]` = độ dài LIS **kết thúc tại i** = 1 + max(dp[j]) với j < i và nums[j] < nums[i].',
      'O(n log n): giữ mảng `tails`, trong đó `tails[k]` = phần tử cuối **nhỏ nhất** của một dãy tăng dài k + 1.',
      'Với mỗi x: tìm vị trí đầu tiên trong `tails` có giá trị ≥ x (binary search lower bound) và thay bằng x; nếu không có thì push.'
    ],
    explain: '`tails` luôn tăng dần, nên dùng được binary search. Lưu ý `tails` **không** phải là một dãy LIS thật — chỉ độ dài của nó là đúng. Đây là bài cho thấy DP + binary search kết hợp thế nào.',
    tests: [
      { args: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
      { args: [[0, 1, 0, 3, 2, 3]], expected: 4 },
      { args: [[7, 7, 7, 7]], expected: 1 },
      { args: [[5]], expected: 1 },
      { gen: 'return [Array.from({ length: 100000 }, (_, i) => (i % 2 ? i : 100000 - i))];', label: 'n = 100.000', expected: 50001 }
    ]
  },
  {
    id: 'longest-common-subsequence',
    title: 'Dãy con chung dài nhất (LCS)',
    difficulty: 'medium',
    fn: 'longestCommonSubsequence',
    prompt: `
Độ dài **dãy con chung** dài nhất của hai chuỗi (giữ thứ tự, không cần liên tiếp). Độ dài mỗi chuỗi ≤ 1000. (LeetCode 1143)

\`("abcde", "ace")\` → \`3\`
`,
    starter: `
function longestCommonSubsequence(a, b) {

}
`,
    solution: `
function longestCommonSubsequence(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}
`,
    hints: [
      '`dp[i][j]` = LCS của `a` với i ký tự đầu và `b` với j ký tự đầu. Kích thước bảng (m+1) × (n+1), hàng/cột 0 là chuỗi rỗng.',
      'Nếu `a[i-1] === b[j-1]`: `dp[i][j] = dp[i-1][j-1] + 1`. Ngược lại: `max(dp[i-1][j], dp[i][j-1])`.'
    ],
    explain: 'O(m·n) thời gian và bộ nhớ (có thể giảm còn O(min(m, n)) bằng hai hàng). LCS là nền tảng của `git diff` và so sánh DNA.',
    tests: [
      { args: ['abcde', 'ace'], expected: 3 },
      { args: ['abc', 'abc'], expected: 3 },
      { args: ['abc', 'def'], expected: 0 },
      { args: ['', 'abc'], expected: 0 },
      { args: ['bsbininm', 'jmjkbkjkv'], expected: 1 },
      { gen: 'let a = "", b = ""; for (let i = 0; i < 1000; i++) { a += "ab"[i % 2]; b += "ba"[i % 3 === 0 ? 0 : 1]; } return [a, b];', label: 'hai chuỗi dài 1000', expected: 833 }
    ]
  }
];
