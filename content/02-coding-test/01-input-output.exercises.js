module.exports = [
  {
    id: 'io-sum-max',
    title: 'Tổng và max',
    difficulty: 'easy',
    fn: 'solve',
    prompt: `
**Input:** dòng 1 là số \`n\`. Dòng 2 là \`n\` số nguyên cách nhau bởi dấu cách (có thể có dấu cách thừa).

**Output:** một dòng gồm tổng và giá trị lớn nhất, cách nhau một dấu cách.

Viết \`solve(input)\` nhận chuỗi input, trả về chuỗi output.
`,
    starter: `
function solve(input) {
  const lines = input.split("\\n");

}
`,
    solution: `
function solve(input) {
  const lines = input.trim().split(/\\r?\\n/);
  const n = Number(lines[0]);
  const nums = lines[1].trim().split(/\\s+/).map(Number).slice(0, n);
  let sum = 0;
  let max = -Infinity;
  for (const x of nums) {
    sum += x;
    if (x > max) max = x;
  }
  return sum + " " + max;
}
`,
    hints: [
      'Dùng `input.trim().split(/\\r?\\n/)` để tách dòng an toàn.',
      'Tách số: `line.trim().split(/\\s+/).map(Number)`.'
    ],
    tests: [
      { args: ['3\n1 2 3\n'], expected: '6 3' },
      { args: ['4\n-1  -5 -2   -3'], expected: '-11 -1' },
      { args: ['1\n42'], expected: '42 42' },
      { args: ['2\r\n10 20\r\n'], expected: '30 20', label: 'xuống dòng kiểu Windows' }
    ]
  },
  {
    id: 'io-grid',
    title: 'Đếm ô trong lưới',
    difficulty: 'easy',
    fn: 'solve',
    prompt: `
**Input:** dòng đầu là \`R C\`. Tiếp theo là \`R\` dòng, mỗi dòng là chuỗi \`C\` ký tự gồm \`.\` (trống) và \`#\` (tường).

**Output:** dòng 1 là số ô \`#\`. Dòng 2 là chỉ số (bắt đầu từ 0) của **hàng có nhiều \`#\` nhất** (nếu bằng nhau lấy hàng nhỏ nhất).
`,
    starter: `
function solve(input) {

}
`,
    solution: `
function solve(input) {
  const lines = input.trim().split(/\\r?\\n/);
  const [R] = lines[0].trim().split(/\\s+/).map(Number);
  let total = 0;
  let bestRow = 0;
  let bestCount = -1;
  for (let r = 0; r < R; r++) {
    let count = 0;
    for (const ch of lines[1 + r].trim()) if (ch === "#") count++;
    total += count;
    if (count > bestCount) {
      bestCount = count;
      bestRow = r;
    }
  }
  return total + "\\n" + bestRow;
}
`,
    hints: [
      'Đọc `R` từ dòng đầu; hàng thứ r nằm ở `lines[1 + r]`.',
      'Output hai dòng: `total + "\\n" + bestRow`.'
    ],
    tests: [
      { args: ['2 3\n.#.\n###\n'], expected: '4\n1' },
      { args: ['3 2\n##\n..\n##'], expected: '4\n0' },
      { args: ['1 4\n....'], expected: '0\n0' }
    ]
  },
  {
    id: 'io-queries',
    title: 'Xử lý nhiều truy vấn',
    difficulty: 'medium',
    fn: 'solve',
    prompt: `
**Input:** dòng 1 là \`Q\` (số truy vấn). Mỗi dòng sau là một truy vấn:
- \`add x\`: thêm số \`x\` vào tập hợp
- \`remove x\`: xoá \`x\` khỏi tập (nếu có)
- \`has x\`: in \`YES\` nếu \`x\` có trong tập, ngược lại \`NO\`
- \`size\`: in số phần tử của tập

**Output:** kết quả của các truy vấn \`has\` và \`size\`, mỗi kết quả một dòng. Bộ test ẩn có 200.000 truy vấn.
`,
    starter: `
function solve(input) {

}
`,
    solution: `
function solve(input) {
  const lines = input.trim().split(/\\r?\\n/);
  const q = Number(lines[0]);
  const set = new Set();
  const out = [];
  for (let i = 1; i <= q; i++) {
    const [cmd, arg] = lines[i].trim().split(/\\s+/);
    const x = Number(arg);
    if (cmd === "add") set.add(x);
    else if (cmd === "remove") set.delete(x);
    else if (cmd === "has") out.push(set.has(x) ? "YES" : "NO");
    else if (cmd === "size") out.push(String(set.size));
  }
  return out.join("\\n");
}
`,
    hints: [
      'Dùng `Set` cho các thao tác O(1).',
      'Gom kết quả vào mảng `out` rồi `out.join("\\n")` một lần ở cuối.',
      'Cẩn thận: số `"5"` (chuỗi) và `5` (số) là hai key khác nhau trong `Set` — đổi sang số hết, hoặc giữ chuỗi hết.'
    ],
    tests: [
      { args: ['6\nadd 5\nadd 7\nhas 5\nremove 5\nhas 5\nsize'], expected: 'YES\nNO\n1' },
      { args: ['3\nadd 1\nadd 1\nsize'], expected: '1' },
      { args: ['2\nhas 3\nremove 3'], expected: 'NO' },
      {
        gen: 'const lines = ["200000"]; for (let i = 0; i < 100000; i++) lines.push("add " + i); for (let i = 0; i < 99999; i++) lines.push("has " + (i * 2)); lines.push("size"); return [lines.join("\\n")];',
        check: 'const out = result.split("\\n"); return out.length === 100000 && out[0] === "YES" && out[50000] === "NO" && out[99999] === "100000";',
        label: '200.000 truy vấn',
        expectedText: '100.000 dòng, dòng cuối "100000"'
      }
    ]
  }
];
