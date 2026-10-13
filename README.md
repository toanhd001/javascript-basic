# JS Learn — học JavaScript từ số 0 → coding test → phỏng vấn

Web học JavaScript có lộ trình, chạy code và chấm bài ngay trên trình duyệt (giống LeetCode/HackerRank nhưng bắt đầu từ cơ bản). Toàn bộ nội dung bằng tiếng Việt.

- **33 bài học, 115 bài tập**, mỗi bài có test (gồm cả test ẩn với input lớn để kiểm tra độ phức tạp), gợi ý từng bước, lời giải kèm phân tích, và câu hỏi "Tại sao?" để đào sâu.
- **Kiểm tra cú pháp** không cần chạy code, kèm cảnh báo các bẫy hay gặp trong coding test (`==`, `sort()` không comparator, `fill([])`, `Math.max(...arr)` với mảng lớn, `shift()` trong vòng lặp...).
- Code chạy trong **Web Worker** có giới hạn thời gian: vòng lặp vô hạn hay thuật toán O(n²) với n lớn sẽ bị dừng và báo "quá thời gian" thay vì treo trình duyệt.
- Lỗi được báo **đúng dòng** trong editor, kèm giải thích dễ hiểu.
- Tiến độ và code lưu trong `localStorage` của trình duyệt.
- **Không cần cài gì**: HTML/CSS/JS thuần, không thư viện, không bước build khi học.

## Chạy

Cách 1 — mở thẳng file: nhấp đúp `index.html` (Chrome, Edge, Firefox đều chạy được).

Cách 2 — chạy server tĩnh (nên dùng nếu cách 1 bị trình duyệt chặn):

```bash
npm start            # http://localhost:5173 — không cần npm install
```

## Lộ trình

| Chặng | Nội dung |
| --- | --- |
| 0. Khởi động | Cách dùng trang, `console.log`, `return`, đọc thông báo lỗi |
| 1. JavaScript cơ bản | Biến & kiểu, điều kiện, vòng lặp, hàm, mảng, chuỗi, object, map/filter/reduce/sort, closure, class & this, lỗi & async, Map/Set |
| 2. Bộ công cụ coding test | Đọc stdin/in stdout, cheat sheet các bẫy JS, Big-O & đọc ràng buộc đề |
| 3. Cấu trúc dữ liệu & giải thuật | Hash map, two pointers, sliding window, prefix sum, stack/queue, linked list, đệ quy, binary search, sắp xếp, cây, heap, đồ thị, backtracking, quy hoạch động, tham lam |
| 4. Phỏng vấn | Khung giải bài UMPIRE, bảng nhận diện pattern, kế hoạch ôn 8–12 tuần, câu hỏi JS (debounce, LRU cache, deep clone, curry) |

## Cấu trúc thư mục

```
index.html              trang duy nhất
css/style.css
js/
  judge-core.js         bộ chấm: so sánh kết quả, in giá trị — dùng chung cho trình duyệt và Node
  runner.js             chạy code trong Web Worker, timeout, đổi số dòng lỗi
  editor.js             editor (textarea + tô màu cú pháp), phím tắt
  lint.js               gợi ý các bẫy cú pháp
  app.js                giao diện, router, lưu tiến độ
  content.generated.js  FILE TỰ SINH từ content/ — đừng sửa tay
content/
  <NN-chặng>/module.md
  <NN-chặng>/<NN-bài>.md               lý thuyết (markdown)
  <NN-chặng>/<NN-bài>.exercises.js     bài tập + test + lời giải
scripts/
  build.js              content/ → js/content.generated.js
  check.js              kiểm tra chất lượng nội dung
  serve.js              server tĩnh cho npm start
```

## Thêm / sửa bài

1. Sửa file trong `content/`. Khối code ` ```js run ` sẽ có nút ▶ Chạy trên trang.
2. Bài tập là object trong `*.exercises.js`:

```js
{
  id: 'two-sum',                 // duy nhất trên toàn trang
  title: 'Two Sum',
  difficulty: 'easy',            // easy | medium | hard
  fn: 'twoSum',                  // tên hàm người học phải viết
  prompt: `markdown đề bài`,
  starter: `code khởi đầu`,
  solution: `lời giải mẫu`,
  hints: ['gợi ý 1', 'gợi ý 2'],
  explain: 'phân tích lời giải (markdown)',
  followUp: 'câu hỏi "tại sao" hiện ra sau khi giải xong',
  compare: 'unordered',          // tuỳ chọn: unordered | unordered-deep | float
  helpers: `code có sẵn (VD class ListNode)`,
  tests: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },                     // gọi fn(...args)
    { code: 'const s = new MinStack(); ...; return x;', expected: 1 },   // test cho class / async
    { gen: 'return [bigArray, k];', expected: 42, label: 'n = 10^5' },   // input lớn sinh tự động (test ẩn)
    { gen: '...', check: 'return result.length === 100000;' }           // kết quả quá lớn: kiểm bằng code
  ]
}
```

3. Chạy:

```bash
npm run build   # sinh lại js/content.generated.js
npm test        # mọi lời giải mẫu phải qua 100% test, mọi starter phải trượt ít nhất 1 test,
                # mọi ví dụ ```js run phải chạy không lỗi, file sinh ra phải khớp content/
```

## Vì sao thiết kế như vậy (trade-off)

- **Không framework, không bundler** → mở file là chạy, người học đọc được toàn bộ source. Đổi lại: editor đơn giản hơn CodeMirror/Monaco (không có autocomplete).
- **Nội dung dạng markdown + bước build** → viết bài dễ, và vẫn mở được qua `file://` (trình duyệt chặn `fetch` file local nhưng cho `<script src>`). Đổi lại: sửa nội dung phải chạy `npm run build`.
- **Web Worker** thay cho `eval` → dừng được vòng lặp vô hạn, cô lập code người học khỏi trang. Đổi lại: mỗi lần chạy tạo một worker mới (~vài chục ms).
- **localStorage** → không cần server/tài khoản. Đổi lại: tiến độ chỉ nằm trên một trình duyệt, xoá dữ liệu trình duyệt là mất.
