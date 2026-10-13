const HELPERS = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
// buildTree([3, 9, 20, null, null, 15, 7]) → cây theo định dạng tầng của LeetCode
function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  for (let head = 0; head < queue.length && i < arr.length; head++) {
    const node = queue[head];
    if (i < arr.length && arr[i] !== null) queue.push((node.left = new TreeNode(arr[i])));
    i++;
    if (i < arr.length && arr[i] !== null) queue.push((node.right = new TreeNode(arr[i])));
    i++;
  }
  return root;
}
// toArray(root) → mảng theo tầng (bỏ các null ở cuối)
function toArray(root) {
  const out = [];
  const queue = [root];
  for (let head = 0; head < queue.length; head++) {
    const node = queue[head];
    if (node) {
      out.push(node.val);
      queue.push(node.left, node.right);
    } else {
      out.push(null);
    }
  }
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
}
`;

module.exports = [
  {
    id: 'max-depth',
    title: 'Chiều sâu lớn nhất',
    difficulty: 'easy',
    fn: 'maxDepth',
    helpers: HELPERS,
    prompt: `
Trả về số node trên đường đi dài nhất từ gốc tới lá. Cây rỗng có độ sâu 0. (LeetCode 104)
`,
    starter: `
function maxDepth(root) {

}
`,
    solution: `
function maxDepth(root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
`,
    hints: ['Khuôn đệ quy: rỗng → 0; còn lại → 1 + max(độ sâu trái, độ sâu phải).'],
    tests: [
      { code: 'return maxDepth(buildTree([3, 9, 20, null, null, 15, 7]));', label: '[3,9,20,null,null,15,7]', expected: 3 },
      { code: 'return maxDepth(buildTree([1, null, 2]));', label: '[1,null,2]', expected: 2 },
      { code: 'return maxDepth(null);', label: 'cây rỗng', expected: 0 },
      { code: 'return maxDepth(buildTree([1, 2, null, 3, null, 4]));', label: 'cây lệch trái', expected: 4 }
    ]
  },
  {
    id: 'invert-tree',
    title: 'Lật cây (Invert Binary Tree)',
    difficulty: 'easy',
    fn: 'invertTree',
    helpers: HELPERS,
    prompt: `
Lật cây theo gương: đổi chỗ con trái và con phải ở **mọi** node. Trả về gốc. (LeetCode 226)
`,
    starter: `
function invertTree(root) {

}
`,
    solution: `
function invertTree(root) {
  if (root === null) return null;
  const left = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = left;
  return root;
}
`,
    hints: ['Lật cây con trái, lật cây con phải, rồi đổi chỗ chúng. Nhớ lưu tạm một bên trước khi gán đè.'],
    tests: [
      { code: 'return toArray(invertTree(buildTree([4, 2, 7, 1, 3, 6, 9])));', label: '[4,2,7,1,3,6,9]', expected: [4, 7, 2, 9, 6, 3, 1] },
      { code: 'return toArray(invertTree(buildTree([2, 1, 3])));', label: '[2,1,3]', expected: [2, 3, 1] },
      { code: 'return invertTree(null);', label: 'cây rỗng', expected: null },
      { code: 'return toArray(invertTree(buildTree([1, 2])));', label: '[1,2]', expected: [1, null, 2] }
    ]
  },
  {
    id: 'inorder-iterative',
    title: 'Duyệt inorder không đệ quy',
    difficulty: 'medium',
    fn: 'inorderTraversal',
    helpers: HELPERS,
    prompt: `
Trả về mảng giá trị theo thứ tự **inorder** (trái → gốc → phải), **không dùng đệ quy**. Test có cây lệch sâu 100.000 tầng — đệ quy sẽ tràn stack.
`,
    starter: `
function inorderTraversal(root) {
  const result = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return result;
}
`,
    solution: `
function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }
  return result;
}
`,
    hints: [
      'Tự quản lý stack: đi sang trái hết mức, đẩy từng node vào stack.',
      'Pop một node → ghi giá trị → chuyển sang cây con phải của nó và lặp lại.'
    ],
    tests: [
      { code: 'return inorderTraversal(buildTree([1, null, 2, 3]));', label: '[1,null,2,3]', expected: [1, 3, 2] },
      { code: 'return inorderTraversal(buildTree([4, 2, 6, 1, 3, 5, 7]));', label: 'BST [4,2,6,1,3,5,7]', expected: [1, 2, 3, 4, 5, 6, 7] },
      { code: 'return inorderTraversal(null);', label: 'cây rỗng', expected: [] },
      { hidden: true, code: 'let root = null; for (let i = 0; i < 100000; i++) root = new TreeNode(i, root); const r = inorderTraversal(root); return r.length === 100000 && r[0] === 0 && r[99999] === 99999;', label: 'cây lệch 100.000 tầng', expected: true }
    ]
  },
  {
    id: 'level-order',
    title: 'Duyệt theo tầng',
    difficulty: 'medium',
    fn: 'levelOrder',
    helpers: HELPERS,
    prompt: `
Trả về giá trị các node theo từng tầng, từ trái sang phải: mảng các mảng. (LeetCode 102)

\`[3,9,20,null,null,15,7]\` → \`[[3],[9,20],[15,7]]\`
`,
    starter: `
function levelOrder(root) {

}
`,
    solution: `
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let head = 0;
  while (head < queue.length) {
    const levelSize = queue.length - head;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue[head++];
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
`,
    hints: [
      'BFS bằng queue. Mẹo tách tầng: trước khi xử lý mỗi tầng, ghi lại số node đang có trong queue — đó là kích thước tầng hiện tại.',
      'Hoặc dùng hai mảng `current` và `next` như trong bài học.'
    ],
    tests: [
      { code: 'return levelOrder(buildTree([3, 9, 20, null, null, 15, 7]));', label: '[3,9,20,null,null,15,7]', expected: [[3], [9, 20], [15, 7]] },
      { code: 'return levelOrder(buildTree([1]));', label: '[1]', expected: [[1]] },
      { code: 'return levelOrder(null);', label: 'cây rỗng', expected: [] },
      { code: 'return levelOrder(buildTree([1, 2, 3, 4, null, null, 5]));', label: '[1,2,3,4,null,null,5]', expected: [[1], [2, 3], [4, 5]] }
    ]
  },
  {
    id: 'validate-bst',
    title: 'Kiểm tra BST',
    difficulty: 'medium',
    fn: 'isValidBST',
    helpers: HELPERS,
    prompt: `
Kiểm tra cây có phải **cây nhị phân tìm kiếm** hợp lệ không: với mọi node, **toàn bộ** cây con trái < node < **toàn bộ** cây con phải (nghiêm ngặt). (LeetCode 98)
`,
    starter: `
function isValidBST(root) {

}
`,
    solution: `
function isValidBST(root, low = -Infinity, high = Infinity) {
  if (root === null) return true;
  if (root.val <= low || root.val >= high) return false;
  return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high);
}
`,
    hints: [
      'So sánh mỗi node chỉ với con trực tiếp là **chưa đủ**: `[5,4,6,null,null,3,7]` — 3 nằm bên phải 5 nhưng nhỏ hơn 5.',
      'Truyền xuống **khoảng hợp lệ** `(low, high)`: đi sang trái thì cận trên thành giá trị node; sang phải thì cận dưới thành giá trị node.',
      'Cách khác: duyệt inorder và kiểm tra dãy tăng nghiêm ngặt.'
    ],
    tests: [
      { code: 'return isValidBST(buildTree([2, 1, 3]));', label: '[2,1,3]', expected: true },
      { code: 'return isValidBST(buildTree([5, 1, 4, null, null, 3, 6]));', label: '[5,1,4,null,null,3,6]', expected: false },
      { code: 'return isValidBST(buildTree([5, 4, 6, null, null, 3, 7]));', label: '[5,4,6,null,null,3,7] (3 < 5 nằm bên phải)', expected: false },
      { code: 'return isValidBST(buildTree([2, 2, 2]));', label: 'giá trị bằng nhau', expected: false },
      { code: 'return isValidBST(null);', label: 'cây rỗng', expected: true }
    ]
  }
];
