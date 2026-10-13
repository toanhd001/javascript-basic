const apiHelpers = require('./_api-helpers.js');

const TODO_DATA = `
// ===== Dữ liệu trong bộ nhớ (mỗi test được reset lại) =====
let todos = [];
let nextTodoId = 1;
function resetData() {
  todos = [
    { id: 1, title: "Học SQL", done: false },
    { id: 2, title: "Ôn HTTP status code", done: true },
    { id: 3, title: "Viết REST API", done: false }
  ];
  nextTodoId = 4;
}
resetData();
`;
const helpers = apiHelpers({ extra: TODO_DATA });

const call = (opts) => `resetData(); const r = await request(app, ${opts}); return [r.status, r.body];`;

module.exports = [
  {
    id: 'rest-get-todos',
    title: 'GET danh sách và một todo',
    difficulty: 'easy',
    helpers,
    prompt: `
Mảng \`todos\` đã có sẵn (xem "Code có sẵn"). Viết hai route:

- \`GET /todos\` → \`200\` + mảng todo. Hỗ trợ lọc \`?done=true\` / \`?done=false\` (nhớ: query là **chuỗi**).
- \`GET /todos/:id\` → \`200\` + todo, hoặc \`404\` + \`{ "error": "Todo not found" }\`.
`,
    starter: `
const app = createApp();

app.get("/todos", (req, res) => {

});

app.get("/todos/:id", (req, res) => {

});

// thử: request(app, { path: "/todos?done=false" }).then(console.log);
`,
    solution: `
const app = createApp();

app.get("/todos", (req, res) => {
  let result = todos;
  if (req.query.done === "true") result = todos.filter((t) => t.done);
  if (req.query.done === "false") result = todos.filter((t) => !t.done);
  res.json(result);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});
`,
    hints: [
      '`req.params.id` là chuỗi `"2"` — so sánh với `t.id` (số) phải đổi `Number(...)` trước, nếu không `===` luôn false.',
      '`req.query.done` là chuỗi `"true"` / `"false"`, không phải boolean.'
    ],
    tests: [
      { code: call('{ path: "/todos" }'), label: 'GET /todos', expected: [200, [{ id: 1, title: 'Học SQL', done: false }, { id: 2, title: 'Ôn HTTP status code', done: true }, { id: 3, title: 'Viết REST API', done: false }]] },
      { code: call('{ path: "/todos?done=false" }'), label: 'GET /todos?done=false', expected: [200, [{ id: 1, title: 'Học SQL', done: false }, { id: 3, title: 'Viết REST API', done: false }]] },
      { code: call('{ path: "/todos?done=true" }'), label: 'GET /todos?done=true', expected: [200, [{ id: 2, title: 'Ôn HTTP status code', done: true }]] },
      { code: call('{ path: "/todos/2" }'), label: 'GET /todos/2', expected: [200, { id: 2, title: 'Ôn HTTP status code', done: true }] },
      { code: call('{ path: "/todos/99" }'), label: 'GET /todos/99', expected: [404, { error: 'Todo not found' }] },
      { code: call('{ path: "/todos/abc" }'), label: 'GET /todos/abc', expected: [404, { error: 'Todo not found' }] }
    ]
  },
  {
    id: 'rest-create-todo',
    title: 'POST tạo todo có validate',
    difficulty: 'medium',
    helpers,
    prompt: `
Viết \`POST /todos\` nhận body \`{ "title": "..." }\`:

- \`title\` phải là **chuỗi**, sau khi \`trim()\` dài **1–100** ký tự. Sai → \`400\` + \`{ "error": "title must be 1-100 characters" }\`.
- Trường \`done\` nếu có phải là boolean, sai kiểu → \`400\` + \`{ "error": "done must be a boolean" }\`. Không có thì mặc định \`false\`.
- Thành công → \`201\`, thêm vào \`todos\` với \`id = nextTodoId++\`, trả về todo vừa tạo \`{ id, title, done }\` (title đã trim). Thêm header \`Location: /todos/<id>\`.
- **Bỏ qua** mọi trường khác client gửi lên (VD \`id\`, \`isAdmin\`) — không được để client tự đặt id.
`,
    starter: `
const app = createApp();

app.post("/todos", (req, res) => {
  const todo = { id: nextTodoId++, ...req.body };
  todos.push(todo);
  res.json(todo);
});
`,
    solution: `
const app = createApp();

app.post("/todos", (req, res) => {
  const { title, done = false } = req.body || {};
  if (typeof title !== "string" || title.trim().length < 1 || title.trim().length > 100) {
    return res.status(400).json({ error: "title must be 1-100 characters" });
  }
  if (typeof done !== "boolean") {
    return res.status(400).json({ error: "done must be a boolean" });
  }
  const todo = { id: nextTodoId++, title: title.trim(), done };
  todos.push(todo);
  res.status(201).set("Location", "/todos/" + todo.id).json(todo);
});
`,
    hints: [
      'Code có sẵn có lỗ hổng "mass assignment": `...req.body` cho phép client gửi `id` hoặc trường lạ vào dữ liệu của bạn. Chỉ lấy đúng các trường cần.',
      'Kiểm tra `typeof title !== "string"` **trước** khi gọi `title.trim()` (nếu title là số, `.trim` không tồn tại → 500).',
      '`res.status(201).set("Location", ...).json(todo)` — các hàm trả về `res` nên viết nối được.'
    ],
    explain: '**Mass assignment** (gán hàng loạt) là lỗ hổng thật từng xảy ra ở GitHub (2012): client gửi thêm trường mà server vô tình lưu lại, VD `{"role": "admin"}`. Nguyên tắc: **whitelist** — chỉ đọc đúng các trường bạn cho phép.',
    followUp: 'Nếu client gửi `POST /todos` hai lần vì mạng chập chờn, bạn sẽ có hai todo giống hệt nhau. Làm sao thiết kế API để chống trùng? (Gợi ý: header `Idempotency-Key`.)',
    tests: [
      { code: 'resetData(); const r = await request(app, { method: "POST", path: "/todos", body: { title: "  Ôn Big-O  " } }); return [r.status, r.body, r.headers.location, todos.length];', label: 'POST hợp lệ (title có khoảng trắng thừa)', expected: [201, { id: 4, title: 'Ôn Big-O', done: false }, '/todos/4', 4] },
      { code: call('{ method: "POST", path: "/todos", body: { title: "Xong", done: true } }'), label: 'có done = true', expected: [201, { id: 4, title: 'Xong', done: true }] },
      { code: call('{ method: "POST", path: "/todos", body: { title: "   " } }'), label: 'title toàn khoảng trắng', expected: [400, { error: 'title must be 1-100 characters' }] },
      { code: call('{ method: "POST", path: "/todos", body: {} }'), label: 'thiếu title', expected: [400, { error: 'title must be 1-100 characters' }] },
      { code: call('{ method: "POST", path: "/todos", body: { title: 123 } }'), label: 'title là số', expected: [400, { error: 'title must be 1-100 characters' }] },
      { code: call('{ method: "POST", path: "/todos", body: { title: "x".repeat(101) } }'), label: 'title 101 ký tự', expected: [400, { error: 'title must be 1-100 characters' }] },
      { code: call('{ method: "POST", path: "/todos", body: { title: "A", done: "yes" } }'), label: 'done sai kiểu', expected: [400, { error: 'done must be a boolean' }] },
      { code: call('{ method: "POST", path: "/todos", body: { title: "Hack", id: 1, isAdmin: true } }'), label: 'client gửi kèm id và trường lạ', expected: [201, { id: 4, title: 'Hack', done: false }] },
      { code: 'resetData(); await request(app, { method: "POST", path: "/todos", body: {} }); return todos.length;', label: 'request lỗi không được thêm gì vào todos', expected: 3 }
    ]
  },
  {
    id: 'rest-update-delete',
    title: 'PATCH và DELETE',
    difficulty: 'medium',
    helpers,
    prompt: `
- \`PATCH /todos/:id\` với body có thể chứa \`title\` và/hoặc \`done\` — chỉ sửa các trường **được gửi**. Validate như bài trước (cùng thông báo lỗi). Không tìm thấy → \`404 { "error": "Todo not found" }\`. Thành công → \`200\` + todo sau khi sửa.
- \`DELETE /todos/:id\` → xoá, trả \`204\` **không có body** (dùng \`res.status(204).end()\`). Không tìm thấy → \`404\`.

Thứ tự kiểm tra cho PATCH: tìm todo trước (404), rồi mới validate (400).
`,
    starter: `
const app = createApp();

app.patch("/todos/:id", (req, res) => {

});

app.delete("/todos/:id", (req, res) => {

});
`,
    solution: `
const app = createApp();

app.patch("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  const body = req.body || {};
  if ("title" in body) {
    if (typeof body.title !== "string" || body.title.trim().length < 1 || body.title.trim().length > 100) {
      return res.status(400).json({ error: "title must be 1-100 characters" });
    }
  }
  if ("done" in body && typeof body.done !== "boolean") {
    return res.status(400).json({ error: "done must be a boolean" });
  }
  if ("title" in body) todo.title = body.title.trim();
  if ("done" in body) todo.done = body.done;
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Todo not found" });
  todos.splice(index, 1);
  res.status(204).end();
});
`,
    hints: [
      'Kiểm tra trường có được gửi hay không bằng `"title" in body` (phân biệt "không gửi" với "gửi giá trị rỗng").',
      'Validate **tất cả** trường trước rồi mới sửa — nếu `title` hợp lệ nhưng `done` sai kiểu, không được sửa `title` nửa chừng.'
    ],
    explain: '"Validate hết rồi mới ghi" là phiên bản nhỏ của **tính nguyên tử** (atomicity): một request hoặc thành công hoàn toàn, hoặc không thay đổi gì. Ở bài transaction bạn sẽ gặp lại ý tưởng này với database.',
    tests: [
      { code: call('{ method: "PATCH", path: "/todos/1", body: { done: true } }'), label: 'PATCH chỉ done', expected: [200, { id: 1, title: 'Học SQL', done: true }] },
      { code: call('{ method: "PATCH", path: "/todos/3", body: { title: " REST xong " } }'), label: 'PATCH chỉ title', expected: [200, { id: 3, title: 'REST xong', done: false }] },
      { code: call('{ method: "PATCH", path: "/todos/9", body: { done: true } }'), label: 'PATCH không tồn tại', expected: [404, { error: 'Todo not found' }] },
      { code: 'resetData(); const r = await request(app, { method: "PATCH", path: "/todos/1", body: { title: "Mới", done: "x" } }); return [r.status, r.body, todos[0].title];', label: 'done sai kiểu → không sửa gì cả', expected: [400, { error: 'done must be a boolean' }, 'Học SQL'] },
      { code: call('{ method: "PATCH", path: "/todos/1", body: { title: "" } }'), label: 'title rỗng', expected: [400, { error: 'title must be 1-100 characters' }] },
      { code: 'resetData(); const r = await request(app, { method: "DELETE", path: "/todos/2" }); return [r.status, r.body, todos.map((t) => t.id)];', label: 'DELETE /todos/2', expected: [204, undefined, [1, 3]] },
      { code: 'resetData(); const r = await request(app, { method: "DELETE", path: "/todos/7" }); return [r.status, r.body, todos.length];', label: 'DELETE không tồn tại', expected: [404, { error: 'Todo not found' }, 3] }
    ]
  }
];
