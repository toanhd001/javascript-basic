module.exports = [
  {
    id: 'contains-duplicate',
    title: 'Có phần tử trùng không?',
    difficulty: 'easy',
    fn: 'containsDuplicate',
    prompt: `
Viết \`containsDuplicate(nums)\` trả về \`true\` nếu có giá trị xuất hiện ít nhất hai lần.

Ràng buộc: \`1 <= nums.length <= 2·10^5\`. Hãy đọc ràng buộc và chọn độ phức tạp phù hợp trước khi code.
`,
    starter: `
function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}
`,
    solution: `
function containsDuplicate(nums) {
  const seen = new Set();
  for (const x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}
`,
    hints: [
      'n = 2·10^5 → O(n²) là 2·10^10 bước, chắc chắn quá thời gian.',
      'Dùng `Set`: gặp lại giá trị đã có trong Set thì return true.',
      'Cách khác: sort rồi so sánh các phần tử kề nhau — O(n log n), O(1) bộ nhớ thêm (nếu được sửa input).'
    ],
    explain: '`Set`: O(n) thời gian, O(n) bộ nhớ. Sort: O(n log n) thời gian, bộ nhớ ít hơn nhưng làm thay đổi input. Không có lời giải "tốt nhất tuyệt đối" — chỉ có lựa chọn phù hợp ràng buộc.',
    followUp: 'Người phỏng vấn nói: "bộ nhớ rất hạn chế, không được dùng thêm O(n)". Bạn chọn cách nào? Nếu thêm "và không được sửa mảng input" thì sao?',
    tests: [
      { args: [[1, 2, 3, 1]], expected: true },
      { args: [[1, 2, 3, 4]], expected: false },
      { args: [[1]], expected: false },
      { args: [[0, 0]], expected: true },
      { gen: 'return [Array.from({ length: 200000 }, (_, i) => i * 3)];', label: 'n = 200.000, không có phần tử trùng', expected: false },
      { gen: 'const a = Array.from({ length: 200000 }, (_, i) => i); a[199999] = 0; return [a];', label: 'n = 200.000, cặp trùng nằm ở hai đầu', expected: true }
    ]
  },
  {
    id: 'count-pairs',
    title: 'Đếm cặp có tổng bằng k',
    difficulty: 'medium',
    fn: 'countPairs',
    prompt: `
Viết \`countPairs(nums, k)\` đếm số cặp chỉ số \`(i, j)\` với \`i < j\` và \`nums[i] + nums[j] === k\`.

Ràng buộc: \`n <= 10^5\`. Kết quả có thể lên tới ~5·10^9 (vẫn an toàn với number).
`,
    starter: `
function countPairs(nums, k) {

}
`,
    solution: `
function countPairs(nums, k) {
  const seen = new Map();
  let count = 0;
  for (const x of nums) {
    count += seen.get(k - x) || 0;
    seen.set(x, (seen.get(x) || 0) + 1);
  }
  return count;
}
`,
    hints: [
      'Duyệt từ trái sang phải. Với mỗi `x`, số cặp mà `x` là phần tử **thứ hai** = số lần `k - x` đã xuất hiện **trước đó**.',
      'Giữ một `Map` đếm tần suất các giá trị đã gặp. Cập nhật Map **sau** khi cộng để không ghép `x` với chính nó.'
    ],
    explain: 'Mẹo "nhìn về phía trước": thay vì tìm cặp (i, j) bằng hai vòng lặp, ta đứng ở j và hỏi "có bao nhiêu i < j phù hợp?" — câu trả lời nằm sẵn trong hash map. Mẫu này là nền tảng của Two Sum, Subarray Sum Equals K...',
    tests: [
      { args: [[1, 5, 7, -1], 6], expected: 2 },
      { args: [[1, 1, 1, 1], 2], expected: 6 },
      { args: [[1, 2, 3], 10], expected: 0 },
      { args: [[3], 6], expected: 0 },
      { gen: 'return [Array.from({ length: 100000 }, () => 5), 10];', label: 'n = 100.000 số 5, k = 10', expected: 4999950000 }
    ]
  }
];
