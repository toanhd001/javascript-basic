module.exports = [
  {
    id: 'max-avg-subarray',
    title: 'Trung bình lớn nhất của k phần tử',
    difficulty: 'easy',
    fn: 'findMaxAverage',
    compare: 'float',
    prompt: `
Tìm đoạn con liên tiếp độ dài đúng \`k\` có **trung bình lớn nhất**, trả về giá trị trung bình đó. Ràng buộc \`n <= 10^5\`.
`,
    starter: `
function findMaxAverage(nums, k) {

}
`,
    solution: `
function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  let best = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    if (sum > best) best = sum;
  }
  return best / k;
}
`,
    hints: ['Trung bình lớn nhất ⇔ tổng lớn nhất (k cố định). Cửa sổ cố định: thêm `nums[i]`, bỏ `nums[i - k]`.'],
    tests: [
      { args: [[1, 12, -5, -6, 50, 3], 4], expected: 12.75 },
      { args: [[5], 1], expected: 5 },
      { args: [[-1, -2, -3], 2], expected: -1.5 },
      { gen: 'return [Array.from({ length: 100000 }, (_, i) => i % 1000), 50000];', label: 'n = 100.000, k = 50.000', expected: 499.5 }
    ]
  },
  {
    id: 'longest-substring-no-repeat',
    title: 'Chuỗi con dài nhất không lặp ký tự',
    difficulty: 'medium',
    fn: 'lengthOfLongestSubstring',
    prompt: `
Trả về độ dài chuỗi con **liên tiếp** dài nhất không có ký tự nào lặp lại.

\`"abcabcbb"\` → \`3\` (\`"abc"\`), \`"pwwkew"\` → \`3\` (\`"wke"\`). (LeetCode 3)
`,
    starter: `
function lengthOfLongestSubstring(s) {

}
`,
    solution: `
function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = lastSeen.get(ch) + 1;
    }
    lastSeen.set(ch, right);
    best = Math.max(best, right - left + 1);
  }
  return best;
}
`,
    hints: [
      'Cửa sổ `[left, right]` luôn không có ký tự lặp. Thêm `s[right]`; nếu nó đã có trong cửa sổ thì co `left` lại.',
      'Cách 1: `Set` + `while (set.has(ch)) set.delete(s[left++])`.',
      'Cách 2 (nhảy thẳng): lưu `lastSeen[ch]` = vị trí gần nhất; nếu `lastSeen[ch] >= left` thì `left = lastSeen[ch] + 1`.'
    ],
    explain: 'O(n) thời gian, O(số ký tự khác nhau) bộ nhớ. Điều kiện `lastSeen.get(ch) >= left` rất quan trọng: vị trí cũ nằm **ngoài** cửa sổ thì không được kéo `left` lùi lại (thử "abba").',
    tests: [
      { args: ['abcabcbb'], expected: 3 },
      { args: ['bbbbb'], expected: 1 },
      { args: ['pwwkew'], expected: 3 },
      { args: [''], expected: 0 },
      { args: ['abba'], expected: 2 },
      { args: [' '], expected: 1 },
      { gen: 'const chars = []; for (let i = 0; i < 50000; i++) chars.push(String.fromCharCode(0x100 + i)); return [chars.join("") + chars.join("")];', label: 'n = 100.000, 50.000 ký tự khác nhau — vét cạn O(n²) sẽ quá thời gian', expected: 50000 }
    ]
  },
  {
    id: 'min-subarray-len',
    title: 'Đoạn con ngắn nhất có tổng ≥ target',
    difficulty: 'medium',
    fn: 'minSubArrayLen',
    prompt: `
Cho mảng số **nguyên dương** \`nums\` và \`target\`. Trả về độ dài nhỏ nhất của đoạn con liên tiếp có tổng **≥ target**; không có thì trả về \`0\`.

\`minSubArrayLen(7, [2,3,1,2,4,3])\` → \`2\` (\`[4,3]\`)
`,
    starter: `
function minSubArrayLen(target, nums) {

}
`,
    solution: `
function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let best = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      best = Math.min(best, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return best === Infinity ? 0 : best;
}
`,
    hints: [
      'Mở rộng `right` để tăng tổng. Khi tổng đã ≥ target, ghi nhận đáp án rồi co `left` để thử ngắn hơn.',
      'Khởi tạo `best = Infinity` và đổi thành 0 nếu không tìm thấy.'
    ],
    tests: [
      { args: [7, [2, 3, 1, 2, 4, 3]], expected: 2 },
      { args: [4, [1, 4, 4]], expected: 1 },
      { args: [11, [1, 1, 1, 1, 1, 1, 1, 1]], expected: 0 },
      { args: [15, [1, 2, 3, 4, 5]], expected: 5 },
      { gen: 'const a = new Array(100000).fill(1); a[99999] = 50000; return [100000, a];', label: 'n = 100.000', expected: 50001 }
    ]
  }
];
