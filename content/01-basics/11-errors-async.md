---
id: errors-async
title: Xử lý lỗi và bất đồng bộ
---
## try / catch / finally và throw

```js run
function parseAge(text) {
  const n = Number(text);
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("Tuổi không hợp lệ: " + text);
  }
  return n;
}

for (const input of ["20", "abc", "-5"]) {
  try {
    console.log("OK:", parseAge(input));
  } catch (err) {
    console.log(err.name, "-", err.message);
  } finally {
    console.log("  (finally luôn chạy)");
  }
}
```

Chỉ `catch` lỗi bạn **biết cách xử lý**. Nuốt lỗi bằng `catch {}` rỗng là cách nhanh nhất để giấu bug.

## Bất đồng bộ: JS chạy một luồng

JS chỉ có **một luồng** thực thi. Việc tốn thời gian (gọi mạng, đọc file, hẹn giờ) được giao cho môi trường, rồi **callback** được đưa vào hàng đợi để chạy sau khi code hiện tại xong.

```js run
console.log("1. bắt đầu");
setTimeout(() => console.log("4. setTimeout (macrotask)"), 0);
Promise.resolve().then(() => console.log("3. Promise.then (microtask)"));
console.log("2. kết thúc code đồng bộ");
```

Thứ tự: **code đồng bộ** → **microtask** (Promise) → **macrotask** (setTimeout). Đây là câu hỏi phỏng vấn "event loop" rất hay gặp.

## Promise

Promise đại diện cho một giá trị **sẽ có trong tương lai**: đang chờ (pending) → thành công (fulfilled) hoặc thất bại (rejected).

```js run
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "User " + id });
      else reject(new Error("id không hợp lệ"));
    }, 50);
  });
}

fetchUser(1)
  .then((u) => console.log("then:", u.name))
  .catch((e) => console.log("catch:", e.message));

fetchUser(-1)
  .then((u) => console.log("không chạy tới đây"))
  .catch((e) => console.log("catch:", e.message));
```

## async / await — viết code bất đồng bộ như đồng bộ

```js run
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log("chờ 100ms...");
  await sleep(100);                       // tạm dừng hàm này, KHÔNG chặn cả chương trình
  console.log("xong!");

  try {
    await Promise.reject(new Error("lỗi bất đồng bộ"));
  } catch (e) {
    console.log("bắt được:", e.message);  // try/catch dùng được với await
  }
  return 42;
}

main().then((v) => console.log("main trả về", v));
```

Hàm `async` **luôn trả về Promise**.

## Chạy song song: Promise.all

```js run
const sleep = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));

async function sequential() {
  const t = Date.now();
  await sleep(100); await sleep(100); await sleep(100);
  return Date.now() - t;
}
async function parallel() {
  const t = Date.now();
  await Promise.all([sleep(100), sleep(100), sleep(100)]);
  return Date.now() - t;
}

(async () => {
  console.log("tuần tự  ~", await sequential(), "ms");
  console.log("song song ~", await parallel(), "ms");
})();
```

Các anh em: `Promise.allSettled` (chờ hết, không dừng khi có lỗi), `Promise.race` (cái nào xong trước), `Promise.any` (cái nào thành công trước).

## Câu hỏi tại sao

- Tại sao JS chọn mô hình một luồng + event loop thay vì đa luồng như Java? Được gì (không lo race condition trên biến) và mất gì (tính toán nặng chặn cả UI)?
- `await` trong vòng `for` vs `Promise.all`: khi nào **bắt buộc** phải tuần tự? (Gợi ý: request sau cần kết quả request trước, hoặc API giới hạn tốc độ.)
