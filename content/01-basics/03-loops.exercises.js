module.exports = [
  {
    id: 'sum-to-n',
    title: 'Tổng từ 1 đến n',
    difficulty: 'easy',
    fn: 'sumTo',
    prompt: `
Viết \`sumTo(n)\` trả về \`1 + 2 + ... + n\`. Với \`n <= 0\` trả về \`0\`.
`,
    starter: `
function sumTo(n) {
  let total = 0;
  // dùng vòng lặp
  return total;
}
`,
    solution: `
function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
`,
    hints: ['Vòng `for (let i = 1; i <= n; i++)` và cộng dồn `total += i`.'],
    explain: 'Vòng lặp chạy n lần → O(n). Còn có công thức Gauss `n * (n + 1) / 2` chạy O(1). Trong phỏng vấn, viết bản dễ đúng trước, rồi đề xuất cải tiến — người phỏng vấn đánh giá cao việc bạn **nhận ra** có cách tốt hơn.',
    followUp: 'Công thức `n * (n + 1) / 2` nhanh hơn, nhưng với n rất lớn (≈ 10^8) thì `n * (n + 1)` có vượt `MAX_SAFE_INTEGER` không? Còn vòng lặp thì sao?',
    tests: [
      { args: [1], expected: 1 },
      { args: [5], expected: 15 },
      { args: [100], expected: 5050 },
      { args: [0], expected: 0 },
      { args: [-3], expected: 0 }
    ]
  },
  {
    id: 'fizzbuzz-list',
    title: 'FizzBuzz đến n',
    difficulty: 'easy',
    fn: 'fizzBuzz',
    prompt: `
Viết \`fizzBuzz(n)\` trả về **mảng** gồm kết quả FizzBuzz cho các số từ 1 đến n (luật như bài trước).

Ví dụ \`fizzBuzz(5)\` → \`["1", "2", "Fizz", "4", "Buzz"]\`.
`,
    starter: `
function fizzBuzz(n) {
  const result = [];

  return result;
}
`,
    solution: `
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}
`,
    hints: ['Thêm phần tử vào cuối mảng bằng `result.push(x)`.'],
    tests: [
      { args: [5], expected: ['1', '2', 'Fizz', '4', 'Buzz'] },
      { args: [15], expected: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'] },
      { args: [1], expected: ['1'] },
      { args: [0], expected: [] }
    ]
  },
  {
    id: 'count-digits',
    title: 'Đếm chữ số',
    difficulty: 'easy',
    fn: 'countDigits',
    prompt: `
Viết \`countDigits(n)\` trả về số chữ số của số nguyên \`n\` **không dùng chuyển sang chuỗi** (dùng phép chia). Lưu ý: \`countDigits(0)\` là 1, và số âm thì bỏ dấu (\`countDigits(-123)\` là 3).
`,
    starter: `
function countDigits(n) {

}
`,
    solution: `
function countDigits(n) {
  n = Math.abs(n);
  if (n === 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
`,
    hints: [
      'Mỗi lần `Math.floor(n / 10)` bỏ đi một chữ số cuối.',
      'Hai trường hợp đặc biệt: `0` (vòng while không chạy lần nào) và số âm (`Math.abs`).'
    ],
    followUp: '`String(Math.abs(n)).length` ngắn hơn nhiều. Vậy tại sao người phỏng vấn lại hay cấm cách đó? Họ muốn kiểm tra kỹ năng gì?',
    tests: [
      { args: [12345], expected: 5 },
      { args: [7], expected: 1 },
      { args: [0], expected: 1 },
      { args: [-123], expected: 3 },
      { args: [1000000], expected: 7 }
    ]
  },
  {
    id: 'is-prime',
    title: 'Số nguyên tố',
    difficulty: 'medium',
    fn: 'isPrime',
    prompt: `
Viết \`isPrime(n)\` trả về \`true\` nếu \`n\` là số nguyên tố (chỉ chia hết cho 1 và chính nó, \`n >= 2\`).

Bộ test có số rất lớn (khoảng 10^12), nên duyệt tất cả số từ 2 đến n-1 sẽ **quá thời gian**.
`,
    starter: `
function isPrime(n) {

}
`,
    solution: `
function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
`,
    hints: [
      'Nếu n = a × b với a ≤ b thì a ≤ √n. Vậy chỉ cần thử các ước đến √n.',
      'Điều kiện vòng lặp `i * i <= n` tránh phải gọi `Math.sqrt` và tránh sai số làm tròn.',
      'Bỏ qua số chẵn: xử lý riêng 2, rồi chỉ thử i = 3, 5, 7, ...'
    ],
    explain: 'Duyệt đến √n đưa độ phức tạp từ O(n) xuống O(√n): với n = 10^12, từ 10^12 bước (vài phút) xuống 10^6 bước (vài ms). Đây là ví dụ đầu tiên cho thấy **suy luận toán học nhỏ** đổi được thời gian chạy khổng lồ.',
    followUp: 'Nếu phải kiểm tra nguyên tố cho **tất cả** số từ 1 đến 10^6, gọi `isPrime` 10^6 lần có tối ưu không? Tìm hiểu "Sàng Eratosthenes" và so sánh độ phức tạp.',
    tests: [
      { args: [2], expected: true },
      { args: [17], expected: true },
      { args: [1], expected: false },
      { args: [0], expected: false },
      { args: [15], expected: false },
      { args: [97], expected: true },
      { args: [-7], expected: false },
      { args: [25], expected: false },
      { args: [999962000357], expected: false, label: '999962000357 = 999983 × 999979' },
      { args: [1000000000039], expected: true, hidden: true, label: 'Số nguyên tố ~10^12 — cần O(√n)' }
    ]
  }
];
