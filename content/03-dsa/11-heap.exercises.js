module.exports = [
  {
    id: 'implement-min-heap',
    title: 'Tự cài đặt MinHeap',
    difficulty: 'medium',
    prompt: `
Cài đặt class \`MinHeap\` với:
- \`push(x)\`: O(log n)
- \`pop()\`: lấy ra và trả về phần tử nhỏ nhất, O(log n). Heap rỗng → \`undefined\`
- \`peek()\`: xem phần tử nhỏ nhất, O(1)
- getter \`size\`

Cố gắng tự viết **không nhìn** code trong bài học. Test ẩn thực hiện 200.000 thao tác.
`,
    starter: `
class MinHeap {
  constructor() {
    this.data = [];
  }
  get size() {
    return this.data.length;
  }
  peek() {

  }
  push(x) {

  }
  pop() {

  }
}
`,
    solution: `
class MinHeap {
  constructor() {
    this.data = [];
  }
  get size() {
    return this.data.length;
  }
  peek() {
    return this.data[0];
  }
  push(x) {
    const d = this.data;
    d.push(x);
    let i = d.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (d[p] <= d[i]) break;
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
      while (true) {
        const l = 2 * i + 1;
        const r = l + 1;
        let m = i;
        if (l < d.length && d[l] < d[m]) m = l;
        if (r < d.length && d[r] < d[m]) m = r;
        if (m === i) break;
        [d[i], d[m]] = [d[m], d[i]];
        i = m;
      }
    }
    return top;
  }
}
`,
    hints: [
      'Chỉ số: con trái `2i + 1`, con phải `2i + 2`, cha `(i - 1) >> 1`.',
      'push: thêm cuối mảng, đổi chỗ với cha khi nhỏ hơn cha.',
      'pop: lưu `data[0]`, `pop()` phần tử cuối và đặt vào vị trí 0 (nếu mảng còn phần tử), rồi đổi chỗ với **con nhỏ hơn** khi còn lớn hơn nó.'
    ],
    tests: [
      { code: 'const h = new MinHeap(); [5, 1, 8, 3, 2].forEach((x) => h.push(x)); return [h.peek(), h.size];', label: 'push 5,1,8,3,2 → peek, size', expected: [1, 5] },
      { code: 'const h = new MinHeap(); [5, 1, 8, 3, 2, 9, 0].forEach((x) => h.push(x)); const out = []; while (h.size) out.push(h.pop()); return out;', label: 'pop hết ra theo thứ tự tăng dần', expected: [0, 1, 2, 3, 5, 8, 9] },
      { code: 'const h = new MinHeap(); return [h.pop(), h.peek(), h.size];', label: 'heap rỗng', expected: [undefined, undefined, 0] },
      { code: 'const h = new MinHeap(); h.push(4); h.push(4); h.push(1); return [h.pop(), h.pop(), h.pop(), h.pop()];', label: 'giá trị trùng', expected: [1, 4, 4, undefined] },
      { hidden: true, code: 'const h = new MinHeap(); let x = 7; for (let i = 0; i < 100000; i++) { x = (x * 48271) % 2147483647; h.push(x); } let prev = -1; for (let i = 0; i < 100000; i++) { const v = h.pop(); if (v < prev) return "sai thứ tự ở lần pop " + i; prev = v; } return h.size;', label: '100.000 push + 100.000 pop', expected: 0 }
    ]
  },
  {
    id: 'kth-largest',
    title: 'Phần tử lớn thứ K',
    difficulty: 'medium',
    fn: 'findKthLargest',
    helpers: `
// MinHeap có sẵn: new MinHeap(compare?) · push(x) · pop() · peek() · size
class MinHeap {
  constructor(compare = (a, b) => a - b) { this.data = []; this.compare = compare; }
  get size() { return this.data.length; }
  peek() { return this.data[0]; }
  push(x) {
    const d = this.data; d.push(x);
    for (let i = d.length - 1; i > 0;) {
      const p = (i - 1) >> 1;
      if (this.compare(d[i], d[p]) >= 0) break;
      [d[i], d[p]] = [d[p], d[i]]; i = p;
    }
  }
  pop() {
    const d = this.data; if (!d.length) return undefined;
    const top = d[0], last = d.pop();
    if (d.length) {
      d[0] = last;
      for (let i = 0; ;) {
        const l = 2 * i + 1, r = l + 1; let m = i;
        if (l < d.length && this.compare(d[l], d[m]) < 0) m = l;
        if (r < d.length && this.compare(d[r], d[m]) < 0) m = r;
        if (m === i) break;
        [d[i], d[m]] = [d[m], d[i]]; i = m;
      }
    }
    return top;
  }
}
`,
    prompt: `
Trả về phần tử lớn thứ \`k\` (theo thứ tự đã sắp xếp, không phải thứ k khác nhau). Class \`MinHeap\` đã có sẵn. (LeetCode 215)

\`findKthLargest([3,2,1,5,6,4], 2)\` → \`5\`

Hãy làm O(n log k) bằng heap kích thước k thay vì sort.
`,
    starter: `
function findKthLargest(nums, k) {

}
`,
    solution: `
function findKthLargest(nums, k) {
  const heap = new MinHeap();
  for (const x of nums) {
    heap.push(x);
    if (heap.size > k) heap.pop();
  }
  return heap.peek();
}
`,
    hints: [
      'Giữ min-heap chứa k phần tử lớn nhất đã gặp.',
      'Push từng phần tử; khi `heap.size > k` thì `pop()` (bỏ phần tử nhỏ nhất). Đáp án là `heap.peek()`.'
    ],
    tests: [
      { args: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
      { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
      { args: [[1], 1], expected: 1 },
      { args: [[-1, -1], 2], expected: -1 },
      { gen: 'return [Array.from({ length: 200000 }, (_, i) => (i * 7919) % 200003), 10];', label: 'n = 200.000, k = 10', expected: 199993 }
    ]
  },
  {
    id: 'merge-k-sorted',
    title: 'Gộp K mảng đã sắp xếp',
    difficulty: 'hard',
    fn: 'mergeKSorted',
    helpers: `
// MinHeap có sẵn: new MinHeap(compare?) · push(x) · pop() · peek() · size
class MinHeap {
  constructor(compare = (a, b) => a - b) { this.data = []; this.compare = compare; }
  get size() { return this.data.length; }
  peek() { return this.data[0]; }
  push(x) {
    const d = this.data; d.push(x);
    for (let i = d.length - 1; i > 0;) {
      const p = (i - 1) >> 1;
      if (this.compare(d[i], d[p]) >= 0) break;
      [d[i], d[p]] = [d[p], d[i]]; i = p;
    }
  }
  pop() {
    const d = this.data; if (!d.length) return undefined;
    const top = d[0], last = d.pop();
    if (d.length) {
      d[0] = last;
      for (let i = 0; ;) {
        const l = 2 * i + 1, r = l + 1; let m = i;
        if (l < d.length && this.compare(d[l], d[m]) < 0) m = l;
        if (r < d.length && this.compare(d[r], d[m]) < 0) m = r;
        if (m === i) break;
        [d[i], d[m]] = [d[m], d[i]]; i = m;
      }
    }
    return top;
  }
}
`,
    prompt: `
Cho \`k\` mảng, mỗi mảng đã sắp xếp tăng dần. Gộp thành một mảng sắp xếp tăng dần. Tổng số phần tử N lên tới 200.000, k lên tới 2.000.

Yêu cầu O(N log k). (Phiên bản mảng của LeetCode 23)
`,
    starter: `
function mergeKSorted(arrays) {

}
`,
    solution: `
function mergeKSorted(arrays) {
  const heap = new MinHeap((a, b) => a[0] - b[0]);
  arrays.forEach((arr, i) => {
    if (arr.length) heap.push([arr[0], i, 0]);
  });
  const result = [];
  while (heap.size) {
    const [value, i, j] = heap.pop();
    result.push(value);
    if (j + 1 < arrays[i].length) heap.push([arrays[i][j + 1], i, j + 1]);
  }
  return result;
}
`,
    hints: [
      'Heap luôn chứa **phần tử hiện tại** (nhỏ nhất chưa lấy) của mỗi mảng: tối đa k phần tử.',
      'Lưu bộ ba `[giá trị, chỉ số mảng, chỉ số trong mảng]` và dùng comparator theo giá trị. Pop xong thì push phần tử kế tiếp của cùng mảng đó.'
    ],
    explain: 'Mỗi phần tử vào/ra heap một lần, heap có ≤ k phần tử → O(N log k). Cách nối hết rồi sort là O(N log N) — chạy được nhưng không tận dụng việc các mảng đã sắp xếp. Cách gộp lần lượt từng mảng là O(N·k).',
    tests: [
      { args: [[[1, 4, 5], [1, 3, 4], [2, 6]]], expected: [1, 1, 2, 3, 4, 4, 5, 6] },
      { args: [[]], expected: [] },
      { args: [[[], [], [7]]], expected: [7] },
      { args: [[[-3, 10], [-5, 0, 0, 20]]], expected: [-5, -3, 0, 0, 10, 20] },
      { gen: 'return [Array.from({ length: 2000 }, (_, i) => Array.from({ length: 100 }, (_, j) => j * 2000 + i))];', check: 'if (result.length !== 200000) return false; for (let i = 0; i < result.length; i++) if (result[i] !== i) return false; return true;', label: 'k = 2.000 mảng × 100 phần tử', expectedText: '[0, 1, 2, ..., 199999]' }
    ]
  }
];
