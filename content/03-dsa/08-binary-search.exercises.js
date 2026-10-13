module.exports = [
  {
    id: 'binary-search-basic',
    title: 'Binary Search',
    difficulty: 'easy',
    fn: 'search',
    prompt: `
\`nums\` sắp xếp tăng dần, các phần tử khác nhau. Trả về chỉ số của \`target\`, hoặc \`-1\`. Phải O(log n) — test ẩn gọi hàm **100.000 lần** trên mảng 10^6 phần tử.
`,
    starter: `
function search(nums, target) {
  return nums.indexOf(target);
}
`,
    solution: `
function search(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
`,
    hints: ['Khuôn mẫu `while (lo <= hi)` trong bài học.'],
    tests: [
      { args: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
      { args: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
      { args: [[5], 5], expected: 0 },
      { args: [[], 1], expected: -1 },
      { args: [[1, 2], 2], expected: 1 },
      { hidden: true, code: 'const a = Array.from({ length: 1000000 }, (_, i) => i * 2); let s = 0; for (let q = 0; q < 100000; q++) s += search(a, 1999998 - q * 2); return s;', label: '100.000 lần tìm trên mảng 10^6', expected: 94999950000 }
    ]
  },
  {
    id: 'search-insert',
    title: 'Vị trí chèn',
    difficulty: 'easy',
    fn: 'searchInsert',
    prompt: `
\`nums\` sắp xếp tăng dần (có thể có phần tử **trùng**). Trả về chỉ số **đầu tiên** \`i\` sao cho \`nums[i] >= target\` (nếu không có, trả về \`nums.length\`) — chính là vị trí chèn \`target\` để mảng vẫn sắp xếp.
`,
    starter: `
function searchInsert(nums, target) {

}
`,
    solution: `
function searchInsert(nums, target) {
  let lo = 0;
  let hi = nums.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
`,
    hints: ['Đây là "lower bound". Dùng khoảng nửa mở `[lo, hi)` với `hi = nums.length`.'],
    tests: [
      { args: [[1, 3, 5, 6], 5], expected: 2 },
      { args: [[1, 3, 5, 6], 2], expected: 1 },
      { args: [[1, 3, 5, 6], 7], expected: 4 },
      { args: [[1, 3, 5, 6], 0], expected: 0 },
      { args: [[2, 4, 4, 4, 8], 4], expected: 1 },
      { args: [[], 3], expected: 0 }
    ]
  },
  {
    id: 'sqrt-x',
    title: 'Căn bậc hai nguyên',
    difficulty: 'easy',
    fn: 'mySqrt',
    prompt: `
Trả về phần nguyên của căn bậc hai của \`x\` (\`0 <= x <= 2^31 - 1\`). Không dùng \`Math.sqrt\` hay \`**\`.
`,
    starter: `
function mySqrt(x) {

}
`,
    solution: `
function mySqrt(x) {
  let lo = 0;
  let hi = x;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (mid * mid <= x) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}
`,
    hints: [
      'Binary search trên đáp án: tìm `m` lớn nhất với `m * m <= x`.',
      'Khi cập nhật `lo = mid`, phải làm tròn `mid` **lên** (`Math.ceil`) để tránh vòng lặp vô hạn.'
    ],
    tests: [
      { args: [4], expected: 2 },
      { args: [8], expected: 2 },
      { args: [0], expected: 0 },
      { args: [1], expected: 1 },
      { args: [2147395599], expected: 46339 },
      { args: [2147483647], expected: 46340 }
    ]
  },
  {
    id: 'search-rotated',
    title: 'Tìm trong mảng xoay',
    difficulty: 'medium',
    fn: 'searchRotated',
    prompt: `
Mảng tăng dần (phần tử khác nhau) đã bị **xoay** tại một điểm chưa biết, VD \`[0,1,2,4,5,6,7]\` → \`[4,5,6,7,0,1,2]\`. Tìm chỉ số của \`target\` hoặc \`-1\`, trong O(log n). (LeetCode 33)
`,
    starter: `
function searchRotated(nums, target) {

}
`,
    solution: `
function searchRotated(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[lo] <= nums[mid]) {
      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  return -1;
}
`,
    hints: [
      'Tại mỗi `mid`, **ít nhất một nửa** `[lo, mid]` hoặc `[mid, hi]` là đoạn đã sắp xếp bình thường.',
      'Nếu `nums[lo] <= nums[mid]` thì nửa trái đã sắp xếp: kiểm tra target có nằm trong `[nums[lo], nums[mid])` không để quyết định đi trái hay phải. Ngược lại xét nửa phải.'
    ],
    tests: [
      { args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
      { args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
      { args: [[1], 0], expected: -1 },
      { args: [[3, 1], 1], expected: 1 },
      { args: [[5, 1, 3], 5], expected: 0 },
      { args: [[6, 7, 1, 2, 3, 4, 5], 7], expected: 1 }
    ]
  },
  {
    id: 'koko-bananas',
    title: 'Koko ăn chuối',
    difficulty: 'medium',
    fn: 'minEatingSpeed',
    prompt: `
Có \`piles[i]\` quả chuối ở đống thứ i. Mỗi giờ Koko chọn **một** đống và ăn tối đa \`k\` quả (đống ít hơn k thì ăn hết và nghỉ đến hết giờ đó). Tìm \`k\` **nhỏ nhất** để ăn hết trong \`h\` giờ. (LeetCode 875)

\`piles.length <= 10^4\`, \`piles[i] <= 10^9\`.
`,
    starter: `
function minEatingSpeed(piles, h) {

}
`,
    solution: `
function minEatingSpeed(piles, h) {
  const hoursNeeded = (k) => {
    let hours = 0;
    for (const p of piles) hours += Math.ceil(p / k);
    return hours;
  };
  let lo = 1;
  let hi = 0;
  for (const p of piles) if (p > hi) hi = p;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (hoursNeeded(mid) <= h) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
`,
    hints: [
      'Với một tốc độ `k` cụ thể, số giờ cần = tổng `Math.ceil(p / k)`. Tốc độ càng lớn, giờ càng ít → **đơn điệu**.',
      'Binary search `k` trong `[1, max(piles)]`: tìm k nhỏ nhất mà số giờ cần ≤ h.'
    ],
    explain: 'O(n log M) với M = max(piles). Thử từng k từ 1 trở lên là O(n·M) — với M = 10^9 thì không bao giờ xong. Đây là ví dụ điển hình của "binary search on answer".',
    tests: [
      { args: [[3, 6, 7, 11], 8], expected: 4 },
      { args: [[30, 11, 23, 4, 20], 5], expected: 30 },
      { args: [[30, 11, 23, 4, 20], 6], expected: 23 },
      { args: [[1000000000], 2], expected: 500000000 },
      { args: [[312884470], 312884469], expected: 2 }
    ]
  }
];
