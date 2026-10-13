module.exports = [
  {
    id: 'parse-http-request',
    title: 'Tự phân tích một HTTP request',
    difficulty: 'medium',
    fn: 'parseRequest',
    prompt: `
Viết \`parseRequest(raw)\` nhận một HTTP request dạng **chuỗi** (các dòng cách nhau bởi \`\\r\\n\`) và trả về:

\`\`\`js
{
  method: "POST",
  path: "/api/orders",            // không gồm query string
  query: { coupon: "SALE10" },    // object, giá trị là chuỗi đã giải mã
  headers: { "content-type": "application/json", host: "shop.kr" },  // tên header viết THƯỜNG
  body: "{\\"productId\\":3}"       // chuỗi body (rỗng nếu không có)
}
\`\`\`

Header có thể có khoảng trắng thừa quanh giá trị; giá trị header có thể chứa dấu \`:\` (VD \`Host: localhost:3000\`).
`,
    starter: `
function parseRequest(raw) {

}
`,
    solution: `
function parseRequest(raw) {
  const sep = raw.indexOf("\\r\\n\\r\\n");
  const head = sep === -1 ? raw : raw.slice(0, sep);
  const body = sep === -1 ? "" : raw.slice(sep + 4);
  const [requestLine, ...headerLines] = head.split("\\r\\n");
  const [method, target] = requestLine.split(" ");
  const url = new URL(target, "http://localhost");
  const headers = {};
  for (const line of headerLines) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    headers[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim();
  }
  return {
    method,
    path: url.pathname,
    query: Object.fromEntries(url.searchParams),
    headers,
    body
  };
}
`,
    hints: [
      'Phần đầu và body cách nhau bởi một dòng trống: tìm `"\\r\\n\\r\\n"`.',
      'Dòng đầu: `METHOD target HTTP/1.1`. Dùng `new URL(target, "http://localhost")` để tách `pathname` và `searchParams`.',
      'Mỗi header: tách tại dấu `:` **đầu tiên** (`indexOf`), không dùng `split(":")` vì giá trị có thể chứa `:`.'
    ],
    explain: 'Framework như Express làm đúng việc này (bằng thư viện C rất nhanh) trước khi gọi handler của bạn. Biết cấu trúc này giúp bạn đọc log của Nginx, debug bằng `curl -v`, và hiểu tại sao header không phân biệt hoa thường.',
    tests: [
      {
        args: ['POST /api/orders?coupon=SALE10 HTTP/1.1\r\nHost: shop.kr\r\nContent-Type:  application/json \r\n\r\n{"productId":3}'],
        expected: { method: 'POST', path: '/api/orders', query: { coupon: 'SALE10' }, headers: { host: 'shop.kr', 'content-type': 'application/json' }, body: '{"productId":3}' }
      },
      {
        args: ['GET /api/users/7 HTTP/1.1\r\nHost: localhost:3000\r\nAuthorization: Bearer abc:123\r\n\r\n'],
        expected: { method: 'GET', path: '/api/users/7', query: {}, headers: { host: 'localhost:3000', authorization: 'Bearer abc:123' }, body: '' }
      },
      {
        args: ['GET /search?q=clean%20code&page=2 HTTP/1.1\r\nHOST: a.kr\r\n\r\n'],
        expected: { method: 'GET', path: '/search', query: { q: 'clean code', page: '2' }, headers: { host: 'a.kr' }, body: '' }
      }
    ]
  },
  {
    id: 'build-http-response',
    title: 'Tự tạo một HTTP response',
    difficulty: 'medium',
    fn: 'buildResponse',
    prompt: `
Viết \`buildResponse(status, data)\` trả về chuỗi HTTP response với body là \`JSON.stringify(data)\`:

\`\`\`text
HTTP/1.1 201 Created\\r\\n
Content-Type: application/json\\r\\n
Content-Length: <số BYTE của body>\\r\\n
\\r\\n
<body>
\`\`\`

Bảng lý do (reason phrase) cần hỗ trợ: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error.

⚠️ \`Content-Length\` tính bằng **byte UTF-8**, không phải số ký tự.
`,
    starter: `
function buildResponse(status, data) {
  const body = JSON.stringify(data);
  return "HTTP/1.1 " + status + "\\r\\n" +
    "Content-Type: application/json\\r\\n" +
    "Content-Length: " + body.length + "\\r\\n\\r\\n" +
    body;
}
`,
    solution: `
const REASONS = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  404: "Not Found",
  500: "Internal Server Error"
};

function buildResponse(status, data) {
  const body = JSON.stringify(data);
  const bytes = new TextEncoder().encode(body).length;
  return "HTTP/1.1 " + status + " " + REASONS[status] + "\\r\\n" +
    "Content-Type: application/json\\r\\n" +
    "Content-Length: " + bytes + "\\r\\n\\r\\n" +
    body;
}
`,
    hints: [
      'Code có sẵn có hai lỗi: thiếu reason phrase sau mã trạng thái, và đếm ký tự thay vì byte.',
      'Số byte UTF-8: `new TextEncoder().encode(body).length`.'
    ],
    tests: [
      { args: [200, { ok: true }], expected: 'HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: 11\r\n\r\n{"ok":true}' },
      { args: [404, { error: 'Not Found' }], expected: 'HTTP/1.1 404 Not Found\r\nContent-Type: application/json\r\nContent-Length: 21\r\n\r\n{"error":"Not Found"}' },
      { args: [201, { name: '안녕' }], expected: 'HTTP/1.1 201 Created\r\nContent-Type: application/json\r\nContent-Length: 17\r\n\r\n{"name":"안녕"}', label: 'body có chữ Hàn (mỗi chữ 3 byte)' },
      { args: [400, { error: 'Thiếu tên' }], expected: 'HTTP/1.1 400 Bad Request\r\nContent-Type: application/json\r\nContent-Length: 24\r\n\r\n{"error":"Thiếu tên"}', label: 'body có tiếng Việt' }
    ]
  }
];
