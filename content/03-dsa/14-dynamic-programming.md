---
id: dsa-dp
title: Quy hoạch động (Dynamic Programming)
---
Quy hoạch động (DP) = đệ quy + **không giải lại bài toán con đã giải**. Áp dụng khi bài toán có:

1. **Bài toán con gối nhau** (overlapping subproblems): cùng một bài toán con xuất hiện nhiều lần.
2. **Cấu trúc con tối ưu** (optimal substructure): lời giải tối ưu được ghép từ lời giải tối ưu của bài toán con.

Dấu hiệu trong đề: "**bao nhiêu cách**...", "giá trị **lớn nhất / nhỏ nhất**...", "có thể ... **không**", với lựa chọn ở mỗi bước phụ thuộc vào các bước trước.

## Từ đệ quy ngây thơ đến DP

Bài: leo cầu thang n bậc, mỗi lần bước 1 hoặc 2 bậc. Có bao nhiêu cách?

Để đứng ở bậc n, bước cuối cùng là từ bậc n−1 hoặc n−2 → `ways(n) = ways(n-1) + ways(n-2)`.

```js run
// 1. Đệ quy ngây thơ — O(2^n)
const naive = (n) => (n <= 1 ? 1 : naive(n - 1) + naive(n - 2));

// 2. Top-down: đệ quy + memo — O(n)
function memoWays(n, memo = new Map()) {
  if (n <= 1) return 1;
  if (memo.has(n)) return memo.get(n);
  const r = memoWays(n - 1, memo) + memoWays(n - 2, memo);
  memo.set(n, r);
  return r;
}

// 3. Bottom-up: lập bảng từ nhỏ đến lớn — O(n), không đệ quy
function tableWays(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}

// 4. Tối ưu bộ nhớ: chỉ cần 2 giá trị trước — O(1) bộ nhớ
function rollingWays(n) {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

console.log(naive(20), memoWays(20), tableWays(20), rollingWays(20));
console.log(rollingWays(70));
```

## Công thức 4 bước để giải mọi bài DP

1. **Định nghĩa trạng thái**: `dp[i]` (hoặc `dp[i][j]`) nghĩa là gì — viết ra bằng lời, thật chính xác. *Đây là bước khó nhất.*
2. **Công thức chuyển**: tính `dp[i]` từ các trạng thái nhỏ hơn như thế nào.
3. **Base case**: giá trị khởi đầu.
4. **Thứ tự tính & đáp án**: tính theo thứ tự nào để khi cần thì trạng thái nhỏ hơn đã có; đáp án nằm ở ô nào.

## Ví dụ: Coin Change

Ít đồng xu nhất để tạo thành `amount` (mỗi loại dùng không giới hạn):

1. `dp[x]` = số xu ít nhất để tạo ra tổng x.
2. `dp[x] = min(dp[x - c] + 1)` với mọi đồng `c <= x`.
3. `dp[0] = 0`; các ô khác khởi tạo `Infinity` (chưa tạo được).
4. Tính x từ 1 đến amount; đáp án `dp[amount]` (Infinity → -1).

```js run
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
console.log(coinChange([1, 2, 5], 11)); // 3 (5 + 5 + 1)
console.log(coinChange([2], 3));        // -1
console.log(coinChange([1, 3, 4], 6));  // 2 (3 + 3) — tham lam chọn 4 + 1 + 1 = 3 xu là SAI
```

## DP 2 chiều

Khi trạng thái cần hai thông số: hai chuỗi (`dp[i][j]` cho tiền tố của mỗi chuỗi), lưới (`dp[r][c]`), hoặc "xét i món đầu với sức chứa w" (knapsack).

```js run
// Số đường đi từ góc trên trái tới góc dưới phải, chỉ đi phải hoặc xuống
function uniquePaths(m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(1));
  for (let r = 1; r < m; r++)
    for (let c = 1; c < n; c++)
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
  return dp[m - 1][n - 1];
}
console.log(uniquePaths(3, 7)); // 28
```

## Các dạng DP kinh điển

| Dạng | Ví dụ | Trạng thái |
| --- | --- | --- |
| Dãy 1 chiều | Climbing Stairs, House Robber | `dp[i]` = đáp án cho i phần tử đầu |
| Không giới hạn số lần chọn | Coin Change | `dp[x]` = đáp án cho tổng x |
| Dãy con | LIS | `dp[i]` = đáp án cho dãy **kết thúc tại** i |
| Hai chuỗi | LCS, Edit Distance | `dp[i][j]` = đáp án cho `a[0..i)` và `b[0..j)` |
| Lưới | Unique Paths, Min Path Sum | `dp[r][c]` |
| Knapsack 0/1 | Partition Equal Subset Sum | `dp[w]` duyệt w **giảm dần** |

## Câu hỏi tại sao

- Top-down (memo) và bottom-up (bảng): cái nào dễ viết hơn? Cái nào an toàn hơn với n = 10^5 trong JS? (Gợi ý: call stack.)
- Tại sao Coin Change **không** giải được bằng tham lam (luôn chọn đồng lớn nhất) với mọi bộ xu, trong khi tiền Việt Nam thì được?
- DP đổi bộ nhớ lấy thời gian. Khi nào ta có thể "cuộn" bảng xuống O(1) hoặc O(n) bộ nhớ?
