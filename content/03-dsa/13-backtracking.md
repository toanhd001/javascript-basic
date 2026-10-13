---
id: dsa-backtracking
title: Quay lui (Backtracking)
---
Backtracking = **thử mọi lựa chọn** một cách có hệ thống: chọn → đi tiếp (đệ quy) → **bỏ chọn** (quay lui) → thử lựa chọn khác. Dùng cho bài "liệt kê **tất cả**": tập con, hoán vị, tổ hợp, đặt quân hậu, giải sudoku.

## Khuôn mẫu

```js
function backtrack(state) {
  if (/* state là một lời giải hoàn chỉnh */) {
    result.push([...state]);            // LƯU BẢN SAO, không phải tham chiếu!
    return;
  }
  for (const choice of /* các lựa chọn hợp lệ */) {
    state.push(choice);                 // 1. chọn
    backtrack(state);                   // 2. đi tiếp
    state.pop();                        // 3. bỏ chọn
  }
}
```

## Ví dụ: mọi tập con

```js run
function subsets(nums) {
  const result = [];
  const path = [];
  function backtrack(start) {
    result.push([...path]);              // mọi trạng thái đều là một tập con
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);                  // chỉ chọn các phần tử SAU i → không trùng tổ hợp
      path.pop();
    }
  }
  backtrack(0);
  return result;
}
console.log(JSON.stringify(subsets([1, 2, 3])));
// [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
```

## Cây quyết định và độ phức tạp

Hình dung cây: mỗi tầng là một quyết định, mỗi nhánh là một lựa chọn.

| Bài | Số lời giải | Độ phức tạp |
| --- | --- | --- |
| Tập con của n phần tử | 2^n | O(n · 2^n) |
| Hoán vị n phần tử | n! | O(n · n!) |
| Tổ hợp chập k | C(n, k) | O(k · C(n, k)) |

Vì vậy đề backtracking luôn có **n nhỏ** (≤ 10–20). Thấy n ≤ 15 là một gợi ý mạnh.

## Cắt tỉa (pruning)

Sức mạnh thật của backtracking là **dừng sớm** những nhánh chắc chắn không dẫn tới lời giải:

- Tổng đã vượt target → không đi tiếp (bài Combination Sum, nhất là khi đã sort).
- Quân hậu bị tấn công → không đặt.
- Ô sudoku vi phạm luật → thử số khác ngay.

## Xử lý phần tử trùng

Nếu input có phần tử trùng mà đề không muốn kết quả trùng: **sort trước**, rồi trong cùng một tầng bỏ qua `nums[i] === nums[i - 1]` (với `i > start`).

## Câu hỏi tại sao

- Tại sao phải `result.push([...path])` chứ không `result.push(path)`? Chạy thử bản sai trong Playground để thấy kết quả.
- Backtracking và DFS khác nhau thế nào? (Gợi ý: backtracking là DFS trên **cây trạng thái** — cây này không được lưu sẵn mà sinh ra trong lúc chạy.)
- Khi nào backtracking nên được thay bằng quy hoạch động? (Gợi ý: đề hỏi **đếm số cách** / **giá trị tốt nhất** thay vì **liệt kê** mọi cách.)
