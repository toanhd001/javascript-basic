module.exports = [
  {
    id: 'range-sum-query',
    title: 'Truy vấn tổng đoạn',
    difficulty: 'easy',
    prompt: `
Viết class \`NumArray\`:
- \`constructor(nums)\`
- \`sumRange(left, right)\`: tổng các phần tử từ chỉ số \`left\` đến \`right\` (gồm cả hai đầu)

Test ẩn gọi \`sumRange\` **100.000 lần** trên mảng 100.000 phần tử — mỗi truy vấn phải O(1).
`,
    starter: `
class NumArray {
  constructor(nums) {
    this.nums = nums;
  }

  sumRange(left, right) {
    let s = 0;
    for (let i = left; i <= right; i++) s += this.nums[i];
    return s;
  }
}
`,
    solution: `
class NumArray {
  constructor(nums) {
    this.prefix = [0];
    for (const x of nums) this.prefix.push(this.prefix[this.prefix.length - 1] + x);
  }

  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}
`,
    hints: ['Tính sẵn mảng prefix trong constructor; `sumRange = prefix[right + 1] - prefix[left]`.'],
    tests: [
      { code: 'const a = new NumArray([-2, 0, 3, -5, 2, -1]); return [a.sumRange(0, 2), a.sumRange(2, 5), a.sumRange(0, 5)];', label: 'NumArray([-2,0,3,-5,2,-1])', expected: [1, -1, -3] },
      { code: 'const a = new NumArray([5]); return a.sumRange(0, 0);', label: 'một phần tử', expected: 5 },
      { hidden: true, code: 'const n = 100000; const a = new NumArray(Array.from({ length: n }, (_, i) => i % 7)); let t = 0; for (let q = 0; q < 100000; q++) t += a.sumRange(0, n - 1 - (q % 10)); return t;', label: '100.000 truy vấn trên mảng 100.000 phần tử', expected: 29998200000 }
    ]
  },
  {
    id: 'subarray-sum-k',
    title: 'Subarray Sum Equals K',
    difficulty: 'medium',
    fn: 'subarraySum',
    prompt: `
Đếm số đoạn con liên tiếp (khác rỗng) có tổng **bằng đúng** \`k\`. Mảng có thể chứa **số âm**. Ràng buộc \`n <= 2·10^4\`... nhưng test ẩn có \`n = 10^5\`. (LeetCode 560)
`,
    starter: `
function subarraySum(nums, k) {

}
`,
    solution: `
function subarraySum(nums, k) {
  const seen = new Map([[0, 1]]);
  let sum = 0;
  let count = 0;
  for (const x of nums) {
    sum += x;
    count += seen.get(sum - k) || 0;
    seen.set(sum, (seen.get(sum) || 0) + 1);
  }
  return count;
}
`,
    hints: [
      'Có số âm → cửa sổ trượt không dùng được.',
      'Tổng đoạn (j, i] = prefix[i] − prefix[j]. Đếm có bao nhiêu prefix trước đó bằng `prefix[i] - k`.',
      'Khởi tạo Map với `[0, 1]` để tính được các đoạn bắt đầu từ chỉ số 0.'
    ],
    tests: [
      { args: [[1, 1, 1], 2], expected: 2 },
      { args: [[1, 2, 3], 3], expected: 2 },
      { args: [[1, -1, 0], 0], expected: 3 },
      { args: [[3, 4, -7, 3, 1, 3, 1, -4, -2, -2], 7], expected: 3 },
      { args: [[5], 3], expected: 0 },
      { gen: 'return [Array.from({ length: 100000 }, (_, i) => (i % 2 ? 1 : -1)), 0];', label: 'n = 100.000, xen kẽ 1 / -1', expected: 2500000000 }
    ]
  },
  {
    id: 'product-except-self',
    title: 'Product of Array Except Self',
    difficulty: 'medium',
    fn: 'productExceptSelf',
    prompt: `
Trả về mảng \`answer\` với \`answer[i]\` = tích mọi phần tử **trừ** \`nums[i]\`. **Không dùng phép chia**, O(n) thời gian.

\`[1,2,3,4]\` → \`[24,12,8,6]\`
`,
    starter: `
function productExceptSelf(nums) {

}
`,
    solution: `
function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);
  let left = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = left;
    left *= nums[i];
  }
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }
  return answer;
}
`,
    hints: [
      '`answer[i]` = (tích các phần tử bên **trái** i) × (tích các phần tử bên **phải** i).',
      'Lượt 1 từ trái sang: ghi tích bên trái vào `answer[i]`. Lượt 2 từ phải sang: nhân thêm tích bên phải.'
    ],
    explain: 'O(n) thời gian, O(1) bộ nhớ thêm (không tính mảng kết quả). Tại sao đề cấm phép chia? Vì có số 0 — chia cho 0 phải xử lý riêng, và người phỏng vấn muốn xem bạn biết kỹ thuật prefix/suffix.',
    tests: [
      { args: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
      { args: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
      { args: [[2, 3]], expected: [3, 2] },
      { args: [[0, 0]], expected: [0, 0] }
    ]
  }
];
