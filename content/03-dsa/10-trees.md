---
id: dsa-trees
title: Cây nhị phân (Binary Tree)
---
Mỗi node có tối đa **hai con**: `left` và `right`. Cây là chủ đề phỏng vấn **phổ biến nhất** sau mảng/chuỗi, và gần như mọi bài đều giải bằng đệ quy theo cùng một khuôn.

```js
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
//        1
//       / \
//      2   3
//     / \
//    4   5
```

## Khuôn đệ quy trên cây

> Đáp án cho cây gốc `root` = **kết hợp**(đáp án cây con trái, đáp án cây con phải, `root.val`). Base case: `root === null`.

```js run
class TreeNode { constructor(v, l = null, r = null) { this.val = v; this.left = l; this.right = r; } }
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));

const countNodes = (n) => (n === null ? 0 : 1 + countNodes(n.left) + countNodes(n.right));
const sumTree = (n) => (n === null ? 0 : n.val + sumTree(n.left) + sumTree(n.right));
const height = (n) => (n === null ? 0 : 1 + Math.max(height(n.left), height(n.right)));

console.log(countNodes(root), sumTree(root), height(root)); // 5 15 3
```

## Duyệt theo chiều sâu (DFS): 3 thứ tự

```js run
class TreeNode { constructor(v, l = null, r = null) { this.val = v; this.left = l; this.right = r; } }
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));

const pre = [], ino = [], post = [];
function dfs(n) {
  if (!n) return;
  pre.push(n.val);   // preorder: gốc → trái → phải
  dfs(n.left);
  ino.push(n.val);   // inorder: trái → gốc → phải
  dfs(n.right);
  post.push(n.val);  // postorder: trái → phải → gốc
}
dfs(root);
console.log("pre ", pre);   // [1, 2, 4, 5, 3]
console.log("in  ", ino);   // [4, 2, 5, 1, 3]
console.log("post", post);  // [4, 5, 2, 3, 1]
```

- **Preorder**: sao chép cây, in cấu trúc thư mục.
- **Inorder**: trên **BST** cho ra dãy **tăng dần**.
- **Postorder**: cần kết quả của con trước khi xử lý cha (tính chiều cao, xoá cây).

## Duyệt theo chiều rộng (BFS) — từng tầng

```js run
class TreeNode { constructor(v, l = null, r = null) { this.val = v; this.left = l; this.right = r; } }
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));

function levels(root) {
  if (!root) return [];
  const result = [];
  let current = [root];
  while (current.length) {
    result.push(current.map((n) => n.val));
    const next = [];
    for (const n of current) {
      if (n.left) next.push(n.left);
      if (n.right) next.push(n.right);
    }
    current = next;
  }
  return result;
}
console.log(levels(root)); // [[1], [2, 3], [4, 5]]
```

BFS dùng cho: duyệt theo tầng, **đường đi ngắn nhất** (số cạnh ít nhất), node gần gốc nhất thoả điều kiện.

## Cây nhị phân tìm kiếm (BST)

Với mọi node: **mọi** giá trị cây con trái < node < **mọi** giá trị cây con phải. Tìm/chèn/xoá O(h) với h là chiều cao: O(log n) nếu cây cân bằng, O(n) nếu cây lệch (thành "linked list").

## Định dạng trong bài tập

Cây được cho dưới dạng mảng **theo tầng** kiểu LeetCode, `null` là vị trí trống: `[3, 9, 20, null, null, 15, 7]` là

```
    3
   / \
  9  20
     / \
    15  7
```

Hàm `buildTree(arr)` và `toArray(root)` đã có sẵn trong mỗi bài.

## Câu hỏi tại sao

- DFS đệ quy dùng O(h) bộ nhớ (call stack), BFS dùng O(w) (w = số node ở tầng rộng nhất). Với cây cân bằng hoàn hảo, cái nào tốn hơn? Với cây lệch thì sao?
- Tại sao kiểm tra BST chỉ bằng `node.left.val < node.val < node.right.val` là **sai**? Tìm một phản ví dụ.
