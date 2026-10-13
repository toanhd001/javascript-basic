module.exports = [
  {
    id: 'merge-sort',
    title: 'Cài đặt Merge Sort',
    difficulty: 'medium',
    fn: 'mergeSort',
    prompt: `
Cài đặt \`mergeSort(nums)\` trả về mảng **mới** đã sắp xếp tăng dần. **Không dùng** \`Array.prototype.sort\`.

Test ẩn có 200.000 phần tử — thuật toán O(n²) sẽ quá thời gian.
`,
    starter: `
function mergeSort(nums) {

}
`,
    solution: `
function mergeSort(nums) {
  if (nums.length <= 1) return nums.slice();
  const mid = nums.length >> 1;
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  const out = new Array(nums.length);
  let i = 0, j = 0, k = 0;
  while (i < left.length && j < right.length) {
    out[k++] = left[i] <= right[j] ? left[i++] : right[j++];
  }
  while (i < left.length) out[k++] = left[i++];
  while (j < right.length) out[k++] = right[j++];
  return out;
}
`,
    hints: [
      'Base case: mảng 0 hoặc 1 phần tử đã sắp xếp.',
      'Chia: `mid = nums.length >> 1`; sắp xếp đệ quy `nums.slice(0, mid)` và `nums.slice(mid)`.',
      'Gộp hai mảng đã sắp xếp bằng hai con trỏ (xem bài Two Pointers). Dùng `<=` để giữ tính ổn định.'
    ],
    tests: [
      { args: [[5, 2, 4, 6, 1, 3]], expected: [1, 2, 3, 4, 5, 6] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
      { args: [[3, -1, 3, 0, -1]], expected: [-1, -1, 0, 3, 3] },
      { code: 'const a = [3, 1, 2]; mergeSort(a); return a;', label: 'không sửa mảng đầu vào', expected: [3, 1, 2] },
      { code: 'const src = Function.prototype.toString.call(mergeSort); return /\\.sort\\s*\\(/.test(src);', label: 'không dùng .sort()', expected: false },
      { gen: 'let x = 12345; return [Array.from({ length: 200000 }, () => (x = (x * 1103515245 + 12345) % 2147483648))];', check: 'if (!Array.isArray(result) || result.length !== 200000) return false; for (let i = 1; i < result.length; i++) if (result[i - 1] > result[i]) return false; return true;', label: 'n = 200.000 ngẫu nhiên', expectedText: 'mảng 200.000 phần tử tăng dần' }
    ]
  },
  {
    id: 'sort-colors',
    title: 'Sort Colors (cờ Hà Lan)',
    difficulty: 'medium',
    fn: 'sortColors',
    prompt: `
Mảng chỉ chứa \`0\`, \`1\`, \`2\`. Sắp xếp **in-place** trong **một lần duyệt**, O(1) bộ nhớ, không dùng \`sort\`. Hàm không cần trả về gì (test kiểm tra mảng sau khi gọi). (LeetCode 75)
`,
    starter: `
function sortColors(nums) {

}
`,
    solution: `
function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}
`,
    hints: [
      'Cách dễ (hai lần duyệt): đếm số 0, 1, 2 rồi ghi lại — counting sort.',
      'Một lần duyệt: ba con trỏ `low`, `mid`, `high`. Bất biến: `[0, low)` toàn 0, `[low, mid)` toàn 1, `(high, end]` toàn 2.',
      'Gặp 2 và đổi với `high` thì **không tăng `mid`** — phần tử vừa đổi về chưa được xét.'
    ],
    tests: [
      { code: 'const a = [2, 0, 2, 1, 1, 0]; sortColors(a); return a;', label: '[2,0,2,1,1,0]', expected: [0, 0, 1, 1, 2, 2] },
      { code: 'const a = [2, 0, 1]; sortColors(a); return a;', label: '[2,0,1]', expected: [0, 1, 2] },
      { code: 'const a = [0]; sortColors(a); return a;', label: '[0]', expected: [0] },
      { code: 'const a = [2, 2, 1, 1, 0, 0]; sortColors(a); return a;', label: 'giảm dần', expected: [0, 0, 1, 1, 2, 2] }
    ]
  },
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    difficulty: 'medium',
    fn: 'merge',
    prompt: `
Cho mảng các khoảng \`[start, end]\`, gộp mọi khoảng **chồng lấn** (kể cả chạm nhau như \`[1,4]\` và \`[4,5]\`) và trả về các khoảng không chồng lấn, **sắp theo start**. (LeetCode 56)

\`[[1,3],[2,6],[8,10],[15,18]]\` → \`[[1,6],[8,10],[15,18]]\`
`,
    starter: `
function merge(intervals) {

}
`,
    solution: `
function merge(intervals) {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const result = [];
  for (const [start, end] of sorted) {
    const last = result[result.length - 1];
    if (last && start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      result.push([start, end]);
    }
  }
  return result;
}
`,
    hints: [
      'Sắp xếp theo `start`. Sau đó các khoảng chồng lấn sẽ nằm **liền nhau**.',
      'Duyệt và so với khoảng cuối cùng trong kết quả: nếu `start <= last.end` thì mở rộng `last.end = max(last.end, end)`, không thì thêm khoảng mới.'
    ],
    explain: 'O(n log n) do sort. Lỗi hay gặp: quên `Math.max` — khoảng `[1,10]` gộp với `[2,3]` phải giữ end = 10.',
    tests: [
      { args: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
      { args: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
      { args: [[[1, 10], [2, 3]]], expected: [[1, 10]] },
      { args: [[[5, 6], [1, 2]]], expected: [[1, 2], [5, 6]] },
      { args: [[]], expected: [] }
    ]
  }
];
