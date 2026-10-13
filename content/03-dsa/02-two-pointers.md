---
id: dsa-two-pointers
title: Hai con trỏ (Two Pointers)
---
Dùng hai chỉ số di chuyển trên mảng/chuỗi để loại bỏ vòng lặp lồng nhau: từ O(n²) xuống O(n), thường với O(1) bộ nhớ.

## Kiểu 1: hai đầu tiến vào giữa

Dùng khi mảng **đã sắp xếp** hoặc bài có tính đối xứng (palindrome, đảo ngược).

```js run
// Tìm cặp có tổng = target trong mảng ĐÃ SẮP XẾP
function pairSum(sorted, target) {
  let left = 0, right = sorted.length - 1;
  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;   // cần tổng lớn hơn → tăng phần tử nhỏ
    else right--;               // cần tổng nhỏ hơn → giảm phần tử lớn
  }
  return null;
}
console.log(pairSum([1, 3, 4, 6, 8, 11], 10)); // [2, 3] → 4 + 6
```

**Tại sao đúng?** Khi `sum < target`, mọi cặp `(left, j)` với `j < right` còn nhỏ hơn nữa → `left` không thể là đáp án → bỏ nó. Mỗi bước loại được một phần tử → tối đa n bước.

## Kiểu 2: nhanh – chậm (cùng chiều)

Con trỏ `slow` đánh dấu vị trí "ghi", `fast` đi đọc. Dùng để lọc/xoá phần tử **in-place**.

```js run
// Xoá mọi số 0, giữ thứ tự, in-place; trả về độ dài mới
function removeZeros(arr) {
  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      arr[slow] = arr[fast];
      slow++;
    }
  }
  return slow;
}
const a = [0, 1, 0, 3, 12];
const k = removeZeros(a);
console.log(k, a.slice(0, k));
```

## Kiểu 3: hai mảng song song (merge)

```js run
function mergeSorted(a, b) {
  const out = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    out.push(a[i] <= b[j] ? a[i++] : b[j++]);
  }
  while (i < a.length) out.push(a[i++]);
  while (j < b.length) out.push(b[j++]);
  return out;
}
console.log(mergeSorted([1, 4, 9], [2, 3, 10, 11]));
```

## Nhận diện

- "Mảng đã sắp xếp", "tìm cặp/bộ ba", "in-place", "O(1) bộ nhớ", "palindrome", "gộp hai dãy".
- Nếu mảng chưa sort nhưng thứ tự không quan trọng: sort trước (O(n log n)) rồi dùng hai con trỏ.

## Câu hỏi tại sao

- 3Sum: brute force O(n³). Sort + cố định một phần tử + hai con trỏ cho O(n²). Tại sao không xuống được O(n) như Two Sum?
- Container With Most Water: tại sao luôn di chuyển con trỏ ở **cột thấp hơn**? Thử chứng minh di chuyển cột cao hơn không bao giờ cho kết quả tốt hơn.
