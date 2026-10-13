const HELPERS = `
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// fromArray([1, 2, 3]) → 1 → 2 → 3
function fromArray(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);
  return head;
}
// toArray(head) → [1, 2, 3] (dừng sau 10.000 node để tránh treo khi có chu trình)
function toArray(head) {
  const out = [];
  for (let n = head; n && out.length < 10000; n = n.next) out.push(n.val);
  return out;
}
`;

module.exports = [
  {
    id: 'reverse-linked-list',
    title: 'Đảo ngược linked list',
    difficulty: 'easy',
    fn: 'reverseList',
    helpers: HELPERS,
    prompt: `
Đảo ngược danh sách liên kết và trả về \`head\` mới. \`ListNode\`, \`fromArray\`, \`toArray\` đã có sẵn (xem "Code có sẵn") — dùng \`toArray\` với \`console.log\` để debug. (LeetCode 206)
`,
    starter: `
function reverseList(head) {

}

// thử: console.log(toArray(reverseList(fromArray([1, 2, 3]))));
`,
    solution: `
function reverseList(head) {
  let prev = null;
  let cur = head;
  while (cur !== null) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
`,
    hints: [
      'Ba biến: `prev = null`, `cur = head`, và `next` tạm để không mất phần còn lại của danh sách.',
      'Mỗi bước: lưu `next = cur.next`; đảo `cur.next = prev`; tiến `prev = cur; cur = next`. Kết thúc: `prev` là head mới.'
    ],
    explain: 'O(n) thời gian, O(1) bộ nhớ. Bản đệ quy: `const newHead = reverseList(head.next); head.next.next = head; head.next = null; return newHead;` — gọn nhưng tốn O(n) call stack, danh sách 10^5 node có thể tràn stack.',
    followUp: 'Viết lại bằng đệ quy. Tại sao người phỏng vấn thường hỏi **cả hai** cách, và bạn sẽ chọn cách nào cho code production?',
    tests: [
      { code: 'return toArray(reverseList(fromArray([1, 2, 3, 4, 5])));', label: '1→2→3→4→5', expected: [5, 4, 3, 2, 1] },
      { code: 'return toArray(reverseList(fromArray([1, 2])));', label: '1→2', expected: [2, 1] },
      { code: 'return reverseList(null);', label: 'danh sách rỗng (null)', expected: null },
      { code: 'return toArray(reverseList(fromArray([9])));', label: 'một node', expected: [9] }
    ]
  },
  {
    id: 'merge-two-sorted-lists',
    title: 'Gộp hai danh sách đã sắp xếp',
    difficulty: 'easy',
    fn: 'mergeTwoLists',
    helpers: HELPERS,
    prompt: `
Gộp hai linked list **đã sắp xếp tăng dần** thành một danh sách sắp xếp, bằng cách **nối lại các node có sẵn** (không tạo node mới cho dữ liệu). (LeetCode 21)
`,
    starter: `
function mergeTwoLists(l1, l2) {

}
`,
    solution: `
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let tail = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 || l2;
  return dummy.next;
}
`,
    hints: [
      'Dùng node giả `dummy` và con trỏ `tail` trỏ vào node cuối của kết quả.',
      'Khi một danh sách hết, nối thẳng phần còn lại của danh sách kia: `tail.next = l1 || l2`.'
    ],
    tests: [
      { code: 'return toArray(mergeTwoLists(fromArray([1, 2, 4]), fromArray([1, 3, 4])));', label: '[1,2,4] + [1,3,4]', expected: [1, 1, 2, 3, 4, 4] },
      { code: 'return mergeTwoLists(null, null);', label: 'cả hai rỗng', expected: null },
      { code: 'return toArray(mergeTwoLists(null, fromArray([0])));', label: 'một bên rỗng', expected: [0] },
      { code: 'const a = fromArray([1, 5]); const b = fromArray([2]); const m = mergeTwoLists(a, b); return m === a && m.next === b;', label: 'dùng lại node có sẵn', expected: true }
    ]
  },
  {
    id: 'linked-list-cycle',
    title: 'Phát hiện chu trình',
    difficulty: 'easy',
    fn: 'hasCycle',
    helpers: HELPERS,
    prompt: `
Trả về \`true\` nếu danh sách có **chu trình** (một node nào đó trỏ ngược về node trước). Yêu cầu **O(1) bộ nhớ**. (LeetCode 141)
`,
    starter: `
function hasCycle(head) {

}
`,
    solution: `
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
`,
    hints: [
      'Cách dễ: lưu các node đã gặp vào `Set` — O(n) bộ nhớ.',
      'O(1): con trỏ `slow` đi 1 bước, `fast` đi 2 bước. Có chu trình thì chúng sẽ gặp nhau; không có thì `fast` chạm `null`.'
    ],
    tests: [
      { code: 'const h = fromArray([3, 2, 0, -4]); h.next.next.next.next = h.next; return hasCycle(h);', label: '3→2→0→-4→(quay về 2)', expected: true },
      { code: 'const h = fromArray([1, 2]); h.next.next = h; return hasCycle(h);', label: '1→2→(quay về 1)', expected: true },
      { code: 'return hasCycle(fromArray([1, 2, 3]));', label: 'không có chu trình', expected: false },
      { code: 'return hasCycle(null);', label: 'rỗng', expected: false },
      { code: 'const h = fromArray([1]); h.next = h; return hasCycle(h);', label: 'một node tự trỏ vào mình', expected: true }
    ]
  },
  {
    id: 'middle-of-list',
    title: 'Node ở giữa',
    difficulty: 'easy',
    fn: 'middleNode',
    helpers: HELPERS,
    prompt: `
Trả về node ở **giữa** danh sách. Nếu có hai node giữa (số node chẵn), trả về node **thứ hai**. Chỉ duyệt một lần.
`,
    starter: `
function middleNode(head) {

}
`,
    solution: `
function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
`,
    hints: ['Nhanh – chậm: khi `fast` tới cuối, `slow` ở giữa.'],
    tests: [
      { code: 'return toArray(middleNode(fromArray([1, 2, 3, 4, 5])));', label: '[1..5] → từ node 3', expected: [3, 4, 5] },
      { code: 'return toArray(middleNode(fromArray([1, 2, 3, 4, 5, 6])));', label: '[1..6] → từ node 4', expected: [4, 5, 6] },
      { code: 'return toArray(middleNode(fromArray([1])));', label: 'một node', expected: [1] }
    ]
  }
];
