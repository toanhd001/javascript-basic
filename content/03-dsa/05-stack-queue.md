---
id: dsa-stack-queue
title: Stack và Queue
---
## Stack — vào sau, ra trước (LIFO)

Như chồng đĩa: chỉ thêm/lấy ở **đỉnh**. Trong JS, mảng với `push`/`pop` là một stack hoàn hảo (cả hai O(1)).

```js run
const stack = [];
stack.push(1); stack.push(2); stack.push(3);
console.log(stack[stack.length - 1]); // xem đỉnh (peek): 3
console.log(stack.pop());             // 3
console.log(stack);                   // [1, 2]
```

**Nghĩ đến stack khi:** cần "khớp cặp" (ngoặc, thẻ HTML), "quay lui" (undo, duyệt DFS), xử lý **phần tử gần nhất** chưa được giải quyết, hoặc biểu thức (tính toán, ký pháp Ba Lan ngược).

```js run
// Kiểm tra ngoặc đúng
function isValid(s) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") stack.push(ch);
    else if (stack.pop() !== pairs[ch]) return false;
  }
  return stack.length === 0;
}
console.log(isValid("({[]})"), isValid("(]"), isValid("(("));
```

## Monotonic stack — "phần tử lớn hơn tiếp theo"

Giữ stack **đơn điệu** (luôn giảm dần hoặc tăng dần). Khi phần tử mới phá vỡ tính đơn điệu, các phần tử bị pop ra chính là những phần tử vừa "tìm được câu trả lời".

```js run
// Với mỗi phần tử, phần tử lớn hơn đầu tiên bên phải là gì? (-1 nếu không có)
function nextGreater(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = []; // lưu CHỈ SỐ, giá trị tương ứng giảm dần
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return result;
}
console.log(nextGreater([2, 1, 2, 4, 3])); // [4, 2, 4, -1, -1]
```

Mỗi chỉ số được push một lần và pop tối đa một lần → **O(n)**.

## Queue — vào trước, ra trước (FIFO)

Như hàng đợi mua vé. Dùng cho **BFS** (duyệt theo chiều rộng), xử lý theo thứ tự đến, bộ đệm.

Như đã thấy ở chặng 2, `arr.shift()` là O(n). Queue hiệu quả trong JS:

```js run
class Queue {
  #items = [];
  #head = 0;
  enqueue(x) { this.#items.push(x); }
  dequeue() {
    if (this.#head === this.#items.length) return undefined;
    const x = this.#items[this.#head++];
    // dọn bộ nhớ khi phần "đã lấy ra" quá lớn
    if (this.#head > 1024 && this.#head * 2 > this.#items.length) {
      this.#items = this.#items.slice(this.#head);
      this.#head = 0;
    }
    return x;
  }
  get size() { return this.#items.length - this.#head; }
}

const q = new Queue();
q.enqueue("a"); q.enqueue("b"); q.enqueue("c");
console.log(q.dequeue(), q.dequeue(), q.size); // a b 1
```

Trong coding test, cách gọn nhất cho BFS là dùng mảng + biến `head`:

```js
const queue = [start];
for (let head = 0; head < queue.length; head++) {
  const node = queue[head];
  // ... queue.push(neighbor)
}
```

## Câu hỏi tại sao

- Đệ quy thực chất dùng **call stack**. Vì sao mọi thuật toán đệ quy đều viết lại được bằng vòng lặp + stack tự quản lý, và khi nào nên làm vậy?
- Class `Queue` ở trên thỉnh thoảng gọi `slice` (O(n)). Tại sao tổng chi phí vẫn là O(1) **trung bình** mỗi thao tác (amortized)?
