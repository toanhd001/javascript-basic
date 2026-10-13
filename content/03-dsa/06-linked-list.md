---
id: dsa-linked-list
title: Danh sách liên kết (Linked List)
---
Mỗi **node** chứa giá trị và con trỏ `next` tới node kế tiếp. Không như mảng, các node **không nằm liền nhau** trong bộ nhớ.

```js run
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 1 → 2 → 3
const head = new ListNode(1, new ListNode(2, new ListNode(3)));

let cur = head;
const values = [];
while (cur !== null) {      // duyệt: đi theo next đến khi gặp null
  values.push(cur.val);
  cur = cur.next;
}
console.log(values.join(" → "));
```

## So sánh với mảng

| Thao tác | Mảng | Linked list |
| --- | --- | --- |
| Truy cập phần tử thứ i | O(1) | O(i) — phải đi từ đầu |
| Chèn/xoá ở đầu | O(n) | **O(1)** |
| Chèn/xoá sau một node đã biết | O(n) | **O(1)** |
| Bộ nhớ | liền mạch, thân thiện cache CPU | thêm con trỏ mỗi node, rải rác |

Trong thực tế, mảng thường nhanh hơn nhờ cache CPU. Nhưng linked list là **nền tảng** của nhiều cấu trúc khác (LRU cache, hash map xử lý va chạm, queue) và là chủ đề phỏng vấn rất phổ biến vì kiểm tra khả năng **thao tác con trỏ cẩn thận**.

## Kỹ thuật 1: node giả (dummy head)

Khi có thể phải xoá/thay đổi chính `head`, tạo một node giả đứng trước để mọi node đều "có node phía trước" — bỏ được các `if` đặc biệt.

```js run
class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
const fromArray = (arr) => arr.reduceRight((next, val) => new ListNode(val, next), null);
const toArray = (h) => { const a = []; for (; h; h = h.next) a.push(h.val); return a; };

function removeAll(head, target) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  while (prev.next) {
    if (prev.next.val === target) prev.next = prev.next.next; // bỏ qua node
    else prev = prev.next;
  }
  return dummy.next;
}
console.log(toArray(removeAll(fromArray([7, 1, 7, 2, 7]), 7))); // [1, 2]
```

## Kỹ thuật 2: con trỏ nhanh – chậm (Floyd)

`slow` đi 1 bước, `fast` đi 2 bước:
- Khi `fast` tới cuối, `slow` ở **giữa** danh sách.
- Nếu có **chu trình**, `fast` sẽ đuổi kịp `slow` (giống chạy vòng sân vận động).

## Kỹ thuật 3: đảo con trỏ

Đảo ngược danh sách là bài nền tảng: giữ ba con trỏ `prev`, `cur`, `next`. Vẽ ra giấy trước khi code!

```
null ← 1    2 → 3 → null      prev = 1, cur = 2
null ← 1 ← 2    3 → null      prev = 2, cur = 3
```

> **Mẹo phỏng vấn:** với mọi bài linked list, hãy vẽ 3–4 node và đi từng bước. Kiểm tra các trường hợp: danh sách rỗng (`null`), một node, hai node.

## Câu hỏi tại sao

- Tại sao con trỏ nhanh đi **2** bước? Đi 3 bước có còn phát hiện được chu trình không, và có nhược điểm gì?
- LRU cache dùng **hash map + doubly linked list**. Mỗi cấu trúc đảm nhận việc gì để mọi thao tác đều O(1)?
