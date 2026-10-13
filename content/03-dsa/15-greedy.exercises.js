module.exports = [
  {
    id: 'best-time-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'easy',
    fn: 'maxProfit',
    prompt: `
\`prices[i]\` là giá cổ phiếu ngày i. Mua **một lần** rồi bán **một lần** vào một ngày **sau** đó. Lãi lớn nhất là bao nhiêu (không lãi thì 0)? n ≤ 10^5. (LeetCode 121)
`,
    starter: `
function maxProfit(prices) {

}
`,
    solution: `
function maxProfit(prices) {
  let minPrice = Infinity;
  let best = 0;
  for (const p of prices) {
    if (p < minPrice) minPrice = p;
    else if (p - minPrice > best) best = p - minPrice;
  }
  return best;
}
`,
    hints: ['Duyệt một lần, nhớ giá thấp nhất đã thấy. Mỗi ngày tính lãi nếu bán hôm đó.'],
    tests: [
      { args: [[7, 1, 5, 3, 6, 4]], expected: 5 },
      { args: [[7, 6, 4, 3, 1]], expected: 0 },
      { args: [[2, 4, 1]], expected: 2 },
      { args: [[1]], expected: 0 },
      { gen: 'return [Array.from({ length: 100000 }, (_, i) => 100000 - i).concat([100001])];', label: 'n = 100.001, giảm dần rồi tăng vọt', expected: 100000 }
    ]
  },
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray (Kadane)',
    difficulty: 'medium',
    fn: 'maxSubArray',
    prompt: `
Tìm tổng lớn nhất của một **đoạn con liên tiếp khác rỗng**. n ≤ 10^5. (LeetCode 53)
`,
    starter: `
function maxSubArray(nums) {

}
`,
    solution: `
function maxSubArray(nums) {
  let current = nums[0];
  let best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    if (current > best) best = current;
  }
  return best;
}
`,
    hints: [
      'Tại mỗi phần tử: nối vào đoạn đang xét, hay bắt đầu đoạn mới từ đây? `current = max(x, current + x)`.',
      'Khởi tạo bằng `nums[0]` (không phải 0) để đúng khi mọi số đều âm.'
    ],
    followUp: 'Mở rộng: trả về luôn **vị trí bắt đầu và kết thúc** của đoạn. Và nếu mảng là **vòng tròn** (LeetCode 918) thì sao?',
    tests: [
      { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
      { args: [[1]], expected: 1 },
      { args: [[5, 4, -1, 7, 8]], expected: 23 },
      { args: [[-3, -1, -2]], expected: -1 },
      { gen: 'return [Array.from({ length: 100000 }, (_, i) => (i % 3 === 0 ? -1 : 2))];', label: 'n = 100.000', expected: 100000 }
    ]
  },
  {
    id: 'jump-game',
    title: 'Jump Game',
    difficulty: 'medium',
    fn: 'canJump',
    prompt: `
Đứng ở chỉ số 0; \`nums[i]\` là bước nhảy **tối đa** từ vị trí i. Có tới được chỉ số cuối không? n ≤ 10^5. (LeetCode 55)
`,
    starter: `
function canJump(nums) {

}
`,
    solution: `
function canJump(nums) {
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false;
    reach = Math.max(reach, i + nums[i]);
    if (reach >= nums.length - 1) return true;
  }
  return true;
}
`,
    hints: [
      'Giữ `reach` = chỉ số xa nhất có thể tới được cho đến lúc này.',
      'Nếu đang đứng ở `i > reach` → kẹt. Ngược lại cập nhật `reach = max(reach, i + nums[i])`.'
    ],
    tests: [
      { args: [[2, 3, 1, 1, 4]], expected: true },
      { args: [[3, 2, 1, 0, 4]], expected: false },
      { args: [[0]], expected: true },
      { args: [[0, 1]], expected: false },
      { gen: 'const a = new Array(100000).fill(1); a[50000] = 0; return [a];', label: 'n = 100.000, có một số 0 chặn đường', expected: false }
    ]
  },
  {
    id: 'non-overlapping-meetings',
    title: 'Xếp nhiều cuộc họp nhất',
    difficulty: 'medium',
    fn: 'maxMeetings',
    prompt: `
Mỗi cuộc họp là \`[start, end]\`. Chọn được **nhiều cuộc họp nhất** sao cho không có hai cuộc nào chồng nhau (cuộc này kết thúc đúng lúc cuộc kia bắt đầu thì **được**).
`,
    starter: `
function maxMeetings(meetings) {

}
`,
    solution: `
function maxMeetings(meetings) {
  const sorted = [...meetings].sort((a, b) => a[1] - b[1]);
  let count = 0;
  let lastEnd = -Infinity;
  for (const [start, end] of sorted) {
    if (start >= lastEnd) {
      count++;
      lastEnd = end;
    }
  }
  return count;
}
`,
    hints: [
      'Sort theo giờ **kết thúc** tăng dần.',
      'Duyệt và chọn cuộc họp nếu nó bắt đầu sau (hoặc đúng lúc) cuộc họp đã chọn gần nhất kết thúc.'
    ],
    followUp: 'Hãy tìm phản ví dụ cho thấy sort theo giờ bắt đầu, hoặc theo độ dài ngắn nhất, đều cho kết quả sai.',
    tests: [
      { args: [[[1, 2], [2, 3], [3, 4], [1, 3]]], expected: 3 },
      { args: [[[1, 10], [2, 3], [4, 5]]], expected: 2 },
      { args: [[[1, 4], [3, 5], [4, 8], [5, 6]]], expected: 2 },
      { args: [[]], expected: 0 },
      { args: [[[5, 9], [1, 3], [3, 5], [0, 7]]], expected: 3 }
    ]
  }
];
