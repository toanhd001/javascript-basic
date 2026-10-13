module.exports = [
  {
    id: 'reverse-array',
    title: 'Đảo ngược mảng (in-place)',
    difficulty: 'easy',
    fn: 'reverseInPlace',
    prompt: `
Viết \`reverseInPlace(arr)\` đảo ngược mảng **ngay trên mảng đó** (không tạo mảng mới, không dùng \`reverse()\`), rồi trả về chính \`arr\`.

Yêu cầu bộ nhớ phụ O(1).
`,
    starter: `
function reverseInPlace(arr) {

  return arr;
}
`,
    solution: `
function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
  return arr;
}
`,
    hints: [
      'Dùng hai chỉ số: `left` từ đầu, `right` từ cuối. Đổi chỗ rồi tiến vào giữa.',
      'Đổi chỗ nhanh: `[arr[left], arr[right]] = [arr[right], arr[left]];` (destructuring).'
    ],
    explain: 'Đây là kỹ thuật **hai con trỏ** (two pointers) đầu tiên của bạn. Chạy n/2 vòng → O(n) thời gian, O(1) bộ nhớ.',
    followUp: 'Cách đổi chỗ bằng destructuring `[a, b] = [b, a]` ngắn hơn nhưng tạo ra một mảng tạm mỗi lần. Trong vòng lặp 10^6 lần, điều đó có đáng lo không? Khi nào thì nên quan tâm?',
    tests: [
      { args: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
      { args: [[1, 2]], expected: [2, 1] },
      { args: [[]], expected: [] },
      { args: [[7]], expected: [7] },
      { code: 'const a = [1, 2, 3]; const r = reverseInPlace(a); return r === a && a.join() === "3,2,1";', label: 'Trả về đúng mảng gốc đã bị đảo (in-place)', expected: true }
    ]
  },
  {
    id: 'second-largest',
    title: 'Số lớn thứ hai',
    difficulty: 'easy',
    fn: 'secondLargest',
    prompt: `
Viết \`secondLargest(nums)\` trả về giá trị **lớn thứ hai khác nhau** trong mảng. Nếu không có (mảng < 2 giá trị khác nhau), trả về \`null\`.

Yêu cầu: **một lần duyệt**, không sắp xếp.
`,
    starter: `
function secondLargest(nums) {

}
`,
    solution: `
function secondLargest(nums) {
  let first = -Infinity;
  let second = -Infinity;
  for (const n of nums) {
    if (n > first) {
      second = first;
      first = n;
    } else if (n < first && n > second) {
      second = n;
    }
  }
  return second === -Infinity ? null : second;
}
`,
    hints: [
      'Giữ hai biến `first` và `second`, cùng khởi tạo `-Infinity`.',
      'Khi gặp số lớn hơn `first`: `first` cũ trở thành `second`. Khi gặp số nằm giữa (nhỏ hơn hẳn `first` nhưng lớn hơn `second`): cập nhật `second`.'
    ],
    explain: 'Sắp xếp rồi lấy phần tử thứ hai là O(n log n) và còn phải xử lý trùng. Một lần duyệt với hai biến là O(n). Điều kiện `n < first` (chặt) đảm bảo các giá trị trùng với max không bị đếm làm "lớn thứ hai".',
    followUp: 'Mở rộng: tìm số lớn thứ **k**. Giữ k biến thì không còn thực tế khi k lớn — cấu trúc dữ liệu nào phù hợp? (Gợi ý: chặng DSA, bài Heap.)',
    tests: [
      { args: [[3, 1, 4, 1, 5]], expected: 4 },
      { args: [[5, 5, 4]], expected: 4 },
      { args: [[5, 5, 5]], expected: null },
      { args: [[1]], expected: null },
      { args: [[-1, -2, -3]], expected: -2 },
      { args: [[2, 1]], expected: 1 }
    ]
  },
  {
    id: 'rotate-array',
    title: 'Xoay mảng',
    difficulty: 'medium',
    fn: 'rotate',
    prompt: `
Viết \`rotate(nums, k)\` trả về mảng **mới** sau khi xoay \`nums\` sang phải \`k\` bước.

\`rotate([1,2,3,4,5], 2)\` → \`[4,5,1,2,3]\`. Lưu ý \`k\` có thể lớn hơn độ dài mảng.
`,
    starter: `
function rotate(nums, k) {

}
`,
    solution: `
function rotate(nums, k) {
  const n = nums.length;
  if (n === 0) return [];
  k = k % n;
  return nums.slice(n - k).concat(nums.slice(0, n - k));
}
`,
    hints: [
      'Xoay n bước thì về như cũ → chỉ cần xoay `k % n` bước.',
      'Kết quả = `k` phần tử cuối + phần còn lại. Dùng `slice`.'
    ],
    explain: 'O(n) thời gian và bộ nhớ. Phiên bản khó hơn (LeetCode 189) yêu cầu xoay **in-place O(1) bộ nhớ**: đảo cả mảng, rồi đảo k phần tử đầu, rồi đảo phần còn lại — tái sử dụng hàm reverse hai con trỏ ở bài trước.',
    followUp: 'Tại sao "đảo toàn bộ → đảo đoạn đầu → đảo đoạn sau" lại cho đúng kết quả xoay? Thử với [1,2,3,4,5], k = 2 trên giấy.',
    tests: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
      { args: [[1, 2, 3], 0], expected: [1, 2, 3] },
      { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
      { args: [[1, 2, 3], 4], expected: [3, 1, 2] },
      { args: [[], 5], expected: [] },
      { args: [[1, 2], 1000000001], expected: [2, 1] }
    ]
  },
  {
    id: 'create-grid',
    title: 'Tạo lưới 2 chiều',
    difficulty: 'easy',
    fn: 'createGrid',
    prompt: `
Viết \`createGrid(rows, cols, value)\` trả về mảng 2 chiều \`rows × cols\`, mọi ô bằng \`value\`. Các hàng phải là **mảng độc lập** (sửa một ô không ảnh hưởng hàng khác).
`,
    starter: `
function createGrid(rows, cols, value) {

}
`,
    solution: `
function createGrid(rows, cols, value) {
  return Array.from({ length: rows }, () => new Array(cols).fill(value));
}
`,
    hints: ['Xem lại phần "bẫy fill" trong bài: `Array.from({ length: rows }, () => ...)` gọi hàm tạo mảng mới cho **mỗi** hàng.'],
    tests: [
      { args: [2, 3, 0], expected: [[0, 0, 0], [0, 0, 0]] },
      { args: [1, 1, 'x'], expected: [['x']] },
      { args: [0, 5, 0], expected: [] },
      { code: 'const g = createGrid(3, 3, 0); g[0][0] = 1; return g;', label: 'Sửa g[0][0] = 1 chỉ đổi đúng một ô', expected: [[1, 0, 0], [0, 0, 0], [0, 0, 0]] }
    ]
  }
];
