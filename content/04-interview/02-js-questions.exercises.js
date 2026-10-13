module.exports = [
  {
    id: 'debounce',
    title: 'Cài đặt debounce',
    difficulty: 'medium',
    fn: 'debounce',
    prompt: `
Viết \`debounce(fn, ms)\` trả về hàm mới: mỗi lần được gọi, nó **hẹn giờ lại** — \`fn\` chỉ thực sự chạy sau khi đã **ngừng gọi** \`ms\` mili-giây, với **tham số của lần gọi cuối cùng**. Giữ đúng \`this\`.
`,
    starter: `
function debounce(fn, ms) {

}
`,
    solution: `
function debounce(fn, ms) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}
`,
    hints: [
      'Closure giữ biến `timer`. Mỗi lần gọi: `clearTimeout(timer)` rồi hẹn lại.',
      'Dùng `function (...args)` (không phải arrow) cho hàm trả về để nhận `this` của người gọi, và arrow bên trong `setTimeout` để giữ `this` đó.'
    ],
    tests: [
      { code: 'const calls = []; const d = debounce((x) => calls.push(x), 40); d(1); d(2); d(3); await new Promise((r) => setTimeout(r, 100)); return calls;', label: 'gọi 3 lần liên tiếp → chạy 1 lần với tham số cuối', expected: [3] },
      { code: 'const calls = []; const d = debounce((x) => calls.push(x), 30); d("a"); await new Promise((r) => setTimeout(r, 80)); d("b"); await new Promise((r) => setTimeout(r, 80)); return calls;', label: 'hai lần gọi cách xa nhau → chạy 2 lần', expected: ['a', 'b'] },
      { code: 'let ran = false; const d = debounce(() => { ran = true; }, 50); d(); await new Promise((r) => setTimeout(r, 10)); return ran;', label: 'chưa hết thời gian chờ thì chưa chạy', expected: false },
      { code: 'const obj = { name: "obj", calls: [] }; obj.save = debounce(function () { this.calls.push(this.name); }, 20); obj.save(); await new Promise((r) => setTimeout(r, 60)); return obj.calls;', label: 'giữ đúng this', expected: ['obj'] }
    ]
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache',
    difficulty: 'medium',
    prompt: `
Cài đặt class \`LRUCache\` (LeetCode 146):
- \`constructor(capacity)\`
- \`get(key)\`: trả về giá trị, hoặc \`-1\` nếu không có. Truy cập làm key thành "mới dùng gần nhất".
- \`put(key, value)\`: thêm/cập nhật. Nếu vượt \`capacity\`, xoá key **ít được dùng gần đây nhất**.

Cả hai thao tác O(1). Test ẩn thực hiện 200.000 thao tác.
`,
    starter: `
class LRUCache {
  constructor(capacity) {

  }
  get(key) {

  }
  put(key, value) {

  }
}
`,
    solution: `
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}
`,
    hints: [
      '`Map` duyệt theo **thứ tự chèn**. Key cũ nhất là `map.keys().next().value`.',
      '"Đánh dấu vừa dùng" = `delete` rồi `set` lại để key về cuối.',
      'Thử thách: viết lại bằng hash map + danh sách liên kết đôi (node giả đầu/cuối) như các ngôn ngữ không có Map giữ thứ tự.'
    ],
    tests: [
      { code: 'const c = new LRUCache(2); c.put(1, 1); c.put(2, 2); const a = c.get(1); c.put(3, 3); const b = c.get(2); c.put(4, 4); return [a, b, c.get(1), c.get(3), c.get(4)];', label: 'ví dụ LeetCode 146', expected: [1, -1, -1, 3, 4] },
      { code: 'const c = new LRUCache(1); c.put("x", 1); c.put("x", 2); return c.get("x");', label: 'cập nhật giá trị key đã có', expected: 2 },
      { code: 'const c = new LRUCache(2); c.put(1, 1); c.put(2, 2); c.put(1, 10); c.put(3, 3); return [c.get(1), c.get(2), c.get(3)];', label: 'put lên key cũ cũng làm nó "mới"', expected: [10, -1, 3] },
      { hidden: true, code: 'const c = new LRUCache(1000); let s = 0; for (let i = 0; i < 100000; i++) { c.put(i, i); s += c.get(i - 500) === -1 ? 0 : 1; } return s;', label: '200.000 thao tác', expected: 99302 }
    ]
  },
  {
    id: 'deep-clone',
    title: 'Deep clone',
    difficulty: 'medium',
    fn: 'deepClone',
    prompt: `
Viết \`deepClone(value)\` sao chép sâu: mảng, object thường, \`Map\`, \`Set\`, \`Date\` lồng nhau tuỳ ý; giá trị nguyên thuỷ giữ nguyên. Phải xử lý được **tham chiếu vòng** (object trỏ về chính nó) — không được lặp vô hạn. Không dùng \`structuredClone\` hay \`JSON\`.
`,
    starter: `
function deepClone(value) {

}
`,
    solution: `
function deepClone(value, seen = new Map()) {
  if (value === null || typeof value !== "object") return value;
  if (seen.has(value)) return seen.get(value);
  if (value instanceof Date) return new Date(value.getTime());
  if (value instanceof Map) {
    const copy = new Map();
    seen.set(value, copy);
    value.forEach((v, k) => copy.set(deepClone(k, seen), deepClone(v, seen)));
    return copy;
  }
  if (value instanceof Set) {
    const copy = new Set();
    seen.set(value, copy);
    value.forEach((v) => copy.add(deepClone(v, seen)));
    return copy;
  }
  const copy = Array.isArray(value) ? [] : {};
  seen.set(value, copy);
  for (const key of Object.keys(value)) copy[key] = deepClone(value[key], seen);
  return copy;
}
`,
    hints: [
      'Base case: giá trị nguyên thuỷ (và `null`) trả về chính nó.',
      'Tham chiếu vòng: dùng `Map` ghi "object gốc → bản sao". Gặp lại object gốc thì trả về bản sao đã tạo. **Ghi vào Map trước khi** đệ quy vào con.',
      'Xử lý riêng `Date`, `Map`, `Set` trước khi rơi vào nhánh object/mảng thường.'
    ],
    tests: [
      { code: 'const o = { a: 1, b: { c: [1, 2, { d: 3 }] } }; const c = deepClone(o); c.b.c[2].d = 99; return [o.b.c[2].d, c.b.c[2].d, c !== o, c.b !== o.b];', label: 'object lồng nhau độc lập với bản gốc', expected: [3, 99, true, true] },
      { code: 'return [deepClone(5), deepClone("x"), deepClone(null), deepClone(undefined)];', label: 'giá trị nguyên thuỷ', expected: [5, 'x', null, undefined] },
      { code: 'const o = { name: "loop" }; o.self = o; const c = deepClone(o); return [c.self === c, c !== o];', label: 'tham chiếu vòng', expected: [true, true] },
      { code: 'const m = new Map([["k", { v: 1 }]]); const s = new Set([1, 2]); const c = deepClone({ m, s, d: new Date(0) }); c.m.get("k").v = 2; return [m.get("k").v, c.m instanceof Map, c.s.has(2), c.s !== s, c.d.getTime(), c.d instanceof Date];', label: 'Map, Set, Date', expected: [1, true, true, true, 0, true] },
      { code: 'const a = [1, [2, [3]]]; const c = deepClone(a); return [Array.isArray(c), Array.isArray(c[1]), c[1][1] !== a[1][1], c];', label: 'mảng lồng nhau', expected: [true, true, true, [1, [2, [3]]]] }
    ]
  },
  {
    id: 'curry',
    title: 'Curry',
    difficulty: 'medium',
    fn: 'curry',
    prompt: `
Viết \`curry(fn)\`: trả về hàm có thể gọi với tham số **chia thành nhiều lần**; khi đã đủ số tham số của \`fn\` (\`fn.length\`) thì gọi \`fn\`.

\`\`\`js
const add3 = curry((a, b, c) => a + b + c);
add3(1)(2)(3);   // 6
add3(1, 2)(3);   // 6
add3(1)(2, 3);   // 6
add3(1, 2, 3);   // 6
\`\`\`
`,
    starter: `
function curry(fn) {

}
`,
    solution: `
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return (...more) => curried.apply(this, args.concat(more));
  };
}
`,
    hints: [
      '`fn.length` là số tham số khai báo của hàm.',
      'Hàm trả về gom tham số: đủ thì gọi `fn`, chưa đủ thì trả về một hàm mới nhận thêm tham số và **gọi lại chính nó** với danh sách đã nối.'
    ],
    tests: [
      { code: 'const add3 = curry((a, b, c) => a + b + c); return [add3(1)(2)(3), add3(1, 2)(3), add3(1)(2, 3), add3(1, 2, 3)];', label: 'các cách gọi khác nhau', expected: [6, 6, 6, 6] },
      { code: 'const join = curry((a, b) => a + "-" + b); const withA = join("a"); return [withA("x"), withA("y")];', label: 'dùng lại hàm đã áp một phần', expected: ['a-x', 'a-y'] },
      { code: 'const one = curry((x) => x * 10); return one(4);', label: 'hàm một tham số', expected: 40 }
    ]
  }
];
