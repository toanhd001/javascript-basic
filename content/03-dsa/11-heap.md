---
id: dsa-heap
title: Heap / Priority Queue
---
**Heap** (đống) cho phép: thêm phần tử O(log n), lấy phần tử **nhỏ nhất** (min-heap) hoặc lớn nhất (max-heap) O(log n), xem nó O(1).

JS **không có sẵn** heap — và rất nhiều bài phỏng vấn cần nó (top K, Dijkstra, gộp k danh sách, lịch trình). Hãy viết đến mức **thuộc lòng**.

## Cấu trúc: cây nhị phân hoàn chỉnh lưu trong mảng

- Node ở vị trí `i` có con trái `2i + 1`, con phải `2i + 2`, cha `(i - 1) >> 1`.
- **Tính chất heap**: cha ≤ các con (min-heap). Phần tử nhỏ nhất luôn ở `heap[0]`.

```
mảng:   [1, 3, 2, 7, 4, 5]
             1
           /   \
          3     2
         / \   /
        7   4 5
```

## Hai thao tác cốt lõi

- **push**: thêm vào cuối, rồi **nổi lên** (sift up): đổi chỗ với cha khi còn nhỏ hơn cha.
- **pop**: lấy `heap[0]`, đưa phần tử cuối lên gốc, rồi **chìm xuống** (sift down): đổi chỗ với con nhỏ hơn khi còn lớn hơn con.

Cây hoàn chỉnh có chiều cao log n → mỗi thao tác O(log n).

```js run
class MinHeap {
  constructor(compare = (a, b) => a - b) {
    this.data = [];
    this.compare = compare;          // dùng comparator → biến thành max-heap hoặc heap của object
  }
  get size() { return this.data.length; }
  peek() { return this.data[0]; }
  push(x) {
    const d = this.data;
    d.push(x);
    let i = d.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.compare(d[i], d[p]) >= 0) break;
      [d[i], d[p]] = [d[p], d[i]];
      i = p;
    }
  }
  pop() {
    const d = this.data;
    if (d.length === 0) return undefined;
    const top = d[0];
    const last = d.pop();
    if (d.length > 0) {
      d[0] = last;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1;
        let m = i;
        if (l < d.length && this.compare(d[l], d[m]) < 0) m = l;
        if (r < d.length && this.compare(d[r], d[m]) < 0) m = r;
        if (m === i) break;
        [d[i], d[m]] = [d[m], d[i]];
        i = m;
      }
    }
    return top;
  }
}

const h = new MinHeap();
[5, 1, 8, 3, 2].forEach((x) => h.push(x));
const out = [];
while (h.size) out.push(h.pop());
console.log(out); // [1, 2, 3, 5, 8]

const maxHeap = new MinHeap((a, b) => b - a);    // max-heap
[5, 1, 8].forEach((x) => maxHeap.push(x));
console.log(maxHeap.pop());                        // 8

const tasks = new MinHeap((a, b) => a.priority - b.priority);
tasks.push({ name: "email", priority: 3 });
tasks.push({ name: "bug gấp", priority: 1 });
console.log(tasks.pop().name);                     // "bug gấp"
```

## Mẫu "Top K" với heap kích thước k

Tìm k phần tử **lớn nhất**: giữ một **min-heap** kích thước k. Mỗi phần tử mới: push vào; nếu heap vượt k thì pop phần tử nhỏ nhất ra. Cuối cùng heap chứa k phần tử lớn nhất, `peek()` chính là phần tử lớn thứ k.

- O(n log k) thời gian, O(k) bộ nhớ — tốt hơn sort O(n log n) khi k nhỏ, và chạy được trên **stream** dữ liệu vô hạn.

## Khi nào dùng heap?

- "K lớn nhất / nhỏ nhất / gần nhất / phổ biến nhất".
- Liên tục cần lấy phần tử "tốt nhất" trong khi tập hợp **thay đổi**: Dijkstra, lập lịch, mô phỏng sự kiện.
- Gộp k dãy đã sắp xếp.
- Trung vị của luồng dữ liệu (hai heap).

## Câu hỏi tại sao

- Sorted array cũng lấy min O(1). Tại sao vẫn cần heap? (So sánh chi phí **thêm** phần tử.)
- Tìm phần tử lớn thứ k: heap O(n log k), quickselect trung bình O(n). Vì sao trong phỏng vấn người ta vẫn hay chọn heap?
- Xây heap từ n phần tử có sẵn có thể làm trong O(n) chứ không phải O(n log n). Tại sao? (Tìm hiểu "heapify".)
