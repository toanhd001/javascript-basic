---
id: dsa-greedy
title: Tham lam (Greedy)
---
Thuật toán tham lam đưa ra lựa chọn **tốt nhất tại mỗi bước** và không bao giờ quay lại. Khi đúng, nó thường cho lời giải O(n) hoặc O(n log n) rất ngắn. Cái khó: **chứng minh** nó đúng — và nhận ra khi nào nó sai.

## Khi tham lam đúng

```js run
// Mua bán cổ phiếu một lần: lãi lớn nhất
function maxProfit(prices) {
  let minPrice = Infinity, best = 0;
  for (const p of prices) {
    minPrice = Math.min(minPrice, p);   // giá mua tốt nhất cho tới hôm nay
    best = Math.max(best, p - minPrice); // nếu bán hôm nay
  }
  return best;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 (mua 1, bán 6)
```

Mỗi ngày chỉ cần biết giá **thấp nhất trước đó** — không cần xét mọi cặp (mua, bán) như O(n²).

## Khi tham lam sai

```js run
// Đổi tiền tham lam: luôn chọn đồng lớn nhất
function greedyCoins(coins, amount) {
  const sorted = [...coins].sort((a, b) => b - a);
  let count = 0;
  for (const c of sorted) {
    count += Math.floor(amount / c);
    amount %= c;
  }
  return amount === 0 ? count : -1;
}
console.log(greedyCoins([1, 5, 10, 25], 30)); // 2 (25 + 5) — đúng
console.log(greedyCoins([1, 3, 4], 6));       // 3 (4 + 1 + 1) — SAI, tối ưu là 2 (3 + 3)
```

> **Quy tắc thực hành:** khi nghĩ ra một chiến lược tham lam, **cố tìm phản ví dụ** với input nhỏ trước khi code. Không tìm được và có lập luận "đổi chỗ" (exchange argument) hợp lý → tham lam. Tìm được → nghĩ đến DP.

## Thuật toán Kadane — tổng đoạn con lớn nhất

Tại mỗi vị trí: tiếp tục đoạn hiện tại, **hoặc** bắt đầu lại từ phần tử này — chọn cái lớn hơn. Nếu tổng đoạn hiện tại đã âm, nó chỉ "kéo lùi" phần sau → bỏ đi.

```js run
function maxSubArray(nums) {
  let current = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 ([4,-1,2,1])
```

Kadane cũng có thể xem là DP với `dp[i]` = tổng lớn nhất của đoạn **kết thúc tại i** — ranh giới giữa tham lam và DP đôi khi rất mờ.

## Bài toán khoảng (interval scheduling)

Chọn nhiều cuộc họp nhất không trùng giờ: **sort theo giờ kết thúc**, luôn chọn cuộc họp kết thúc sớm nhất còn chọn được. Lý do: kết thúc sớm nhất để lại nhiều thời gian nhất cho phần còn lại.

## Câu hỏi tại sao

- Interval scheduling: tại sao sort theo giờ **kết thúc** mà không phải giờ **bắt đầu** hay **độ dài**? Tìm phản ví dụ cho hai cách kia.
- Tham lam và DP đều dựa trên "cấu trúc con tối ưu". Điểm khác biệt cốt lõi là gì? (Gợi ý: tham lam chỉ xét **một** lựa chọn ở mỗi bước.)
