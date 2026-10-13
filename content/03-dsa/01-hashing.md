---
id: dsa-hashing
title: Mảng & Hash map
---
**Ý tưởng cốt lõi:** đổi bộ nhớ lấy thời gian. Thay vì tìm kiếm lại từ đầu mỗi lần (O(n)), ghi nhớ những gì đã thấy vào hash map để tra cứu O(1).

## Khi nào nghĩ đến hash map?

- Đề hỏi "có tồn tại...", "đếm số lần...", "tìm cặp/phần tử bù", "nhóm theo...".
- Bạn vừa viết hai vòng `for` lồng nhau mà vòng trong chỉ để **tìm** một giá trị.
- Cần kiểm tra "đã gặp chưa" (trùng lặp, chu trình).

## Mẫu 1: tìm phần bù (Two Sum)

Với mỗi phần tử `x`, câu hỏi "có `y` nào để `x + y = target` không?" tương đương "`target - x` đã xuất hiện chưa?".

```js run
function twoSum(nums, target) {
  const indexOf = new Map(); // giá trị → chỉ số
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (indexOf.has(need)) return [indexOf.get(need), i];
    indexOf.set(nums[i], i);
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 3], 6));         // [0, 1]
```

Tại sao `set` **sau** khi kiểm tra? Để không ghép phần tử với chính nó (`[3]`, target 6).

## Mẫu 2: đếm tần suất (frequency map)

```js run
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = new Map();
  for (const ch of s) count.set(ch, (count.get(ch) || 0) + 1);
  for (const ch of t) {
    if (!count.get(ch)) return false;   // 0 hoặc undefined
    count.set(ch, count.get(ch) - 1);
  }
  return true;
}
console.log(isAnagram("listen", "silent"), isAnagram("rat", "car"));
```

## Mẫu 3: nhóm bằng "chữ ký" (canonical key)

Các phần tử "tương đương" có chung một key → nhóm lại bằng Map. Với anagram, key là chuỗi đã sắp xếp (`"eat"`, `"tea"` → `"aet"`).

## Mẫu 4: bucket theo tần suất

Tần suất của một phần tử không thể vượt quá n → có thể tạo mảng `buckets[freq]` gồm n + 1 ô và tránh phải sort: O(n) thay vì O(n log n).

## Bảng so sánh

| Bài | Brute force | Với hash map |
| --- | --- | --- |
| Two Sum | O(n²) | O(n) thời gian, O(n) bộ nhớ |
| Có trùng lặp | O(n²) | O(n) |
| Anagram | sort: O(n log n) | O(n) |
| Top K phổ biến | sort: O(n log n) | bucket: O(n) |

## Câu hỏi tại sao

- Two Sum trên mảng **đã sắp xếp** có thể giải O(1) bộ nhớ (bài sau). Vậy với mảng chưa sắp xếp, sort trước rồi dùng hai con trỏ có tốt hơn hash map không? (Gợi ý: đề yêu cầu trả về **chỉ số gốc**.)
- Tại sao key của anagram là chuỗi đã sort (O(k log k)) mà không dùng mảng đếm 26 ký tự (O(k))? Cái nào nhanh hơn khi chuỗi dài, cái nào đơn giản hơn?
