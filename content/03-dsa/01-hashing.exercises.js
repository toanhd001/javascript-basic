module.exports = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'easy',
    fn: 'twoSum',
    prompt: `
Cho mảng \`nums\` và số \`target\`, trả về **chỉ số** của hai phần tử có tổng bằng \`target\` dưới dạng \`[i, j]\` với \`i < j\`. Đảm bảo có đúng một đáp án; không dùng một phần tử hai lần.

Ràng buộc: \`n <= 2·10^5\`. (LeetCode 1 — câu phỏng vấn nổi tiếng nhất thế giới.)
`,
    starter: `
function twoSum(nums, target) {

}
`,
    solution: `
function twoSum(nums, target) {
  const indexOf = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (indexOf.has(need)) return [indexOf.get(need), i];
    indexOf.set(nums[i], i);
  }
  return [];
}
`,
    hints: [
      'Brute force O(n²) sẽ không qua test ẩn. Với mỗi `nums[i]`, bạn cần biết nhanh `target - nums[i]` đã xuất hiện ở chỉ số nào.',
      'Map: giá trị → chỉ số. Kiểm tra trước, rồi mới thêm phần tử hiện tại vào Map.'
    ],
    explain: 'O(n) thời gian, O(n) bộ nhớ. Đáp án luôn có `i < j` vì chỉ số trong Map luôn là của phần tử đứng trước.',
    followUp: 'Người phỏng vấn hỏi tiếp: "Nếu mảng có 10^9 phần tử, không vừa bộ nhớ, thì sao?" Bạn sẽ đặt câu hỏi làm rõ nào? (Gợi ý: dữ liệu đã sort chưa, có lưu trên đĩa không, có thể chia nhỏ không.)',
    tests: [
      { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { args: [[3, 2, 4], 6], expected: [1, 2] },
      { args: [[3, 3], 6], expected: [0, 1] },
      { args: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
      { gen: 'const n = 200000; const a = Array.from({ length: n }, (_, i) => 10 + i * 2); a[n - 2] = 1; a[n - 1] = 4; return [a, 5];', label: 'n = 200.000, cặp đáp án ở cuối mảng', expected: [199998, 199999] }
    ]
  },
  {
    id: 'valid-anagram',
    title: 'Valid Anagram',
    difficulty: 'easy',
    fn: 'isAnagram',
    prompt: `
Hai chuỗi là **anagram** nếu chúng gồm cùng các ký tự với cùng số lần (chỉ khác thứ tự). Viết \`isAnagram(s, t)\`. Chuỗi chỉ gồm chữ thường a–z.

Hãy làm O(n), không sort.
`,
    starter: `
function isAnagram(s, t) {

}
`,
    solution: `
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }
  return count.every((c) => c === 0);
}
`,
    hints: [
      'Độ dài khác nhau → false ngay.',
      'Mảng đếm 26 ô: tăng theo ký tự của `s`, giảm theo ký tự của `t`. Cuối cùng mọi ô phải bằng 0.'
    ],
    followUp: 'Nếu chuỗi chứa **Unicode** bất kỳ (tiếng Việt có dấu, emoji) thì mảng 26 ô còn dùng được không? Bạn đổi sang gì, và cần chú ý gì khi duyệt ký tự?',
    tests: [
      { args: ['anagram', 'nagaram'], expected: true },
      { args: ['rat', 'car'], expected: false },
      { args: ['a', 'ab'], expected: false },
      { args: ['', ''], expected: true },
      { args: ['aacc', 'ccac'], expected: false }
    ]
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    difficulty: 'medium',
    fn: 'groupAnagrams',
    compare: 'unordered-deep',
    prompt: `
Nhóm các chuỗi là anagram của nhau. Thứ tự các nhóm và thứ tự trong mỗi nhóm **không quan trọng**.

\`groupAnagrams(["eat","tea","tan","ate","nat","bat"])\` → \`[["bat"],["nat","tan"],["ate","eat","tea"]]\`
`,
    starter: `
function groupAnagrams(strs) {

}
`,
    solution: `
function groupAnagrams(strs) {
  const groups = new Map();
  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }
  return [...groups.values()];
}
`,
    hints: [
      'Hai chuỗi là anagram ⇔ sau khi sort ký tự thì giống nhau. Dùng chuỗi đã sort làm key.',
      '`Map<key, string[]>`, cuối cùng `return [...groups.values()]`.'
    ],
    explain: 'O(n · k log k) với k là độ dài chuỗi dài nhất. Có thể đạt O(n · k) bằng key là mảng đếm 26 ô nối thành chuỗi (`count.join("#")`).',
    tests: [
      { args: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], expected: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']] },
      { args: [['']], expected: [['']] },
      { args: [['a']], expected: [['a']] },
      { args: [['abc', 'bca', 'xyz', 'cab', 'zyx', 'q']], expected: [['abc', 'bca', 'cab'], ['xyz', 'zyx'], ['q']] }
    ]
  },
  {
    id: 'top-k-frequent',
    title: 'Top K Frequent Elements',
    difficulty: 'medium',
    fn: 'topKFrequent',
    compare: 'unordered',
    prompt: `
Trả về \`k\` phần tử xuất hiện nhiều nhất (thứ tự kết quả không quan trọng; đảm bảo đáp án là duy nhất).

\`topKFrequent([1,1,1,2,2,3], 2)\` → \`[1, 2]\`

Thử thách: làm tốt hơn O(n log n).
`,
    starter: `
function topKFrequent(nums, k) {

}
`,
    solution: `
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const x of nums) freq.set(x, (freq.get(x) || 0) + 1);
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [value, f] of freq) buckets[f].push(value);
  const result = [];
  for (let f = buckets.length - 1; f >= 0 && result.length < k; f--) {
    for (const value of buckets[f]) {
      result.push(value);
      if (result.length === k) break;
    }
  }
  return result;
}
`,
    hints: [
      'Bước 1: đếm tần suất bằng Map.',
      'Cách dễ: sort các key theo tần suất giảm dần rồi lấy k cái đầu — O(n log n), vẫn qua test.',
      'Cách O(n): "bucket sort" — `buckets[f]` chứa các giá trị có tần suất f. Duyệt f từ n về 1.'
    ],
    explain: 'Bucket: O(n) thời gian và bộ nhớ. Heap kích thước k: O(n log k) — tốt khi dữ liệu là stream. Sort: O(n log n) — đơn giản nhất. Trong phỏng vấn, nêu cả ba và trade-off.',
    tests: [
      { args: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
      { args: [[1], 1], expected: [1] },
      { args: [[4, 4, 5, 5, 5, 6, 6, 6, 6], 2], expected: [5, 6] },
      { args: [[-1, -1, 2], 1], expected: [-1] }
    ]
  }
];
