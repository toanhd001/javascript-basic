---
id: dsa-prefix-sum
title: Mảng cộng dồn (Prefix Sum)
---
**Prefix sum** `prefix[i]` = tổng `i` phần tử đầu tiên. Tính một lần O(n), sau đó tổng bất kỳ đoạn `[l, r]` chỉ tốn **O(1)**.

```js run
const nums = [3, 1, 4, 1, 5, 9, 2];
const prefix = [0];                       // prefix[0] = 0: "tổng của 0 phần tử"
for (const x of nums) prefix.push(prefix[prefix.length - 1] + x);
console.log(prefix);                      // [0, 3, 4, 8, 9, 14, 23, 25]

// tổng nums[l..r] (gồm cả r) = prefix[r + 1] - prefix[l]
const rangeSum = (l, r) => prefix[r + 1] - prefix[l];
console.log(rangeSum(2, 4));              // 4 + 1 + 5 = 10
```

> Mảng prefix dài **n + 1** với `prefix[0] = 0` giúp tránh mọi trường hợp đặc biệt khi `l = 0`. Đây là lựa chọn thiết kế nhỏ mà loại bỏ được cả một lớp bug off-by-one.

## Prefix sum + hash map: "đếm đoạn con có tổng bằng k"

Tổng đoạn `(j, i]` = `prefix[i] - prefix[j]`. Muốn nó bằng `k` ⇔ `prefix[j] = prefix[i] - k`. Vậy khi đứng ở `i`, số đoạn kết thúc tại `i` có tổng k = **số lần giá trị `prefix[i] - k` đã xuất hiện trước đó** — lại là mẫu "tìm phần bù" của Two Sum!

```js run
function subarraySum(nums, k) {
  const seen = new Map([[0, 1]]); // prefix rỗng = 0 xuất hiện 1 lần
  let sum = 0, count = 0;
  for (const x of nums) {
    sum += x;
    count += seen.get(sum - k) || 0;
    seen.set(sum, (seen.get(sum) || 0) + 1);
  }
  return count;
}
console.log(subarraySum([1, 1, 1], 2));      // 2
console.log(subarraySum([3, 4, -7, 3], 0));  // 2 — [3, 4, -7] và [4, -7, 3]
```

Cách này đúng cả khi có **số âm** — điều mà cửa sổ trượt không làm được.

## Biến thể

- **Prefix product** / tích từ hai phía: Product of Array Except Self.
- **Prefix 2D**: tổng hình chữ nhật con trong ma trận trong O(1).
- **Difference array**: cộng `v` vào cả đoạn `[l, r]` trong O(1) (ngược lại của prefix sum) — dùng khi có nhiều thao tác cập nhật đoạn.

## Câu hỏi tại sao

- Prefix sum đổi O(n) bộ nhớ lấy truy vấn O(1). Nếu mảng **thay đổi liên tục** (cập nhật phần tử giữa các truy vấn) thì prefix sum còn tốt không? (Tìm hiểu: Fenwick tree / Segment tree.)
- Trong `subarraySum`, tại sao phải khởi tạo `seen` với `[0, 1]`? Bỏ đi thì test nào sai?
