module.exports = [
  {
    id: 'two-sum-sorted',
    title: 'Two Sum II (mảng đã sắp xếp)',
    difficulty: 'easy',
    fn: 'twoSumSorted',
    prompt: `
\`numbers\` đã sắp xếp **tăng dần**. Trả về \`[i, j]\` (chỉ số bắt đầu từ **1**, \`i < j\`) sao cho \`numbers[i] + numbers[j] = target\`. Đảm bảo có đúng một đáp án.

Yêu cầu O(1) bộ nhớ thêm.
`,
    starter: `
function twoSumSorted(numbers, target) {

}
`,
    solution: `
function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
  return [];
}
`,
    hints: ['Hai con trỏ ở hai đầu. Tổng nhỏ quá → `left++`; lớn quá → `right--`.', 'Nhớ cộng 1 vào chỉ số khi trả về.'],
    tests: [
      { args: [[2, 7, 11, 15], 9], expected: [1, 2] },
      { args: [[2, 3, 4], 6], expected: [1, 3] },
      { args: [[-1, 0], -1], expected: [1, 2] },
      { gen: 'const n = 200000; const a = Array.from({ length: n }, (_, i) => 2 * i); a[n - 2] = 2 * (n - 2) + 1; return [a, a[n - 3] + a[n - 2]];', label: 'n = 200.000, đáp án gần cuối mảng', expected: [199998, 199999] }
    ]
  },
  {
    id: 'remove-duplicates-sorted',
    title: 'Xoá trùng lặp trong mảng đã sắp xếp',
    difficulty: 'easy',
    fn: 'removeDuplicates',
    prompt: `
Cho mảng \`nums\` đã sắp xếp tăng dần. Xoá các phần tử trùng **in-place** sao cho mỗi giá trị chỉ còn một lần, giữ thứ tự. Trả về \`k\` — số phần tử còn lại; \`k\` phần tử đầu của \`nums\` phải là kết quả (phần sau không quan trọng).

\`nums = [0,0,1,1,1,2,2,3,3,4]\` → trả về \`5\`, và \`nums\` bắt đầu bằng \`[0,1,2,3,4]\`.
`,
    starter: `
function removeDuplicates(nums) {

}
`,
    solution: `
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 1;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}
`,
    hints: [
      'Con trỏ `slow` = vị trí ghi tiếp theo. Phần tử đầu luôn được giữ nên `slow` bắt đầu từ 1.',
      '`fast` duyệt từ 1; nếu `nums[fast]` khác phần tử cuối đã ghi (`nums[slow - 1]`) thì ghi vào `nums[slow]`.'
    ],
    tests: [
      { code: 'const a = [1, 1, 2]; const k = removeDuplicates(a); return [k, a.slice(0, k)];', label: '[1,1,2]', expected: [2, [1, 2]] },
      { code: 'const a = [0,0,1,1,1,2,2,3,3,4]; const k = removeDuplicates(a); return [k, a.slice(0, k)];', label: '[0,0,1,1,1,2,2,3,3,4]', expected: [5, [0, 1, 2, 3, 4]] },
      { code: 'const a = []; return removeDuplicates(a);', label: '[]', expected: 0 },
      { code: 'const a = [7, 7, 7]; const k = removeDuplicates(a); return [k, a.slice(0, k)];', label: '[7,7,7]', expected: [1, [7]] }
    ]
  },
  {
    id: 'container-most-water',
    title: 'Container With Most Water',
    difficulty: 'medium',
    fn: 'maxArea',
    prompt: `
\`height[i]\` là chiều cao cột thứ i. Chọn hai cột tạo thành bình chứa với trục hoành; lượng nước = \`(j - i) * min(height[i], height[j])\`. Trả về lượng nước lớn nhất.

Ràng buộc \`n <= 10^5\` — cần O(n).
`,
    starter: `
function maxArea(height) {

}
`,
    solution: `
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let best = 0;
  while (left < right) {
    const h = Math.min(height[left], height[right]);
    best = Math.max(best, h * (right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return best;
}
`,
    hints: [
      'Bắt đầu với hai cột ở hai đầu (chiều rộng lớn nhất).',
      'Lượng nước bị giới hạn bởi cột **thấp hơn**. Di chuyển cột cao hơn vào trong chỉ làm hẹp đi mà chiều cao không thể tăng → luôn di chuyển cột thấp hơn.'
    ],
    tests: [
      { args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
      { args: [[1, 1]], expected: 1 },
      { args: [[4, 3, 2, 1, 4]], expected: 16 },
      { args: [[1, 2, 1]], expected: 2 },
      { gen: 'return [Array.from({ length: 100000 }, (_, i) => (i % 2 ? 1 : 10000))];', label: 'n = 100.000', expected: 999980000 }
    ]
  },
  {
    id: 'three-sum',
    title: '3Sum',
    difficulty: 'medium',
    fn: 'threeSum',
    compare: 'unordered-deep',
    prompt: `
Tìm mọi bộ ba **khác nhau** \`[a, b, c]\` trong \`nums\` (ba chỉ số khác nhau) sao cho \`a + b + c = 0\`. Không trả về bộ ba trùng lặp. Thứ tự không quan trọng.

\`threeSum([-1,0,1,2,-1,-4])\` → \`[[-1,-1,2],[-1,0,1]]\`

Ràng buộc \`n <= 3000\` → O(n²) là đủ, O(n³) thì không.
`,
    starter: `
function threeSum(nums) {

}
`,
    solution: `
function threeSum(nums) {
  const a = [...nums].sort((x, y) => x - y);
  const result = [];
  for (let i = 0; i < a.length - 2; i++) {
    if (a[i] > 0) break;
    if (i > 0 && a[i] === a[i - 1]) continue;
    let left = i + 1;
    let right = a.length - 1;
    while (left < right) {
      const sum = a[i] + a[left] + a[right];
      if (sum === 0) {
        result.push([a[i], a[left], a[right]]);
        left++;
        right--;
        while (left < right && a[left] === a[left - 1]) left++;
        while (left < right && a[right] === a[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
`,
    hints: [
      'Sort mảng. Cố định phần tử thứ nhất `a[i]`, bài toán còn lại là "Two Sum trên mảng đã sắp xếp" với target `-a[i]`.',
      'Tránh trùng: bỏ qua `i` nếu `a[i] === a[i-1]`; sau khi tìm thấy một bộ, dịch `left`/`right` qua các giá trị trùng.'
    ],
    explain: 'O(n²) thời gian (sort O(n log n) không đáng kể), O(1) bộ nhớ thêm ngoài kết quả. Phần khó nhất của bài là **khử trùng lặp** đúng — nhiều ứng viên dùng Set chứa chuỗi `JSON.stringify` cho nhanh, chạy được nhưng tốn bộ nhớ và người phỏng vấn sẽ hỏi cách làm sạch hơn.',
    tests: [
      { args: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
      { args: [[0, 1, 1]], expected: [] },
      { args: [[0, 0, 0, 0]], expected: [[0, 0, 0]] },
      { args: [[-2, 0, 1, 1, 2]], expected: [[-2, 0, 2], [-2, 1, 1]] },
      { gen: 'return [Array.from({ length: 3000 }, (_, i) => (i % 2 ? i : -i))];', check: 'return Array.isArray(result) && result.every((t) => t.length === 3 && t[0] + t[1] + t[2] === 0) && new Set(result.map((t) => [...t].sort((x, y) => x - y).join(","))).size === result.length;', label: 'n = 3000 — cần O(n²)', expectedText: 'các bộ ba tổng 0, không trùng' }
    ]
  }
];
