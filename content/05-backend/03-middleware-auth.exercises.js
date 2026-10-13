const apiHelpers = require('./_api-helpers.js');

const AUTH_DATA = `
// ===== Token giả lập: token → người dùng (thay cho bảng session / JWT đã giải mã) =====
const TOKENS = {
  "tok-an": { id: 1, name: "An", role: "user" },
  "tok-jisoo": { id: 7, name: "Jisoo", role: "user" },
  "tok-admin": { id: 99, name: "Admin", role: "admin" }
};
`;

const CLOCK = `
// ===== Đồng hồ giả lập để test không phải chờ thật =====
const clock = {
  time: 0,
  now() { return clock.time; },
  advance(ms) { clock.time += ms; }
};
`;

module.exports = [
  {
    id: 'auth-middleware',
    title: 'Middleware xác thực & phân quyền',
    difficulty: 'medium',
    helpers: apiHelpers({ extra: AUTH_DATA }),
    prompt: `
Viết hai middleware:

1. \`requireAuth\`: đọc header \`Authorization: Bearer <token>\`, tra trong \`TOKENS\` (có sẵn).
   - Thiếu header, sai định dạng (không bắt đầu bằng \`"Bearer "\`), hoặc token không tồn tại → \`401 { "error": "Unauthorized" }\`.
   - Hợp lệ → gán \`req.user\` rồi \`next()\`.
2. \`requireRole(role)\`: **trả về** một middleware; nếu \`req.user.role !== role\` → \`403 { "error": "Forbidden" }\`.

Các route đã viết sẵn trong starter — chỉ cần hoàn thành hai middleware.
`,
    starter: `
const app = createApp();

function requireAuth(req, res, next) {

}

function requireRole(role) {
  return (req, res, next) => {

  };
}

app.get("/me", requireAuth, (req, res) => res.json(req.user));
app.delete("/users/:id", requireAuth, requireRole("admin"), (req, res) => res.status(204).end());
app.get("/health", (req, res) => res.json({ ok: true }));
`,
    solution: `
const app = createApp();

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  if (!header.startsWith("Bearer ")) return res.status(401).json({ error: "Unauthorized" });
  const user = TOKENS[header.slice("Bearer ".length)];
  if (!user) return res.status(401).json({ error: "Unauthorized" });
  req.user = user;
  next();
}

function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) return res.status(403).json({ error: "Forbidden" });
    next();
  };
}

app.get("/me", requireAuth, (req, res) => res.json(req.user));
app.delete("/users/:id", requireAuth, requireRole("admin"), (req, res) => res.status(204).end());
app.get("/health", (req, res) => res.json({ ok: true }));
`,
    hints: [
      'Header đã được viết thường: `req.headers.authorization`. Nhớ trường hợp không có header (`undefined`).',
      'Lấy token: `header.slice("Bearer ".length)`. Cẩn thận: `TOKENS["toString"]` cũng "tồn tại" nếu dùng object thường — ở đây có thể chấp nhận, nhưng trong thực tế dùng `Map` hoặc `Object.hasOwn`.',
      '`requireRole` là hàm **trả về** middleware (closure nhớ `role`).'
    ],
    tests: [
      { code: 'const r = await request(app, { path: "/me", headers: { Authorization: "Bearer tok-an" } }); return [r.status, r.body];', label: 'GET /me với token hợp lệ', expected: [200, { id: 1, name: 'An', role: 'user' }] },
      { code: 'const r = await request(app, { path: "/me" }); return [r.status, r.body];', label: 'không có header Authorization', expected: [401, { error: 'Unauthorized' }] },
      { code: 'const r = await request(app, { path: "/me", headers: { Authorization: "Bearer sai-token" } }); return [r.status, r.body];', label: 'token không tồn tại', expected: [401, { error: 'Unauthorized' }] },
      { code: 'const r = await request(app, { path: "/me", headers: { Authorization: "tok-an" } }); return [r.status, r.body];', label: 'thiếu chữ "Bearer "', expected: [401, { error: 'Unauthorized' }] },
      { code: 'const r = await request(app, { method: "DELETE", path: "/users/7", headers: { Authorization: "Bearer tok-jisoo" } }); return [r.status, r.body];', label: 'user thường xoá user → 403', expected: [403, { error: 'Forbidden' }] },
      { code: 'const r = await request(app, { method: "DELETE", path: "/users/7", headers: { Authorization: "Bearer tok-admin" } }); return r.status;', label: 'admin xoá user → 204', expected: 204 },
      { code: 'const r = await request(app, { method: "DELETE", path: "/users/7" }); return r.status;', label: 'chưa đăng nhập xoá user → 401 (không phải 403)', expected: 401 },
      { code: 'const r = await request(app, { path: "/health" }); return r.status;', label: 'route công khai không cần token', expected: 200 }
    ]
  },
  {
    id: 'error-handler',
    title: 'Error handler tập trung',
    difficulty: 'medium',
    helpers: apiHelpers(),
    prompt: `
Các handler trong starter **ném lỗi** thay vì tự trả response. Viết error middleware 4 tham số \`app.use((err, req, res, next) => ...)\`:

- \`err instanceof HttpError\` (class có sẵn, có \`err.status\`) → trả \`err.status\` + \`{ "error": err.message }\`.
- \`err.name === "ValidationError"\` → \`400\` + \`{ "error": "Validation failed", "fields": err.fields }\`.
- Mọi lỗi khác → \`500\` + \`{ "error": "Internal Server Error" }\` — **không** để lộ \`err.message\`; đồng thời ghi log bằng \`console.error\`.

Gọi \`app.use(errorHandler)\` **sau** khi khai báo các route.
`,
    starter: `
const app = createApp();

app.get("/products/:id", (req, res) => {
  if (req.params.id !== "1") throw new HttpError(404, "Product not found");
  res.json({ id: 1, name: "Laptop Pro 14" });
});

app.post("/orders", (req, res) => {
  const err = new Error("Invalid order");
  err.name = "ValidationError";
  err.fields = { quantity: "must be a positive integer" };
  throw err;
});

app.get("/crash", async (req, res) => {
  const config = undefined;
  res.json({ dbPassword: config.db.password });   // bug thật
});

// viết error handler ở đây
`,
    solution: `
const app = createApp();

app.get("/products/:id", (req, res) => {
  if (req.params.id !== "1") throw new HttpError(404, "Product not found");
  res.json({ id: 1, name: "Laptop Pro 14" });
});

app.post("/orders", (req, res) => {
  const err = new Error("Invalid order");
  err.name = "ValidationError";
  err.fields = { quantity: "must be a positive integer" };
  throw err;
});

app.get("/crash", async (req, res) => {
  const config = undefined;
  res.json({ dbPassword: config.db.password });
});

app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ error: err.message });
  }
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: "Validation failed", fields: err.fields });
  }
  console.error("Unexpected error on", req.method, req.path, err);
  res.status(500).json({ error: "Internal Server Error" });
});
`,
    hints: [
      'Error middleware **phải** có đúng 4 tham số `(err, req, res, next)` — framework dựa vào số tham số để nhận ra nó.',
      'Xét các trường hợp từ cụ thể đến chung, mỗi nhánh `return res.status(...).json(...)`.'
    ],
    tests: [
      { code: 'const r = await request(app, { path: "/products/1" }); return [r.status, r.body];', label: 'GET /products/1 (không lỗi)', expected: [200, { id: 1, name: 'Laptop Pro 14' }] },
      { code: 'const r = await request(app, { path: "/products/5" }); return [r.status, r.body];', label: 'HttpError 404', expected: [404, { error: 'Product not found' }] },
      { code: 'const r = await request(app, { method: "POST", path: "/orders", body: {} }); return [r.status, r.body];', label: 'ValidationError', expected: [400, { error: 'Validation failed', fields: { quantity: 'must be a positive integer' } }] },
      { code: 'const r = await request(app, { path: "/crash" }); return [r.status, r.body];', label: 'bug trong handler async → 500, không lộ chi tiết', expected: [500, { error: 'Internal Server Error' }] },
      { code: 'const logs = []; const orig = console.error; console.error = (...a) => logs.push(a); try { await request(app, { path: "/crash" }); } finally { console.error = orig; } return logs.length > 0;', label: 'lỗi 500 được ghi log bằng console.error', expected: true }
    ]
  },
  {
    id: 'rate-limit',
    title: 'Giới hạn tần suất (rate limiting)',
    difficulty: 'hard',
    helpers: apiHelpers({ extra: CLOCK }),
    prompt: `
Viết \`rateLimit({ limit, windowMs })\` trả về middleware giới hạn mỗi **client** (xác định bằng header \`x-api-key\`, thiếu thì dùng \`"anonymous"\`) tối đa \`limit\` request trong mỗi **cửa sổ cố định** dài \`windowMs\`.

- Cửa sổ bắt đầu ở request **đầu tiên** của client đó; hết \`windowMs\` thì đếm lại từ 0.
- Vượt giới hạn → \`429 { "error": "Too Many Requests" }\` kèm header \`Retry-After\` = số **giây** còn lại tới khi cửa sổ mới bắt đầu (làm tròn **lên**).
- Mỗi response hợp lệ có header \`X-RateLimit-Remaining\` = số request còn được phép trong cửa sổ hiện tại.
- Dùng \`clock.now()\` (có sẵn) thay vì \`Date.now()\` để test điều khiển được thời gian.
`,
    starter: `
const app = createApp();

function rateLimit({ limit, windowMs }) {
  return (req, res, next) => {
    next();
  };
}

app.use(rateLimit({ limit: 3, windowMs: 60000 }));
app.get("/ping", (req, res) => res.json({ pong: true }));
`,
    solution: `
const app = createApp();

function rateLimit({ limit, windowMs }) {
  const windows = new Map(); // key → { start, count }
  return (req, res, next) => {
    const key = req.headers["x-api-key"] || "anonymous";
    const now = clock.now();
    let w = windows.get(key);
    if (!w || now - w.start >= windowMs) {
      w = { start: now, count: 0 };
      windows.set(key, w);
    }
    if (w.count >= limit) {
      const retryAfter = Math.ceil((w.start + windowMs - now) / 1000);
      return res.status(429).set("Retry-After", retryAfter).json({ error: "Too Many Requests" });
    }
    w.count++;
    res.set("X-RateLimit-Remaining", limit - w.count);
    next();
  };
}

app.use(rateLimit({ limit: 3, windowMs: 60000 }));
app.get("/ping", (req, res) => res.json({ pong: true }));
`,
    hints: [
      'Closure giữ một `Map`: key client → `{ start, count }`.',
      'Mỗi request: nếu chưa có cửa sổ, hoặc `now - start >= windowMs` → tạo cửa sổ mới `{ start: now, count: 0 }`.',
      '`Retry-After` = `Math.ceil((start + windowMs - now) / 1000)`.'
    ],
    explain: '**Fixed window** đơn giản nhưng có điểm yếu: client có thể gửi `limit` request ở cuối cửa sổ cũ và `limit` request ở đầu cửa sổ mới → gấp đôi trong thời gian ngắn. Các lựa chọn tốt hơn: sliding window log, sliding window counter, token bucket. Khi chạy nhiều server, bộ đếm phải nằm ở nơi dùng chung như **Redis** (`INCR` + `EXPIRE`).',
    followUp: 'Tại sao lưu bộ đếm trong `Map` của process là **sai** khi bạn chạy 4 instance Node sau load balancer? Và chuyện gì xảy ra với `Map` này sau vài tháng nếu có hàng triệu API key khác nhau?',
    tests: [
      { code: 'clock.time = 0; const out = []; for (let i = 0; i < 4; i++) { const r = await request(app, { path: "/ping", headers: { "x-api-key": "k1" } }); out.push([r.status, r.headers["x-ratelimit-remaining"] || null]); } return out;', label: '4 request liên tiếp, giới hạn 3', expected: [[200, '2'], [200, '1'], [200, '0'], [429, null]] },
      { code: 'clock.time = 1000000; for (let i = 0; i < 3; i++) await request(app, { path: "/ping", headers: { "x-api-key": "k2" } }); clock.advance(15500); const r = await request(app, { path: "/ping", headers: { "x-api-key": "k2" } }); return [r.status, r.body, r.headers["retry-after"]];', label: 'bị chặn sau 15,5 giây → Retry-After = 45', expected: [429, { error: 'Too Many Requests' }, '45'] },
      { code: 'clock.time = 2000000; for (let i = 0; i < 3; i++) await request(app, { path: "/ping", headers: { "x-api-key": "k3" } }); clock.advance(60000); const r = await request(app, { path: "/ping", headers: { "x-api-key": "k3" } }); return [r.status, r.headers["x-ratelimit-remaining"]];', label: 'hết 60 giây → cửa sổ mới', expected: [200, '2'] },
      { code: 'clock.time = 3000000; for (let i = 0; i < 3; i++) await request(app, { path: "/ping", headers: { "x-api-key": "k4" } }); const other = await request(app, { path: "/ping", headers: { "x-api-key": "k5" } }); return other.status;', label: 'mỗi client có giới hạn riêng', expected: 200 },
      { code: 'clock.time = 4000000; const out = []; for (let i = 0; i < 4; i++) out.push((await request(app, { path: "/ping" })).status); return out;', label: 'không có x-api-key → chung nhóm "anonymous"', expected: [200, 200, 200, 429] }
    ]
  }
];
