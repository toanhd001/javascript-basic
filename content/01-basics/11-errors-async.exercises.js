module.exports = [
  {
    id: 'safe-json',
    title: 'Parse JSON an toàn',
    difficulty: 'easy',
    fn: 'safeParse',
    prompt: `
Viết \`safeParse(text, fallback)\` trả về kết quả \`JSON.parse(text)\`; nếu chuỗi không hợp lệ thì **không ném lỗi** mà trả về \`fallback\`.
`,
    starter: `
function safeParse(text, fallback) {
  return JSON.parse(text);
}
`,
    solution: `
function safeParse(text, fallback) {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}
`,
    hints: ['Bọc trong `try { ... } catch (e) { return fallback; }`.'],
    tests: [
      { args: ['{"a":1}', null], expected: { a: 1 } },
      { args: ['[1,2,3]', []], expected: [1, 2, 3] },
      { args: ['{bad json}', null], expected: null },
      { args: ['', 'mặc định'], expected: 'mặc định' }
    ]
  },
  {
    id: 'event-loop-order',
    title: 'Đoán thứ tự event loop',
    difficulty: 'medium',
    fn: 'predictOrder',
    prompt: `
Không chạy thử, hãy đoán thứ tự các dòng được in ra của đoạn code sau, rồi viết \`predictOrder()\` trả về **mảng các chữ cái** theo đúng thứ tự in:

\`\`\`js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
(async () => {
  console.log("D");
  await null;
  console.log("E");
})();
queueMicrotask(() => console.log("F"));
console.log("G");
\`\`\`

Sau khi trả lời, dán đoạn code vào Playground để kiểm chứng.
`,
    starter: `
function predictOrder() {
  return ["A", "B", "C", "D", "E", "F", "G"];
}
`,
    solution: `
function predictOrder() {
  return ["A", "D", "G", "C", "E", "F", "B"];
}
`,
    hints: [
      'Code đồng bộ chạy trước hết — kể cả phần **trước `await`** trong hàm async.',
      'Phần sau `await` là một microtask, xếp hàng theo thứ tự được đăng ký cùng với `.then` và `queueMicrotask`.',
      'setTimeout là macrotask — chạy sau khi toàn bộ microtask đã xong.'
    ],
    explain: 'Đồng bộ: A, D (thân async chạy đồng bộ đến `await`), G. Microtask theo thứ tự đăng ký: C (then), E (phần sau await), F (queueMicrotask). Macrotask: B.',
    followUp: 'Nếu một microtask lại tạo thêm microtask mới liên tục (VD đệ quy `Promise.resolve().then(loop)`), setTimeout có bao giờ được chạy không? Hậu quả với giao diện web là gì?',
    tests: [
      { args: [], expected: ['A', 'D', 'G', 'C', 'E', 'F', 'B'] }
    ]
  },
  {
    id: 'sleep-promise',
    title: 'Viết hàm sleep',
    difficulty: 'easy',
    fn: 'sleep',
    prompt: `
Viết \`sleep(ms, value)\` trả về một **Promise** resolve với \`value\` sau \`ms\` mili-giây.

\`\`\`js
await sleep(100, "xong"); // sau ~100ms trả về "xong"
\`\`\`
`,
    starter: `
function sleep(ms, value) {

}
`,
    solution: `
function sleep(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
`,
    hints: ['`return new Promise((resolve) => setTimeout(() => resolve(value), ms));`'],
    tests: [
      { code: 'const p = sleep(10, "x"); return p instanceof Promise;', label: 'trả về Promise', expected: true },
      { code: 'return await sleep(20, "xong");', label: 'await sleep(20, "xong")', expected: 'xong' },
      { code: 'const t = Date.now(); await sleep(80); return Date.now() - t >= 70;', label: 'thật sự chờ ~80ms', expected: true }
    ]
  },
  {
    id: 'promise-all',
    title: 'Tự cài đặt Promise.all',
    difficulty: 'hard',
    fn: 'promiseAll',
    prompt: `
Câu phỏng vấn frontend kinh điển: tự viết \`promiseAll(items)\` hoạt động như \`Promise.all\`:

- Trả về Promise resolve với **mảng kết quả theo đúng thứ tự** đầu vào (không phải thứ tự hoàn thành).
- Phần tử không phải Promise được coi như giá trị đã có sẵn.
- Nếu **bất kỳ** Promise nào reject → Promise trả về reject ngay với lỗi đó.
- Mảng rỗng → resolve \`[]\`.

Không dùng \`Promise.all\`/\`allSettled\`/\`any\`/\`race\`.
`,
    starter: `
function promiseAll(items) {
  return new Promise((resolve, reject) => {

  });
}
`,
    solution: `
function promiseAll(items) {
  return new Promise((resolve, reject) => {
    const results = new Array(items.length);
    let remaining = items.length;
    if (remaining === 0) {
      resolve(results);
      return;
    }
    items.forEach((item, i) => {
      Promise.resolve(item).then((value) => {
        results[i] = value;
        remaining--;
        if (remaining === 0) resolve(results);
      }, reject);
    });
  });
}
`,
    hints: [
      'Dùng `Promise.resolve(item)` để biến mọi phần tử thành Promise.',
      'Lưu kết quả vào `results[i]` (đúng vị trí), đếm số Promise còn lại; về 0 thì `resolve(results)`.',
      'Truyền `reject` làm tham số thứ hai của `.then` — Promise chỉ settle một lần nên các reject sau bị bỏ qua.'
    ],
    explain: 'Điểm mấu chốt: (1) ghi vào `results[i]` chứ không `push` (thứ tự hoàn thành khác thứ tự đầu vào), (2) đếm `remaining` thay vì kiểm tra `results.length` (mảng có lỗ), (3) xử lý mảng rỗng riêng.',
    followUp: 'Viết tiếp `promiseAllSettled` và một hàm chạy các task với **giới hạn đồng thời** (concurrency limit = 3). Tại sao giới hạn đồng thời quan trọng khi gọi API thật?',
    tests: [
      { code: 'const d = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms)); return await promiseAll([d(30, "a"), d(10, "b"), d(20, "c")]);', label: 'giữ thứ tự đầu vào dù hoàn thành khác thứ tự', expected: ['a', 'b', 'c'] },
      { code: 'return await promiseAll([1, Promise.resolve(2), 3]);', label: 'trộn giá trị thường và Promise', expected: [1, 2, 3] },
      { code: 'return await promiseAll([]);', label: 'mảng rỗng', expected: [] },
      { code: 'try { await promiseAll([Promise.resolve(1), Promise.reject(new Error("boom")), new Promise(() => {})]); return "không reject"; } catch (e) { return e.message; }', label: 'reject ngay khi có lỗi (kể cả khi có Promise treo mãi)', expected: 'boom' },
      { code: 'const p = promiseAll([1]); return p instanceof Promise;', label: 'trả về Promise', expected: true }
    ]
  }
];
