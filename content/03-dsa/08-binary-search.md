---
id: dsa-binary-search
title: Tìm kiếm nhị phân (Binary Search)
---
Trên dữ liệu **đã sắp xếp**, mỗi bước so sánh với phần tử ở giữa rồi **loại bỏ một nửa**. n = 10^9 cũng chỉ cần ~30 bước: **O(log n)**.

## Khuôn mẫu chuẩn

```js run
function binarySearch(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {                         // còn ít nhất 1 phần tử
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;    // target nằm bên phải mid
    else hi = mid - 1;                        // target nằm bên trái mid
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));  // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4));  // -1
```

Binary search nổi tiếng **dễ sai**: lặp vô hạn, sai một phần tử, tràn chỉ số. Cách tránh: chọn một quy ước và giữ **bất biến** (invariant) rõ ràng. Ở trên: "nếu target tồn tại, nó luôn nằm trong `[lo, hi]`".

## Lower bound — vị trí đầu tiên `>= target`

Dạng tổng quát hơn, dùng cho "vị trí chèn", "phần tử đầu tiên thoả điều kiện":

```js run
function lowerBound(nums, target) {
  let lo = 0, hi = nums.length;      // chú ý: hi = length (nửa mở [lo, hi))
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid;                   // mid có thể là đáp án → giữ lại
  }
  return lo;                         // lo === hi
}
const a = [1, 2, 4, 4, 4, 7];
console.log(lowerBound(a, 4), lowerBound(a, 5), lowerBound(a, 100)); // 2 5 6
```

## Ý tưởng mạnh nhất: tìm kiếm nhị phân trên **đáp án**

Không chỉ dùng trên mảng! Nếu có hàm `ok(x)` **đơn điệu** — sai, sai, ..., sai, đúng, đúng, ... — thì tìm được `x` nhỏ nhất làm `ok(x)` đúng bằng binary search trên miền giá trị của x.

```js run
// Căn bậc hai nguyên: số x lớn nhất với x*x <= n
function isqrt(n) {
  let lo = 0, hi = n;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);  // làm tròn LÊN khi lo = mid, tránh lặp vô hạn
    if (mid * mid <= n) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}
console.log(isqrt(8), isqrt(16), isqrt(2147395599)); // 2 4 46339
```

Dấu hiệu nhận biết: đề hỏi "giá trị **nhỏ nhất/lớn nhất** sao cho ... vẫn khả thi", và kiểm tra một giá trị cụ thể có khả thi không thì dễ (thường O(n)). Tổng: O(n log(miền giá trị)).

## Câu hỏi tại sao

- Tại sao viết `lo + Math.floor((hi - lo) / 2)` thay vì `Math.floor((lo + hi) / 2)`? Trong JS có thực sự cần không? (Gợi ý: Java/C++ với `int`.)
- Trong `isqrt`, nếu dùng `Math.floor` cho `mid` thì chuyện gì xảy ra khi `hi = lo + 1`?
- Binary search cần dữ liệu đã sắp xếp. Nếu chỉ tìm **một lần** trên mảng chưa sắp xếp, sort trước có đáng không?
