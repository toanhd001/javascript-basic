/*
 * lint.js — vài "gợi ý" bắt các bẫy hay gặp khi làm coding test bằng JavaScript.
 * Không phải linter thật (như ESLint): chỉ là regex trên code đã xoá chuỗi/comment,
 * nên có thể báo nhầm. Mục đích là dạy, không phải chặn.
 */
(function (root) {
  // Thay nội dung chuỗi và comment bằng khoảng trắng (giữ nguyên số dòng/cột)
  function stripCode(code) {
    return code.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\[\s\S]|[^`\\])*`/g, function (m) {
      return m.replace(/[^\n]/g, ' ');
    });
  }

  var RULES = [
    {
      re: /[^=!<>]==[^=]|!=[^=]/,
      msg: 'Dùng `===` / `!==` thay cho `==` / `!=`. `==` tự ép kiểu: `0 == ""` là true, `null == undefined` là true.'
    },
    {
      re: /\bvar\s/,
      msg: '`var` có function-scope và bị hoisting dễ gây bug. Dùng `const` (mặc định) hoặc `let` (khi cần gán lại).'
    },
    {
      re: /\.sort\(\s*\)/,
      msg: '`sort()` không có hàm so sánh sẽ so sánh như CHUỖI: `[10, 2, 1].sort()` → `[1, 10, 2]`. Với số dùng `sort((a, b) => a - b)`.'
    },
    {
      re: /\.fill\(\s*(\[|\{|new\s)/,
      msg: '`fill([])` / `fill({})` dùng CHUNG một object cho mọi ô. Tạo mảng 2 chiều bằng `Array.from({ length: n }, () => [])`.'
    },
    {
      re: /for\s*\(\s*(?:const|let|var)\s+[\w$]+\s+in\s/,
      msg: '`for...in` duyệt KEY dạng chuỗi ("0", "1"...). Với mảng hãy dùng `for...of` hoặc vòng for chỉ số.'
    },
    {
      re: /Math\.(?:max|min)\(\s*\.\.\./,
      msg: '`Math.max(...arr)` có thể ném RangeError khi mảng rất lớn (khoảng > 100.000 phần tử). Coding test có n lớn thì dùng vòng lặp.'
    },
    {
      re: /\.shift\(\s*\)/,
      msg: '`shift()` là O(n) vì phải dời mọi phần tử. Trong BFS/queue với n lớn, dùng một con trỏ `head` thay vì shift.'
    },
    {
      re: /\b(?:if|while)\s*\((?:[^()=]|\([^()]*\))*[^=!<>]=[^=>]/,
      msg: 'Có phép GÁN `=` trong điều kiện if/while. Bạn có định so sánh `===` không?'
    },
    {
      re: /\bparseInt\(\s*[^,()]+\)/,
      msg: '`parseInt(x)` nên kèm cơ số: `parseInt(x, 10)`, hoặc dùng `Number(x)` khi cả chuỗi là số.'
    }
  ];

  function lint(code) {
    var lines = stripCode(code).split('\n');
    var found = [];
    RULES.forEach(function (rule) {
      for (var i = 0; i < lines.length; i++) {
        if (rule.re.test(' ' + lines[i] + ' ')) {
          found.push({ line: i + 1, msg: rule.msg });
          return; // mỗi luật chỉ báo lần đầu tiên
        }
      }
    });
    return found.sort(function (a, b) { return a.line - b.line; });
  }

  root.Lint = { lint: lint, stripCode: stripCode };
})(window);
