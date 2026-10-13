// Sinh đoạn "Code có sẵn" cho các bài API: một mini framework giống Express + (tuỳ chọn) SQLite.
// Không phải file bài học (build chỉ đọc *.md và *.exercises.js).

const FRAMEWORK = `
// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====
// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)
// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)
// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function createApp() {
  const routes = [];
  const middlewares = [];
  let errorHandler = null;
  const app = {
    use(fn) {
      if (fn.length === 4) errorHandler = fn;
      else middlewares.push(fn);
      return app;
    }
  };
  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
    app[method] = (path, ...handlers) => {
      const keys = [];
      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {
        keys.push(k);
        return '([^/]+)';
      });
      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });
      return app;
    };
  }
  app.handle = async (req, res) => {
    let route = null;
    for (const r of routes) {
      const m = r.method === req.method && r.re.exec(req.path);
      if (m) {
        route = r;
        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));
        break;
      }
    }
    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });
    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];
    let index = 0;
    let failure = null;
    const pending = [];
    const next = (err) => {
      if (err) {
        failure = failure || err;
        return Promise.resolve();
      }
      const p = (async () => {
        if (res.sent || failure) return;
        const handler = chain[index++];
        if (!handler) return;
        try {
          await handler(req, res, next);
        } catch (e) {
          failure = failure || e;
        }
      })();
      pending.push(p);
      return p;
    };
    next();
    while (pending.length) await pending.shift();
    if (failure) {
      if (errorHandler) {
        try {
          await errorHandler(failure, req, res, () => {});
        } catch (e) {
          failure = e;
        }
      }
      if (!res.sent) {
        if (!failure.status) console.error('Lỗi trong handler:', failure);
        const status = failure.status || 500;
        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });
      }
    }
    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });
  };
  return app;
}

function createResponse() {
  const res = {
    statusCode: 200,
    headers: {},
    body: undefined,
    sent: false,
    status(code) {
      res.statusCode = code;
      return res;
    },
    set(name, value) {
      res.headers[String(name).toLowerCase()] = String(value);
      return res;
    },
    json(data) {
      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');
      res.headers['content-type'] = 'application/json';
      res.body = data;
      res.sent = true;
      return res;
    },
    send(text) {
      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');
      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';
      res.body = text;
      res.sent = true;
      return res;
    },
    end() {
      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');
      res.sent = true;
      return res;
    }
  };
  return res;
}

// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.
// Body được "đi qua mạng" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.
function request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {
  const hold = typeof __hold === 'function' ? __hold : (p) => p;
  return hold((async () => {
    if (typeof __ensureDb === 'function') await __ensureDb();
    const url = new URL(path, 'http://localhost');
    const lowerHeaders = {};
    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);
    const req = {
      method: method.toUpperCase(),
      path: url.pathname,
      params: {},
      query: Object.fromEntries(url.searchParams),
      headers: lowerHeaders,
      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))
    };
    const res = createResponse();
    await app.handle(req, res);
    return {
      status: res.statusCode,
      headers: res.headers,
      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))
    };
  })());
}
`;

function dbHelpers(seed) {
  return `
// ===== Database SQLite thật (sql.js) =====
// query(sql, params)   → mảng object, dùng cho SELECT        VD: query('SELECT * FROM users WHERE id = ?', [id])
// execute(sql, params) → { changes, lastInsertId }, dùng cho INSERT / UPDATE / DELETE
// db                   → đối tượng Database của sql.js (db.exec('BEGIN') ...)
// queryLog             → danh sách các câu SQL đã chạy qua query/execute (để đếm số truy vấn)
let db = null;
const queryLog = [];
const SEED_SQL = \`${seed}\`;

async function resetDb() {
  const SQL = await __sqlReady;
  if (db) db.close();
  db = new SQL.Database();
  db.exec(SEED_SQL);
  queryLog.length = 0;
  return db;
}

async function __ensureDb() {
  if (!db) await resetDb();
}

function query(sql, params = []) {
  queryLog.push(sql);
  const stmt = db.prepare(sql);
  try {
    stmt.bind(params);
    const rows = [];
    while (stmt.step()) rows.push(stmt.getAsObject());
    return rows;
  } finally {
    stmt.free();
  }
}

function execute(sql, params = []) {
  queryLog.push(sql);
  db.run(sql, params);
  const changes = db.getRowsModified();
  const lastInsertId = db.exec('SELECT last_insert_rowid()')[0].values[0][0];
  return { changes, lastInsertId };
}
`;
}

module.exports = function apiHelpers({ seed, extra } = {}) {
  return FRAMEWORK + (seed ? dbHelpers(seed) : '') + (extra || '');
};
