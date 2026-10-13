module.exports = [
  {
    id: 'reverse-string',
    title: 'Đảo chuỗi',
    difficulty: 'easy',
    fn: 'reverseString',
    prompt: `
Viết \`reverseString(s)\` trả về chuỗi đảo ngược. Hãy thử viết **bằng vòng lặp** (không dùng \`reverse()\`).
`,
    starter: `
function reverseString(s) {

}
`,
    solution: `
function reverseString(s) {
  const chars = [];
  for (let i = s.length - 1; i >= 0; i--) {
    chars.push(s[i]);
  }
  return chars.join("");
}
`,
    hints: ['Duyệt `i` từ `s.length - 1` về `0`, gom ký tự vào mảng rồi `join("")`.'],
    tests: [
      { args: ['hello'], expected: 'olleh' },
      { args: ['a'], expected: 'a' },
      { args: [''], expected: '' },
      { args: ['racecar'], expected: 'racecar' },
      { args: ['ab cd'], expected: 'dc ba' }
    ]
  },
  {
    id: 'valid-palindrome',
    title: 'Chuỗi đối xứng (Valid Palindrome)',
    difficulty: 'easy',
    fn: 'isPalindrome',
    prompt: `
Một chuỗi là **palindrome** nếu sau khi đổi về chữ thường và **bỏ mọi ký tự không phải chữ/số**, đọc xuôi và ngược giống nhau.

\`isPalindrome("A man, a plan, a canal: Panama")\` → \`true\`

Yêu cầu: bộ nhớ phụ O(1) — dùng hai con trỏ, không tạo chuỗi đã lọc.
`,
    starter: `
function isPalindrome(s) {

}
`,
    solution: `
function isPalindrome(s) {
  const isAlnum = (c) => /[a-z0-9]/i.test(c);
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isAlnum(s[left])) { left++; continue; }
    if (!isAlnum(s[right])) { right--; continue; }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}
`,
    hints: [
      'Hai con trỏ `left`, `right`. Nếu ký tự ở `left` không phải chữ/số → `left++` và bỏ qua; tương tự với `right`.',
      'Kiểm tra chữ/số: `/[a-z0-9]/i.test(c)`.'
    ],
    explain: 'Cách "dễ": `const t = s.toLowerCase().replace(/[^a-z0-9]/g, "")` rồi so với bản đảo — O(n) thời gian nhưng O(n) bộ nhớ. Hai con trỏ đạt O(1) bộ nhớ. Đây là LeetCode 125, câu khởi động rất hay gặp.',
    followUp: 'Biến thể (LeetCode 680): được phép **xoá tối đa một ký tự**. Khi hai con trỏ gặp cặp khác nhau, bạn có mấy lựa chọn để thử tiếp?',
    tests: [
      { args: ['A man, a plan, a canal: Panama'], expected: true },
      { args: ['race a car'], expected: false },
      { args: [' '], expected: true },
      { args: ['0P'], expected: false },
      { args: ['ab_a'], expected: true },
      { args: ['No lemon, no melon'], expected: true }
    ]
  },
  {
    id: 'capitalize-words',
    title: 'Viết hoa chữ cái đầu',
    difficulty: 'easy',
    fn: 'capitalizeWords',
    prompt: `
Viết \`capitalizeWords(s)\` viết hoa chữ cái đầu của mỗi từ, các chữ còn lại viết thường. Các từ cách nhau bởi **một hoặc nhiều** khoảng trắng; kết quả nối các từ bằng **đúng một** dấu cách và bỏ khoảng trắng thừa ở hai đầu.

\`capitalizeWords("  hELLo   wORLD ")\` → \`"Hello World"\`
`,
    starter: `
function capitalizeWords(s) {

}
`,
    solution: `
function capitalizeWords(s) {
  return s
    .trim()
    .split(/\\s+/)
    .filter((w) => w.length > 0)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
`,
    hints: [
      '`s.trim().split(/\\s+/)` tách theo một hoặc nhiều khoảng trắng.',
      'Với mỗi từ: `w[0].toUpperCase() + w.slice(1).toLowerCase()`. Cẩn thận chuỗi rỗng `""` → `split` trả về `[""]`.'
    ],
    tests: [
      { args: ['hello world'], expected: 'Hello World' },
      { args: ['  hELLo   wORLD '], expected: 'Hello World' },
      { args: ['javascript'], expected: 'Javascript' },
      { args: [''], expected: '' },
      { args: ['a b c'], expected: 'A B C' }
    ]
  },
  {
    id: 'caesar-cipher',
    title: 'Mật mã Caesar',
    difficulty: 'medium',
    fn: 'caesar',
    prompt: `
Viết \`caesar(s, k)\` dịch mỗi **chữ cái** trong \`s\` đi \`k\` vị trí trong bảng chữ cái (vòng lại từ \`z\` về \`a\`), **giữ nguyên hoa/thường**; ký tự khác giữ nguyên. \`k\` có thể âm hoặc lớn hơn 26.

\`caesar("Hello, World!", 3)\` → \`"Khoor, Zruog!"\`
`,
    starter: `
function caesar(s, k) {

}
`,
    solution: `
function caesar(s, k) {
  const shift = ((k % 26) + 26) % 26;
  let out = [];
  for (const ch of s) {
    const code = ch.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      out.push(String.fromCharCode(((code - 97 + shift) % 26) + 97));
    } else if (code >= 65 && code <= 90) {
      out.push(String.fromCharCode(((code - 65 + shift) % 26) + 65));
    } else {
      out.push(ch);
    }
  }
  return out.join("");
}
`,
    hints: [
      'Đổi chữ thường về 0–25: `code - 97`. Cộng `k`, lấy `% 26`, rồi cộng lại 97.',
      'Với `k` âm: `-1 % 26` là `-1` trong JS! Chuẩn hoá: `((k % 26) + 26) % 26`.'
    ],
    explain: 'Công thức `((x % m) + m) % m` cho phần dư luôn không âm — ghi nhớ nó, bạn sẽ dùng lại khi xử lý chỉ số vòng (mảng vòng, đồng hồ, modulo trong bài đếm).',
    followUp: 'Tại sao JS (và C, Java) cho `-1 % 26 === -1` còn Python cho `25`? Mỗi lựa chọn có lý do gì?',
    tests: [
      { args: ['abc', 1], expected: 'bcd' },
      { args: ['xyz', 3], expected: 'abc' },
      { args: ['Hello, World!', 3], expected: 'Khoor, Zruog!' },
      { args: ['abc', -1], expected: 'zab' },
      { args: ['Zz', 52], expected: 'Zz' },
      { args: ['abc', 27], expected: 'bcd' }
    ]
  }
];
