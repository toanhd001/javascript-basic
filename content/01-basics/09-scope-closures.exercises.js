module.exports = [
  {
    id: 'counter-closure',
    title: 'Bộ đếm có reset',
    difficulty: 'easy',
    fn: 'createCounter',
    prompt: `
Viết \`createCounter(start)\` trả về object có 3 phương thức:
- \`increment()\`: tăng 1 và trả về giá trị mới
- \`decrement()\`: giảm 1 và trả về giá trị mới
- \`reset()\`: về lại \`start\` và trả về \`start\`

Giá trị hiện tại phải **private** — không truy cập trực tiếp được từ bên ngoài.
`,
    starter: `
function createCounter(start) {

}
`,
    solution: `
function createCounter(start) {
  let value = start;
  return {
    increment: () => ++value,
    decrement: () => --value,
    reset: () => (value = start)
  };
}
`,
    hints: [
      'Khai báo `let value = start;` bên trong `createCounter`, rồi return một object chứa 3 arrow function dùng `value`.',
      '`++value` tăng rồi trả về giá trị **mới**; `value++` trả về giá trị **cũ**.'
    ],
    tests: [
      { code: 'const c = createCounter(5); return [c.increment(), c.increment(), c.decrement()];', label: 'createCounter(5): increment, increment, decrement', expected: [6, 7, 6] },
      { code: 'const c = createCounter(0); c.increment(); c.increment(); return [c.reset(), c.increment()];', label: 'reset rồi increment', expected: [0, 1] },
      { code: 'const a = createCounter(0), b = createCounter(10); a.increment(); return [a.increment(), b.increment()];', label: 'hai counter độc lập', expected: [2, 11] },
      { code: 'const c = createCounter(3); return Object.values(c).every((v) => typeof v === "function");', label: 'object chỉ chứa phương thức (không lộ biến đếm)', expected: true }
    ]
  },
  {
    id: 'once',
    title: 'Hàm chỉ chạy một lần (once)',
    difficulty: 'easy',
    fn: 'once',
    prompt: `
Viết \`once(fn)\` trả về hàm mới: lần gọi **đầu tiên** sẽ gọi \`fn\` với các tham số được truyền và trả về kết quả; các lần sau **không gọi \`fn\` nữa** mà trả về kết quả của lần đầu.
`,
    starter: `
function once(fn) {

}
`,
    solution: `
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
`,
    hints: [
      'Cần hai biến trong closure: `called` (đã gọi chưa) và `result`.',
      'Dùng rest/spread để chuyển tiếp mọi tham số: `function (...args) { ... fn(...args) }`.'
    ],
    followUp: 'Tại sao cần biến `called` riêng mà không kiểm tra `result === undefined`? (Gợi ý: hàm `fn` trả về `undefined` thì sao?)',
    tests: [
      { code: 'let n = 0; const f = once(() => ++n); return [f(), f(), f(), n];', label: 'gọi 3 lần, fn chỉ chạy 1 lần', expected: [1, 1, 1, 1] },
      { code: 'const add = once((a, b) => a + b); return [add(2, 3), add(10, 10)];', label: 'giữ kết quả lần đầu', expected: [5, 5] },
      { code: 'let n = 0; const f = once(() => { n++; }); f(); f(); return n;', label: 'fn trả về undefined vẫn chỉ chạy 1 lần', expected: 1 }
    ]
  },
  {
    id: 'memoize',
    title: 'Memoize',
    difficulty: 'medium',
    fn: 'memoize',
    prompt: `
Viết \`memoize(fn)\` trả về phiên bản có **cache** của \`fn\`: nếu đã gọi với cùng bộ tham số thì trả kết quả đã lưu, không gọi \`fn\` lại.

Hàm có thể có **nhiều tham số** (là số hoặc chuỗi). Gợi ý: tạo key từ danh sách tham số.
`,
    starter: `
function memoize(fn) {

}
`,
    solution: `
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
`,
    hints: [
      'Key cho nhiều tham số: `JSON.stringify(args)` — phân biệt được `(1, 23)` với `(12, 3)`, còn `args.join("")` thì không.',
      'Dùng `Map` với `has`/`get`/`set`.'
    ],
    explain: 'Trade-off: cache tốn bộ nhớ không giới hạn, và tạo key bằng `JSON.stringify` tốn O(độ dài tham số) mỗi lần gọi. Thư viện thật hay dùng LRU cache (giới hạn số phần tử) — một bài phỏng vấn kinh điển khác.',
    followUp: 'Memoize một hàm **không thuần** (VD trả về `Date.now()` hoặc đọc biến toàn cục) thì sai ở đâu? Vì sao memoize chỉ an toàn với pure function?',
    tests: [
      { code: 'let calls = 0; const sq = memoize((n) => { calls++; return n * n; }); return [sq(4), sq(4), sq(5), calls];', label: 'gọi lại cùng tham số không tính lại', expected: [16, 16, 25, 2] },
      { code: 'let calls = 0; const add = memoize((a, b) => { calls++; return a + b; }); return [add(1, 23), add(12, 3), add(1, 23), calls];', label: 'phân biệt (1, 23) và (12, 3)', expected: [24, 15, 24, 2] },
      { code: 'let calls = 0; const g = memoize((s) => { calls++; return s.toUpperCase(); }); g("a"); g("a"); g("b"); return calls;', label: 'tham số chuỗi', expected: 2 }
    ]
  }
];
