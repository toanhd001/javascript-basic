---
id: dsa-sliding-window
title: Cửa sổ trượt (Sliding Window)
---
Dùng cho bài về **đoạn con liên tiếp** (subarray / substring): "đoạn dài nhất / ngắn nhất / tổng lớn nhất thoả điều kiện...". Thay vì tính lại từng đoạn từ đầu (O(n²) hoặc O(n³)), ta "trượt" một cửa sổ `[left, right]` và cập nhật **phần thay đổi**.

## Cửa sổ cố định kích thước k

```js run
// Tổng lớn nhất của k phần tử liên tiếp
function maxSumK(nums, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += nums[i];
  let best = windowSum;
  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right] - nums[right - k]; // thêm phần tử mới, bỏ phần tử cũ
    best = Math.max(best, windowSum);
  }
  return best;
}
console.log(maxSumK([2, 1, 5, 1, 3, 2], 3)); // 9 (5 + 1 + 3)
```

Mỗi bước trượt chỉ tốn O(1) → tổng O(n) thay vì O(n·k).

## Cửa sổ co giãn — khuôn mẫu

```js
let left = 0;
for (let right = 0; right < n; right++) {
  // 1. đưa phần tử right vào cửa sổ (cập nhật trạng thái)
  while (/* cửa sổ KHÔNG hợp lệ */) {
    // 2. bỏ phần tử left ra khỏi cửa sổ, left++
  }
  // 3. cửa sổ [left, right] hợp lệ → cập nhật đáp án
}
```

`right` và `left` mỗi cái chỉ tiến về phía trước, tối đa n lần → **O(n)** dù có `while` bên trong.

```js run
// Chuỗi con dài nhất có tối đa 2 ký tự khác nhau
function longestTwoDistinct(s) {
  const count = new Map();
  let left = 0, best = 0;
  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1);
    while (count.size > 2) {
      const ch = s[left];
      count.set(ch, count.get(ch) - 1);
      if (count.get(ch) === 0) count.delete(ch);
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}
console.log(longestTwoDistinct("eceba"));   // 3 ("ece")
console.log(longestTwoDistinct("ccaabbb")); // 5 ("aabbb")
```

## Nhận diện

- Từ khoá: "subarray", "substring", "liên tiếp", "dài nhất", "ngắn nhất", "tối đa k...".
- Điều kiện có tính **đơn điệu**: mở rộng cửa sổ chỉ làm "tệ hơn" (hoặc tốt hơn) theo một hướng. Ví dụ: tổng các số **dương** — thêm phần tử thì tổng tăng.

> **Khi nào cửa sổ trượt KHÔNG dùng được?** Khi mảng có số âm và đề hỏi "tổng bằng k": thêm phần tử có thể làm tổng giảm, nên không biết khi nào nên co cửa sổ. Lúc đó dùng **prefix sum + hash map** (bài sau).

## Câu hỏi tại sao

- Có `while` nằm trong `for`, sao vẫn là O(n)? Hãy lập luận bằng cách đếm tổng số lần `left` tăng.
- Vì sao bài "đoạn con ngắn nhất có tổng ≥ target" dùng được cửa sổ trượt khi mọi số dương, nhưng hỏng khi có số âm?
