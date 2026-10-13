---
id: ct-complexity
title: Big-O và đọc ràng buộc đề bài
---
Big-O mô tả **thời gian chạy tăng thế nào khi input tăng**. Nó là ngôn ngữ chung khi phỏng vấn: "lời giải của em O(n log n) thời gian, O(n) bộ nhớ".

## Các bậc thường gặp

| Big-O | Tên | Ví dụ | n = 10^5 ≈ số bước |
| --- | --- | --- | --- |
| O(1) | hằng số | `arr[i]`, `map.get(k)` | 1 |
| O(log n) | logarit | tìm kiếm nhị phân | 17 |
| O(n) | tuyến tính | duyệt mảng một lần | 10^5 |
| O(n log n) | | sắp xếp | 1,7·10^6 |
| O(n²) | bình phương | hai vòng lồng nhau | 10^10 ❌ |
| O(2^n) | mũ | thử mọi tập con | ❌❌ |
| O(n!) | giai thừa | thử mọi hoán vị | ❌❌❌ |

## Đọc ràng buộc → suy ra thuật toán

Máy chấm thường chạy được khoảng **10^7 – 10^8 phép tính đơn giản mỗi giây** (JS: thiên về 10^7–10^8). Đề bài cho giới hạn n chính là **gợi ý** độ phức tạp cần đạt:

| Ràng buộc n | Độ phức tạp chấp nhận được | Thường là |
| --- | --- | --- |
| n ≤ 10 | O(n!) | thử mọi hoán vị, backtracking |
| n ≤ 20 | O(2^n) | thử mọi tập con, bitmask |
| n ≤ 500 | O(n³) | DP 3 chiều, Floyd–Warshall |
| n ≤ 5.000 | O(n²) | DP 2 chiều, hai vòng lặp |
| n ≤ 10^5 – 10^6 | O(n log n) hoặc O(n) | sắp xếp, hash map, hai con trỏ, heap |
| n ≤ 10^9 trở lên | O(log n) hoặc O(1) | tìm kiếm nhị phân, công thức toán |

> **Thói quen quan trọng nhất trong coding test:** đọc ràng buộc **trước** khi nghĩ lời giải. Thấy n ≤ 10^5 thì ngay lập tức loại mọi ý tưởng O(n²).

## Cách tính Big-O

```js
function example(arr) {
  let sum = 0;                         // O(1)
  for (const x of arr) sum += x;       // O(n)
  for (const x of arr) {               // O(n) ×
    for (const y of arr) {             //   O(n) = O(n²)
      if (x + y === 0) return true;
    }
  }
  return false;
}
// Tổng: O(1) + O(n) + O(n²) = O(n²) — giữ bậc lớn nhất, bỏ hằng số
```

- Vòng lặp **nối tiếp** → cộng: O(n) + O(n) = O(n).
- Vòng lặp **lồng nhau** → nhân: O(n) × O(m) = O(n·m).
- Mỗi bước **chia đôi** bài toán → O(log n).
- Đừng quên chi phí ẩn của hàm có sẵn: `includes`, `indexOf`, `slice`, `splice`, `shift`, spread `[...]`, `Object.keys` đều là **O(n)**.

```js
// Trông giống O(n) nhưng thực ra O(n²):
for (const x of arr) {
  if (result.includes(x)) continue; // includes là O(n)
  result.push(x);
}
```

## Đo thực tế

```js run
function countPairsSlow(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) count++;
  return count;
}

function countPairsFast(nums, target) {
  const seen = new Map();
  let count = 0;
  for (const x of nums) {
    count += seen.get(target - x) || 0;
    seen.set(x, (seen.get(x) || 0) + 1);
  }
  return count;
}

for (const n of [1000, 4000, 16000]) {
  const nums = Array.from({ length: n }, (_, i) => i % 100);
  let t = performance.now();
  const a = countPairsSlow(nums, 50);
  const slow = performance.now() - t;
  t = performance.now();
  const b = countPairsFast(nums, 50);
  const fast = performance.now() - t;
  console.log(`n=${n}: O(n²) ${slow.toFixed(1)}ms | O(n) ${fast.toFixed(2)}ms | ${a === b ? "khớp" : "LỆCH"}`);
}
```

Mỗi lần n tăng 4 lần, bản O(n²) chậm đi ~16 lần, bản O(n) chỉ ~4 lần.

## Độ phức tạp bộ nhớ

Cũng tính bằng Big-O: một `Map` chứa n phần tử là O(n) bộ nhớ; vài biến đếm là O(1). Đệ quy sâu d tầng tốn O(d) bộ nhớ cho call stack. Thường có **trade-off**: tốn thêm bộ nhớ (hash map) để giảm thời gian.

## Câu hỏi tại sao

- Big-O bỏ qua hằng số. Khi nào một thuật toán O(n log n) lại **chậm hơn** O(n²) trong thực tế? (Gợi ý: n nhỏ — đó là lý do sort thực tế dùng insertion sort cho mảng ngắn.)
- "Hash map O(1)" nhưng thực tế chậm hơn truy cập mảng nhiều lần. Khi nào nên dùng mảng đếm `new Array(26)` thay cho `Map`?
