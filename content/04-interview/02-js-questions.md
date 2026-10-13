---
id: interview-js
title: Câu hỏi phỏng vấn JavaScript
---
Vòng phỏng vấn frontend/fullstack thường có thêm câu hỏi về **chính ngôn ngữ JS** và yêu cầu tự cài đặt các tiện ích quen thuộc. Bài này tổng hợp những câu hay gặp nhất — mỗi câu đều đã được giải thích ở các bài trước, hãy ôn lại và tự trả lời **thành tiếng** trước khi đọc đáp án.

## Câu hỏi lý thuyết hay gặp

**1. `var`, `let`, `const` khác nhau thế nào?**
Scope (function vs block), hoisting (`var` = `undefined`, `let`/`const` = TDZ), gán lại được không. → bài *Biến và kiểu dữ liệu*, *Scope và closure*.

**2. Closure là gì? Cho ví dụ thực tế.**
Hàm nhớ môi trường biến nơi nó được tạo. Ví dụ: biến private, `once`, memoize, debounce, React hooks. → bài *Scope và closure*.

**3. Giải thích event loop. `setTimeout(fn, 0)` và `Promise.then` cái nào chạy trước?**
Call stack → microtask queue (Promise) → macrotask queue (setTimeout). → bài *Xử lý lỗi và bất đồng bộ*.

**4. `this` được xác định thế nào? Arrow function khác gì?**
4 luật: `new`, `call/apply/bind`, gọi qua object, gọi trơn; arrow lấy `this` từ scope bao ngoài. → bài *Class và this*.

**5. `==` và `===`?** Ép kiểu ngầm. Luôn dùng `===`.

**6. Prototype / kế thừa trong JS hoạt động thế nào?** Chuỗi prototype; `class` là cú pháp đường của prototype.

**7. Copy nông vs copy sâu?** Spread `{...o}` chỉ copy tầng ngoài; `structuredClone` / tự viết đệ quy để copy sâu.

**8. `null` vs `undefined`?** "Cố ý không có giá trị" vs "chưa được gán".

**9. Promise.all vs Promise.allSettled vs Promise.race?** Dừng khi lỗi đầu tiên / chờ tất cả / cái nào xong trước.

**10. Debounce vs throttle?**

- **Debounce**: chỉ chạy **sau khi** sự kiện ngừng xảy ra một khoảng thời gian. Dùng cho ô tìm kiếm gõ phím (chỉ gọi API khi người dùng ngừng gõ).
- **Throttle**: chạy **tối đa một lần** mỗi khoảng thời gian. Dùng cho sự kiện scroll/resize.

```js run
function debounce(fn, ms) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);                       // huỷ lần hẹn trước
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

const log = debounce((q) => console.log("Gọi API tìm:", q), 100);
log("j"); log("ja"); log("jav"); log("java"); // chỉ lần cuối được chạy
```

## Câu hỏi thiết kế: LRU Cache

"Thiết kế cache có dung lượng giới hạn; khi đầy thì xoá phần tử **ít được dùng gần đây nhất**. `get` và `put` đều O(1)."

Cách kinh điển: **hash map + danh sách liên kết đôi**. Trong JS có một mẹo: `Map` **giữ thứ tự chèn**, nên "đưa lên đầu" = xoá rồi chèn lại, và phần tử cũ nhất là `map.keys().next().value`. Người phỏng vấn có thể chấp nhận mẹo này, nhưng hãy sẵn sàng giải thích (hoặc viết) phiên bản linked list.

## Câu hỏi tại sao

- Debounce dùng closure ở đâu? Nếu viết `let timer` **bên trong** hàm trả về thì chuyện gì xảy ra?
- Tại sao LRU cache cần **danh sách liên kết đôi** chứ không phải đơn? (Gợi ý: xoá một node ở giữa trong O(1).)
