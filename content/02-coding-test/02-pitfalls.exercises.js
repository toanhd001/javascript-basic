module.exports = [
  {
    id: 'max-huge',
    title: 'Max của mảng khổng lồ',
    difficulty: 'easy',
    fn: 'arrayMax',
    prompt: `
Viết \`arrayMax(nums)\` trả về phần tử lớn nhất (mảng khác rỗng). Test ẩn có mảng **1.000.000** phần tử.
`,
    starter: `
function arrayMax(nums) {
  return Math.max(...nums);
}
`,
    solution: `
function arrayMax(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return max;
}
`,
    hints: ['Chạy test để thấy lỗi với mảng lớn. Thay bằng vòng lặp.'],
    tests: [
      { args: [[3, 9, 2]], expected: 9 },
      { args: [[-5, -2, -9]], expected: -2 },
      { gen: 'return [Array.from({ length: 1000000 }, (_, i) => (i * 7919) % 1000003)];', label: '1.000.000 phần tử', expected: 1000002 }
    ]
  },
  {
    id: 'mod-pow',
    title: 'Luỹ thừa modulo',
    difficulty: 'medium',
    fn: 'modPow',
    prompt: `
Viết \`modPow(base, exp)\` trả về \`base^exp mod (10^9 + 7)\` dưới dạng **number**. \`0 <= base < 10^9+7\`, \`0 <= exp <= 10^18\` (exp được truyền vào dạng **chuỗi** vì quá lớn).

Cần thuật toán **O(log exp)** (luỹ thừa nhanh) và cẩn thận với tràn số khi nhân.
`,
    starter: `
function modPow(base, exp) {
  const MOD = 1000000007;
  let result = 1;
  for (let i = 0; i < Number(exp); i++) {
    result = (result * base) % MOD;
  }
  return result;
}
`,
    solution: `
function modPow(base, exp) {
  const MOD = 1000000007n;
  let b = BigInt(base) % MOD;
  let e = BigInt(exp);
  let result = 1n;
  while (e > 0n) {
    if (e & 1n) result = (result * b) % MOD;
    b = (b * b) % MOD;
    e >>= 1n;
  }
  return Number(result);
}
`,
    hints: [
      'Code có sẵn có **hai** vấn đề: chậm (O(exp)) và `result * base` có thể vượt 2^53.',
      'Luỹ thừa nhanh: a^e = (a^(e/2))² nếu e chẵn, = a · a^(e−1) nếu e lẻ. Duyệt các bit của e.',
      'Dùng BigInt cho mọi phép tính: `1000000007n`, `BigInt(exp)`, `e & 1n`, `e >>= 1n`. Cuối cùng `Number(result)`.'
    ],
    explain: 'Luỹ thừa nhanh (binary exponentiation) chỉ cần ~60 vòng với exp = 10^18. Với `number`, tích hai số < 10^9+7 lên tới ~10^18 — vượt 2^53 nên mất chính xác; BigInt giải quyết triệt để (chậm hơn number vài lần nhưng vẫn rất nhanh ở đây).',
    followUp: 'BigInt chậm hơn number. Nếu phải thực hiện 10^7 phép nhân modulo, bạn có cách nào giữ `number` mà vẫn đúng? (Tìm hiểu: tách số thành phần cao/thấp 16 bit, hoặc `Math.imul`-style.)',
    tests: [
      { args: [2, '10'], expected: 1024 },
      { args: [3, '0'], expected: 1 },
      { args: [999999999, '2'], expected: 64 },
      { args: [2, '1000000006'], expected: 1 },
      { args: [123456789, '1000000000000000000'], expected: 228100152, hidden: true, label: 'exp = 10^18' }
    ]
  },
  {
    id: 'big-factorial',
    title: 'Giai thừa số lớn',
    difficulty: 'easy',
    fn: 'factorial',
    prompt: `
Viết \`factorial(n)\` trả về \`n!\` dưới dạng **chuỗi** chữ số chính xác (0 ≤ n ≤ 100). \`25!\` đã vượt xa \`Number.MAX_SAFE_INTEGER\`.
`,
    starter: `
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return String(result);
}
`,
    solution: `
function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) result *= i;
  return result.toString();
}
`,
    hints: ['Dùng BigInt: `let result = 1n;` và nhân với `BigInt(i)`.'],
    tests: [
      { args: [0], expected: '1' },
      { args: [5], expected: '120' },
      { args: [20], expected: '2432902008176640000' },
      { args: [25], expected: '15511210043330985984000000' },
      { args: [30], expected: '265252859812191058636308480000000' }
    ]
  },
  {
    id: 'safe-modulo',
    title: 'Chỉ số vòng tròn',
    difficulty: 'easy',
    fn: 'circularGet',
    prompt: `
Cho mảng \`arr\` coi như **vòng tròn**. Viết \`circularGet(arr, i)\` trả về phần tử ở vị trí \`i\`, với \`i\` có thể **âm** hoặc **lớn hơn độ dài** (\`-1\` là phần tử cuối, \`arr.length\` quay về phần tử đầu).
`,
    starter: `
function circularGet(arr, i) {
  return arr[i % arr.length];
}
`,
    solution: `
function circularGet(arr, i) {
  const n = arr.length;
  return arr[((i % n) + n) % n];
}
`,
    hints: ['`-1 % 5` là `-1` trong JS. Chuẩn hoá: `((i % n) + n) % n`.'],
    tests: [
      { args: [['a', 'b', 'c'], 1], expected: 'b' },
      { args: [['a', 'b', 'c'], 3], expected: 'a' },
      { args: [['a', 'b', 'c'], -1], expected: 'c' },
      { args: [['a', 'b', 'c'], -7], expected: 'c' },
      { args: [['a', 'b', 'c'], 100], expected: 'b' }
    ]
  }
];
