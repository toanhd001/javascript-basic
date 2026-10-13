module.exports = [
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'easy',
    fn: 'isValid',
    prompt: `
Chuỗi \`s\` chỉ gồm \`()[]{}\`. Trả về \`true\` nếu mọi ngoặc mở được đóng **đúng loại** và **đúng thứ tự**. (LeetCode 20)
`,
    starter: `
function isValid(s) {

}
`,
    solution: `
function isValid(s) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (const ch of s) {
    if (ch in pairs) {
      if (stack.pop() !== pairs[ch]) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}
`,
    hints: [
      'Gặp ngoặc mở → push. Gặp ngoặc đóng → pop và kiểm tra có khớp loại không.',
      'Đừng quên: cuối chuỗi stack phải rỗng (VD `"(("`), và pop trên stack rỗng trả về `undefined`.'
    ],
    tests: [
      { args: ['()'], expected: true },
      { args: ['()[]{}'], expected: true },
      { args: ['(]'], expected: false },
      { args: ['([)]'], expected: false },
      { args: ['{[]}'], expected: true },
      { args: ['(('], expected: false },
      { args: ['))'], expected: false },
      { args: [''], expected: true }
    ]
  },
  {
    id: 'min-stack',
    title: 'Min Stack',
    difficulty: 'medium',
    prompt: `
Thiết kế class \`MinStack\` với mọi thao tác **O(1)**:
- \`push(x)\`, \`pop()\` (không cần trả về), \`top()\` (xem đỉnh)
- \`getMin()\`: phần tử nhỏ nhất hiện có trong stack
`,
    starter: `
class MinStack {
  constructor() {

  }
  push(x) {

  }
  pop() {

  }
  top() {

  }
  getMin() {

  }
}
`,
    solution: `
class MinStack {
  constructor() {
    this.stack = [];
    this.mins = [];
  }
  push(x) {
    this.stack.push(x);
    const currentMin = this.mins.length ? this.mins[this.mins.length - 1] : Infinity;
    this.mins.push(Math.min(x, currentMin));
  }
  pop() {
    this.stack.pop();
    this.mins.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.mins[this.mins.length - 1];
  }
}
`,
    hints: [
      'Tìm min bằng cách duyệt stack là O(n). Cần lưu sẵn thông tin min.',
      'Dùng stack thứ hai `mins`: `mins[i]` = min của các phần tử từ đáy đến vị trí i. Push/pop song song với stack chính.'
    ],
    explain: 'Mẹo: "min tại mỗi thời điểm" chỉ phụ thuộc vào các phần tử bên dưới, mà các phần tử đó không thay đổi cho đến khi bị pop. Vì vậy lưu min kèm theo từng tầng là đủ. Đổi O(n) bộ nhớ thêm lấy O(1) thời gian.',
    tests: [
      { code: 'const s = new MinStack(); s.push(-2); s.push(0); s.push(-3); const a = s.getMin(); s.pop(); return [a, s.top(), s.getMin()];', label: 'push -2, 0, -3; getMin; pop; top; getMin', expected: [-3, 0, -2] },
      { code: 'const s = new MinStack(); s.push(5); s.push(5); s.push(7); s.pop(); s.pop(); return s.getMin();', label: 'giá trị min trùng nhau', expected: 5 },
      { code: 'const s = new MinStack(); s.push(1); s.push(2); return [s.top(), s.getMin()];', label: 'min ở đáy', expected: [2, 1] },
      { hidden: true, code: 'const s = new MinStack(); for (let i = 200000; i > 0; i--) s.push(i); let t = 0; for (let i = 0; i < 199999; i++) { t += s.getMin(); s.pop(); } return t;', label: '200.000 thao tác — getMin phải O(1)', expected: 19999900000 }
    ]
  },
  {
    id: 'daily-temperatures',
    title: 'Daily Temperatures',
    difficulty: 'medium',
    fn: 'dailyTemperatures',
    prompt: `
\`temps[i]\` là nhiệt độ ngày i. Trả về mảng \`answer\` với \`answer[i]\` = số ngày phải chờ sau ngày i để có ngày **ấm hơn**; không có thì 0.

\`[73,74,75,71,69,72,76,73]\` → \`[1,1,4,2,1,1,0,0]\`. Ràng buộc \`n <= 10^5\`.
`,
    starter: `
function dailyTemperatures(temps) {

}
`,
    solution: `
function dailyTemperatures(temps) {
  const answer = new Array(temps.length).fill(0);
  const stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }
  return answer;
}
`,
    hints: [
      'Đây là "next greater element". Brute force O(n²) sẽ chậm với mảng giảm dần.',
      'Monotonic stack lưu **chỉ số** các ngày chưa tìm được ngày ấm hơn. Ngày mới ấm hơn đỉnh stack → pop và ghi `i - j`.'
    ],
    tests: [
      { args: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
      { args: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
      { args: [[30, 60, 90]], expected: [1, 1, 0] },
      { args: [[50]], expected: [0] },
      { gen: 'const a = Array.from({ length: 100000 }, (_, i) => 100000 - i); a.push(200000); return [a];', check: 'return result.length === 100001 && result[0] === 100000 && result[99999] === 1 && result[100000] === 0;', label: 'n = 100.000 giảm dần, ngày cuối nóng nhất', expectedText: '[100000, 99999, ..., 1, 0]' }
    ]
  },
  {
    id: 'eval-rpn',
    title: 'Tính biểu thức Ba Lan ngược',
    difficulty: 'medium',
    fn: 'evalRPN',
    prompt: `
Tính giá trị biểu thức ở dạng **ký pháp Ba Lan ngược** (toán tử đứng sau toán hạng). Toán tử: \`+ - * /\`; phép chia **làm tròn về 0** (\`Math.trunc\`).

\`["2","1","+","3","*"]\` → \`(2 + 1) * 3 = 9\`
`,
    starter: `
function evalRPN(tokens) {

}
`,
    solution: `
function evalRPN(tokens) {
  const stack = [];
  for (const t of tokens) {
    if (t === "+" || t === "-" || t === "*" || t === "/") {
      const b = stack.pop();
      const a = stack.pop();
      if (t === "+") stack.push(a + b);
      else if (t === "-") stack.push(a - b);
      else if (t === "*") stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}
`,
    hints: [
      'Số → push. Toán tử → pop hai số, tính, push kết quả.',
      'Thứ tự pop: phần tử pop **đầu tiên** là toán hạng **bên phải** (`b`), sau đó mới là `a`. Quan trọng với `-` và `/`.'
    ],
    tests: [
      { args: [['2', '1', '+', '3', '*']], expected: 9 },
      { args: [['4', '13', '5', '/', '+']], expected: 6 },
      { args: [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']], expected: 22 },
      { args: [['7', '-2', '/']], expected: -3 },
      { args: [['42']], expected: 42 }
    ]
  }
];
