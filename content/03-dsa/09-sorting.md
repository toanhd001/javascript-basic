---
id: dsa-sorting
title: Sắp xếp
---
Trong coding test bạn gần như luôn dùng `arr.sort((a, b) => a - b)`. Nhưng phỏng vấn vẫn hỏi cách các thuật toán sắp xếp hoạt động, vì chúng minh hoạ những ý tưởng nền tảng: **chia để trị**, **phân hoạch**, **bất biến vòng lặp**.

## Bảng tổng hợp

| Thuật toán | Trung bình | Xấu nhất | Bộ nhớ | Ổn định | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| Bubble / Selection | O(n²) | O(n²) | O(1) | B: có / S: không | chỉ để học |
| Insertion | O(n²) | O(n²) | O(1) | có | **rất nhanh khi gần như đã sắp xếp** hoặc n nhỏ |
| Merge sort | O(n log n) | O(n log n) | O(n) | có | đảm bảo, dùng cho linked list, external sort |
| Quick sort | O(n log n) | O(n²) | O(log n) | không | nhanh nhất thực tế nếu chọn pivot tốt |
| Heap sort | O(n log n) | O(n log n) | O(1) | không | ít dùng trực tiếp |
| Counting sort | O(n + k) | O(n + k) | O(k) | có | khi giá trị nằm trong khoảng nhỏ k |

`Array.prototype.sort` của V8 dùng **TimSort** (lai giữa merge sort và insertion sort): O(n log n), ổn định.

> **Ổn định (stable)** nghĩa là các phần tử "bằng nhau" giữ nguyên thứ tự ban đầu. Quan trọng khi sắp xếp nhiều lần theo các tiêu chí khác nhau (VD sắp theo tên, rồi sắp theo điểm — người cùng điểm vẫn theo thứ tự tên).

## Insertion sort

```js run
function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    const x = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > x) {   // dời các phần tử lớn hơn sang phải
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = x;                   // bất biến: a[0..i] đã sắp xếp
  }
  return a;
}
console.log(insertionSort([5, 2, 4, 6, 1, 3]));
```

## Merge sort — chia để trị

1. Chia mảng làm hai nửa.
2. Sắp xếp **đệ quy** mỗi nửa.
3. **Gộp** hai nửa đã sắp xếp (hai con trỏ, O(n)).

Có log n tầng, mỗi tầng gộp tổng cộng n phần tử → **O(n log n)**.

## Quick sort — phân hoạch

1. Chọn **pivot**.
2. Phân hoạch: phần tử < pivot sang trái, > pivot sang phải.
3. Đệ quy hai phía.

```js run
function quickSort(a, lo = 0, hi = a.length - 1) {
  if (lo >= hi) return a;
  const pivot = a[lo + Math.floor(Math.random() * (hi - lo + 1))]; // pivot ngẫu nhiên
  let i = lo, j = hi;
  while (i <= j) {                       // phân hoạch Hoare
    while (a[i] < pivot) i++;
    while (a[j] > pivot) j--;
    if (i <= j) {
      [a[i], a[j]] = [a[j], a[i]];
      i++; j--;
    }
  }
  quickSort(a, lo, j);
  quickSort(a, i, hi);
  return a;
}
console.log(quickSort([3, 6, 1, 8, 2, 9, 2, 5]));
```

Tại sao pivot **ngẫu nhiên**? Nếu luôn chọn phần tử đầu, mảng đã sắp xếp sẵn sẽ khiến mỗi lần chỉ tách được 1 phần tử → O(n²).

## Sắp xếp như một bước tiền xử lý

Rất nhiều bài trở nên dễ sau khi sort: gộp khoảng (merge intervals), tìm cặp (two pointers), loại trùng lặp, tham lam (xếp lịch). Khi bí, hãy hỏi: **"Nếu dữ liệu đã được sắp xếp thì bài này có dễ hơn không?"**

## Câu hỏi tại sao

- Merge sort luôn O(n log n), quick sort xấu nhất O(n²). Vậy tại sao quick sort lại phổ biến hơn trong thực tế? (Gợi ý: bộ nhớ phụ, cache CPU.)
- Tại sao TimSort lại dùng insertion sort cho các đoạn nhỏ, dù insertion sort là O(n²)?
- Có thể sắp xếp nhanh hơn O(n log n) không? Khi nào? (Gợi ý: counting/radix sort không dùng phép so sánh.)
