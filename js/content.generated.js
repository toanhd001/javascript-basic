/* FILE TỰ SINH bởi scripts/build.js — đừng sửa tay. Sửa trong content/ rồi chạy: npm run build */
window.CURRICULUM = [
 {
  "id": "start",
  "title": "Khởi động",
  "desc": "<p>Cách dùng trang này, chạy code đầu tiên và đọc thông báo lỗi — kỹ năng quan trọng nhất của lập trình viên.</p>\n",
  "lessons": [
   {
    "id": "welcome",
    "title": "Chào JavaScript — chạy code đầu tiên",
    "html": "<p>JavaScript (JS) là ngôn ngữ chạy trong <strong>mọi trình duyệt</strong> và cả phía server (Node.js). Với coding test, JS là lựa chọn rất phổ biến vì cú pháp gọn và có sẵn mảng, object, <code>Map</code>, <code>Set</code>.</p>\n<h2>Trang này hoạt động thế nào</h2>\n<p>Mỗi bài gồm hai phần:</p>\n<ol><li><strong>Lý thuyết</strong> (bên trái): đọc, rồi bấm <strong>▶ Chạy</strong> dưới mỗi ví dụ để xem kết quả ngay.</li><li><strong>Bài tập</strong> (bên phải): viết code vào editor, bấm <strong>✓ Chạy test</strong> để chấm. Code của bạn được chạy trong một &quot;sandbox&quot; riêng (Web Worker) nên dù lỡ viết vòng lặp vô hạn, trang cũng không bị treo — nó tự dừng sau vài giây.</li></ol>\n<h2><code>console.log</code> — cửa sổ nhìn vào chương trình</h2>\n<p><code>console.log(...)</code> in giá trị ra màn hình. Đây là công cụ debug số một: khi không hiểu code đang làm gì, hãy <strong>in ra</strong> thay vì đoán.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(&quot;Xin chào!&quot;);\nconsole.log(1 + 2);\nconsole.log(&quot;Tổng:&quot;, 1 + 2, &quot;— in được nhiều giá trị cùng lúc&quot;);\nconsole.log([1, 2, 3], { ten: &quot;An&quot;, tuoi: 20 });</code></pre>\n<h2>Hàm và <code>return</code></h2>\n<p>Hầu hết bài tập (và hầu hết coding test như LeetCode) yêu cầu bạn viết một <strong>hàm</strong> nhận input qua tham số và <strong>trả về</strong> (<code>return</code>) kết quả. Bộ chấm sẽ gọi hàm của bạn với nhiều input khác nhau rồi so sánh giá trị trả về.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function add(a, b) {\n  return a + b;\n}\n\nconst result = add(2, 3);\nconsole.log(result); // 5</code></pre>\n<blockquote><p><strong>In ra khác trả về.</strong> <code>console.log</code> chỉ hiển thị cho người đọc; <code>return</code> mới là giá trị mà code khác (và bộ chấm) nhận được. Lỗi phổ biến nhất của người mới: hàm <code>console.log(kết quả)</code> nhưng quên <code>return</code>, nên bộ chấm nhận <code>undefined</code>.</p>\n</blockquote>\n<h2>Đọc thông báo lỗi</h2>\n<p>Lỗi không đáng sợ — nó cho bạn biết <strong>loại lỗi</strong>, <strong>lý do</strong> và <strong>dòng</strong> gây lỗi. Bấm chạy ví dụ dưới đây:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">try {\n  const name = &quot;JS&quot;;\n  console.log(nmae); // gõ sai tên biến\n} catch (error) {\n  console.log(error.name + &quot;: &quot; + error.message);\n}</code></pre>\n<p>Ba loại lỗi bạn sẽ gặp nhiều nhất:</p>\n<table><thead><tr><th>Lỗi</th><th>Nghĩa</th><th>Ví dụ</th></tr></thead>\n<tbody>\n<tr><td><code>SyntaxError</code></td><td>Viết sai ngữ pháp, code <strong>không chạy được dòng nào</strong></td><td>thiếu <code>}</code>, thiếu <code>)</code></td></tr>\n<tr><td><code>ReferenceError</code></td><td>Dùng biến chưa khai báo</td><td>gõ sai tên <code>nmae</code></td></tr>\n<tr><td><code>TypeError</code></td><td>Dùng giá trị sai kiểu</td><td>gọi <code>undefined.length</code></td></tr>\n</tbody></table>\n<p>Trong editor, dòng gây lỗi sẽ được <strong>tô đỏ ở cột số dòng</strong>; bấm vào nút &quot;dòng N&quot; để nhảy tới.</p>\n<h2>Ba nút bạn nên dùng thường xuyên</h2>\n<ul><li><strong>🔍 Kiểm tra cú pháp</strong>: bắt lỗi cú pháp mà <em>không chạy code</em>, kèm gợi ý các &quot;bẫy&quot; hay gặp trong coding test (dùng <code>==</code>, <code>sort()</code> không comparator...).</li><li><strong>▶ Chạy</strong>: chạy code và xem <code>console.log</code>, không chấm điểm.</li><li><strong>✓ Chạy test</strong>: chấm với bộ test, kể cả <strong>test ẩn</strong> với input lớn để kiểm tra tốc độ — giống coding test thật.</li></ul>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao bộ chấm so sánh <strong>giá trị trả về</strong> chứ không đọc những gì bạn <code>console.log</code>? (Gợi ý: nghĩ về việc một hàm được dùng lại ở chỗ khác.)</li><li>Tại sao <code>SyntaxError</code> làm cả chương trình không chạy, còn <code>TypeError</code> thì các dòng trước đó vẫn chạy?</li></ul>\n",
    "source": "content/00-start/01-welcome.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "hello-world",
      "title": "Hello, World!",
      "difficulty": "easy",
      "prompt": "<p>Viết hàm <code>hello()</code> <strong>trả về</strong> chuỗi <code>&quot;Hello, World!&quot;</code> (đúng từng ký tự, có dấu phẩy và chấm than).</p>\n",
      "fn": "hello",
      "starter": "function hello() {\n  // viết code ở đây\n}\n",
      "solution": "function hello() {\n  return \"Hello, World!\";\n}\n",
      "explain": "<p>Hàm chỉ cần <code>return</code> một chuỗi cố định. Nếu bạn viết <code>console.log(&quot;Hello, World!&quot;)</code> thay vì <code>return</code>, bộ chấm sẽ nhận <code>undefined</code>.</p>\n",
      "hints": [
       "<p>Dùng từ khoá <code>return</code> theo sau là chuỗi trong dấu nháy kép.</p>\n"
      ],
      "followUp": "<p>Thử đổi <code>return</code> thành <code>console.log</code> rồi chạy test lại. Tại sao test trượt dù màn hình vẫn in đúng chữ?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [],
        "expected": "Hello, World!"
       }
      ]
     },
     {
      "id": "sum-two",
      "title": "Cộng hai số",
      "difficulty": "easy",
      "prompt": "<p>Viết hàm <code>sum(a, b)</code> trả về tổng của hai số <code>a</code> và <code>b</code>.</p>\n",
      "fn": "sum",
      "starter": "function sum(a, b) {\n\n}\n",
      "solution": "function sum(a, b) {\n  return a + b;\n}\n",
      "explain": "",
      "hints": [
       "<p><code>return a + b;</code></p>\n"
      ],
      "followUp": "<p>Gọi thử <code>sum(&quot;1&quot;, 2)</code> trong nút ▶ Chạy (thêm <code>console.log(sum(&quot;1&quot;, 2))</code>). Kết quả là gì và <strong>tại sao</strong>? Đây là &quot;ép kiểu ngầm&quot; — bài sau sẽ nói kỹ.</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         1,
         2
        ],
        "expected": 3
       },
       {
        "args": [
         -5,
         5
        ],
        "expected": 0
       },
       {
        "args": [
         0.5,
         0.25
        ],
        "expected": 0.75
       },
       {
        "args": [
         1000000,
         2345678
        ],
        "expected": 3345678
       }
      ]
     },
     {
      "id": "fix-bugs",
      "title": "Sửa lỗi",
      "difficulty": "easy",
      "prompt": "<p>Đoạn code dưới đây có <strong>3 lỗi</strong>. Dùng nút <strong>🔍 Kiểm tra cú pháp</strong> và <strong>▶ Chạy</strong> để tìm và sửa, sao cho <code>areaOfRectangle(w, h)</code> trả về diện tích hình chữ nhật.</p>\n",
      "fn": "areaOfRectangle",
      "starter": "function areaOfRectangle(width, height {\n  const area = widht * height;\n  console.log(area);\n}\n",
      "solution": "function areaOfRectangle(width, height) {\n  const area = width * height;\n  return area;\n}\n",
      "explain": "",
      "hints": [
       "<p>Lỗi 1 là lỗi cú pháp ở dòng khai báo hàm: thiếu một dấu ngoặc.</p>\n",
       "<p>Lỗi 2: tên biến bị gõ sai → ReferenceError.</p>\n",
       "<p>Lỗi 3: hàm in ra nhưng không trả về.</p>\n"
      ],
      "followUp": "<p>Trong 3 lỗi, lỗi nào trình duyệt báo <strong>trước khi chạy</strong>, lỗi nào chỉ lộ ra <strong>khi chạy</strong>, và lỗi nào <strong>không hề báo lỗi</strong> mà chỉ cho kết quả sai? Loại nào nguy hiểm nhất khi đi làm?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": true,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         2,
         3
        ],
        "expected": 6
       },
       {
        "args": [
         10,
         10
        ],
        "expected": 100
       },
       {
        "args": [
         0,
         7
        ],
        "expected": 0
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "basics",
  "title": "JavaScript cơ bản",
  "desc": "<p>Biến, kiểu dữ liệu, điều kiện, vòng lặp, hàm, mảng, chuỗi, object, closure, class, bất đồng bộ — đủ để đọc và viết mọi lời giải coding test.</p>\n",
  "lessons": [
   {
    "id": "variables-types",
    "title": "Biến và kiểu dữ liệu",
    "html": "<h2>Khai báo biến: <code>const</code>, <code>let</code> (và vì sao tránh <code>var</code>)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const pi = 3.14;      // không gán lại được\nlet count = 0;        // gán lại được\ncount = count + 1;\nconsole.log(pi, count);\n\ntry {\n  pi = 3;             // TypeError\n} catch (e) {\n  console.log(e.message);\n}</code></pre>\n<p><strong>Quy tắc thực tế:</strong> mặc định dùng <code>const</code>; chỉ dùng <code>let</code> khi biết chắc sẽ gán lại (biến đếm, biến tích luỹ). Không dùng <code>var</code>.</p>\n<p>Tại sao? <code>var</code> có hai đặc điểm dễ gây bug:</p>\n<ul><li><strong>Function scope</strong> thay vì block scope: biến khai báo trong <code>if</code>/<code>for</code> &quot;lọt&quot; ra ngoài.</li><li><strong>Hoisting</strong> với giá trị <code>undefined</code>: dùng trước khi khai báo không báo lỗi mà ra <code>undefined</code> một cách âm thầm.</li></ul>\n<pre class=\"code\" data-run><code class=\"language-js\">if (true) {\n  var leaked = &quot;var lọt ra ngoài block&quot;;\n  let safe = &quot;let ở yên trong block&quot;;\n}\nconsole.log(leaked);\nconsole.log(typeof safe); // &quot;undefined&quot; vì safe không tồn tại ở đây</code></pre>\n<blockquote><p><code>const</code> <strong>không</strong> có nghĩa là giá trị bất biến. <code>const arr = []</code> vẫn <code>arr.push(1)</code> được — chỉ là không gán <code>arr = ...</code> lần nữa. <code>const</code> khoá <strong>biến</strong>, không khoá <strong>object</strong> mà biến trỏ tới.</p>\n</blockquote>\n<h2>7 kiểu nguyên thuỷ (primitive) + object</h2>\n<table><thead><tr><th>Kiểu</th><th>Ví dụ</th><th><code>typeof</code></th></tr></thead>\n<tbody>\n<tr><td>number</td><td><code>42</code>, <code>3.14</code>, <code>NaN</code>, <code>Infinity</code></td><td><code>&quot;number&quot;</code></td></tr>\n<tr><td>string</td><td><code>&quot;hi&quot;</code>, <code>'hi'</code>, <code> `hi` </code></td><td><code>&quot;string&quot;</code></td></tr>\n<tr><td>boolean</td><td><code>true</code>, <code>false</code></td><td><code>&quot;boolean&quot;</code></td></tr>\n<tr><td>undefined</td><td>biến chưa gán giá trị</td><td><code>&quot;undefined&quot;</code></td></tr>\n<tr><td>null</td><td>&quot;cố ý không có giá trị&quot;</td><td><code>&quot;object&quot;</code> ⚠️ (bug lịch sử)</td></tr>\n<tr><td>bigint</td><td><code>123n</code></td><td><code>&quot;bigint&quot;</code></td></tr>\n<tr><td>symbol</td><td><code>Symbol(&quot;id&quot;)</code></td><td><code>&quot;symbol&quot;</code></td></tr>\n<tr><td>object</td><td><code>{}</code>, <code>[]</code>, hàm, <code>Map</code>...</td><td><code>&quot;object&quot;</code> / <code>&quot;function&quot;</code></td></tr>\n</tbody></table>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(typeof 42, typeof &quot;a&quot;, typeof true, typeof undefined);\nconsole.log(typeof null);         // &quot;object&quot; — bug từ 1995, không sửa được vì sẽ phá web cũ\nconsole.log(typeof [1, 2]);       // &quot;object&quot; — mảng cũng là object!\nconsole.log(Array.isArray([1, 2])); // cách đúng để kiểm tra mảng\nconsole.log(typeof function () {}); // &quot;function&quot;</code></pre>\n<h2>Number: chỉ có MỘT kiểu số</h2>\n<p>JS không tách <code>int</code>/<code>float</code> như Java/C++. Mọi số là số thực 64-bit (IEEE 754). Hệ quả cần nhớ cho coding test:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(0.1 + 0.2);              // 0.30000000000000004\nconsole.log(0.1 + 0.2 === 0.3);      // false!\nconsole.log(Math.abs(0.1 + 0.2 - 0.3) &lt; Number.EPSILON); // cách so sánh số thực\n\nconsole.log(7 / 2);                  // 3.5 — chia KHÔNG làm tròn như C++/Java\nconsole.log(Math.floor(7 / 2));      // 3 — chia lấy phần nguyên\n\nconsole.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 ≈ 9 * 10^15\nconsole.log(2 ** 53 + 1);             // 9007199254740992 — sai! vượt ngưỡng an toàn\nconsole.log(2n ** 53n + 1n);          // BigInt thì đúng\n\nconsole.log(0 / 0, 1 / 0);           // NaN Infinity\nconsole.log(NaN === NaN);            // false — dùng Number.isNaN(x)</code></pre>\n<h2><code>null</code> vs <code>undefined</code></h2>\n<ul><li><code>undefined</code>: &quot;chưa có giá trị&quot; — biến chưa gán, thuộc tính không tồn tại, hàm không <code>return</code>.</li><li><code>null</code>: lập trình viên <strong>chủ động</strong> gán để nói &quot;không có gì&quot;.</li></ul>\n<h2>Ép kiểu ngầm và <code>==</code> vs <code>===</code></h2>\n<p><code>==</code> tự đổi kiểu trước khi so sánh, với những luật rất khó nhớ. <code>===</code> so sánh cả kiểu lẫn giá trị.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(1 == &quot;1&quot;, 1 === &quot;1&quot;);     // true false\nconsole.log(0 == &quot;&quot;, 0 === &quot;&quot;);       // true false\nconsole.log(null == undefined);       // true\nconsole.log(&quot;5&quot; + 1, &quot;5&quot; - 1);        // &quot;51&quot; 4  — + ưu tiên nối chuỗi, - thì ép về số\nconsole.log(Number(&quot;42&quot;), Number(&quot;4x&quot;), parseInt(&quot;42px&quot;, 10)); // 42 NaN 42\nconsole.log(String(42), (42).toString(), 42 + &quot;&quot;);</code></pre>\n<p><strong>Luôn dùng <code>===</code> và <code>!==</code>.</strong> Nút 🔍 Kiểm tra cú pháp sẽ nhắc nếu bạn lỡ dùng <code>==</code>.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao <code>typeof null === &quot;object&quot;</code> mà không ai sửa? Điều đó nói gì về việc thiết kế một ngôn ngữ chạy trên hàng tỉ trang web?</li><li>Trade-off của việc JS chỉ có một kiểu <code>number</code>: đơn giản hơn cho người mới, nhưng mất gì khi làm bài cần số nguyên rất lớn (VD tính giai thừa, modulo 10^9+7)?</li><li>Khi nào <code>==</code> lại <em>có ích</em>? (Gợi ý: <code>x == null</code> bắt cả <code>null</code> lẫn <code>undefined</code>.) Có đáng để đổi lấy rủi ro không?</li></ul>\n",
    "source": "content/01-basics/01-variables-types.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "get-type",
      "title": "Đoán kiểu dữ liệu",
      "difficulty": "easy",
      "prompt": "<p>Viết hàm <code>getType(value)</code> trả về tên kiểu của <code>value</code> dưới dạng chuỗi, <strong>sửa</strong> những chỗ <code>typeof</code> &quot;nói dối&quot;:</p>\n<ul><li>Mảng → <code>&quot;array&quot;</code> (thay vì <code>&quot;object&quot;</code>)</li><li><code>null</code> → <code>&quot;null&quot;</code> (thay vì <code>&quot;object&quot;</code>)</li><li>Còn lại → giống <code>typeof</code> (<code>&quot;number&quot;</code>, <code>&quot;string&quot;</code>, <code>&quot;boolean&quot;</code>, <code>&quot;undefined&quot;</code>, <code>&quot;object&quot;</code>, <code>&quot;function&quot;</code>, <code>&quot;bigint&quot;</code>...)</li></ul>\n",
      "fn": "getType",
      "starter": "function getType(value) {\n\n}\n",
      "solution": "function getType(value) {\n  if (value === null) return \"null\";\n  if (Array.isArray(value)) return \"array\";\n  return typeof value;\n}\n",
      "explain": "<p>Thứ tự kiểm tra quan trọng: phải bắt <code>null</code> và mảng <strong>trước</strong> khi rơi vào <code>typeof</code>. Đây là mẫu &quot;xử lý trường hợp đặc biệt trước, trường hợp chung sau&quot; (guard clause) — bạn sẽ dùng nó trong hầu hết bài thuật toán (mảng rỗng, n = 0...).</p>\n",
      "hints": [
       "<p>Xử lý hai trường hợp đặc biệt trước bằng <code>if</code>, rồi <code>return typeof value</code> cho phần còn lại.</p>\n",
       "<p>Kiểm tra mảng bằng <code>Array.isArray(value)</code>; kiểm tra null bằng <code>value === null</code>.</p>\n"
      ],
      "followUp": "<p>Tại sao <code>Array.isArray</code> tồn tại trong khi đã có <code>instanceof Array</code>? (Gợi ý: mảng tạo ra trong một iframe/worker khác.)</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         42
        ],
        "expected": "number"
       },
       {
        "args": [
         "hi"
        ],
        "expected": "string"
       },
       {
        "args": [
         null
        ],
        "expected": "null"
       },
       {
        "args": [
         [
          1,
          2
         ]
        ],
        "expected": "array"
       },
       {
        "args": [
         {
          "a": 1
         }
        ],
        "expected": "object"
       },
       {
        "args": [
         undefined
        ],
        "expected": "undefined"
       },
       {
        "args": [
         true
        ],
        "expected": "boolean"
       },
       {
        "code": "return getType(function () {});",
        "label": "getType(function () {})",
        "expected": "function"
       },
       {
        "code": "return getType(10n);",
        "label": "getType(10n)",
        "expected": "bigint"
       }
      ]
     },
     {
      "id": "safe-add",
      "title": "Cộng số an toàn",
      "difficulty": "easy",
      "prompt": "<p>Input đọc từ bàn phím/file thường là <strong>chuỗi</strong>. Viết <code>safeAdd(a, b)</code> nhận hai giá trị (có thể là số hoặc chuỗi chứa số) và trả về <strong>tổng dạng số</strong>.</p>\n<p>Nếu một trong hai không chuyển được thành số hợp lệ, trả về <code>null</code>.</p>\n",
      "fn": "safeAdd",
      "starter": "function safeAdd(a, b) {\n\n}\n",
      "solution": "function safeAdd(a, b) {\n  const x = Number(a);\n  const y = Number(b);\n  if (Number.isNaN(x) || Number.isNaN(y)) return null;\n  return x + y;\n}\n",
      "explain": "<p><code>Number(x)</code> chuyển cả chuỗi; nếu có ký tự lạ thì ra <code>NaN</code>. Khác với <code>parseInt(&quot;12abc&quot;, 10)</code> = 12 (đọc đến khi gặp ký tự lạ). Trong coding test, khi đã biết input là số hợp lệ, <code>Number(...)</code> hoặc dấu <code>+</code> đứng trước (<code>+str</code>) là cách nhanh nhất.</p>\n",
      "hints": [
       "<p><code>&quot;5&quot; + 1</code> cho <code>&quot;51&quot;</code>. Hãy đổi cả hai sang số bằng <code>Number(...)</code> trước khi cộng.</p>\n",
       "<p><code>Number(&quot;abc&quot;)</code> là <code>NaN</code>. Kiểm tra bằng <code>Number.isNaN(x)</code> — không dùng <code>x === NaN</code> vì luôn false.</p>\n"
      ],
      "followUp": "<p>Tại sao <code>NaN === NaN</code> lại là <code>false</code>? Nếu bạn thiết kế ngôn ngữ, bạn có giữ quy tắc này không — và trade-off là gì?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         1,
         2
        ],
        "expected": 3
       },
       {
        "args": [
         "5",
         "10"
        ],
        "expected": 15
       },
       {
        "args": [
         "5",
         1
        ],
        "expected": 6
       },
       {
        "args": [
         "abc",
         1
        ],
        "expected": null
       },
       {
        "args": [
         2,
         "3.5"
        ],
        "expected": 5.5
       },
       {
        "args": [
         "7",
         "x7"
        ],
        "expected": null
       }
      ]
     },
     {
      "id": "is-safe-integer-sum",
      "title": "Có tràn số không?",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>sumIsSafe(a, b)</code> trả về <code>true</code> nếu <code>a + b</code> vẫn là số nguyên <strong>chính xác</strong> trong JS (không vượt <code>Number.MAX_SAFE_INTEGER</code>), ngược lại <code>false</code>. Giả sử <code>a</code>, <code>b</code> là số nguyên không âm.</p>\n",
      "fn": "sumIsSafe",
      "starter": "function sumIsSafe(a, b) {\n\n}\n",
      "solution": "function sumIsSafe(a, b) {\n  return a <= Number.MAX_SAFE_INTEGER - b;\n}\n",
      "explain": "<p>Kỹ thuật &quot;chuyển vế để tránh tràn&quot; (<code>a &lt;= MAX - b</code> thay vì <code>a + b &lt;= MAX</code>) xuất hiện ở mọi ngôn ngữ có giới hạn số — C++, Java với <code>int</code>. Trong JS, khi bài yêu cầu kết quả lớn hơn ~9·10^15, hãy dùng <code>BigInt</code> hoặc lấy modulo sau mỗi phép tính.</p>\n",
      "hints": [
       "<p>Có hàm sẵn <code>Number.isSafeInteger(x)</code>, nhưng nếu <code>a + b</code> đã tràn thì kết quả cộng có thể đã sai — so sánh trước khi cộng sẽ chắc hơn.</p>\n",
       "<p><code>a + b &lt;= MAX</code> tương đương <code>a &lt;= MAX - b</code>, và vế phải không bao giờ tràn.</p>\n"
      ],
      "followUp": "<p>Đề bài hay ghi &quot;trả về kết quả modulo 10^9 + 7&quot;. Tại sao lại là số này, và tại sao phải lấy modulo <strong>sau từng bước</strong> chứ không phải chỉ ở cuối?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         1,
         2
        ],
        "expected": true
       },
       {
        "args": [
         9007199254740990,
         1
        ],
        "expected": true
       },
       {
        "args": [
         9007199254740991,
         1
        ],
        "expected": false
       },
       {
        "args": [
         4503599627370496,
         4503599627370496
        ],
        "expected": false
       },
       {
        "args": [
         0,
         9007199254740991
        ],
        "expected": true
       }
      ]
     }
    ]
   },
   {
    "id": "conditions",
    "title": "Toán tử và điều kiện",
    "html": "<h2>Toán tử số học</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(7 + 2, 7 - 2, 7 * 2, 7 / 2); // 9 5 14 3.5\nconsole.log(7 % 2);    // 1 — phần dư, dùng kiểm tra chẵn/lẻ, chia hết\nconsole.log(2 ** 10);  // 1024 — luỹ thừa\nlet x = 5;\nx += 3;  // x = x + 3\nx++;     // x = x + 1\nconsole.log(x); // 9</code></pre>\n<blockquote><p><strong>Bẫy với số âm:</strong> <code>-7 % 2</code> là <code>-1</code> (không phải <code>1</code>), và <code>Math.floor(-7 / 2)</code> là <code>-4</code> trong khi <code>Math.trunc(-7 / 2)</code> là <code>-3</code>. Khi kiểm tra số lẻ, viết <code>n % 2 !== 0</code> thay vì <code>n % 2 === 1</code>.</p>\n</blockquote>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(-7 % 2);                 // -1\nconsole.log(Math.floor(-7 / 2));     // -4 (làm tròn xuống)\nconsole.log(Math.trunc(-7 / 2));     // -3 (bỏ phần thập phân)\nconsole.log(-7 % 2 === 1, -7 % 2 !== 0); // false true</code></pre>\n<h2>So sánh và logic</h2>\n<p><code>===</code>, <code>!==</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code> cho ra boolean. Kết hợp bằng <code>&amp;&amp;</code> (và), <code>||</code> (hoặc), <code>!</code> (phủ định).</p>\n<h3>Truthy và falsy</h3>\n<p>Trong điều kiện, JS tự đổi giá trị sang boolean. Chỉ có <strong>8 giá trị falsy</strong>; mọi thứ còn lại là truthy (kể cả <code>[]</code>, <code>{}</code>, <code>&quot;0&quot;</code>):</p>\n<p><code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>&quot;&quot;</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code></p>\n<pre class=\"code\" data-run><code class=\"language-js\">const values = [0, &quot;&quot;, &quot;0&quot;, [], {}, null, NaN, &quot;false&quot;];\nfor (const v of values) {\n  console.log(JSON.stringify(v), &quot;→&quot;, v ? &quot;truthy&quot; : &quot;falsy&quot;);\n}</code></pre>\n<blockquote><p><strong>Bẫy kinh điển:</strong> <code>if (index)</code> để kiểm tra &quot;có tìm thấy không&quot; sẽ sai khi <code>index === 0</code>. Hãy viết rõ: <code>if (index !== -1)</code>.</p>\n</blockquote>\n<h3>Short-circuit, <code>??</code> và <code>?.</code></h3>\n<pre class=\"code\" data-run><code class=\"language-js\">const user = { name: &quot;An&quot;, settings: null };\n\nconsole.log(user.age || 18);    // 18 — || lấy vế phải khi vế trái FALSY\nconsole.log(0 || 18);           // 18 — có thể sai ý nếu 0 là giá trị hợp lệ!\nconsole.log(0 ?? 18);           // 0  — ?? chỉ lấy vế phải khi null/undefined\n\nconsole.log(user.settings?.theme);  // undefined thay vì TypeError\nconsole.log(user.name &amp;&amp; user.name.toUpperCase()); // &quot;AN&quot;</code></pre>\n<h2>if / else if / else và toán tử ba ngôi</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function classify(n) {\n  if (n &lt; 0) {\n    return &quot;âm&quot;;\n  } else if (n === 0) {\n    return &quot;không&quot;;\n  } else {\n    return &quot;dương&quot;;\n  }\n}\nconsole.log(classify(-3), classify(0), classify(8));\n\nconst age = 20;\nconst label = age &gt;= 18 ? &quot;người lớn&quot; : &quot;trẻ em&quot;; // ternary: điều kiện ? A : B\nconsole.log(label);</code></pre>\n<p><strong>Early return</strong> (thoát sớm) giúp code phẳng, dễ đọc hơn <code>if</code> lồng nhiều tầng:</p>\n<pre class=\"code\"><code class=\"language-js\">function price(age) {\n  if (age &lt; 6) return 0;\n  if (age &lt; 18) return 50;\n  return 100;\n}</code></pre>\n<h2>switch</h2>\n<p>Hữu ích khi so một giá trị với nhiều hằng số. Nhớ <code>break</code> (hoặc <code>return</code>), nếu không code sẽ &quot;rơi&quot; xuống case dưới.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function dayName(d) {\n  switch (d) {\n    case 0: return &quot;CN&quot;;\n    case 6: return &quot;T7&quot;;\n    default: return &quot;Ngày thường&quot;;\n  }\n}\nconsole.log(dayName(0), dayName(3));</code></pre>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao <code>||</code> để gán mặc định lại gây bug với <code>0</code> và <code>&quot;&quot;</code>, và <code>??</code> ra đời để giải quyết vấn đề gì?</li><li>Early return vs một hàm chỉ có một <code>return</code> ở cuối: mỗi phong cách có lợi gì? Đội của bạn nên chọn cái nào?</li></ul>\n",
    "source": "content/01-basics/02-conditions.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "fizzbuzz-one",
      "title": "FizzBuzz một số",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>fizzBuzzOne(n)</code> trả về:</p>\n<ul><li><code>&quot;FizzBuzz&quot;</code> nếu <code>n</code> chia hết cho cả 3 và 5</li><li><code>&quot;Fizz&quot;</code> nếu chỉ chia hết cho 3</li><li><code>&quot;Buzz&quot;</code> nếu chỉ chia hết cho 5</li><li>Ngược lại trả về <code>n</code> dưới dạng <strong>chuỗi</strong> (VD <code>&quot;7&quot;</code>)</li></ul>\n",
      "fn": "fizzBuzzOne",
      "starter": "function fizzBuzzOne(n) {\n\n}\n",
      "solution": "function fizzBuzzOne(n) {\n  if (n % 15 === 0) return \"FizzBuzz\";\n  if (n % 3 === 0) return \"Fizz\";\n  if (n % 5 === 0) return \"Buzz\";\n  return String(n);\n}\n",
      "explain": "<p>Lỗi hay gặp nhất là đặt <code>n % 3</code> lên trước. Nguyên tắc: điều kiện <strong>cụ thể hơn</strong> (hẹp hơn) phải đứng trước điều kiện tổng quát.</p>\n",
      "hints": [
       "<p>&quot;Chia hết cho 3&quot; nghĩa là <code>n % 3 === 0</code>.</p>\n",
       "<p>Thứ tự <code>if</code> quan trọng: kiểm tra trường hợp &quot;cả 3 và 5&quot; <strong>trước</strong>, nếu không 15 sẽ trả về &quot;Fizz&quot;.</p>\n"
      ],
      "followUp": "<p>Nếu đề thêm luật &quot;chia hết cho 7 → Bazz&quot; (và các tổ hợp như &quot;FizzBazz&quot;), cách viết if/else hiện tại phải thêm bao nhiêu nhánh? Bạn sẽ thiết kế lại thế nào để thêm luật mà không phải sửa nhiều code?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         3
        ],
        "expected": "Fizz"
       },
       {
        "args": [
         5
        ],
        "expected": "Buzz"
       },
       {
        "args": [
         15
        ],
        "expected": "FizzBuzz"
       },
       {
        "args": [
         7
        ],
        "expected": "7"
       },
       {
        "args": [
         30
        ],
        "expected": "FizzBuzz"
       },
       {
        "args": [
         9
        ],
        "expected": "Fizz"
       },
       {
        "args": [
         1
        ],
        "expected": "1"
       }
      ]
     },
     {
      "id": "leap-year",
      "title": "Năm nhuận",
      "difficulty": "easy",
      "prompt": "<p>Năm nhuận là năm <strong>chia hết cho 4</strong>, trừ những năm <strong>chia hết cho 100</strong> — nhưng những năm <strong>chia hết cho 400</strong> thì vẫn là năm nhuận.</p>\n<p>Viết <code>isLeapYear(year)</code> trả về <code>true</code>/<code>false</code>.</p>\n",
      "fn": "isLeapYear",
      "starter": "function isLeapYear(year) {\n\n}\n",
      "solution": "function isLeapYear(year) {\n  if (year % 400 === 0) return true;\n  if (year % 100 === 0) return false;\n  return year % 4 === 0;\n}\n",
      "explain": "",
      "hints": [
       "<p>Lại là bài &quot;thứ tự điều kiện&quot;: xét 400 trước, rồi 100, rồi 4.</p>\n",
       "<p>Có thể viết một dòng: <code>(year % 4 === 0 &amp;&amp; year % 100 !== 0) || year % 400 === 0</code>.</p>\n"
      ],
      "followUp": "<p>Bản một dòng và bản nhiều <code>if</code>: bản nào dễ đọc hơn với người mới vào dự án? Bản nào dễ sai hơn khi sửa?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         2024
        ],
        "expected": true
       },
       {
        "args": [
         2023
        ],
        "expected": false
       },
       {
        "args": [
         1900
        ],
        "expected": false
       },
       {
        "args": [
         2000
        ],
        "expected": true
       },
       {
        "args": [
         2100
        ],
        "expected": false
       },
       {
        "args": [
         1600
        ],
        "expected": true
       }
      ]
     },
     {
      "id": "grade",
      "title": "Xếp loại điểm",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>grade(score)</code> với <code>score</code> từ 0 đến 10:</p>\n<table><thead><tr><th>Điểm</th><th>Xếp loại</th></tr></thead>\n<tbody>\n<tr><td>≥ 8.5</td><td><code>&quot;A&quot;</code></td></tr>\n<tr><td>≥ 7</td><td><code>&quot;B&quot;</code></td></tr>\n<tr><td>≥ 5.5</td><td><code>&quot;C&quot;</code></td></tr>\n<tr><td>≥ 4</td><td><code>&quot;D&quot;</code></td></tr>\n<tr><td>còn lại</td><td><code>&quot;F&quot;</code></td></tr>\n</tbody></table>\n<p>Nếu <code>score</code> không phải số hợp lệ trong khoảng [0, 10] (âm, &gt; 10, <code>NaN</code>, hoặc không phải kiểu number), trả về <code>null</code>.</p>\n",
      "fn": "grade",
      "starter": "function grade(score) {\n\n}\n",
      "solution": "function grade(score) {\n  if (typeof score !== \"number\" || Number.isNaN(score) || score < 0 || score > 10) return null;\n  if (score >= 8.5) return \"A\";\n  if (score >= 7) return \"B\";\n  if (score >= 5.5) return \"C\";\n  if (score >= 4) return \"D\";\n  return \"F\";\n}\n",
      "explain": "",
      "hints": [
       "<p>Kiểm tra input không hợp lệ đầu tiên (guard clause), rồi xét từ mức cao xuống thấp.</p>\n",
       "<p><code>NaN &lt; 0</code> và <code>NaN &gt; 10</code> đều là <code>false</code>, nên phải kiểm tra <code>Number.isNaN</code> riêng.</p>\n"
      ],
      "followUp": "<p>Tại sao <code>NaN</code> lọt qua được điều kiện <code>score &lt; 0 || score &gt; 10</code>? Đây là lý do nhiều hệ thống thật bị bug với dữ liệu thiếu.</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         9
        ],
        "expected": "A"
       },
       {
        "args": [
         8.5
        ],
        "expected": "A"
       },
       {
        "args": [
         7
        ],
        "expected": "B"
       },
       {
        "args": [
         6
        ],
        "expected": "C"
       },
       {
        "args": [
         4
        ],
        "expected": "D"
       },
       {
        "args": [
         3.9
        ],
        "expected": "F"
       },
       {
        "args": [
         0
        ],
        "expected": "F"
       },
       {
        "args": [
         10
        ],
        "expected": "A"
       },
       {
        "args": [
         -1
        ],
        "expected": null
       },
       {
        "args": [
         11
        ],
        "expected": null
       },
       {
        "args": [
         "9"
        ],
        "expected": null
       },
       {
        "code": "return grade(NaN);",
        "label": "grade(NaN)",
        "expected": null
       }
      ]
     }
    ]
   },
   {
    "id": "loops",
    "title": "Vòng lặp",
    "html": "<p>Vòng lặp là &quot;động cơ&quot; của mọi thuật toán. Hiểu rõ vòng lặp chạy <strong>bao nhiêu lần</strong> chính là nền tảng của phân tích độ phức tạp (Big-O) sau này.</p>\n<h2><code>for</code> cổ điển — khi cần chỉ số</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">for (let i = 0; i &lt; 5; i++) {\n  console.log(&quot;i =&quot;, i);\n}\n// 3 phần: khởi tạo; điều kiện tiếp tục; bước nhảy\nfor (let i = 10; i &gt; 0; i -= 3) console.log(i); // 10 7 4 1</code></pre>\n<h2><code>while</code> — khi không biết trước số lần lặp</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">let n = 1234;\nlet digits = 0;\nwhile (n &gt; 0) {\n  n = Math.floor(n / 10); // bỏ chữ số cuối\n  digits++;\n}\nconsole.log(digits); // 4</code></pre>\n<p><code>do...while</code> chạy thân vòng lặp ít nhất một lần trước khi kiểm tra điều kiện — hiếm khi cần.</p>\n<h2><code>for...of</code> — duyệt giá trị (mảng, chuỗi, Map, Set)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const fruits = [&quot;táo&quot;, &quot;cam&quot;, &quot;xoài&quot;];\nfor (const f of fruits) console.log(f);\nfor (const ch of &quot;abc&quot;) console.log(ch);\n\n// cần cả chỉ số lẫn giá trị:\nfor (const [i, f] of fruits.entries()) console.log(i, f);</code></pre>\n<h2><code>for...in</code> — duyệt KEY của object (đừng dùng cho mảng)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const scores = { an: 8, binh: 7 };\nfor (const name in scores) console.log(name, scores[name]);\n\nfor (const i in [&quot;a&quot;, &quot;b&quot;]) console.log(typeof i); // &quot;string&quot;! i là &quot;0&quot;, &quot;1&quot;</code></pre>\n<h2><code>break</code> và <code>continue</code></h2>\n<pre class=\"code\" data-run><code class=\"language-js\">for (let i = 1; i &lt;= 10; i++) {\n  if (i % 2 === 0) continue; // bỏ qua phần còn lại, sang vòng tiếp theo\n  if (i &gt; 7) break;          // thoát hẳn vòng lặp\n  console.log(i);            // 1 3 5 7\n}</code></pre>\n<h2>Vòng lặp lồng nhau và số lần chạy</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">let steps = 0;\nconst n = 4;\nfor (let i = 0; i &lt; n; i++) {\n  for (let j = 0; j &lt; n; j++) {\n    steps++;\n  }\n}\nconsole.log(steps); // n * n = 16 → O(n²)</code></pre>\n<p>Với n = 100.000, hai vòng lồng nhau là 10 tỉ bước — quá chậm cho mọi coding test (thường giới hạn ~10^8 phép tính/giây). Ghi nhớ trực giác này; chặng sau sẽ học cách tránh nó.</p>\n<blockquote><p><strong>Off-by-one</strong> là lỗi phổ biến nhất với vòng lặp: <code>i &lt;= arr.length</code> (thừa một vòng → <code>undefined</code>) hoặc bắt đầu từ 1 thay vì 0. Khi viết xong vòng lặp, hãy tự hỏi: <em>vòng đầu tiên i bằng mấy? Vòng cuối cùng i bằng mấy?</em></p>\n</blockquote>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Khi nào dùng <code>for</code> chỉ số thay vì <code>for...of</code>? (Gợi ý: cần so sánh phần tử <code>i</code> với <code>i + 1</code>, duyệt ngược, nhảy 2 bước.)</li><li>Tại sao <code>while (n &gt; 0) n = Math.floor(n / 10)</code> chỉ chạy khoảng log₁₀(n) lần? Điều này liên quan gì đến tìm kiếm nhị phân?</li></ul>\n",
    "source": "content/01-basics/03-loops.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "sum-to-n",
      "title": "Tổng từ 1 đến n",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>sumTo(n)</code> trả về <code>1 + 2 + ... + n</code>. Với <code>n &lt;= 0</code> trả về <code>0</code>.</p>\n",
      "fn": "sumTo",
      "starter": "function sumTo(n) {\n  let total = 0;\n  // dùng vòng lặp\n  return total;\n}\n",
      "solution": "function sumTo(n) {\n  let total = 0;\n  for (let i = 1; i <= n; i++) {\n    total += i;\n  }\n  return total;\n}\n",
      "explain": "<p>Vòng lặp chạy n lần → O(n). Còn có công thức Gauss <code>n * (n + 1) / 2</code> chạy O(1). Trong phỏng vấn, viết bản dễ đúng trước, rồi đề xuất cải tiến — người phỏng vấn đánh giá cao việc bạn <strong>nhận ra</strong> có cách tốt hơn.</p>\n",
      "hints": [
       "<p>Vòng <code>for (let i = 1; i &lt;= n; i++)</code> và cộng dồn <code>total += i</code>.</p>\n"
      ],
      "followUp": "<p>Công thức <code>n * (n + 1) / 2</code> nhanh hơn, nhưng với n rất lớn (≈ 10^8) thì <code>n * (n + 1)</code> có vượt <code>MAX_SAFE_INTEGER</code> không? Còn vòng lặp thì sao?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         1
        ],
        "expected": 1
       },
       {
        "args": [
         5
        ],
        "expected": 15
       },
       {
        "args": [
         100
        ],
        "expected": 5050
       },
       {
        "args": [
         0
        ],
        "expected": 0
       },
       {
        "args": [
         -3
        ],
        "expected": 0
       }
      ]
     },
     {
      "id": "fizzbuzz-list",
      "title": "FizzBuzz đến n",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>fizzBuzz(n)</code> trả về <strong>mảng</strong> gồm kết quả FizzBuzz cho các số từ 1 đến n (luật như bài trước).</p>\n<p>Ví dụ <code>fizzBuzz(5)</code> → <code>[&quot;1&quot;, &quot;2&quot;, &quot;Fizz&quot;, &quot;4&quot;, &quot;Buzz&quot;]</code>.</p>\n",
      "fn": "fizzBuzz",
      "starter": "function fizzBuzz(n) {\n  const result = [];\n\n  return result;\n}\n",
      "solution": "function fizzBuzz(n) {\n  const result = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) result.push(\"FizzBuzz\");\n    else if (i % 3 === 0) result.push(\"Fizz\");\n    else if (i % 5 === 0) result.push(\"Buzz\");\n    else result.push(String(i));\n  }\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Thêm phần tử vào cuối mảng bằng <code>result.push(x)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         5
        ],
        "expected": [
         "1",
         "2",
         "Fizz",
         "4",
         "Buzz"
        ]
       },
       {
        "args": [
         15
        ],
        "expected": [
         "1",
         "2",
         "Fizz",
         "4",
         "Buzz",
         "Fizz",
         "7",
         "8",
         "Fizz",
         "Buzz",
         "11",
         "Fizz",
         "13",
         "14",
         "FizzBuzz"
        ]
       },
       {
        "args": [
         1
        ],
        "expected": [
         "1"
        ]
       },
       {
        "args": [
         0
        ],
        "expected": []
       }
      ]
     },
     {
      "id": "count-digits",
      "title": "Đếm chữ số",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>countDigits(n)</code> trả về số chữ số của số nguyên <code>n</code> <strong>không dùng chuyển sang chuỗi</strong> (dùng phép chia). Lưu ý: <code>countDigits(0)</code> là 1, và số âm thì bỏ dấu (<code>countDigits(-123)</code> là 3).</p>\n",
      "fn": "countDigits",
      "starter": "function countDigits(n) {\n\n}\n",
      "solution": "function countDigits(n) {\n  n = Math.abs(n);\n  if (n === 0) return 1;\n  let count = 0;\n  while (n > 0) {\n    n = Math.floor(n / 10);\n    count++;\n  }\n  return count;\n}\n",
      "explain": "",
      "hints": [
       "<p>Mỗi lần <code>Math.floor(n / 10)</code> bỏ đi một chữ số cuối.</p>\n",
       "<p>Hai trường hợp đặc biệt: <code>0</code> (vòng while không chạy lần nào) và số âm (<code>Math.abs</code>).</p>\n"
      ],
      "followUp": "<p><code>String(Math.abs(n)).length</code> ngắn hơn nhiều. Vậy tại sao người phỏng vấn lại hay cấm cách đó? Họ muốn kiểm tra kỹ năng gì?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         12345
        ],
        "expected": 5
       },
       {
        "args": [
         7
        ],
        "expected": 1
       },
       {
        "args": [
         0
        ],
        "expected": 1
       },
       {
        "args": [
         -123
        ],
        "expected": 3
       },
       {
        "args": [
         1000000
        ],
        "expected": 7
       }
      ]
     },
     {
      "id": "is-prime",
      "title": "Số nguyên tố",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>isPrime(n)</code> trả về <code>true</code> nếu <code>n</code> là số nguyên tố (chỉ chia hết cho 1 và chính nó, <code>n &gt;= 2</code>).</p>\n<p>Bộ test có số rất lớn (khoảng 10^12), nên duyệt tất cả số từ 2 đến n-1 sẽ <strong>quá thời gian</strong>.</p>\n",
      "fn": "isPrime",
      "starter": "function isPrime(n) {\n\n}\n",
      "solution": "function isPrime(n) {\n  if (n < 2) return false;\n  if (n % 2 === 0) return n === 2;\n  for (let i = 3; i * i <= n; i += 2) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\n",
      "explain": "<p>Duyệt đến √n đưa độ phức tạp từ O(n) xuống O(√n): với n = 10^12, từ 10^12 bước (vài phút) xuống 10^6 bước (vài ms). Đây là ví dụ đầu tiên cho thấy <strong>suy luận toán học nhỏ</strong> đổi được thời gian chạy khổng lồ.</p>\n",
      "hints": [
       "<p>Nếu n = a × b với a ≤ b thì a ≤ √n. Vậy chỉ cần thử các ước đến √n.</p>\n",
       "<p>Điều kiện vòng lặp <code>i * i &lt;= n</code> tránh phải gọi <code>Math.sqrt</code> và tránh sai số làm tròn.</p>\n",
       "<p>Bỏ qua số chẵn: xử lý riêng 2, rồi chỉ thử i = 3, 5, 7, ...</p>\n"
      ],
      "followUp": "<p>Nếu phải kiểm tra nguyên tố cho <strong>tất cả</strong> số từ 1 đến 10^6, gọi <code>isPrime</code> 10^6 lần có tối ưu không? Tìm hiểu &quot;Sàng Eratosthenes&quot; và so sánh độ phức tạp.</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         2
        ],
        "expected": true
       },
       {
        "args": [
         17
        ],
        "expected": true
       },
       {
        "args": [
         1
        ],
        "expected": false
       },
       {
        "args": [
         0
        ],
        "expected": false
       },
       {
        "args": [
         15
        ],
        "expected": false
       },
       {
        "args": [
         97
        ],
        "expected": true
       },
       {
        "args": [
         -7
        ],
        "expected": false
       },
       {
        "args": [
         25
        ],
        "expected": false
       },
       {
        "args": [
         999962000357
        ],
        "expected": false,
        "label": "999962000357 = 999983 × 999979"
       },
       {
        "args": [
         1000000000039
        ],
        "expected": true,
        "hidden": true,
        "label": "Số nguyên tố ~10^12 — cần O(√n)"
       }
      ]
     }
    ]
   },
   {
    "id": "functions",
    "title": "Hàm",
    "html": "<p>Hàm là đơn vị cơ bản để <strong>đóng gói</strong> logic: đặt tên cho một việc, tái sử dụng, và test riêng được.</p>\n<h2>Ba cách viết hàm</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">// 1. Function declaration — được &quot;hoist&quot;: gọi được trước dòng khai báo\nconsole.log(square(4));\nfunction square(x) {\n  return x * x;\n}\n\n// 2. Function expression — gán hàm vào biến\nconst cube = function (x) {\n  return x * x * x;\n};\n\n// 3. Arrow function — ngắn gọn, hay dùng làm callback\nconst double = (x) =&gt; x * 2;          // một biểu thức: tự động return\nconst add = (a, b) =&gt; {\n  const sum = a + b;                   // có {} thì phải return rõ ràng\n  return sum;\n};\nconsole.log(cube(2), double(5), add(1, 2));</code></pre>\n<blockquote><p><strong>Bẫy arrow function:</strong> <code>const f = (x) =&gt; { x * 2 };</code> trả về <code>undefined</code> vì có <code>{}</code> mà không có <code>return</code>. Muốn trả object thì bọc ngoặc: <code>() =&gt; ({ a: 1 })</code>.</p>\n</blockquote>\n<h2>Tham số: mặc định, rest, và truyền thiếu/thừa</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function greet(name = &quot;bạn&quot;, greeting = &quot;Xin chào&quot;) {\n  return greeting + &quot;, &quot; + name + &quot;!&quot;;\n}\nconsole.log(greet());           // dùng giá trị mặc định\nconsole.log(greet(&quot;An&quot;));\n\nfunction total(...nums) {       // rest: gom mọi tham số còn lại vào MẢNG\n  let s = 0;\n  for (const n of nums) s += n;\n  return s;\n}\nconsole.log(total(1, 2, 3, 4));\n\nconst arr = [5, 6, 7];\nconsole.log(total(...arr));     // spread: &quot;rải&quot; mảng thành từng tham số\n\nfunction f(a, b) { return [a, b]; }\nconsole.log(f(1));              // [1, undefined] — thiếu thì là undefined, KHÔNG lỗi\nconsole.log(f(1, 2, 3));        // thừa thì bị bỏ qua</code></pre>\n<h2>Hàm là giá trị (&quot;first-class&quot;)</h2>\n<p>Hàm có thể gán vào biến, truyền vào hàm khác (callback), và được trả về từ hàm khác. Đây là nền tảng của <code>map</code>/<code>filter</code>/<code>sort</code> và closure.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function applyTwice(fn, x) {\n  return fn(fn(x));\n}\nconsole.log(applyTwice((n) =&gt; n + 3, 10)); // 16\n\nfunction makeMultiplier(k) {\n  return (x) =&gt; x * k;  // trả về một hàm mới\n}\nconst triple = makeMultiplier(3);\nconsole.log(triple(7)); // 21</code></pre>\n<h2>Hàm thuần (pure function)</h2>\n<p>Hàm <strong>thuần</strong> chỉ phụ thuộc vào tham số và không thay đổi gì bên ngoài. Dễ test, dễ hiểu. Hàm <strong>có side effect</strong> thì sửa biến bên ngoài, sửa tham số, in ra màn hình...</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const nums = [3, 1, 2];\n\nfunction sortedCopy(arr) {        // thuần: không đụng vào mảng gốc\n  return [...arr].sort((a, b) =&gt; a - b);\n}\nconsole.log(sortedCopy(nums), nums);\n\nfunction sortInPlace(arr) {       // side effect: sửa mảng của người gọi\n  arr.sort((a, b) =&gt; a - b);\n}\nsortInPlace(nums);\nconsole.log(nums);</code></pre>\n<blockquote><p>Trong coding test, <strong>đề bài thường nói rõ</strong> có được sửa input không (&quot;in-place&quot;, &quot;O(1) extra space&quot;). Nếu không nói, an toàn nhất là đừng sửa.</p>\n</blockquote>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Function declaration được hoist, còn <code>const f = () =&gt; {}</code> thì không. Ưu/nhược điểm của mỗi kiểu khi file code dài?</li><li>Tại sao JS không báo lỗi khi gọi hàm thiếu tham số? Ngôn ngữ kiểu tĩnh (TypeScript, Java) xử lý khác thế nào, và trade-off là gì?</li></ul>\n",
    "source": "content/01-basics/04-functions.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "max-of",
      "title": "Max của nhiều số",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>maxOf(...nums)</code> nhận <strong>số lượng tham số tuỳ ý</strong> và trả về số lớn nhất. Nếu không có tham số nào, trả về <code>-Infinity</code>.</p>\n<p>Yêu cầu: <strong>tự viết vòng lặp</strong>, không dùng <code>Math.max</code>.</p>\n",
      "fn": "maxOf",
      "starter": "function maxOf(...nums) {\n\n}\n",
      "solution": "function maxOf(...nums) {\n  let best = -Infinity;\n  for (const n of nums) {\n    if (n > best) best = n;\n  }\n  return best;\n}\n",
      "explain": "<p>Khởi tạo bằng <code>-Infinity</code> (hoặc <code>Infinity</code> khi tìm min) là mẹo rất hay dùng trong coding test, tránh bug khi khởi tạo <code>best = 0</code> mà mọi số đều âm.</p>\n",
      "hints": [
       "<p><code>...nums</code> gom mọi tham số thành một mảng.</p>\n",
       "<p>Khởi tạo <code>best = -Infinity</code> — mọi số đều lớn hơn nó, nên không cần xử lý riêng phần tử đầu tiên.</p>\n"
      ],
      "followUp": "<p>Nếu khởi tạo <code>best = 0</code> thì test nào sẽ trượt? Còn <code>best = nums[0]</code> thì có vấn đề gì với input rỗng?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         1,
         5,
         3
        ],
        "expected": 5
       },
       {
        "args": [
         -3,
         -1,
         -7
        ],
        "expected": -1
       },
       {
        "args": [
         42
        ],
        "expected": 42
       },
       {
        "args": [],
        "expected": -Infinity
       }
      ]
     },
     {
      "id": "apply-n-times",
      "title": "Áp dụng hàm n lần",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>applyN(fn, n, x)</code> trả về kết quả khi áp dụng hàm <code>fn</code> lên <code>x</code> đúng <code>n</code> lần: <code>fn(fn(...fn(x)))</code>. Nếu <code>n = 0</code> trả về <code>x</code>.</p>\n",
      "fn": "applyN",
      "starter": "function applyN(fn, n, x) {\n\n}\n",
      "solution": "function applyN(fn, n, x) {\n  let result = x;\n  for (let i = 0; i < n; i++) {\n    result = fn(result);\n  }\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Giữ một biến <code>result</code>, mỗi vòng gán <code>result = fn(result)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return applyN((v) => v + 1, 5, 0);",
        "label": "applyN(v => v + 1, 5, 0)",
        "expected": 5
       },
       {
        "code": "return applyN((v) => v * 2, 10, 1);",
        "label": "applyN(v => v * 2, 10, 1)",
        "expected": 1024
       },
       {
        "code": "return applyN((s) => s + \"!\", 3, \"hi\");",
        "label": "applyN(s => s + \"!\", 3, \"hi\")",
        "expected": "hi!!!"
       },
       {
        "code": "return applyN((v) => v * 100, 0, 7);",
        "label": "applyN(v => v * 100, 0, 7)",
        "expected": 7
       }
      ]
     },
     {
      "id": "make-multiplier",
      "title": "Hàm tạo hàm",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>makeAdder(k)</code> trả về <strong>một hàm</strong> nhận <code>x</code> và trả về <code>x + k</code>.</p>\n<pre class=\"code\"><code class=\"language-js\">const add5 = makeAdder(5);\nadd5(10); // 15</code></pre>\n",
      "fn": "makeAdder",
      "starter": "function makeAdder(k) {\n\n}\n",
      "solution": "function makeAdder(k) {\n  return (x) => x + k;\n}\n",
      "explain": "",
      "hints": [
       "<p><code>return (x) =&gt; x + k;</code> — hàm bên trong &quot;nhớ&quot; được <code>k</code> của lần gọi <code>makeAdder</code>.</p>\n"
      ],
      "followUp": "<p>Gọi <code>makeAdder(5)</code> xong thì hàm <code>makeAdder</code> đã chạy xong và kết thúc. Vậy <strong>tại sao</strong> hàm trả về vẫn còn nhớ <code>k = 5</code>? (Bài &quot;Scope và closure&quot; sẽ trả lời.)</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const add5 = makeAdder(5); return add5(10);",
        "label": "makeAdder(5)(10)",
        "expected": 15
       },
       {
        "code": "const a = makeAdder(1), b = makeAdder(100); return [a(1), b(1), a(2)];",
        "label": "hai hàm độc lập",
        "expected": [
         2,
         101,
         3
        ]
       },
       {
        "code": "return typeof makeAdder(3);",
        "label": "typeof makeAdder(3)",
        "expected": "function"
       }
      ]
     }
    ]
   },
   {
    "id": "arrays",
    "title": "Mảng (Array)",
    "html": "<p>Mảng là cấu trúc dữ liệu dùng nhiều nhất trong coding test. Nắm vững <strong>độ phức tạp</strong> của từng thao tác quan trọng không kém cú pháp.</p>\n<h2>Tạo và truy cập</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const a = [10, 20, 30];\nconsole.log(a[0], a[a.length - 1]); // phần tử đầu, cuối\nconsole.log(a.at(-1));              // cuối (cú pháp mới)\nconsole.log(a[99]);                 // undefined — KHÔNG báo lỗi khi vượt chỉ số!\n\na[1] = 99;                          // sửa được dù a là const\nconsole.log(a, a.length);\n\nconst zeros = new Array(5).fill(0);              // [0,0,0,0,0]\nconst squares = Array.from({ length: 5 }, (_, i) =&gt; i * i); // [0,1,4,9,16]\nconsole.log(zeros, squares);</code></pre>\n<h2>Thêm / xoá và độ phức tạp</h2>\n<table><thead><tr><th>Thao tác</th><th>Ý nghĩa</th><th>Độ phức tạp</th></tr></thead>\n<tbody>\n<tr><td><code>push(x)</code> / <code>pop()</code></td><td>thêm / xoá ở <strong>cuối</strong></td><td>O(1)</td></tr>\n<tr><td><code>unshift(x)</code> / <code>shift()</code></td><td>thêm / xoá ở <strong>đầu</strong></td><td><strong>O(n)</strong> — phải dời mọi phần tử</td></tr>\n<tr><td><code>arr[i]</code></td><td>đọc/ghi theo chỉ số</td><td>O(1)</td></tr>\n<tr><td><code>includes(x)</code>, <code>indexOf(x)</code></td><td>tìm kiếm tuyến tính</td><td>O(n)</td></tr>\n<tr><td><code>slice(a, b)</code></td><td>sao chép đoạn [a, b)</td><td>O(b − a)</td></tr>\n<tr><td><code>splice(i, k, ...)</code></td><td>xoá/chèn ở giữa (sửa mảng gốc)</td><td>O(n)</td></tr>\n<tr><td><code>[...arr]</code></td><td>sao chép nông</td><td>O(n)</td></tr>\n</tbody></table>\n<pre class=\"code\" data-run><code class=\"language-js\">const s = [1, 2, 3];\ns.push(4);         // [1,2,3,4]\nconst last = s.pop();\ns.unshift(0);      // [0,1,2,3]\nconst first = s.shift();\nconsole.log(s, last, first);\n\nconst b = [10, 20, 30, 40, 50];\nconsole.log(b.slice(1, 3));   // [20, 30] — không đổi b\nconst removed = b.splice(1, 2); // xoá 2 phần tử từ chỉ số 1 — ĐỔI b\nconsole.log(removed, b);</code></pre>\n<blockquote><p><strong>Tại sao <code>shift()</code> là O(n)?</strong> Mảng lưu các phần tử liền nhau trong bộ nhớ. Bỏ phần tử đầu thì mọi phần tử còn lại phải dịch về trước một ô. Một vòng lặp gọi <code>shift()</code> n lần là O(n²) — lý do BFS viết bằng <code>shift()</code> hay bị timeout.</p>\n</blockquote>\n<h2>Mảng là tham chiếu (reference)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const x = [1, 2, 3];\nconst y = x;        // y và x là CÙNG một mảng\ny.push(4);\nconsole.log(x);     // [1, 2, 3, 4] — x cũng đổi!\n\nconst z = [...x];   // sao chép: mảng mới\nz.push(5);\nconsole.log(x, z);\n\nconsole.log([1, 2] === [1, 2]); // false — so sánh tham chiếu, không so nội dung</code></pre>\n<h2>Mảng 2 chiều — bẫy <code>fill</code></h2>\n<pre class=\"code\" data-run><code class=\"language-js\">// SAI: cả 3 hàng là CÙNG một mảng\nconst bad = new Array(3).fill(new Array(3).fill(0));\nbad[0][0] = 1;\nconsole.log(JSON.stringify(bad)); // [[1,0,0],[1,0,0],[1,0,0]]\n\n// ĐÚNG: mỗi hàng là một mảng mới\nconst good = Array.from({ length: 3 }, () =&gt; new Array(3).fill(0));\ngood[0][0] = 1;\nconsole.log(JSON.stringify(good)); // [[1,0,0],[0,0,0],[0,0,0]]</code></pre>\n<h2>Một số phương thức tiện dụng</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const n = [3, 1, 4, 1, 5];\nconsole.log(n.includes(4), n.indexOf(1), n.lastIndexOf(1));\nconsole.log(n.join(&quot;-&quot;));            // &quot;3-1-4-1-5&quot;\nconsole.log([...n].reverse());       // reverse() SỬA mảng gốc → copy trước\nconsole.log([1, [2, [3]]].flat(Infinity));\nconsole.log(n.concat([9, 9]));</code></pre>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao <code>push</code>/<code>pop</code> là O(1) còn <code>shift</code>/<code>unshift</code> là O(n)? Nếu cần thêm/xoá ở <strong>cả hai đầu</strong> nhanh, bạn sẽ dùng cấu trúc nào?</li><li><code>[1, 2] === [1, 2]</code> là <code>false</code>. Vậy làm sao kiểm tra một mảng đã &quot;thấy&quot; chưa trong một <code>Set</code>? (Gợi ý: chuyển sang chuỗi làm key — chi phí là gì?)</li></ul>\n",
    "source": "content/01-basics/05-arrays.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "reverse-array",
      "title": "Đảo ngược mảng (in-place)",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>reverseInPlace(arr)</code> đảo ngược mảng <strong>ngay trên mảng đó</strong> (không tạo mảng mới, không dùng <code>reverse()</code>), rồi trả về chính <code>arr</code>.</p>\n<p>Yêu cầu bộ nhớ phụ O(1).</p>\n",
      "fn": "reverseInPlace",
      "starter": "function reverseInPlace(arr) {\n\n  return arr;\n}\n",
      "solution": "function reverseInPlace(arr) {\n  let left = 0;\n  let right = arr.length - 1;\n  while (left < right) {\n    const tmp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = tmp;\n    left++;\n    right--;\n  }\n  return arr;\n}\n",
      "explain": "<p>Đây là kỹ thuật <strong>hai con trỏ</strong> (two pointers) đầu tiên của bạn. Chạy n/2 vòng → O(n) thời gian, O(1) bộ nhớ.</p>\n",
      "hints": [
       "<p>Dùng hai chỉ số: <code>left</code> từ đầu, <code>right</code> từ cuối. Đổi chỗ rồi tiến vào giữa.</p>\n",
       "<p>Đổi chỗ nhanh: <code>[arr[left], arr[right]] = [arr[right], arr[left]];</code> (destructuring).</p>\n"
      ],
      "followUp": "<p>Cách đổi chỗ bằng destructuring <code>[a, b] = [b, a]</code> ngắn hơn nhưng tạo ra một mảng tạm mỗi lần. Trong vòng lặp 10^6 lần, điều đó có đáng lo không? Khi nào thì nên quan tâm?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          3,
          4,
          5
         ]
        ],
        "expected": [
         5,
         4,
         3,
         2,
         1
        ]
       },
       {
        "args": [
         [
          1,
          2
         ]
        ],
        "expected": [
         2,
         1
        ]
       },
       {
        "args": [
         []
        ],
        "expected": []
       },
       {
        "args": [
         [
          7
         ]
        ],
        "expected": [
         7
        ]
       },
       {
        "code": "const a = [1, 2, 3]; const r = reverseInPlace(a); return r === a && a.join() === \"3,2,1\";",
        "label": "Trả về đúng mảng gốc đã bị đảo (in-place)",
        "expected": true
       }
      ]
     },
     {
      "id": "second-largest",
      "title": "Số lớn thứ hai",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>secondLargest(nums)</code> trả về giá trị <strong>lớn thứ hai khác nhau</strong> trong mảng. Nếu không có (mảng &lt; 2 giá trị khác nhau), trả về <code>null</code>.</p>\n<p>Yêu cầu: <strong>một lần duyệt</strong>, không sắp xếp.</p>\n",
      "fn": "secondLargest",
      "starter": "function secondLargest(nums) {\n\n}\n",
      "solution": "function secondLargest(nums) {\n  let first = -Infinity;\n  let second = -Infinity;\n  for (const n of nums) {\n    if (n > first) {\n      second = first;\n      first = n;\n    } else if (n < first && n > second) {\n      second = n;\n    }\n  }\n  return second === -Infinity ? null : second;\n}\n",
      "explain": "<p>Sắp xếp rồi lấy phần tử thứ hai là O(n log n) và còn phải xử lý trùng. Một lần duyệt với hai biến là O(n). Điều kiện <code>n &lt; first</code> (chặt) đảm bảo các giá trị trùng với max không bị đếm làm &quot;lớn thứ hai&quot;.</p>\n",
      "hints": [
       "<p>Giữ hai biến <code>first</code> và <code>second</code>, cùng khởi tạo <code>-Infinity</code>.</p>\n",
       "<p>Khi gặp số lớn hơn <code>first</code>: <code>first</code> cũ trở thành <code>second</code>. Khi gặp số nằm giữa (nhỏ hơn hẳn <code>first</code> nhưng lớn hơn <code>second</code>): cập nhật <code>second</code>.</p>\n"
      ],
      "followUp": "<p>Mở rộng: tìm số lớn thứ <strong>k</strong>. Giữ k biến thì không còn thực tế khi k lớn — cấu trúc dữ liệu nào phù hợp? (Gợi ý: chặng DSA, bài Heap.)</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          3,
          1,
          4,
          1,
          5
         ]
        ],
        "expected": 4
       },
       {
        "args": [
         [
          5,
          5,
          4
         ]
        ],
        "expected": 4
       },
       {
        "args": [
         [
          5,
          5,
          5
         ]
        ],
        "expected": null
       },
       {
        "args": [
         [
          1
         ]
        ],
        "expected": null
       },
       {
        "args": [
         [
          -1,
          -2,
          -3
         ]
        ],
        "expected": -2
       },
       {
        "args": [
         [
          2,
          1
         ]
        ],
        "expected": 1
       }
      ]
     },
     {
      "id": "rotate-array",
      "title": "Xoay mảng",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>rotate(nums, k)</code> trả về mảng <strong>mới</strong> sau khi xoay <code>nums</code> sang phải <code>k</code> bước.</p>\n<p><code>rotate([1,2,3,4,5], 2)</code> → <code>[4,5,1,2,3]</code>. Lưu ý <code>k</code> có thể lớn hơn độ dài mảng.</p>\n",
      "fn": "rotate",
      "starter": "function rotate(nums, k) {\n\n}\n",
      "solution": "function rotate(nums, k) {\n  const n = nums.length;\n  if (n === 0) return [];\n  k = k % n;\n  return nums.slice(n - k).concat(nums.slice(0, n - k));\n}\n",
      "explain": "<p>O(n) thời gian và bộ nhớ. Phiên bản khó hơn (LeetCode 189) yêu cầu xoay <strong>in-place O(1) bộ nhớ</strong>: đảo cả mảng, rồi đảo k phần tử đầu, rồi đảo phần còn lại — tái sử dụng hàm reverse hai con trỏ ở bài trước.</p>\n",
      "hints": [
       "<p>Xoay n bước thì về như cũ → chỉ cần xoay <code>k % n</code> bước.</p>\n",
       "<p>Kết quả = <code>k</code> phần tử cuối + phần còn lại. Dùng <code>slice</code>.</p>\n"
      ],
      "followUp": "<p>Tại sao &quot;đảo toàn bộ → đảo đoạn đầu → đảo đoạn sau&quot; lại cho đúng kết quả xoay? Thử với [1,2,3,4,5], k = 2 trên giấy.</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          3,
          4,
          5
         ],
         2
        ],
        "expected": [
         4,
         5,
         1,
         2,
         3
        ]
       },
       {
        "args": [
         [
          1,
          2,
          3
         ],
         0
        ],
        "expected": [
         1,
         2,
         3
        ]
       },
       {
        "args": [
         [
          1,
          2,
          3
         ],
         3
        ],
        "expected": [
         1,
         2,
         3
        ]
       },
       {
        "args": [
         [
          1,
          2,
          3
         ],
         4
        ],
        "expected": [
         3,
         1,
         2
        ]
       },
       {
        "args": [
         [],
         5
        ],
        "expected": []
       },
       {
        "args": [
         [
          1,
          2
         ],
         1000000001
        ],
        "expected": [
         2,
         1
        ]
       }
      ]
     },
     {
      "id": "create-grid",
      "title": "Tạo lưới 2 chiều",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>createGrid(rows, cols, value)</code> trả về mảng 2 chiều <code>rows × cols</code>, mọi ô bằng <code>value</code>. Các hàng phải là <strong>mảng độc lập</strong> (sửa một ô không ảnh hưởng hàng khác).</p>\n",
      "fn": "createGrid",
      "starter": "function createGrid(rows, cols, value) {\n\n}\n",
      "solution": "function createGrid(rows, cols, value) {\n  return Array.from({ length: rows }, () => new Array(cols).fill(value));\n}\n",
      "explain": "",
      "hints": [
       "<p>Xem lại phần &quot;bẫy fill&quot; trong bài: <code>Array.from({ length: rows }, () =&gt; ...)</code> gọi hàm tạo mảng mới cho <strong>mỗi</strong> hàng.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         2,
         3,
         0
        ],
        "expected": [
         [
          0,
          0,
          0
         ],
         [
          0,
          0,
          0
         ]
        ]
       },
       {
        "args": [
         1,
         1,
         "x"
        ],
        "expected": [
         [
          "x"
         ]
        ]
       },
       {
        "args": [
         0,
         5,
         0
        ],
        "expected": []
       },
       {
        "code": "const g = createGrid(3, 3, 0); g[0][0] = 1; return g;",
        "label": "Sửa g[0][0] = 1 chỉ đổi đúng một ô",
        "expected": [
         [
          1,
          0,
          0
         ],
         [
          0,
          0,
          0
         ],
         [
          0,
          0,
          0
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "strings",
    "title": "Chuỗi (String)",
    "html": "<h2>Chuỗi là bất biến (immutable)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">let s = &quot;hello&quot;;\ns[0] = &quot;H&quot;;          // không có tác dụng (không lỗi, nhưng không đổi)\nconsole.log(s);      // &quot;hello&quot;\ns = &quot;H&quot; + s.slice(1); // phải tạo chuỗi MỚI\nconsole.log(s);</code></pre>\n<p>Hệ quả: mỗi lần &quot;sửa&quot; chuỗi là tạo chuỗi mới. Ghép chuỗi trong vòng lặp lớn nên gom vào <strong>mảng</strong> rồi <code>join(&quot;&quot;)</code> (an toàn về hiệu năng ở mọi engine).</p>\n<h2>Truy cập ký tự và duyệt</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const word = &quot;JavaScript&quot;;\nconsole.log(word.length, word[0], word.at(-1), word.charAt(4));\nfor (const ch of word) {\n  if (ch === ch.toUpperCase()) console.log(&quot;chữ hoa:&quot;, ch);\n}</code></pre>\n<h2>Template literal</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const name = &quot;An&quot;;\nconst age = 20;\nconsole.log(`Tên: ${name}, sang năm ${age + 1} tuổi`);\nconsole.log(`Chuỗi\nnhiều dòng`);</code></pre>\n<h2>Các phương thức hay dùng</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const t = &quot;  Hello World  &quot;;\nconsole.log(t.trim());                    // bỏ khoảng trắng hai đầu\nconsole.log(t.toLowerCase(), t.toUpperCase());\nconsole.log(&quot;a,b,c&quot;.split(&quot;,&quot;));          // [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]\nconsole.log(&quot;abc&quot;.split(&quot;&quot;));             // [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;] — chuỗi → mảng ký tự\nconsole.log([&quot;x&quot;, &quot;y&quot;].join(&quot;+&quot;));        // &quot;x+y&quot;\nconsole.log(&quot;banana&quot;.indexOf(&quot;an&quot;), &quot;banana&quot;.includes(&quot;nan&quot;));\nconsole.log(&quot;banana&quot;.replaceAll(&quot;a&quot;, &quot;o&quot;));\nconsole.log(&quot;hello&quot;.slice(1, 4));         // &quot;ell&quot; — [1, 4)\nconsole.log(&quot;5&quot;.padStart(3, &quot;0&quot;));        // &quot;005&quot;\nconsole.log(&quot;ab&quot;.repeat(3));              // &quot;ababab&quot;\nconsole.log(&quot;hello&quot;.startsWith(&quot;he&quot;), &quot;hello&quot;.endsWith(&quot;lo&quot;));</code></pre>\n<h2>Mã ký tự — mẹo cho coding test</h2>\n<p>Nhiều bài chỉ có chữ thường <code>a</code>–<code>z</code>. Đổi ký tự sang số 0–25 để dùng mảng đếm thay vì object:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(&quot;a&quot;.charCodeAt(0), &quot;z&quot;.charCodeAt(0)); // 97 122\nconsole.log(String.fromCharCode(65));               // &quot;A&quot;\n\nconst counts = new Array(26).fill(0);\nfor (const ch of &quot;hello&quot;) {\n  counts[ch.charCodeAt(0) - 97]++;\n}\nconsole.log(counts[11]); // số chữ &quot;l&quot; = 2</code></pre>\n<h2>Đảo chuỗi, kiểm tra ký tự</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(&quot;abc&quot;.split(&quot;&quot;).reverse().join(&quot;&quot;));  // &quot;cba&quot;\nconsole.log([...&quot;abc&quot;].reverse().join(&quot;&quot;));       // cách khác\n\nconst isLetterOrDigit = (c) =&gt; /[a-z0-9]/i.test(c);\nconsole.log(isLetterOrDigit(&quot;a&quot;), isLetterOrDigit(&quot;!&quot;));</code></pre>\n<blockquote><p><strong>Lưu ý Unicode:</strong> <code>&quot;😀&quot;.length</code> là 2 vì emoji chiếm hai &quot;đơn vị UTF-16&quot;. <code>[...&quot;😀&quot;]</code> thì tách đúng thành 1 ký tự. Coding test hầu như chỉ dùng ASCII, nhưng phỏng vấn có thể hỏi điều này.</p>\n</blockquote>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao chuỗi được thiết kế bất biến trong JS (và Java, Python)? Lợi ích cho việc dùng chuỗi làm key của object/Map là gì?</li><li><code>s.split(&quot;&quot;).reverse().join(&quot;&quot;)</code> là O(n) nhưng tạo ra mấy mảng/chuỗi trung gian? Khi nào chi phí bộ nhớ đó đáng lo?</li></ul>\n",
    "source": "content/01-basics/06-strings.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "reverse-string",
      "title": "Đảo chuỗi",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>reverseString(s)</code> trả về chuỗi đảo ngược. Hãy thử viết <strong>bằng vòng lặp</strong> (không dùng <code>reverse()</code>).</p>\n",
      "fn": "reverseString",
      "starter": "function reverseString(s) {\n\n}\n",
      "solution": "function reverseString(s) {\n  const chars = [];\n  for (let i = s.length - 1; i >= 0; i--) {\n    chars.push(s[i]);\n  }\n  return chars.join(\"\");\n}\n",
      "explain": "",
      "hints": [
       "<p>Duyệt <code>i</code> từ <code>s.length - 1</code> về <code>0</code>, gom ký tự vào mảng rồi <code>join(&quot;&quot;)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "hello"
        ],
        "expected": "olleh"
       },
       {
        "args": [
         "a"
        ],
        "expected": "a"
       },
       {
        "args": [
         ""
        ],
        "expected": ""
       },
       {
        "args": [
         "racecar"
        ],
        "expected": "racecar"
       },
       {
        "args": [
         "ab cd"
        ],
        "expected": "dc ba"
       }
      ]
     },
     {
      "id": "valid-palindrome",
      "title": "Chuỗi đối xứng (Valid Palindrome)",
      "difficulty": "easy",
      "prompt": "<p>Một chuỗi là <strong>palindrome</strong> nếu sau khi đổi về chữ thường và <strong>bỏ mọi ký tự không phải chữ/số</strong>, đọc xuôi và ngược giống nhau.</p>\n<p><code>isPalindrome(&quot;A man, a plan, a canal: Panama&quot;)</code> → <code>true</code></p>\n<p>Yêu cầu: bộ nhớ phụ O(1) — dùng hai con trỏ, không tạo chuỗi đã lọc.</p>\n",
      "fn": "isPalindrome",
      "starter": "function isPalindrome(s) {\n\n}\n",
      "solution": "function isPalindrome(s) {\n  const isAlnum = (c) => /[a-z0-9]/i.test(c);\n  let left = 0;\n  let right = s.length - 1;\n  while (left < right) {\n    if (!isAlnum(s[left])) { left++; continue; }\n    if (!isAlnum(s[right])) { right--; continue; }\n    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n",
      "explain": "<p>Cách &quot;dễ&quot;: <code>const t = s.toLowerCase().replace(/[^a-z0-9]/g, &quot;&quot;)</code> rồi so với bản đảo — O(n) thời gian nhưng O(n) bộ nhớ. Hai con trỏ đạt O(1) bộ nhớ. Đây là LeetCode 125, câu khởi động rất hay gặp.</p>\n",
      "hints": [
       "<p>Hai con trỏ <code>left</code>, <code>right</code>. Nếu ký tự ở <code>left</code> không phải chữ/số → <code>left++</code> và bỏ qua; tương tự với <code>right</code>.</p>\n",
       "<p>Kiểm tra chữ/số: <code>/[a-z0-9]/i.test(c)</code>.</p>\n"
      ],
      "followUp": "<p>Biến thể (LeetCode 680): được phép <strong>xoá tối đa một ký tự</strong>. Khi hai con trỏ gặp cặp khác nhau, bạn có mấy lựa chọn để thử tiếp?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "A man, a plan, a canal: Panama"
        ],
        "expected": true
       },
       {
        "args": [
         "race a car"
        ],
        "expected": false
       },
       {
        "args": [
         " "
        ],
        "expected": true
       },
       {
        "args": [
         "0P"
        ],
        "expected": false
       },
       {
        "args": [
         "ab_a"
        ],
        "expected": true
       },
       {
        "args": [
         "No lemon, no melon"
        ],
        "expected": true
       }
      ]
     },
     {
      "id": "capitalize-words",
      "title": "Viết hoa chữ cái đầu",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>capitalizeWords(s)</code> viết hoa chữ cái đầu của mỗi từ, các chữ còn lại viết thường. Các từ cách nhau bởi <strong>một hoặc nhiều</strong> khoảng trắng; kết quả nối các từ bằng <strong>đúng một</strong> dấu cách và bỏ khoảng trắng thừa ở hai đầu.</p>\n<p><code>capitalizeWords(&quot;  hELLo   wORLD &quot;)</code> → <code>&quot;Hello World&quot;</code></p>\n",
      "fn": "capitalizeWords",
      "starter": "function capitalizeWords(s) {\n\n}\n",
      "solution": "function capitalizeWords(s) {\n  return s\n    .trim()\n    .split(/\\s+/)\n    .filter((w) => w.length > 0)\n    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())\n    .join(\" \");\n}\n",
      "explain": "",
      "hints": [
       "<p><code>s.trim().split(/\\s+/)</code> tách theo một hoặc nhiều khoảng trắng.</p>\n",
       "<p>Với mỗi từ: <code>w[0].toUpperCase() + w.slice(1).toLowerCase()</code>. Cẩn thận chuỗi rỗng <code>&quot;&quot;</code> → <code>split</code> trả về <code>[&quot;&quot;]</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "hello world"
        ],
        "expected": "Hello World"
       },
       {
        "args": [
         "  hELLo   wORLD "
        ],
        "expected": "Hello World"
       },
       {
        "args": [
         "javascript"
        ],
        "expected": "Javascript"
       },
       {
        "args": [
         ""
        ],
        "expected": ""
       },
       {
        "args": [
         "a b c"
        ],
        "expected": "A B C"
       }
      ]
     },
     {
      "id": "caesar-cipher",
      "title": "Mật mã Caesar",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>caesar(s, k)</code> dịch mỗi <strong>chữ cái</strong> trong <code>s</code> đi <code>k</code> vị trí trong bảng chữ cái (vòng lại từ <code>z</code> về <code>a</code>), <strong>giữ nguyên hoa/thường</strong>; ký tự khác giữ nguyên. <code>k</code> có thể âm hoặc lớn hơn 26.</p>\n<p><code>caesar(&quot;Hello, World!&quot;, 3)</code> → <code>&quot;Khoor, Zruog!&quot;</code></p>\n",
      "fn": "caesar",
      "starter": "function caesar(s, k) {\n\n}\n",
      "solution": "function caesar(s, k) {\n  const shift = ((k % 26) + 26) % 26;\n  let out = [];\n  for (const ch of s) {\n    const code = ch.charCodeAt(0);\n    if (code >= 97 && code <= 122) {\n      out.push(String.fromCharCode(((code - 97 + shift) % 26) + 97));\n    } else if (code >= 65 && code <= 90) {\n      out.push(String.fromCharCode(((code - 65 + shift) % 26) + 65));\n    } else {\n      out.push(ch);\n    }\n  }\n  return out.join(\"\");\n}\n",
      "explain": "<p>Công thức <code>((x % m) + m) % m</code> cho phần dư luôn không âm — ghi nhớ nó, bạn sẽ dùng lại khi xử lý chỉ số vòng (mảng vòng, đồng hồ, modulo trong bài đếm).</p>\n",
      "hints": [
       "<p>Đổi chữ thường về 0–25: <code>code - 97</code>. Cộng <code>k</code>, lấy <code>% 26</code>, rồi cộng lại 97.</p>\n",
       "<p>Với <code>k</code> âm: <code>-1 % 26</code> là <code>-1</code> trong JS! Chuẩn hoá: <code>((k % 26) + 26) % 26</code>.</p>\n"
      ],
      "followUp": "<p>Tại sao JS (và C, Java) cho <code>-1 % 26 === -1</code> còn Python cho <code>25</code>? Mỗi lựa chọn có lý do gì?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "abc",
         1
        ],
        "expected": "bcd"
       },
       {
        "args": [
         "xyz",
         3
        ],
        "expected": "abc"
       },
       {
        "args": [
         "Hello, World!",
         3
        ],
        "expected": "Khoor, Zruog!"
       },
       {
        "args": [
         "abc",
         -1
        ],
        "expected": "zab"
       },
       {
        "args": [
         "Zz",
         52
        ],
        "expected": "Zz"
       },
       {
        "args": [
         "abc",
         27
        ],
        "expected": "bcd"
       }
      ]
     }
    ]
   },
   {
    "id": "objects",
    "title": "Object",
    "html": "<p>Object lưu cặp <strong>key → value</strong>. Trong coding test, object (và <code>Map</code>) là công cụ đếm tần suất và tra cứu O(1) — nền tảng của hàng trăm bài &quot;hash map&quot;.</p>\n<h2>Tạo, đọc, ghi, xoá</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const user = { name: &quot;An&quot;, age: 20, &quot;favorite color&quot;: &quot;xanh&quot; };\nconsole.log(user.name);              // dot notation\nconsole.log(user[&quot;favorite color&quot;]); // bracket: key có dấu cách / key nằm trong biến\n\nconst key = &quot;age&quot;;\nconsole.log(user[key]);              // 20 — user.key sẽ tìm key tên &quot;key&quot;!\n\nuser.city = &quot;Hà Nội&quot;;                // thêm\nuser.age += 1;                       // sửa\ndelete user[&quot;favorite color&quot;];       // xoá\nconsole.log(user);\nconsole.log(&quot;city&quot; in user, user.zip); // true undefined</code></pre>\n<h2>Duyệt object</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const scores = { an: 8, binh: 6, chi: 9 };\nconsole.log(Object.keys(scores));    // [&quot;an&quot;,&quot;binh&quot;,&quot;chi&quot;]\nconsole.log(Object.values(scores));  // [8,6,9]\nfor (const [name, score] of Object.entries(scores)) {\n  console.log(name, &quot;→&quot;, score);\n}</code></pre>\n<h2>Đếm tần suất — pattern quan trọng nhất</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function countChars(str) {\n  const freq = {};\n  for (const ch of str) {\n    freq[ch] = (freq[ch] || 0) + 1;\n  }\n  return freq;\n}\nconsole.log(countChars(&quot;banana&quot;)); // { b: 1, a: 3, n: 2 }</code></pre>\n<p><code>(freq[ch] || 0) + 1</code>: nếu chưa có key thì <code>freq[ch]</code> là <code>undefined</code> → dùng 0.</p>\n<h2>Destructuring và shorthand</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const point = { x: 3, y: 4, label: &quot;P&quot; };\nconst { x, y } = point;                  // lấy ra biến\nconst { label: name = &quot;?&quot;, z = 0 } = point; // đổi tên + giá trị mặc định\nconsole.log(x, y, name, z);\n\nconst a = 1, b = 2;\nconst obj = { a, b };                    // shorthand cho { a: a, b: b }\nconsole.log(obj);\n\nfunction area({ width, height }) {       // destructuring tham số\n  return width * height;\n}\nconsole.log(area({ width: 2, height: 5 }));</code></pre>\n<h2>Sao chép nông vs sâu</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const original = { name: &quot;An&quot;, tags: [&quot;js&quot;] };\nconst shallow = { ...original };     // spread: copy NÔNG\nshallow.name = &quot;Bình&quot;;\nshallow.tags.push(&quot;css&quot;);            // tags vẫn là CÙNG một mảng!\nconsole.log(original);               // name giữ nguyên, nhưng tags bị đổi\n\nconst deep = structuredClone(original); // copy SÂU\ndeep.tags.push(&quot;html&quot;);\nconsole.log(original.tags, deep.tags);</code></pre>\n<h2>JSON</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const data = { id: 1, items: [1, 2] };\nconst text = JSON.stringify(data);   // object → chuỗi\nconsole.log(text, typeof text);\nconst back = JSON.parse(text);       // chuỗi → object\nconsole.log(back.items[1]);</code></pre>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao <code>user.key</code> và <code>user[key]</code> khác nhau? Lỗi này hay xuất hiện ở đâu trong bài đếm tần suất?</li><li>Copy nông nhanh và rẻ, copy sâu an toàn nhưng tốn. Trong React/Redux, người ta lại cố tình dùng copy nông — tại sao điều đó vẫn đúng?</li><li>Object với key là số (<code>obj[1]</code>) thì key thực sự là gì? (Gợi ý: <code>Object.keys({1: &quot;a&quot;})</code>.)</li></ul>\n",
    "source": "content/01-basics/07-objects.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "char-frequency",
      "title": "Đếm tần suất ký tự",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>charFrequency(s)</code> trả về object đếm số lần xuất hiện của mỗi ký tự <strong>chữ cái</strong> (không phân biệt hoa thường, key là chữ thường). Bỏ qua ký tự không phải chữ cái a–z.</p>\n<p><code>charFrequency(&quot;Hello!&quot;)</code> → <code>{ h: 1, e: 1, l: 2, o: 1 }</code></p>\n",
      "fn": "charFrequency",
      "starter": "function charFrequency(s) {\n  const freq = {};\n\n  return freq;\n}\n",
      "solution": "function charFrequency(s) {\n  const freq = {};\n  for (const raw of s) {\n    const ch = raw.toLowerCase();\n    if (ch < \"a\" || ch > \"z\") continue;\n    freq[ch] = (freq[ch] || 0) + 1;\n  }\n  return freq;\n}\n",
      "explain": "",
      "hints": [
       "<p>Pattern: <code>freq[ch] = (freq[ch] || 0) + 1;</code></p>\n",
       "<p>Kiểm tra chữ cái: sau khi <code>toLowerCase()</code>, so sánh chuỗi <code>ch &gt;= &quot;a&quot; &amp;&amp; ch &lt;= &quot;z&quot;</code> hoặc dùng regex <code>/[a-z]/</code>.</p>\n"
      ],
      "followUp": "<p>Thứ tự key trong object có quan trọng với bộ chấm không? Bộ chấm so sánh <code>{a: 1, b: 2}</code> với <code>{b: 2, a: 1}</code> thế nào — và <strong>tại sao</strong> nên như vậy?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "Hello!"
        ],
        "expected": {
         "h": 1,
         "e": 1,
         "l": 2,
         "o": 1
        }
       },
       {
        "args": [
         "banana"
        ],
        "expected": {
         "b": 1,
         "a": 3,
         "n": 2
        }
       },
       {
        "args": [
         ""
        ],
        "expected": {}
       },
       {
        "args": [
         "AaA 123"
        ],
        "expected": {
         "a": 3
        }
       }
      ]
     },
     {
      "id": "invert-object",
      "title": "Đảo key ↔ value",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>invert(obj)</code> trả về object mới với key và value đổi chỗ cho nhau. Nếu nhiều key có cùng value, giữ key <strong>xuất hiện sau cùng</strong>.</p>\n<p><code>invert({ a: &quot;x&quot;, b: &quot;y&quot; })</code> → <code>{ x: &quot;a&quot;, y: &quot;b&quot; }</code></p>\n",
      "fn": "invert",
      "starter": "function invert(obj) {\n\n}\n",
      "solution": "function invert(obj) {\n  const result = {};\n  for (const [key, value] of Object.entries(obj)) {\n    result[value] = key;\n  }\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Duyệt <code>Object.entries(obj)</code> và gán <code>result[value] = key</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         {
          "a": "x",
          "b": "y"
         }
        ],
        "expected": {
         "x": "a",
         "y": "b"
        }
       },
       {
        "args": [
         {
          "a": 1,
          "b": 2
         }
        ],
        "expected": {
         "1": "a",
         "2": "b"
        }
       },
       {
        "args": [
         {
          "a": "x",
          "b": "x"
         }
        ],
        "expected": {
         "x": "b"
        }
       },
       {
        "args": [
         {}
        ],
        "expected": {}
       }
      ]
     },
     {
      "id": "group-by",
      "title": "Nhóm theo key (groupBy)",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>groupBy(items, keyFn)</code> trả về object, trong đó mỗi key là <code>keyFn(item)</code> và value là <strong>mảng</strong> các item có cùng key (giữ thứ tự xuất hiện).</p>\n<pre class=\"code\"><code class=\"language-js\">groupBy([1, 2, 3, 4, 5], (n) =&gt; (n % 2 === 0 ? &quot;chan&quot; : &quot;le&quot;))\n// { le: [1, 3, 5], chan: [2, 4] }</code></pre>\n",
      "fn": "groupBy",
      "starter": "function groupBy(items, keyFn) {\n\n}\n",
      "solution": "function groupBy(items, keyFn) {\n  const groups = {};\n  for (const item of items) {\n    const key = keyFn(item);\n    if (!groups[key]) groups[key] = [];\n    groups[key].push(item);\n  }\n  return groups;\n}\n",
      "explain": "<p>Đây là pattern &quot;bucket&quot;: gom phần tử vào các nhóm theo một khoá. Bài <strong>Group Anagrams</strong> ở chặng DSA chính là groupBy với key = chuỗi đã sắp xếp.</p>\n",
      "hints": [
       "<p>Với mỗi item: tính key, nếu <code>groups[key]</code> chưa có thì tạo <code>[]</code>, rồi <code>push</code>.</p>\n",
       "<p>Viết gọn: <code>(groups[key] ??= []).push(item);</code></p>\n"
      ],
      "followUp": "<p>JS hiện đại đã có <code>Object.groupBy(items, keyFn)</code>. Khi đi phỏng vấn, bạn nên dùng hàm có sẵn hay tự viết? Hỏi người phỏng vấn thế nào cho khéo?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return groupBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? \"chan\" : \"le\"));",
        "label": "groupBy([1..5], chẵn/lẻ)",
        "expected": {
         "le": [
          1,
          3,
          5
         ],
         "chan": [
          2,
          4
         ]
        }
       },
       {
        "code": "return groupBy([\"an\", \"binh\", \"anh\", \"bao\"], (s) => s[0]);",
        "label": "groupBy(tên, chữ cái đầu)",
        "expected": {
         "a": [
          "an",
          "anh"
         ],
         "b": [
          "binh",
          "bao"
         ]
        }
       },
       {
        "code": "return groupBy([], (x) => x);",
        "label": "mảng rỗng",
        "expected": {}
       },
       {
        "code": "return groupBy([{ n: \"A\", age: 20 }, { n: \"B\", age: 21 }, { n: \"C\", age: 20 }], (p) => p.age);",
        "label": "nhóm người theo tuổi",
        "expected": {
         "20": [
          {
           "n": "A",
           "age": 20
          },
          {
           "n": "C",
           "age": 20
          }
         ],
         "21": [
          {
           "n": "B",
           "age": 21
          }
         ]
        }
       }
      ]
     }
    ]
   },
   {
    "id": "array-methods",
    "title": "map, filter, reduce, sort",
    "html": "<p>Các phương thức nhận <strong>hàm callback</strong> giúp viết xử lý mảng ngắn gọn, ít bug hơn vòng lặp thủ công. Code JS hiện đại (và phần lớn lời giải coding test) dùng chúng liên tục.</p>\n<h2>map — biến đổi từng phần tử</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const nums = [1, 2, 3, 4];\nconst doubled = nums.map((n) =&gt; n * 2);\nconsole.log(doubled, nums);               // mảng mới, mảng gốc giữ nguyên\nconsole.log(nums.map((n, i) =&gt; n * i));   // callback nhận cả chỉ số</code></pre>\n<h2>filter — giữ phần tử thoả điều kiện</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const nums = [5, 12, 8, 130, 44];\nconsole.log(nums.filter((n) =&gt; n &gt; 10));\nconsole.log([&quot;a&quot;, &quot;&quot;, &quot;b&quot;, null].filter(Boolean)); // bỏ giá trị falsy</code></pre>\n<h2>reduce — gộp cả mảng thành một giá trị</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, n) =&gt; acc + n, 0); // 0 là giá trị khởi đầu của acc\nconsole.log(sum);\n\nconst freq = [&quot;a&quot;, &quot;b&quot;, &quot;a&quot;].reduce((acc, ch) =&gt; {\n  acc[ch] = (acc[ch] || 0) + 1;\n  return acc;                                   // nhớ return acc!\n}, {});\nconsole.log(freq);</code></pre>\n<blockquote><p>Luôn truyền giá trị khởi đầu cho <code>reduce</code>. Không truyền thì <code>[].reduce(...)</code> ném TypeError.</p>\n</blockquote>\n<h2>find, findIndex, some, every</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const users = [{ id: 1, name: &quot;An&quot; }, { id: 2, name: &quot;Bình&quot; }];\nconsole.log(users.find((u) =&gt; u.id === 2));      // object hoặc undefined\nconsole.log(users.findIndex((u) =&gt; u.id === 9)); // -1\nconsole.log([1, 3, 5].some((n) =&gt; n % 2 === 0)); // có ít nhất một?\nconsole.log([1, 3, 5].every((n) =&gt; n % 2 === 1)); // tất cả?</code></pre>\n<h2>sort — bẫy số 1 của JS trong coding test</h2>\n<p><code>sort()</code> <strong>sửa mảng gốc</strong> và mặc định so sánh như <strong>chuỗi</strong>:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log([10, 9, 1, 100].sort());               // [1, 10, 100, 9] ⚠️\nconsole.log([10, 9, 1, 100].sort((a, b) =&gt; a - b)); // tăng dần\nconsole.log([10, 9, 1, 100].sort((a, b) =&gt; b - a)); // giảm dần</code></pre>\n<p>Hàm so sánh <code>(a, b)</code> trả về <strong>số âm</strong> nếu a đứng trước, <strong>dương</strong> nếu b đứng trước, <strong>0</strong> nếu như nhau.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const people = [\n  { name: &quot;Chi&quot;, age: 25 },\n  { name: &quot;An&quot;, age: 30 },\n  { name: &quot;Bình&quot;, age: 25 }\n];\n// sắp theo tuổi tăng dần, cùng tuổi thì theo tên\npeople.sort((a, b) =&gt; a.age - b.age || a.name.localeCompare(b.name));\nconsole.log(people.map((p) =&gt; p.name + &quot; &quot; + p.age));\n\nconst words = [&quot;banana&quot;, &quot;Apple&quot;, &quot;cherry&quot;];\nconsole.log([...words].sort());                                   // hoa đứng trước thường\nconsole.log([...words].sort((a, b) =&gt; a.localeCompare(b)));</code></pre>\n<ul><li>Độ phức tạp: O(n log n). Từ ES2019, <code>sort</code> là <strong>stable</strong> (phần tử bằng nhau giữ thứ tự cũ).</li><li>Muốn không đổi mảng gốc: <code>[...arr].sort(...)</code> hoặc <code>arr.toSorted(...)</code> (mới).</li></ul>\n<h2>Chuỗi phương thức (chaining)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const orders = [\n  { item: &quot;áo&quot;, price: 200, qty: 2 },\n  { item: &quot;quần&quot;, price: 350, qty: 1 },\n  { item: &quot;mũ&quot;, price: 80, qty: 5 }\n];\nconst bigTotal = orders\n  .map((o) =&gt; o.price * o.qty)\n  .filter((t) =&gt; t &gt;= 400)\n  .reduce((s, t) =&gt; s + t, 0);\nconsole.log(bigTotal); // 400 + 400 = 800</code></pre>\n<blockquote><p><strong>Trade-off:</strong> chaining dễ đọc nhưng mỗi bước tạo một mảng mới và duyệt lại từ đầu. Với n = 10^6 và nhiều bước, một vòng <code>for</code> duy nhất có thể nhanh hơn đáng kể. Trong phỏng vấn, viết bản dễ đọc rồi nói ra trade-off này là điểm cộng.</p>\n</blockquote>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao <code>sort()</code> mặc định so sánh như chuỗi? (Gợi ý: mảng JS có thể chứa lẫn số, chuỗi, object.)</li><li><code>forEach</code> vs <code>map</code>: dùng <code>map</code> mà không dùng giá trị trả về có sai không? Người review code sẽ nghĩ gì?</li><li>Khi nào <code>reduce</code> làm code <strong>khó đọc</strong> hơn vòng lặp?</li></ul>\n",
    "source": "content/01-basics/08-array-methods.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "sum-squares-evens",
      "title": "Tổng bình phương số chẵn",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>sumSquaresOfEvens(nums)</code> trả về tổng bình phương của các số <strong>chẵn</strong> trong mảng. Hãy dùng <code>filter</code>, <code>map</code>, <code>reduce</code>.</p>\n<p><code>sumSquaresOfEvens([1, 2, 3, 4])</code> → <code>4 + 16 = 20</code></p>\n",
      "fn": "sumSquaresOfEvens",
      "starter": "function sumSquaresOfEvens(nums) {\n  return nums;\n}\n",
      "solution": "function sumSquaresOfEvens(nums) {\n  return nums\n    .filter((n) => n % 2 === 0)\n    .map((n) => n * n)\n    .reduce((sum, n) => sum + n, 0);\n}\n",
      "explain": "",
      "hints": [
       "<p><code>.filter(n =&gt; n % 2 === 0).map(n =&gt; n * n).reduce((s, n) =&gt; s + n, 0)</code></p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          3,
          4
         ]
        ],
        "expected": 20
       },
       {
        "args": [
         [
          1,
          3,
          5
         ]
        ],
        "expected": 0
       },
       {
        "args": [
         []
        ],
        "expected": 0
       },
       {
        "args": [
         [
          -2,
          2
         ]
        ],
        "expected": 8
       }
      ]
     },
     {
      "id": "sort-numbers",
      "title": "Sắp xếp đúng cách",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>sortNumbers(nums)</code> trả về mảng <strong>mới</strong> đã sắp xếp tăng dần, <strong>không làm thay đổi</strong> mảng đầu vào.</p>\n",
      "fn": "sortNumbers",
      "starter": "function sortNumbers(nums) {\n  return nums.sort();\n}\n",
      "solution": "function sortNumbers(nums) {\n  return [...nums].sort((a, b) => a - b);\n}\n",
      "explain": "",
      "hints": [
       "<p>Code sẵn có <strong>hai</strong> lỗi. Chạy test để thấy.</p>\n",
       "<p>Copy trước khi sort: <code>[...nums]</code>. Và truyền comparator <code>(a, b) =&gt; a - b</code>.</p>\n"
      ],
      "followUp": "<p><code>(a, b) =&gt; a - b</code> có thể sai với số rất lớn không? (Gợi ý: hai số đều là số thực bình thường thì không, nhưng nếu so sánh BigInt hoặc chuỗi thì sao?)</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          10,
          9,
          1,
          100
         ]
        ],
        "expected": [
         1,
         9,
         10,
         100
        ]
       },
       {
        "args": [
         [
          3,
          -1,
          2
         ]
        ],
        "expected": [
         -1,
         2,
         3
        ]
       },
       {
        "args": [
         []
        ],
        "expected": []
       },
       {
        "code": "const a = [3, 1, 2]; sortNumbers(a); return a;",
        "label": "Mảng gốc [3, 1, 2] không bị đổi",
        "expected": [
         3,
         1,
         2
        ]
       }
      ]
     },
     {
      "id": "sort-people",
      "title": "Sắp xếp nhiều tiêu chí",
      "difficulty": "medium",
      "prompt": "<p>Cho mảng học sinh <code>{ name, score }</code>. Viết <code>rankStudents(students)</code> trả về <strong>mảng tên</strong> đã sắp xếp theo:</p>\n<ol><li><code>score</code> <strong>giảm dần</strong></li><li>Nếu bằng điểm: <code>name</code> tăng dần theo bảng chữ cái</li></ol>\n",
      "fn": "rankStudents",
      "starter": "function rankStudents(students) {\n\n}\n",
      "solution": "function rankStudents(students) {\n  return [...students]\n    .sort((a, b) => b.score - a.score || (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))\n    .map((s) => s.name);\n}\n",
      "explain": "",
      "hints": [
       "<p>Comparator: <code>b.score - a.score</code> cho giảm dần. Nếu kết quả là 0 thì <code>||</code> sẽ chuyển sang tiêu chí thứ hai.</p>\n",
       "<p>So sánh chuỗi: <code>a.name &lt; b.name ? -1 : a.name &gt; b.name ? 1 : 0</code> hoặc <code>a.name.localeCompare(b.name)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          {
           "name": "An",
           "score": 8
          },
          {
           "name": "Binh",
           "score": 9
          },
          {
           "name": "Chi",
           "score": 8
          }
         ]
        ],
        "expected": [
         "Binh",
         "An",
         "Chi"
        ]
       },
       {
        "args": [
         [
          {
           "name": "Zed",
           "score": 5
          },
          {
           "name": "Amy",
           "score": 5
          }
         ]
        ],
        "expected": [
         "Amy",
         "Zed"
        ]
       },
       {
        "args": [
         []
        ],
        "expected": []
       }
      ]
     },
     {
      "id": "top-words",
      "title": "Từ xuất hiện nhiều nhất",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>topWords(text, k)</code> trả về mảng <code>k</code> từ xuất hiện nhiều nhất trong <code>text</code> (không phân biệt hoa thường, từ gồm chữ a–z, phân cách bởi bất kỳ ký tự nào khác). Sắp theo số lần xuất hiện <strong>giảm dần</strong>, bằng nhau thì theo <strong>thứ tự từ điển</strong>.</p>\n<p><code>topWords(&quot;the cat and the hat and the bat&quot;, 2)</code> → <code>[&quot;the&quot;, &quot;and&quot;]</code></p>\n",
      "fn": "topWords",
      "starter": "function topWords(text, k) {\n\n}\n",
      "solution": "function topWords(text, k) {\n  const words = text.toLowerCase().match(/[a-z]+/g) || [];\n  const freq = {};\n  for (const w of words) freq[w] = (freq[w] || 0) + 1;\n  return Object.keys(freq)\n    .sort((a, b) => freq[b] - freq[a] || (a < b ? -1 : 1))\n    .slice(0, k);\n}\n",
      "explain": "<p>O(n + m log m) với m là số từ khác nhau. Đây là &quot;Top K Frequent Words&quot; (LeetCode 692). Khi m rất lớn và k nhỏ, dùng heap kích thước k cho O(m log k).</p>\n",
      "hints": [
       "<p>Tách từ: <code>text.toLowerCase().match(/[a-z]+/g)</code> (nhớ trường hợp không có từ nào thì <code>match</code> trả về <code>null</code>).</p>\n",
       "<p>Đếm tần suất vào object, rồi sắp <code>Object.keys(freq)</code> bằng comparator hai tiêu chí, cuối cùng <code>slice(0, k)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "the cat and the hat and the bat",
         2
        ],
        "expected": [
         "the",
         "and"
        ]
       },
       {
        "args": [
         "b a c b a",
         3
        ],
        "expected": [
         "a",
         "b",
         "c"
        ]
       },
       {
        "args": [
         "Hello, hello! HELLO? world.",
         1
        ],
        "expected": [
         "hello"
        ]
       },
       {
        "args": [
         "",
         3
        ],
        "expected": []
       }
      ]
     }
    ]
   },
   {
    "id": "scope-closures",
    "title": "Scope và closure",
    "html": "<p>Closure là câu hỏi phỏng vấn JS <strong>kinh điển nhất</strong>. Hiểu nó cũng giúp bạn hiểu tại sao code bất đồng bộ đôi khi in ra giá trị &quot;lạ&quot;.</p>\n<h2>Scope — biến sống ở đâu</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const global = &quot;toàn cục&quot;;\nfunction outer() {\n  const a = &quot;của outer&quot;;\n  if (true) {\n    const b = &quot;chỉ trong block if&quot;;\n    console.log(global, a, b); // thấy được cả 3\n  }\n  // console.log(b); // ReferenceError: b chỉ tồn tại trong block\n}\nouter();</code></pre>\n<p>Hàm bên trong <strong>nhìn thấy</strong> biến của hàm bên ngoài (lexical scope — xác định bởi <strong>vị trí viết code</strong>, không phải nơi gọi hàm).</p>\n<h2>Closure — hàm &quot;mang theo&quot; biến của nơi nó được tạo</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function makeCounter() {\n  let count = 0;            // biến riêng, bên ngoài không đụng tới được\n  return function () {\n    count++;\n    return count;\n  };\n}\n\nconst c1 = makeCounter();\nconst c2 = makeCounter();\nconsole.log(c1(), c1(), c1()); // 1 2 3\nconsole.log(c2());             // 1 — mỗi lần gọi makeCounter tạo một count riêng</code></pre>\n<p><code>makeCounter</code> đã chạy xong, nhưng <code>count</code> <strong>không bị xoá</strong> vì hàm trả về vẫn tham chiếu tới nó. Đó là closure: hàm + môi trường biến mà nó được tạo ra.</p>\n<p>Ứng dụng: biến private, factory function, memoize (nhớ kết quả), <code>once</code>, debounce/throttle, giữ state trong React hooks.</p>\n<h2>Câu hỏi phỏng vấn kinh điển: <code>var</code> trong vòng lặp</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">for (var i = 0; i &lt; 3; i++) {\n  setTimeout(() =&gt; console.log(&quot;var:&quot;, i), 0);\n}\nfor (let j = 0; j &lt; 3; j++) {\n  setTimeout(() =&gt; console.log(&quot;let:&quot;, j), 0);\n}</code></pre>\n<ul><li>Với <code>var</code>: chỉ có <strong>một</strong> biến <code>i</code> cho cả vòng lặp. Khi các callback chạy (sau vòng lặp), <code>i</code> đã là 3 → in <code>3 3 3</code>.</li><li>Với <code>let</code>: mỗi vòng lặp tạo một biến <code>j</code> <strong>mới</strong> → mỗi closure nhớ giá trị riêng → <code>0 1 2</code>.</li></ul>\n<h2>Hoisting và Temporal Dead Zone (TDZ)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(typeof hoistedVar); // &quot;undefined&quot; — var được hoist với giá trị undefined\nvar hoistedVar = 1;\n\ntry {\n  console.log(notYet);          // let/const cũng được hoist nhưng ở &quot;vùng chết&quot; đến dòng khai báo\n} catch (e) {\n  console.log(e.name + &quot;: &quot; + e.message);\n}\nlet notYet = 2;</code></pre>\n<h2>Memoize — closure + cache</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function memoize(fn) {\n  const cache = new Map();\n  return function (n) {\n    if (cache.has(n)) return cache.get(n);\n    const result = fn(n);\n    cache.set(n, result);\n    return result;\n  };\n}\n\nlet calls = 0;\nconst slowSquare = (n) =&gt; { calls++; return n * n; };\nconst fastSquare = memoize(slowSquare);\nfastSquare(9); fastSquare(9); fastSquare(9);\nconsole.log(&quot;số lần thực sự tính:&quot;, calls); // 1</code></pre>\n<p>Ý tưởng này chính là <strong>quy hoạch động top-down</strong> ở chặng DSA.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Closure giữ biến lại trong bộ nhớ. Khi nào điều đó gây <strong>rò rỉ bộ nhớ</strong> (memory leak)? (Gợi ý: event listener không được gỡ.)</li><li>Trước khi có <code>class</code> và <code>#private</code>, người ta tạo biến private bằng closure. So sánh hai cách: cách nào tốn bộ nhớ hơn khi tạo 1 triệu object?</li></ul>\n",
    "source": "content/01-basics/09-scope-closures.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "counter-closure",
      "title": "Bộ đếm có reset",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>createCounter(start)</code> trả về object có 3 phương thức:</p>\n<ul><li><code>increment()</code>: tăng 1 và trả về giá trị mới</li><li><code>decrement()</code>: giảm 1 và trả về giá trị mới</li><li><code>reset()</code>: về lại <code>start</code> và trả về <code>start</code></li></ul>\n<p>Giá trị hiện tại phải <strong>private</strong> — không truy cập trực tiếp được từ bên ngoài.</p>\n",
      "fn": "createCounter",
      "starter": "function createCounter(start) {\n\n}\n",
      "solution": "function createCounter(start) {\n  let value = start;\n  return {\n    increment: () => ++value,\n    decrement: () => --value,\n    reset: () => (value = start)\n  };\n}\n",
      "explain": "",
      "hints": [
       "<p>Khai báo <code>let value = start;</code> bên trong <code>createCounter</code>, rồi return một object chứa 3 arrow function dùng <code>value</code>.</p>\n",
       "<p><code>++value</code> tăng rồi trả về giá trị <strong>mới</strong>; <code>value++</code> trả về giá trị <strong>cũ</strong>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const c = createCounter(5); return [c.increment(), c.increment(), c.decrement()];",
        "label": "createCounter(5): increment, increment, decrement",
        "expected": [
         6,
         7,
         6
        ]
       },
       {
        "code": "const c = createCounter(0); c.increment(); c.increment(); return [c.reset(), c.increment()];",
        "label": "reset rồi increment",
        "expected": [
         0,
         1
        ]
       },
       {
        "code": "const a = createCounter(0), b = createCounter(10); a.increment(); return [a.increment(), b.increment()];",
        "label": "hai counter độc lập",
        "expected": [
         2,
         11
        ]
       },
       {
        "code": "const c = createCounter(3); return Object.values(c).every((v) => typeof v === \"function\");",
        "label": "object chỉ chứa phương thức (không lộ biến đếm)",
        "expected": true
       }
      ]
     },
     {
      "id": "once",
      "title": "Hàm chỉ chạy một lần (once)",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>once(fn)</code> trả về hàm mới: lần gọi <strong>đầu tiên</strong> sẽ gọi <code>fn</code> với các tham số được truyền và trả về kết quả; các lần sau <strong>không gọi <code>fn</code> nữa</strong> mà trả về kết quả của lần đầu.</p>\n",
      "fn": "once",
      "starter": "function once(fn) {\n\n}\n",
      "solution": "function once(fn) {\n  let called = false;\n  let result;\n  return function (...args) {\n    if (!called) {\n      called = true;\n      result = fn(...args);\n    }\n    return result;\n  };\n}\n",
      "explain": "",
      "hints": [
       "<p>Cần hai biến trong closure: <code>called</code> (đã gọi chưa) và <code>result</code>.</p>\n",
       "<p>Dùng rest/spread để chuyển tiếp mọi tham số: <code>function (...args) { ... fn(...args) }</code>.</p>\n"
      ],
      "followUp": "<p>Tại sao cần biến <code>called</code> riêng mà không kiểm tra <code>result === undefined</code>? (Gợi ý: hàm <code>fn</code> trả về <code>undefined</code> thì sao?)</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "let n = 0; const f = once(() => ++n); return [f(), f(), f(), n];",
        "label": "gọi 3 lần, fn chỉ chạy 1 lần",
        "expected": [
         1,
         1,
         1,
         1
        ]
       },
       {
        "code": "const add = once((a, b) => a + b); return [add(2, 3), add(10, 10)];",
        "label": "giữ kết quả lần đầu",
        "expected": [
         5,
         5
        ]
       },
       {
        "code": "let n = 0; const f = once(() => { n++; }); f(); f(); return n;",
        "label": "fn trả về undefined vẫn chỉ chạy 1 lần",
        "expected": 1
       }
      ]
     },
     {
      "id": "memoize",
      "title": "Memoize",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>memoize(fn)</code> trả về phiên bản có <strong>cache</strong> của <code>fn</code>: nếu đã gọi với cùng bộ tham số thì trả kết quả đã lưu, không gọi <code>fn</code> lại.</p>\n<p>Hàm có thể có <strong>nhiều tham số</strong> (là số hoặc chuỗi). Gợi ý: tạo key từ danh sách tham số.</p>\n",
      "fn": "memoize",
      "starter": "function memoize(fn) {\n\n}\n",
      "solution": "function memoize(fn) {\n  const cache = new Map();\n  return function (...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n}\n",
      "explain": "<p>Trade-off: cache tốn bộ nhớ không giới hạn, và tạo key bằng <code>JSON.stringify</code> tốn O(độ dài tham số) mỗi lần gọi. Thư viện thật hay dùng LRU cache (giới hạn số phần tử) — một bài phỏng vấn kinh điển khác.</p>\n",
      "hints": [
       "<p>Key cho nhiều tham số: <code>JSON.stringify(args)</code> — phân biệt được <code>(1, 23)</code> với <code>(12, 3)</code>, còn <code>args.join(&quot;&quot;)</code> thì không.</p>\n",
       "<p>Dùng <code>Map</code> với <code>has</code>/<code>get</code>/<code>set</code>.</p>\n"
      ],
      "followUp": "<p>Memoize một hàm <strong>không thuần</strong> (VD trả về <code>Date.now()</code> hoặc đọc biến toàn cục) thì sai ở đâu? Vì sao memoize chỉ an toàn với pure function?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "let calls = 0; const sq = memoize((n) => { calls++; return n * n; }); return [sq(4), sq(4), sq(5), calls];",
        "label": "gọi lại cùng tham số không tính lại",
        "expected": [
         16,
         16,
         25,
         2
        ]
       },
       {
        "code": "let calls = 0; const add = memoize((a, b) => { calls++; return a + b; }); return [add(1, 23), add(12, 3), add(1, 23), calls];",
        "label": "phân biệt (1, 23) và (12, 3)",
        "expected": [
         24,
         15,
         24,
         2
        ]
       },
       {
        "code": "let calls = 0; const g = memoize((s) => { calls++; return s.toUpperCase(); }); g(\"a\"); g(\"a\"); g(\"b\"); return calls;",
        "label": "tham số chuỗi",
        "expected": 2
       }
      ]
     }
    ]
   },
   {
    "id": "classes",
    "title": "Class và this",
    "html": "<p>Bạn sẽ cần <code>class</code> để cài đặt cấu trúc dữ liệu (Stack, Queue, LinkedList, Heap, Trie...) — và nhiều bài phỏng vấn yêu cầu &quot;thiết kế một class&quot; (LRU Cache, MinStack).</p>\n<h2>Cú pháp class</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">class Rectangle {\n  constructor(width, height) {   // chạy khi gọi new Rectangle(...)\n    this.width = width;          // this = object đang được tạo\n    this.height = height;\n  }\n\n  area() {                       // phương thức dùng chung cho mọi instance\n    return this.width * this.height;\n  }\n\n  get perimeter() {              // getter: gọi như thuộc tính, không có ()\n    return 2 * (this.width + this.height);\n  }\n\n  static square(side) {          // static: gọi trên class, không trên instance\n    return new Rectangle(side, side);\n  }\n}\n\nconst r = new Rectangle(3, 4);\nconsole.log(r.area(), r.perimeter);\nconsole.log(Rectangle.square(5).area());</code></pre>\n<h2>Kế thừa: <code>extends</code> và <code>super</code></h2>\n<pre class=\"code\" data-run><code class=\"language-js\">class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return this.name + &quot; phát ra âm thanh&quot;;\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);                // BẮT BUỘC gọi trước khi dùng this\n    this.breed = breed;\n  }\n  speak() {                     // ghi đè (override)\n    return super.speak() + &quot;: Gâu gâu!&quot;;\n  }\n}\n\nconst d = new Dog(&quot;Lu&quot;, &quot;Corgi&quot;);\nconsole.log(d.speak());\nconsole.log(d instanceof Dog, d instanceof Animal);</code></pre>\n<h2>Thuộc tính private <code>#</code></h2>\n<pre class=\"code\" data-run><code class=\"language-js\">class BankAccount {\n  #balance = 0;                 // chỉ truy cập được bên trong class\n\n  deposit(amount) {\n    if (amount &lt;= 0) throw new Error(&quot;Số tiền phải dương&quot;);\n    this.#balance += amount;\n    return this.#balance;\n  }\n  get balance() {\n    return this.#balance;\n  }\n}\n\nconst acc = new BankAccount();\nacc.deposit(100);\nconsole.log(acc.balance);       // 100\nconsole.log(acc.balance = 999, acc.balance); // getter không có setter → gán không có tác dụng</code></pre>\n<h2><code>this</code> — phụ thuộc vào <strong>cách gọi</strong></h2>\n<p><code>this</code> trong hàm thường được quyết định lúc <strong>gọi</strong>, không phải lúc viết:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const obj = {\n  name: &quot;obj&quot;,\n  regular() { return this &amp;&amp; this.name; },\n  arrow: () =&gt; typeof this,      // arrow function không có this riêng\n};\n\nconsole.log(obj.regular());       // &quot;obj&quot; — gọi qua obj. → this = obj\nconst detached = obj.regular;\nconsole.log(detached());          // undefined — mất this khi tách hàm ra\nconsole.log(obj.regular.call({ name: &quot;khác&quot; })); // ép this bằng call\nconst bound = obj.regular.bind(obj);\nconsole.log(bound());             // &quot;obj&quot; — bind cố định this</code></pre>\n<p>Bốn luật (theo độ ưu tiên): <code>new</code> → <code>call</code>/<code>apply</code>/<code>bind</code> → gọi qua object (<code>obj.f()</code>) → gọi trơn (<code>f()</code>: <code>undefined</code> trong strict mode / class). Arrow function <strong>lấy <code>this</code> của scope bao ngoài</strong>, nên hay dùng làm callback trong class.</p>\n<h2>Prototype — class thực chất là gì</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">class A { hi() { return &quot;hi&quot;; } }\nconst a = new A();\nconsole.log(typeof A);                                   // &quot;function&quot;\nconsole.log(Object.getPrototypeOf(a) === A.prototype);   // true\nconsole.log(a.hasOwnProperty(&quot;hi&quot;));                     // false — hi nằm trên prototype, dùng chung</code></pre>\n<p><code>class</code> chỉ là cú pháp đẹp hơn cho cơ chế <strong>prototype</strong> có từ đầu của JS: phương thức nằm trên <code>A.prototype</code>, mọi instance dùng chung qua &quot;chuỗi prototype&quot;.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao phương thức được đặt trên prototype mà không copy vào từng object? Tính bộ nhớ với 1 triệu instance.</li><li>Kế thừa sâu nhiều tầng (Animal → Mammal → Dog → Corgi) hay bị khuyên tránh — &quot;favor composition over inheritance&quot;. Tại sao?</li></ul>\n",
    "source": "content/01-basics/10-classes.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "bank-account",
      "title": "Tài khoản ngân hàng",
      "difficulty": "easy",
      "prompt": "<p>Viết class <code>BankAccount</code>:</p>\n<ul><li><code>constructor(owner, balance = 0)</code></li><li><code>deposit(amount)</code>: cộng tiền, trả về số dư mới. Nếu <code>amount &lt;= 0</code> → <code>throw new Error(&quot;Invalid amount&quot;)</code></li><li><code>withdraw(amount)</code>: trừ tiền, trả về số dư mới. Nếu <code>amount &lt;= 0</code> → <code>throw new Error(&quot;Invalid amount&quot;)</code>; nếu không đủ tiền → <code>throw new Error(&quot;Insufficient funds&quot;)</code></li><li>getter <code>balance</code> trả về số dư</li><li><code>owner</code> là thuộc tính công khai</li></ul>\n",
      "fn": null,
      "starter": "class BankAccount {\n  constructor(owner, balance = 0) {\n\n  }\n}\n",
      "solution": "class BankAccount {\n  #balance;\n\n  constructor(owner, balance = 0) {\n    this.owner = owner;\n    this.#balance = balance;\n  }\n\n  deposit(amount) {\n    if (amount <= 0) throw new Error(\"Invalid amount\");\n    this.#balance += amount;\n    return this.#balance;\n  }\n\n  withdraw(amount) {\n    if (amount <= 0) throw new Error(\"Invalid amount\");\n    if (amount > this.#balance) throw new Error(\"Insufficient funds\");\n    this.#balance -= amount;\n    return this.#balance;\n  }\n\n  get balance() {\n    return this.#balance;\n  }\n}\n",
      "explain": "",
      "hints": [
       "<p>Lưu số dư trong <code>this.#balance</code> (private) và viết <code>get balance() { return this.#balance; }</code>.</p>\n",
       "<p>Kiểm tra điều kiện lỗi <strong>trước</strong> khi thay đổi số dư.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const a = new BankAccount(\"An\", 100); return [a.owner, a.balance, a.deposit(50), a.withdraw(30), a.balance];",
        "label": "gửi 50, rút 30",
        "expected": [
         "An",
         100,
         150,
         120,
         120
        ]
       },
       {
        "code": "const a = new BankAccount(\"Binh\"); return a.balance;",
        "label": "số dư mặc định",
        "expected": 0
       },
       {
        "code": "const a = new BankAccount(\"Chi\", 10); try { a.withdraw(20); return \"không ném lỗi\"; } catch (e) { return [e.message, a.balance]; }",
        "label": "rút quá số dư",
        "expected": [
         "Insufficient funds",
         10
        ]
       },
       {
        "code": "const a = new BankAccount(\"Dung\", 10); try { a.deposit(-5); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "gửi số âm",
        "expected": "Invalid amount"
       },
       {
        "code": "const a = new BankAccount(\"E\", 10); try { a.withdraw(0); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "rút 0",
        "expected": "Invalid amount"
       }
      ]
     },
     {
      "id": "shapes-inheritance",
      "title": "Kế thừa hình học",
      "difficulty": "easy",
      "prompt": "<p>Viết class <code>Shape</code> có phương thức <code>describe()</code> trả về chuỗi <code>&quot;&lt;name&gt; có diện tích &lt;area&gt;&quot;</code>, trong đó <code>name</code> và <code>area()</code> do lớp con cung cấp.</p>\n<p>Viết hai lớp con:</p>\n<ul><li><code>Rect extends Shape</code> với <code>constructor(w, h)</code>, <code>name</code> là <code>&quot;Rect&quot;</code></li><li><code>Square extends Rect</code> với <code>constructor(side)</code>, <code>name</code> là <code>&quot;Square&quot;</code></li></ul>\n<p><code>new Square(3).describe()</code> → <code>&quot;Square có diện tích 9&quot;</code></p>\n",
      "fn": null,
      "starter": "class Shape {\n  describe() {\n    return this.name + \" có diện tích \" + this.area();\n  }\n}\n\n// viết Rect và Square\n",
      "solution": "class Shape {\n  describe() {\n    return this.name + \" có diện tích \" + this.area();\n  }\n}\n\nclass Rect extends Shape {\n  constructor(w, h) {\n    super();\n    this.w = w;\n    this.h = h;\n    this.name = \"Rect\";\n  }\n  area() {\n    return this.w * this.h;\n  }\n}\n\nclass Square extends Rect {\n  constructor(side) {\n    super(side, side);\n    this.name = \"Square\";\n  }\n}\n",
      "explain": "",
      "hints": [
       "<p>Trong constructor của lớp con phải gọi <code>super(...)</code> trước khi dùng <code>this</code>.</p>\n",
       "<p><code>Square</code> chỉ cần gọi <code>super(side, side)</code> rồi đổi <code>this.name</code> — <code>area()</code> được thừa kế từ <code>Rect</code>.</p>\n"
      ],
      "followUp": "<p>Bài toán kinh điển &quot;Square có nên kế thừa Rectangle không?&quot; (vi phạm nguyên lý Liskov): nếu <code>Rect</code> có <code>setWidth(w)</code>, chuyện gì xảy ra với <code>Square</code>?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return new Rect(2, 5).describe();",
        "label": "new Rect(2, 5).describe()",
        "expected": "Rect có diện tích 10"
       },
       {
        "code": "return new Square(3).describe();",
        "label": "new Square(3).describe()",
        "expected": "Square có diện tích 9"
       },
       {
        "code": "const s = new Square(2); return [s instanceof Rect, s instanceof Shape];",
        "label": "Square là Rect và là Shape",
        "expected": [
         true,
         true
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "errors-async",
    "title": "Xử lý lỗi và bất đồng bộ",
    "html": "<h2>try / catch / finally và throw</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function parseAge(text) {\n  const n = Number(text);\n  if (!Number.isInteger(n) || n &lt; 0) {\n    throw new RangeError(&quot;Tuổi không hợp lệ: &quot; + text);\n  }\n  return n;\n}\n\nfor (const input of [&quot;20&quot;, &quot;abc&quot;, &quot;-5&quot;]) {\n  try {\n    console.log(&quot;OK:&quot;, parseAge(input));\n  } catch (err) {\n    console.log(err.name, &quot;-&quot;, err.message);\n  } finally {\n    console.log(&quot;  (finally luôn chạy)&quot;);\n  }\n}</code></pre>\n<p>Chỉ <code>catch</code> lỗi bạn <strong>biết cách xử lý</strong>. Nuốt lỗi bằng <code>catch {}</code> rỗng là cách nhanh nhất để giấu bug.</p>\n<h2>Bất đồng bộ: JS chạy một luồng</h2>\n<p>JS chỉ có <strong>một luồng</strong> thực thi. Việc tốn thời gian (gọi mạng, đọc file, hẹn giờ) được giao cho môi trường, rồi <strong>callback</strong> được đưa vào hàng đợi để chạy sau khi code hiện tại xong.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(&quot;1. bắt đầu&quot;);\nsetTimeout(() =&gt; console.log(&quot;4. setTimeout (macrotask)&quot;), 0);\nPromise.resolve().then(() =&gt; console.log(&quot;3. Promise.then (microtask)&quot;));\nconsole.log(&quot;2. kết thúc code đồng bộ&quot;);</code></pre>\n<p>Thứ tự: <strong>code đồng bộ</strong> → <strong>microtask</strong> (Promise) → <strong>macrotask</strong> (setTimeout). Đây là câu hỏi phỏng vấn &quot;event loop&quot; rất hay gặp.</p>\n<h2>Promise</h2>\n<p>Promise đại diện cho một giá trị <strong>sẽ có trong tương lai</strong>: đang chờ (pending) → thành công (fulfilled) hoặc thất bại (rejected).</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function sleep(ms) {\n  return new Promise((resolve) =&gt; setTimeout(resolve, ms));\n}\n\nfunction fetchUser(id) {\n  return new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; {\n      if (id &gt; 0) resolve({ id, name: &quot;User &quot; + id });\n      else reject(new Error(&quot;id không hợp lệ&quot;));\n    }, 50);\n  });\n}\n\nfetchUser(1)\n  .then((u) =&gt; console.log(&quot;then:&quot;, u.name))\n  .catch((e) =&gt; console.log(&quot;catch:&quot;, e.message));\n\nfetchUser(-1)\n  .then((u) =&gt; console.log(&quot;không chạy tới đây&quot;))\n  .catch((e) =&gt; console.log(&quot;catch:&quot;, e.message));</code></pre>\n<h2>async / await — viết code bất đồng bộ như đồng bộ</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const sleep = (ms) =&gt; new Promise((r) =&gt; setTimeout(r, ms));\n\nasync function main() {\n  console.log(&quot;chờ 100ms...&quot;);\n  await sleep(100);                       // tạm dừng hàm này, KHÔNG chặn cả chương trình\n  console.log(&quot;xong!&quot;);\n\n  try {\n    await Promise.reject(new Error(&quot;lỗi bất đồng bộ&quot;));\n  } catch (e) {\n    console.log(&quot;bắt được:&quot;, e.message);  // try/catch dùng được với await\n  }\n  return 42;\n}\n\nmain().then((v) =&gt; console.log(&quot;main trả về&quot;, v));</code></pre>\n<p>Hàm <code>async</code> <strong>luôn trả về Promise</strong>.</p>\n<h2>Chạy song song: Promise.all</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const sleep = (ms, v) =&gt; new Promise((r) =&gt; setTimeout(() =&gt; r(v), ms));\n\nasync function sequential() {\n  const t = Date.now();\n  await sleep(100); await sleep(100); await sleep(100);\n  return Date.now() - t;\n}\nasync function parallel() {\n  const t = Date.now();\n  await Promise.all([sleep(100), sleep(100), sleep(100)]);\n  return Date.now() - t;\n}\n\n(async () =&gt; {\n  console.log(&quot;tuần tự  ~&quot;, await sequential(), &quot;ms&quot;);\n  console.log(&quot;song song ~&quot;, await parallel(), &quot;ms&quot;);\n})();</code></pre>\n<p>Các anh em: <code>Promise.allSettled</code> (chờ hết, không dừng khi có lỗi), <code>Promise.race</code> (cái nào xong trước), <code>Promise.any</code> (cái nào thành công trước).</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao JS chọn mô hình một luồng + event loop thay vì đa luồng như Java? Được gì (không lo race condition trên biến) và mất gì (tính toán nặng chặn cả UI)?</li><li><code>await</code> trong vòng <code>for</code> vs <code>Promise.all</code>: khi nào <strong>bắt buộc</strong> phải tuần tự? (Gợi ý: request sau cần kết quả request trước, hoặc API giới hạn tốc độ.)</li></ul>\n",
    "source": "content/01-basics/11-errors-async.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "safe-json",
      "title": "Parse JSON an toàn",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>safeParse(text, fallback)</code> trả về kết quả <code>JSON.parse(text)</code>; nếu chuỗi không hợp lệ thì <strong>không ném lỗi</strong> mà trả về <code>fallback</code>.</p>\n",
      "fn": "safeParse",
      "starter": "function safeParse(text, fallback) {\n  return JSON.parse(text);\n}\n",
      "solution": "function safeParse(text, fallback) {\n  try {\n    return JSON.parse(text);\n  } catch {\n    return fallback;\n  }\n}\n",
      "explain": "",
      "hints": [
       "<p>Bọc trong <code>try { ... } catch (e) { return fallback; }</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "{\"a\":1}",
         null
        ],
        "expected": {
         "a": 1
        }
       },
       {
        "args": [
         "[1,2,3]",
         []
        ],
        "expected": [
         1,
         2,
         3
        ]
       },
       {
        "args": [
         "{bad json}",
         null
        ],
        "expected": null
       },
       {
        "args": [
         "",
         "mặc định"
        ],
        "expected": "mặc định"
       }
      ]
     },
     {
      "id": "event-loop-order",
      "title": "Đoán thứ tự event loop",
      "difficulty": "medium",
      "prompt": "<p>Không chạy thử, hãy đoán thứ tự các dòng được in ra của đoạn code sau, rồi viết <code>predictOrder()</code> trả về <strong>mảng các chữ cái</strong> theo đúng thứ tự in:</p>\n<pre class=\"code\"><code class=\"language-js\">console.log(&quot;A&quot;);\nsetTimeout(() =&gt; console.log(&quot;B&quot;), 0);\nPromise.resolve().then(() =&gt; console.log(&quot;C&quot;));\n(async () =&gt; {\n  console.log(&quot;D&quot;);\n  await null;\n  console.log(&quot;E&quot;);\n})();\nqueueMicrotask(() =&gt; console.log(&quot;F&quot;));\nconsole.log(&quot;G&quot;);</code></pre>\n<p>Sau khi trả lời, dán đoạn code vào Playground để kiểm chứng.</p>\n",
      "fn": "predictOrder",
      "starter": "function predictOrder() {\n  return [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\"];\n}\n",
      "solution": "function predictOrder() {\n  return [\"A\", \"D\", \"G\", \"C\", \"E\", \"F\", \"B\"];\n}\n",
      "explain": "<p>Đồng bộ: A, D (thân async chạy đồng bộ đến <code>await</code>), G. Microtask theo thứ tự đăng ký: C (then), E (phần sau await), F (queueMicrotask). Macrotask: B.</p>\n",
      "hints": [
       "<p>Code đồng bộ chạy trước hết — kể cả phần <strong>trước <code>await</code></strong> trong hàm async.</p>\n",
       "<p>Phần sau <code>await</code> là một microtask, xếp hàng theo thứ tự được đăng ký cùng với <code>.then</code> và <code>queueMicrotask</code>.</p>\n",
       "<p>setTimeout là macrotask — chạy sau khi toàn bộ microtask đã xong.</p>\n"
      ],
      "followUp": "<p>Nếu một microtask lại tạo thêm microtask mới liên tục (VD đệ quy <code>Promise.resolve().then(loop)</code>), setTimeout có bao giờ được chạy không? Hậu quả với giao diện web là gì?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [],
        "expected": [
         "A",
         "D",
         "G",
         "C",
         "E",
         "F",
         "B"
        ]
       }
      ]
     },
     {
      "id": "sleep-promise",
      "title": "Viết hàm sleep",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>sleep(ms, value)</code> trả về một <strong>Promise</strong> resolve với <code>value</code> sau <code>ms</code> mili-giây.</p>\n<pre class=\"code\"><code class=\"language-js\">await sleep(100, &quot;xong&quot;); // sau ~100ms trả về &quot;xong&quot;</code></pre>\n",
      "fn": "sleep",
      "starter": "function sleep(ms, value) {\n\n}\n",
      "solution": "function sleep(ms, value) {\n  return new Promise((resolve) => setTimeout(() => resolve(value), ms));\n}\n",
      "explain": "",
      "hints": [
       "<p><code>return new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(value), ms));</code></p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const p = sleep(10, \"x\"); return p instanceof Promise;",
        "label": "trả về Promise",
        "expected": true
       },
       {
        "code": "return await sleep(20, \"xong\");",
        "label": "await sleep(20, \"xong\")",
        "expected": "xong"
       },
       {
        "code": "const t = Date.now(); await sleep(80); return Date.now() - t >= 70;",
        "label": "thật sự chờ ~80ms",
        "expected": true
       }
      ]
     },
     {
      "id": "promise-all",
      "title": "Tự cài đặt Promise.all",
      "difficulty": "hard",
      "prompt": "<p>Câu phỏng vấn frontend kinh điển: tự viết <code>promiseAll(items)</code> hoạt động như <code>Promise.all</code>:</p>\n<ul><li>Trả về Promise resolve với <strong>mảng kết quả theo đúng thứ tự</strong> đầu vào (không phải thứ tự hoàn thành).</li><li>Phần tử không phải Promise được coi như giá trị đã có sẵn.</li><li>Nếu <strong>bất kỳ</strong> Promise nào reject → Promise trả về reject ngay với lỗi đó.</li><li>Mảng rỗng → resolve <code>[]</code>.</li></ul>\n<p>Không dùng <code>Promise.all</code>/<code>allSettled</code>/<code>any</code>/<code>race</code>.</p>\n",
      "fn": "promiseAll",
      "starter": "function promiseAll(items) {\n  return new Promise((resolve, reject) => {\n\n  });\n}\n",
      "solution": "function promiseAll(items) {\n  return new Promise((resolve, reject) => {\n    const results = new Array(items.length);\n    let remaining = items.length;\n    if (remaining === 0) {\n      resolve(results);\n      return;\n    }\n    items.forEach((item, i) => {\n      Promise.resolve(item).then((value) => {\n        results[i] = value;\n        remaining--;\n        if (remaining === 0) resolve(results);\n      }, reject);\n    });\n  });\n}\n",
      "explain": "<p>Điểm mấu chốt: (1) ghi vào <code>results[i]</code> chứ không <code>push</code> (thứ tự hoàn thành khác thứ tự đầu vào), (2) đếm <code>remaining</code> thay vì kiểm tra <code>results.length</code> (mảng có lỗ), (3) xử lý mảng rỗng riêng.</p>\n",
      "hints": [
       "<p>Dùng <code>Promise.resolve(item)</code> để biến mọi phần tử thành Promise.</p>\n",
       "<p>Lưu kết quả vào <code>results[i]</code> (đúng vị trí), đếm số Promise còn lại; về 0 thì <code>resolve(results)</code>.</p>\n",
       "<p>Truyền <code>reject</code> làm tham số thứ hai của <code>.then</code> — Promise chỉ settle một lần nên các reject sau bị bỏ qua.</p>\n"
      ],
      "followUp": "<p>Viết tiếp <code>promiseAllSettled</code> và một hàm chạy các task với <strong>giới hạn đồng thời</strong> (concurrency limit = 3). Tại sao giới hạn đồng thời quan trọng khi gọi API thật?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const d = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms)); return await promiseAll([d(30, \"a\"), d(10, \"b\"), d(20, \"c\")]);",
        "label": "giữ thứ tự đầu vào dù hoàn thành khác thứ tự",
        "expected": [
         "a",
         "b",
         "c"
        ]
       },
       {
        "code": "return await promiseAll([1, Promise.resolve(2), 3]);",
        "label": "trộn giá trị thường và Promise",
        "expected": [
         1,
         2,
         3
        ]
       },
       {
        "code": "return await promiseAll([]);",
        "label": "mảng rỗng",
        "expected": []
       },
       {
        "code": "try { await promiseAll([Promise.resolve(1), Promise.reject(new Error(\"boom\")), new Promise(() => {})]); return \"không reject\"; } catch (e) { return e.message; }",
        "label": "reject ngay khi có lỗi (kể cả khi có Promise treo mãi)",
        "expected": "boom"
       },
       {
        "code": "const p = promiseAll([1]); return p instanceof Promise;",
        "label": "trả về Promise",
        "expected": true
       }
      ]
     }
    ]
   },
   {
    "id": "map-set",
    "title": "Map và Set",
    "html": "<p><code>Map</code> và <code>Set</code> là hai cấu trúc <strong>hash</strong> có sẵn của JS: thêm, xoá, tra cứu trung bình <strong>O(1)</strong>. Đây là vũ khí chính để biến lời giải O(n²) thành O(n).</p>\n<h2>Set — tập hợp không trùng lặp</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const s = new Set([1, 2, 2, 3, 3, 3]);\nconsole.log(s, s.size);         // Set {1,2,3}  3\ns.add(4);\ns.delete(1);\nconsole.log(s.has(2), s.has(1)); // true false — O(1)\n\nconst unique = [...new Set([3, 1, 3, 2, 1])]; // khử trùng lặp, giữ thứ tự xuất hiện\nconsole.log(unique);\n\nfor (const v of s) console.log(v);</code></pre>\n<blockquote><p>So sánh: <code>arr.includes(x)</code> là <strong>O(n)</strong>, <code>set.has(x)</code> là <strong>O(1)</strong>. Trong vòng lặp n lần: O(n²) so với O(n). Với n = 10^5, đó là khác biệt giữa 10 tỉ và 100 nghìn bước.</p>\n</blockquote>\n<h2>Map — từ điển key → value</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const m = new Map();\nm.set(&quot;an&quot;, 8);\nm.set(&quot;binh&quot;, 6);\nm.set(42, &quot;key là số&quot;);\nm.set(true, &quot;key là boolean&quot;);\nconsole.log(m.get(&quot;an&quot;), m.get(42), m.size);\nconsole.log(m.has(&quot;chi&quot;), m.get(&quot;chi&quot;)); // false undefined\n\nm.set(&quot;an&quot;, m.get(&quot;an&quot;) + 1);            // cập nhật\nfor (const [key, value] of m) console.log(key, &quot;→&quot;, value);\nconsole.log([...m.keys()], [...m.values()]);</code></pre>\n<h2>Đếm tần suất với Map</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function countWords(words) {\n  const freq = new Map();\n  for (const w of words) {\n    freq.set(w, (freq.get(w) || 0) + 1);\n  }\n  return freq;\n}\nconsole.log(countWords([&quot;a&quot;, &quot;b&quot;, &quot;a&quot;, &quot;c&quot;, &quot;a&quot;]));</code></pre>\n<h2>Map hay Object?</h2>\n<table><thead><tr><th></th><th><code>Map</code></th><th>Object <code>{}</code></th></tr></thead>\n<tbody>\n<tr><td>Kiểu của key</td><td><strong>Bất kỳ</strong> (số, object, boolean...)</td><td>chỉ chuỗi / symbol (số bị đổi thành chuỗi)</td></tr>\n<tr><td>Thứ tự duyệt</td><td>đúng thứ tự thêm vào</td><td>key dạng số nguyên được xếp trước, tăng dần</td></tr>\n<tr><td>Số phần tử</td><td><code>map.size</code> O(1)</td><td><code>Object.keys(o).length</code> O(n)</td></tr>\n<tr><td>Key &quot;nguy hiểm&quot;</td><td>không có</td><td><code>&quot;__proto__&quot;</code>, <code>&quot;constructor&quot;</code> có thể gây lỗi</td></tr>\n<tr><td>Chuyển sang JSON</td><td>phải tự chuyển</td><td><code>JSON.stringify</code> trực tiếp</td></tr>\n<tr><td>Thêm/xoá liên tục</td><td>tối ưu cho việc này</td><td>chậm hơn khi xoá nhiều</td></tr>\n</tbody></table>\n<pre class=\"code\" data-run><code class=\"language-js\">const o = {};\no[1] = &quot;a&quot;;\nconsole.log(Object.keys(o));       // [&quot;1&quot;] — key bị đổi thành chuỗi\nconst m = new Map([[1, &quot;a&quot;]]);\nconsole.log(m.has(1), m.has(&quot;1&quot;)); // true false\n\nconst objKey = { id: 7 };\nconst visited = new Map([[objKey, true]]);\nconsole.log(visited.get(objKey));  // object làm key được (so theo tham chiếu)</code></pre>\n<p><strong>Khuyến nghị cho coding test:</strong> dùng <code>Map</code>/<code>Set</code> khi đếm và tra cứu. Dùng object khi cần dữ liệu có cấu trúc cố định (như <code>{ name, age }</code>) hoặc trả kết quả dạng object.</p>\n<h2>Bẫy: key là mảng/object</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const seen = new Set();\nseen.add([1, 2]);\nconsole.log(seen.has([1, 2]));     // false — hai mảng khác tham chiếu!\n\nconst seen2 = new Set();\nseen2.add([1, 2].join(&quot;,&quot;));       // chuyển thành chuỗi làm key\nconsole.log(seen2.has(&quot;1,2&quot;));     // true</code></pre>\n<p>Hay gặp khi lưu toạ độ <code>(row, col)</code> đã đi qua trong bài lưới (grid): dùng key <code>row + &quot;,&quot; + col</code> hoặc <code>row * cols + col</code>.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>&quot;Hash map là O(1)&quot; — O(1) <strong>trung bình</strong>. Trường hợp xấu nhất là bao nhiêu và khi nào xảy ra?</li><li>Tại sao key <code>row * cols + col</code> thường nhanh hơn <code>row + &quot;,&quot; + col</code>? Khi nào nó sai?</li><li><code>WeakMap</code> khác <code>Map</code> thế nào, và tại sao nó hữu ích để gắn dữ liệu vào DOM node mà không gây memory leak?</li></ul>\n",
    "source": "content/01-basics/12-map-set.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "unique-in-order",
      "title": "Khử trùng lặp giữ thứ tự",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>uniqueInOrder(arr)</code> trả về mảng các giá trị không trùng lặp, <strong>giữ thứ tự xuất hiện lần đầu</strong>. Bộ test có mảng 800.000 phần tử — <code>includes</code> trong vòng lặp sẽ quá chậm.</p>\n",
      "fn": "uniqueInOrder",
      "starter": "function uniqueInOrder(arr) {\n  const result = [];\n  for (const x of arr) {\n    if (!result.includes(x)) result.push(x);\n  }\n  return result;\n}\n",
      "solution": "function uniqueInOrder(arr) {\n  return [...new Set(arr)];\n}\n",
      "explain": "",
      "hints": [
       "<p>Code có sẵn đúng nhưng O(n²). Chạy test để thấy test ẩn bị quá thời gian.</p>\n",
       "<p><code>Set</code> giữ thứ tự thêm vào: <code>[...new Set(arr)]</code>.</p>\n"
      ],
      "followUp": "<p>Code ban đầu chạy đúng với input nhỏ nhưng timeout với input lớn. Trong coding test thật, làm sao bạn biết trước khi nộp rằng O(n²) sẽ không qua? (Gợi ý: đọc ràng buộc n trong đề.)</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          3,
          1,
          3,
          2,
          1
         ]
        ],
        "expected": [
         3,
         1,
         2
        ]
       },
       {
        "args": [
         [
          "a",
          "b",
          "a"
         ]
        ],
        "expected": [
         "a",
         "b"
        ]
       },
       {
        "args": [
         []
        ],
        "expected": []
       },
       {
        "gen": "return [Array.from({ length: 800000 }, (_, i) => i % 600000)];",
        "check": "return Array.isArray(result) && result.length === 600000 && result[0] === 0 && result[599999] === 599999;",
        "label": "n = 800.000 phần tử (600.000 giá trị khác nhau) — cần O(n)",
        "expectedText": "mảng 600.000 phần tử [0, 1, ..., 599999]"
       }
      ]
     },
     {
      "id": "array-intersection",
      "title": "Giao của hai mảng",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>intersection(a, b)</code> trả về các giá trị <strong>khác nhau</strong> xuất hiện ở cả hai mảng, theo thứ tự xuất hiện trong <code>a</code>. Yêu cầu O(n + m).</p>\n",
      "fn": "intersection",
      "starter": "function intersection(a, b) {\n\n}\n",
      "solution": "function intersection(a, b) {\n  const inB = new Set(b);\n  const added = new Set();\n  const result = [];\n  for (const x of a) {\n    if (inB.has(x) && !added.has(x)) {\n      added.add(x);\n      result.push(x);\n    }\n  }\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Đưa <code>b</code> vào một <code>Set</code> để tra cứu O(1).</p>\n",
       "<p>Cần thêm một <code>Set</code> nữa để không thêm trùng giá trị đã có trong kết quả.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          2,
          1
         ],
         [
          2,
          2
         ]
        ],
        "expected": [
         2
        ]
       },
       {
        "args": [
         [
          4,
          9,
          5
         ],
         [
          9,
          4,
          9,
          8,
          4
         ]
        ],
        "expected": [
         4,
         9
        ]
       },
       {
        "args": [
         [
          1,
          2
         ],
         [
          3,
          4
         ]
        ],
        "expected": []
       },
       {
        "args": [
         [],
         [
          1
         ]
        ],
        "expected": []
       }
      ]
     },
     {
      "id": "first-unique-char",
      "title": "Ký tự không lặp đầu tiên",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>firstUniqChar(s)</code> trả về <strong>chỉ số</strong> của ký tự đầu tiên chỉ xuất hiện đúng một lần trong <code>s</code>. Không có thì trả về <code>-1</code>.</p>\n<p><code>firstUniqChar(&quot;leetcode&quot;)</code> → <code>0</code>, <code>firstUniqChar(&quot;loveleetcode&quot;)</code> → <code>2</code></p>\n",
      "fn": "firstUniqChar",
      "starter": "function firstUniqChar(s) {\n\n}\n",
      "solution": "function firstUniqChar(s) {\n  const freq = new Map();\n  for (const ch of s) freq.set(ch, (freq.get(ch) || 0) + 1);\n  for (let i = 0; i < s.length; i++) {\n    if (freq.get(s[i]) === 1) return i;\n  }\n  return -1;\n}\n",
      "explain": "",
      "hints": [
       "<p>Hai lần duyệt: lần 1 đếm tần suất, lần 2 tìm chỉ số đầu tiên có tần suất 1.</p>\n",
       "<p>Hai lần duyệt O(n) vẫn là O(n). &quot;Một lần duyệt&quot; không phải lúc nào cũng cần thiết.</p>\n"
      ],
      "followUp": "<p>Nếu chuỗi đến dạng <strong>stream</strong> (từng ký tự một, không lưu lại được toàn bộ) và mỗi lúc phải trả lời &quot;ký tự không lặp đầu tiên hiện tại là gì?&quot;, bạn cần cấu trúc dữ liệu gì?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "leetcode"
        ],
        "expected": 0
       },
       {
        "args": [
         "loveleetcode"
        ],
        "expected": 2
       },
       {
        "args": [
         "aabb"
        ],
        "expected": -1
       },
       {
        "args": [
         ""
        ],
        "expected": -1
       },
       {
        "args": [
         "z"
        ],
        "expected": 0
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "coding-test",
  "title": "Bộ công cụ coding test",
  "desc": "<p>Đọc input đúng định dạng, các bẫy cú pháp JS làm trượt test ẩn, và cách đọc ràng buộc đề bài để chọn thuật toán đủ nhanh.</p>\n",
  "lessons": [
   {
    "id": "ct-input-output",
    "title": "Đọc input và in output",
    "html": "<p>Có hai kiểu đề coding test bạn sẽ gặp:</p>\n<table><thead><tr><th>Kiểu</th><th>Nền tảng hay gặp</th><th>Bạn viết gì</th></tr></thead>\n<tbody>\n<tr><td><strong>Viết hàm</strong></td><td>LeetCode, CodeSignal, phần lớn vòng phỏng vấn</td><td>Một hàm nhận tham số, <code>return</code> kết quả</td></tr>\n<tr><td><strong>Đọc stdin / in stdout</strong></td><td>HackerRank, Codeforces, AtCoder, nhiều bài test tuyển dụng</td><td>Cả chương trình: tự đọc input dạng chữ, tự in kết quả</td></tr>\n</tbody></table>\n<p>Kiểu thứ hai hay làm người mới mất điểm <strong>không phải vì thuật toán</strong> mà vì đọc input sai.</p>\n<h2>Đọc stdin trong Node.js</h2>\n<p>Trên nền tảng chạy Node, mẫu an toàn và nhanh nhất là đọc <strong>toàn bộ</strong> input một lần:</p>\n<pre class=\"code\"><code class=\"language-js\">const input = require(&quot;fs&quot;).readFileSync(0, &quot;utf8&quot;); // 0 = stdin\nconst lines = input.trim().split(&quot;\\n&quot;);\n\nconst n = Number(lines[0]);\nconst nums = lines[1].split(&quot; &quot;).map(Number);\n\n// ... giải ...\nconsole.log(result);</code></pre>\n<p>Một số nền tảng (HackerRank) cho sẵn khung dùng <code>process.stdin.on(&quot;data&quot;)</code>; chỉ cần viết phần xử lý trong hàm <code>main</code>.</p>\n<blockquote><p><strong>Tại sao đọc hết một lần?</strong> Đọc từng dòng bằng <code>readline</code> là bất đồng bộ, dễ viết sai thứ tự, và chậm hơn với input hàng trăm nghìn dòng. <code>readFileSync(0)</code> đơn giản và nhanh.</p>\n</blockquote>\n<h2>Tách chuỗi input — các bẫy thường gặp</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">// Giả lập nội dung stdin\nconst input = &quot;3\\n1 2  3\\r\\n\\n&quot;;\n\nconsole.log(JSON.stringify(input.split(&quot;\\n&quot;)));                // dòng rỗng cuối + \\r!\nconsole.log(JSON.stringify(input.trim().split(/\\r?\\n/)));      // an toàn hơn\nconsole.log(&quot;1 2  3&quot;.split(&quot; &quot;));                              // nhiều dấu cách → phần tử &quot;&quot;\nconsole.log(&quot;1 2  3&quot;.trim().split(/\\s+/).map(Number));         // an toàn</code></pre>\n<p>Mẫu &quot;đọc mọi số trong input&quot; — bỏ qua hoàn toàn chuyện xuống dòng:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const input = &quot;2 3\\n1 2 3\\n4 5 6\\n&quot;;\nconst data = input.split(/\\s+/).filter(Boolean).map(Number);\nlet pos = 0;\nconst next = () =&gt; data[pos++];\n\nconst rows = next(), cols = next();\nconst grid = [];\nfor (let r = 0; r &lt; rows; r++) {\n  const row = [];\n  for (let c = 0; c &lt; cols; c++) row.push(next());\n  grid.push(row);\n}\nconsole.log(grid);</code></pre>\n<h2>In output</h2>\n<ul><li>In <strong>đúng định dạng</strong> đề yêu cầu: thừa một dấu cách hay dòng trống có thể bị chấm sai.</li><li>In nhiều dòng: gom vào mảng rồi <code>console.log(lines.join(&quot;\\n&quot;))</code> <strong>một lần</strong> — gọi <code>console.log</code> 10^5 lần rất chậm.</li></ul>\n<pre class=\"code\" data-run><code class=\"language-js\">const results = [3, 1, 4];\nconsole.log(results.join(&quot; &quot;));   // &quot;3 1 4&quot; trên một dòng\nconsole.log(results.join(&quot;\\n&quot;));  // mỗi số một dòng\nconsole.log((2 / 3).toFixed(2));  // &quot;0.67&quot; — làm tròn số thập phân khi đề yêu cầu</code></pre>\n<h2>Luyện tập theo kiểu &quot;stdin&quot;</h2>\n<p>Các bài tập dưới đây mô phỏng kiểu đề đọc stdin: hàm <code>solve(input)</code> nhận <strong>toàn bộ input dạng chuỗi</strong> và trả về <strong>toàn bộ output dạng chuỗi</strong>. Khi làm bài thật, bạn chỉ cần thêm dòng đọc stdin và <code>console.log(solve(input))</code>.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tách logic vào hàm <code>solve(input) → output</code> thay vì đọc/in rải rác: lợi ích khi tự test với nhiều input mẫu là gì?</li><li>Tại sao gọi <code>console.log</code> 100.000 lần chậm hơn nhiều so với gọi một lần với chuỗi lớn? (Gợi ý: mỗi lần là một thao tác I/O.)</li></ul>\n",
    "source": "content/02-coding-test/01-input-output.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "io-sum-max",
      "title": "Tổng và max",
      "difficulty": "easy",
      "prompt": "<p><strong>Input:</strong> dòng 1 là số <code>n</code>. Dòng 2 là <code>n</code> số nguyên cách nhau bởi dấu cách (có thể có dấu cách thừa).</p>\n<p><strong>Output:</strong> một dòng gồm tổng và giá trị lớn nhất, cách nhau một dấu cách.</p>\n<p>Viết <code>solve(input)</code> nhận chuỗi input, trả về chuỗi output.</p>\n",
      "fn": "solve",
      "starter": "function solve(input) {\n  const lines = input.split(\"\\n\");\n\n}\n",
      "solution": "function solve(input) {\n  const lines = input.trim().split(/\\r?\\n/);\n  const n = Number(lines[0]);\n  const nums = lines[1].trim().split(/\\s+/).map(Number).slice(0, n);\n  let sum = 0;\n  let max = -Infinity;\n  for (const x of nums) {\n    sum += x;\n    if (x > max) max = x;\n  }\n  return sum + \" \" + max;\n}\n",
      "explain": "",
      "hints": [
       "<p>Dùng <code>input.trim().split(/\\r?\\n/)</code> để tách dòng an toàn.</p>\n",
       "<p>Tách số: <code>line.trim().split(/\\s+/).map(Number)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "3\n1 2 3\n"
        ],
        "expected": "6 3"
       },
       {
        "args": [
         "4\n-1  -5 -2   -3"
        ],
        "expected": "-11 -1"
       },
       {
        "args": [
         "1\n42"
        ],
        "expected": "42 42"
       },
       {
        "args": [
         "2\r\n10 20\r\n"
        ],
        "expected": "30 20",
        "label": "xuống dòng kiểu Windows"
       }
      ]
     },
     {
      "id": "io-grid",
      "title": "Đếm ô trong lưới",
      "difficulty": "easy",
      "prompt": "<p><strong>Input:</strong> dòng đầu là <code>R C</code>. Tiếp theo là <code>R</code> dòng, mỗi dòng là chuỗi <code>C</code> ký tự gồm <code>.</code> (trống) và <code>#</code> (tường).</p>\n<p><strong>Output:</strong> dòng 1 là số ô <code>#</code>. Dòng 2 là chỉ số (bắt đầu từ 0) của <strong>hàng có nhiều <code>#</code> nhất</strong> (nếu bằng nhau lấy hàng nhỏ nhất).</p>\n",
      "fn": "solve",
      "starter": "function solve(input) {\n\n}\n",
      "solution": "function solve(input) {\n  const lines = input.trim().split(/\\r?\\n/);\n  const [R] = lines[0].trim().split(/\\s+/).map(Number);\n  let total = 0;\n  let bestRow = 0;\n  let bestCount = -1;\n  for (let r = 0; r < R; r++) {\n    let count = 0;\n    for (const ch of lines[1 + r].trim()) if (ch === \"#\") count++;\n    total += count;\n    if (count > bestCount) {\n      bestCount = count;\n      bestRow = r;\n    }\n  }\n  return total + \"\\n\" + bestRow;\n}\n",
      "explain": "",
      "hints": [
       "<p>Đọc <code>R</code> từ dòng đầu; hàng thứ r nằm ở <code>lines[1 + r]</code>.</p>\n",
       "<p>Output hai dòng: <code>total + &quot;\\n&quot; + bestRow</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "2 3\n.#.\n###\n"
        ],
        "expected": "4\n1"
       },
       {
        "args": [
         "3 2\n##\n..\n##"
        ],
        "expected": "4\n0"
       },
       {
        "args": [
         "1 4\n...."
        ],
        "expected": "0\n0"
       }
      ]
     },
     {
      "id": "io-queries",
      "title": "Xử lý nhiều truy vấn",
      "difficulty": "medium",
      "prompt": "<p><strong>Input:</strong> dòng 1 là <code>Q</code> (số truy vấn). Mỗi dòng sau là một truy vấn:</p>\n<ul><li><code>add x</code>: thêm số <code>x</code> vào tập hợp</li><li><code>remove x</code>: xoá <code>x</code> khỏi tập (nếu có)</li><li><code>has x</code>: in <code>YES</code> nếu <code>x</code> có trong tập, ngược lại <code>NO</code></li><li><code>size</code>: in số phần tử của tập</li></ul>\n<p><strong>Output:</strong> kết quả của các truy vấn <code>has</code> và <code>size</code>, mỗi kết quả một dòng. Bộ test ẩn có 200.000 truy vấn.</p>\n",
      "fn": "solve",
      "starter": "function solve(input) {\n\n}\n",
      "solution": "function solve(input) {\n  const lines = input.trim().split(/\\r?\\n/);\n  const q = Number(lines[0]);\n  const set = new Set();\n  const out = [];\n  for (let i = 1; i <= q; i++) {\n    const [cmd, arg] = lines[i].trim().split(/\\s+/);\n    const x = Number(arg);\n    if (cmd === \"add\") set.add(x);\n    else if (cmd === \"remove\") set.delete(x);\n    else if (cmd === \"has\") out.push(set.has(x) ? \"YES\" : \"NO\");\n    else if (cmd === \"size\") out.push(String(set.size));\n  }\n  return out.join(\"\\n\");\n}\n",
      "explain": "",
      "hints": [
       "<p>Dùng <code>Set</code> cho các thao tác O(1).</p>\n",
       "<p>Gom kết quả vào mảng <code>out</code> rồi <code>out.join(&quot;\\n&quot;)</code> một lần ở cuối.</p>\n",
       "<p>Cẩn thận: số <code>&quot;5&quot;</code> (chuỗi) và <code>5</code> (số) là hai key khác nhau trong <code>Set</code> — đổi sang số hết, hoặc giữ chuỗi hết.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "6\nadd 5\nadd 7\nhas 5\nremove 5\nhas 5\nsize"
        ],
        "expected": "YES\nNO\n1"
       },
       {
        "args": [
         "3\nadd 1\nadd 1\nsize"
        ],
        "expected": "1"
       },
       {
        "args": [
         "2\nhas 3\nremove 3"
        ],
        "expected": "NO"
       },
       {
        "gen": "const lines = [\"200000\"]; for (let i = 0; i < 100000; i++) lines.push(\"add \" + i); for (let i = 0; i < 99999; i++) lines.push(\"has \" + (i * 2)); lines.push(\"size\"); return [lines.join(\"\\n\")];",
        "check": "const out = result.split(\"\\n\"); return out.length === 100000 && out[0] === \"YES\" && out[50000] === \"NO\" && out[99999] === \"100000\";",
        "label": "200.000 truy vấn",
        "expectedText": "100.000 dòng, dòng cuối \"100000\""
       }
      ]
     }
    ]
   },
   {
    "id": "ct-pitfalls",
    "title": "Bẫy JS trong coding test (cheat sheet)",
    "html": "<p>Những lỗi dưới đây <strong>chạy đúng với ví dụ mẫu</strong> nhưng trượt test ẩn. Hãy đọc kỹ từng mục và bấm chạy thử.</p>\n<h2>1. <code>sort()</code> không có comparator</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log([5, 25, 100, 1].sort());                 // [1, 100, 25, 5] ⚠️\nconsole.log([5, 25, 100, 1].sort((a, b) =&gt; a - b));  // [1, 5, 25, 100]</code></pre>\n<h2>2. <code>Math.max(...arr)</code> với mảng lớn</h2>\n<p>Spread biến mỗi phần tử thành một tham số hàm; mảng ~10^5 – 10^6 phần tử sẽ vượt giới hạn stack.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const big = Array.from({ length: 1_000_000 }, (_, i) =&gt; i);\ntry {\n  console.log(Math.max(...big));\n} catch (e) {\n  console.log(&quot;Lỗi:&quot;, e.name, &quot;-&quot;, e.message);\n}\nlet max = -Infinity;\nfor (const x of big) if (x &gt; max) max = x;\nconsole.log(&quot;Vòng lặp:&quot;, max);</code></pre>\n<h2>3. Mảng 2 chiều với <code>fill</code></h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const wrong = new Array(2).fill([]);            // hai hàng là CÙNG một mảng\nwrong[0].push(1);\nconsole.log(JSON.stringify(wrong));             // [[1],[1]]\nconst right = Array.from({ length: 2 }, () =&gt; []);\nright[0].push(1);\nconsole.log(JSON.stringify(right));             // [[1],[]]</code></pre>\n<h2>4. Chia lấy nguyên và số âm</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">console.log(7 / 2, Math.floor(7 / 2), Math.trunc(-7 / 2), Math.floor(-7 / 2)); // 3.5 3 -3 -4\nconsole.log(~~(7 / 2), (7 / 2) | 0);  // 3 3 — nhanh, nhưng SAI khi vượt 2^31\nconsole.log((3e9 / 1) | 0);            // -1294967296 ⚠️\nconsole.log(-7 % 3, ((-7 % 3) + 3) % 3); // -1 2 — modulo luôn dương</code></pre>\n<h2>5. Số lớn: vượt <code>2^53</code> và modulo 10^9+7</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const MOD = 1_000_000_007;\nconst a = 999_999_999, b = 999_999_999;\nconsole.log(a * b);                       // 999999998000000000 — đã mất chính xác\nconsole.log((a * b) % MOD);               // SAI\nconsole.log(Number((BigInt(a) * BigInt(b)) % BigInt(MOD))); // ĐÚNG</code></pre>\n<p>Khi đề yêu cầu &quot;modulo 10^9 + 7&quot; và có <strong>phép nhân</strong> hai số cỡ 10^9: tích lên tới 10^18 &gt; 2^53 ≈ 9·10^15. Dùng <code>BigInt</code> cho phép nhân, hoặc kỹ thuật nhân tách nhỏ. Phép <strong>cộng</strong> thì an toàn (2·10^9 vẫn nhỏ).</p>\n<h2>6. <code>shift()</code> trong vòng lặp → O(n²)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const N = 20_000;\nlet q = Array.from({ length: N }, (_, i) =&gt; i);\nlet t = Date.now();\nwhile (q.length) q.shift();\nconsole.log(&quot;shift():&quot;, Date.now() - t, &quot;ms&quot;);\n\nq = Array.from({ length: N }, (_, i) =&gt; i);\nt = Date.now();\nlet head = 0;\nwhile (head &lt; q.length) head++;            // &quot;xoá&quot; bằng cách tăng con trỏ\nconsole.log(&quot;con trỏ head:&quot;, Date.now() - t, &quot;ms&quot;);</code></pre>\n<p>Đo trên Node 22: <code>shift()</code> hết mảng 30.000 phần tử mất ~1,2 giây, 100.000 phần tử mất <strong>~15 giây</strong> — trong khi con trỏ <code>head</code> gần như 0 ms. V8 chỉ tối ưu <code>shift()</code> cho mảng nhỏ, nên đừng trông vào nó: dùng con trỏ <code>head</code> là cách chắc chắn O(1).</p>\n<h2>7. Ghép chuỗi trong vòng lặp</h2>\n<p>Dùng mảng + <code>join</code> khi xây chuỗi lớn từng phần — luôn O(n) tổng cộng, không phụ thuộc tối ưu của engine.</p>\n<h2>8. <code>for...in</code> với mảng, <code>==</code>, và truthy</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">for (const i in [10, 20]) console.log(typeof i, i + 1);  // &quot;string&quot; &quot;01&quot; &quot;11&quot; ⚠️\nconst idx = [5, 6].indexOf(5);\nif (idx) console.log(&quot;tìm thấy&quot;); else console.log(&quot;tưởng là không tìm thấy (idx = 0)!&quot;);</code></pre>\n<h2>9. Sao chép mảng/object khi đệ quy (backtracking)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const result = [];\nconst path = [];\nfor (const x of [1, 2]) {\n  path.push(x);\n  result.push(path);        // ⚠️ đẩy THAM CHIẾU — sau này path đổi thì result cũng đổi\n}\nconsole.log(JSON.stringify(result));\nconst fixed = [];\nconst p2 = [];\nfor (const x of [1, 2]) {\n  p2.push(x);\n  fixed.push([...p2]);      // đẩy BẢN SAO\n}\nconsole.log(JSON.stringify(fixed));</code></pre>\n<h2>10. JS không có sẵn...</h2>\n<table><thead><tr><th>Cần</th><th>Python/Java/C++ có</th><th>JS: dùng gì</th></tr></thead>\n<tbody>\n<tr><td>Priority queue / heap</td><td><code>heapq</code>, <code>PriorityQueue</code></td><td><strong>Tự viết</strong> (bài Heap ở chặng DSA) — nên thuộc lòng</td></tr>\n<tr><td>Deque</td><td><code>collections.deque</code></td><td>mảng + con trỏ, hoặc tự viết</td></tr>\n<tr><td>Sorted set / TreeMap</td><td><code>TreeMap</code>, <code>std::set</code></td><td>sort + binary search, hoặc tránh</td></tr>\n<tr><td>Counter</td><td><code>collections.Counter</code></td><td><code>Map</code> + <code>(m.get(k) || 0) + 1</code></td></tr>\n<tr><td>Số nguyên lớn</td><td><code>int</code> (Python)</td><td><code>BigInt</code></td></tr>\n</tbody></table>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Mục nào trong danh sách trên bạn <strong>đã từng</strong> mắc? Viết lại nó ra giấy — đây là cheat sheet riêng của bạn trước mỗi buổi thi.</li><li>Tại sao JS không có priority queue trong thư viện chuẩn, trong khi gần như mọi ngôn ngữ khác đều có? (Gợi ý: JS ban đầu được thiết kế cho việc gì?)</li></ul>\n",
    "source": "content/02-coding-test/02-pitfalls.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "max-huge",
      "title": "Max của mảng khổng lồ",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>arrayMax(nums)</code> trả về phần tử lớn nhất (mảng khác rỗng). Test ẩn có mảng <strong>1.000.000</strong> phần tử.</p>\n",
      "fn": "arrayMax",
      "starter": "function arrayMax(nums) {\n  return Math.max(...nums);\n}\n",
      "solution": "function arrayMax(nums) {\n  let max = -Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] > max) max = nums[i];\n  }\n  return max;\n}\n",
      "explain": "",
      "hints": [
       "<p>Chạy test để thấy lỗi với mảng lớn. Thay bằng vòng lặp.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          3,
          9,
          2
         ]
        ],
        "expected": 9
       },
       {
        "args": [
         [
          -5,
          -2,
          -9
         ]
        ],
        "expected": -2
       },
       {
        "gen": "return [Array.from({ length: 1000000 }, (_, i) => (i * 7919) % 1000003)];",
        "label": "1.000.000 phần tử",
        "expected": 1000002
       }
      ]
     },
     {
      "id": "mod-pow",
      "title": "Luỹ thừa modulo",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>modPow(base, exp)</code> trả về <code>base^exp mod (10^9 + 7)</code> dưới dạng <strong>number</strong>. <code>0 &lt;= base &lt; 10^9+7</code>, <code>0 &lt;= exp &lt;= 10^18</code> (exp được truyền vào dạng <strong>chuỗi</strong> vì quá lớn).</p>\n<p>Cần thuật toán <strong>O(log exp)</strong> (luỹ thừa nhanh) và cẩn thận với tràn số khi nhân.</p>\n",
      "fn": "modPow",
      "starter": "function modPow(base, exp) {\n  const MOD = 1000000007;\n  let result = 1;\n  for (let i = 0; i < Number(exp); i++) {\n    result = (result * base) % MOD;\n  }\n  return result;\n}\n",
      "solution": "function modPow(base, exp) {\n  const MOD = 1000000007n;\n  let b = BigInt(base) % MOD;\n  let e = BigInt(exp);\n  let result = 1n;\n  while (e > 0n) {\n    if (e & 1n) result = (result * b) % MOD;\n    b = (b * b) % MOD;\n    e >>= 1n;\n  }\n  return Number(result);\n}\n",
      "explain": "<p>Luỹ thừa nhanh (binary exponentiation) chỉ cần ~60 vòng với exp = 10^18. Với <code>number</code>, tích hai số &lt; 10^9+7 lên tới ~10^18 — vượt 2^53 nên mất chính xác; BigInt giải quyết triệt để (chậm hơn number vài lần nhưng vẫn rất nhanh ở đây).</p>\n",
      "hints": [
       "<p>Code có sẵn có <strong>hai</strong> vấn đề: chậm (O(exp)) và <code>result * base</code> có thể vượt 2^53.</p>\n",
       "<p>Luỹ thừa nhanh: a^e = (a^(e/2))² nếu e chẵn, = a · a^(e−1) nếu e lẻ. Duyệt các bit của e.</p>\n",
       "<p>Dùng BigInt cho mọi phép tính: <code>1000000007n</code>, <code>BigInt(exp)</code>, <code>e &amp; 1n</code>, <code>e &gt;&gt;= 1n</code>. Cuối cùng <code>Number(result)</code>.</p>\n"
      ],
      "followUp": "<p>BigInt chậm hơn number. Nếu phải thực hiện 10^7 phép nhân modulo, bạn có cách nào giữ <code>number</code> mà vẫn đúng? (Tìm hiểu: tách số thành phần cao/thấp 16 bit, hoặc <code>Math.imul</code>-style.)</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         2,
         "10"
        ],
        "expected": 1024
       },
       {
        "args": [
         3,
         "0"
        ],
        "expected": 1
       },
       {
        "args": [
         999999999,
         "2"
        ],
        "expected": 64
       },
       {
        "args": [
         2,
         "1000000006"
        ],
        "expected": 1
       },
       {
        "args": [
         123456789,
         "1000000000000000000"
        ],
        "expected": 228100152,
        "hidden": true,
        "label": "exp = 10^18"
       }
      ]
     },
     {
      "id": "big-factorial",
      "title": "Giai thừa số lớn",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>factorial(n)</code> trả về <code>n!</code> dưới dạng <strong>chuỗi</strong> chữ số chính xác (0 ≤ n ≤ 100). <code>25!</code> đã vượt xa <code>Number.MAX_SAFE_INTEGER</code>.</p>\n",
      "fn": "factorial",
      "starter": "function factorial(n) {\n  let result = 1;\n  for (let i = 2; i <= n; i++) result *= i;\n  return String(result);\n}\n",
      "solution": "function factorial(n) {\n  let result = 1n;\n  for (let i = 2n; i <= BigInt(n); i++) result *= i;\n  return result.toString();\n}\n",
      "explain": "",
      "hints": [
       "<p>Dùng BigInt: <code>let result = 1n;</code> và nhân với <code>BigInt(i)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         0
        ],
        "expected": "1"
       },
       {
        "args": [
         5
        ],
        "expected": "120"
       },
       {
        "args": [
         20
        ],
        "expected": "2432902008176640000"
       },
       {
        "args": [
         25
        ],
        "expected": "15511210043330985984000000"
       },
       {
        "args": [
         30
        ],
        "expected": "265252859812191058636308480000000"
       }
      ]
     },
     {
      "id": "safe-modulo",
      "title": "Chỉ số vòng tròn",
      "difficulty": "easy",
      "prompt": "<p>Cho mảng <code>arr</code> coi như <strong>vòng tròn</strong>. Viết <code>circularGet(arr, i)</code> trả về phần tử ở vị trí <code>i</code>, với <code>i</code> có thể <strong>âm</strong> hoặc <strong>lớn hơn độ dài</strong> (<code>-1</code> là phần tử cuối, <code>arr.length</code> quay về phần tử đầu).</p>\n",
      "fn": "circularGet",
      "starter": "function circularGet(arr, i) {\n  return arr[i % arr.length];\n}\n",
      "solution": "function circularGet(arr, i) {\n  const n = arr.length;\n  return arr[((i % n) + n) % n];\n}\n",
      "explain": "",
      "hints": [
       "<p><code>-1 % 5</code> là <code>-1</code> trong JS. Chuẩn hoá: <code>((i % n) + n) % n</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          "a",
          "b",
          "c"
         ],
         1
        ],
        "expected": "b"
       },
       {
        "args": [
         [
          "a",
          "b",
          "c"
         ],
         3
        ],
        "expected": "a"
       },
       {
        "args": [
         [
          "a",
          "b",
          "c"
         ],
         -1
        ],
        "expected": "c"
       },
       {
        "args": [
         [
          "a",
          "b",
          "c"
         ],
         -7
        ],
        "expected": "c"
       },
       {
        "args": [
         [
          "a",
          "b",
          "c"
         ],
         100
        ],
        "expected": "b"
       }
      ]
     }
    ]
   },
   {
    "id": "ct-complexity",
    "title": "Big-O và đọc ràng buộc đề bài",
    "html": "<p>Big-O mô tả <strong>thời gian chạy tăng thế nào khi input tăng</strong>. Nó là ngôn ngữ chung khi phỏng vấn: &quot;lời giải của em O(n log n) thời gian, O(n) bộ nhớ&quot;.</p>\n<h2>Các bậc thường gặp</h2>\n<table><thead><tr><th>Big-O</th><th>Tên</th><th>Ví dụ</th><th>n = 10^5 ≈ số bước</th></tr></thead>\n<tbody>\n<tr><td>O(1)</td><td>hằng số</td><td><code>arr[i]</code>, <code>map.get(k)</code></td><td>1</td></tr>\n<tr><td>O(log n)</td><td>logarit</td><td>tìm kiếm nhị phân</td><td>17</td></tr>\n<tr><td>O(n)</td><td>tuyến tính</td><td>duyệt mảng một lần</td><td>10^5</td></tr>\n<tr><td>O(n log n)</td><td></td><td>sắp xếp</td><td>1,7·10^6</td></tr>\n<tr><td>O(n²)</td><td>bình phương</td><td>hai vòng lồng nhau</td><td>10^10 ❌</td></tr>\n<tr><td>O(2^n)</td><td>mũ</td><td>thử mọi tập con</td><td>❌❌</td></tr>\n<tr><td>O(n!)</td><td>giai thừa</td><td>thử mọi hoán vị</td><td>❌❌❌</td></tr>\n</tbody></table>\n<h2>Đọc ràng buộc → suy ra thuật toán</h2>\n<p>Máy chấm thường chạy được khoảng <strong>10^7 – 10^8 phép tính đơn giản mỗi giây</strong> (JS: thiên về 10^7–10^8). Đề bài cho giới hạn n chính là <strong>gợi ý</strong> độ phức tạp cần đạt:</p>\n<table><thead><tr><th>Ràng buộc n</th><th>Độ phức tạp chấp nhận được</th><th>Thường là</th></tr></thead>\n<tbody>\n<tr><td>n ≤ 10</td><td>O(n!)</td><td>thử mọi hoán vị, backtracking</td></tr>\n<tr><td>n ≤ 20</td><td>O(2^n)</td><td>thử mọi tập con, bitmask</td></tr>\n<tr><td>n ≤ 500</td><td>O(n³)</td><td>DP 3 chiều, Floyd–Warshall</td></tr>\n<tr><td>n ≤ 5.000</td><td>O(n²)</td><td>DP 2 chiều, hai vòng lặp</td></tr>\n<tr><td>n ≤ 10^5 – 10^6</td><td>O(n log n) hoặc O(n)</td><td>sắp xếp, hash map, hai con trỏ, heap</td></tr>\n<tr><td>n ≤ 10^9 trở lên</td><td>O(log n) hoặc O(1)</td><td>tìm kiếm nhị phân, công thức toán</td></tr>\n</tbody></table>\n<blockquote><p><strong>Thói quen quan trọng nhất trong coding test:</strong> đọc ràng buộc <strong>trước</strong> khi nghĩ lời giải. Thấy n ≤ 10^5 thì ngay lập tức loại mọi ý tưởng O(n²).</p>\n</blockquote>\n<h2>Cách tính Big-O</h2>\n<pre class=\"code\"><code class=\"language-js\">function example(arr) {\n  let sum = 0;                         // O(1)\n  for (const x of arr) sum += x;       // O(n)\n  for (const x of arr) {               // O(n) ×\n    for (const y of arr) {             //   O(n) = O(n²)\n      if (x + y === 0) return true;\n    }\n  }\n  return false;\n}\n// Tổng: O(1) + O(n) + O(n²) = O(n²) — giữ bậc lớn nhất, bỏ hằng số</code></pre>\n<ul><li>Vòng lặp <strong>nối tiếp</strong> → cộng: O(n) + O(n) = O(n).</li><li>Vòng lặp <strong>lồng nhau</strong> → nhân: O(n) × O(m) = O(n·m).</li><li>Mỗi bước <strong>chia đôi</strong> bài toán → O(log n).</li><li>Đừng quên chi phí ẩn của hàm có sẵn: <code>includes</code>, <code>indexOf</code>, <code>slice</code>, <code>splice</code>, <code>shift</code>, spread <code>[...]</code>, <code>Object.keys</code> đều là <strong>O(n)</strong>.</li></ul>\n<pre class=\"code\"><code class=\"language-js\">// Trông giống O(n) nhưng thực ra O(n²):\nfor (const x of arr) {\n  if (result.includes(x)) continue; // includes là O(n)\n  result.push(x);\n}</code></pre>\n<h2>Đo thực tế</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function countPairsSlow(nums, target) {\n  let count = 0;\n  for (let i = 0; i &lt; nums.length; i++)\n    for (let j = i + 1; j &lt; nums.length; j++)\n      if (nums[i] + nums[j] === target) count++;\n  return count;\n}\n\nfunction countPairsFast(nums, target) {\n  const seen = new Map();\n  let count = 0;\n  for (const x of nums) {\n    count += seen.get(target - x) || 0;\n    seen.set(x, (seen.get(x) || 0) + 1);\n  }\n  return count;\n}\n\nfor (const n of [1000, 4000, 16000]) {\n  const nums = Array.from({ length: n }, (_, i) =&gt; i % 100);\n  let t = performance.now();\n  const a = countPairsSlow(nums, 50);\n  const slow = performance.now() - t;\n  t = performance.now();\n  const b = countPairsFast(nums, 50);\n  const fast = performance.now() - t;\n  console.log(`n=${n}: O(n²) ${slow.toFixed(1)}ms | O(n) ${fast.toFixed(2)}ms | ${a === b ? &quot;khớp&quot; : &quot;LỆCH&quot;}`);\n}</code></pre>\n<p>Mỗi lần n tăng 4 lần, bản O(n²) chậm đi ~16 lần, bản O(n) chỉ ~4 lần.</p>\n<h2>Độ phức tạp bộ nhớ</h2>\n<p>Cũng tính bằng Big-O: một <code>Map</code> chứa n phần tử là O(n) bộ nhớ; vài biến đếm là O(1). Đệ quy sâu d tầng tốn O(d) bộ nhớ cho call stack. Thường có <strong>trade-off</strong>: tốn thêm bộ nhớ (hash map) để giảm thời gian.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Big-O bỏ qua hằng số. Khi nào một thuật toán O(n log n) lại <strong>chậm hơn</strong> O(n²) trong thực tế? (Gợi ý: n nhỏ — đó là lý do sort thực tế dùng insertion sort cho mảng ngắn.)</li><li>&quot;Hash map O(1)&quot; nhưng thực tế chậm hơn truy cập mảng nhiều lần. Khi nào nên dùng mảng đếm <code>new Array(26)</code> thay cho <code>Map</code>?</li></ul>\n",
    "source": "content/02-coding-test/03-complexity.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "contains-duplicate",
      "title": "Có phần tử trùng không?",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>containsDuplicate(nums)</code> trả về <code>true</code> nếu có giá trị xuất hiện ít nhất hai lần.</p>\n<p>Ràng buộc: <code>1 &lt;= nums.length &lt;= 2·10^5</code>. Hãy đọc ràng buộc và chọn độ phức tạp phù hợp trước khi code.</p>\n",
      "fn": "containsDuplicate",
      "starter": "function containsDuplicate(nums) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] === nums[j]) return true;\n    }\n  }\n  return false;\n}\n",
      "solution": "function containsDuplicate(nums) {\n  const seen = new Set();\n  for (const x of nums) {\n    if (seen.has(x)) return true;\n    seen.add(x);\n  }\n  return false;\n}\n",
      "explain": "<p><code>Set</code>: O(n) thời gian, O(n) bộ nhớ. Sort: O(n log n) thời gian, bộ nhớ ít hơn nhưng làm thay đổi input. Không có lời giải &quot;tốt nhất tuyệt đối&quot; — chỉ có lựa chọn phù hợp ràng buộc.</p>\n",
      "hints": [
       "<p>n = 2·10^5 → O(n²) là 2·10^10 bước, chắc chắn quá thời gian.</p>\n",
       "<p>Dùng <code>Set</code>: gặp lại giá trị đã có trong Set thì return true.</p>\n",
       "<p>Cách khác: sort rồi so sánh các phần tử kề nhau — O(n log n), O(1) bộ nhớ thêm (nếu được sửa input).</p>\n"
      ],
      "followUp": "<p>Người phỏng vấn nói: &quot;bộ nhớ rất hạn chế, không được dùng thêm O(n)&quot;. Bạn chọn cách nào? Nếu thêm &quot;và không được sửa mảng input&quot; thì sao?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          3,
          1
         ]
        ],
        "expected": true
       },
       {
        "args": [
         [
          1,
          2,
          3,
          4
         ]
        ],
        "expected": false
       },
       {
        "args": [
         [
          1
         ]
        ],
        "expected": false
       },
       {
        "args": [
         [
          0,
          0
         ]
        ],
        "expected": true
       },
       {
        "gen": "return [Array.from({ length: 200000 }, (_, i) => i * 3)];",
        "label": "n = 200.000, không có phần tử trùng",
        "expected": false
       },
       {
        "gen": "const a = Array.from({ length: 200000 }, (_, i) => i); a[199999] = 0; return [a];",
        "label": "n = 200.000, cặp trùng nằm ở hai đầu",
        "expected": true
       }
      ]
     },
     {
      "id": "count-pairs",
      "title": "Đếm cặp có tổng bằng k",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>countPairs(nums, k)</code> đếm số cặp chỉ số <code>(i, j)</code> với <code>i &lt; j</code> và <code>nums[i] + nums[j] === k</code>.</p>\n<p>Ràng buộc: <code>n &lt;= 10^5</code>. Kết quả có thể lên tới ~5·10^9 (vẫn an toàn với number).</p>\n",
      "fn": "countPairs",
      "starter": "function countPairs(nums, k) {\n\n}\n",
      "solution": "function countPairs(nums, k) {\n  const seen = new Map();\n  let count = 0;\n  for (const x of nums) {\n    count += seen.get(k - x) || 0;\n    seen.set(x, (seen.get(x) || 0) + 1);\n  }\n  return count;\n}\n",
      "explain": "<p>Mẹo &quot;nhìn về phía trước&quot;: thay vì tìm cặp (i, j) bằng hai vòng lặp, ta đứng ở j và hỏi &quot;có bao nhiêu i &lt; j phù hợp?&quot; — câu trả lời nằm sẵn trong hash map. Mẫu này là nền tảng của Two Sum, Subarray Sum Equals K...</p>\n",
      "hints": [
       "<p>Duyệt từ trái sang phải. Với mỗi <code>x</code>, số cặp mà <code>x</code> là phần tử <strong>thứ hai</strong> = số lần <code>k - x</code> đã xuất hiện <strong>trước đó</strong>.</p>\n",
       "<p>Giữ một <code>Map</code> đếm tần suất các giá trị đã gặp. Cập nhật Map <strong>sau</strong> khi cộng để không ghép <code>x</code> với chính nó.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          5,
          7,
          -1
         ],
         6
        ],
        "expected": 2
       },
       {
        "args": [
         [
          1,
          1,
          1,
          1
         ],
         2
        ],
        "expected": 6
       },
       {
        "args": [
         [
          1,
          2,
          3
         ],
         10
        ],
        "expected": 0
       },
       {
        "args": [
         [
          3
         ],
         6
        ],
        "expected": 0
       },
       {
        "gen": "return [Array.from({ length: 100000 }, () => 5), 10];",
        "label": "n = 100.000 số 5, k = 10",
        "expected": 4999950000
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "dsa",
  "title": "Cấu trúc dữ liệu & giải thuật",
  "desc": "<p>Các &quot;pattern&quot; xuất hiện trong phần lớn câu hỏi phỏng vấn: hash map, hai con trỏ, cửa sổ trượt, stack, linked list, đệ quy, tìm kiếm nhị phân, cây, heap, đồ thị, backtracking, quy hoạch động, tham lam.</p>\n",
  "lessons": [
   {
    "id": "dsa-hashing",
    "title": "Mảng & Hash map",
    "html": "<p><strong>Ý tưởng cốt lõi:</strong> đổi bộ nhớ lấy thời gian. Thay vì tìm kiếm lại từ đầu mỗi lần (O(n)), ghi nhớ những gì đã thấy vào hash map để tra cứu O(1).</p>\n<h2>Khi nào nghĩ đến hash map?</h2>\n<ul><li>Đề hỏi &quot;có tồn tại...&quot;, &quot;đếm số lần...&quot;, &quot;tìm cặp/phần tử bù&quot;, &quot;nhóm theo...&quot;.</li><li>Bạn vừa viết hai vòng <code>for</code> lồng nhau mà vòng trong chỉ để <strong>tìm</strong> một giá trị.</li><li>Cần kiểm tra &quot;đã gặp chưa&quot; (trùng lặp, chu trình).</li></ul>\n<h2>Mẫu 1: tìm phần bù (Two Sum)</h2>\n<p>Với mỗi phần tử <code>x</code>, câu hỏi &quot;có <code>y</code> nào để <code>x + y = target</code> không?&quot; tương đương &quot;<code>target - x</code> đã xuất hiện chưa?&quot;.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function twoSum(nums, target) {\n  const indexOf = new Map(); // giá trị → chỉ số\n  for (let i = 0; i &lt; nums.length; i++) {\n    const need = target - nums[i];\n    if (indexOf.has(need)) return [indexOf.get(need), i];\n    indexOf.set(nums[i], i);\n  }\n  return [];\n}\nconsole.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]\nconsole.log(twoSum([3, 3], 6));         // [0, 1]</code></pre>\n<p>Tại sao <code>set</code> <strong>sau</strong> khi kiểm tra? Để không ghép phần tử với chính nó (<code>[3]</code>, target 6).</p>\n<h2>Mẫu 2: đếm tần suất (frequency map)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = new Map();\n  for (const ch of s) count.set(ch, (count.get(ch) || 0) + 1);\n  for (const ch of t) {\n    if (!count.get(ch)) return false;   // 0 hoặc undefined\n    count.set(ch, count.get(ch) - 1);\n  }\n  return true;\n}\nconsole.log(isAnagram(&quot;listen&quot;, &quot;silent&quot;), isAnagram(&quot;rat&quot;, &quot;car&quot;));</code></pre>\n<h2>Mẫu 3: nhóm bằng &quot;chữ ký&quot; (canonical key)</h2>\n<p>Các phần tử &quot;tương đương&quot; có chung một key → nhóm lại bằng Map. Với anagram, key là chuỗi đã sắp xếp (<code>&quot;eat&quot;</code>, <code>&quot;tea&quot;</code> → <code>&quot;aet&quot;</code>).</p>\n<h2>Mẫu 4: bucket theo tần suất</h2>\n<p>Tần suất của một phần tử không thể vượt quá n → có thể tạo mảng <code>buckets[freq]</code> gồm n + 1 ô và tránh phải sort: O(n) thay vì O(n log n).</p>\n<h2>Bảng so sánh</h2>\n<table><thead><tr><th>Bài</th><th>Brute force</th><th>Với hash map</th></tr></thead>\n<tbody>\n<tr><td>Two Sum</td><td>O(n²)</td><td>O(n) thời gian, O(n) bộ nhớ</td></tr>\n<tr><td>Có trùng lặp</td><td>O(n²)</td><td>O(n)</td></tr>\n<tr><td>Anagram</td><td>sort: O(n log n)</td><td>O(n)</td></tr>\n<tr><td>Top K phổ biến</td><td>sort: O(n log n)</td><td>bucket: O(n)</td></tr>\n</tbody></table>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Two Sum trên mảng <strong>đã sắp xếp</strong> có thể giải O(1) bộ nhớ (bài sau). Vậy với mảng chưa sắp xếp, sort trước rồi dùng hai con trỏ có tốt hơn hash map không? (Gợi ý: đề yêu cầu trả về <strong>chỉ số gốc</strong>.)</li><li>Tại sao key của anagram là chuỗi đã sort (O(k log k)) mà không dùng mảng đếm 26 ký tự (O(k))? Cái nào nhanh hơn khi chuỗi dài, cái nào đơn giản hơn?</li></ul>\n",
    "source": "content/03-dsa/01-hashing.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "two-sum",
      "title": "Two Sum",
      "difficulty": "easy",
      "prompt": "<p>Cho mảng <code>nums</code> và số <code>target</code>, trả về <strong>chỉ số</strong> của hai phần tử có tổng bằng <code>target</code> dưới dạng <code>[i, j]</code> với <code>i &lt; j</code>. Đảm bảo có đúng một đáp án; không dùng một phần tử hai lần.</p>\n<p>Ràng buộc: <code>n &lt;= 2·10^5</code>. (LeetCode 1 — câu phỏng vấn nổi tiếng nhất thế giới.)</p>\n",
      "fn": "twoSum",
      "starter": "function twoSum(nums, target) {\n\n}\n",
      "solution": "function twoSum(nums, target) {\n  const indexOf = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (indexOf.has(need)) return [indexOf.get(need), i];\n    indexOf.set(nums[i], i);\n  }\n  return [];\n}\n",
      "explain": "<p>O(n) thời gian, O(n) bộ nhớ. Đáp án luôn có <code>i &lt; j</code> vì chỉ số trong Map luôn là của phần tử đứng trước.</p>\n",
      "hints": [
       "<p>Brute force O(n²) sẽ không qua test ẩn. Với mỗi <code>nums[i]</code>, bạn cần biết nhanh <code>target - nums[i]</code> đã xuất hiện ở chỉ số nào.</p>\n",
       "<p>Map: giá trị → chỉ số. Kiểm tra trước, rồi mới thêm phần tử hiện tại vào Map.</p>\n"
      ],
      "followUp": "<p>Người phỏng vấn hỏi tiếp: &quot;Nếu mảng có 10^9 phần tử, không vừa bộ nhớ, thì sao?&quot; Bạn sẽ đặt câu hỏi làm rõ nào? (Gợi ý: dữ liệu đã sort chưa, có lưu trên đĩa không, có thể chia nhỏ không.)</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          2,
          7,
          11,
          15
         ],
         9
        ],
        "expected": [
         0,
         1
        ]
       },
       {
        "args": [
         [
          3,
          2,
          4
         ],
         6
        ],
        "expected": [
         1,
         2
        ]
       },
       {
        "args": [
         [
          3,
          3
         ],
         6
        ],
        "expected": [
         0,
         1
        ]
       },
       {
        "args": [
         [
          -1,
          -2,
          -3,
          -4,
          -5
         ],
         -8
        ],
        "expected": [
         2,
         4
        ]
       },
       {
        "gen": "const n = 200000; const a = Array.from({ length: n }, (_, i) => 10 + i * 2); a[n - 2] = 1; a[n - 1] = 4; return [a, 5];",
        "label": "n = 200.000, cặp đáp án ở cuối mảng",
        "expected": [
         199998,
         199999
        ]
       }
      ]
     },
     {
      "id": "valid-anagram",
      "title": "Valid Anagram",
      "difficulty": "easy",
      "prompt": "<p>Hai chuỗi là <strong>anagram</strong> nếu chúng gồm cùng các ký tự với cùng số lần (chỉ khác thứ tự). Viết <code>isAnagram(s, t)</code>. Chuỗi chỉ gồm chữ thường a–z.</p>\n<p>Hãy làm O(n), không sort.</p>\n",
      "fn": "isAnagram",
      "starter": "function isAnagram(s, t) {\n\n}\n",
      "solution": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    count[s.charCodeAt(i) - 97]++;\n    count[t.charCodeAt(i) - 97]--;\n  }\n  return count.every((c) => c === 0);\n}\n",
      "explain": "",
      "hints": [
       "<p>Độ dài khác nhau → false ngay.</p>\n",
       "<p>Mảng đếm 26 ô: tăng theo ký tự của <code>s</code>, giảm theo ký tự của <code>t</code>. Cuối cùng mọi ô phải bằng 0.</p>\n"
      ],
      "followUp": "<p>Nếu chuỗi chứa <strong>Unicode</strong> bất kỳ (tiếng Việt có dấu, emoji) thì mảng 26 ô còn dùng được không? Bạn đổi sang gì, và cần chú ý gì khi duyệt ký tự?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "anagram",
         "nagaram"
        ],
        "expected": true
       },
       {
        "args": [
         "rat",
         "car"
        ],
        "expected": false
       },
       {
        "args": [
         "a",
         "ab"
        ],
        "expected": false
       },
       {
        "args": [
         "",
         ""
        ],
        "expected": true
       },
       {
        "args": [
         "aacc",
         "ccac"
        ],
        "expected": false
       }
      ]
     },
     {
      "id": "group-anagrams",
      "title": "Group Anagrams",
      "difficulty": "medium",
      "prompt": "<p>Nhóm các chuỗi là anagram của nhau. Thứ tự các nhóm và thứ tự trong mỗi nhóm <strong>không quan trọng</strong>.</p>\n<p><code>groupAnagrams([&quot;eat&quot;,&quot;tea&quot;,&quot;tan&quot;,&quot;ate&quot;,&quot;nat&quot;,&quot;bat&quot;])</code> → <code>[[&quot;bat&quot;],[&quot;nat&quot;,&quot;tan&quot;],[&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;]]</code></p>\n",
      "fn": "groupAnagrams",
      "starter": "function groupAnagrams(strs) {\n\n}\n",
      "solution": "function groupAnagrams(strs) {\n  const groups = new Map();\n  for (const s of strs) {\n    const key = s.split(\"\").sort().join(\"\");\n    if (!groups.has(key)) groups.set(key, []);\n    groups.get(key).push(s);\n  }\n  return [...groups.values()];\n}\n",
      "explain": "<p>O(n · k log k) với k là độ dài chuỗi dài nhất. Có thể đạt O(n · k) bằng key là mảng đếm 26 ô nối thành chuỗi (<code>count.join(&quot;#&quot;)</code>).</p>\n",
      "hints": [
       "<p>Hai chuỗi là anagram ⇔ sau khi sort ký tự thì giống nhau. Dùng chuỗi đã sort làm key.</p>\n",
       "<p><code>Map&lt;key, string[]&gt;</code>, cuối cùng <code>return [...groups.values()]</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": "unordered-deep",
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          "eat",
          "tea",
          "tan",
          "ate",
          "nat",
          "bat"
         ]
        ],
        "expected": [
         [
          "bat"
         ],
         [
          "nat",
          "tan"
         ],
         [
          "ate",
          "eat",
          "tea"
         ]
        ]
       },
       {
        "args": [
         [
          ""
         ]
        ],
        "expected": [
         [
          ""
         ]
        ]
       },
       {
        "args": [
         [
          "a"
         ]
        ],
        "expected": [
         [
          "a"
         ]
        ]
       },
       {
        "args": [
         [
          "abc",
          "bca",
          "xyz",
          "cab",
          "zyx",
          "q"
         ]
        ],
        "expected": [
         [
          "abc",
          "bca",
          "cab"
         ],
         [
          "xyz",
          "zyx"
         ],
         [
          "q"
         ]
        ]
       }
      ]
     },
     {
      "id": "top-k-frequent",
      "title": "Top K Frequent Elements",
      "difficulty": "medium",
      "prompt": "<p>Trả về <code>k</code> phần tử xuất hiện nhiều nhất (thứ tự kết quả không quan trọng; đảm bảo đáp án là duy nhất).</p>\n<p><code>topKFrequent([1,1,1,2,2,3], 2)</code> → <code>[1, 2]</code></p>\n<p>Thử thách: làm tốt hơn O(n log n).</p>\n",
      "fn": "topKFrequent",
      "starter": "function topKFrequent(nums, k) {\n\n}\n",
      "solution": "function topKFrequent(nums, k) {\n  const freq = new Map();\n  for (const x of nums) freq.set(x, (freq.get(x) || 0) + 1);\n  const buckets = Array.from({ length: nums.length + 1 }, () => []);\n  for (const [value, f] of freq) buckets[f].push(value);\n  const result = [];\n  for (let f = buckets.length - 1; f >= 0 && result.length < k; f--) {\n    for (const value of buckets[f]) {\n      result.push(value);\n      if (result.length === k) break;\n    }\n  }\n  return result;\n}\n",
      "explain": "<p>Bucket: O(n) thời gian và bộ nhớ. Heap kích thước k: O(n log k) — tốt khi dữ liệu là stream. Sort: O(n log n) — đơn giản nhất. Trong phỏng vấn, nêu cả ba và trade-off.</p>\n",
      "hints": [
       "<p>Bước 1: đếm tần suất bằng Map.</p>\n",
       "<p>Cách dễ: sort các key theo tần suất giảm dần rồi lấy k cái đầu — O(n log n), vẫn qua test.</p>\n",
       "<p>Cách O(n): &quot;bucket sort&quot; — <code>buckets[f]</code> chứa các giá trị có tần suất f. Duyệt f từ n về 1.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": "unordered",
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          1,
          1,
          2,
          2,
          3
         ],
         2
        ],
        "expected": [
         1,
         2
        ]
       },
       {
        "args": [
         [
          1
         ],
         1
        ],
        "expected": [
         1
        ]
       },
       {
        "args": [
         [
          4,
          4,
          5,
          5,
          5,
          6,
          6,
          6,
          6
         ],
         2
        ],
        "expected": [
         5,
         6
        ]
       },
       {
        "args": [
         [
          -1,
          -1,
          2
         ],
         1
        ],
        "expected": [
         -1
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-two-pointers",
    "title": "Hai con trỏ (Two Pointers)",
    "html": "<p>Dùng hai chỉ số di chuyển trên mảng/chuỗi để loại bỏ vòng lặp lồng nhau: từ O(n²) xuống O(n), thường với O(1) bộ nhớ.</p>\n<h2>Kiểu 1: hai đầu tiến vào giữa</h2>\n<p>Dùng khi mảng <strong>đã sắp xếp</strong> hoặc bài có tính đối xứng (palindrome, đảo ngược).</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// Tìm cặp có tổng = target trong mảng ĐÃ SẮP XẾP\nfunction pairSum(sorted, target) {\n  let left = 0, right = sorted.length - 1;\n  while (left &lt; right) {\n    const sum = sorted[left] + sorted[right];\n    if (sum === target) return [left, right];\n    if (sum &lt; target) left++;   // cần tổng lớn hơn → tăng phần tử nhỏ\n    else right--;               // cần tổng nhỏ hơn → giảm phần tử lớn\n  }\n  return null;\n}\nconsole.log(pairSum([1, 3, 4, 6, 8, 11], 10)); // [2, 3] → 4 + 6</code></pre>\n<p><strong>Tại sao đúng?</strong> Khi <code>sum &lt; target</code>, mọi cặp <code>(left, j)</code> với <code>j &lt; right</code> còn nhỏ hơn nữa → <code>left</code> không thể là đáp án → bỏ nó. Mỗi bước loại được một phần tử → tối đa n bước.</p>\n<h2>Kiểu 2: nhanh – chậm (cùng chiều)</h2>\n<p>Con trỏ <code>slow</code> đánh dấu vị trí &quot;ghi&quot;, <code>fast</code> đi đọc. Dùng để lọc/xoá phần tử <strong>in-place</strong>.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// Xoá mọi số 0, giữ thứ tự, in-place; trả về độ dài mới\nfunction removeZeros(arr) {\n  let slow = 0;\n  for (let fast = 0; fast &lt; arr.length; fast++) {\n    if (arr[fast] !== 0) {\n      arr[slow] = arr[fast];\n      slow++;\n    }\n  }\n  return slow;\n}\nconst a = [0, 1, 0, 3, 12];\nconst k = removeZeros(a);\nconsole.log(k, a.slice(0, k));</code></pre>\n<h2>Kiểu 3: hai mảng song song (merge)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function mergeSorted(a, b) {\n  const out = [];\n  let i = 0, j = 0;\n  while (i &lt; a.length &amp;&amp; j &lt; b.length) {\n    out.push(a[i] &lt;= b[j] ? a[i++] : b[j++]);\n  }\n  while (i &lt; a.length) out.push(a[i++]);\n  while (j &lt; b.length) out.push(b[j++]);\n  return out;\n}\nconsole.log(mergeSorted([1, 4, 9], [2, 3, 10, 11]));</code></pre>\n<h2>Nhận diện</h2>\n<ul><li>&quot;Mảng đã sắp xếp&quot;, &quot;tìm cặp/bộ ba&quot;, &quot;in-place&quot;, &quot;O(1) bộ nhớ&quot;, &quot;palindrome&quot;, &quot;gộp hai dãy&quot;.</li><li>Nếu mảng chưa sort nhưng thứ tự không quan trọng: sort trước (O(n log n)) rồi dùng hai con trỏ.</li></ul>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>3Sum: brute force O(n³). Sort + cố định một phần tử + hai con trỏ cho O(n²). Tại sao không xuống được O(n) như Two Sum?</li><li>Container With Most Water: tại sao luôn di chuyển con trỏ ở <strong>cột thấp hơn</strong>? Thử chứng minh di chuyển cột cao hơn không bao giờ cho kết quả tốt hơn.</li></ul>\n",
    "source": "content/03-dsa/02-two-pointers.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "two-sum-sorted",
      "title": "Two Sum II (mảng đã sắp xếp)",
      "difficulty": "easy",
      "prompt": "<p><code>numbers</code> đã sắp xếp <strong>tăng dần</strong>. Trả về <code>[i, j]</code> (chỉ số bắt đầu từ <strong>1</strong>, <code>i &lt; j</code>) sao cho <code>numbers[i] + numbers[j] = target</code>. Đảm bảo có đúng một đáp án.</p>\n<p>Yêu cầu O(1) bộ nhớ thêm.</p>\n",
      "fn": "twoSumSorted",
      "starter": "function twoSumSorted(numbers, target) {\n\n}\n",
      "solution": "function twoSumSorted(numbers, target) {\n  let left = 0;\n  let right = numbers.length - 1;\n  while (left < right) {\n    const sum = numbers[left] + numbers[right];\n    if (sum === target) return [left + 1, right + 1];\n    if (sum < target) left++;\n    else right--;\n  }\n  return [];\n}\n",
      "explain": "",
      "hints": [
       "<p>Hai con trỏ ở hai đầu. Tổng nhỏ quá → <code>left++</code>; lớn quá → <code>right--</code>.</p>\n",
       "<p>Nhớ cộng 1 vào chỉ số khi trả về.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          2,
          7,
          11,
          15
         ],
         9
        ],
        "expected": [
         1,
         2
        ]
       },
       {
        "args": [
         [
          2,
          3,
          4
         ],
         6
        ],
        "expected": [
         1,
         3
        ]
       },
       {
        "args": [
         [
          -1,
          0
         ],
         -1
        ],
        "expected": [
         1,
         2
        ]
       },
       {
        "gen": "const n = 200000; const a = Array.from({ length: n }, (_, i) => 2 * i); a[n - 2] = 2 * (n - 2) + 1; return [a, a[n - 3] + a[n - 2]];",
        "label": "n = 200.000, đáp án gần cuối mảng",
        "expected": [
         199998,
         199999
        ]
       }
      ]
     },
     {
      "id": "remove-duplicates-sorted",
      "title": "Xoá trùng lặp trong mảng đã sắp xếp",
      "difficulty": "easy",
      "prompt": "<p>Cho mảng <code>nums</code> đã sắp xếp tăng dần. Xoá các phần tử trùng <strong>in-place</strong> sao cho mỗi giá trị chỉ còn một lần, giữ thứ tự. Trả về <code>k</code> — số phần tử còn lại; <code>k</code> phần tử đầu của <code>nums</code> phải là kết quả (phần sau không quan trọng).</p>\n<p><code>nums = [0,0,1,1,1,2,2,3,3,4]</code> → trả về <code>5</code>, và <code>nums</code> bắt đầu bằng <code>[0,1,2,3,4]</code>.</p>\n",
      "fn": "removeDuplicates",
      "starter": "function removeDuplicates(nums) {\n\n}\n",
      "solution": "function removeDuplicates(nums) {\n  if (nums.length === 0) return 0;\n  let slow = 1;\n  for (let fast = 1; fast < nums.length; fast++) {\n    if (nums[fast] !== nums[slow - 1]) {\n      nums[slow] = nums[fast];\n      slow++;\n    }\n  }\n  return slow;\n}\n",
      "explain": "",
      "hints": [
       "<p>Con trỏ <code>slow</code> = vị trí ghi tiếp theo. Phần tử đầu luôn được giữ nên <code>slow</code> bắt đầu từ 1.</p>\n",
       "<p><code>fast</code> duyệt từ 1; nếu <code>nums[fast]</code> khác phần tử cuối đã ghi (<code>nums[slow - 1]</code>) thì ghi vào <code>nums[slow]</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const a = [1, 1, 2]; const k = removeDuplicates(a); return [k, a.slice(0, k)];",
        "label": "[1,1,2]",
        "expected": [
         2,
         [
          1,
          2
         ]
        ]
       },
       {
        "code": "const a = [0,0,1,1,1,2,2,3,3,4]; const k = removeDuplicates(a); return [k, a.slice(0, k)];",
        "label": "[0,0,1,1,1,2,2,3,3,4]",
        "expected": [
         5,
         [
          0,
          1,
          2,
          3,
          4
         ]
        ]
       },
       {
        "code": "const a = []; return removeDuplicates(a);",
        "label": "[]",
        "expected": 0
       },
       {
        "code": "const a = [7, 7, 7]; const k = removeDuplicates(a); return [k, a.slice(0, k)];",
        "label": "[7,7,7]",
        "expected": [
         1,
         [
          7
         ]
        ]
       }
      ]
     },
     {
      "id": "container-most-water",
      "title": "Container With Most Water",
      "difficulty": "medium",
      "prompt": "<p><code>height[i]</code> là chiều cao cột thứ i. Chọn hai cột tạo thành bình chứa với trục hoành; lượng nước = <code>(j - i) * min(height[i], height[j])</code>. Trả về lượng nước lớn nhất.</p>\n<p>Ràng buộc <code>n &lt;= 10^5</code> — cần O(n).</p>\n",
      "fn": "maxArea",
      "starter": "function maxArea(height) {\n\n}\n",
      "solution": "function maxArea(height) {\n  let left = 0;\n  let right = height.length - 1;\n  let best = 0;\n  while (left < right) {\n    const h = Math.min(height[left], height[right]);\n    best = Math.max(best, h * (right - left));\n    if (height[left] < height[right]) left++;\n    else right--;\n  }\n  return best;\n}\n",
      "explain": "",
      "hints": [
       "<p>Bắt đầu với hai cột ở hai đầu (chiều rộng lớn nhất).</p>\n",
       "<p>Lượng nước bị giới hạn bởi cột <strong>thấp hơn</strong>. Di chuyển cột cao hơn vào trong chỉ làm hẹp đi mà chiều cao không thể tăng → luôn di chuyển cột thấp hơn.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          8,
          6,
          2,
          5,
          4,
          8,
          3,
          7
         ]
        ],
        "expected": 49
       },
       {
        "args": [
         [
          1,
          1
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         [
          4,
          3,
          2,
          1,
          4
         ]
        ],
        "expected": 16
       },
       {
        "args": [
         [
          1,
          2,
          1
         ]
        ],
        "expected": 2
       },
       {
        "gen": "return [Array.from({ length: 100000 }, (_, i) => (i % 2 ? 1 : 10000))];",
        "label": "n = 100.000",
        "expected": 999980000
       }
      ]
     },
     {
      "id": "three-sum",
      "title": "3Sum",
      "difficulty": "medium",
      "prompt": "<p>Tìm mọi bộ ba <strong>khác nhau</strong> <code>[a, b, c]</code> trong <code>nums</code> (ba chỉ số khác nhau) sao cho <code>a + b + c = 0</code>. Không trả về bộ ba trùng lặp. Thứ tự không quan trọng.</p>\n<p><code>threeSum([-1,0,1,2,-1,-4])</code> → <code>[[-1,-1,2],[-1,0,1]]</code></p>\n<p>Ràng buộc <code>n &lt;= 3000</code> → O(n²) là đủ, O(n³) thì không.</p>\n",
      "fn": "threeSum",
      "starter": "function threeSum(nums) {\n\n}\n",
      "solution": "function threeSum(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const result = [];\n  for (let i = 0; i < a.length - 2; i++) {\n    if (a[i] > 0) break;\n    if (i > 0 && a[i] === a[i - 1]) continue;\n    let left = i + 1;\n    let right = a.length - 1;\n    while (left < right) {\n      const sum = a[i] + a[left] + a[right];\n      if (sum === 0) {\n        result.push([a[i], a[left], a[right]]);\n        left++;\n        right--;\n        while (left < right && a[left] === a[left - 1]) left++;\n        while (left < right && a[right] === a[right + 1]) right--;\n      } else if (sum < 0) {\n        left++;\n      } else {\n        right--;\n      }\n    }\n  }\n  return result;\n}\n",
      "explain": "<p>O(n²) thời gian (sort O(n log n) không đáng kể), O(1) bộ nhớ thêm ngoài kết quả. Phần khó nhất của bài là <strong>khử trùng lặp</strong> đúng — nhiều ứng viên dùng Set chứa chuỗi <code>JSON.stringify</code> cho nhanh, chạy được nhưng tốn bộ nhớ và người phỏng vấn sẽ hỏi cách làm sạch hơn.</p>\n",
      "hints": [
       "<p>Sort mảng. Cố định phần tử thứ nhất <code>a[i]</code>, bài toán còn lại là &quot;Two Sum trên mảng đã sắp xếp&quot; với target <code>-a[i]</code>.</p>\n",
       "<p>Tránh trùng: bỏ qua <code>i</code> nếu <code>a[i] === a[i-1]</code>; sau khi tìm thấy một bộ, dịch <code>left</code>/<code>right</code> qua các giá trị trùng.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": "unordered-deep",
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          -1,
          0,
          1,
          2,
          -1,
          -4
         ]
        ],
        "expected": [
         [
          -1,
          -1,
          2
         ],
         [
          -1,
          0,
          1
         ]
        ]
       },
       {
        "args": [
         [
          0,
          1,
          1
         ]
        ],
        "expected": []
       },
       {
        "args": [
         [
          0,
          0,
          0,
          0
         ]
        ],
        "expected": [
         [
          0,
          0,
          0
         ]
        ]
       },
       {
        "args": [
         [
          -2,
          0,
          1,
          1,
          2
         ]
        ],
        "expected": [
         [
          -2,
          0,
          2
         ],
         [
          -2,
          1,
          1
         ]
        ]
       },
       {
        "gen": "return [Array.from({ length: 3000 }, (_, i) => (i % 2 ? i : -i))];",
        "check": "return Array.isArray(result) && result.every((t) => t.length === 3 && t[0] + t[1] + t[2] === 0) && new Set(result.map((t) => [...t].sort((x, y) => x - y).join(\",\"))).size === result.length;",
        "label": "n = 3000 — cần O(n²)",
        "expectedText": "các bộ ba tổng 0, không trùng"
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-sliding-window",
    "title": "Cửa sổ trượt (Sliding Window)",
    "html": "<p>Dùng cho bài về <strong>đoạn con liên tiếp</strong> (subarray / substring): &quot;đoạn dài nhất / ngắn nhất / tổng lớn nhất thoả điều kiện...&quot;. Thay vì tính lại từng đoạn từ đầu (O(n²) hoặc O(n³)), ta &quot;trượt&quot; một cửa sổ <code>[left, right]</code> và cập nhật <strong>phần thay đổi</strong>.</p>\n<h2>Cửa sổ cố định kích thước k</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">// Tổng lớn nhất của k phần tử liên tiếp\nfunction maxSumK(nums, k) {\n  let windowSum = 0;\n  for (let i = 0; i &lt; k; i++) windowSum += nums[i];\n  let best = windowSum;\n  for (let right = k; right &lt; nums.length; right++) {\n    windowSum += nums[right] - nums[right - k]; // thêm phần tử mới, bỏ phần tử cũ\n    best = Math.max(best, windowSum);\n  }\n  return best;\n}\nconsole.log(maxSumK([2, 1, 5, 1, 3, 2], 3)); // 9 (5 + 1 + 3)</code></pre>\n<p>Mỗi bước trượt chỉ tốn O(1) → tổng O(n) thay vì O(n·k).</p>\n<h2>Cửa sổ co giãn — khuôn mẫu</h2>\n<pre class=\"code\"><code class=\"language-js\">let left = 0;\nfor (let right = 0; right &lt; n; right++) {\n  // 1. đưa phần tử right vào cửa sổ (cập nhật trạng thái)\n  while (/* cửa sổ KHÔNG hợp lệ */) {\n    // 2. bỏ phần tử left ra khỏi cửa sổ, left++\n  }\n  // 3. cửa sổ [left, right] hợp lệ → cập nhật đáp án\n}</code></pre>\n<p><code>right</code> và <code>left</code> mỗi cái chỉ tiến về phía trước, tối đa n lần → <strong>O(n)</strong> dù có <code>while</code> bên trong.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// Chuỗi con dài nhất có tối đa 2 ký tự khác nhau\nfunction longestTwoDistinct(s) {\n  const count = new Map();\n  let left = 0, best = 0;\n  for (let right = 0; right &lt; s.length; right++) {\n    count.set(s[right], (count.get(s[right]) || 0) + 1);\n    while (count.size &gt; 2) {\n      const ch = s[left];\n      count.set(ch, count.get(ch) - 1);\n      if (count.get(ch) === 0) count.delete(ch);\n      left++;\n    }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\nconsole.log(longestTwoDistinct(&quot;eceba&quot;));   // 3 (&quot;ece&quot;)\nconsole.log(longestTwoDistinct(&quot;ccaabbb&quot;)); // 5 (&quot;aabbb&quot;)</code></pre>\n<h2>Nhận diện</h2>\n<ul><li>Từ khoá: &quot;subarray&quot;, &quot;substring&quot;, &quot;liên tiếp&quot;, &quot;dài nhất&quot;, &quot;ngắn nhất&quot;, &quot;tối đa k...&quot;.</li><li>Điều kiện có tính <strong>đơn điệu</strong>: mở rộng cửa sổ chỉ làm &quot;tệ hơn&quot; (hoặc tốt hơn) theo một hướng. Ví dụ: tổng các số <strong>dương</strong> — thêm phần tử thì tổng tăng.</li></ul>\n<blockquote><p><strong>Khi nào cửa sổ trượt KHÔNG dùng được?</strong> Khi mảng có số âm và đề hỏi &quot;tổng bằng k&quot;: thêm phần tử có thể làm tổng giảm, nên không biết khi nào nên co cửa sổ. Lúc đó dùng <strong>prefix sum + hash map</strong> (bài sau).</p>\n</blockquote>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Có <code>while</code> nằm trong <code>for</code>, sao vẫn là O(n)? Hãy lập luận bằng cách đếm tổng số lần <code>left</code> tăng.</li><li>Vì sao bài &quot;đoạn con ngắn nhất có tổng ≥ target&quot; dùng được cửa sổ trượt khi mọi số dương, nhưng hỏng khi có số âm?</li></ul>\n",
    "source": "content/03-dsa/03-sliding-window.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "max-avg-subarray",
      "title": "Trung bình lớn nhất của k phần tử",
      "difficulty": "easy",
      "prompt": "<p>Tìm đoạn con liên tiếp độ dài đúng <code>k</code> có <strong>trung bình lớn nhất</strong>, trả về giá trị trung bình đó. Ràng buộc <code>n &lt;= 10^5</code>.</p>\n",
      "fn": "findMaxAverage",
      "starter": "function findMaxAverage(nums, k) {\n\n}\n",
      "solution": "function findMaxAverage(nums, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum > best) best = sum;\n  }\n  return best / k;\n}\n",
      "explain": "",
      "hints": [
       "<p>Trung bình lớn nhất ⇔ tổng lớn nhất (k cố định). Cửa sổ cố định: thêm <code>nums[i]</code>, bỏ <code>nums[i - k]</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": "float",
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          12,
          -5,
          -6,
          50,
          3
         ],
         4
        ],
        "expected": 12.75
       },
       {
        "args": [
         [
          5
         ],
         1
        ],
        "expected": 5
       },
       {
        "args": [
         [
          -1,
          -2,
          -3
         ],
         2
        ],
        "expected": -1.5
       },
       {
        "gen": "return [Array.from({ length: 100000 }, (_, i) => i % 1000), 50000];",
        "label": "n = 100.000, k = 50.000",
        "expected": 499.5
       }
      ]
     },
     {
      "id": "longest-substring-no-repeat",
      "title": "Chuỗi con dài nhất không lặp ký tự",
      "difficulty": "medium",
      "prompt": "<p>Trả về độ dài chuỗi con <strong>liên tiếp</strong> dài nhất không có ký tự nào lặp lại.</p>\n<p><code>&quot;abcabcbb&quot;</code> → <code>3</code> (<code>&quot;abc&quot;</code>), <code>&quot;pwwkew&quot;</code> → <code>3</code> (<code>&quot;wke&quot;</code>). (LeetCode 3)</p>\n",
      "fn": "lengthOfLongestSubstring",
      "starter": "function lengthOfLongestSubstring(s) {\n\n}\n",
      "solution": "function lengthOfLongestSubstring(s) {\n  const lastSeen = new Map();\n  let left = 0;\n  let best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const ch = s[right];\n    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {\n      left = lastSeen.get(ch) + 1;\n    }\n    lastSeen.set(ch, right);\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
      "explain": "<p>O(n) thời gian, O(số ký tự khác nhau) bộ nhớ. Điều kiện <code>lastSeen.get(ch) &gt;= left</code> rất quan trọng: vị trí cũ nằm <strong>ngoài</strong> cửa sổ thì không được kéo <code>left</code> lùi lại (thử &quot;abba&quot;).</p>\n",
      "hints": [
       "<p>Cửa sổ <code>[left, right]</code> luôn không có ký tự lặp. Thêm <code>s[right]</code>; nếu nó đã có trong cửa sổ thì co <code>left</code> lại.</p>\n",
       "<p>Cách 1: <code>Set</code> + <code>while (set.has(ch)) set.delete(s[left++])</code>.</p>\n",
       "<p>Cách 2 (nhảy thẳng): lưu <code>lastSeen[ch]</code> = vị trí gần nhất; nếu <code>lastSeen[ch] &gt;= left</code> thì <code>left = lastSeen[ch] + 1</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "abcabcbb"
        ],
        "expected": 3
       },
       {
        "args": [
         "bbbbb"
        ],
        "expected": 1
       },
       {
        "args": [
         "pwwkew"
        ],
        "expected": 3
       },
       {
        "args": [
         ""
        ],
        "expected": 0
       },
       {
        "args": [
         "abba"
        ],
        "expected": 2
       },
       {
        "args": [
         " "
        ],
        "expected": 1
       },
       {
        "gen": "const chars = []; for (let i = 0; i < 50000; i++) chars.push(String.fromCharCode(0x100 + i)); return [chars.join(\"\") + chars.join(\"\")];",
        "label": "n = 100.000, 50.000 ký tự khác nhau — vét cạn O(n²) sẽ quá thời gian",
        "expected": 50000
       }
      ]
     },
     {
      "id": "min-subarray-len",
      "title": "Đoạn con ngắn nhất có tổng ≥ target",
      "difficulty": "medium",
      "prompt": "<p>Cho mảng số <strong>nguyên dương</strong> <code>nums</code> và <code>target</code>. Trả về độ dài nhỏ nhất của đoạn con liên tiếp có tổng <strong>≥ target</strong>; không có thì trả về <code>0</code>.</p>\n<p><code>minSubArrayLen(7, [2,3,1,2,4,3])</code> → <code>2</code> (<code>[4,3]</code>)</p>\n",
      "fn": "minSubArrayLen",
      "starter": "function minSubArrayLen(target, nums) {\n\n}\n",
      "solution": "function minSubArrayLen(target, nums) {\n  let left = 0;\n  let sum = 0;\n  let best = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      best = Math.min(best, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
      "explain": "",
      "hints": [
       "<p>Mở rộng <code>right</code> để tăng tổng. Khi tổng đã ≥ target, ghi nhận đáp án rồi co <code>left</code> để thử ngắn hơn.</p>\n",
       "<p>Khởi tạo <code>best = Infinity</code> và đổi thành 0 nếu không tìm thấy.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         7,
         [
          2,
          3,
          1,
          2,
          4,
          3
         ]
        ],
        "expected": 2
       },
       {
        "args": [
         4,
         [
          1,
          4,
          4
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         11,
         [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
         ]
        ],
        "expected": 0
       },
       {
        "args": [
         15,
         [
          1,
          2,
          3,
          4,
          5
         ]
        ],
        "expected": 5
       },
       {
        "gen": "const a = new Array(100000).fill(1); a[99999] = 50000; return [100000, a];",
        "label": "n = 100.000",
        "expected": 50001
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-prefix-sum",
    "title": "Mảng cộng dồn (Prefix Sum)",
    "html": "<p><strong>Prefix sum</strong> <code>prefix[i]</code> = tổng <code>i</code> phần tử đầu tiên. Tính một lần O(n), sau đó tổng bất kỳ đoạn <code>[l, r]</code> chỉ tốn <strong>O(1)</strong>.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const nums = [3, 1, 4, 1, 5, 9, 2];\nconst prefix = [0];                       // prefix[0] = 0: &quot;tổng của 0 phần tử&quot;\nfor (const x of nums) prefix.push(prefix[prefix.length - 1] + x);\nconsole.log(prefix);                      // [0, 3, 4, 8, 9, 14, 23, 25]\n\n// tổng nums[l..r] (gồm cả r) = prefix[r + 1] - prefix[l]\nconst rangeSum = (l, r) =&gt; prefix[r + 1] - prefix[l];\nconsole.log(rangeSum(2, 4));              // 4 + 1 + 5 = 10</code></pre>\n<blockquote><p>Mảng prefix dài <strong>n + 1</strong> với <code>prefix[0] = 0</code> giúp tránh mọi trường hợp đặc biệt khi <code>l = 0</code>. Đây là lựa chọn thiết kế nhỏ mà loại bỏ được cả một lớp bug off-by-one.</p>\n</blockquote>\n<h2>Prefix sum + hash map: &quot;đếm đoạn con có tổng bằng k&quot;</h2>\n<p>Tổng đoạn <code>(j, i]</code> = <code>prefix[i] - prefix[j]</code>. Muốn nó bằng <code>k</code> ⇔ <code>prefix[j] = prefix[i] - k</code>. Vậy khi đứng ở <code>i</code>, số đoạn kết thúc tại <code>i</code> có tổng k = <strong>số lần giá trị <code>prefix[i] - k</code> đã xuất hiện trước đó</strong> — lại là mẫu &quot;tìm phần bù&quot; của Two Sum!</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function subarraySum(nums, k) {\n  const seen = new Map([[0, 1]]); // prefix rỗng = 0 xuất hiện 1 lần\n  let sum = 0, count = 0;\n  for (const x of nums) {\n    sum += x;\n    count += seen.get(sum - k) || 0;\n    seen.set(sum, (seen.get(sum) || 0) + 1);\n  }\n  return count;\n}\nconsole.log(subarraySum([1, 1, 1], 2));      // 2\nconsole.log(subarraySum([3, 4, -7, 3], 0));  // 2 — [3, 4, -7] và [4, -7, 3]</code></pre>\n<p>Cách này đúng cả khi có <strong>số âm</strong> — điều mà cửa sổ trượt không làm được.</p>\n<h2>Biến thể</h2>\n<ul><li><strong>Prefix product</strong> / tích từ hai phía: Product of Array Except Self.</li><li><strong>Prefix 2D</strong>: tổng hình chữ nhật con trong ma trận trong O(1).</li><li><strong>Difference array</strong>: cộng <code>v</code> vào cả đoạn <code>[l, r]</code> trong O(1) (ngược lại của prefix sum) — dùng khi có nhiều thao tác cập nhật đoạn.</li></ul>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Prefix sum đổi O(n) bộ nhớ lấy truy vấn O(1). Nếu mảng <strong>thay đổi liên tục</strong> (cập nhật phần tử giữa các truy vấn) thì prefix sum còn tốt không? (Tìm hiểu: Fenwick tree / Segment tree.)</li><li>Trong <code>subarraySum</code>, tại sao phải khởi tạo <code>seen</code> với <code>[0, 1]</code>? Bỏ đi thì test nào sai?</li></ul>\n",
    "source": "content/03-dsa/04-prefix-sum.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "range-sum-query",
      "title": "Truy vấn tổng đoạn",
      "difficulty": "easy",
      "prompt": "<p>Viết class <code>NumArray</code>:</p>\n<ul><li><code>constructor(nums)</code></li><li><code>sumRange(left, right)</code>: tổng các phần tử từ chỉ số <code>left</code> đến <code>right</code> (gồm cả hai đầu)</li></ul>\n<p>Test ẩn gọi <code>sumRange</code> <strong>100.000 lần</strong> trên mảng 100.000 phần tử — mỗi truy vấn phải O(1).</p>\n",
      "fn": null,
      "starter": "class NumArray {\n  constructor(nums) {\n    this.nums = nums;\n  }\n\n  sumRange(left, right) {\n    let s = 0;\n    for (let i = left; i <= right; i++) s += this.nums[i];\n    return s;\n  }\n}\n",
      "solution": "class NumArray {\n  constructor(nums) {\n    this.prefix = [0];\n    for (const x of nums) this.prefix.push(this.prefix[this.prefix.length - 1] + x);\n  }\n\n  sumRange(left, right) {\n    return this.prefix[right + 1] - this.prefix[left];\n  }\n}\n",
      "explain": "",
      "hints": [
       "<p>Tính sẵn mảng prefix trong constructor; <code>sumRange = prefix[right + 1] - prefix[left]</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const a = new NumArray([-2, 0, 3, -5, 2, -1]); return [a.sumRange(0, 2), a.sumRange(2, 5), a.sumRange(0, 5)];",
        "label": "NumArray([-2,0,3,-5,2,-1])",
        "expected": [
         1,
         -1,
         -3
        ]
       },
       {
        "code": "const a = new NumArray([5]); return a.sumRange(0, 0);",
        "label": "một phần tử",
        "expected": 5
       },
       {
        "hidden": true,
        "code": "const n = 100000; const a = new NumArray(Array.from({ length: n }, (_, i) => i % 7)); let t = 0; for (let q = 0; q < 100000; q++) t += a.sumRange(0, n - 1 - (q % 10)); return t;",
        "label": "100.000 truy vấn trên mảng 100.000 phần tử",
        "expected": 29998200000
       }
      ]
     },
     {
      "id": "subarray-sum-k",
      "title": "Subarray Sum Equals K",
      "difficulty": "medium",
      "prompt": "<p>Đếm số đoạn con liên tiếp (khác rỗng) có tổng <strong>bằng đúng</strong> <code>k</code>. Mảng có thể chứa <strong>số âm</strong>. Ràng buộc <code>n &lt;= 2·10^4</code>... nhưng test ẩn có <code>n = 10^5</code>. (LeetCode 560)</p>\n",
      "fn": "subarraySum",
      "starter": "function subarraySum(nums, k) {\n\n}\n",
      "solution": "function subarraySum(nums, k) {\n  const seen = new Map([[0, 1]]);\n  let sum = 0;\n  let count = 0;\n  for (const x of nums) {\n    sum += x;\n    count += seen.get(sum - k) || 0;\n    seen.set(sum, (seen.get(sum) || 0) + 1);\n  }\n  return count;\n}\n",
      "explain": "",
      "hints": [
       "<p>Có số âm → cửa sổ trượt không dùng được.</p>\n",
       "<p>Tổng đoạn (j, i] = prefix[i] − prefix[j]. Đếm có bao nhiêu prefix trước đó bằng <code>prefix[i] - k</code>.</p>\n",
       "<p>Khởi tạo Map với <code>[0, 1]</code> để tính được các đoạn bắt đầu từ chỉ số 0.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          1,
          1
         ],
         2
        ],
        "expected": 2
       },
       {
        "args": [
         [
          1,
          2,
          3
         ],
         3
        ],
        "expected": 2
       },
       {
        "args": [
         [
          1,
          -1,
          0
         ],
         0
        ],
        "expected": 3
       },
       {
        "args": [
         [
          3,
          4,
          -7,
          3,
          1,
          3,
          1,
          -4,
          -2,
          -2
         ],
         7
        ],
        "expected": 3
       },
       {
        "args": [
         [
          5
         ],
         3
        ],
        "expected": 0
       },
       {
        "gen": "return [Array.from({ length: 100000 }, (_, i) => (i % 2 ? 1 : -1)), 0];",
        "label": "n = 100.000, xen kẽ 1 / -1",
        "expected": 2500000000
       }
      ]
     },
     {
      "id": "product-except-self",
      "title": "Product of Array Except Self",
      "difficulty": "medium",
      "prompt": "<p>Trả về mảng <code>answer</code> với <code>answer[i]</code> = tích mọi phần tử <strong>trừ</strong> <code>nums[i]</code>. <strong>Không dùng phép chia</strong>, O(n) thời gian.</p>\n<p><code>[1,2,3,4]</code> → <code>[24,12,8,6]</code></p>\n",
      "fn": "productExceptSelf",
      "starter": "function productExceptSelf(nums) {\n\n}\n",
      "solution": "function productExceptSelf(nums) {\n  const n = nums.length;\n  const answer = new Array(n).fill(1);\n  let left = 1;\n  for (let i = 0; i < n; i++) {\n    answer[i] = left;\n    left *= nums[i];\n  }\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    answer[i] *= right;\n    right *= nums[i];\n  }\n  return answer;\n}\n",
      "explain": "<p>O(n) thời gian, O(1) bộ nhớ thêm (không tính mảng kết quả). Tại sao đề cấm phép chia? Vì có số 0 — chia cho 0 phải xử lý riêng, và người phỏng vấn muốn xem bạn biết kỹ thuật prefix/suffix.</p>\n",
      "hints": [
       "<p><code>answer[i]</code> = (tích các phần tử bên <strong>trái</strong> i) × (tích các phần tử bên <strong>phải</strong> i).</p>\n",
       "<p>Lượt 1 từ trái sang: ghi tích bên trái vào <code>answer[i]</code>. Lượt 2 từ phải sang: nhân thêm tích bên phải.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          3,
          4
         ]
        ],
        "expected": [
         24,
         12,
         8,
         6
        ]
       },
       {
        "args": [
         [
          -1,
          1,
          0,
          -3,
          3
         ]
        ],
        "expected": [
         0,
         0,
         9,
         0,
         0
        ]
       },
       {
        "args": [
         [
          2,
          3
         ]
        ],
        "expected": [
         3,
         2
        ]
       },
       {
        "args": [
         [
          0,
          0
         ]
        ],
        "expected": [
         0,
         0
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-stack-queue",
    "title": "Stack và Queue",
    "html": "<h2>Stack — vào sau, ra trước (LIFO)</h2>\n<p>Như chồng đĩa: chỉ thêm/lấy ở <strong>đỉnh</strong>. Trong JS, mảng với <code>push</code>/<code>pop</code> là một stack hoàn hảo (cả hai O(1)).</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const stack = [];\nstack.push(1); stack.push(2); stack.push(3);\nconsole.log(stack[stack.length - 1]); // xem đỉnh (peek): 3\nconsole.log(stack.pop());             // 3\nconsole.log(stack);                   // [1, 2]</code></pre>\n<p><strong>Nghĩ đến stack khi:</strong> cần &quot;khớp cặp&quot; (ngoặc, thẻ HTML), &quot;quay lui&quot; (undo, duyệt DFS), xử lý <strong>phần tử gần nhất</strong> chưa được giải quyết, hoặc biểu thức (tính toán, ký pháp Ba Lan ngược).</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// Kiểm tra ngoặc đúng\nfunction isValid(s) {\n  const pairs = { &quot;)&quot;: &quot;(&quot;, &quot;]&quot;: &quot;[&quot;, &quot;}&quot;: &quot;{&quot; };\n  const stack = [];\n  for (const ch of s) {\n    if (ch === &quot;(&quot; || ch === &quot;[&quot; || ch === &quot;{&quot;) stack.push(ch);\n    else if (stack.pop() !== pairs[ch]) return false;\n  }\n  return stack.length === 0;\n}\nconsole.log(isValid(&quot;({[]})&quot;), isValid(&quot;(]&quot;), isValid(&quot;((&quot;));</code></pre>\n<h2>Monotonic stack — &quot;phần tử lớn hơn tiếp theo&quot;</h2>\n<p>Giữ stack <strong>đơn điệu</strong> (luôn giảm dần hoặc tăng dần). Khi phần tử mới phá vỡ tính đơn điệu, các phần tử bị pop ra chính là những phần tử vừa &quot;tìm được câu trả lời&quot;.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// Với mỗi phần tử, phần tử lớn hơn đầu tiên bên phải là gì? (-1 nếu không có)\nfunction nextGreater(nums) {\n  const result = new Array(nums.length).fill(-1);\n  const stack = []; // lưu CHỈ SỐ, giá trị tương ứng giảm dần\n  for (let i = 0; i &lt; nums.length; i++) {\n    while (stack.length &amp;&amp; nums[stack[stack.length - 1]] &lt; nums[i]) {\n      result[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return result;\n}\nconsole.log(nextGreater([2, 1, 2, 4, 3])); // [4, 2, 4, -1, -1]</code></pre>\n<p>Mỗi chỉ số được push một lần và pop tối đa một lần → <strong>O(n)</strong>.</p>\n<h2>Queue — vào trước, ra trước (FIFO)</h2>\n<p>Như hàng đợi mua vé. Dùng cho <strong>BFS</strong> (duyệt theo chiều rộng), xử lý theo thứ tự đến, bộ đệm.</p>\n<p>Như đã thấy ở chặng 2, <code>arr.shift()</code> là O(n). Queue hiệu quả trong JS:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">class Queue {\n  #items = [];\n  #head = 0;\n  enqueue(x) { this.#items.push(x); }\n  dequeue() {\n    if (this.#head === this.#items.length) return undefined;\n    const x = this.#items[this.#head++];\n    // dọn bộ nhớ khi phần &quot;đã lấy ra&quot; quá lớn\n    if (this.#head &gt; 1024 &amp;&amp; this.#head * 2 &gt; this.#items.length) {\n      this.#items = this.#items.slice(this.#head);\n      this.#head = 0;\n    }\n    return x;\n  }\n  get size() { return this.#items.length - this.#head; }\n}\n\nconst q = new Queue();\nq.enqueue(&quot;a&quot;); q.enqueue(&quot;b&quot;); q.enqueue(&quot;c&quot;);\nconsole.log(q.dequeue(), q.dequeue(), q.size); // a b 1</code></pre>\n<p>Trong coding test, cách gọn nhất cho BFS là dùng mảng + biến <code>head</code>:</p>\n<pre class=\"code\"><code class=\"language-js\">const queue = [start];\nfor (let head = 0; head &lt; queue.length; head++) {\n  const node = queue[head];\n  // ... queue.push(neighbor)\n}</code></pre>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Đệ quy thực chất dùng <strong>call stack</strong>. Vì sao mọi thuật toán đệ quy đều viết lại được bằng vòng lặp + stack tự quản lý, và khi nào nên làm vậy?</li><li>Class <code>Queue</code> ở trên thỉnh thoảng gọi <code>slice</code> (O(n)). Tại sao tổng chi phí vẫn là O(1) <strong>trung bình</strong> mỗi thao tác (amortized)?</li></ul>\n",
    "source": "content/03-dsa/05-stack-queue.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "valid-parentheses",
      "title": "Valid Parentheses",
      "difficulty": "easy",
      "prompt": "<p>Chuỗi <code>s</code> chỉ gồm <code>()[]{}</code>. Trả về <code>true</code> nếu mọi ngoặc mở được đóng <strong>đúng loại</strong> và <strong>đúng thứ tự</strong>. (LeetCode 20)</p>\n",
      "fn": "isValid",
      "starter": "function isValid(s) {\n\n}\n",
      "solution": "function isValid(s) {\n  const pairs = { \")\": \"(\", \"]\": \"[\", \"}\": \"{\" };\n  const stack = [];\n  for (const ch of s) {\n    if (ch in pairs) {\n      if (stack.pop() !== pairs[ch]) return false;\n    } else {\n      stack.push(ch);\n    }\n  }\n  return stack.length === 0;\n}\n",
      "explain": "",
      "hints": [
       "<p>Gặp ngoặc mở → push. Gặp ngoặc đóng → pop và kiểm tra có khớp loại không.</p>\n",
       "<p>Đừng quên: cuối chuỗi stack phải rỗng (VD <code>&quot;((&quot;</code>), và pop trên stack rỗng trả về <code>undefined</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "()"
        ],
        "expected": true
       },
       {
        "args": [
         "()[]{}"
        ],
        "expected": true
       },
       {
        "args": [
         "(]"
        ],
        "expected": false
       },
       {
        "args": [
         "([)]"
        ],
        "expected": false
       },
       {
        "args": [
         "{[]}"
        ],
        "expected": true
       },
       {
        "args": [
         "(("
        ],
        "expected": false
       },
       {
        "args": [
         "))"
        ],
        "expected": false
       },
       {
        "args": [
         ""
        ],
        "expected": true
       }
      ]
     },
     {
      "id": "min-stack",
      "title": "Min Stack",
      "difficulty": "medium",
      "prompt": "<p>Thiết kế class <code>MinStack</code> với mọi thao tác <strong>O(1)</strong>:</p>\n<ul><li><code>push(x)</code>, <code>pop()</code> (không cần trả về), <code>top()</code> (xem đỉnh)</li><li><code>getMin()</code>: phần tử nhỏ nhất hiện có trong stack</li></ul>\n",
      "fn": null,
      "starter": "class MinStack {\n  constructor() {\n\n  }\n  push(x) {\n\n  }\n  pop() {\n\n  }\n  top() {\n\n  }\n  getMin() {\n\n  }\n}\n",
      "solution": "class MinStack {\n  constructor() {\n    this.stack = [];\n    this.mins = [];\n  }\n  push(x) {\n    this.stack.push(x);\n    const currentMin = this.mins.length ? this.mins[this.mins.length - 1] : Infinity;\n    this.mins.push(Math.min(x, currentMin));\n  }\n  pop() {\n    this.stack.pop();\n    this.mins.pop();\n  }\n  top() {\n    return this.stack[this.stack.length - 1];\n  }\n  getMin() {\n    return this.mins[this.mins.length - 1];\n  }\n}\n",
      "explain": "<p>Mẹo: &quot;min tại mỗi thời điểm&quot; chỉ phụ thuộc vào các phần tử bên dưới, mà các phần tử đó không thay đổi cho đến khi bị pop. Vì vậy lưu min kèm theo từng tầng là đủ. Đổi O(n) bộ nhớ thêm lấy O(1) thời gian.</p>\n",
      "hints": [
       "<p>Tìm min bằng cách duyệt stack là O(n). Cần lưu sẵn thông tin min.</p>\n",
       "<p>Dùng stack thứ hai <code>mins</code>: <code>mins[i]</code> = min của các phần tử từ đáy đến vị trí i. Push/pop song song với stack chính.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const s = new MinStack(); s.push(-2); s.push(0); s.push(-3); const a = s.getMin(); s.pop(); return [a, s.top(), s.getMin()];",
        "label": "push -2, 0, -3; getMin; pop; top; getMin",
        "expected": [
         -3,
         0,
         -2
        ]
       },
       {
        "code": "const s = new MinStack(); s.push(5); s.push(5); s.push(7); s.pop(); s.pop(); return s.getMin();",
        "label": "giá trị min trùng nhau",
        "expected": 5
       },
       {
        "code": "const s = new MinStack(); s.push(1); s.push(2); return [s.top(), s.getMin()];",
        "label": "min ở đáy",
        "expected": [
         2,
         1
        ]
       },
       {
        "hidden": true,
        "code": "const s = new MinStack(); for (let i = 200000; i > 0; i--) s.push(i); let t = 0; for (let i = 0; i < 199999; i++) { t += s.getMin(); s.pop(); } return t;",
        "label": "200.000 thao tác — getMin phải O(1)",
        "expected": 19999900000
       }
      ]
     },
     {
      "id": "daily-temperatures",
      "title": "Daily Temperatures",
      "difficulty": "medium",
      "prompt": "<p><code>temps[i]</code> là nhiệt độ ngày i. Trả về mảng <code>answer</code> với <code>answer[i]</code> = số ngày phải chờ sau ngày i để có ngày <strong>ấm hơn</strong>; không có thì 0.</p>\n<p><code>[73,74,75,71,69,72,76,73]</code> → <code>[1,1,4,2,1,1,0,0]</code>. Ràng buộc <code>n &lt;= 2·10^5</code>.</p>\n",
      "fn": "dailyTemperatures",
      "starter": "function dailyTemperatures(temps) {\n\n}\n",
      "solution": "function dailyTemperatures(temps) {\n  const answer = new Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const j = stack.pop();\n      answer[j] = i - j;\n    }\n    stack.push(i);\n  }\n  return answer;\n}\n",
      "explain": "",
      "hints": [
       "<p>Đây là &quot;next greater element&quot;. Brute force O(n²) sẽ chậm với mảng giảm dần.</p>\n",
       "<p>Monotonic stack lưu <strong>chỉ số</strong> các ngày chưa tìm được ngày ấm hơn. Ngày mới ấm hơn đỉnh stack → pop và ghi <code>i - j</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          73,
          74,
          75,
          71,
          69,
          72,
          76,
          73
         ]
        ],
        "expected": [
         1,
         1,
         4,
         2,
         1,
         1,
         0,
         0
        ]
       },
       {
        "args": [
         [
          30,
          40,
          50,
          60
         ]
        ],
        "expected": [
         1,
         1,
         1,
         0
        ]
       },
       {
        "args": [
         [
          30,
          60,
          90
         ]
        ],
        "expected": [
         1,
         1,
         0
        ]
       },
       {
        "args": [
         [
          50
         ]
        ],
        "expected": [
         0
        ]
       },
       {
        "gen": "const a = Array.from({ length: 200000 }, (_, i) => 200000 - i); a.push(300000); return [a];",
        "check": "return result.length === 200001 && result[0] === 200000 && result[199999] === 1 && result[200000] === 0;",
        "label": "n = 200.000 giảm dần, ngày cuối nóng nhất",
        "expectedText": "[200000, 199999, ..., 1, 0]"
       }
      ]
     },
     {
      "id": "eval-rpn",
      "title": "Tính biểu thức Ba Lan ngược",
      "difficulty": "medium",
      "prompt": "<p>Tính giá trị biểu thức ở dạng <strong>ký pháp Ba Lan ngược</strong> (toán tử đứng sau toán hạng). Toán tử: <code>+ - * /</code>; phép chia <strong>làm tròn về 0</strong> (<code>Math.trunc</code>).</p>\n<p><code>[&quot;2&quot;,&quot;1&quot;,&quot;+&quot;,&quot;3&quot;,&quot;*&quot;]</code> → <code>(2 + 1) * 3 = 9</code></p>\n",
      "fn": "evalRPN",
      "starter": "function evalRPN(tokens) {\n\n}\n",
      "solution": "function evalRPN(tokens) {\n  const stack = [];\n  for (const t of tokens) {\n    if (t === \"+\" || t === \"-\" || t === \"*\" || t === \"/\") {\n      const b = stack.pop();\n      const a = stack.pop();\n      if (t === \"+\") stack.push(a + b);\n      else if (t === \"-\") stack.push(a - b);\n      else if (t === \"*\") stack.push(a * b);\n      else stack.push(Math.trunc(a / b));\n    } else {\n      stack.push(Number(t));\n    }\n  }\n  return stack.pop();\n}\n",
      "explain": "",
      "hints": [
       "<p>Số → push. Toán tử → pop hai số, tính, push kết quả.</p>\n",
       "<p>Thứ tự pop: phần tử pop <strong>đầu tiên</strong> là toán hạng <strong>bên phải</strong> (<code>b</code>), sau đó mới là <code>a</code>. Quan trọng với <code>-</code> và <code>/</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          "2",
          "1",
          "+",
          "3",
          "*"
         ]
        ],
        "expected": 9
       },
       {
        "args": [
         [
          "4",
          "13",
          "5",
          "/",
          "+"
         ]
        ],
        "expected": 6
       },
       {
        "args": [
         [
          "10",
          "6",
          "9",
          "3",
          "+",
          "-11",
          "*",
          "/",
          "*",
          "17",
          "+",
          "5",
          "+"
         ]
        ],
        "expected": 22
       },
       {
        "args": [
         [
          "7",
          "-2",
          "/"
         ]
        ],
        "expected": -3
       },
       {
        "args": [
         [
          "42"
         ]
        ],
        "expected": 42
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-linked-list",
    "title": "Danh sách liên kết (Linked List)",
    "html": "<p>Mỗi <strong>node</strong> chứa giá trị và con trỏ <code>next</code> tới node kế tiếp. Không như mảng, các node <strong>không nằm liền nhau</strong> trong bộ nhớ.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\n\n// 1 → 2 → 3\nconst head = new ListNode(1, new ListNode(2, new ListNode(3)));\n\nlet cur = head;\nconst values = [];\nwhile (cur !== null) {      // duyệt: đi theo next đến khi gặp null\n  values.push(cur.val);\n  cur = cur.next;\n}\nconsole.log(values.join(&quot; → &quot;));</code></pre>\n<h2>So sánh với mảng</h2>\n<table><thead><tr><th>Thao tác</th><th>Mảng</th><th>Linked list</th></tr></thead>\n<tbody>\n<tr><td>Truy cập phần tử thứ i</td><td>O(1)</td><td>O(i) — phải đi từ đầu</td></tr>\n<tr><td>Chèn/xoá ở đầu</td><td>O(n)</td><td><strong>O(1)</strong></td></tr>\n<tr><td>Chèn/xoá sau một node đã biết</td><td>O(n)</td><td><strong>O(1)</strong></td></tr>\n<tr><td>Bộ nhớ</td><td>liền mạch, thân thiện cache CPU</td><td>thêm con trỏ mỗi node, rải rác</td></tr>\n</tbody></table>\n<p>Trong thực tế, mảng thường nhanh hơn nhờ cache CPU. Nhưng linked list là <strong>nền tảng</strong> của nhiều cấu trúc khác (LRU cache, hash map xử lý va chạm, queue) và là chủ đề phỏng vấn rất phổ biến vì kiểm tra khả năng <strong>thao tác con trỏ cẩn thận</strong>.</p>\n<h2>Kỹ thuật 1: node giả (dummy head)</h2>\n<p>Khi có thể phải xoá/thay đổi chính <code>head</code>, tạo một node giả đứng trước để mọi node đều &quot;có node phía trước&quot; — bỏ được các <code>if</code> đặc biệt.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }\nconst fromArray = (arr) =&gt; arr.reduceRight((next, val) =&gt; new ListNode(val, next), null);\nconst toArray = (h) =&gt; { const a = []; for (; h; h = h.next) a.push(h.val); return a; };\n\nfunction removeAll(head, target) {\n  const dummy = new ListNode(0, head);\n  let prev = dummy;\n  while (prev.next) {\n    if (prev.next.val === target) prev.next = prev.next.next; // bỏ qua node\n    else prev = prev.next;\n  }\n  return dummy.next;\n}\nconsole.log(toArray(removeAll(fromArray([7, 1, 7, 2, 7]), 7))); // [1, 2]</code></pre>\n<h2>Kỹ thuật 2: con trỏ nhanh – chậm (Floyd)</h2>\n<p><code>slow</code> đi 1 bước, <code>fast</code> đi 2 bước:</p>\n<ul><li>Khi <code>fast</code> tới cuối, <code>slow</code> ở <strong>giữa</strong> danh sách.</li><li>Nếu có <strong>chu trình</strong>, <code>fast</code> sẽ đuổi kịp <code>slow</code> (giống chạy vòng sân vận động).</li></ul>\n<h2>Kỹ thuật 3: đảo con trỏ</h2>\n<p>Đảo ngược danh sách là bài nền tảng: giữ ba con trỏ <code>prev</code>, <code>cur</code>, <code>next</code>. Vẽ ra giấy trước khi code!</p>\n<pre class=\"code\"><code class=\"language-text\">null ← 1    2 → 3 → null      prev = 1, cur = 2\nnull ← 1 ← 2    3 → null      prev = 2, cur = 3</code></pre>\n<blockquote><p><strong>Mẹo phỏng vấn:</strong> với mọi bài linked list, hãy vẽ 3–4 node và đi từng bước. Kiểm tra các trường hợp: danh sách rỗng (<code>null</code>), một node, hai node.</p>\n</blockquote>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao con trỏ nhanh đi <strong>2</strong> bước? Đi 3 bước có còn phát hiện được chu trình không, và có nhược điểm gì?</li><li>LRU cache dùng <strong>hash map + doubly linked list</strong>. Mỗi cấu trúc đảm nhận việc gì để mọi thao tác đều O(1)?</li></ul>\n",
    "source": "content/03-dsa/06-linked-list.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "reverse-linked-list",
      "title": "Đảo ngược linked list",
      "difficulty": "easy",
      "prompt": "<p>Đảo ngược danh sách liên kết và trả về <code>head</code> mới. <code>ListNode</code>, <code>fromArray</code>, <code>toArray</code> đã có sẵn (xem &quot;Code có sẵn&quot;) — dùng <code>toArray</code> với <code>console.log</code> để debug. (LeetCode 206)</p>\n",
      "fn": "reverseList",
      "starter": "function reverseList(head) {\n\n}\n\n// thử: console.log(toArray(reverseList(fromArray([1, 2, 3]))));\n",
      "solution": "function reverseList(head) {\n  let prev = null;\n  let cur = head;\n  while (cur !== null) {\n    const next = cur.next;\n    cur.next = prev;\n    prev = cur;\n    cur = next;\n  }\n  return prev;\n}\n",
      "explain": "<p>O(n) thời gian, O(1) bộ nhớ. Bản đệ quy: <code>const newHead = reverseList(head.next); head.next.next = head; head.next = null; return newHead;</code> — gọn nhưng tốn O(n) call stack, danh sách 10^5 node có thể tràn stack.</p>\n",
      "hints": [
       "<p>Ba biến: <code>prev = null</code>, <code>cur = head</code>, và <code>next</code> tạm để không mất phần còn lại của danh sách.</p>\n",
       "<p>Mỗi bước: lưu <code>next = cur.next</code>; đảo <code>cur.next = prev</code>; tiến <code>prev = cur; cur = next</code>. Kết thúc: <code>prev</code> là head mới.</p>\n"
      ],
      "followUp": "<p>Viết lại bằng đệ quy. Tại sao người phỏng vấn thường hỏi <strong>cả hai</strong> cách, và bạn sẽ chọn cách nào cho code production?</p>\n",
      "helpers": "class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\n// fromArray([1, 2, 3]) → 1 → 2 → 3\nfunction fromArray(arr) {\n  let head = null;\n  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);\n  return head;\n}\n// toArray(head) → [1, 2, 3] (dừng sau 10.000 node để tránh treo khi có chu trình)\nfunction toArray(head) {\n  const out = [];\n  for (let n = head; n && out.length < 10000; n = n.next) out.push(n.val);\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return toArray(reverseList(fromArray([1, 2, 3, 4, 5])));",
        "label": "1→2→3→4→5",
        "expected": [
         5,
         4,
         3,
         2,
         1
        ]
       },
       {
        "code": "return toArray(reverseList(fromArray([1, 2])));",
        "label": "1→2",
        "expected": [
         2,
         1
        ]
       },
       {
        "code": "return reverseList(null);",
        "label": "danh sách rỗng (null)",
        "expected": null
       },
       {
        "code": "return toArray(reverseList(fromArray([9])));",
        "label": "một node",
        "expected": [
         9
        ]
       }
      ]
     },
     {
      "id": "merge-two-sorted-lists",
      "title": "Gộp hai danh sách đã sắp xếp",
      "difficulty": "easy",
      "prompt": "<p>Gộp hai linked list <strong>đã sắp xếp tăng dần</strong> thành một danh sách sắp xếp, bằng cách <strong>nối lại các node có sẵn</strong> (không tạo node mới cho dữ liệu). (LeetCode 21)</p>\n",
      "fn": "mergeTwoLists",
      "starter": "function mergeTwoLists(l1, l2) {\n\n}\n",
      "solution": "function mergeTwoLists(l1, l2) {\n  const dummy = new ListNode(0);\n  let tail = dummy;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) {\n      tail.next = l1;\n      l1 = l1.next;\n    } else {\n      tail.next = l2;\n      l2 = l2.next;\n    }\n    tail = tail.next;\n  }\n  tail.next = l1 || l2;\n  return dummy.next;\n}\n",
      "explain": "",
      "hints": [
       "<p>Dùng node giả <code>dummy</code> và con trỏ <code>tail</code> trỏ vào node cuối của kết quả.</p>\n",
       "<p>Khi một danh sách hết, nối thẳng phần còn lại của danh sách kia: <code>tail.next = l1 || l2</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\n// fromArray([1, 2, 3]) → 1 → 2 → 3\nfunction fromArray(arr) {\n  let head = null;\n  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);\n  return head;\n}\n// toArray(head) → [1, 2, 3] (dừng sau 10.000 node để tránh treo khi có chu trình)\nfunction toArray(head) {\n  const out = [];\n  for (let n = head; n && out.length < 10000; n = n.next) out.push(n.val);\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return toArray(mergeTwoLists(fromArray([1, 2, 4]), fromArray([1, 3, 4])));",
        "label": "[1,2,4] + [1,3,4]",
        "expected": [
         1,
         1,
         2,
         3,
         4,
         4
        ]
       },
       {
        "code": "return mergeTwoLists(null, null);",
        "label": "cả hai rỗng",
        "expected": null
       },
       {
        "code": "return toArray(mergeTwoLists(null, fromArray([0])));",
        "label": "một bên rỗng",
        "expected": [
         0
        ]
       },
       {
        "code": "const a = fromArray([1, 5]); const b = fromArray([2]); const m = mergeTwoLists(a, b); return m === a && m.next === b;",
        "label": "dùng lại node có sẵn",
        "expected": true
       }
      ]
     },
     {
      "id": "linked-list-cycle",
      "title": "Phát hiện chu trình",
      "difficulty": "easy",
      "prompt": "<p>Trả về <code>true</code> nếu danh sách có <strong>chu trình</strong> (một node nào đó trỏ ngược về node trước). Yêu cầu <strong>O(1) bộ nhớ</strong>. (LeetCode 141)</p>\n",
      "fn": "hasCycle",
      "starter": "function hasCycle(head) {\n\n}\n",
      "solution": "function hasCycle(head) {\n  let slow = head;\n  let fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}\n",
      "explain": "",
      "hints": [
       "<p>Cách dễ: lưu các node đã gặp vào <code>Set</code> — O(n) bộ nhớ.</p>\n",
       "<p>O(1): con trỏ <code>slow</code> đi 1 bước, <code>fast</code> đi 2 bước. Có chu trình thì chúng sẽ gặp nhau; không có thì <code>fast</code> chạm <code>null</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\n// fromArray([1, 2, 3]) → 1 → 2 → 3\nfunction fromArray(arr) {\n  let head = null;\n  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);\n  return head;\n}\n// toArray(head) → [1, 2, 3] (dừng sau 10.000 node để tránh treo khi có chu trình)\nfunction toArray(head) {\n  const out = [];\n  for (let n = head; n && out.length < 10000; n = n.next) out.push(n.val);\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const h = fromArray([3, 2, 0, -4]); h.next.next.next.next = h.next; return hasCycle(h);",
        "label": "3→2→0→-4→(quay về 2)",
        "expected": true
       },
       {
        "code": "const h = fromArray([1, 2]); h.next.next = h; return hasCycle(h);",
        "label": "1→2→(quay về 1)",
        "expected": true
       },
       {
        "code": "return hasCycle(fromArray([1, 2, 3]));",
        "label": "không có chu trình",
        "expected": false
       },
       {
        "code": "return hasCycle(null);",
        "label": "rỗng",
        "expected": false
       },
       {
        "code": "const h = fromArray([1]); h.next = h; return hasCycle(h);",
        "label": "một node tự trỏ vào mình",
        "expected": true
       }
      ]
     },
     {
      "id": "middle-of-list",
      "title": "Node ở giữa",
      "difficulty": "easy",
      "prompt": "<p>Trả về node ở <strong>giữa</strong> danh sách. Nếu có hai node giữa (số node chẵn), trả về node <strong>thứ hai</strong>. Chỉ duyệt một lần.</p>\n",
      "fn": "middleNode",
      "starter": "function middleNode(head) {\n\n}\n",
      "solution": "function middleNode(head) {\n  let slow = head;\n  let fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}\n",
      "explain": "",
      "hints": [
       "<p>Nhanh – chậm: khi <code>fast</code> tới cuối, <code>slow</code> ở giữa.</p>\n"
      ],
      "followUp": "",
      "helpers": "class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\n// fromArray([1, 2, 3]) → 1 → 2 → 3\nfunction fromArray(arr) {\n  let head = null;\n  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);\n  return head;\n}\n// toArray(head) → [1, 2, 3] (dừng sau 10.000 node để tránh treo khi có chu trình)\nfunction toArray(head) {\n  const out = [];\n  for (let n = head; n && out.length < 10000; n = n.next) out.push(n.val);\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return toArray(middleNode(fromArray([1, 2, 3, 4, 5])));",
        "label": "[1..5] → từ node 3",
        "expected": [
         3,
         4,
         5
        ]
       },
       {
        "code": "return toArray(middleNode(fromArray([1, 2, 3, 4, 5, 6])));",
        "label": "[1..6] → từ node 4",
        "expected": [
         4,
         5,
         6
        ]
       },
       {
        "code": "return toArray(middleNode(fromArray([1])));",
        "label": "một node",
        "expected": [
         1
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-recursion",
    "title": "Đệ quy",
    "html": "<p>Hàm <strong>đệ quy</strong> gọi lại chính nó với bài toán <strong>nhỏ hơn</strong>. Đây là nền tảng của cây, đồ thị (DFS), backtracking, chia để trị và quy hoạch động.</p>\n<h2>Hai thành phần bắt buộc</h2>\n<ol><li><strong>Base case</strong> (điều kiện dừng): bài toán đủ nhỏ để trả lời ngay.</li><li><strong>Bước đệ quy</strong>: đưa bài toán về phiên bản nhỏ hơn, <strong>tin rằng</strong> lời gọi đệ quy trả về đúng, rồi kết hợp.</li></ol>\n<pre class=\"code\" data-run><code class=\"language-js\">function factorial(n) {\n  if (n &lt;= 1) return 1;          // base case\n  return n * factorial(n - 1);   // bước đệ quy: n! = n × (n−1)!\n}\nconsole.log(factorial(5)); // 120\n\nfunction sumDigits(n) {\n  if (n &lt; 10) return n;\n  return (n % 10) + sumDigits(Math.floor(n / 10));\n}\nconsole.log(sumDigits(9875)); // 29</code></pre>\n<blockquote><p><strong>&quot;Leap of faith&quot;:</strong> khi viết bước đệ quy, đừng cố &quot;chạy&quot; trong đầu toàn bộ chuỗi lời gọi. Chỉ cần: (1) base case đúng, (2) giả sử lời gọi nhỏ hơn đã đúng thì kết hợp có đúng không. Đó là quy nạp toán học.</p>\n</blockquote>\n<h2>Call stack</h2>\n<p>Mỗi lời gọi chưa xong nằm trên <strong>call stack</strong>. Đệ quy quá sâu → <code>RangeError: Maximum call stack size exceeded</code> (thường khoảng 10.000 tầng trong JS).</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function depth(n) {\n  return n === 0 ? 0 : 1 + depth(n - 1);\n}\nconsole.log(depth(5000));\ntry {\n  depth(1e6);\n} catch (e) {\n  console.log(e.name + &quot;: &quot; + e.message);\n}</code></pre>\n<p>Vì vậy với dữ liệu lớn (linked list 10^5 node, DFS trên đồ thị lớn), hãy cân nhắc viết lại bằng vòng lặp + stack.</p>\n<h2>Cây đệ quy và chi phí</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">let calls = 0;\nfunction fib(n) {\n  calls++;\n  if (n &lt; 2) return n;\n  return fib(n - 1) + fib(n - 2); // hai nhánh → cây nhị phân lời gọi\n}\nconsole.log(fib(25), &quot;— số lời gọi:&quot;, calls); // ~250.000 lời gọi cho n = 25!</code></pre>\n<p><code>fib(n)</code> ngây thơ là <strong>O(2^n)</strong> vì tính lại cùng một giá trị rất nhiều lần (<code>fib(23)</code> được tính 2 lần, <code>fib(22)</code> 3 lần...). Thêm memo (bài Closure) → O(n). Đó là cầu nối sang <strong>quy hoạch động</strong>.</p>\n<h2>Chia để trị</h2>\n<p>Chia bài toán thành các phần <strong>độc lập</strong>, giải từng phần, rồi gộp. Ví dụ: merge sort (bài Sắp xếp), luỹ thừa nhanh:</p>\n<pre class=\"code\"><code class=\"language-text\">x^n = (x^(n/2))²        nếu n chẵn\nx^n = x · (x^(n/2))²    nếu n lẻ</code></pre>\n<p>Chỉ cần log₂(n) tầng thay vì n phép nhân.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Đệ quy và vòng lặp có sức mạnh tương đương. Khi nào đệ quy làm code <strong>rõ ràng hơn hẳn</strong>? (Gợi ý: cấu trúc tự lồng nhau như cây, JSON, thư mục.)</li><li>Một số ngôn ngữ tối ưu &quot;tail call&quot; để đệ quy không tốn stack. JS (V8) không làm điều đó. Hệ quả thực tế là gì?</li></ul>\n",
    "source": "content/03-dsa/07-recursion.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "fast-power",
      "title": "Luỹ thừa nhanh (Pow(x, n))",
      "difficulty": "medium",
      "prompt": "<p>Tính <code>x^n</code> với <code>n</code> là số nguyên (có thể <strong>âm</strong>, <code>|n|</code> tới 2^31). Không dùng <code>**</code> hay <code>Math.pow</code>. Phải đạt O(log n). (LeetCode 50)</p>\n",
      "fn": "myPow",
      "starter": "function myPow(x, n) {\n\n}\n",
      "solution": "function myPow(x, n) {\n  if (n < 0) return 1 / myPow(x, -n);\n  if (n === 0) return 1;\n  const half = myPow(x, Math.floor(n / 2));\n  return n % 2 === 0 ? half * half : half * half * x;\n}\n",
      "explain": "<p>Độ sâu đệ quy ~31 với n = 2^31. Lỗi kinh điển: <code>return myPow(x, n/2) * myPow(x, n/2)</code> — đúng nhưng O(n) vì gọi hai lần cùng một thứ.</p>\n",
      "hints": [
       "<p>Base case: <code>n === 0</code> → 1. Số mũ âm: <code>x^-n = 1 / x^n</code>.</p>\n",
       "<p>Tính <code>half = myPow(x, floor(n/2))</code> <strong>một lần</strong> rồi dùng lại; gọi hai lần sẽ thành O(n).</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": "float",
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         2,
         10
        ],
        "expected": 1024
       },
       {
        "args": [
         2.1,
         3
        ],
        "expected": 9.261
       },
       {
        "args": [
         2,
         -2
        ],
        "expected": 0.25
       },
       {
        "args": [
         5,
         0
        ],
        "expected": 1
       },
       {
        "args": [
         1.0000001,
         2147483647
        ],
        "expected": 1.8366448196907323e+93,
        "hidden": true,
        "label": "n = 2^31 − 1 — cần O(log n)"
       },
       {
        "args": [
         -2,
         3
        ],
        "expected": -8
       }
      ]
     },
     {
      "id": "flatten-deep",
      "title": "Làm phẳng mảng lồng nhau",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>flatten(arr)</code> trả về mảng một chiều chứa mọi phần tử của mảng lồng nhau <strong>nhiều tầng tuỳ ý</strong>, giữ thứ tự. Không dùng <code>arr.flat()</code>.</p>\n<p><code>flatten([1, [2, [3, [4]], 5]])</code> → <code>[1, 2, 3, 4, 5]</code></p>\n",
      "fn": "flatten",
      "starter": "function flatten(arr) {\n\n}\n",
      "solution": "function flatten(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (Array.isArray(item)) {\n      for (const x of flatten(item)) result.push(x);\n    } else {\n      result.push(item);\n    }\n  }\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Duyệt từng phần tử: nếu là mảng thì gọi đệ quy <code>flatten(item)</code> và đẩy mọi phần tử của kết quả vào; không thì đẩy chính nó.</p>\n",
       "<p>Tránh <code>result.push(...flatten(item))</code> khi mảng con rất lớn (giới hạn số tham số).</p>\n"
      ],
      "followUp": "<p>Viết lại <strong>không dùng đệ quy</strong> (dùng stack). Thứ tự kết quả có bị đảo không, và sửa thế nào?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          [
           2,
           [
            3,
            [
             4
            ]
           ],
           5
          ]
         ]
        ],
        "expected": [
         1,
         2,
         3,
         4,
         5
        ]
       },
       {
        "args": [
         []
        ],
        "expected": []
       },
       {
        "args": [
         [
          [
           []
          ]
         ]
        ],
        "expected": []
       },
       {
        "args": [
         [
          1,
          2,
          3
         ]
        ],
        "expected": [
         1,
         2,
         3
        ]
       },
       {
        "args": [
         [
          [
           "a"
          ],
          [
           [
            "b",
            [
             "c"
            ]
           ]
          ],
          "d"
         ]
        ],
        "expected": [
         "a",
         "b",
         "c",
         "d"
        ]
       }
      ]
     },
     {
      "id": "deep-sum",
      "title": "Tổng các số trong JSON",
      "difficulty": "medium",
      "prompt": "<p>Cho một giá trị kiểu JSON (số, chuỗi, boolean, null, mảng, object lồng nhau tuỳ ý). Viết <code>deepSum(value)</code> trả về <strong>tổng mọi số</strong> nằm ở bất kỳ đâu bên trong (bỏ qua chuỗi kể cả chuỗi chứa số).</p>\n<p><code>deepSum({ a: 1, b: [2, { c: 3, d: &quot;4&quot; }], e: null })</code> → <code>6</code></p>\n",
      "fn": "deepSum",
      "starter": "function deepSum(value) {\n\n}\n",
      "solution": "function deepSum(value) {\n  if (typeof value === \"number\") return value;\n  if (value === null || typeof value !== \"object\") return 0;\n  let total = 0;\n  for (const child of Object.values(value)) total += deepSum(child);\n  return total;\n}\n",
      "explain": "<p>Cấu trúc <strong>tự lồng nhau</strong> (JSON, cây thư mục, DOM) là nơi đệ quy toả sáng: code bám sát định nghĩa dữ liệu. Lưu ý <code>typeof null === &quot;object&quot;</code> — phải loại <code>null</code> trước.</p>\n",
      "hints": [
       "<p>Base case: số → trả về chính nó; các kiểu nguyên thuỷ khác (chuỗi, boolean, null) → 0.</p>\n",
       "<p>Mảng và object đều duyệt được bằng <code>Object.values(value)</code> — gọi đệ quy cho từng phần tử con và cộng lại.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         {
          "a": 1,
          "b": [
           2,
           {
            "c": 3,
            "d": "4"
           }
          ],
          "e": null
         }
        ],
        "expected": 6
       },
       {
        "args": [
         5
        ],
        "expected": 5
       },
       {
        "args": [
         "10"
        ],
        "expected": 0
       },
       {
        "args": [
         [
          [
           [
            [
             1
            ]
           ]
          ],
          2,
          [
           3,
           [
            4
           ]
          ]
         ]
        ],
        "expected": 10
       },
       {
        "args": [
         {
          "x": true,
          "y": {
           "z": -5,
           "w": [
            1.5
           ]
          }
         }
        ],
        "expected": -3.5
       },
       {
        "args": [
         null
        ],
        "expected": 0
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-binary-search",
    "title": "Tìm kiếm nhị phân (Binary Search)",
    "html": "<p>Trên dữ liệu <strong>đã sắp xếp</strong>, mỗi bước so sánh với phần tử ở giữa rồi <strong>loại bỏ một nửa</strong>. n = 10^9 cũng chỉ cần ~30 bước: <strong>O(log n)</strong>.</p>\n<h2>Khuôn mẫu chuẩn</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function binarySearch(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo &lt;= hi) {                         // còn ít nhất 1 phần tử\n    const mid = lo + Math.floor((hi - lo) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] &lt; target) lo = mid + 1;    // target nằm bên phải mid\n    else hi = mid - 1;                        // target nằm bên trái mid\n  }\n  return -1;\n}\nconsole.log(binarySearch([1, 3, 5, 7, 9, 11], 7));  // 3\nconsole.log(binarySearch([1, 3, 5, 7, 9, 11], 4));  // -1</code></pre>\n<p>Binary search nổi tiếng <strong>dễ sai</strong>: lặp vô hạn, sai một phần tử, tràn chỉ số. Cách tránh: chọn một quy ước và giữ <strong>bất biến</strong> (invariant) rõ ràng. Ở trên: &quot;nếu target tồn tại, nó luôn nằm trong <code>[lo, hi]</code>&quot;.</p>\n<h2>Lower bound — vị trí đầu tiên <code>&gt;= target</code></h2>\n<p>Dạng tổng quát hơn, dùng cho &quot;vị trí chèn&quot;, &quot;phần tử đầu tiên thoả điều kiện&quot;:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function lowerBound(nums, target) {\n  let lo = 0, hi = nums.length;      // chú ý: hi = length (nửa mở [lo, hi))\n  while (lo &lt; hi) {\n    const mid = (lo + hi) &gt;&gt; 1;\n    if (nums[mid] &lt; target) lo = mid + 1;\n    else hi = mid;                   // mid có thể là đáp án → giữ lại\n  }\n  return lo;                         // lo === hi\n}\nconst a = [1, 2, 4, 4, 4, 7];\nconsole.log(lowerBound(a, 4), lowerBound(a, 5), lowerBound(a, 100)); // 2 5 6</code></pre>\n<h2>Ý tưởng mạnh nhất: tìm kiếm nhị phân trên <strong>đáp án</strong></h2>\n<p>Không chỉ dùng trên mảng! Nếu có hàm <code>ok(x)</code> <strong>đơn điệu</strong> — sai, sai, ..., sai, đúng, đúng, ... — thì tìm được <code>x</code> nhỏ nhất làm <code>ok(x)</code> đúng bằng binary search trên miền giá trị của x.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// Căn bậc hai nguyên: số x lớn nhất với x*x &lt;= n\nfunction isqrt(n) {\n  let lo = 0, hi = n;\n  while (lo &lt; hi) {\n    const mid = Math.ceil((lo + hi) / 2);  // làm tròn LÊN khi lo = mid, tránh lặp vô hạn\n    if (mid * mid &lt;= n) lo = mid;\n    else hi = mid - 1;\n  }\n  return lo;\n}\nconsole.log(isqrt(8), isqrt(16), isqrt(2147395599)); // 2 4 46339</code></pre>\n<p>Dấu hiệu nhận biết: đề hỏi &quot;giá trị <strong>nhỏ nhất/lớn nhất</strong> sao cho ... vẫn khả thi&quot;, và kiểm tra một giá trị cụ thể có khả thi không thì dễ (thường O(n)). Tổng: O(n log(miền giá trị)).</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao viết <code>lo + Math.floor((hi - lo) / 2)</code> thay vì <code>Math.floor((lo + hi) / 2)</code>? Trong JS có thực sự cần không? (Gợi ý: Java/C++ với <code>int</code>.)</li><li>Trong <code>isqrt</code>, nếu dùng <code>Math.floor</code> cho <code>mid</code> thì chuyện gì xảy ra khi <code>hi = lo + 1</code>?</li><li>Binary search cần dữ liệu đã sắp xếp. Nếu chỉ tìm <strong>một lần</strong> trên mảng chưa sắp xếp, sort trước có đáng không?</li></ul>\n",
    "source": "content/03-dsa/08-binary-search.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "binary-search-basic",
      "title": "Binary Search",
      "difficulty": "easy",
      "prompt": "<p><code>nums</code> sắp xếp tăng dần, các phần tử khác nhau. Trả về chỉ số của <code>target</code>, hoặc <code>-1</code>. Phải O(log n) — test ẩn gọi hàm <strong>100.000 lần</strong> trên mảng 10^6 phần tử.</p>\n",
      "fn": "search",
      "starter": "function search(nums, target) {\n  return nums.indexOf(target);\n}\n",
      "solution": "function search(nums, target) {\n  let lo = 0;\n  let hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = lo + Math.floor((hi - lo) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}\n",
      "explain": "",
      "hints": [
       "<p>Khuôn mẫu <code>while (lo &lt;= hi)</code> trong bài học.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          -1,
          0,
          3,
          5,
          9,
          12
         ],
         9
        ],
        "expected": 4
       },
       {
        "args": [
         [
          -1,
          0,
          3,
          5,
          9,
          12
         ],
         2
        ],
        "expected": -1
       },
       {
        "args": [
         [
          5
         ],
         5
        ],
        "expected": 0
       },
       {
        "args": [
         [],
         1
        ],
        "expected": -1
       },
       {
        "args": [
         [
          1,
          2
         ],
         2
        ],
        "expected": 1
       },
       {
        "hidden": true,
        "code": "const a = Array.from({ length: 1000000 }, (_, i) => i * 2); let s = 0; for (let q = 0; q < 100000; q++) s += search(a, 1999998 - q * 2); return s;",
        "label": "100.000 lần tìm trên mảng 10^6",
        "expected": 94999950000
       }
      ]
     },
     {
      "id": "search-insert",
      "title": "Vị trí chèn",
      "difficulty": "easy",
      "prompt": "<p><code>nums</code> sắp xếp tăng dần (có thể có phần tử <strong>trùng</strong>). Trả về chỉ số <strong>đầu tiên</strong> <code>i</code> sao cho <code>nums[i] &gt;= target</code> (nếu không có, trả về <code>nums.length</code>) — chính là vị trí chèn <code>target</code> để mảng vẫn sắp xếp.</p>\n",
      "fn": "searchInsert",
      "starter": "function searchInsert(nums, target) {\n\n}\n",
      "solution": "function searchInsert(nums, target) {\n  let lo = 0;\n  let hi = nums.length;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid;\n  }\n  return lo;\n}\n",
      "explain": "",
      "hints": [
       "<p>Đây là &quot;lower bound&quot;. Dùng khoảng nửa mở <code>[lo, hi)</code> với <code>hi = nums.length</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          3,
          5,
          6
         ],
         5
        ],
        "expected": 2
       },
       {
        "args": [
         [
          1,
          3,
          5,
          6
         ],
         2
        ],
        "expected": 1
       },
       {
        "args": [
         [
          1,
          3,
          5,
          6
         ],
         7
        ],
        "expected": 4
       },
       {
        "args": [
         [
          1,
          3,
          5,
          6
         ],
         0
        ],
        "expected": 0
       },
       {
        "args": [
         [
          2,
          4,
          4,
          4,
          8
         ],
         4
        ],
        "expected": 1
       },
       {
        "args": [
         [],
         3
        ],
        "expected": 0
       }
      ]
     },
     {
      "id": "sqrt-x",
      "title": "Căn bậc hai nguyên",
      "difficulty": "easy",
      "prompt": "<p>Trả về phần nguyên của căn bậc hai của <code>x</code> (<code>0 &lt;= x &lt;= 2^31 - 1</code>). Không dùng <code>Math.sqrt</code> hay <code>**</code>.</p>\n",
      "fn": "mySqrt",
      "starter": "function mySqrt(x) {\n\n}\n",
      "solution": "function mySqrt(x) {\n  let lo = 0;\n  let hi = x;\n  while (lo < hi) {\n    const mid = Math.ceil((lo + hi) / 2);\n    if (mid * mid <= x) lo = mid;\n    else hi = mid - 1;\n  }\n  return lo;\n}\n",
      "explain": "",
      "hints": [
       "<p>Binary search trên đáp án: tìm <code>m</code> lớn nhất với <code>m * m &lt;= x</code>.</p>\n",
       "<p>Khi cập nhật <code>lo = mid</code>, phải làm tròn <code>mid</code> <strong>lên</strong> (<code>Math.ceil</code>) để tránh vòng lặp vô hạn.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         4
        ],
        "expected": 2
       },
       {
        "args": [
         8
        ],
        "expected": 2
       },
       {
        "args": [
         0
        ],
        "expected": 0
       },
       {
        "args": [
         1
        ],
        "expected": 1
       },
       {
        "args": [
         2147395599
        ],
        "expected": 46339
       },
       {
        "args": [
         2147483647
        ],
        "expected": 46340
       }
      ]
     },
     {
      "id": "search-rotated",
      "title": "Tìm trong mảng xoay",
      "difficulty": "medium",
      "prompt": "<p>Mảng tăng dần (phần tử khác nhau) đã bị <strong>xoay</strong> tại một điểm chưa biết, VD <code>[0,1,2,4,5,6,7]</code> → <code>[4,5,6,7,0,1,2]</code>. Tìm chỉ số của <code>target</code> hoặc <code>-1</code>, trong O(log n). (LeetCode 33)</p>\n",
      "fn": "searchRotated",
      "starter": "function searchRotated(nums, target) {\n\n}\n",
      "solution": "function searchRotated(nums, target) {\n  let lo = 0;\n  let hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n    if (nums[lo] <= nums[mid]) {\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;\n      else lo = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;\n      else hi = mid - 1;\n    }\n  }\n  return -1;\n}\n",
      "explain": "",
      "hints": [
       "<p>Tại mỗi <code>mid</code>, <strong>ít nhất một nửa</strong> <code>[lo, mid]</code> hoặc <code>[mid, hi]</code> là đoạn đã sắp xếp bình thường.</p>\n",
       "<p>Nếu <code>nums[lo] &lt;= nums[mid]</code> thì nửa trái đã sắp xếp: kiểm tra target có nằm trong <code>[nums[lo], nums[mid])</code> không để quyết định đi trái hay phải. Ngược lại xét nửa phải.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          4,
          5,
          6,
          7,
          0,
          1,
          2
         ],
         0
        ],
        "expected": 4
       },
       {
        "args": [
         [
          4,
          5,
          6,
          7,
          0,
          1,
          2
         ],
         3
        ],
        "expected": -1
       },
       {
        "args": [
         [
          1
         ],
         0
        ],
        "expected": -1
       },
       {
        "args": [
         [
          3,
          1
         ],
         1
        ],
        "expected": 1
       },
       {
        "args": [
         [
          5,
          1,
          3
         ],
         5
        ],
        "expected": 0
       },
       {
        "args": [
         [
          6,
          7,
          1,
          2,
          3,
          4,
          5
         ],
         7
        ],
        "expected": 1
       }
      ]
     },
     {
      "id": "koko-bananas",
      "title": "Koko ăn chuối",
      "difficulty": "medium",
      "prompt": "<p>Có <code>piles[i]</code> quả chuối ở đống thứ i. Mỗi giờ Koko chọn <strong>một</strong> đống và ăn tối đa <code>k</code> quả (đống ít hơn k thì ăn hết và nghỉ đến hết giờ đó). Tìm <code>k</code> <strong>nhỏ nhất</strong> để ăn hết trong <code>h</code> giờ. (LeetCode 875)</p>\n<p><code>piles.length &lt;= 10^4</code>, <code>piles[i] &lt;= 10^9</code>.</p>\n",
      "fn": "minEatingSpeed",
      "starter": "function minEatingSpeed(piles, h) {\n\n}\n",
      "solution": "function minEatingSpeed(piles, h) {\n  const hoursNeeded = (k) => {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    return hours;\n  };\n  let lo = 1;\n  let hi = 0;\n  for (const p of piles) if (p > hi) hi = p;\n  while (lo < hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (hoursNeeded(mid) <= h) hi = mid;\n    else lo = mid + 1;\n  }\n  return lo;\n}\n",
      "explain": "<p>O(n log M) với M = max(piles). Thử từng k từ 1 trở lên là O(n·M) — với M = 10^9 thì không bao giờ xong. Đây là ví dụ điển hình của &quot;binary search on answer&quot;.</p>\n",
      "hints": [
       "<p>Với một tốc độ <code>k</code> cụ thể, số giờ cần = tổng <code>Math.ceil(p / k)</code>. Tốc độ càng lớn, giờ càng ít → <strong>đơn điệu</strong>.</p>\n",
       "<p>Binary search <code>k</code> trong <code>[1, max(piles)]</code>: tìm k nhỏ nhất mà số giờ cần ≤ h.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          3,
          6,
          7,
          11
         ],
         8
        ],
        "expected": 4
       },
       {
        "args": [
         [
          30,
          11,
          23,
          4,
          20
         ],
         5
        ],
        "expected": 30
       },
       {
        "args": [
         [
          30,
          11,
          23,
          4,
          20
         ],
         6
        ],
        "expected": 23
       },
       {
        "args": [
         [
          1000000000
         ],
         2
        ],
        "expected": 500000000
       },
       {
        "args": [
         [
          312884470
         ],
         312884469
        ],
        "expected": 2
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-sorting",
    "title": "Sắp xếp",
    "html": "<p>Trong coding test bạn gần như luôn dùng <code>arr.sort((a, b) =&gt; a - b)</code>. Nhưng phỏng vấn vẫn hỏi cách các thuật toán sắp xếp hoạt động, vì chúng minh hoạ những ý tưởng nền tảng: <strong>chia để trị</strong>, <strong>phân hoạch</strong>, <strong>bất biến vòng lặp</strong>.</p>\n<h2>Bảng tổng hợp</h2>\n<table><thead><tr><th>Thuật toán</th><th>Trung bình</th><th>Xấu nhất</th><th>Bộ nhớ</th><th>Ổn định</th><th>Ghi chú</th></tr></thead>\n<tbody>\n<tr><td>Bubble / Selection</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>B: có / S: không</td><td>chỉ để học</td></tr>\n<tr><td>Insertion</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>có</td><td><strong>rất nhanh khi gần như đã sắp xếp</strong> hoặc n nhỏ</td></tr>\n<tr><td>Merge sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>có</td><td>đảm bảo, dùng cho linked list, external sort</td></tr>\n<tr><td>Quick sort</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td><td>không</td><td>nhanh nhất thực tế nếu chọn pivot tốt</td></tr>\n<tr><td>Heap sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td><td>không</td><td>ít dùng trực tiếp</td></tr>\n<tr><td>Counting sort</td><td>O(n + k)</td><td>O(n + k)</td><td>O(k)</td><td>có</td><td>khi giá trị nằm trong khoảng nhỏ k</td></tr>\n</tbody></table>\n<p><code>Array.prototype.sort</code> của V8 dùng <strong>TimSort</strong> (lai giữa merge sort và insertion sort): O(n log n), ổn định.</p>\n<blockquote><p><strong>Ổn định (stable)</strong> nghĩa là các phần tử &quot;bằng nhau&quot; giữ nguyên thứ tự ban đầu. Quan trọng khi sắp xếp nhiều lần theo các tiêu chí khác nhau (VD sắp theo tên, rồi sắp theo điểm — người cùng điểm vẫn theo thứ tự tên).</p>\n</blockquote>\n<h2>Insertion sort</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function insertionSort(a) {\n  for (let i = 1; i &lt; a.length; i++) {\n    const x = a[i];\n    let j = i - 1;\n    while (j &gt;= 0 &amp;&amp; a[j] &gt; x) {   // dời các phần tử lớn hơn sang phải\n      a[j + 1] = a[j];\n      j--;\n    }\n    a[j + 1] = x;                   // bất biến: a[0..i] đã sắp xếp\n  }\n  return a;\n}\nconsole.log(insertionSort([5, 2, 4, 6, 1, 3]));</code></pre>\n<h2>Merge sort — chia để trị</h2>\n<ol><li>Chia mảng làm hai nửa.</li><li>Sắp xếp <strong>đệ quy</strong> mỗi nửa.</li><li><strong>Gộp</strong> hai nửa đã sắp xếp (hai con trỏ, O(n)).</li></ol>\n<p>Có log n tầng, mỗi tầng gộp tổng cộng n phần tử → <strong>O(n log n)</strong>.</p>\n<h2>Quick sort — phân hoạch</h2>\n<ol><li>Chọn <strong>pivot</strong>.</li><li>Phân hoạch: phần tử &lt; pivot sang trái, &gt; pivot sang phải.</li><li>Đệ quy hai phía.</li></ol>\n<pre class=\"code\" data-run><code class=\"language-js\">function quickSort(a, lo = 0, hi = a.length - 1) {\n  if (lo &gt;= hi) return a;\n  const pivot = a[lo + Math.floor(Math.random() * (hi - lo + 1))]; // pivot ngẫu nhiên\n  let i = lo, j = hi;\n  while (i &lt;= j) {                       // phân hoạch Hoare\n    while (a[i] &lt; pivot) i++;\n    while (a[j] &gt; pivot) j--;\n    if (i &lt;= j) {\n      [a[i], a[j]] = [a[j], a[i]];\n      i++; j--;\n    }\n  }\n  quickSort(a, lo, j);\n  quickSort(a, i, hi);\n  return a;\n}\nconsole.log(quickSort([3, 6, 1, 8, 2, 9, 2, 5]));</code></pre>\n<p>Tại sao pivot <strong>ngẫu nhiên</strong>? Nếu luôn chọn phần tử đầu, mảng đã sắp xếp sẵn sẽ khiến mỗi lần chỉ tách được 1 phần tử → O(n²).</p>\n<h2>Sắp xếp như một bước tiền xử lý</h2>\n<p>Rất nhiều bài trở nên dễ sau khi sort: gộp khoảng (merge intervals), tìm cặp (two pointers), loại trùng lặp, tham lam (xếp lịch). Khi bí, hãy hỏi: <strong>&quot;Nếu dữ liệu đã được sắp xếp thì bài này có dễ hơn không?&quot;</strong></p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Merge sort luôn O(n log n), quick sort xấu nhất O(n²). Vậy tại sao quick sort lại phổ biến hơn trong thực tế? (Gợi ý: bộ nhớ phụ, cache CPU.)</li><li>Tại sao TimSort lại dùng insertion sort cho các đoạn nhỏ, dù insertion sort là O(n²)?</li><li>Có thể sắp xếp nhanh hơn O(n log n) không? Khi nào? (Gợi ý: counting/radix sort không dùng phép so sánh.)</li></ul>\n",
    "source": "content/03-dsa/09-sorting.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "merge-sort",
      "title": "Cài đặt Merge Sort",
      "difficulty": "medium",
      "prompt": "<p>Cài đặt <code>mergeSort(nums)</code> trả về mảng <strong>mới</strong> đã sắp xếp tăng dần. <strong>Không dùng</strong> <code>Array.prototype.sort</code>.</p>\n<p>Test ẩn có 200.000 phần tử — thuật toán O(n²) sẽ quá thời gian.</p>\n",
      "fn": "mergeSort",
      "starter": "function mergeSort(nums) {\n\n}\n",
      "solution": "function mergeSort(nums) {\n  if (nums.length <= 1) return nums.slice();\n  const mid = nums.length >> 1;\n  const left = mergeSort(nums.slice(0, mid));\n  const right = mergeSort(nums.slice(mid));\n  const out = new Array(nums.length);\n  let i = 0, j = 0, k = 0;\n  while (i < left.length && j < right.length) {\n    out[k++] = left[i] <= right[j] ? left[i++] : right[j++];\n  }\n  while (i < left.length) out[k++] = left[i++];\n  while (j < right.length) out[k++] = right[j++];\n  return out;\n}\n",
      "explain": "",
      "hints": [
       "<p>Base case: mảng 0 hoặc 1 phần tử đã sắp xếp.</p>\n",
       "<p>Chia: <code>mid = nums.length &gt;&gt; 1</code>; sắp xếp đệ quy <code>nums.slice(0, mid)</code> và <code>nums.slice(mid)</code>.</p>\n",
       "<p>Gộp hai mảng đã sắp xếp bằng hai con trỏ (xem bài Two Pointers). Dùng <code>&lt;=</code> để giữ tính ổn định.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          5,
          2,
          4,
          6,
          1,
          3
         ]
        ],
        "expected": [
         1,
         2,
         3,
         4,
         5,
         6
        ]
       },
       {
        "args": [
         []
        ],
        "expected": []
       },
       {
        "args": [
         [
          1
         ]
        ],
        "expected": [
         1
        ]
       },
       {
        "args": [
         [
          3,
          -1,
          3,
          0,
          -1
         ]
        ],
        "expected": [
         -1,
         -1,
         0,
         3,
         3
        ]
       },
       {
        "code": "const a = [3, 1, 2]; mergeSort(a); return a;",
        "label": "không sửa mảng đầu vào",
        "expected": [
         3,
         1,
         2
        ]
       },
       {
        "code": "const src = Function.prototype.toString.call(mergeSort); return /\\.sort\\s*\\(/.test(src);",
        "label": "không dùng .sort()",
        "expected": false
       },
       {
        "gen": "let x = 12345; return [Array.from({ length: 200000 }, () => (x = (x * 1103515245 + 12345) % 2147483648))];",
        "check": "if (!Array.isArray(result) || result.length !== 200000) return false; for (let i = 1; i < result.length; i++) if (result[i - 1] > result[i]) return false; return true;",
        "label": "n = 200.000 ngẫu nhiên",
        "expectedText": "mảng 200.000 phần tử tăng dần"
       }
      ]
     },
     {
      "id": "sort-colors",
      "title": "Sort Colors (cờ Hà Lan)",
      "difficulty": "medium",
      "prompt": "<p>Mảng chỉ chứa <code>0</code>, <code>1</code>, <code>2</code>. Sắp xếp <strong>in-place</strong> trong <strong>một lần duyệt</strong>, O(1) bộ nhớ, không dùng <code>sort</code>. Hàm không cần trả về gì (test kiểm tra mảng sau khi gọi). (LeetCode 75)</p>\n",
      "fn": "sortColors",
      "starter": "function sortColors(nums) {\n\n}\n",
      "solution": "function sortColors(nums) {\n  let low = 0;\n  let mid = 0;\n  let high = nums.length - 1;\n  while (mid <= high) {\n    if (nums[mid] === 0) {\n      [nums[low], nums[mid]] = [nums[mid], nums[low]];\n      low++;\n      mid++;\n    } else if (nums[mid] === 1) {\n      mid++;\n    } else {\n      [nums[mid], nums[high]] = [nums[high], nums[mid]];\n      high--;\n    }\n  }\n}\n",
      "explain": "",
      "hints": [
       "<p>Cách dễ (hai lần duyệt): đếm số 0, 1, 2 rồi ghi lại — counting sort.</p>\n",
       "<p>Một lần duyệt: ba con trỏ <code>low</code>, <code>mid</code>, <code>high</code>. Bất biến: <code>[0, low)</code> toàn 0, <code>[low, mid)</code> toàn 1, <code>(high, end]</code> toàn 2.</p>\n",
       "<p>Gặp 2 và đổi với <code>high</code> thì <strong>không tăng <code>mid</code></strong> — phần tử vừa đổi về chưa được xét.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const a = [2, 0, 2, 1, 1, 0]; sortColors(a); return a;",
        "label": "[2,0,2,1,1,0]",
        "expected": [
         0,
         0,
         1,
         1,
         2,
         2
        ]
       },
       {
        "code": "const a = [2, 0, 1]; sortColors(a); return a;",
        "label": "[2,0,1]",
        "expected": [
         0,
         1,
         2
        ]
       },
       {
        "code": "const a = [0]; sortColors(a); return a;",
        "label": "[0]",
        "expected": [
         0
        ]
       },
       {
        "code": "const a = [2, 2, 1, 1, 0, 0]; sortColors(a); return a;",
        "label": "giảm dần",
        "expected": [
         0,
         0,
         1,
         1,
         2,
         2
        ]
       }
      ]
     },
     {
      "id": "merge-intervals",
      "title": "Merge Intervals",
      "difficulty": "medium",
      "prompt": "<p>Cho mảng các khoảng <code>[start, end]</code>, gộp mọi khoảng <strong>chồng lấn</strong> (kể cả chạm nhau như <code>[1,4]</code> và <code>[4,5]</code>) và trả về các khoảng không chồng lấn, <strong>sắp theo start</strong>. (LeetCode 56)</p>\n<p><code>[[1,3],[2,6],[8,10],[15,18]]</code> → <code>[[1,6],[8,10],[15,18]]</code></p>\n",
      "fn": "merge",
      "starter": "function merge(intervals) {\n\n}\n",
      "solution": "function merge(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const result = [];\n  for (const [start, end] of sorted) {\n    const last = result[result.length - 1];\n    if (last && start <= last[1]) {\n      last[1] = Math.max(last[1], end);\n    } else {\n      result.push([start, end]);\n    }\n  }\n  return result;\n}\n",
      "explain": "<p>O(n log n) do sort. Lỗi hay gặp: quên <code>Math.max</code> — khoảng <code>[1,10]</code> gộp với <code>[2,3]</code> phải giữ end = 10.</p>\n",
      "hints": [
       "<p>Sắp xếp theo <code>start</code>. Sau đó các khoảng chồng lấn sẽ nằm <strong>liền nhau</strong>.</p>\n",
       "<p>Duyệt và so với khoảng cuối cùng trong kết quả: nếu <code>start &lt;= last.end</code> thì mở rộng <code>last.end = max(last.end, end)</code>, không thì thêm khoảng mới.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          [
           1,
           3
          ],
          [
           2,
           6
          ],
          [
           8,
           10
          ],
          [
           15,
           18
          ]
         ]
        ],
        "expected": [
         [
          1,
          6
         ],
         [
          8,
          10
         ],
         [
          15,
          18
         ]
        ]
       },
       {
        "args": [
         [
          [
           1,
           4
          ],
          [
           4,
           5
          ]
         ]
        ],
        "expected": [
         [
          1,
          5
         ]
        ]
       },
       {
        "args": [
         [
          [
           1,
           10
          ],
          [
           2,
           3
          ]
         ]
        ],
        "expected": [
         [
          1,
          10
         ]
        ]
       },
       {
        "args": [
         [
          [
           5,
           6
          ],
          [
           1,
           2
          ]
         ]
        ],
        "expected": [
         [
          1,
          2
         ],
         [
          5,
          6
         ]
        ]
       },
       {
        "args": [
         []
        ],
        "expected": []
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-trees",
    "title": "Cây nhị phân (Binary Tree)",
    "html": "<p>Mỗi node có tối đa <strong>hai con</strong>: <code>left</code> và <code>right</code>. Cây là chủ đề phỏng vấn <strong>phổ biến nhất</strong> sau mảng/chuỗi, và gần như mọi bài đều giải bằng đệ quy theo cùng một khuôn.</p>\n<pre class=\"code\"><code class=\"language-js\">class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n//        1\n//       / \\\n//      2   3\n//     / \\\n//    4   5</code></pre>\n<h2>Khuôn đệ quy trên cây</h2>\n<blockquote><p>Đáp án cho cây gốc <code>root</code> = <strong>kết hợp</strong>(đáp án cây con trái, đáp án cây con phải, <code>root.val</code>). Base case: <code>root === null</code>.</p>\n</blockquote>\n<pre class=\"code\" data-run><code class=\"language-js\">class TreeNode { constructor(v, l = null, r = null) { this.val = v; this.left = l; this.right = r; } }\nconst root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));\n\nconst countNodes = (n) =&gt; (n === null ? 0 : 1 + countNodes(n.left) + countNodes(n.right));\nconst sumTree = (n) =&gt; (n === null ? 0 : n.val + sumTree(n.left) + sumTree(n.right));\nconst height = (n) =&gt; (n === null ? 0 : 1 + Math.max(height(n.left), height(n.right)));\n\nconsole.log(countNodes(root), sumTree(root), height(root)); // 5 15 3</code></pre>\n<h2>Duyệt theo chiều sâu (DFS): 3 thứ tự</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">class TreeNode { constructor(v, l = null, r = null) { this.val = v; this.left = l; this.right = r; } }\nconst root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));\n\nconst pre = [], ino = [], post = [];\nfunction dfs(n) {\n  if (!n) return;\n  pre.push(n.val);   // preorder: gốc → trái → phải\n  dfs(n.left);\n  ino.push(n.val);   // inorder: trái → gốc → phải\n  dfs(n.right);\n  post.push(n.val);  // postorder: trái → phải → gốc\n}\ndfs(root);\nconsole.log(&quot;pre &quot;, pre);   // [1, 2, 4, 5, 3]\nconsole.log(&quot;in  &quot;, ino);   // [4, 2, 5, 1, 3]\nconsole.log(&quot;post&quot;, post);  // [4, 5, 2, 3, 1]</code></pre>\n<ul><li><strong>Preorder</strong>: sao chép cây, in cấu trúc thư mục.</li><li><strong>Inorder</strong>: trên <strong>BST</strong> cho ra dãy <strong>tăng dần</strong>.</li><li><strong>Postorder</strong>: cần kết quả của con trước khi xử lý cha (tính chiều cao, xoá cây).</li></ul>\n<h2>Duyệt theo chiều rộng (BFS) — từng tầng</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">class TreeNode { constructor(v, l = null, r = null) { this.val = v; this.left = l; this.right = r; } }\nconst root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));\n\nfunction levels(root) {\n  if (!root) return [];\n  const result = [];\n  let current = [root];\n  while (current.length) {\n    result.push(current.map((n) =&gt; n.val));\n    const next = [];\n    for (const n of current) {\n      if (n.left) next.push(n.left);\n      if (n.right) next.push(n.right);\n    }\n    current = next;\n  }\n  return result;\n}\nconsole.log(levels(root)); // [[1], [2, 3], [4, 5]]</code></pre>\n<p>BFS dùng cho: duyệt theo tầng, <strong>đường đi ngắn nhất</strong> (số cạnh ít nhất), node gần gốc nhất thoả điều kiện.</p>\n<h2>Cây nhị phân tìm kiếm (BST)</h2>\n<p>Với mọi node: <strong>mọi</strong> giá trị cây con trái &lt; node &lt; <strong>mọi</strong> giá trị cây con phải. Tìm/chèn/xoá O(h) với h là chiều cao: O(log n) nếu cây cân bằng, O(n) nếu cây lệch (thành &quot;linked list&quot;).</p>\n<h2>Định dạng trong bài tập</h2>\n<p>Cây được cho dưới dạng mảng <strong>theo tầng</strong> kiểu LeetCode, <code>null</code> là vị trí trống: <code>[3, 9, 20, null, null, 15, 7]</code> là</p>\n<pre class=\"code\"><code class=\"language-text\">    3\n   / \\\n  9  20\n     / \\\n    15  7</code></pre>\n<p>Hàm <code>buildTree(arr)</code> và <code>toArray(root)</code> đã có sẵn trong mỗi bài.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>DFS đệ quy dùng O(h) bộ nhớ (call stack), BFS dùng O(w) (w = số node ở tầng rộng nhất). Với cây cân bằng hoàn hảo, cái nào tốn hơn? Với cây lệch thì sao?</li><li>Tại sao kiểm tra BST chỉ bằng <code>node.left.val &lt; node.val &lt; node.right.val</code> là <strong>sai</strong>? Tìm một phản ví dụ.</li></ul>\n",
    "source": "content/03-dsa/10-trees.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "max-depth",
      "title": "Chiều sâu lớn nhất",
      "difficulty": "easy",
      "prompt": "<p>Trả về số node trên đường đi dài nhất từ gốc tới lá. Cây rỗng có độ sâu 0. (LeetCode 104)</p>\n",
      "fn": "maxDepth",
      "starter": "function maxDepth(root) {\n\n}\n",
      "solution": "function maxDepth(root) {\n  if (root === null) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n",
      "explain": "",
      "hints": [
       "<p>Khuôn đệ quy: rỗng → 0; còn lại → 1 + max(độ sâu trái, độ sâu phải).</p>\n"
      ],
      "followUp": "",
      "helpers": "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n// buildTree([3, 9, 20, null, null, 15, 7]) → cây theo định dạng tầng của LeetCode\nfunction buildTree(arr) {\n  if (!arr.length || arr[0] === null) return null;\n  const root = new TreeNode(arr[0]);\n  const queue = [root];\n  let i = 1;\n  for (let head = 0; head < queue.length && i < arr.length; head++) {\n    const node = queue[head];\n    if (i < arr.length && arr[i] !== null) queue.push((node.left = new TreeNode(arr[i])));\n    i++;\n    if (i < arr.length && arr[i] !== null) queue.push((node.right = new TreeNode(arr[i])));\n    i++;\n  }\n  return root;\n}\n// toArray(root) → mảng theo tầng (bỏ các null ở cuối)\nfunction toArray(root) {\n  const out = [];\n  const queue = [root];\n  for (let head = 0; head < queue.length; head++) {\n    const node = queue[head];\n    if (node) {\n      out.push(node.val);\n      queue.push(node.left, node.right);\n    } else {\n      out.push(null);\n    }\n  }\n  while (out.length && out[out.length - 1] === null) out.pop();\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return maxDepth(buildTree([3, 9, 20, null, null, 15, 7]));",
        "label": "[3,9,20,null,null,15,7]",
        "expected": 3
       },
       {
        "code": "return maxDepth(buildTree([1, null, 2]));",
        "label": "[1,null,2]",
        "expected": 2
       },
       {
        "code": "return maxDepth(null);",
        "label": "cây rỗng",
        "expected": 0
       },
       {
        "code": "return maxDepth(buildTree([1, 2, null, 3, null, 4]));",
        "label": "cây lệch trái",
        "expected": 4
       }
      ]
     },
     {
      "id": "invert-tree",
      "title": "Lật cây (Invert Binary Tree)",
      "difficulty": "easy",
      "prompt": "<p>Lật cây theo gương: đổi chỗ con trái và con phải ở <strong>mọi</strong> node. Trả về gốc. (LeetCode 226)</p>\n",
      "fn": "invertTree",
      "starter": "function invertTree(root) {\n\n}\n",
      "solution": "function invertTree(root) {\n  if (root === null) return null;\n  const left = invertTree(root.left);\n  root.left = invertTree(root.right);\n  root.right = left;\n  return root;\n}\n",
      "explain": "",
      "hints": [
       "<p>Lật cây con trái, lật cây con phải, rồi đổi chỗ chúng. Nhớ lưu tạm một bên trước khi gán đè.</p>\n"
      ],
      "followUp": "",
      "helpers": "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n// buildTree([3, 9, 20, null, null, 15, 7]) → cây theo định dạng tầng của LeetCode\nfunction buildTree(arr) {\n  if (!arr.length || arr[0] === null) return null;\n  const root = new TreeNode(arr[0]);\n  const queue = [root];\n  let i = 1;\n  for (let head = 0; head < queue.length && i < arr.length; head++) {\n    const node = queue[head];\n    if (i < arr.length && arr[i] !== null) queue.push((node.left = new TreeNode(arr[i])));\n    i++;\n    if (i < arr.length && arr[i] !== null) queue.push((node.right = new TreeNode(arr[i])));\n    i++;\n  }\n  return root;\n}\n// toArray(root) → mảng theo tầng (bỏ các null ở cuối)\nfunction toArray(root) {\n  const out = [];\n  const queue = [root];\n  for (let head = 0; head < queue.length; head++) {\n    const node = queue[head];\n    if (node) {\n      out.push(node.val);\n      queue.push(node.left, node.right);\n    } else {\n      out.push(null);\n    }\n  }\n  while (out.length && out[out.length - 1] === null) out.pop();\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return toArray(invertTree(buildTree([4, 2, 7, 1, 3, 6, 9])));",
        "label": "[4,2,7,1,3,6,9]",
        "expected": [
         4,
         7,
         2,
         9,
         6,
         3,
         1
        ]
       },
       {
        "code": "return toArray(invertTree(buildTree([2, 1, 3])));",
        "label": "[2,1,3]",
        "expected": [
         2,
         3,
         1
        ]
       },
       {
        "code": "return invertTree(null);",
        "label": "cây rỗng",
        "expected": null
       },
       {
        "code": "return toArray(invertTree(buildTree([1, 2])));",
        "label": "[1,2]",
        "expected": [
         1,
         null,
         2
        ]
       }
      ]
     },
     {
      "id": "inorder-iterative",
      "title": "Duyệt inorder không đệ quy",
      "difficulty": "medium",
      "prompt": "<p>Trả về mảng giá trị theo thứ tự <strong>inorder</strong> (trái → gốc → phải), <strong>không dùng đệ quy</strong>. Test có cây lệch sâu 100.000 tầng — đệ quy sẽ tràn stack.</p>\n",
      "fn": "inorderTraversal",
      "starter": "function inorderTraversal(root) {\n  const result = [];\n  function dfs(node) {\n    if (!node) return;\n    dfs(node.left);\n    result.push(node.val);\n    dfs(node.right);\n  }\n  dfs(root);\n  return result;\n}\n",
      "solution": "function inorderTraversal(root) {\n  const result = [];\n  const stack = [];\n  let node = root;\n  while (node || stack.length) {\n    while (node) {\n      stack.push(node);\n      node = node.left;\n    }\n    node = stack.pop();\n    result.push(node.val);\n    node = node.right;\n  }\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Tự quản lý stack: đi sang trái hết mức, đẩy từng node vào stack.</p>\n",
       "<p>Pop một node → ghi giá trị → chuyển sang cây con phải của nó và lặp lại.</p>\n"
      ],
      "followUp": "",
      "helpers": "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n// buildTree([3, 9, 20, null, null, 15, 7]) → cây theo định dạng tầng của LeetCode\nfunction buildTree(arr) {\n  if (!arr.length || arr[0] === null) return null;\n  const root = new TreeNode(arr[0]);\n  const queue = [root];\n  let i = 1;\n  for (let head = 0; head < queue.length && i < arr.length; head++) {\n    const node = queue[head];\n    if (i < arr.length && arr[i] !== null) queue.push((node.left = new TreeNode(arr[i])));\n    i++;\n    if (i < arr.length && arr[i] !== null) queue.push((node.right = new TreeNode(arr[i])));\n    i++;\n  }\n  return root;\n}\n// toArray(root) → mảng theo tầng (bỏ các null ở cuối)\nfunction toArray(root) {\n  const out = [];\n  const queue = [root];\n  for (let head = 0; head < queue.length; head++) {\n    const node = queue[head];\n    if (node) {\n      out.push(node.val);\n      queue.push(node.left, node.right);\n    } else {\n      out.push(null);\n    }\n  }\n  while (out.length && out[out.length - 1] === null) out.pop();\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return inorderTraversal(buildTree([1, null, 2, 3]));",
        "label": "[1,null,2,3]",
        "expected": [
         1,
         3,
         2
        ]
       },
       {
        "code": "return inorderTraversal(buildTree([4, 2, 6, 1, 3, 5, 7]));",
        "label": "BST [4,2,6,1,3,5,7]",
        "expected": [
         1,
         2,
         3,
         4,
         5,
         6,
         7
        ]
       },
       {
        "code": "return inorderTraversal(null);",
        "label": "cây rỗng",
        "expected": []
       },
       {
        "hidden": true,
        "code": "let root = null; for (let i = 0; i < 100000; i++) root = new TreeNode(i, root); const r = inorderTraversal(root); return r.length === 100000 && r[0] === 0 && r[99999] === 99999;",
        "label": "cây lệch 100.000 tầng",
        "expected": true
       }
      ]
     },
     {
      "id": "level-order",
      "title": "Duyệt theo tầng",
      "difficulty": "medium",
      "prompt": "<p>Trả về giá trị các node theo từng tầng, từ trái sang phải: mảng các mảng. (LeetCode 102)</p>\n<p><code>[3,9,20,null,null,15,7]</code> → <code>[[3],[9,20],[15,7]]</code></p>\n",
      "fn": "levelOrder",
      "starter": "function levelOrder(root) {\n\n}\n",
      "solution": "function levelOrder(root) {\n  if (!root) return [];\n  const result = [];\n  const queue = [root];\n  let head = 0;\n  while (head < queue.length) {\n    const levelSize = queue.length - head;\n    const level = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue[head++];\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(level);\n  }\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>BFS bằng queue. Mẹo tách tầng: trước khi xử lý mỗi tầng, ghi lại số node đang có trong queue — đó là kích thước tầng hiện tại.</p>\n",
       "<p>Hoặc dùng hai mảng <code>current</code> và <code>next</code> như trong bài học.</p>\n"
      ],
      "followUp": "",
      "helpers": "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n// buildTree([3, 9, 20, null, null, 15, 7]) → cây theo định dạng tầng của LeetCode\nfunction buildTree(arr) {\n  if (!arr.length || arr[0] === null) return null;\n  const root = new TreeNode(arr[0]);\n  const queue = [root];\n  let i = 1;\n  for (let head = 0; head < queue.length && i < arr.length; head++) {\n    const node = queue[head];\n    if (i < arr.length && arr[i] !== null) queue.push((node.left = new TreeNode(arr[i])));\n    i++;\n    if (i < arr.length && arr[i] !== null) queue.push((node.right = new TreeNode(arr[i])));\n    i++;\n  }\n  return root;\n}\n// toArray(root) → mảng theo tầng (bỏ các null ở cuối)\nfunction toArray(root) {\n  const out = [];\n  const queue = [root];\n  for (let head = 0; head < queue.length; head++) {\n    const node = queue[head];\n    if (node) {\n      out.push(node.val);\n      queue.push(node.left, node.right);\n    } else {\n      out.push(null);\n    }\n  }\n  while (out.length && out[out.length - 1] === null) out.pop();\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return levelOrder(buildTree([3, 9, 20, null, null, 15, 7]));",
        "label": "[3,9,20,null,null,15,7]",
        "expected": [
         [
          3
         ],
         [
          9,
          20
         ],
         [
          15,
          7
         ]
        ]
       },
       {
        "code": "return levelOrder(buildTree([1]));",
        "label": "[1]",
        "expected": [
         [
          1
         ]
        ]
       },
       {
        "code": "return levelOrder(null);",
        "label": "cây rỗng",
        "expected": []
       },
       {
        "code": "return levelOrder(buildTree([1, 2, 3, 4, null, null, 5]));",
        "label": "[1,2,3,4,null,null,5]",
        "expected": [
         [
          1
         ],
         [
          2,
          3
         ],
         [
          4,
          5
         ]
        ]
       }
      ]
     },
     {
      "id": "validate-bst",
      "title": "Kiểm tra BST",
      "difficulty": "medium",
      "prompt": "<p>Kiểm tra cây có phải <strong>cây nhị phân tìm kiếm</strong> hợp lệ không: với mọi node, <strong>toàn bộ</strong> cây con trái &lt; node &lt; <strong>toàn bộ</strong> cây con phải (nghiêm ngặt). (LeetCode 98)</p>\n",
      "fn": "isValidBST",
      "starter": "function isValidBST(root) {\n\n}\n",
      "solution": "function isValidBST(root, low = -Infinity, high = Infinity) {\n  if (root === null) return true;\n  if (root.val <= low || root.val >= high) return false;\n  return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high);\n}\n",
      "explain": "",
      "hints": [
       "<p>So sánh mỗi node chỉ với con trực tiếp là <strong>chưa đủ</strong>: <code>[5,4,6,null,null,3,7]</code> — 3 nằm bên phải 5 nhưng nhỏ hơn 5.</p>\n",
       "<p>Truyền xuống <strong>khoảng hợp lệ</strong> <code>(low, high)</code>: đi sang trái thì cận trên thành giá trị node; sang phải thì cận dưới thành giá trị node.</p>\n",
       "<p>Cách khác: duyệt inorder và kiểm tra dãy tăng nghiêm ngặt.</p>\n"
      ],
      "followUp": "",
      "helpers": "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n// buildTree([3, 9, 20, null, null, 15, 7]) → cây theo định dạng tầng của LeetCode\nfunction buildTree(arr) {\n  if (!arr.length || arr[0] === null) return null;\n  const root = new TreeNode(arr[0]);\n  const queue = [root];\n  let i = 1;\n  for (let head = 0; head < queue.length && i < arr.length; head++) {\n    const node = queue[head];\n    if (i < arr.length && arr[i] !== null) queue.push((node.left = new TreeNode(arr[i])));\n    i++;\n    if (i < arr.length && arr[i] !== null) queue.push((node.right = new TreeNode(arr[i])));\n    i++;\n  }\n  return root;\n}\n// toArray(root) → mảng theo tầng (bỏ các null ở cuối)\nfunction toArray(root) {\n  const out = [];\n  const queue = [root];\n  for (let head = 0; head < queue.length; head++) {\n    const node = queue[head];\n    if (node) {\n      out.push(node.val);\n      queue.push(node.left, node.right);\n    } else {\n      out.push(null);\n    }\n  }\n  while (out.length && out[out.length - 1] === null) out.pop();\n  return out;\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return isValidBST(buildTree([2, 1, 3]));",
        "label": "[2,1,3]",
        "expected": true
       },
       {
        "code": "return isValidBST(buildTree([5, 1, 4, null, null, 3, 6]));",
        "label": "[5,1,4,null,null,3,6]",
        "expected": false
       },
       {
        "code": "return isValidBST(buildTree([5, 4, 6, null, null, 3, 7]));",
        "label": "[5,4,6,null,null,3,7] (3 < 5 nằm bên phải)",
        "expected": false
       },
       {
        "code": "return isValidBST(buildTree([2, 2, 2]));",
        "label": "giá trị bằng nhau",
        "expected": false
       },
       {
        "code": "return isValidBST(null);",
        "label": "cây rỗng",
        "expected": true
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-heap",
    "title": "Heap / Priority Queue",
    "html": "<p><strong>Heap</strong> (đống) cho phép: thêm phần tử O(log n), lấy phần tử <strong>nhỏ nhất</strong> (min-heap) hoặc lớn nhất (max-heap) O(log n), xem nó O(1).</p>\n<p>JS <strong>không có sẵn</strong> heap — và rất nhiều bài phỏng vấn cần nó (top K, Dijkstra, gộp k danh sách, lịch trình). Hãy viết đến mức <strong>thuộc lòng</strong>.</p>\n<h2>Cấu trúc: cây nhị phân hoàn chỉnh lưu trong mảng</h2>\n<ul><li>Node ở vị trí <code>i</code> có con trái <code>2i + 1</code>, con phải <code>2i + 2</code>, cha <code>(i - 1) &gt;&gt; 1</code>.</li><li><strong>Tính chất heap</strong>: cha ≤ các con (min-heap). Phần tử nhỏ nhất luôn ở <code>heap[0]</code>.</li></ul>\n<pre class=\"code\"><code class=\"language-text\">mảng:   [1, 3, 2, 7, 4, 5]\n             1\n           /   \\\n          3     2\n         / \\   /\n        7   4 5</code></pre>\n<h2>Hai thao tác cốt lõi</h2>\n<ul><li><strong>push</strong>: thêm vào cuối, rồi <strong>nổi lên</strong> (sift up): đổi chỗ với cha khi còn nhỏ hơn cha.</li><li><strong>pop</strong>: lấy <code>heap[0]</code>, đưa phần tử cuối lên gốc, rồi <strong>chìm xuống</strong> (sift down): đổi chỗ với con nhỏ hơn khi còn lớn hơn con.</li></ul>\n<p>Cây hoàn chỉnh có chiều cao log n → mỗi thao tác O(log n).</p>\n<pre class=\"code\" data-run><code class=\"language-js\">class MinHeap {\n  constructor(compare = (a, b) =&gt; a - b) {\n    this.data = [];\n    this.compare = compare;          // dùng comparator → biến thành max-heap hoặc heap của object\n  }\n  get size() { return this.data.length; }\n  peek() { return this.data[0]; }\n  push(x) {\n    const d = this.data;\n    d.push(x);\n    let i = d.length - 1;\n    while (i &gt; 0) {\n      const p = (i - 1) &gt;&gt; 1;\n      if (this.compare(d[i], d[p]) &gt;= 0) break;\n      [d[i], d[p]] = [d[p], d[i]];\n      i = p;\n    }\n  }\n  pop() {\n    const d = this.data;\n    if (d.length === 0) return undefined;\n    const top = d[0];\n    const last = d.pop();\n    if (d.length &gt; 0) {\n      d[0] = last;\n      let i = 0;\n      for (;;) {\n        const l = 2 * i + 1, r = l + 1;\n        let m = i;\n        if (l &lt; d.length &amp;&amp; this.compare(d[l], d[m]) &lt; 0) m = l;\n        if (r &lt; d.length &amp;&amp; this.compare(d[r], d[m]) &lt; 0) m = r;\n        if (m === i) break;\n        [d[i], d[m]] = [d[m], d[i]];\n        i = m;\n      }\n    }\n    return top;\n  }\n}\n\nconst h = new MinHeap();\n[5, 1, 8, 3, 2].forEach((x) =&gt; h.push(x));\nconst out = [];\nwhile (h.size) out.push(h.pop());\nconsole.log(out); // [1, 2, 3, 5, 8]\n\nconst maxHeap = new MinHeap((a, b) =&gt; b - a);    // max-heap\n[5, 1, 8].forEach((x) =&gt; maxHeap.push(x));\nconsole.log(maxHeap.pop());                        // 8\n\nconst tasks = new MinHeap((a, b) =&gt; a.priority - b.priority);\ntasks.push({ name: &quot;email&quot;, priority: 3 });\ntasks.push({ name: &quot;bug gấp&quot;, priority: 1 });\nconsole.log(tasks.pop().name);                     // &quot;bug gấp&quot;</code></pre>\n<h2>Mẫu &quot;Top K&quot; với heap kích thước k</h2>\n<p>Tìm k phần tử <strong>lớn nhất</strong>: giữ một <strong>min-heap</strong> kích thước k. Mỗi phần tử mới: push vào; nếu heap vượt k thì pop phần tử nhỏ nhất ra. Cuối cùng heap chứa k phần tử lớn nhất, <code>peek()</code> chính là phần tử lớn thứ k.</p>\n<ul><li>O(n log k) thời gian, O(k) bộ nhớ — tốt hơn sort O(n log n) khi k nhỏ, và chạy được trên <strong>stream</strong> dữ liệu vô hạn.</li></ul>\n<h2>Khi nào dùng heap?</h2>\n<ul><li>&quot;K lớn nhất / nhỏ nhất / gần nhất / phổ biến nhất&quot;.</li><li>Liên tục cần lấy phần tử &quot;tốt nhất&quot; trong khi tập hợp <strong>thay đổi</strong>: Dijkstra, lập lịch, mô phỏng sự kiện.</li><li>Gộp k dãy đã sắp xếp.</li><li>Trung vị của luồng dữ liệu (hai heap).</li></ul>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Sorted array cũng lấy min O(1). Tại sao vẫn cần heap? (So sánh chi phí <strong>thêm</strong> phần tử.)</li><li>Tìm phần tử lớn thứ k: heap O(n log k), quickselect trung bình O(n). Vì sao trong phỏng vấn người ta vẫn hay chọn heap?</li><li>Xây heap từ n phần tử có sẵn có thể làm trong O(n) chứ không phải O(n log n). Tại sao? (Tìm hiểu &quot;heapify&quot;.)</li></ul>\n",
    "source": "content/03-dsa/11-heap.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "implement-min-heap",
      "title": "Tự cài đặt MinHeap",
      "difficulty": "medium",
      "prompt": "<p>Cài đặt class <code>MinHeap</code> với:</p>\n<ul><li><code>push(x)</code>: O(log n)</li><li><code>pop()</code>: lấy ra và trả về phần tử nhỏ nhất, O(log n). Heap rỗng → <code>undefined</code></li><li><code>peek()</code>: xem phần tử nhỏ nhất, O(1)</li><li>getter <code>size</code></li></ul>\n<p>Cố gắng tự viết <strong>không nhìn</strong> code trong bài học. Test ẩn thực hiện 200.000 thao tác.</p>\n",
      "fn": null,
      "starter": "class MinHeap {\n  constructor() {\n    this.data = [];\n  }\n  get size() {\n    return this.data.length;\n  }\n  peek() {\n\n  }\n  push(x) {\n\n  }\n  pop() {\n\n  }\n}\n",
      "solution": "class MinHeap {\n  constructor() {\n    this.data = [];\n  }\n  get size() {\n    return this.data.length;\n  }\n  peek() {\n    return this.data[0];\n  }\n  push(x) {\n    const d = this.data;\n    d.push(x);\n    let i = d.length - 1;\n    while (i > 0) {\n      const p = (i - 1) >> 1;\n      if (d[p] <= d[i]) break;\n      [d[i], d[p]] = [d[p], d[i]];\n      i = p;\n    }\n  }\n  pop() {\n    const d = this.data;\n    if (d.length === 0) return undefined;\n    const top = d[0];\n    const last = d.pop();\n    if (d.length > 0) {\n      d[0] = last;\n      let i = 0;\n      while (true) {\n        const l = 2 * i + 1;\n        const r = l + 1;\n        let m = i;\n        if (l < d.length && d[l] < d[m]) m = l;\n        if (r < d.length && d[r] < d[m]) m = r;\n        if (m === i) break;\n        [d[i], d[m]] = [d[m], d[i]];\n        i = m;\n      }\n    }\n    return top;\n  }\n}\n",
      "explain": "",
      "hints": [
       "<p>Chỉ số: con trái <code>2i + 1</code>, con phải <code>2i + 2</code>, cha <code>(i - 1) &gt;&gt; 1</code>.</p>\n",
       "<p>push: thêm cuối mảng, đổi chỗ với cha khi nhỏ hơn cha.</p>\n",
       "<p>pop: lưu <code>data[0]</code>, <code>pop()</code> phần tử cuối và đặt vào vị trí 0 (nếu mảng còn phần tử), rồi đổi chỗ với <strong>con nhỏ hơn</strong> khi còn lớn hơn nó.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const h = new MinHeap(); [5, 1, 8, 3, 2].forEach((x) => h.push(x)); return [h.peek(), h.size];",
        "label": "push 5,1,8,3,2 → peek, size",
        "expected": [
         1,
         5
        ]
       },
       {
        "code": "const h = new MinHeap(); [5, 1, 8, 3, 2, 9, 0].forEach((x) => h.push(x)); const out = []; while (h.size) out.push(h.pop()); return out;",
        "label": "pop hết ra theo thứ tự tăng dần",
        "expected": [
         0,
         1,
         2,
         3,
         5,
         8,
         9
        ]
       },
       {
        "code": "const h = new MinHeap(); return [h.pop(), h.peek(), h.size];",
        "label": "heap rỗng",
        "expected": [
         undefined,
         undefined,
         0
        ]
       },
       {
        "code": "const h = new MinHeap(); h.push(4); h.push(4); h.push(1); return [h.pop(), h.pop(), h.pop(), h.pop()];",
        "label": "giá trị trùng",
        "expected": [
         1,
         4,
         4,
         undefined
        ]
       },
       {
        "hidden": true,
        "code": "const h = new MinHeap(); let x = 7; for (let i = 0; i < 100000; i++) { x = (x * 48271) % 2147483647; h.push(x); } let prev = -1; for (let i = 0; i < 100000; i++) { const v = h.pop(); if (v < prev) return \"sai thứ tự ở lần pop \" + i; prev = v; } return h.size;",
        "label": "100.000 push + 100.000 pop",
        "expected": 0
       }
      ]
     },
     {
      "id": "kth-largest",
      "title": "Phần tử lớn thứ K",
      "difficulty": "medium",
      "prompt": "<p>Trả về phần tử lớn thứ <code>k</code> (theo thứ tự đã sắp xếp, không phải thứ k khác nhau). Class <code>MinHeap</code> đã có sẵn. (LeetCode 215)</p>\n<p><code>findKthLargest([3,2,1,5,6,4], 2)</code> → <code>5</code></p>\n<p>Hãy làm O(n log k) bằng heap kích thước k thay vì sort.</p>\n",
      "fn": "findKthLargest",
      "starter": "function findKthLargest(nums, k) {\n\n}\n",
      "solution": "function findKthLargest(nums, k) {\n  const heap = new MinHeap();\n  for (const x of nums) {\n    heap.push(x);\n    if (heap.size > k) heap.pop();\n  }\n  return heap.peek();\n}\n",
      "explain": "",
      "hints": [
       "<p>Giữ min-heap chứa k phần tử lớn nhất đã gặp.</p>\n",
       "<p>Push từng phần tử; khi <code>heap.size &gt; k</code> thì <code>pop()</code> (bỏ phần tử nhỏ nhất). Đáp án là <code>heap.peek()</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "// MinHeap có sẵn: new MinHeap(compare?) · push(x) · pop() · peek() · size\nclass MinHeap {\n  constructor(compare = (a, b) => a - b) { this.data = []; this.compare = compare; }\n  get size() { return this.data.length; }\n  peek() { return this.data[0]; }\n  push(x) {\n    const d = this.data; d.push(x);\n    for (let i = d.length - 1; i > 0;) {\n      const p = (i - 1) >> 1;\n      if (this.compare(d[i], d[p]) >= 0) break;\n      [d[i], d[p]] = [d[p], d[i]]; i = p;\n    }\n  }\n  pop() {\n    const d = this.data; if (!d.length) return undefined;\n    const top = d[0], last = d.pop();\n    if (d.length) {\n      d[0] = last;\n      for (let i = 0; ;) {\n        const l = 2 * i + 1, r = l + 1; let m = i;\n        if (l < d.length && this.compare(d[l], d[m]) < 0) m = l;\n        if (r < d.length && this.compare(d[r], d[m]) < 0) m = r;\n        if (m === i) break;\n        [d[i], d[m]] = [d[m], d[i]]; i = m;\n      }\n    }\n    return top;\n  }\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          3,
          2,
          1,
          5,
          6,
          4
         ],
         2
        ],
        "expected": 5
       },
       {
        "args": [
         [
          3,
          2,
          3,
          1,
          2,
          4,
          5,
          5,
          6
         ],
         4
        ],
        "expected": 4
       },
       {
        "args": [
         [
          1
         ],
         1
        ],
        "expected": 1
       },
       {
        "args": [
         [
          -1,
          -1
         ],
         2
        ],
        "expected": -1
       },
       {
        "gen": "return [Array.from({ length: 200000 }, (_, i) => (i * 7919) % 200003), 10];",
        "label": "n = 200.000, k = 10",
        "expected": 199993
       }
      ]
     },
     {
      "id": "merge-k-sorted",
      "title": "Gộp K mảng đã sắp xếp",
      "difficulty": "hard",
      "prompt": "<p>Cho <code>k</code> mảng, mỗi mảng đã sắp xếp tăng dần. Gộp thành một mảng sắp xếp tăng dần. Tổng số phần tử N lên tới 200.000, k lên tới 2.000.</p>\n<p>Yêu cầu O(N log k). (Phiên bản mảng của LeetCode 23)</p>\n",
      "fn": "mergeKSorted",
      "starter": "function mergeKSorted(arrays) {\n\n}\n",
      "solution": "function mergeKSorted(arrays) {\n  const heap = new MinHeap((a, b) => a[0] - b[0]);\n  arrays.forEach((arr, i) => {\n    if (arr.length) heap.push([arr[0], i, 0]);\n  });\n  const result = [];\n  while (heap.size) {\n    const [value, i, j] = heap.pop();\n    result.push(value);\n    if (j + 1 < arrays[i].length) heap.push([arrays[i][j + 1], i, j + 1]);\n  }\n  return result;\n}\n",
      "explain": "<p>Mỗi phần tử vào/ra heap một lần, heap có ≤ k phần tử → O(N log k). Cách nối hết rồi sort là O(N log N) — chạy được nhưng không tận dụng việc các mảng đã sắp xếp. Cách gộp lần lượt từng mảng là O(N·k).</p>\n",
      "hints": [
       "<p>Heap luôn chứa <strong>phần tử hiện tại</strong> (nhỏ nhất chưa lấy) của mỗi mảng: tối đa k phần tử.</p>\n",
       "<p>Lưu bộ ba <code>[giá trị, chỉ số mảng, chỉ số trong mảng]</code> và dùng comparator theo giá trị. Pop xong thì push phần tử kế tiếp của cùng mảng đó.</p>\n"
      ],
      "followUp": "",
      "helpers": "// MinHeap có sẵn: new MinHeap(compare?) · push(x) · pop() · peek() · size\nclass MinHeap {\n  constructor(compare = (a, b) => a - b) { this.data = []; this.compare = compare; }\n  get size() { return this.data.length; }\n  peek() { return this.data[0]; }\n  push(x) {\n    const d = this.data; d.push(x);\n    for (let i = d.length - 1; i > 0;) {\n      const p = (i - 1) >> 1;\n      if (this.compare(d[i], d[p]) >= 0) break;\n      [d[i], d[p]] = [d[p], d[i]]; i = p;\n    }\n  }\n  pop() {\n    const d = this.data; if (!d.length) return undefined;\n    const top = d[0], last = d.pop();\n    if (d.length) {\n      d[0] = last;\n      for (let i = 0; ;) {\n        const l = 2 * i + 1, r = l + 1; let m = i;\n        if (l < d.length && this.compare(d[l], d[m]) < 0) m = l;\n        if (r < d.length && this.compare(d[r], d[m]) < 0) m = r;\n        if (m === i) break;\n        [d[i], d[m]] = [d[m], d[i]]; i = m;\n      }\n    }\n    return top;\n  }\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          [
           1,
           4,
           5
          ],
          [
           1,
           3,
           4
          ],
          [
           2,
           6
          ]
         ]
        ],
        "expected": [
         1,
         1,
         2,
         3,
         4,
         4,
         5,
         6
        ]
       },
       {
        "args": [
         []
        ],
        "expected": []
       },
       {
        "args": [
         [
          [],
          [],
          [
           7
          ]
         ]
        ],
        "expected": [
         7
        ]
       },
       {
        "args": [
         [
          [
           -3,
           10
          ],
          [
           -5,
           0,
           0,
           20
          ]
         ]
        ],
        "expected": [
         -5,
         -3,
         0,
         0,
         10,
         20
        ]
       },
       {
        "gen": "return [Array.from({ length: 2000 }, (_, i) => Array.from({ length: 100 }, (_, j) => j * 2000 + i))];",
        "check": "if (result.length !== 200000) return false; for (let i = 0; i < result.length; i++) if (result[i] !== i) return false; return true;",
        "label": "k = 2.000 mảng × 100 phần tử",
        "expectedText": "[0, 1, 2, ..., 199999]"
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-graphs",
    "title": "Đồ thị (Graph): BFS, DFS, sắp xếp topo",
    "html": "<p>Đồ thị gồm <strong>đỉnh</strong> (node) và <strong>cạnh</strong> (edge) nối chúng. Mạng xã hội, bản đồ, phụ thuộc giữa các module, lưới ô vuông trong game — đều là đồ thị.</p>\n<h2>Biểu diễn: danh sách kề (adjacency list)</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">// Cạnh vô hướng: [[0,1],[0,2],[1,3]]\nfunction buildGraph(n, edges) {\n  const adj = Array.from({ length: n }, () =&gt; []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);        // bỏ dòng này nếu đồ thị CÓ HƯỚNG\n  }\n  return adj;\n}\nconsole.log(buildGraph(4, [[0, 1], [0, 2], [1, 3]])); // [[1,2],[0,3],[0],[1]]</code></pre>\n<p>Danh sách kề tốn O(V + E) bộ nhớ. (Ma trận kề V×V chỉ hợp khi đồ thị dày.)</p>\n<h2>BFS — lan theo từng lớp, tìm đường ngắn nhất</h2>\n<p>Trên đồ thị <strong>không trọng số</strong>, BFS từ nguồn cho ra <strong>khoảng cách ngắn nhất</strong> (số cạnh) tới mọi đỉnh.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function bfsDistances(adj, start) {\n  const dist = new Array(adj.length).fill(-1);\n  dist[start] = 0;\n  const queue = [start];\n  for (let head = 0; head &lt; queue.length; head++) {\n    const u = queue[head];\n    for (const v of adj[u]) {\n      if (dist[v] === -1) {          // chưa thăm\n        dist[v] = dist[u] + 1;\n        queue.push(v);\n      }\n    }\n  }\n  return dist;\n}\nconst adj = [[1, 2], [0, 3], [0, 3], [1, 2, 4], [3]];\nconsole.log(bfsDistances(adj, 0)); // [0, 1, 1, 2, 3]</code></pre>\n<blockquote><p>Đánh dấu &quot;đã thăm&quot; <strong>khi đưa vào queue</strong>, không phải khi lấy ra — nếu không, một đỉnh có thể bị đưa vào queue nhiều lần.</p>\n</blockquote>\n<h2>DFS — đi sâu hết mức rồi quay lui</h2>\n<p>Dùng để: duyệt mọi đỉnh liên thông, đếm thành phần liên thông, phát hiện chu trình, sắp xếp topo.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function countComponents(n, adj) {\n  const seen = new Array(n).fill(false);\n  function dfs(u) {\n    seen[u] = true;\n    for (const v of adj[u]) if (!seen[v]) dfs(v);\n  }\n  let count = 0;\n  for (let u = 0; u &lt; n; u++) {\n    if (!seen[u]) {\n      count++;\n      dfs(u);\n    }\n  }\n  return count;\n}\nconsole.log(countComponents(5, [[1], [0], [3], [2], []])); // 3: {0,1} {2,3} {4}</code></pre>\n<h2>Lưới (grid) là đồ thị ngầm</h2>\n<p>Mỗi ô là một đỉnh, nối với 4 ô kề. Không cần xây danh sách kề — duyệt hàng xóm bằng mảng hướng:</p>\n<pre class=\"code\"><code class=\"language-js\">const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];\nfor (const [dr, dc] of DIRS) {\n  const nr = r + dr, nc = c + dc;\n  if (nr &lt; 0 || nr &gt;= rows || nc &lt; 0 || nc &gt;= cols) continue; // ra ngoài lưới\n  // ...\n}</code></pre>\n<h2>Sắp xếp topo (topological sort) — thứ tự phụ thuộc</h2>\n<p>Với đồ thị <strong>có hướng không chu trình</strong> (DAG): sắp các đỉnh sao cho mọi cạnh <code>u → v</code> thì <code>u</code> đứng trước <code>v</code>. Ví dụ: thứ tự học môn (môn tiên quyết), thứ tự build module.</p>\n<p><strong>Thuật toán Kahn:</strong> lần lượt lấy các đỉnh có <strong>bậc vào = 0</strong> (không còn phụ thuộc), &quot;xoá&quot; chúng và giảm bậc vào của hàng xóm. Nếu cuối cùng không lấy được hết đỉnh → đồ thị <strong>có chu trình</strong>.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function topoSort(n, edges) {\n  const adj = Array.from({ length: n }, () =&gt; []);\n  const indegree = new Array(n).fill(0);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    indegree[v]++;\n  }\n  const order = [];\n  for (let u = 0; u &lt; n; u++) if (indegree[u] === 0) order.push(u);\n  for (let head = 0; head &lt; order.length; head++) {\n    for (const v of adj[order[head]]) {\n      if (--indegree[v] === 0) order.push(v);\n    }\n  }\n  return order.length === n ? order : null; // null = có chu trình\n}\nconsole.log(topoSort(4, [[0, 1], [0, 2], [1, 3], [2, 3]])); // [0, 1, 2, 3]\nconsole.log(topoSort(2, [[0, 1], [1, 0]]));                 // null</code></pre>\n<h2>Độ phức tạp</h2>\n<p>BFS, DFS, Kahn đều <strong>O(V + E)</strong>: mỗi đỉnh thăm một lần, mỗi cạnh xét một (hoặc hai) lần.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao BFS cho đường đi ngắn nhất còn DFS thì không? Nếu cạnh có <strong>trọng số</strong> khác nhau thì BFS còn đúng không? (Tìm hiểu: Dijkstra = BFS + heap.)</li><li>DFS đệ quy trên lưới 1000×1000 có thể tràn stack. Bạn sẽ đổi sang gì?</li><li>Union-Find (Disjoint Set) cũng đếm được thành phần liên thông. Khi nào nó tốt hơn DFS? (Gợi ý: cạnh được thêm dần theo thời gian.)</li></ul>\n",
    "source": "content/03-dsa/12-graphs.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "number-of-islands",
      "title": "Đếm số đảo",
      "difficulty": "medium",
      "prompt": "<p>Lưới <code>grid</code> gồm <code>&quot;1&quot;</code> (đất) và <code>&quot;0&quot;</code> (nước). Một <strong>đảo</strong> là nhóm ô đất nối nhau theo 4 hướng (trên/dưới/trái/phải). Đếm số đảo. (LeetCode 200)</p>\n<p>Test ẩn có lưới 300×300 toàn đất xoắn ốc — DFS đệ quy có thể tràn stack, cân nhắc BFS hoặc stack tự quản lý.</p>\n",
      "fn": "numIslands",
      "starter": "function numIslands(grid) {\n\n}\n",
      "solution": "function numIslands(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));\n  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== \"1\" || seen[r][c]) continue;\n      count++;\n      seen[r][c] = true;\n      const stack = [[r, c]];\n      while (stack.length) {\n        const [cr, cc] = stack.pop();\n        for (const [dr, dc] of DIRS) {\n          const nr = cr + dr;\n          const nc = cc + dc;\n          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;\n          if (grid[nr][nc] !== \"1\" || seen[nr][nc]) continue;\n          seen[nr][nc] = true;\n          stack.push([nr, nc]);\n        }\n      }\n    }\n  }\n  return count;\n}\n",
      "explain": "",
      "hints": [
       "<p>Duyệt mọi ô. Gặp ô đất chưa thăm → tăng bộ đếm, rồi &quot;loang&quot; (DFS/BFS) đánh dấu toàn bộ đảo đó là đã thăm.</p>\n",
       "<p>Dùng stack tự quản lý thay cho đệ quy để tránh tràn stack với đảo lớn.</p>\n",
       "<p>Có thể đánh dấu bằng cách sửa <code>grid[r][c] = &quot;0&quot;</code> — nhanh nhưng làm hỏng input; hỏi người phỏng vấn trước.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          [
           "1",
           "1",
           "1",
           "1",
           "0"
          ],
          [
           "1",
           "1",
           "0",
           "1",
           "0"
          ],
          [
           "1",
           "1",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         [
          [
           "1",
           "1",
           "0",
           "0",
           "0"
          ],
          [
           "1",
           "1",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "1",
           "1"
          ]
         ]
        ],
        "expected": 3
       },
       {
        "args": [
         [
          [
           "0"
          ]
         ]
        ],
        "expected": 0
       },
       {
        "args": [
         [
          [
           "1",
           "0",
           "1",
           "0",
           "1"
          ]
         ]
        ],
        "expected": 3
       },
       {
        "gen": "const n = 300; const g = Array.from({ length: n }, () => new Array(n).fill(\"1\")); return [g];",
        "label": "lưới 300×300 toàn đất (một đảo khổng lồ)",
        "expected": 1
       }
      ]
     },
     {
      "id": "shortest-path-grid",
      "title": "Đường ngắn nhất trong mê cung",
      "difficulty": "medium",
      "prompt": "<p>Mê cung là mảng chuỗi: <code>&quot;.&quot;</code> là đường đi, <code>&quot;#&quot;</code> là tường, <code>&quot;S&quot;</code> là điểm xuất phát, <code>&quot;E&quot;</code> là đích. Mỗi bước đi sang ô kề theo 4 hướng. Trả về <strong>số bước ít nhất</strong> từ S tới E, hoặc <code>-1</code> nếu không tới được.</p>\n<pre class=\"code\"><code class=\"language-text\">S.#\n.##\n..E   → 4</code></pre>\n",
      "fn": "shortestPath",
      "starter": "function shortestPath(maze) {\n\n}\n",
      "solution": "function shortestPath(maze) {\n  const rows = maze.length;\n  const cols = maze[0].length;\n  let start = null;\n  for (let r = 0; r < rows; r++) {\n    const c = maze[r].indexOf(\"S\");\n    if (c !== -1) start = [r, c];\n  }\n  const dist = Array.from({ length: rows }, () => new Array(cols).fill(-1));\n  dist[start[0]][start[1]] = 0;\n  const queue = [start];\n  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  for (let head = 0; head < queue.length; head++) {\n    const [r, c] = queue[head];\n    if (maze[r][c] === \"E\") return dist[r][c];\n    for (const [dr, dc] of DIRS) {\n      const nr = r + dr;\n      const nc = c + dc;\n      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;\n      if (maze[nr][nc] === \"#\" || dist[nr][nc] !== -1) continue;\n      dist[nr][nc] = dist[r][c] + 1;\n      queue.push([nr, nc]);\n    }\n  }\n  return -1;\n}\n",
      "explain": "",
      "hints": [
       "<p>Đường ngắn nhất trên lưới không trọng số → <strong>BFS</strong>, không phải DFS.</p>\n",
       "<p>Lưu <code>dist[r][c]</code> (khởi tạo -1 = chưa thăm). Khi lấy ra ô &quot;E&quot; thì trả về khoảng cách của nó.</p>\n",
       "<p>Dùng con trỏ <code>head</code> thay cho <code>shift()</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          "S.#",
          ".##",
          "..E"
         ]
        ],
        "expected": 4
       },
       {
        "args": [
         [
          "S#E"
         ]
        ],
        "expected": -1
       },
       {
        "args": [
         [
          "SE"
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         [
          "S....",
          "####.",
          "E...."
         ]
        ],
        "expected": 10
       },
       {
        "gen": "const n = 400; const rows = []; for (let r = 0; r < n; r++) rows.push(\".\".repeat(n)); rows[0] = \"S\" + rows[0].slice(1); rows[n - 1] = rows[n - 1].slice(0, n - 1) + \"E\"; return [rows];",
        "label": "lưới trống 400×400, S ở góc trên trái, E ở góc dưới phải",
        "expected": 798
       }
      ]
     },
     {
      "id": "course-schedule",
      "title": "Course Schedule (phát hiện chu trình)",
      "difficulty": "medium",
      "prompt": "<p>Có <code>n</code> môn học đánh số <code>0..n-1</code>. <code>prerequisites[i] = [a, b]</code> nghĩa là phải học <code>b</code> <strong>trước</strong> <code>a</code>. Có thể học hết các môn không? (LeetCode 207)</p>\n",
      "fn": "canFinish",
      "starter": "function canFinish(n, prerequisites) {\n\n}\n",
      "solution": "function canFinish(n, prerequisites) {\n  const adj = Array.from({ length: n }, () => []);\n  const indegree = new Array(n).fill(0);\n  for (const [a, b] of prerequisites) {\n    adj[b].push(a);\n    indegree[a]++;\n  }\n  const queue = [];\n  for (let i = 0; i < n; i++) if (indegree[i] === 0) queue.push(i);\n  for (let head = 0; head < queue.length; head++) {\n    for (const next of adj[queue[head]]) {\n      if (--indegree[next] === 0) queue.push(next);\n    }\n  }\n  return queue.length === n;\n}\n",
      "explain": "",
      "hints": [
       "<p>Đây là câu hỏi &quot;đồ thị có hướng này có <strong>chu trình</strong> không?&quot;. Cạnh <code>b → a</code>.</p>\n",
       "<p>Sắp xếp topo (Kahn): nếu lấy ra được đủ n đỉnh thì không có chu trình.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         2,
         [
          [
           1,
           0
          ]
         ]
        ],
        "expected": true
       },
       {
        "args": [
         2,
         [
          [
           1,
           0
          ],
          [
           0,
           1
          ]
         ]
        ],
        "expected": false
       },
       {
        "args": [
         3,
         []
        ],
        "expected": true
       },
       {
        "args": [
         4,
         [
          [
           1,
           0
          ],
          [
           2,
           1
          ],
          [
           3,
           2
          ],
          [
           1,
           3
          ]
         ]
        ],
        "expected": false
       },
       {
        "args": [
         5,
         [
          [
           1,
           0
          ],
          [
           2,
           0
          ],
          [
           3,
           1
          ],
          [
           3,
           2
          ],
          [
           4,
           3
          ]
         ]
        ],
        "expected": true
       },
       {
        "gen": "const n = 100000; const e = []; for (let i = 1; i < n; i++) e.push([i, i - 1]); return [n, e];",
        "label": "chuỗi 100.000 môn nối tiếp",
        "expected": true
       }
      ]
     },
     {
      "id": "count-components",
      "title": "Đếm thành phần liên thông",
      "difficulty": "medium",
      "prompt": "<p>Đồ thị <strong>vô hướng</strong> <code>n</code> đỉnh với danh sách cạnh <code>edges</code>. Đếm số thành phần liên thông.</p>\n<p>Thử giải bằng <strong>Union-Find</strong> (Disjoint Set Union): mỗi đỉnh có &quot;đại diện&quot;; nối cạnh = hợp hai nhóm.</p>\n",
      "fn": "countComponents",
      "starter": "function countComponents(n, edges) {\n\n}\n",
      "solution": "function countComponents(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const rank = new Array(n).fill(0);\n  function find(x) {\n    while (parent[x] !== x) {\n      parent[x] = parent[parent[x]];\n      x = parent[x];\n    }\n    return x;\n  }\n  let components = n;\n  for (const [a, b] of edges) {\n    let ra = find(a);\n    let rb = find(b);\n    if (ra === rb) continue;\n    if (rank[ra] < rank[rb]) [ra, rb] = [rb, ra];\n    parent[rb] = ra;\n    if (rank[ra] === rank[rb]) rank[ra]++;\n    components--;\n  }\n  return components;\n}\n",
      "explain": "<p>Với hai tối ưu, mỗi thao tác gần như O(1) (chính xác là O(α(n)) — hàm Ackermann ngược, ≤ 4 với mọi n thực tế). Union-Find mạnh khi cạnh được thêm <strong>dần dần</strong> và cần trả lời &quot;a và b đã nối chưa?&quot; liên tục (VD Kruskal, bài &quot;Redundant Connection&quot;).</p>\n",
      "hints": [
       "<p><code>parent[i] = i</code> ban đầu: mỗi đỉnh là một nhóm. <code>find(x)</code> đi theo <code>parent</code> tới gốc.</p>\n",
       "<p>Với mỗi cạnh (a, b): nếu <code>find(a) !== find(b)</code> thì nối gốc này vào gốc kia và giảm số thành phần.</p>\n",
       "<p>Tối ưu: nén đường đi (path compression) trong <code>find</code>, và nối cây thấp vào cây cao (union by rank).</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         5,
         [
          [
           0,
           1
          ],
          [
           1,
           2
          ],
          [
           3,
           4
          ]
         ]
        ],
        "expected": 2
       },
       {
        "args": [
         5,
         [
          [
           0,
           1
          ],
          [
           1,
           2
          ],
          [
           2,
           3
          ],
          [
           3,
           4
          ]
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         3,
         []
        ],
        "expected": 3
       },
       {
        "args": [
         4,
         [
          [
           0,
           1
          ],
          [
           1,
           0
          ],
          [
           2,
           3
          ],
          [
           3,
           2
          ]
         ]
        ],
        "expected": 2
       },
       {
        "gen": "const n = 200000; const e = []; for (let i = 0; i + 2 < n; i += 2) e.push([i, i + 2]); return [n, e];",
        "label": "n = 200.000 (chẵn nối chẵn, lẻ đứng riêng)",
        "expected": 100001
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-backtracking",
    "title": "Quay lui (Backtracking)",
    "html": "<p>Backtracking = <strong>thử mọi lựa chọn</strong> một cách có hệ thống: chọn → đi tiếp (đệ quy) → <strong>bỏ chọn</strong> (quay lui) → thử lựa chọn khác. Dùng cho bài &quot;liệt kê <strong>tất cả</strong>&quot;: tập con, hoán vị, tổ hợp, đặt quân hậu, giải sudoku.</p>\n<h2>Khuôn mẫu</h2>\n<pre class=\"code\"><code class=\"language-js\">function backtrack(state) {\n  if (/* state là một lời giải hoàn chỉnh */) {\n    result.push([...state]);            // LƯU BẢN SAO, không phải tham chiếu!\n    return;\n  }\n  for (const choice of /* các lựa chọn hợp lệ */) {\n    state.push(choice);                 // 1. chọn\n    backtrack(state);                   // 2. đi tiếp\n    state.pop();                        // 3. bỏ chọn\n  }\n}</code></pre>\n<h2>Ví dụ: mọi tập con</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">function subsets(nums) {\n  const result = [];\n  const path = [];\n  function backtrack(start) {\n    result.push([...path]);              // mọi trạng thái đều là một tập con\n    for (let i = start; i &lt; nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1);                  // chỉ chọn các phần tử SAU i → không trùng tổ hợp\n      path.pop();\n    }\n  }\n  backtrack(0);\n  return result;\n}\nconsole.log(JSON.stringify(subsets([1, 2, 3])));\n// [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]</code></pre>\n<h2>Cây quyết định và độ phức tạp</h2>\n<p>Hình dung cây: mỗi tầng là một quyết định, mỗi nhánh là một lựa chọn.</p>\n<table><thead><tr><th>Bài</th><th>Số lời giải</th><th>Độ phức tạp</th></tr></thead>\n<tbody>\n<tr><td>Tập con của n phần tử</td><td>2^n</td><td>O(n · 2^n)</td></tr>\n<tr><td>Hoán vị n phần tử</td><td>n!</td><td>O(n · n!)</td></tr>\n<tr><td>Tổ hợp chập k</td><td>C(n, k)</td><td>O(k · C(n, k))</td></tr>\n</tbody></table>\n<p>Vì vậy đề backtracking luôn có <strong>n nhỏ</strong> (≤ 10–20). Thấy n ≤ 15 là một gợi ý mạnh.</p>\n<h2>Cắt tỉa (pruning)</h2>\n<p>Sức mạnh thật của backtracking là <strong>dừng sớm</strong> những nhánh chắc chắn không dẫn tới lời giải:</p>\n<ul><li>Tổng đã vượt target → không đi tiếp (bài Combination Sum, nhất là khi đã sort).</li><li>Quân hậu bị tấn công → không đặt.</li><li>Ô sudoku vi phạm luật → thử số khác ngay.</li></ul>\n<h2>Xử lý phần tử trùng</h2>\n<p>Nếu input có phần tử trùng mà đề không muốn kết quả trùng: <strong>sort trước</strong>, rồi trong cùng một tầng bỏ qua <code>nums[i] === nums[i - 1]</code> (với <code>i &gt; start</code>).</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao phải <code>result.push([...path])</code> chứ không <code>result.push(path)</code>? Chạy thử bản sai trong Playground để thấy kết quả.</li><li>Backtracking và DFS khác nhau thế nào? (Gợi ý: backtracking là DFS trên <strong>cây trạng thái</strong> — cây này không được lưu sẵn mà sinh ra trong lúc chạy.)</li><li>Khi nào backtracking nên được thay bằng quy hoạch động? (Gợi ý: đề hỏi <strong>đếm số cách</strong> / <strong>giá trị tốt nhất</strong> thay vì <strong>liệt kê</strong> mọi cách.)</li></ul>\n",
    "source": "content/03-dsa/13-backtracking.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "subsets",
      "title": "Subsets",
      "difficulty": "medium",
      "prompt": "<p>Trả về <strong>mọi tập con</strong> của mảng <code>nums</code> (các phần tử khác nhau). Thứ tự không quan trọng. (LeetCode 78)</p>\n",
      "fn": "subsets",
      "starter": "function subsets(nums) {\n\n}\n",
      "solution": "function subsets(nums) {\n  const result = [];\n  const path = [];\n  function backtrack(start) {\n    result.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1);\n      path.pop();\n    }\n  }\n  backtrack(0);\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Khuôn mẫu trong bài học: mỗi lần vào hàm đệ quy là một tập con → lưu bản sao <code>[...path]</code>.</p>\n",
       "<p>Cách khác không đệ quy: bắt đầu với <code>[[]]</code>, với mỗi số x, thêm x vào <strong>mọi</strong> tập con đã có để tạo tập con mới.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": "unordered-deep",
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          3
         ]
        ],
        "expected": [
         [],
         [
          1
         ],
         [
          2
         ],
         [
          1,
          2
         ],
         [
          3
         ],
         [
          1,
          3
         ],
         [
          2,
          3
         ],
         [
          1,
          2,
          3
         ]
        ]
       },
       {
        "args": [
         [
          0
         ]
        ],
        "expected": [
         [],
         [
          0
         ]
        ]
       },
       {
        "args": [
         []
        ],
        "expected": [
         []
        ]
       },
       {
        "gen": "return [Array.from({ length: 16 }, (_, i) => i)];",
        "check": "return result.length === 65536 && new Set(result.map((s) => [...s].sort((a, b) => a - b).join(\",\"))).size === 65536;",
        "label": "n = 16 → 65.536 tập con",
        "expectedText": "65.536 tập con khác nhau"
       }
      ]
     },
     {
      "id": "permutations",
      "title": "Permutations",
      "difficulty": "medium",
      "prompt": "<p>Trả về <strong>mọi hoán vị</strong> của mảng <code>nums</code> (các phần tử khác nhau). Thứ tự các hoán vị không quan trọng. (LeetCode 46)</p>\n",
      "fn": "permute",
      "starter": "function permute(nums) {\n\n}\n",
      "solution": "function permute(nums) {\n  const result = [];\n  const path = [];\n  const used = new Array(nums.length).fill(false);\n  function backtrack() {\n    if (path.length === nums.length) {\n      result.push([...path]);\n      return;\n    }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true;\n      path.push(nums[i]);\n      backtrack();\n      path.pop();\n      used[i] = false;\n    }\n  }\n  backtrack();\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Khác với tập con: mỗi tầng được chọn <strong>bất kỳ</strong> phần tử nào <strong>chưa dùng</strong> (không chỉ các phần tử sau i).</p>\n",
       "<p>Mảng <code>used[i]</code> đánh dấu phần tử đã nằm trong <code>path</code>. Nhớ bỏ đánh dấu khi quay lui.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": "unordered",
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          3
         ]
        ],
        "expected": [
         [
          1,
          2,
          3
         ],
         [
          1,
          3,
          2
         ],
         [
          2,
          1,
          3
         ],
         [
          2,
          3,
          1
         ],
         [
          3,
          1,
          2
         ],
         [
          3,
          2,
          1
         ]
        ]
       },
       {
        "args": [
         [
          0,
          1
         ]
        ],
        "expected": [
         [
          0,
          1
         ],
         [
          1,
          0
         ]
        ]
       },
       {
        "args": [
         [
          1
         ]
        ],
        "expected": [
         [
          1
         ]
        ]
       },
       {
        "gen": "return [[1, 2, 3, 4, 5, 6, 7, 8]];",
        "check": "return result.length === 40320 && new Set(result.map((p) => p.join(\"\"))).size === 40320 && result.every((p) => p.length === 8);",
        "label": "n = 8 → 40.320 hoán vị",
        "expectedText": "40.320 hoán vị khác nhau"
       }
      ]
     },
     {
      "id": "combination-sum",
      "title": "Combination Sum",
      "difficulty": "medium",
      "prompt": "<p><code>candidates</code> là các số nguyên dương <strong>khác nhau</strong>. Tìm mọi tổ hợp có tổng bằng <code>target</code>; mỗi số được dùng <strong>nhiều lần</strong>. Hai tổ hợp chỉ khác thứ tự coi là một. (LeetCode 39)</p>\n<p><code>combinationSum([2,3,6,7], 7)</code> → <code>[[2,2,3],[7]]</code></p>\n",
      "fn": "combinationSum",
      "starter": "function combinationSum(candidates, target) {\n\n}\n",
      "solution": "function combinationSum(candidates, target) {\n  const nums = [...candidates].sort((a, b) => a - b);\n  const result = [];\n  const path = [];\n  function backtrack(start, remaining) {\n    if (remaining === 0) {\n      result.push([...path]);\n      return;\n    }\n    for (let i = start; i < nums.length; i++) {\n      if (nums[i] > remaining) break;\n      path.push(nums[i]);\n      backtrack(i, remaining - nums[i]);\n      path.pop();\n    }\n  }\n  backtrack(0, target);\n  return result;\n}\n",
      "explain": "",
      "hints": [
       "<p>Để tránh <code>[2,3,2]</code> và <code>[2,2,3]</code> cùng xuất hiện: chỉ chọn các số từ vị trí <code>start</code> trở đi.</p>\n",
       "<p>Được dùng lại số hiện tại → gọi đệ quy với <code>start = i</code> (không phải <code>i + 1</code>).</p>\n",
       "<p>Cắt tỉa: sort trước, nếu <code>nums[i] &gt; remaining</code> thì <code>break</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": "unordered-deep",
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          2,
          3,
          6,
          7
         ],
         7
        ],
        "expected": [
         [
          2,
          2,
          3
         ],
         [
          7
         ]
        ]
       },
       {
        "args": [
         [
          2,
          3,
          5
         ],
         8
        ],
        "expected": [
         [
          2,
          2,
          2,
          2
         ],
         [
          2,
          3,
          3
         ],
         [
          3,
          5
         ]
        ]
       },
       {
        "args": [
         [
          2
         ],
         1
        ],
        "expected": []
       },
       {
        "args": [
         [
          7,
          3,
          2
         ],
         7
        ],
        "expected": [
         [
          2,
          2,
          3
         ],
         [
          7
         ]
        ]
       }
      ]
     },
     {
      "id": "n-queens",
      "title": "N-Queens (đếm số cách)",
      "difficulty": "hard",
      "prompt": "<p>Đếm số cách đặt <code>n</code> quân hậu lên bàn cờ <code>n × n</code> sao cho không quân nào ăn được quân nào (cùng hàng, cùng cột, cùng đường chéo). <code>1 &lt;= n &lt;= 11</code>. (LeetCode 52)</p>\n",
      "fn": "totalNQueens",
      "starter": "function totalNQueens(n) {\n\n}\n",
      "solution": "function totalNQueens(n) {\n  const cols = new Array(n).fill(false);\n  const diag1 = new Array(2 * n).fill(false);\n  const diag2 = new Array(2 * n).fill(false);\n  let count = 0;\n  function place(row) {\n    if (row === n) {\n      count++;\n      return;\n    }\n    for (let c = 0; c < n; c++) {\n      if (cols[c] || diag1[row + c] || diag2[row - c + n]) continue;\n      cols[c] = diag1[row + c] = diag2[row - c + n] = true;\n      place(row + 1);\n      cols[c] = diag1[row + c] = diag2[row - c + n] = false;\n    }\n  }\n  place(0);\n  return count;\n}\n",
      "explain": "",
      "hints": [
       "<p>Đặt từng hàng một → tự động không có hai quân cùng hàng. Mỗi hàng thử mọi cột.</p>\n",
       "<p>Các ô trên cùng đường chéo &quot;\\&quot; có <code>row - col</code> bằng nhau; đường chéo &quot;/&quot; có <code>row + col</code> bằng nhau.</p>\n",
       "<p>Dùng 3 mảng boolean (cột, chéo 1, chéo 2) để kiểm tra O(1) thay vì quét bàn cờ.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         1
        ],
        "expected": 1
       },
       {
        "args": [
         4
        ],
        "expected": 2
       },
       {
        "args": [
         6
        ],
        "expected": 4
       },
       {
        "args": [
         8
        ],
        "expected": 92
       },
       {
        "args": [
         11
        ],
        "expected": 2680,
        "hidden": true,
        "label": "n = 11 — cần cắt tỉa O(1) mỗi ô"
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-dp",
    "title": "Quy hoạch động (Dynamic Programming)",
    "html": "<p>Quy hoạch động (DP) = đệ quy + <strong>không giải lại bài toán con đã giải</strong>. Áp dụng khi bài toán có:</p>\n<ol><li><strong>Bài toán con gối nhau</strong> (overlapping subproblems): cùng một bài toán con xuất hiện nhiều lần.</li><li><strong>Cấu trúc con tối ưu</strong> (optimal substructure): lời giải tối ưu được ghép từ lời giải tối ưu của bài toán con.</li></ol>\n<p>Dấu hiệu trong đề: &quot;<strong>bao nhiêu cách</strong>...&quot;, &quot;giá trị <strong>lớn nhất / nhỏ nhất</strong>...&quot;, &quot;có thể ... <strong>không</strong>&quot;, với lựa chọn ở mỗi bước phụ thuộc vào các bước trước.</p>\n<h2>Từ đệ quy ngây thơ đến DP</h2>\n<p>Bài: leo cầu thang n bậc, mỗi lần bước 1 hoặc 2 bậc. Có bao nhiêu cách?</p>\n<p>Để đứng ở bậc n, bước cuối cùng là từ bậc n−1 hoặc n−2 → <code>ways(n) = ways(n-1) + ways(n-2)</code>.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// 1. Đệ quy ngây thơ — O(2^n)\nconst naive = (n) =&gt; (n &lt;= 1 ? 1 : naive(n - 1) + naive(n - 2));\n\n// 2. Top-down: đệ quy + memo — O(n)\nfunction memoWays(n, memo = new Map()) {\n  if (n &lt;= 1) return 1;\n  if (memo.has(n)) return memo.get(n);\n  const r = memoWays(n - 1, memo) + memoWays(n - 2, memo);\n  memo.set(n, r);\n  return r;\n}\n\n// 3. Bottom-up: lập bảng từ nhỏ đến lớn — O(n), không đệ quy\nfunction tableWays(n) {\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = dp[1] = 1;\n  for (let i = 2; i &lt;= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}\n\n// 4. Tối ưu bộ nhớ: chỉ cần 2 giá trị trước — O(1) bộ nhớ\nfunction rollingWays(n) {\n  let a = 1, b = 1;\n  for (let i = 2; i &lt;= n; i++) [a, b] = [b, a + b];\n  return b;\n}\n\nconsole.log(naive(20), memoWays(20), tableWays(20), rollingWays(20));\nconsole.log(rollingWays(70));</code></pre>\n<h2>Công thức 4 bước để giải mọi bài DP</h2>\n<ol><li><strong>Định nghĩa trạng thái</strong>: <code>dp[i]</code> (hoặc <code>dp[i][j]</code>) nghĩa là gì — viết ra bằng lời, thật chính xác. <em>Đây là bước khó nhất.</em></li><li><strong>Công thức chuyển</strong>: tính <code>dp[i]</code> từ các trạng thái nhỏ hơn như thế nào.</li><li><strong>Base case</strong>: giá trị khởi đầu.</li><li><strong>Thứ tự tính &amp; đáp án</strong>: tính theo thứ tự nào để khi cần thì trạng thái nhỏ hơn đã có; đáp án nằm ở ô nào.</li></ol>\n<h2>Ví dụ: Coin Change</h2>\n<p>Ít đồng xu nhất để tạo thành <code>amount</code> (mỗi loại dùng không giới hạn):</p>\n<ol><li><code>dp[x]</code> = số xu ít nhất để tạo ra tổng x.</li><li><code>dp[x] = min(dp[x - c] + 1)</code> với mọi đồng <code>c &lt;= x</code>.</li><li><code>dp[0] = 0</code>; các ô khác khởi tạo <code>Infinity</code> (chưa tạo được).</li><li>Tính x từ 1 đến amount; đáp án <code>dp[amount]</code> (Infinity → -1).</li></ol>\n<pre class=\"code\" data-run><code class=\"language-js\">function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let x = 1; x &lt;= amount; x++) {\n    for (const c of coins) {\n      if (c &lt;= x &amp;&amp; dp[x - c] + 1 &lt; dp[x]) dp[x] = dp[x - c] + 1;\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\nconsole.log(coinChange([1, 2, 5], 11)); // 3 (5 + 5 + 1)\nconsole.log(coinChange([2], 3));        // -1\nconsole.log(coinChange([1, 3, 4], 6));  // 2 (3 + 3) — tham lam chọn 4 + 1 + 1 = 3 xu là SAI</code></pre>\n<h2>DP 2 chiều</h2>\n<p>Khi trạng thái cần hai thông số: hai chuỗi (<code>dp[i][j]</code> cho tiền tố của mỗi chuỗi), lưới (<code>dp[r][c]</code>), hoặc &quot;xét i món đầu với sức chứa w&quot; (knapsack).</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// Số đường đi từ góc trên trái tới góc dưới phải, chỉ đi phải hoặc xuống\nfunction uniquePaths(m, n) {\n  const dp = Array.from({ length: m }, () =&gt; new Array(n).fill(1));\n  for (let r = 1; r &lt; m; r++)\n    for (let c = 1; c &lt; n; c++)\n      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];\n  return dp[m - 1][n - 1];\n}\nconsole.log(uniquePaths(3, 7)); // 28</code></pre>\n<h2>Các dạng DP kinh điển</h2>\n<table><thead><tr><th>Dạng</th><th>Ví dụ</th><th>Trạng thái</th></tr></thead>\n<tbody>\n<tr><td>Dãy 1 chiều</td><td>Climbing Stairs, House Robber</td><td><code>dp[i]</code> = đáp án cho i phần tử đầu</td></tr>\n<tr><td>Không giới hạn số lần chọn</td><td>Coin Change</td><td><code>dp[x]</code> = đáp án cho tổng x</td></tr>\n<tr><td>Dãy con</td><td>LIS</td><td><code>dp[i]</code> = đáp án cho dãy <strong>kết thúc tại</strong> i</td></tr>\n<tr><td>Hai chuỗi</td><td>LCS, Edit Distance</td><td><code>dp[i][j]</code> = đáp án cho <code>a[0..i)</code> và <code>b[0..j)</code></td></tr>\n<tr><td>Lưới</td><td>Unique Paths, Min Path Sum</td><td><code>dp[r][c]</code></td></tr>\n<tr><td>Knapsack 0/1</td><td>Partition Equal Subset Sum</td><td><code>dp[w]</code> duyệt w <strong>giảm dần</strong></td></tr>\n</tbody></table>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Top-down (memo) và bottom-up (bảng): cái nào dễ viết hơn? Cái nào an toàn hơn với n = 10^5 trong JS? (Gợi ý: call stack.)</li><li>Tại sao Coin Change <strong>không</strong> giải được bằng tham lam (luôn chọn đồng lớn nhất) với mọi bộ xu, trong khi tiền Việt Nam thì được?</li><li>DP đổi bộ nhớ lấy thời gian. Khi nào ta có thể &quot;cuộn&quot; bảng xuống O(1) hoặc O(n) bộ nhớ?</li></ul>\n",
    "source": "content/03-dsa/14-dynamic-programming.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "climbing-stairs",
      "title": "Climbing Stairs",
      "difficulty": "easy",
      "prompt": "<p>Cầu thang <code>n</code> bậc, mỗi lần leo <strong>1 hoặc 2</strong> bậc. Có bao nhiêu cách để lên tới đỉnh? (<code>1 &lt;= n &lt;= 70</code>) (LeetCode 70)</p>\n",
      "fn": "climbStairs",
      "starter": "function climbStairs(n) {\n  if (n <= 1) return 1;\n  return climbStairs(n - 1) + climbStairs(n - 2);\n}\n",
      "solution": "function climbStairs(n) {\n  let a = 1;\n  let b = 1;\n  for (let i = 2; i <= n; i++) {\n    const next = a + b;\n    a = b;\n    b = next;\n  }\n  return b;\n}\n",
      "explain": "",
      "hints": [
       "<p>Code có sẵn đúng nhưng O(2^n) — thử chạy với n = 45 sẽ thấy rất chậm.</p>\n",
       "<p>Thêm memo, hoặc lập bảng từ dưới lên: <code>dp[i] = dp[i-1] + dp[i-2]</code>. Chỉ cần nhớ hai giá trị trước.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         1
        ],
        "expected": 1
       },
       {
        "args": [
         2
        ],
        "expected": 2
       },
       {
        "args": [
         3
        ],
        "expected": 3
       },
       {
        "args": [
         5
        ],
        "expected": 8
       },
       {
        "args": [
         70
        ],
        "expected": 308061521170129,
        "hidden": true,
        "label": "n = 70 — O(2^n) sẽ không bao giờ xong"
       }
      ]
     },
     {
      "id": "house-robber",
      "title": "House Robber",
      "difficulty": "medium",
      "prompt": "<p>Dãy nhà có số tiền <code>nums[i]</code>. Không được lấy ở <strong>hai nhà liền kề</strong> (chuông báo động). Lấy được nhiều nhất bao nhiêu? (LeetCode 198)</p>\n<p><code>[2,7,9,3,1]</code> → <code>12</code> (2 + 9 + 1)</p>\n",
      "fn": "rob",
      "starter": "function rob(nums) {\n\n}\n",
      "solution": "function rob(nums) {\n  let skip = 0;\n  let take = 0;\n  for (const x of nums) {\n    const newTake = skip + x;\n    skip = Math.max(skip, take);\n    take = newTake;\n  }\n  return Math.max(skip, take);\n}\n",
      "explain": "<p><code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code>. O(n) thời gian, O(1) bộ nhớ. Tham lam &quot;lấy các nhà chẵn hoặc các nhà lẻ&quot; là sai: thử <code>[2, 1, 1, 2]</code> (đáp án 4 = nhà 0 + nhà 3).</p>\n",
      "hints": [
       "<p>Trạng thái: <code>dp[i]</code> = tiền lớn nhất có thể lấy từ i nhà đầu tiên.</p>\n",
       "<p>Với nhà thứ i: hoặc <strong>bỏ qua</strong> (<code>dp[i-1]</code>), hoặc <strong>lấy</strong> (<code>dp[i-2] + nums[i]</code>). Lấy max.</p>\n",
       "<p>Chỉ cần hai biến thay vì cả mảng.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          3,
          1
         ]
        ],
        "expected": 4
       },
       {
        "args": [
         [
          2,
          7,
          9,
          3,
          1
         ]
        ],
        "expected": 12
       },
       {
        "args": [
         [
          2,
          1,
          1,
          2
         ]
        ],
        "expected": 4
       },
       {
        "args": [
         [
          5
         ]
        ],
        "expected": 5
       },
       {
        "args": [
         []
        ],
        "expected": 0
       }
      ]
     },
     {
      "id": "coin-change",
      "title": "Coin Change",
      "difficulty": "medium",
      "prompt": "<p>Cho các mệnh giá <code>coins</code> (dùng không giới hạn) và <code>amount</code>. Trả về số đồng xu <strong>ít nhất</strong> để tạo đúng <code>amount</code>, hoặc <code>-1</code> nếu không thể. <code>amount &lt;= 10^4</code>. (LeetCode 322)</p>\n",
      "fn": "coinChange",
      "starter": "function coinChange(coins, amount) {\n\n}\n",
      "solution": "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let x = 1; x <= amount; x++) {\n    for (const c of coins) {\n      if (c <= x && dp[x - c] + 1 < dp[x]) dp[x] = dp[x - c] + 1;\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n",
      "explain": "",
      "hints": [
       "<p>Tham lam (lấy đồng lớn nhất trước) sai với <code>[1, 3, 4]</code>, amount 6.</p>\n",
       "<p><code>dp[x]</code> = số xu ít nhất để tạo tổng x. <code>dp[x] = min(dp[x - c] + 1)</code> với mọi đồng <code>c &lt;= x</code>. <code>dp[0] = 0</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          1,
          2,
          5
         ],
         11
        ],
        "expected": 3
       },
       {
        "args": [
         [
          2
         ],
         3
        ],
        "expected": -1
       },
       {
        "args": [
         [
          1
         ],
         0
        ],
        "expected": 0
       },
       {
        "args": [
         [
          1,
          3,
          4
         ],
         6
        ],
        "expected": 2
       },
       {
        "args": [
         [
          186,
          419,
          83,
          408
         ],
         6249
        ],
        "expected": 20
       }
      ]
     },
     {
      "id": "unique-paths-obstacles",
      "title": "Đường đi trên lưới có vật cản",
      "difficulty": "medium",
      "prompt": "<p>Robot ở góc trên trái của lưới, chỉ đi <strong>sang phải</strong> hoặc <strong>xuống dưới</strong>, muốn tới góc dưới phải. <code>grid[r][c] = 1</code> là vật cản. Đếm số đường đi. (LeetCode 63)</p>\n",
      "fn": "uniquePathsWithObstacles",
      "starter": "function uniquePathsWithObstacles(grid) {\n\n}\n",
      "solution": "function uniquePathsWithObstacles(grid) {\n  const rows = grid.length;\n  const cols = grid[0].length;\n  const dp = new Array(cols).fill(0);\n  dp[0] = grid[0][0] === 1 ? 0 : 1;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 1) dp[c] = 0;\n      else if (c > 0) dp[c] += dp[c - 1];\n    }\n  }\n  return dp[cols - 1];\n}\n",
      "explain": "",
      "hints": [
       "<p><code>dp[r][c]</code> = số đường tới ô (r, c) = <code>dp[r-1][c] + dp[r][c-1]</code>, và bằng 0 nếu ô là vật cản.</p>\n",
       "<p>Cẩn thận với hàng đầu/cột đầu và trường hợp ô xuất phát là vật cản.</p>\n",
       "<p>Tối ưu: chỉ cần một mảng 1 chiều <code>dp[c]</code>, cập nhật từ trái sang phải từng hàng.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          [
           0,
           0,
           0
          ],
          [
           0,
           1,
           0
          ],
          [
           0,
           0,
           0
          ]
         ]
        ],
        "expected": 2
       },
       {
        "args": [
         [
          [
           0,
           1
          ],
          [
           0,
           0
          ]
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         [
          [
           1
          ]
         ]
        ],
        "expected": 0
       },
       {
        "args": [
         [
          [
           0
          ]
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         [
          [
           0,
           0
          ],
          [
           1,
           1
          ],
          [
           0,
           0
          ]
         ]
        ],
        "expected": 0
       }
      ]
     },
     {
      "id": "longest-increasing-subsequence",
      "title": "Dãy con tăng dài nhất (LIS)",
      "difficulty": "medium",
      "prompt": "<p>Độ dài <strong>dãy con tăng nghiêm ngặt</strong> dài nhất (không cần liên tiếp). (LeetCode 300)</p>\n<p><code>[10,9,2,5,3,7,101,18]</code> → <code>4</code> (<code>[2,3,7,101]</code>)</p>\n<p>O(n²) qua test thường; test ẩn có n = 10^5 cần O(n log n).</p>\n",
      "fn": "lengthOfLIS",
      "starter": "function lengthOfLIS(nums) {\n\n}\n",
      "solution": "function lengthOfLIS(nums) {\n  const tails = [];\n  for (const x of nums) {\n    let lo = 0;\n    let hi = tails.length;\n    while (lo < hi) {\n      const mid = (lo + hi) >> 1;\n      if (tails[mid] < x) lo = mid + 1;\n      else hi = mid;\n    }\n    tails[lo] = x;\n  }\n  return tails.length;\n}\n",
      "explain": "<p><code>tails</code> luôn tăng dần, nên dùng được binary search. Lưu ý <code>tails</code> <strong>không</strong> phải là một dãy LIS thật — chỉ độ dài của nó là đúng. Đây là bài cho thấy DP + binary search kết hợp thế nào.</p>\n",
      "hints": [
       "<p>O(n²): <code>dp[i]</code> = độ dài LIS <strong>kết thúc tại i</strong> = 1 + max(dp[j]) với j &lt; i và nums[j] &lt; nums[i].</p>\n",
       "<p>O(n log n): giữ mảng <code>tails</code>, trong đó <code>tails[k]</code> = phần tử cuối <strong>nhỏ nhất</strong> của một dãy tăng dài k + 1.</p>\n",
       "<p>Với mỗi x: tìm vị trí đầu tiên trong <code>tails</code> có giá trị ≥ x (binary search lower bound) và thay bằng x; nếu không có thì push.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          10,
          9,
          2,
          5,
          3,
          7,
          101,
          18
         ]
        ],
        "expected": 4
       },
       {
        "args": [
         [
          0,
          1,
          0,
          3,
          2,
          3
         ]
        ],
        "expected": 4
       },
       {
        "args": [
         [
          7,
          7,
          7,
          7
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         [
          5
         ]
        ],
        "expected": 1
       },
       {
        "gen": "return [Array.from({ length: 100000 }, (_, i) => (i % 2 ? i : 100000 - i))];",
        "label": "n = 100.000",
        "expected": 50001
       }
      ]
     },
     {
      "id": "longest-common-subsequence",
      "title": "Dãy con chung dài nhất (LCS)",
      "difficulty": "medium",
      "prompt": "<p>Độ dài <strong>dãy con chung</strong> dài nhất của hai chuỗi (giữ thứ tự, không cần liên tiếp). Độ dài mỗi chuỗi ≤ 1000. (LeetCode 1143)</p>\n<p><code>(&quot;abcde&quot;, &quot;ace&quot;)</code> → <code>3</code></p>\n",
      "fn": "longestCommonSubsequence",
      "starter": "function longestCommonSubsequence(a, b) {\n\n}\n",
      "solution": "function longestCommonSubsequence(a, b) {\n  const m = a.length;\n  const n = b.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\n      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\n",
      "explain": "<p>O(m·n) thời gian và bộ nhớ (có thể giảm còn O(min(m, n)) bằng hai hàng). LCS là nền tảng của <code>git diff</code> và so sánh DNA.</p>\n",
      "hints": [
       "<p><code>dp[i][j]</code> = LCS của <code>a</code> với i ký tự đầu và <code>b</code> với j ký tự đầu. Kích thước bảng (m+1) × (n+1), hàng/cột 0 là chuỗi rỗng.</p>\n",
       "<p>Nếu <code>a[i-1] === b[j-1]</code>: <code>dp[i][j] = dp[i-1][j-1] + 1</code>. Ngược lại: <code>max(dp[i-1][j], dp[i][j-1])</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "abcde",
         "ace"
        ],
        "expected": 3
       },
       {
        "args": [
         "abc",
         "abc"
        ],
        "expected": 3
       },
       {
        "args": [
         "abc",
         "def"
        ],
        "expected": 0
       },
       {
        "args": [
         "",
         "abc"
        ],
        "expected": 0
       },
       {
        "args": [
         "bsbininm",
         "jmjkbkjkv"
        ],
        "expected": 1
       },
       {
        "gen": "let a = \"\", b = \"\"; for (let i = 0; i < 1000; i++) { a += \"ab\"[i % 2]; b += \"ba\"[i % 3 === 0 ? 0 : 1]; } return [a, b];",
        "label": "hai chuỗi dài 1000",
        "expected": 833
       }
      ]
     }
    ]
   },
   {
    "id": "dsa-greedy",
    "title": "Tham lam (Greedy)",
    "html": "<p>Thuật toán tham lam đưa ra lựa chọn <strong>tốt nhất tại mỗi bước</strong> và không bao giờ quay lại. Khi đúng, nó thường cho lời giải O(n) hoặc O(n log n) rất ngắn. Cái khó: <strong>chứng minh</strong> nó đúng — và nhận ra khi nào nó sai.</p>\n<h2>Khi tham lam đúng</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">// Mua bán cổ phiếu một lần: lãi lớn nhất\nfunction maxProfit(prices) {\n  let minPrice = Infinity, best = 0;\n  for (const p of prices) {\n    minPrice = Math.min(minPrice, p);   // giá mua tốt nhất cho tới hôm nay\n    best = Math.max(best, p - minPrice); // nếu bán hôm nay\n  }\n  return best;\n}\nconsole.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 (mua 1, bán 6)</code></pre>\n<p>Mỗi ngày chỉ cần biết giá <strong>thấp nhất trước đó</strong> — không cần xét mọi cặp (mua, bán) như O(n²).</p>\n<h2>Khi tham lam sai</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">// Đổi tiền tham lam: luôn chọn đồng lớn nhất\nfunction greedyCoins(coins, amount) {\n  const sorted = [...coins].sort((a, b) =&gt; b - a);\n  let count = 0;\n  for (const c of sorted) {\n    count += Math.floor(amount / c);\n    amount %= c;\n  }\n  return amount === 0 ? count : -1;\n}\nconsole.log(greedyCoins([1, 5, 10, 25], 30)); // 2 (25 + 5) — đúng\nconsole.log(greedyCoins([1, 3, 4], 6));       // 3 (4 + 1 + 1) — SAI, tối ưu là 2 (3 + 3)</code></pre>\n<blockquote><p><strong>Quy tắc thực hành:</strong> khi nghĩ ra một chiến lược tham lam, <strong>cố tìm phản ví dụ</strong> với input nhỏ trước khi code. Không tìm được và có lập luận &quot;đổi chỗ&quot; (exchange argument) hợp lý → tham lam. Tìm được → nghĩ đến DP.</p>\n</blockquote>\n<h2>Thuật toán Kadane — tổng đoạn con lớn nhất</h2>\n<p>Tại mỗi vị trí: tiếp tục đoạn hiện tại, <strong>hoặc</strong> bắt đầu lại từ phần tử này — chọn cái lớn hơn. Nếu tổng đoạn hiện tại đã âm, nó chỉ &quot;kéo lùi&quot; phần sau → bỏ đi.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">function maxSubArray(nums) {\n  let current = nums[0], best = nums[0];\n  for (let i = 1; i &lt; nums.length; i++) {\n    current = Math.max(nums[i], current + nums[i]);\n    best = Math.max(best, current);\n  }\n  return best;\n}\nconsole.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 ([4,-1,2,1])</code></pre>\n<p>Kadane cũng có thể xem là DP với <code>dp[i]</code> = tổng lớn nhất của đoạn <strong>kết thúc tại i</strong> — ranh giới giữa tham lam và DP đôi khi rất mờ.</p>\n<h2>Bài toán khoảng (interval scheduling)</h2>\n<p>Chọn nhiều cuộc họp nhất không trùng giờ: <strong>sort theo giờ kết thúc</strong>, luôn chọn cuộc họp kết thúc sớm nhất còn chọn được. Lý do: kết thúc sớm nhất để lại nhiều thời gian nhất cho phần còn lại.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Interval scheduling: tại sao sort theo giờ <strong>kết thúc</strong> mà không phải giờ <strong>bắt đầu</strong> hay <strong>độ dài</strong>? Tìm phản ví dụ cho hai cách kia.</li><li>Tham lam và DP đều dựa trên &quot;cấu trúc con tối ưu&quot;. Điểm khác biệt cốt lõi là gì? (Gợi ý: tham lam chỉ xét <strong>một</strong> lựa chọn ở mỗi bước.)</li></ul>\n",
    "source": "content/03-dsa/15-greedy.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "best-time-stock",
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "easy",
      "prompt": "<p><code>prices[i]</code> là giá cổ phiếu ngày i. Mua <strong>một lần</strong> rồi bán <strong>một lần</strong> vào một ngày <strong>sau</strong> đó. Lãi lớn nhất là bao nhiêu (không lãi thì 0)? n ≤ 10^5. (LeetCode 121)</p>\n",
      "fn": "maxProfit",
      "starter": "function maxProfit(prices) {\n\n}\n",
      "solution": "function maxProfit(prices) {\n  let minPrice = Infinity;\n  let best = 0;\n  for (const p of prices) {\n    if (p < minPrice) minPrice = p;\n    else if (p - minPrice > best) best = p - minPrice;\n  }\n  return best;\n}\n",
      "explain": "",
      "hints": [
       "<p>Duyệt một lần, nhớ giá thấp nhất đã thấy. Mỗi ngày tính lãi nếu bán hôm đó.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          7,
          1,
          5,
          3,
          6,
          4
         ]
        ],
        "expected": 5
       },
       {
        "args": [
         [
          7,
          6,
          4,
          3,
          1
         ]
        ],
        "expected": 0
       },
       {
        "args": [
         [
          2,
          4,
          1
         ]
        ],
        "expected": 2
       },
       {
        "args": [
         [
          1
         ]
        ],
        "expected": 0
       },
       {
        "gen": "return [Array.from({ length: 100000 }, (_, i) => 100000 - i).concat([100001])];",
        "label": "n = 100.001, giảm dần rồi tăng vọt",
        "expected": 100000
       }
      ]
     },
     {
      "id": "maximum-subarray",
      "title": "Maximum Subarray (Kadane)",
      "difficulty": "medium",
      "prompt": "<p>Tìm tổng lớn nhất của một <strong>đoạn con liên tiếp khác rỗng</strong>. n ≤ 10^5. (LeetCode 53)</p>\n",
      "fn": "maxSubArray",
      "starter": "function maxSubArray(nums) {\n\n}\n",
      "solution": "function maxSubArray(nums) {\n  let current = nums[0];\n  let best = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    current = Math.max(nums[i], current + nums[i]);\n    if (current > best) best = current;\n  }\n  return best;\n}\n",
      "explain": "",
      "hints": [
       "<p>Tại mỗi phần tử: nối vào đoạn đang xét, hay bắt đầu đoạn mới từ đây? <code>current = max(x, current + x)</code>.</p>\n",
       "<p>Khởi tạo bằng <code>nums[0]</code> (không phải 0) để đúng khi mọi số đều âm.</p>\n"
      ],
      "followUp": "<p>Mở rộng: trả về luôn <strong>vị trí bắt đầu và kết thúc</strong> của đoạn. Và nếu mảng là <strong>vòng tròn</strong> (LeetCode 918) thì sao?</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          -2,
          1,
          -3,
          4,
          -1,
          2,
          1,
          -5,
          4
         ]
        ],
        "expected": 6
       },
       {
        "args": [
         [
          1
         ]
        ],
        "expected": 1
       },
       {
        "args": [
         [
          5,
          4,
          -1,
          7,
          8
         ]
        ],
        "expected": 23
       },
       {
        "args": [
         [
          -3,
          -1,
          -2
         ]
        ],
        "expected": -1
       },
       {
        "gen": "return [Array.from({ length: 100000 }, (_, i) => (i % 3 === 0 ? -1 : 2))];",
        "label": "n = 100.000",
        "expected": 100000
       }
      ]
     },
     {
      "id": "jump-game",
      "title": "Jump Game",
      "difficulty": "medium",
      "prompt": "<p>Đứng ở chỉ số 0; <code>nums[i]</code> là bước nhảy <strong>tối đa</strong> từ vị trí i. Có tới được chỉ số cuối không? n ≤ 10^5. (LeetCode 55)</p>\n",
      "fn": "canJump",
      "starter": "function canJump(nums) {\n\n}\n",
      "solution": "function canJump(nums) {\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > reach) return false;\n    reach = Math.max(reach, i + nums[i]);\n    if (reach >= nums.length - 1) return true;\n  }\n  return true;\n}\n",
      "explain": "",
      "hints": [
       "<p>Giữ <code>reach</code> = chỉ số xa nhất có thể tới được cho đến lúc này.</p>\n",
       "<p>Nếu đang đứng ở <code>i &gt; reach</code> → kẹt. Ngược lại cập nhật <code>reach = max(reach, i + nums[i])</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          2,
          3,
          1,
          1,
          4
         ]
        ],
        "expected": true
       },
       {
        "args": [
         [
          3,
          2,
          1,
          0,
          4
         ]
        ],
        "expected": false
       },
       {
        "args": [
         [
          0
         ]
        ],
        "expected": true
       },
       {
        "args": [
         [
          0,
          1
         ]
        ],
        "expected": false
       },
       {
        "gen": "const a = new Array(100000).fill(1); a[50000] = 0; return [a];",
        "label": "n = 100.000, có một số 0 chặn đường",
        "expected": false
       }
      ]
     },
     {
      "id": "non-overlapping-meetings",
      "title": "Xếp nhiều cuộc họp nhất",
      "difficulty": "medium",
      "prompt": "<p>Mỗi cuộc họp là <code>[start, end]</code>. Chọn được <strong>nhiều cuộc họp nhất</strong> sao cho không có hai cuộc nào chồng nhau (cuộc này kết thúc đúng lúc cuộc kia bắt đầu thì <strong>được</strong>).</p>\n",
      "fn": "maxMeetings",
      "starter": "function maxMeetings(meetings) {\n\n}\n",
      "solution": "function maxMeetings(meetings) {\n  const sorted = [...meetings].sort((a, b) => a[1] - b[1]);\n  let count = 0;\n  let lastEnd = -Infinity;\n  for (const [start, end] of sorted) {\n    if (start >= lastEnd) {\n      count++;\n      lastEnd = end;\n    }\n  }\n  return count;\n}\n",
      "explain": "",
      "hints": [
       "<p>Sort theo giờ <strong>kết thúc</strong> tăng dần.</p>\n",
       "<p>Duyệt và chọn cuộc họp nếu nó bắt đầu sau (hoặc đúng lúc) cuộc họp đã chọn gần nhất kết thúc.</p>\n"
      ],
      "followUp": "<p>Hãy tìm phản ví dụ cho thấy sort theo giờ bắt đầu, hoặc theo độ dài ngắn nhất, đều cho kết quả sai.</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         [
          [
           1,
           2
          ],
          [
           2,
           3
          ],
          [
           3,
           4
          ],
          [
           1,
           3
          ]
         ]
        ],
        "expected": 3
       },
       {
        "args": [
         [
          [
           1,
           10
          ],
          [
           2,
           3
          ],
          [
           4,
           5
          ]
         ]
        ],
        "expected": 2
       },
       {
        "args": [
         [
          [
           1,
           4
          ],
          [
           3,
           5
          ],
          [
           4,
           8
          ],
          [
           5,
           6
          ]
         ]
        ],
        "expected": 2
       },
       {
        "args": [
         []
        ],
        "expected": 0
       },
       {
        "args": [
         [
          [
           5,
           9
          ],
          [
           1,
           3
          ],
          [
           3,
           5
          ],
          [
           0,
           7
          ]
         ]
        ],
        "expected": 3
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "interview",
  "title": "Phỏng vấn",
  "desc": "<p>Cách tiếp cận một câu hỏi thuật toán trước người phỏng vấn, bảng nhận diện pattern, kế hoạch ôn luyện và các câu hỏi JavaScript kinh điển.</p>\n",
  "lessons": [
   {
    "id": "interview-approach",
    "title": "Cách giải bài trong buổi phỏng vấn",
    "html": "<p>Người phỏng vấn <strong>không chỉ chấm code đúng hay sai</strong>. Họ đánh giá: bạn có làm rõ yêu cầu không, có giao tiếp không, có xét trường hợp biên không, có phân tích được độ phức tạp và trade-off không. Một lời giải tối ưu viết trong im lặng thường <strong>được điểm thấp hơn</strong> một lời giải trung bình được trình bày rõ ràng rồi cải tiến dần.</p>\n<h2>Khung 6 bước (UMPIRE)</h2>\n<ol><li><strong>Understand — Hiểu đề</strong> (2–5 phút) Nhắc lại đề bằng lời của bạn. Hỏi: kích thước input? có số âm/trùng lặp/rỗng không? input đã sắp xếp chưa? được sửa input không? trả về gì khi không có đáp án?</li><li><strong>Match — Nhận diện pattern</strong> Bài này giống dạng nào đã gặp? (Xem bảng bên dưới.)</li><li><strong>Plan — Lên kế hoạch</strong> Nói ra cách brute force và độ phức tạp của nó trước. Sau đó đề xuất cách tối ưu. <strong>Thống nhất với người phỏng vấn trước khi code.</strong></li><li><strong>Implement — Viết code</strong> Đặt tên biến rõ nghĩa. Vừa viết vừa nói bạn đang làm gì. Hàm phụ nếu logic dài.</li><li><strong>Review — Tự kiểm tra</strong> Chạy tay với ví dụ nhỏ. Thử trường hợp biên: rỗng, một phần tử, tất cả giống nhau, giá trị cực lớn/âm.</li><li><strong>Evaluate — Đánh giá</strong> Nêu độ phức tạp thời gian/bộ nhớ. Nói trade-off và hướng cải tiến nếu có thêm thời gian.</li></ol>\n<blockquote><p><strong>Bí thì làm gì?</strong> Nói ra suy nghĩ (&quot;em đang nghĩ đến hash map vì cần tra cứu nhanh, nhưng chưa rõ key là gì&quot;). Thử ví dụ nhỏ bằng tay để tìm quy luật. Hỏi gợi ý cũng được — im lặng 5 phút mới là tín hiệu xấu.</p>\n</blockquote>\n<h2>Bảng nhận diện pattern</h2>\n<table><thead><tr><th>Nếu đề bài có...</th><th>Nghĩ đến</th></tr></thead>\n<tbody>\n<tr><td>Mảng <strong>đã sắp xếp</strong>, tìm cặp/bộ ba</td><td>Hai con trỏ, binary search</td></tr>\n<tr><td>&quot;Tìm / đếm cặp có tổng/hiệu bằng k&quot;, &quot;đã gặp chưa&quot;</td><td>Hash map / Set</td></tr>\n<tr><td>&quot;Đoạn con / chuỗi con <strong>liên tiếp</strong> dài nhất / ngắn nhất&quot;</td><td>Cửa sổ trượt</td></tr>\n<tr><td>&quot;Tổng đoạn con bằng k&quot; (có số âm), truy vấn tổng đoạn</td><td>Prefix sum (+ hash map)</td></tr>\n<tr><td>&quot;Phần tử lớn hơn/nhỏ hơn tiếp theo&quot;, ngoặc, biểu thức</td><td>Stack / monotonic stack</td></tr>\n<tr><td>&quot;K lớn nhất / nhỏ nhất / gần nhất&quot;, gộp k dãy</td><td>Heap</td></tr>\n<tr><td>&quot;Giá trị nhỏ nhất sao cho vẫn khả thi&quot;, n hoặc giá trị tới 10^9</td><td>Binary search trên đáp án</td></tr>\n<tr><td>Cây</td><td>DFS đệ quy (khuôn kết hợp trái/phải), BFS cho theo tầng</td></tr>\n<tr><td>Lưới, mạng lưới, quan hệ phụ thuộc</td><td>Đồ thị: BFS (đường ngắn nhất), DFS, topo sort, union-find</td></tr>\n<tr><td>&quot;Liệt kê <strong>tất cả</strong>&quot; tập con / hoán vị / tổ hợp, n ≤ 20</td><td>Backtracking</td></tr>\n<tr><td>&quot;Bao nhiêu cách&quot;, &quot;lớn nhất/nhỏ nhất&quot; với lựa chọn từng bước</td><td>Quy hoạch động</td></tr>\n<tr><td>Linked list: giữa, chu trình, k từ cuối</td><td>Con trỏ nhanh – chậm</td></tr>\n<tr><td>Khoảng thời gian, lịch họp</td><td>Sort + tham lam / quét</td></tr>\n</tbody></table>\n<h2>Kế hoạch ôn luyện gợi ý (8–12 tuần)</h2>\n<table><thead><tr><th>Tuần</th><th>Nội dung</th><th>Mục tiêu</th></tr></thead>\n<tbody>\n<tr><td>1–2</td><td>Chặng 1 (JS cơ bản)</td><td>Viết code không cần tra cú pháp</td></tr>\n<tr><td>3</td><td>Chặng 2 (coding test) + Big-O</td><td>Đọc ràng buộc → đoán được độ phức tạp cần đạt</td></tr>\n<tr><td>4–5</td><td>Hash map, two pointers, sliding window, prefix sum, stack</td><td>Giải easy trong 15', medium trong 30'</td></tr>\n<tr><td>6</td><td>Linked list, đệ quy, binary search, sorting</td><td></td></tr>\n<tr><td>7–8</td><td>Cây, heap, đồ thị</td><td></td></tr>\n<tr><td>9–10</td><td>Backtracking, DP, greedy</td><td></td></tr>\n<tr><td>11–12</td><td>Làm đề tổng hợp có bấm giờ, phỏng vấn thử với bạn bè</td><td>Nói to khi giải</td></tr>\n</tbody></table>\n<p>Sau khi xong các bài trên trang này, chuyển sang LeetCode/NeetCode 150 và luyện theo <strong>pattern</strong> chứ không theo số thứ tự bài.</p>\n<h2>Những lỗi khiến ứng viên trượt dù code chạy đúng</h2>\n<ul><li>Lao vào code ngay, không hỏi làm rõ.</li><li>Không nói được độ phức tạp, hoặc nói sai (quên <code>includes</code>/<code>slice</code>/<code>shift</code> là O(n)).</li><li>Không tự test; để người phỏng vấn tìm bug.</li><li>Tên biến <code>a</code>, <code>b</code>, <code>tmp2</code> khắp nơi.</li><li>Khăng khăng một hướng khi người phỏng vấn đã gợi ý hướng khác.</li></ul>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao nên trình bày brute force trước dù biết nó không đủ nhanh? (Gợi ý: nó chứng minh bạn hiểu đề, cho bạn một &quot;lưới an toàn&quot;, và là điểm xuất phát để tối ưu.)</li><li>Nếu còn 5 phút mà lời giải tối ưu chưa xong, bạn sẽ làm gì?</li></ul>\n",
    "source": "content/04-interview/01-approach.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": []
   },
   {
    "id": "interview-js",
    "title": "Câu hỏi phỏng vấn JavaScript",
    "html": "<p>Vòng phỏng vấn frontend/fullstack thường có thêm câu hỏi về <strong>chính ngôn ngữ JS</strong> và yêu cầu tự cài đặt các tiện ích quen thuộc. Bài này tổng hợp những câu hay gặp nhất — mỗi câu đều đã được giải thích ở các bài trước, hãy ôn lại và tự trả lời <strong>thành tiếng</strong> trước khi đọc đáp án.</p>\n<h2>Câu hỏi lý thuyết hay gặp</h2>\n<p><strong>1. <code>var</code>, <code>let</code>, <code>const</code> khác nhau thế nào?</strong> Scope (function vs block), hoisting (<code>var</code> = <code>undefined</code>, <code>let</code>/<code>const</code> = TDZ), gán lại được không. → bài <em>Biến và kiểu dữ liệu</em>, <em>Scope và closure</em>.</p>\n<p><strong>2. Closure là gì? Cho ví dụ thực tế.</strong> Hàm nhớ môi trường biến nơi nó được tạo. Ví dụ: biến private, <code>once</code>, memoize, debounce, React hooks. → bài <em>Scope và closure</em>.</p>\n<p><strong>3. Giải thích event loop. <code>setTimeout(fn, 0)</code> và <code>Promise.then</code> cái nào chạy trước?</strong> Call stack → microtask queue (Promise) → macrotask queue (setTimeout). → bài <em>Xử lý lỗi và bất đồng bộ</em>.</p>\n<p><strong>4. <code>this</code> được xác định thế nào? Arrow function khác gì?</strong> 4 luật: <code>new</code>, <code>call/apply/bind</code>, gọi qua object, gọi trơn; arrow lấy <code>this</code> từ scope bao ngoài. → bài <em>Class và this</em>.</p>\n<p><strong>5. <code>==</code> và <code>===</code>?</strong> Ép kiểu ngầm. Luôn dùng <code>===</code>.</p>\n<p><strong>6. Prototype / kế thừa trong JS hoạt động thế nào?</strong> Chuỗi prototype; <code>class</code> là cú pháp đường của prototype.</p>\n<p><strong>7. Copy nông vs copy sâu?</strong> Spread <code>{...o}</code> chỉ copy tầng ngoài; <code>structuredClone</code> / tự viết đệ quy để copy sâu.</p>\n<p><strong>8. <code>null</code> vs <code>undefined</code>?</strong> &quot;Cố ý không có giá trị&quot; vs &quot;chưa được gán&quot;.</p>\n<p><strong>9. Promise.all vs Promise.allSettled vs Promise.race?</strong> Dừng khi lỗi đầu tiên / chờ tất cả / cái nào xong trước.</p>\n<p><strong>10. Debounce vs throttle?</strong></p>\n<ul><li><strong>Debounce</strong>: chỉ chạy <strong>sau khi</strong> sự kiện ngừng xảy ra một khoảng thời gian. Dùng cho ô tìm kiếm gõ phím (chỉ gọi API khi người dùng ngừng gõ).</li><li><strong>Throttle</strong>: chạy <strong>tối đa một lần</strong> mỗi khoảng thời gian. Dùng cho sự kiện scroll/resize.</li></ul>\n<pre class=\"code\" data-run><code class=\"language-js\">function debounce(fn, ms) {\n  let timer = null;\n  return function (...args) {\n    clearTimeout(timer);                       // huỷ lần hẹn trước\n    timer = setTimeout(() =&gt; fn.apply(this, args), ms);\n  };\n}\n\nconst log = debounce((q) =&gt; console.log(&quot;Gọi API tìm:&quot;, q), 100);\nlog(&quot;j&quot;); log(&quot;ja&quot;); log(&quot;jav&quot;); log(&quot;java&quot;); // chỉ lần cuối được chạy</code></pre>\n<h2>Câu hỏi thiết kế: LRU Cache</h2>\n<p>&quot;Thiết kế cache có dung lượng giới hạn; khi đầy thì xoá phần tử <strong>ít được dùng gần đây nhất</strong>. <code>get</code> và <code>put</code> đều O(1).&quot;</p>\n<p>Cách kinh điển: <strong>hash map + danh sách liên kết đôi</strong>. Trong JS có một mẹo: <code>Map</code> <strong>giữ thứ tự chèn</strong>, nên &quot;đưa lên đầu&quot; = xoá rồi chèn lại, và phần tử cũ nhất là <code>map.keys().next().value</code>. Người phỏng vấn có thể chấp nhận mẹo này, nhưng hãy sẵn sàng giải thích (hoặc viết) phiên bản linked list.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Debounce dùng closure ở đâu? Nếu viết <code>let timer</code> <strong>bên trong</strong> hàm trả về thì chuyện gì xảy ra?</li><li>Tại sao LRU cache cần <strong>danh sách liên kết đôi</strong> chứ không phải đơn? (Gợi ý: xoá một node ở giữa trong O(1).)</li></ul>\n",
    "source": "content/04-interview/02-js-questions.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "debounce",
      "title": "Cài đặt debounce",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>debounce(fn, ms)</code> trả về hàm mới: mỗi lần được gọi, nó <strong>hẹn giờ lại</strong> — <code>fn</code> chỉ thực sự chạy sau khi đã <strong>ngừng gọi</strong> <code>ms</code> mili-giây, với <strong>tham số của lần gọi cuối cùng</strong>. Giữ đúng <code>this</code>.</p>\n",
      "fn": "debounce",
      "starter": "function debounce(fn, ms) {\n\n}\n",
      "solution": "function debounce(fn, ms) {\n  let timer = null;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), ms);\n  };\n}\n",
      "explain": "",
      "hints": [
       "<p>Closure giữ biến <code>timer</code>. Mỗi lần gọi: <code>clearTimeout(timer)</code> rồi hẹn lại.</p>\n",
       "<p>Dùng <code>function (...args)</code> (không phải arrow) cho hàm trả về để nhận <code>this</code> của người gọi, và arrow bên trong <code>setTimeout</code> để giữ <code>this</code> đó.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const calls = []; const d = debounce((x) => calls.push(x), 40); d(1); d(2); d(3); await new Promise((r) => setTimeout(r, 100)); return calls;",
        "label": "gọi 3 lần liên tiếp → chạy 1 lần với tham số cuối",
        "expected": [
         3
        ]
       },
       {
        "code": "const calls = []; const d = debounce((x) => calls.push(x), 30); d(\"a\"); await new Promise((r) => setTimeout(r, 80)); d(\"b\"); await new Promise((r) => setTimeout(r, 80)); return calls;",
        "label": "hai lần gọi cách xa nhau → chạy 2 lần",
        "expected": [
         "a",
         "b"
        ]
       },
       {
        "code": "let ran = false; const d = debounce(() => { ran = true; }, 50); d(); await new Promise((r) => setTimeout(r, 10)); return ran;",
        "label": "chưa hết thời gian chờ thì chưa chạy",
        "expected": false
       },
       {
        "code": "const obj = { name: \"obj\", calls: [] }; obj.save = debounce(function () { this.calls.push(this.name); }, 20); obj.save(); await new Promise((r) => setTimeout(r, 60)); return obj.calls;",
        "label": "giữ đúng this",
        "expected": [
         "obj"
        ]
       }
      ]
     },
     {
      "id": "lru-cache",
      "title": "LRU Cache",
      "difficulty": "medium",
      "prompt": "<p>Cài đặt class <code>LRUCache</code> (LeetCode 146):</p>\n<ul><li><code>constructor(capacity)</code></li><li><code>get(key)</code>: trả về giá trị, hoặc <code>-1</code> nếu không có. Truy cập làm key thành &quot;mới dùng gần nhất&quot;.</li><li><code>put(key, value)</code>: thêm/cập nhật. Nếu vượt <code>capacity</code>, xoá key <strong>ít được dùng gần đây nhất</strong>.</li></ul>\n<p>Cả hai thao tác O(1). Test ẩn thực hiện 200.000 thao tác.</p>\n",
      "fn": null,
      "starter": "class LRUCache {\n  constructor(capacity) {\n\n  }\n  get(key) {\n\n  }\n  put(key, value) {\n\n  }\n}\n",
      "solution": "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const value = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, value);\n    return value;\n  }\n  put(key, value) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, value);\n    if (this.map.size > this.capacity) {\n      this.map.delete(this.map.keys().next().value);\n    }\n  }\n}\n",
      "explain": "",
      "hints": [
       "<p><code>Map</code> duyệt theo <strong>thứ tự chèn</strong>. Key cũ nhất là <code>map.keys().next().value</code>.</p>\n",
       "<p>&quot;Đánh dấu vừa dùng&quot; = <code>delete</code> rồi <code>set</code> lại để key về cuối.</p>\n",
       "<p>Thử thách: viết lại bằng hash map + danh sách liên kết đôi (node giả đầu/cuối) như các ngôn ngữ không có Map giữ thứ tự.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const c = new LRUCache(2); c.put(1, 1); c.put(2, 2); const a = c.get(1); c.put(3, 3); const b = c.get(2); c.put(4, 4); return [a, b, c.get(1), c.get(3), c.get(4)];",
        "label": "ví dụ LeetCode 146",
        "expected": [
         1,
         -1,
         -1,
         3,
         4
        ]
       },
       {
        "code": "const c = new LRUCache(1); c.put(\"x\", 1); c.put(\"x\", 2); return c.get(\"x\");",
        "label": "cập nhật giá trị key đã có",
        "expected": 2
       },
       {
        "code": "const c = new LRUCache(2); c.put(1, 1); c.put(2, 2); c.put(1, 10); c.put(3, 3); return [c.get(1), c.get(2), c.get(3)];",
        "label": "put lên key cũ cũng làm nó \"mới\"",
        "expected": [
         10,
         -1,
         3
        ]
       },
       {
        "hidden": true,
        "code": "const c = new LRUCache(1000); let s = 0; for (let i = 0; i < 100000; i++) { c.put(i, i); s += c.get(i - 500) === -1 ? 0 : 1; } return s;",
        "label": "200.000 thao tác",
        "expected": 99302
       }
      ]
     },
     {
      "id": "deep-clone",
      "title": "Deep clone",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>deepClone(value)</code> sao chép sâu: mảng, object thường, <code>Map</code>, <code>Set</code>, <code>Date</code> lồng nhau tuỳ ý; giá trị nguyên thuỷ giữ nguyên. Phải xử lý được <strong>tham chiếu vòng</strong> (object trỏ về chính nó) — không được lặp vô hạn. Không dùng <code>structuredClone</code> hay <code>JSON</code>.</p>\n",
      "fn": "deepClone",
      "starter": "function deepClone(value) {\n\n}\n",
      "solution": "function deepClone(value, seen = new Map()) {\n  if (value === null || typeof value !== \"object\") return value;\n  if (seen.has(value)) return seen.get(value);\n  if (value instanceof Date) return new Date(value.getTime());\n  if (value instanceof Map) {\n    const copy = new Map();\n    seen.set(value, copy);\n    value.forEach((v, k) => copy.set(deepClone(k, seen), deepClone(v, seen)));\n    return copy;\n  }\n  if (value instanceof Set) {\n    const copy = new Set();\n    seen.set(value, copy);\n    value.forEach((v) => copy.add(deepClone(v, seen)));\n    return copy;\n  }\n  const copy = Array.isArray(value) ? [] : {};\n  seen.set(value, copy);\n  for (const key of Object.keys(value)) copy[key] = deepClone(value[key], seen);\n  return copy;\n}\n",
      "explain": "",
      "hints": [
       "<p>Base case: giá trị nguyên thuỷ (và <code>null</code>) trả về chính nó.</p>\n",
       "<p>Tham chiếu vòng: dùng <code>Map</code> ghi &quot;object gốc → bản sao&quot;. Gặp lại object gốc thì trả về bản sao đã tạo. <strong>Ghi vào Map trước khi</strong> đệ quy vào con.</p>\n",
       "<p>Xử lý riêng <code>Date</code>, <code>Map</code>, <code>Set</code> trước khi rơi vào nhánh object/mảng thường.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const o = { a: 1, b: { c: [1, 2, { d: 3 }] } }; const c = deepClone(o); c.b.c[2].d = 99; return [o.b.c[2].d, c.b.c[2].d, c !== o, c.b !== o.b];",
        "label": "object lồng nhau độc lập với bản gốc",
        "expected": [
         3,
         99,
         true,
         true
        ]
       },
       {
        "code": "return [deepClone(5), deepClone(\"x\"), deepClone(null), deepClone(undefined)];",
        "label": "giá trị nguyên thuỷ",
        "expected": [
         5,
         "x",
         null,
         undefined
        ]
       },
       {
        "code": "const o = { name: \"loop\" }; o.self = o; const c = deepClone(o); return [c.self === c, c !== o];",
        "label": "tham chiếu vòng",
        "expected": [
         true,
         true
        ]
       },
       {
        "code": "const m = new Map([[\"k\", { v: 1 }]]); const s = new Set([1, 2]); const c = deepClone({ m, s, d: new Date(0) }); c.m.get(\"k\").v = 2; return [m.get(\"k\").v, c.m instanceof Map, c.s.has(2), c.s !== s, c.d.getTime(), c.d instanceof Date];",
        "label": "Map, Set, Date",
        "expected": [
         1,
         true,
         true,
         true,
         0,
         true
        ]
       },
       {
        "code": "const a = [1, [2, [3]]]; const c = deepClone(a); return [Array.isArray(c), Array.isArray(c[1]), c[1][1] !== a[1][1], c];",
        "label": "mảng lồng nhau",
        "expected": [
         true,
         true,
         true,
         [
          1,
          [
           2,
           [
            3
           ]
          ]
         ]
        ]
       }
      ]
     },
     {
      "id": "curry",
      "title": "Curry",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>curry(fn)</code>: trả về hàm có thể gọi với tham số <strong>chia thành nhiều lần</strong>; khi đã đủ số tham số của <code>fn</code> (<code>fn.length</code>) thì gọi <code>fn</code>.</p>\n<pre class=\"code\"><code class=\"language-js\">const add3 = curry((a, b, c) =&gt; a + b + c);\nadd3(1)(2)(3);   // 6\nadd3(1, 2)(3);   // 6\nadd3(1)(2, 3);   // 6\nadd3(1, 2, 3);   // 6</code></pre>\n",
      "fn": "curry",
      "starter": "function curry(fn) {\n\n}\n",
      "solution": "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) return fn.apply(this, args);\n    return (...more) => curried.apply(this, args.concat(more));\n  };\n}\n",
      "explain": "",
      "hints": [
       "<p><code>fn.length</code> là số tham số khai báo của hàm.</p>\n",
       "<p>Hàm trả về gom tham số: đủ thì gọi <code>fn</code>, chưa đủ thì trả về một hàm mới nhận thêm tham số và <strong>gọi lại chính nó</strong> với danh sách đã nối.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const add3 = curry((a, b, c) => a + b + c); return [add3(1)(2)(3), add3(1, 2)(3), add3(1)(2, 3), add3(1, 2, 3)];",
        "label": "các cách gọi khác nhau",
        "expected": [
         6,
         6,
         6,
         6
        ]
       },
       {
        "code": "const join = curry((a, b) => a + \"-\" + b); const withA = join(\"a\"); return [withA(\"x\"), withA(\"y\")];",
        "label": "dùng lại hàm đã áp một phần",
        "expected": [
         "a-x",
         "a-y"
        ]
       },
       {
        "code": "const one = curry((x) => x * 10); return one(4);",
        "label": "hàm một tham số",
        "expected": 40
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "backend",
  "title": "Backend: API & Database",
  "desc": "<p>HTTP, thiết kế REST API, middleware &amp; xác thực, SQL trên SQLite thật, index, transaction, kết nối API với database — và bộ câu hỏi phỏng vấn kỹ thuật backend (기술면접) kèm thuật ngữ tiếng Hàn.</p>\n",
  "lessons": [
   {
    "id": "be-http",
    "title": "HTTP — một request đi như thế nào",
    "html": "<p>Mọi API bạn viết đều nói chuyện bằng <strong>HTTP</strong>. Hiểu HTTP ở mức &quot;nhìn thấy từng byte&quot; giúp bạn debug nhanh hơn rất nhiều so với chỉ biết dùng framework.</p>\n<h2>Request và response chỉ là văn bản</h2>\n<p>Khi frontend gọi <code>fetch(&quot;/api/users/7&quot;)</code>, thứ thực sự đi qua mạng (HTTP/1.1) là một đoạn <strong>chữ</strong>:</p>\n<pre class=\"code\"><code class=\"language-text\">GET /api/users/7?fields=name HTTP/1.1\nHost: shop.example.com\nAuthorization: Bearer abc123\nAccept: application/json\n</code></pre>\n<p>Server trả về cũng là chữ:</p>\n<pre class=\"code\"><code class=\"language-text\">HTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 27\n\n{&quot;id&quot;:7,&quot;name&quot;:&quot;Jisoo&quot;}</code></pre>\n<p>Cấu trúc luôn là: <strong>dòng đầu</strong> → các dòng <strong>header</strong> <code>Tên: giá trị</code> → <strong>một dòng trống</strong> → <strong>body</strong> (có thể rỗng). Dòng phân cách là <code>\\r\\n</code>.</p>\n<h2>Method: bạn muốn làm gì</h2>\n<table><thead><tr><th>Method</th><th>Ý nghĩa</th><th>Có body?</th><th>Safe</th><th>Idempotent</th></tr></thead>\n<tbody>\n<tr><td><code>GET</code></td><td>đọc tài nguyên</td><td>không</td><td>✔</td><td>✔</td></tr>\n<tr><td><code>POST</code></td><td>tạo mới / hành động</td><td>có</td><td>✘</td><td>✘</td></tr>\n<tr><td><code>PUT</code></td><td>thay thế <strong>toàn bộ</strong> tài nguyên</td><td>có</td><td>✘</td><td>✔</td></tr>\n<tr><td><code>PATCH</code></td><td>sửa <strong>một phần</strong></td><td>có</td><td>✘</td><td>✘ (thường)</td></tr>\n<tr><td><code>DELETE</code></td><td>xoá</td><td>thường không</td><td>✘</td><td>✔</td></tr>\n</tbody></table>\n<ul><li><strong>Safe</strong>: không làm thay đổi dữ liệu trên server.</li><li><strong>Idempotent</strong> (멱등성): gọi 1 lần hay 10 lần thì <strong>trạng thái cuối</strong> như nhau. <code>DELETE /orders/5</code> lần thứ hai không xoá thêm gì. <code>POST /orders</code> hai lần tạo <strong>hai</strong> đơn hàng.</li></ul>\n<blockquote><p><strong>Tại sao idempotent quan trọng?</strong> Mạng chập chờn → client không biết request đã tới server chưa → <strong>gửi lại</strong>. Với method idempotent, gửi lại luôn an toàn. Với <code>POST</code> thanh toán, gửi lại có thể <strong>trừ tiền hai lần</strong> — đó là lý do các API thanh toán (Toss, Stripe...) yêu cầu header <code>Idempotency-Key</code>.</p>\n</blockquote>\n<h2>Status code: kết quả ra sao</h2>\n<table><thead><tr><th>Nhóm</th><th>Ý nghĩa</th><th>Hay dùng</th></tr></thead>\n<tbody>\n<tr><td>2xx</td><td>thành công</td><td><code>200 OK</code>, <code>201 Created</code> (tạo mới), <code>204 No Content</code> (xoá xong, không có body)</td></tr>\n<tr><td>3xx</td><td>chuyển hướng</td><td><code>301</code> (vĩnh viễn), <code>302</code>, <code>304 Not Modified</code> (dùng cache)</td></tr>\n<tr><td>4xx</td><td><strong>client</strong> sai</td><td><code>400</code> dữ liệu không hợp lệ, <code>401</code> chưa đăng nhập, <code>403</code> không có quyền, <code>404</code> không tìm thấy, <code>409</code> xung đột, <code>422</code>, <code>429</code> gửi quá nhiều</td></tr>\n<tr><td>5xx</td><td><strong>server</strong> sai</td><td><code>500</code> lỗi code, <code>502</code>/<code>503</code> server phía sau chết/quá tải, <code>504</code> timeout</td></tr>\n</tbody></table>\n<blockquote><p><strong>401 vs 403</strong> là câu hỏi phỏng vấn kinh điển. <code>401 Unauthorized</code> thực chất nghĩa là &quot;<strong>chưa xác thực</strong>&quot; (không biết bạn là ai — thiếu/sai token). <code>403 Forbidden</code> là &quot;biết bạn là ai, nhưng bạn <strong>không có quyền</strong>&quot;.</p>\n</blockquote>\n<h2>Header hay gặp</h2>\n<ul><li><code>Content-Type</code>: kiểu dữ liệu của body (<code>application/json</code>, <code>text/html</code>, <code>multipart/form-data</code>).</li><li><code>Content-Length</code>: độ dài body tính bằng <strong>byte</strong> (không phải số ký tự!).</li><li><code>Authorization</code>: thông tin xác thực, thường là <code>Bearer &lt;token&gt;</code>.</li><li><code>Cookie</code> / <code>Set-Cookie</code>: trình duyệt tự gửi kèm cookie mỗi request.</li><li><code>Cache-Control</code>, <code>ETag</code>: điều khiển cache.</li></ul>\n<pre class=\"code\" data-run><code class=\"language-js\">// Số ký tự khác số byte: tiếng Việt, tiếng Hàn dùng nhiều byte trong UTF-8\nfor (const s of [&quot;hello&quot;, &quot;Xin chào&quot;, &quot;안녕하세요&quot;]) {\n  const bytes = new TextEncoder().encode(s).length;\n  console.log(JSON.stringify(s), &quot;→&quot;, s.length, &quot;ký tự,&quot;, bytes, &quot;byte&quot;);\n}</code></pre>\n<p>Ghi sai <code>Content-Length</code> (dùng <code>.length</code> của chuỗi) là bug thật: client đọc thiếu/thừa dữ liệu.</p>\n<h2>URL và query string</h2>\n<pre class=\"code\" data-run><code class=\"language-js\">const url = new URL(&quot;https://shop.example.com/api/products?category=books&amp;page=2&amp;q=clean%20code&quot;);\nconsole.log(url.pathname);                       // &quot;/api/products&quot;\nconsole.log(url.searchParams.get(&quot;category&quot;));   // &quot;books&quot;\nconsole.log(Number(url.searchParams.get(&quot;page&quot;))); // 2 — query luôn là CHUỖI, nhớ đổi kiểu\nconsole.log(url.searchParams.get(&quot;q&quot;));          // &quot;clean code&quot; — đã giải mã %20\nconsole.log(Object.fromEntries(url.searchParams));</code></pre>\n<h2>HTTP là <strong>stateless</strong></h2>\n<p>Mỗi request độc lập; server <strong>không tự nhớ</strong> request trước. Muốn &quot;nhớ&quot; người dùng đã đăng nhập, client phải gửi kèm thứ gì đó mỗi lần (cookie chứa session id, hoặc token). Nhờ stateless, ta có thể đặt 10 server sau một load balancer và request nào tới server nào cũng được — đó là nền tảng của <strong>scale-out</strong> (수평 확장).</p>\n<h2>HTTPS</h2>\n<p>HTTPS = HTTP chạy bên trong kết nối <strong>TLS</strong> được mã hoá. Nội dung (kể cả header <code>Authorization</code>, cookie) không đọc được trên đường truyền; chứng chỉ (certificate) giúp client chắc chắn đang nói chuyện với đúng server.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao <code>PUT</code> idempotent còn <code>PATCH</code> thì thường không? Cho ví dụ một <code>PATCH</code> không idempotent. (Gợi ý: <code>{&quot;op&quot;: &quot;increment&quot;, &quot;field&quot;: &quot;stock&quot;}</code>.)</li><li>Tại sao không nên đặt dữ liệu nhạy cảm (mật khẩu, token) trong <strong>query string</strong> dù đã dùng HTTPS? (Gợi ý: log server, lịch sử trình duyệt, header Referer.)</li><li>HTTP stateless giúp scale-out dễ. Vậy session lưu trong bộ nhớ của một server thì phá vỡ điều gì, và giải pháp là gì?</li></ul>\n",
    "source": "content/05-backend/01-http.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "parse-http-request",
      "title": "Tự phân tích một HTTP request",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>parseRequest(raw)</code> nhận một HTTP request dạng <strong>chuỗi</strong> (các dòng cách nhau bởi <code>\\r\\n</code>) và trả về:</p>\n<pre class=\"code\"><code class=\"language-js\">{\n  method: &quot;POST&quot;,\n  path: &quot;/api/orders&quot;,            // không gồm query string\n  query: { coupon: &quot;SALE10&quot; },    // object, giá trị là chuỗi đã giải mã\n  headers: { &quot;content-type&quot;: &quot;application/json&quot;, host: &quot;shop.kr&quot; },  // tên header viết THƯỜNG\n  body: &quot;{\\&quot;productId\\&quot;:3}&quot;       // chuỗi body (rỗng nếu không có)\n}</code></pre>\n<p>Header có thể có khoảng trắng thừa quanh giá trị; giá trị header có thể chứa dấu <code>:</code> (VD <code>Host: localhost:3000</code>).</p>\n",
      "fn": "parseRequest",
      "starter": "function parseRequest(raw) {\n\n}\n",
      "solution": "function parseRequest(raw) {\n  const sep = raw.indexOf(\"\\r\\n\\r\\n\");\n  const head = sep === -1 ? raw : raw.slice(0, sep);\n  const body = sep === -1 ? \"\" : raw.slice(sep + 4);\n  const [requestLine, ...headerLines] = head.split(\"\\r\\n\");\n  const [method, target] = requestLine.split(\" \");\n  const url = new URL(target, \"http://localhost\");\n  const headers = {};\n  for (const line of headerLines) {\n    const i = line.indexOf(\":\");\n    if (i === -1) continue;\n    headers[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim();\n  }\n  return {\n    method,\n    path: url.pathname,\n    query: Object.fromEntries(url.searchParams),\n    headers,\n    body\n  };\n}\n",
      "explain": "<p>Framework như Express làm đúng việc này (bằng thư viện C rất nhanh) trước khi gọi handler của bạn. Biết cấu trúc này giúp bạn đọc log của Nginx, debug bằng <code>curl -v</code>, và hiểu tại sao header không phân biệt hoa thường.</p>\n",
      "hints": [
       "<p>Phần đầu và body cách nhau bởi một dòng trống: tìm <code>&quot;\\r\\n\\r\\n&quot;</code>.</p>\n",
       "<p>Dòng đầu: <code>METHOD target HTTP/1.1</code>. Dùng <code>new URL(target, &quot;http://localhost&quot;)</code> để tách <code>pathname</code> và <code>searchParams</code>.</p>\n",
       "<p>Mỗi header: tách tại dấu <code>:</code> <strong>đầu tiên</strong> (<code>indexOf</code>), không dùng <code>split(&quot;:&quot;)</code> vì giá trị có thể chứa <code>:</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "POST /api/orders?coupon=SALE10 HTTP/1.1\r\nHost: shop.kr\r\nContent-Type:  application/json \r\n\r\n{\"productId\":3}"
        ],
        "expected": {
         "method": "POST",
         "path": "/api/orders",
         "query": {
          "coupon": "SALE10"
         },
         "headers": {
          "host": "shop.kr",
          "content-type": "application/json"
         },
         "body": "{\"productId\":3}"
        }
       },
       {
        "args": [
         "GET /api/users/7 HTTP/1.1\r\nHost: localhost:3000\r\nAuthorization: Bearer abc:123\r\n\r\n"
        ],
        "expected": {
         "method": "GET",
         "path": "/api/users/7",
         "query": {},
         "headers": {
          "host": "localhost:3000",
          "authorization": "Bearer abc:123"
         },
         "body": ""
        }
       },
       {
        "args": [
         "GET /search?q=clean%20code&page=2 HTTP/1.1\r\nHOST: a.kr\r\n\r\n"
        ],
        "expected": {
         "method": "GET",
         "path": "/search",
         "query": {
          "q": "clean code",
          "page": "2"
         },
         "headers": {
          "host": "a.kr"
         },
         "body": ""
        }
       }
      ]
     },
     {
      "id": "build-http-response",
      "title": "Tự tạo một HTTP response",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>buildResponse(status, data)</code> trả về chuỗi HTTP response với body là <code>JSON.stringify(data)</code>:</p>\n<pre class=\"code\"><code class=\"language-text\">HTTP/1.1 201 Created\\r\\n\nContent-Type: application/json\\r\\n\nContent-Length: &lt;số BYTE của body&gt;\\r\\n\n\\r\\n\n&lt;body&gt;</code></pre>\n<p>Bảng lý do (reason phrase) cần hỗ trợ: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error.</p>\n<p>⚠️ <code>Content-Length</code> tính bằng <strong>byte UTF-8</strong>, không phải số ký tự.</p>\n",
      "fn": "buildResponse",
      "starter": "function buildResponse(status, data) {\n  const body = JSON.stringify(data);\n  return \"HTTP/1.1 \" + status + \"\\r\\n\" +\n    \"Content-Type: application/json\\r\\n\" +\n    \"Content-Length: \" + body.length + \"\\r\\n\\r\\n\" +\n    body;\n}\n",
      "solution": "const REASONS = {\n  200: \"OK\",\n  201: \"Created\",\n  400: \"Bad Request\",\n  404: \"Not Found\",\n  500: \"Internal Server Error\"\n};\n\nfunction buildResponse(status, data) {\n  const body = JSON.stringify(data);\n  const bytes = new TextEncoder().encode(body).length;\n  return \"HTTP/1.1 \" + status + \" \" + REASONS[status] + \"\\r\\n\" +\n    \"Content-Type: application/json\\r\\n\" +\n    \"Content-Length: \" + bytes + \"\\r\\n\\r\\n\" +\n    body;\n}\n",
      "explain": "",
      "hints": [
       "<p>Code có sẵn có hai lỗi: thiếu reason phrase sau mã trạng thái, và đếm ký tự thay vì byte.</p>\n",
       "<p>Số byte UTF-8: <code>new TextEncoder().encode(body).length</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         200,
         {
          "ok": true
         }
        ],
        "expected": "HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: 11\r\n\r\n{\"ok\":true}"
       },
       {
        "args": [
         404,
         {
          "error": "Not Found"
         }
        ],
        "expected": "HTTP/1.1 404 Not Found\r\nContent-Type: application/json\r\nContent-Length: 21\r\n\r\n{\"error\":\"Not Found\"}"
       },
       {
        "args": [
         201,
         {
          "name": "안녕"
         }
        ],
        "expected": "HTTP/1.1 201 Created\r\nContent-Type: application/json\r\nContent-Length: 17\r\n\r\n{\"name\":\"안녕\"}",
        "label": "body có chữ Hàn (mỗi chữ 3 byte)"
       },
       {
        "args": [
         400,
         {
          "error": "Thiếu tên"
         }
        ],
        "expected": "HTTP/1.1 400 Bad Request\r\nContent-Type: application/json\r\nContent-Length: 24\r\n\r\n{\"error\":\"Thiếu tên\"}",
        "label": "body có tiếng Việt"
       }
      ]
     }
    ]
   },
   {
    "id": "be-rest-api",
    "title": "Thiết kế REST API",
    "html": "<p>REST là <strong>quy ước</strong> tổ chức API quanh <strong>tài nguyên</strong> (resource): URL là <strong>danh từ</strong>, method HTTP là <strong>động từ</strong>.</p>\n<h2>Quy ước đặt URL</h2>\n<table><thead><tr><th>Hành động</th><th>Method + URL</th><th>Thành công</th></tr></thead>\n<tbody>\n<tr><td>Lấy danh sách</td><td><code>GET /todos</code></td><td><code>200</code> + mảng</td></tr>\n<tr><td>Lấy một</td><td><code>GET /todos/42</code></td><td><code>200</code> + object, hoặc <code>404</code></td></tr>\n<tr><td>Tạo mới</td><td><code>POST /todos</code></td><td><code>201</code> + object vừa tạo</td></tr>\n<tr><td>Sửa một phần</td><td><code>PATCH /todos/42</code></td><td><code>200</code> + object sau khi sửa</td></tr>\n<tr><td>Thay thế toàn bộ</td><td><code>PUT /todos/42</code></td><td><code>200</code></td></tr>\n<tr><td>Xoá</td><td><code>DELETE /todos/42</code></td><td><code>204</code> (không body)</td></tr>\n<tr><td>Tài nguyên con</td><td><code>GET /users/7/orders</code></td><td><code>200</code></td></tr>\n</tbody></table>\n<ul><li>✅ <code>GET /users/7/orders</code> — ❌ <code>GET /getOrdersOfUser?id=7</code></li><li>✅ danh từ số nhiều <code>/products</code> — ❌ động từ <code>/createProduct</code></li><li>Lọc, sắp xếp, phân trang đặt trong <strong>query</strong>: <code>GET /products?category=books&amp;sort=-price&amp;page=2</code></li></ul>\n<h2>Viết API với mini-Express</h2>\n<p>Các bài trong chặng này dùng một framework mini có <strong>cú pháp giống hệt Express</strong> (thư viện backend phổ biến nhất của Node.js), chạy ngay trong trình duyệt:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const app = createApp();\nconst users = [{ id: 1, name: &quot;An&quot; }, { id: 2, name: &quot;Jisoo&quot; }];\n\napp.get(&quot;/users&quot;, (req, res) =&gt; {\n  res.json(users);\n});\n\napp.get(&quot;/users/:id&quot;, (req, res) =&gt; {\n  const id = Number(req.params.id);        // params luôn là CHUỖI\n  const user = users.find((u) =&gt; u.id === id);\n  if (!user) return res.status(404).json({ error: &quot;User not found&quot; });\n  res.json(user);\n});\n\napp.post(&quot;/users&quot;, (req, res) =&gt; {\n  const { name } = req.body || {};\n  if (typeof name !== &quot;string&quot; || !name.trim()) {\n    return res.status(400).json({ error: &quot;name is required&quot; });\n  }\n  const user = { id: users.length + 1, name: name.trim() };\n  users.push(user);\n  res.status(201).json(user);\n});\n\n(async () =&gt; {\n  console.log(await request(app, { path: &quot;/users/2&quot; }));\n  console.log(await request(app, { path: &quot;/users/99&quot; }));\n  console.log(await request(app, { method: &quot;POST&quot;, path: &quot;/users&quot;, body: { name: &quot;  Minho &quot; } }));\n  console.log(await request(app, { method: &quot;POST&quot;, path: &quot;/users&quot;, body: {} }));\n})();</code></pre>\n<p><code>request(app, {...})</code> giả lập một HTTP request (giống thư viện test <code>supertest</code>). Trong Express thật, bạn chỉ cần thêm <code>app.listen(3000)</code>.</p>\n<blockquote><p><strong><code>return res.status(...)...</code></strong> — chữ <code>return</code> rất quan trọng. Thiếu nó, code chạy tiếp xuống dưới và cố gửi response lần thứ hai → lỗi &quot;Cannot set headers after they are sent&quot; (lỗi Express phổ biến nhất của người mới).</p>\n</blockquote>\n<h2>Validate input: đừng bao giờ tin client</h2>\n<p>Client có thể gửi <strong>bất cứ thứ gì</strong>: thiếu trường, sai kiểu (<code>&quot;price&quot;: &quot;abc&quot;</code>), chuỗi rỗng, số âm, chuỗi 10MB... Kiểm tra <strong>ở server</strong>, kể cả khi frontend đã kiểm tra (frontend có thể bị bỏ qua bằng <code>curl</code>).</p>\n<p>Trả lỗi có <strong>cấu trúc nhất quán</strong> để frontend xử lý được:</p>\n<pre class=\"code\"><code class=\"language-json\">{ &quot;error&quot;: &quot;title must be 1-100 characters&quot; }</code></pre>\n<h2>Phân trang (pagination)</h2>\n<p>Không bao giờ trả về &quot;tất cả&quot; — bảng có thể có 10 triệu dòng.</p>\n<ul><li><strong>Offset</strong>: <code>?page=3&amp;limit=20</code> → bỏ qua 40 dòng đầu. Dễ làm, nhảy trang được; nhưng chậm ở trang sâu và bị lệch khi có dữ liệu mới chen vào.</li><li><strong>Cursor</strong>: <code>?after=1543&amp;limit=20</code> → lấy các dòng có id &gt; 1543. Nhanh và ổn định; nhưng không nhảy thẳng tới trang 50 được. Feed vô hạn (Instagram, Kakao) dùng kiểu này.</li></ul>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao <code>POST</code> tạo mới trả về <code>201</code> kèm object vừa tạo (có <code>id</code>), thay vì chỉ <code>200 {&quot;ok&quot;: true}</code>?</li><li>Validate ở frontend rồi, tại sao server vẫn phải validate? Còn ngược lại — có validate ở server rồi thì frontend có cần nữa không?</li><li>REST không phải lựa chọn duy nhất. GraphQL và gRPC giải quyết vấn đề gì mà REST làm không tốt? (Gợi ý: over-fetching, nhiều round-trip, giao tiếp giữa các service.)</li></ul>\n",
    "source": "content/05-backend/02-rest-api.md",
    "snippetSchema": "",
    "snippetHelpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "rest-get-todos",
      "title": "GET danh sách và một todo",
      "difficulty": "easy",
      "prompt": "<p>Mảng <code>todos</code> đã có sẵn (xem &quot;Code có sẵn&quot;). Viết hai route:</p>\n<ul><li><code>GET /todos</code> → <code>200</code> + mảng todo. Hỗ trợ lọc <code>?done=true</code> / <code>?done=false</code> (nhớ: query là <strong>chuỗi</strong>).</li><li><code>GET /todos/:id</code> → <code>200</code> + todo, hoặc <code>404</code> + <code>{ &quot;error&quot;: &quot;Todo not found&quot; }</code>.</li></ul>\n",
      "fn": null,
      "starter": "const app = createApp();\n\napp.get(\"/todos\", (req, res) => {\n\n});\n\napp.get(\"/todos/:id\", (req, res) => {\n\n});\n\n// thử: request(app, { path: \"/todos?done=false\" }).then(console.log);\n",
      "solution": "const app = createApp();\n\napp.get(\"/todos\", (req, res) => {\n  let result = todos;\n  if (req.query.done === \"true\") result = todos.filter((t) => t.done);\n  if (req.query.done === \"false\") result = todos.filter((t) => !t.done);\n  res.json(result);\n});\n\napp.get(\"/todos/:id\", (req, res) => {\n  const todo = todos.find((t) => t.id === Number(req.params.id));\n  if (!todo) return res.status(404).json({ error: \"Todo not found\" });\n  res.json(todo);\n});\n",
      "explain": "",
      "hints": [
       "<p><code>req.params.id</code> là chuỗi <code>&quot;2&quot;</code> — so sánh với <code>t.id</code> (số) phải đổi <code>Number(...)</code> trước, nếu không <code>===</code> luôn false.</p>\n",
       "<p><code>req.query.done</code> là chuỗi <code>&quot;true&quot;</code> / <code>&quot;false&quot;</code>, không phải boolean.</p>\n"
      ],
      "followUp": "",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Dữ liệu trong bộ nhớ (mỗi test được reset lại) =====\nlet todos = [];\nlet nextTodoId = 1;\nfunction resetData() {\n  todos = [\n    { id: 1, title: \"Học SQL\", done: false },\n    { id: 2, title: \"Ôn HTTP status code\", done: true },\n    { id: 3, title: \"Viết REST API\", done: false }\n  ];\n  nextTodoId = 4;\n}\nresetData();",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "resetData(); const r = await request(app, { path: \"/todos\" }); return [r.status, r.body];",
        "label": "GET /todos",
        "expected": [
         200,
         [
          {
           "id": 1,
           "title": "Học SQL",
           "done": false
          },
          {
           "id": 2,
           "title": "Ôn HTTP status code",
           "done": true
          },
          {
           "id": 3,
           "title": "Viết REST API",
           "done": false
          }
         ]
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { path: \"/todos?done=false\" }); return [r.status, r.body];",
        "label": "GET /todos?done=false",
        "expected": [
         200,
         [
          {
           "id": 1,
           "title": "Học SQL",
           "done": false
          },
          {
           "id": 3,
           "title": "Viết REST API",
           "done": false
          }
         ]
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { path: \"/todos?done=true\" }); return [r.status, r.body];",
        "label": "GET /todos?done=true",
        "expected": [
         200,
         [
          {
           "id": 2,
           "title": "Ôn HTTP status code",
           "done": true
          }
         ]
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { path: \"/todos/2\" }); return [r.status, r.body];",
        "label": "GET /todos/2",
        "expected": [
         200,
         {
          "id": 2,
          "title": "Ôn HTTP status code",
          "done": true
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { path: \"/todos/99\" }); return [r.status, r.body];",
        "label": "GET /todos/99",
        "expected": [
         404,
         {
          "error": "Todo not found"
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { path: \"/todos/abc\" }); return [r.status, r.body];",
        "label": "GET /todos/abc",
        "expected": [
         404,
         {
          "error": "Todo not found"
         }
        ]
       }
      ]
     },
     {
      "id": "rest-create-todo",
      "title": "POST tạo todo có validate",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>POST /todos</code> nhận body <code>{ &quot;title&quot;: &quot;...&quot; }</code>:</p>\n<ul><li><code>title</code> phải là <strong>chuỗi</strong>, sau khi <code>trim()</code> dài <strong>1–100</strong> ký tự. Sai → <code>400</code> + <code>{ &quot;error&quot;: &quot;title must be 1-100 characters&quot; }</code>.</li><li>Trường <code>done</code> nếu có phải là boolean, sai kiểu → <code>400</code> + <code>{ &quot;error&quot;: &quot;done must be a boolean&quot; }</code>. Không có thì mặc định <code>false</code>.</li><li>Thành công → <code>201</code>, thêm vào <code>todos</code> với <code>id = nextTodoId++</code>, trả về todo vừa tạo <code>{ id, title, done }</code> (title đã trim). Thêm header <code>Location: /todos/&lt;id&gt;</code>.</li><li><strong>Bỏ qua</strong> mọi trường khác client gửi lên (VD <code>id</code>, <code>isAdmin</code>) — không được để client tự đặt id.</li></ul>\n",
      "fn": null,
      "starter": "const app = createApp();\n\napp.post(\"/todos\", (req, res) => {\n  const todo = { id: nextTodoId++, ...req.body };\n  todos.push(todo);\n  res.json(todo);\n});\n",
      "solution": "const app = createApp();\n\napp.post(\"/todos\", (req, res) => {\n  const { title, done = false } = req.body || {};\n  if (typeof title !== \"string\" || title.trim().length < 1 || title.trim().length > 100) {\n    return res.status(400).json({ error: \"title must be 1-100 characters\" });\n  }\n  if (typeof done !== \"boolean\") {\n    return res.status(400).json({ error: \"done must be a boolean\" });\n  }\n  const todo = { id: nextTodoId++, title: title.trim(), done };\n  todos.push(todo);\n  res.status(201).set(\"Location\", \"/todos/\" + todo.id).json(todo);\n});\n",
      "explain": "<p><strong>Mass assignment</strong> (gán hàng loạt) là lỗ hổng thật từng xảy ra ở GitHub (2012): client gửi thêm trường mà server vô tình lưu lại, VD <code>{&quot;role&quot;: &quot;admin&quot;}</code>. Nguyên tắc: <strong>whitelist</strong> — chỉ đọc đúng các trường bạn cho phép.</p>\n",
      "hints": [
       "<p>Code có sẵn có lỗ hổng &quot;mass assignment&quot;: <code>...req.body</code> cho phép client gửi <code>id</code> hoặc trường lạ vào dữ liệu của bạn. Chỉ lấy đúng các trường cần.</p>\n",
       "<p>Kiểm tra <code>typeof title !== &quot;string&quot;</code> <strong>trước</strong> khi gọi <code>title.trim()</code> (nếu title là số, <code>.trim</code> không tồn tại → 500).</p>\n",
       "<p><code>res.status(201).set(&quot;Location&quot;, ...).json(todo)</code> — các hàm trả về <code>res</code> nên viết nối được.</p>\n"
      ],
      "followUp": "<p>Nếu client gửi <code>POST /todos</code> hai lần vì mạng chập chờn, bạn sẽ có hai todo giống hệt nhau. Làm sao thiết kế API để chống trùng? (Gợi ý: header <code>Idempotency-Key</code>.)</p>\n",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Dữ liệu trong bộ nhớ (mỗi test được reset lại) =====\nlet todos = [];\nlet nextTodoId = 1;\nfunction resetData() {\n  todos = [\n    { id: 1, title: \"Học SQL\", done: false },\n    { id: 2, title: \"Ôn HTTP status code\", done: true },\n    { id: 3, title: \"Viết REST API\", done: false }\n  ];\n  nextTodoId = 4;\n}\nresetData();",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "resetData(); const r = await request(app, { method: \"POST\", path: \"/todos\", body: { title: \"  Ôn Big-O  \" } }); return [r.status, r.body, r.headers.location, todos.length];",
        "label": "POST hợp lệ (title có khoảng trắng thừa)",
        "expected": [
         201,
         {
          "id": 4,
          "title": "Ôn Big-O",
          "done": false
         },
         "/todos/4",
         4
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"POST\", path: \"/todos\", body: { title: \"Xong\", done: true } }); return [r.status, r.body];",
        "label": "có done = true",
        "expected": [
         201,
         {
          "id": 4,
          "title": "Xong",
          "done": true
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"POST\", path: \"/todos\", body: { title: \"   \" } }); return [r.status, r.body];",
        "label": "title toàn khoảng trắng",
        "expected": [
         400,
         {
          "error": "title must be 1-100 characters"
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"POST\", path: \"/todos\", body: {} }); return [r.status, r.body];",
        "label": "thiếu title",
        "expected": [
         400,
         {
          "error": "title must be 1-100 characters"
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"POST\", path: \"/todos\", body: { title: 123 } }); return [r.status, r.body];",
        "label": "title là số",
        "expected": [
         400,
         {
          "error": "title must be 1-100 characters"
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"POST\", path: \"/todos\", body: { title: \"x\".repeat(101) } }); return [r.status, r.body];",
        "label": "title 101 ký tự",
        "expected": [
         400,
         {
          "error": "title must be 1-100 characters"
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"POST\", path: \"/todos\", body: { title: \"A\", done: \"yes\" } }); return [r.status, r.body];",
        "label": "done sai kiểu",
        "expected": [
         400,
         {
          "error": "done must be a boolean"
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"POST\", path: \"/todos\", body: { title: \"Hack\", id: 1, isAdmin: true } }); return [r.status, r.body];",
        "label": "client gửi kèm id và trường lạ",
        "expected": [
         201,
         {
          "id": 4,
          "title": "Hack",
          "done": false
         }
        ]
       },
       {
        "code": "resetData(); await request(app, { method: \"POST\", path: \"/todos\", body: {} }); return todos.length;",
        "label": "request lỗi không được thêm gì vào todos",
        "expected": 3
       }
      ]
     },
     {
      "id": "rest-update-delete",
      "title": "PATCH và DELETE",
      "difficulty": "medium",
      "prompt": "<ul><li><code>PATCH /todos/:id</code> với body có thể chứa <code>title</code> và/hoặc <code>done</code> — chỉ sửa các trường <strong>được gửi</strong>. Validate như bài trước (cùng thông báo lỗi). Không tìm thấy → <code>404 { &quot;error&quot;: &quot;Todo not found&quot; }</code>. Thành công → <code>200</code> + todo sau khi sửa.</li><li><code>DELETE /todos/:id</code> → xoá, trả <code>204</code> <strong>không có body</strong> (dùng <code>res.status(204).end()</code>). Không tìm thấy → <code>404</code>.</li></ul>\n<p>Thứ tự kiểm tra cho PATCH: tìm todo trước (404), rồi mới validate (400).</p>\n",
      "fn": null,
      "starter": "const app = createApp();\n\napp.patch(\"/todos/:id\", (req, res) => {\n\n});\n\napp.delete(\"/todos/:id\", (req, res) => {\n\n});\n",
      "solution": "const app = createApp();\n\napp.patch(\"/todos/:id\", (req, res) => {\n  const todo = todos.find((t) => t.id === Number(req.params.id));\n  if (!todo) return res.status(404).json({ error: \"Todo not found\" });\n  const body = req.body || {};\n  if (\"title\" in body) {\n    if (typeof body.title !== \"string\" || body.title.trim().length < 1 || body.title.trim().length > 100) {\n      return res.status(400).json({ error: \"title must be 1-100 characters\" });\n    }\n  }\n  if (\"done\" in body && typeof body.done !== \"boolean\") {\n    return res.status(400).json({ error: \"done must be a boolean\" });\n  }\n  if (\"title\" in body) todo.title = body.title.trim();\n  if (\"done\" in body) todo.done = body.done;\n  res.json(todo);\n});\n\napp.delete(\"/todos/:id\", (req, res) => {\n  const index = todos.findIndex((t) => t.id === Number(req.params.id));\n  if (index === -1) return res.status(404).json({ error: \"Todo not found\" });\n  todos.splice(index, 1);\n  res.status(204).end();\n});\n",
      "explain": "<p>&quot;Validate hết rồi mới ghi&quot; là phiên bản nhỏ của <strong>tính nguyên tử</strong> (atomicity): một request hoặc thành công hoàn toàn, hoặc không thay đổi gì. Ở bài transaction bạn sẽ gặp lại ý tưởng này với database.</p>\n",
      "hints": [
       "<p>Kiểm tra trường có được gửi hay không bằng <code>&quot;title&quot; in body</code> (phân biệt &quot;không gửi&quot; với &quot;gửi giá trị rỗng&quot;).</p>\n",
       "<p>Validate <strong>tất cả</strong> trường trước rồi mới sửa — nếu <code>title</code> hợp lệ nhưng <code>done</code> sai kiểu, không được sửa <code>title</code> nửa chừng.</p>\n"
      ],
      "followUp": "",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Dữ liệu trong bộ nhớ (mỗi test được reset lại) =====\nlet todos = [];\nlet nextTodoId = 1;\nfunction resetData() {\n  todos = [\n    { id: 1, title: \"Học SQL\", done: false },\n    { id: 2, title: \"Ôn HTTP status code\", done: true },\n    { id: 3, title: \"Viết REST API\", done: false }\n  ];\n  nextTodoId = 4;\n}\nresetData();",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "resetData(); const r = await request(app, { method: \"PATCH\", path: \"/todos/1\", body: { done: true } }); return [r.status, r.body];",
        "label": "PATCH chỉ done",
        "expected": [
         200,
         {
          "id": 1,
          "title": "Học SQL",
          "done": true
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"PATCH\", path: \"/todos/3\", body: { title: \" REST xong \" } }); return [r.status, r.body];",
        "label": "PATCH chỉ title",
        "expected": [
         200,
         {
          "id": 3,
          "title": "REST xong",
          "done": false
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"PATCH\", path: \"/todos/9\", body: { done: true } }); return [r.status, r.body];",
        "label": "PATCH không tồn tại",
        "expected": [
         404,
         {
          "error": "Todo not found"
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"PATCH\", path: \"/todos/1\", body: { title: \"Mới\", done: \"x\" } }); return [r.status, r.body, todos[0].title];",
        "label": "done sai kiểu → không sửa gì cả",
        "expected": [
         400,
         {
          "error": "done must be a boolean"
         },
         "Học SQL"
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"PATCH\", path: \"/todos/1\", body: { title: \"\" } }); return [r.status, r.body];",
        "label": "title rỗng",
        "expected": [
         400,
         {
          "error": "title must be 1-100 characters"
         }
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"DELETE\", path: \"/todos/2\" }); return [r.status, r.body, todos.map((t) => t.id)];",
        "label": "DELETE /todos/2",
        "expected": [
         204,
         undefined,
         [
          1,
          3
         ]
        ]
       },
       {
        "code": "resetData(); const r = await request(app, { method: \"DELETE\", path: \"/todos/7\" }); return [r.status, r.body, todos.length];",
        "label": "DELETE không tồn tại",
        "expected": [
         404,
         {
          "error": "Todo not found"
         },
         3
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "be-middleware-auth",
    "title": "Middleware, xác thực và xử lý lỗi",
    "html": "<h2>Middleware — dây chuyền xử lý request</h2>\n<p>Middleware là hàm <code>(req, res, next)</code> chạy <strong>trước</strong> handler. Nó có thể: đọc/sửa <code>req</code>, trả response luôn (chặn request), hoặc gọi <code>next()</code> để chuyển cho bước tiếp theo.</p>\n<pre class=\"code\"><code class=\"language-text\">request → [ghi log] → [đọc JSON body] → [xác thực] → [kiểm tra quyền] → handler → response</code></pre>\n<pre class=\"code\" data-run><code class=\"language-js\">const app = createApp();\n\napp.use((req, res, next) =&gt; {                      // chạy cho MỌI request\n  const start = Date.now();\n  next();\n  console.log(req.method, req.path, &quot;→&quot;, res.statusCode, `(${Date.now() - start}ms)`);\n});\n\nfunction requireJson(req, res, next) {             // middleware cho từng route\n  if (req.headers[&quot;content-type&quot;] !== &quot;application/json&quot;) {\n    return res.status(415).json({ error: &quot;Content-Type must be application/json&quot; });\n  }\n  next();\n}\n\napp.post(&quot;/echo&quot;, requireJson, (req, res) =&gt; res.json({ youSent: req.body }));\n\n(async () =&gt; {\n  console.log((await request(app, { method: &quot;POST&quot;, path: &quot;/echo&quot;, body: { a: 1 } })).status);\n  const ok = await request(app, { method: &quot;POST&quot;, path: &quot;/echo&quot;, headers: { &quot;Content-Type&quot;: &quot;application/json&quot; }, body: { a: 1 } });\n  console.log(ok.status, ok.body);\n})();</code></pre>\n<h2>Xác thực (authentication) vs phân quyền (authorization)</h2>\n<ul><li><strong>Authentication</strong> (인증): bạn là <strong>ai</strong>? → thất bại trả <code>401</code>.</li><li><strong>Authorization</strong> (인가): bạn có <strong>được phép</strong> làm việc này không? → thất bại trả <code>403</code>.</li></ul>\n<h3>Session (cookie) vs Token (JWT)</h3>\n<table><thead><tr><th></th><th>Session + cookie</th><th>JWT (token tự chứa thông tin)</th></tr></thead>\n<tbody>\n<tr><td>Server lưu gì</td><td>bảng session (bộ nhớ / Redis / DB)</td><td>không cần lưu gì</td></tr>\n<tr><td>Client gửi</td><td>cookie <code>sid=...</code> (trình duyệt tự gửi)</td><td>header <code>Authorization: Bearer &lt;jwt&gt;</code></td></tr>\n<tr><td>Đăng xuất / thu hồi ngay</td><td>dễ: xoá session</td><td>khó: token còn hạn vẫn dùng được → cần blacklist hoặc hạn ngắn + refresh token</td></tr>\n<tr><td>Scale nhiều server</td><td>cần kho session chung (Redis)</td><td>dễ: server nào cũng tự kiểm chữ ký</td></tr>\n<tr><td>Rủi ro hay gặp</td><td>CSRF (cookie tự gửi)</td><td>XSS lấy token nếu lưu ở localStorage</td></tr>\n</tbody></table>\n<p>JWT gồm 3 phần <code>header.payload.signature</code> mã hoá base64url. Payload <strong>không được mã hoá</strong>, ai cũng đọc được — chỉ có <strong>chữ ký</strong> chống sửa đổi. Đừng bao giờ để mật khẩu hay dữ liệu nhạy cảm trong JWT.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">// Payload của JWT chỉ là base64 — đọc được không cần khoá bí mật!\nconst jwt = &quot;eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjcsInJvbGUiOiJ1c2VyIn0.signature&quot;;\nconst payload = jwt.split(&quot;.&quot;)[1];\nconsole.log(JSON.parse(atob(payload.replace(/-/g, &quot;+&quot;).replace(/_/g, &quot;/&quot;))));</code></pre>\n<h3>Mật khẩu: không bao giờ lưu dạng thô</h3>\n<p>Lưu <strong>hash</strong> bằng thuật toán <strong>chậm có salt</strong>: bcrypt, scrypt, argon2. Không dùng MD5/SHA-256 trơn (quá nhanh → brute-force được hàng tỉ lần/giây; thiếu salt → bị tra bảng rainbow).</p>\n<h2>Xử lý lỗi tập trung</h2>\n<p>Thay vì <code>try/catch</code> trong mọi handler, ném lỗi và để <strong>một</strong> error middleware <code>(err, req, res, next)</code> (4 tham số) quyết định response:</p>\n<ul><li>Lỗi &quot;dự kiến&quot; (404, 400, 409...) → trả đúng status và thông điệp.</li><li>Lỗi bất ngờ (bug) → <code>500</code> với thông điệp <strong>chung chung</strong> và <strong>ghi log</strong> chi tiết ở server. Đừng trả stack trace hay câu SQL cho client — đó là thông tin cho kẻ tấn công.</li></ul>\n<h2>CORS</h2>\n<p>Trình duyệt chặn JavaScript ở <code>https://shop.kr</code> gọi API ở <code>https://api.other.kr</code> trừ khi server API trả header <code>Access-Control-Allow-Origin</code> cho phép. CORS là cơ chế <strong>của trình duyệt</strong> bảo vệ người dùng — <code>curl</code> hay server gọi server không bị ảnh hưởng. Lỗi CORS luôn sửa ở <strong>phía server API</strong>.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Thứ tự middleware có quan trọng không? Chuyện gì xảy ra nếu đặt middleware xác thực <strong>sau</strong> route handler?</li><li>Tại sao lỗi 500 không nên trả nguyên <code>err.message</code> cho client? Cho một ví dụ thông điệp lỗi làm lộ thông tin.</li><li>Với ứng dụng web thông thường (một frontend, một backend), bạn chọn session hay JWT? Tại sao? Còn với app mobile + nhiều microservice thì sao?</li></ul>\n",
    "source": "content/05-backend/03-middleware-auth.md",
    "snippetSchema": "",
    "snippetHelpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "auth-middleware",
      "title": "Middleware xác thực & phân quyền",
      "difficulty": "medium",
      "prompt": "<p>Viết hai middleware:</p>\n<ol><li><code>requireAuth</code>: đọc header <code>Authorization: Bearer &lt;token&gt;</code>, tra trong <code>TOKENS</code> (có sẵn). - Thiếu header, sai định dạng (không bắt đầu bằng <code>&quot;Bearer &quot;</code>), hoặc token không tồn tại → <code>401 { &quot;error&quot;: &quot;Unauthorized&quot; }</code>. - Hợp lệ → gán <code>req.user</code> rồi <code>next()</code>.</li><li><code>requireRole(role)</code>: <strong>trả về</strong> một middleware; nếu <code>req.user.role !== role</code> → <code>403 { &quot;error&quot;: &quot;Forbidden&quot; }</code>.</li></ol>\n<p>Các route đã viết sẵn trong starter — chỉ cần hoàn thành hai middleware.</p>\n",
      "fn": null,
      "starter": "const app = createApp();\n\nfunction requireAuth(req, res, next) {\n\n}\n\nfunction requireRole(role) {\n  return (req, res, next) => {\n\n  };\n}\n\napp.get(\"/me\", requireAuth, (req, res) => res.json(req.user));\napp.delete(\"/users/:id\", requireAuth, requireRole(\"admin\"), (req, res) => res.status(204).end());\napp.get(\"/health\", (req, res) => res.json({ ok: true }));\n",
      "solution": "const app = createApp();\n\nfunction requireAuth(req, res, next) {\n  const header = req.headers.authorization || \"\";\n  if (!header.startsWith(\"Bearer \")) return res.status(401).json({ error: \"Unauthorized\" });\n  const user = TOKENS[header.slice(\"Bearer \".length)];\n  if (!user) return res.status(401).json({ error: \"Unauthorized\" });\n  req.user = user;\n  next();\n}\n\nfunction requireRole(role) {\n  return (req, res, next) => {\n    if (!req.user || req.user.role !== role) return res.status(403).json({ error: \"Forbidden\" });\n    next();\n  };\n}\n\napp.get(\"/me\", requireAuth, (req, res) => res.json(req.user));\napp.delete(\"/users/:id\", requireAuth, requireRole(\"admin\"), (req, res) => res.status(204).end());\napp.get(\"/health\", (req, res) => res.json({ ok: true }));\n",
      "explain": "",
      "hints": [
       "<p>Header đã được viết thường: <code>req.headers.authorization</code>. Nhớ trường hợp không có header (<code>undefined</code>).</p>\n",
       "<p>Lấy token: <code>header.slice(&quot;Bearer &quot;.length)</code>. Cẩn thận: <code>TOKENS[&quot;toString&quot;]</code> cũng &quot;tồn tại&quot; nếu dùng object thường — ở đây có thể chấp nhận, nhưng trong thực tế dùng <code>Map</code> hoặc <code>Object.hasOwn</code>.</p>\n",
       "<p><code>requireRole</code> là hàm <strong>trả về</strong> middleware (closure nhớ <code>role</code>).</p>\n"
      ],
      "followUp": "",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Token giả lập: token → người dùng (thay cho bảng session / JWT đã giải mã) =====\nconst TOKENS = {\n  \"tok-an\": { id: 1, name: \"An\", role: \"user\" },\n  \"tok-jisoo\": { id: 7, name: \"Jisoo\", role: \"user\" },\n  \"tok-admin\": { id: 99, name: \"Admin\", role: \"admin\" }\n};",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const r = await request(app, { path: \"/me\", headers: { Authorization: \"Bearer tok-an\" } }); return [r.status, r.body];",
        "label": "GET /me với token hợp lệ",
        "expected": [
         200,
         {
          "id": 1,
          "name": "An",
          "role": "user"
         }
        ]
       },
       {
        "code": "const r = await request(app, { path: \"/me\" }); return [r.status, r.body];",
        "label": "không có header Authorization",
        "expected": [
         401,
         {
          "error": "Unauthorized"
         }
        ]
       },
       {
        "code": "const r = await request(app, { path: \"/me\", headers: { Authorization: \"Bearer sai-token\" } }); return [r.status, r.body];",
        "label": "token không tồn tại",
        "expected": [
         401,
         {
          "error": "Unauthorized"
         }
        ]
       },
       {
        "code": "const r = await request(app, { path: \"/me\", headers: { Authorization: \"tok-an\" } }); return [r.status, r.body];",
        "label": "thiếu chữ \"Bearer \"",
        "expected": [
         401,
         {
          "error": "Unauthorized"
         }
        ]
       },
       {
        "code": "const r = await request(app, { method: \"DELETE\", path: \"/users/7\", headers: { Authorization: \"Bearer tok-jisoo\" } }); return [r.status, r.body];",
        "label": "user thường xoá user → 403",
        "expected": [
         403,
         {
          "error": "Forbidden"
         }
        ]
       },
       {
        "code": "const r = await request(app, { method: \"DELETE\", path: \"/users/7\", headers: { Authorization: \"Bearer tok-admin\" } }); return r.status;",
        "label": "admin xoá user → 204",
        "expected": 204
       },
       {
        "code": "const r = await request(app, { method: \"DELETE\", path: \"/users/7\" }); return r.status;",
        "label": "chưa đăng nhập xoá user → 401 (không phải 403)",
        "expected": 401
       },
       {
        "code": "const r = await request(app, { path: \"/health\" }); return r.status;",
        "label": "route công khai không cần token",
        "expected": 200
       }
      ]
     },
     {
      "id": "error-handler",
      "title": "Error handler tập trung",
      "difficulty": "medium",
      "prompt": "<p>Các handler trong starter <strong>ném lỗi</strong> thay vì tự trả response. Viết error middleware 4 tham số <code>app.use((err, req, res, next) =&gt; ...)</code>:</p>\n<ul><li><code>err instanceof HttpError</code> (class có sẵn, có <code>err.status</code>) → trả <code>err.status</code> + <code>{ &quot;error&quot;: err.message }</code>.</li><li><code>err.name === &quot;ValidationError&quot;</code> → <code>400</code> + <code>{ &quot;error&quot;: &quot;Validation failed&quot;, &quot;fields&quot;: err.fields }</code>.</li><li>Mọi lỗi khác → <code>500</code> + <code>{ &quot;error&quot;: &quot;Internal Server Error&quot; }</code> — <strong>không</strong> để lộ <code>err.message</code>; đồng thời ghi log bằng <code>console.error</code>.</li></ul>\n<p>Gọi <code>app.use(errorHandler)</code> <strong>sau</strong> khi khai báo các route.</p>\n",
      "fn": null,
      "starter": "const app = createApp();\n\napp.get(\"/products/:id\", (req, res) => {\n  if (req.params.id !== \"1\") throw new HttpError(404, \"Product not found\");\n  res.json({ id: 1, name: \"Laptop Pro 14\" });\n});\n\napp.post(\"/orders\", (req, res) => {\n  const err = new Error(\"Invalid order\");\n  err.name = \"ValidationError\";\n  err.fields = { quantity: \"must be a positive integer\" };\n  throw err;\n});\n\napp.get(\"/crash\", async (req, res) => {\n  const config = undefined;\n  res.json({ dbPassword: config.db.password });   // bug thật\n});\n\n// viết error handler ở đây\n",
      "solution": "const app = createApp();\n\napp.get(\"/products/:id\", (req, res) => {\n  if (req.params.id !== \"1\") throw new HttpError(404, \"Product not found\");\n  res.json({ id: 1, name: \"Laptop Pro 14\" });\n});\n\napp.post(\"/orders\", (req, res) => {\n  const err = new Error(\"Invalid order\");\n  err.name = \"ValidationError\";\n  err.fields = { quantity: \"must be a positive integer\" };\n  throw err;\n});\n\napp.get(\"/crash\", async (req, res) => {\n  const config = undefined;\n  res.json({ dbPassword: config.db.password });\n});\n\napp.use((err, req, res, next) => {\n  if (err instanceof HttpError) {\n    return res.status(err.status).json({ error: err.message });\n  }\n  if (err.name === \"ValidationError\") {\n    return res.status(400).json({ error: \"Validation failed\", fields: err.fields });\n  }\n  console.error(\"Unexpected error on\", req.method, req.path, err);\n  res.status(500).json({ error: \"Internal Server Error\" });\n});\n",
      "explain": "",
      "hints": [
       "<p>Error middleware <strong>phải</strong> có đúng 4 tham số <code>(err, req, res, next)</code> — framework dựa vào số tham số để nhận ra nó.</p>\n",
       "<p>Xét các trường hợp từ cụ thể đến chung, mỗi nhánh <code>return res.status(...).json(...)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "const r = await request(app, { path: \"/products/1\" }); return [r.status, r.body];",
        "label": "GET /products/1 (không lỗi)",
        "expected": [
         200,
         {
          "id": 1,
          "name": "Laptop Pro 14"
         }
        ]
       },
       {
        "code": "const r = await request(app, { path: \"/products/5\" }); return [r.status, r.body];",
        "label": "HttpError 404",
        "expected": [
         404,
         {
          "error": "Product not found"
         }
        ]
       },
       {
        "code": "const r = await request(app, { method: \"POST\", path: \"/orders\", body: {} }); return [r.status, r.body];",
        "label": "ValidationError",
        "expected": [
         400,
         {
          "error": "Validation failed",
          "fields": {
           "quantity": "must be a positive integer"
          }
         }
        ]
       },
       {
        "code": "const r = await request(app, { path: \"/crash\" }); return [r.status, r.body];",
        "label": "bug trong handler async → 500, không lộ chi tiết",
        "expected": [
         500,
         {
          "error": "Internal Server Error"
         }
        ]
       },
       {
        "code": "const logs = []; const orig = console.error; console.error = (...a) => logs.push(a); try { await request(app, { path: \"/crash\" }); } finally { console.error = orig; } return logs.length > 0;",
        "label": "lỗi 500 được ghi log bằng console.error",
        "expected": true
       }
      ]
     },
     {
      "id": "rate-limit",
      "title": "Giới hạn tần suất (rate limiting)",
      "difficulty": "hard",
      "prompt": "<p>Viết <code>rateLimit({ limit, windowMs })</code> trả về middleware giới hạn mỗi <strong>client</strong> (xác định bằng header <code>x-api-key</code>, thiếu thì dùng <code>&quot;anonymous&quot;</code>) tối đa <code>limit</code> request trong mỗi <strong>cửa sổ cố định</strong> dài <code>windowMs</code>.</p>\n<ul><li>Cửa sổ bắt đầu ở request <strong>đầu tiên</strong> của client đó; hết <code>windowMs</code> thì đếm lại từ 0.</li><li>Vượt giới hạn → <code>429 { &quot;error&quot;: &quot;Too Many Requests&quot; }</code> kèm header <code>Retry-After</code> = số <strong>giây</strong> còn lại tới khi cửa sổ mới bắt đầu (làm tròn <strong>lên</strong>).</li><li>Mỗi response hợp lệ có header <code>X-RateLimit-Remaining</code> = số request còn được phép trong cửa sổ hiện tại.</li><li>Dùng <code>clock.now()</code> (có sẵn) thay vì <code>Date.now()</code> để test điều khiển được thời gian.</li></ul>\n",
      "fn": null,
      "starter": "const app = createApp();\n\nfunction rateLimit({ limit, windowMs }) {\n  return (req, res, next) => {\n    next();\n  };\n}\n\napp.use(rateLimit({ limit: 3, windowMs: 60000 }));\napp.get(\"/ping\", (req, res) => res.json({ pong: true }));\n",
      "solution": "const app = createApp();\n\nfunction rateLimit({ limit, windowMs }) {\n  const windows = new Map(); // key → { start, count }\n  return (req, res, next) => {\n    const key = req.headers[\"x-api-key\"] || \"anonymous\";\n    const now = clock.now();\n    let w = windows.get(key);\n    if (!w || now - w.start >= windowMs) {\n      w = { start: now, count: 0 };\n      windows.set(key, w);\n    }\n    if (w.count >= limit) {\n      const retryAfter = Math.ceil((w.start + windowMs - now) / 1000);\n      return res.status(429).set(\"Retry-After\", retryAfter).json({ error: \"Too Many Requests\" });\n    }\n    w.count++;\n    res.set(\"X-RateLimit-Remaining\", limit - w.count);\n    next();\n  };\n}\n\napp.use(rateLimit({ limit: 3, windowMs: 60000 }));\napp.get(\"/ping\", (req, res) => res.json({ pong: true }));\n",
      "explain": "<p><strong>Fixed window</strong> đơn giản nhưng có điểm yếu: client có thể gửi <code>limit</code> request ở cuối cửa sổ cũ và <code>limit</code> request ở đầu cửa sổ mới → gấp đôi trong thời gian ngắn. Các lựa chọn tốt hơn: sliding window log, sliding window counter, token bucket. Khi chạy nhiều server, bộ đếm phải nằm ở nơi dùng chung như <strong>Redis</strong> (<code>INCR</code> + <code>EXPIRE</code>).</p>\n",
      "hints": [
       "<p>Closure giữ một <code>Map</code>: key client → <code>{ start, count }</code>.</p>\n",
       "<p>Mỗi request: nếu chưa có cửa sổ, hoặc <code>now - start &gt;= windowMs</code> → tạo cửa sổ mới <code>{ start: now, count: 0 }</code>.</p>\n",
       "<p><code>Retry-After</code> = <code>Math.ceil((start + windowMs - now) / 1000)</code>.</p>\n"
      ],
      "followUp": "<p>Tại sao lưu bộ đếm trong <code>Map</code> của process là <strong>sai</strong> khi bạn chạy 4 instance Node sau load balancer? Và chuyện gì xảy ra với <code>Map</code> này sau vài tháng nếu có hàng triệu API key khác nhau?</p>\n",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Đồng hồ giả lập để test không phải chờ thật =====\nconst clock = {\n  time: 0,\n  now() { return clock.time; },\n  advance(ms) { clock.time += ms; }\n};",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "clock.time = 0; const out = []; for (let i = 0; i < 4; i++) { const r = await request(app, { path: \"/ping\", headers: { \"x-api-key\": \"k1\" } }); out.push([r.status, r.headers[\"x-ratelimit-remaining\"] || null]); } return out;",
        "label": "4 request liên tiếp, giới hạn 3",
        "expected": [
         [
          200,
          "2"
         ],
         [
          200,
          "1"
         ],
         [
          200,
          "0"
         ],
         [
          429,
          null
         ]
        ]
       },
       {
        "code": "clock.time = 1000000; for (let i = 0; i < 3; i++) await request(app, { path: \"/ping\", headers: { \"x-api-key\": \"k2\" } }); clock.advance(15500); const r = await request(app, { path: \"/ping\", headers: { \"x-api-key\": \"k2\" } }); return [r.status, r.body, r.headers[\"retry-after\"]];",
        "label": "bị chặn sau 15,5 giây → Retry-After = 45",
        "expected": [
         429,
         {
          "error": "Too Many Requests"
         },
         "45"
        ]
       },
       {
        "code": "clock.time = 2000000; for (let i = 0; i < 3; i++) await request(app, { path: \"/ping\", headers: { \"x-api-key\": \"k3\" } }); clock.advance(60000); const r = await request(app, { path: \"/ping\", headers: { \"x-api-key\": \"k3\" } }); return [r.status, r.headers[\"x-ratelimit-remaining\"]];",
        "label": "hết 60 giây → cửa sổ mới",
        "expected": [
         200,
         "2"
        ]
       },
       {
        "code": "clock.time = 3000000; for (let i = 0; i < 3; i++) await request(app, { path: \"/ping\", headers: { \"x-api-key\": \"k4\" } }); const other = await request(app, { path: \"/ping\", headers: { \"x-api-key\": \"k5\" } }); return other.status;",
        "label": "mỗi client có giới hạn riêng",
        "expected": 200
       },
       {
        "code": "clock.time = 4000000; const out = []; for (let i = 0; i < 4; i++) out.push((await request(app, { path: \"/ping\" })).status); return out;",
        "label": "không có x-api-key → chung nhóm \"anonymous\"",
        "expected": [
         200,
         200,
         200,
         429
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "be-sql-select",
    "title": "SQL cơ bản — SELECT",
    "html": "<p>Hầu hết backend lưu dữ liệu trong <strong>cơ sở dữ liệu quan hệ</strong> (PostgreSQL, MySQL, Oracle — ở Hàn MySQL/Oracle rất phổ biến). Dữ liệu nằm trong <strong>bảng</strong> (table) gồm <strong>dòng</strong> (row) và <strong>cột</strong> (column); ta truy vấn bằng <strong>SQL</strong>.</p>\n<p>Mọi ví dụ và bài tập từ đây chạy trên <strong>SQLite thật</strong> (biên dịch sang WebAssembly) với dữ liệu một cửa hàng nhỏ:</p>\n<pre class=\"code\"><code class=\"language-text\">users        (id, name, email, city, created_at)\nproducts     (id, name, category, price, stock)\norders       (id, user_id → users.id, status, created_at)\norder_items  (id, order_id → orders.id, product_id → products.id, quantity, unit_price)</code></pre>\n<p>Playground có chế độ <strong>SQL</strong> để bạn tự tạo bảng và thử thoải mái.</p>\n<h2>SELECT ... FROM ... WHERE</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT name, price\nFROM products\nWHERE category = 'books';</code></pre>\n<ul><li>Chuỗi dùng <strong>nháy đơn</strong> <code>'books'</code>. Nháy kép <code>&quot;books&quot;</code> trong SQL nghĩa là <strong>tên cột</strong>!</li><li><code>SELECT *</code> lấy mọi cột — tiện khi thử nghiệm, nhưng trong code thật nên ghi rõ cột cần (ít dữ liệu truyền hơn, không vỡ khi bảng thêm cột).</li></ul>\n<h2>Điều kiện</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT name, price, stock\nFROM products\nWHERE price BETWEEN 30000 AND 130000      -- gồm cả hai đầu\n  AND category IN ('electronics', 'books')\n  AND name LIKE '%e%'                      -- % = chuỗi bất kỳ, _ = một ký tự\n  AND stock &gt; 0;</code></pre>\n<h2>NULL — &quot;không biết&quot;, không phải 0 hay chuỗi rỗng</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT name, city FROM users WHERE city = NULL;   -- KHÔNG trả về gì!\nSELECT name, city FROM users WHERE city IS NULL;  -- đúng\nSELECT name, COALESCE(city, '(chưa có)') AS city FROM users;</code></pre>\n<p>So sánh bất kỳ thứ gì với <code>NULL</code> bằng <code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>... đều cho kết quả <strong>NULL</strong> (không phải true), nên dòng bị loại. Luôn dùng <code>IS NULL</code> / <code>IS NOT NULL</code>.</p>\n<h2>Sắp xếp và giới hạn</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT id, name, price\nFROM products\nORDER BY price DESC, id ASC   -- giá giảm dần; bằng giá thì theo id\nLIMIT 3 OFFSET 0;             -- 3 dòng đầu</code></pre>\n<ul><li><strong>Không có <code>ORDER BY</code> thì thứ tự kết quả không được đảm bảo</strong> — dù hôm nay trông có vẻ theo id.</li><li>Phân trang: trang <code>p</code> (bắt đầu từ 1), mỗi trang <code>n</code> dòng → <code>LIMIT n OFFSET (p - 1) * n</code>.</li></ul>\n<h2>Tính toán và đặt tên cột</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT name,\n       price,\n       price * 0.9 AS sale_price,\n       UPPER(category) AS category\nFROM products\nWHERE price &gt; 300000;\n\nSELECT DISTINCT category FROM products ORDER BY category;</code></pre>\n<h2>Thứ tự viết và thứ tự thực thi</h2>\n<p>Viết: <code>SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT</code></p>\n<p>Thực thi (logic): <code>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</code></p>\n<p>Vì <code>WHERE</code> chạy <strong>trước</strong> <code>SELECT</code>, bạn thường <strong>không</strong> dùng được alias của <code>SELECT</code> trong <code>WHERE</code> (Postgres/MySQL báo lỗi; SQLite dễ dãi hơn). Nhưng <code>ORDER BY</code> thì dùng được.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao <code>NULL = NULL</code> không phải true? Cách thiết kế &quot;logic ba giá trị&quot; (true / false / unknown) này giúp gì và gây khó gì?</li><li><code>LIMIT 20 OFFSET 100000</code> chậm hơn nhiều so với <code>LIMIT 20 OFFSET 0</code> dù cùng trả về 20 dòng. Tại sao? (Gợi ý: database vẫn phải đọc và bỏ qua 100.000 dòng.)</li></ul>\n",
    "source": "content/05-backend/04-sql-select.md",
    "snippetSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "sql-select-filter",
      "title": "Sản phẩm điện tử còn hàng",
      "difficulty": "easy",
      "prompt": "<p>Lấy <code>name</code>, <code>price</code> của các sản phẩm thuộc danh mục <code>electronics</code> <strong>còn hàng</strong> (<code>stock &gt; 0</code>), sắp theo giá <strong>giảm dần</strong>.</p>\n",
      "fn": null,
      "starter": "SELECT *\nFROM products;\n",
      "solution": "SELECT name, price\nFROM products\nWHERE category = 'electronics' AND stock > 0\nORDER BY price DESC;\n",
      "explain": "",
      "hints": [
       "<p><code>WHERE category = 'electronics' AND stock &gt; 0</code> rồi <code>ORDER BY price DESC</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Dữ liệu mẫu",
        "ordered": true,
        "columns": [
         "name",
         "price"
        ],
        "expected": [
         [
          "Laptop Pro 14",
          1890000
         ],
         [
          "Mechanical Keyboard",
          129000
         ],
         [
          "Wireless Mouse",
          35000
         ]
        ]
       },
       {
        "label": "Thêm 2 sản phẩm điện tử (1 hết hàng)",
        "hidden": true,
        "ordered": true,
        "columns": [
         "name",
         "price"
        ],
        "setup": "INSERT INTO products (name, category, price, stock) VALUES ('Monitor 27', 'electronics', 289000, 9), ('Webcam', 'electronics', 79000, 0);",
        "expected": [
         [
          "Laptop Pro 14",
          1890000
         ],
         [
          "Monitor 27",
          289000
         ],
         [
          "Mechanical Keyboard",
          129000
         ],
         [
          "Wireless Mouse",
          35000
         ]
        ]
       }
      ]
     },
     {
      "id": "sql-null-like",
      "title": "Gmail hoặc chưa có thành phố",
      "difficulty": "easy",
      "prompt": "<p>Lấy <code>name</code>, <code>email</code> của người dùng có email đuôi <code>@gmail.com</code> <strong>hoặc</strong> chưa khai báo thành phố (<code>city</code> là NULL). Sắp theo <code>id</code> tăng dần.</p>\n",
      "fn": null,
      "starter": "SELECT name, email\nFROM users\nWHERE email LIKE '%@gmail.com' OR city = NULL\nORDER BY id;\n",
      "solution": "SELECT name, email\nFROM users\nWHERE email LIKE '%@gmail.com' OR city IS NULL\nORDER BY id;\n",
      "explain": "",
      "hints": [
       "<p>Code có sẵn gần đúng. Chạy thử xem người dùng <code>Dũng</code> (city NULL) có xuất hiện không. Đọc lại phần NULL trong bài.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Dữ liệu mẫu",
        "ordered": true,
        "expected": [
         [
          "An",
          "an@gmail.com"
         ],
         [
          "Chi",
          "chi@gmail.com"
         ],
         [
          "Dũng",
          "dung@kakao.com"
         ],
         [
          "Minh",
          "minh@gmail.com"
         ]
        ]
       },
       {
        "label": "Thêm người dùng không có thành phố",
        "hidden": true,
        "ordered": true,
        "setup": "INSERT INTO users (id, name, email, city, created_at) VALUES (9, 'Tuấn', 'tuan@daum.net', NULL, '2024-06-01'), (10, 'Yuna', 'yuna@gmail.co.kr', 'Seoul', '2024-06-02');",
        "expected": [
         [
          "An",
          "an@gmail.com"
         ],
         [
          "Chi",
          "chi@gmail.com"
         ],
         [
          "Dũng",
          "dung@kakao.com"
         ],
         [
          "Minh",
          "minh@gmail.com"
         ],
         [
          "Tuấn",
          "tuan@daum.net"
         ]
        ]
       }
      ]
     },
     {
      "id": "sql-pagination",
      "title": "Phân trang",
      "difficulty": "easy",
      "prompt": "<p>Danh sách sản phẩm sắp theo <code>price</code> tăng dần (bằng giá thì theo <code>id</code> tăng dần), mỗi trang <strong>3</strong> sản phẩm. Lấy <code>id</code>, <code>name</code>, <code>price</code> của <strong>trang 2</strong>.</p>\n",
      "fn": null,
      "starter": "SELECT id, name, price\nFROM products\nORDER BY price\nLIMIT 3;\n",
      "solution": "SELECT id, name, price\nFROM products\nORDER BY price ASC, id ASC\nLIMIT 3 OFFSET 3;\n",
      "explain": "",
      "hints": [
       "<p>Trang p, mỗi trang n dòng: <code>LIMIT n OFFSET (p - 1) * n</code>.</p>\n",
       "<p>Thêm tiêu chí phụ <code>id</code> vào ORDER BY để thứ tự ổn định khi có giá bằng nhau.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Dữ liệu mẫu",
        "ordered": true,
        "expected": [
         [
          2,
          "Wireless Mouse",
          35000
         ],
         [
          6,
          "Designing Data-Intensive Applications",
          48000
         ],
         [
          4,
          "USB-C Hub",
          59000
         ]
        ]
       },
       {
        "label": "Thêm sản phẩm giá 30.000 và hai sản phẩm cùng giá 35.000",
        "hidden": true,
        "ordered": true,
        "setup": "INSERT INTO products (id, name, category, price, stock) VALUES (11, 'Notebook', 'books', 30000, 5), (12, 'Mouse Pad', 'electronics', 35000, 50);",
        "expected": [
         [
          5,
          "Clean Code",
          32000
         ],
         [
          2,
          "Wireless Mouse",
          35000
         ],
         [
          12,
          "Mouse Pad",
          35000
         ]
        ]
       }
      ]
     },
     {
      "id": "sql-in-between",
      "title": "Đơn hàng tháng 5",
      "difficulty": "easy",
      "prompt": "<p>Lấy <code>id</code>, <code>status</code>, <code>created_at</code> của các đơn hàng tạo trong <strong>tháng 5/2024</strong> có trạng thái <code>paid</code> <strong>hoặc</strong> <code>pending</code>, sắp theo <code>created_at</code> tăng dần.</p>\n<p>Gợi ý: <code>created_at</code> lưu dạng chuỗi <code>'YYYY-MM-DD'</code> nên so sánh chuỗi theo thứ tự từ điển vẫn đúng.</p>\n",
      "fn": null,
      "starter": "SELECT id, status, created_at\nFROM orders\nWHERE status = 'paid' OR status = 'pending' AND created_at LIKE '2024-05%';\n",
      "solution": "SELECT id, status, created_at\nFROM orders\nWHERE created_at BETWEEN '2024-05-01' AND '2024-05-31'\n  AND status IN ('paid', 'pending')\nORDER BY created_at;\n",
      "explain": "<p><code>a OR b AND c</code> nghĩa là <code>a OR (b AND c)</code> — giống <code>+</code> và <code>*</code> trong toán. Bug này rất hay gặp và <strong>không báo lỗi</strong>, chỉ trả kết quả sai. Viết ngoặc rõ ràng, hoặc dùng <code>IN</code>.</p>\n",
      "hints": [
       "<p>Code có sẵn sai vì độ ưu tiên: <code>AND</code> được tính trước <code>OR</code>. Dùng ngoặc, hoặc <code>IN (...)</code>.</p>\n",
       "<p>Đừng quên <code>ORDER BY</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Dữ liệu mẫu",
        "ordered": true,
        "expected": [
         [
          1,
          "paid",
          "2024-05-01"
         ],
         [
          2,
          "paid",
          "2024-05-10"
         ],
         [
          3,
          "pending",
          "2024-05-11"
         ],
         [
          4,
          "paid",
          "2024-05-12"
         ],
         [
          6,
          "paid",
          "2024-05-20"
         ]
        ]
       },
       {
        "label": "Thêm đơn ngày 31/5 và 1/6",
        "hidden": true,
        "ordered": true,
        "setup": "INSERT INTO orders (id, user_id, status, created_at) VALUES (11, 2, 'pending', '2024-05-31'), (12, 2, 'paid', '2024-04-30');",
        "expected": [
         [
          1,
          "paid",
          "2024-05-01"
         ],
         [
          2,
          "paid",
          "2024-05-10"
         ],
         [
          3,
          "pending",
          "2024-05-11"
         ],
         [
          4,
          "paid",
          "2024-05-12"
         ],
         [
          6,
          "paid",
          "2024-05-20"
         ],
         [
          11,
          "pending",
          "2024-05-31"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "be-sql-join-group",
    "title": "SQL — JOIN và GROUP BY",
    "html": "<h2>Gộp nhóm: COUNT, SUM, AVG, MIN, MAX</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT COUNT(*) AS total_products,\n       SUM(stock) AS total_stock,\n       AVG(price) AS avg_price,\n       MIN(price) AS cheapest,\n       MAX(price) AS most_expensive\nFROM products;</code></pre>\n<p><code>GROUP BY</code> chia các dòng thành <strong>nhóm</strong> rồi tính hàm gộp cho từng nhóm:</p>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT category, COUNT(*) AS n, MIN(price) AS min_price\nFROM products\nGROUP BY category\nORDER BY n DESC;</code></pre>\n<blockquote><p><strong>Quy tắc:</strong> mỗi cột trong <code>SELECT</code> phải hoặc nằm trong <code>GROUP BY</code>, hoặc nằm trong một hàm gộp. <code>SELECT category, name ... GROUP BY category</code> là vô nghĩa (một nhóm có nhiều <code>name</code>, lấy cái nào?) — PostgreSQL báo lỗi, MySQL/SQLite thì lặng lẽ chọn bừa một giá trị.</p>\n</blockquote>\n<h2>WHERE vs HAVING</h2>\n<ul><li><code>WHERE</code> lọc <strong>dòng</strong> — <strong>trước</strong> khi gộp nhóm.</li><li><code>HAVING</code> lọc <strong>nhóm</strong> — <strong>sau</strong> khi gộp, dùng được hàm gộp.</li></ul>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT category, COUNT(*) AS n\nFROM products\nWHERE stock &gt; 0          -- bỏ các sản phẩm hết hàng trước\nGROUP BY category\nHAVING COUNT(*) &gt;= 2;    -- chỉ giữ danh mục còn ≥ 2 sản phẩm</code></pre>\n<h2>JOIN — ghép các bảng</h2>\n<p>Dữ liệu được tách ra nhiều bảng (chuẩn hoá) để không lặp lại; JOIN ghép chúng lại khi đọc.</p>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT o.id AS order_id, u.name AS customer, o.status\nFROM orders AS o\nJOIN users AS u ON u.id = o.user_id     -- INNER JOIN: chỉ giữ dòng ghép được ở cả hai bên\nWHERE o.created_at &gt;= '2024-06-01';</code></pre>\n<h3>LEFT JOIN — giữ tất cả dòng bên trái</h3>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT u.name, o.id AS order_id\nFROM users AS u\nLEFT JOIN orders AS o ON o.user_id = u.id\nWHERE u.id IN (4, 7);      -- Dũng chưa có đơn → order_id là NULL</code></pre>\n<table><thead><tr><th>JOIN</th><th>Giữ lại</th></tr></thead>\n<tbody>\n<tr><td><code>INNER JOIN</code></td><td>dòng có cặp ghép ở <strong>cả hai</strong> bảng</td></tr>\n<tr><td><code>LEFT JOIN</code></td><td><strong>mọi</strong> dòng bảng trái; bên phải không có thì NULL</td></tr>\n<tr><td><code>RIGHT JOIN</code></td><td>ngược lại của LEFT</td></tr>\n<tr><td><code>FULL OUTER JOIN</code></td><td>mọi dòng của cả hai bảng</td></tr>\n</tbody></table>\n<p>Mẫu &quot;tìm cái <strong>không có</strong>&quot;: <code>LEFT JOIN ... WHERE right.id IS NULL</code> (VD người dùng chưa từng đặt hàng).</p>\n<h3>Bẫy COUNT với LEFT JOIN</h3>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT u.name,\n       COUNT(*)    AS count_star,   -- SAI: đếm cả dòng NULL → Dũng có &quot;1 đơn&quot;\n       COUNT(o.id) AS count_orders  -- ĐÚNG: COUNT(cột) bỏ qua NULL\nFROM users AS u\nLEFT JOIN orders AS o ON o.user_id = u.id\nGROUP BY u.id\nORDER BY u.id;</code></pre>\n<h2>JOIN nhiều bảng</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">SELECT o.id AS order_id, p.name AS product, oi.quantity, oi.quantity * oi.unit_price AS line_total\nFROM orders AS o\nJOIN order_items AS oi ON oi.order_id = o.id\nJOIN products AS p ON p.id = oi.product_id\nWHERE o.user_id = 1\nORDER BY o.id, oi.id;</code></pre>\n<h2>Subquery và CTE (WITH)</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">-- Sản phẩm đắt hơn giá trung bình\nSELECT name, price FROM products\nWHERE price &gt; (SELECT AVG(price) FROM products);\n\n-- CTE: đặt tên cho một bước trung gian, dễ đọc hơn subquery lồng nhau\nWITH spending AS (\n  SELECT o.user_id, SUM(oi.quantity * oi.unit_price) AS total\n  FROM orders o JOIN order_items oi ON oi.order_id = o.id\n  WHERE o.status = 'paid'\n  GROUP BY o.user_id\n)\nSELECT u.name, s.total FROM spending s JOIN users u ON u.id = s.user_id\nORDER BY s.total DESC;</code></pre>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao lưu <code>unit_price</code> trong <code>order_items</code> thay vì JOIN tới <code>products.price</code> lúc cần? (Gợi ý: giá sản phẩm thay đổi theo thời gian.)</li><li><code>COUNT(*)</code>, <code>COUNT(1)</code>, <code>COUNT(column)</code> khác nhau thế nào? Cái nào bỏ qua NULL?</li><li>JOIN hai bảng 1 triệu dòng có chậm không? Điều gì quyết định tốc độ? (Gợi ý: bài Index.)</li></ul>\n",
    "source": "content/05-backend/05-sql-join-group.md",
    "snippetSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "sql-users-per-city",
      "title": "Số người dùng mỗi thành phố",
      "difficulty": "easy",
      "prompt": "<p>Đếm số người dùng ở mỗi thành phố (bỏ qua người chưa có thành phố). Cột kết quả: <code>city</code>, <code>user_count</code>. Sắp theo <code>user_count</code> <strong>giảm dần</strong>, bằng nhau thì theo <code>city</code> tăng dần.</p>\n",
      "fn": null,
      "starter": "SELECT city, COUNT(*)\nFROM users;\n",
      "solution": "SELECT city, COUNT(*) AS user_count\nFROM users\nWHERE city IS NOT NULL\nGROUP BY city\nORDER BY user_count DESC, city ASC;\n",
      "explain": "",
      "hints": [
       "<p><code>GROUP BY city</code>, đặt tên cột bằng <code>AS user_count</code>, loại NULL bằng <code>WHERE city IS NOT NULL</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Dữ liệu mẫu",
        "ordered": true,
        "columns": [
         "city",
         "user_count"
        ],
        "expected": [
         [
          "Seoul",
          3
         ],
         [
          "Busan",
          2
         ],
         [
          "Daegu",
          1
         ],
         [
          "Incheon",
          1
         ]
        ]
       },
       {
        "label": "Thêm người dùng ở Daegu",
        "hidden": true,
        "ordered": true,
        "columns": [
         "city",
         "user_count"
        ],
        "setup": "INSERT INTO users (id, name, email, city, created_at) VALUES (9, 'Lan', 'lan@naver.com', 'Daegu', '2024-06-01'), (10, 'Sora', 'sora@naver.com', 'Daegu', '2024-06-01');",
        "expected": [
         [
          "Daegu",
          3
         ],
         [
          "Seoul",
          3
         ],
         [
          "Busan",
          2
         ],
         [
          "Incheon",
          1
         ]
        ]
       }
      ]
     },
     {
      "id": "sql-orders-per-user",
      "title": "Số đơn của mỗi người (kể cả 0)",
      "difficulty": "medium",
      "prompt": "<p>Với <strong>mọi</strong> người dùng, lấy <code>id</code>, <code>name</code> và số đơn hàng <code>order_count</code> (người chưa có đơn nào phải hiện <code>0</code>). Sắp theo <code>id</code>.</p>\n",
      "fn": null,
      "starter": "SELECT u.id, u.name, COUNT(*) AS order_count\nFROM users u\nJOIN orders o ON o.user_id = u.id\nGROUP BY u.id\nORDER BY u.id;\n",
      "solution": "SELECT u.id, u.name, COUNT(o.id) AS order_count\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id\nGROUP BY u.id, u.name\nORDER BY u.id;\n",
      "explain": "<p>Hai lỗi chồng lên nhau trong code có sẵn — và cả hai <strong>không báo lỗi</strong>, chỉ cho số sai. Đây là câu hỏi SQL phỏng vấn rất phổ biến.</p>\n",
      "hints": [
       "<p><code>JOIN</code> (INNER) loại mất người chưa có đơn. Cần <code>LEFT JOIN</code>.</p>\n",
       "<p>Với LEFT JOIN, <code>COUNT(*)</code> đếm cả dòng NULL → người không có đơn bị tính 1. Dùng <code>COUNT(o.id)</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Dữ liệu mẫu",
        "ordered": true,
        "columns": [
         "id",
         "name",
         "order_count"
        ],
        "expected": [
         [
          1,
          "An",
          3
         ],
         [
          2,
          "Bình",
          1
         ],
         [
          3,
          "Chi",
          2
         ],
         [
          4,
          "Dũng",
          0
         ],
         [
          5,
          "Hà",
          1
         ],
         [
          6,
          "Minh",
          1
         ],
         [
          7,
          "Jisoo",
          2
         ],
         [
          8,
          "Minho",
          0
         ]
        ]
       },
       {
        "label": "Người dùng mới chưa có đơn + đơn mới của Minho",
        "hidden": true,
        "ordered": true,
        "columns": [
         "id",
         "name",
         "order_count"
        ],
        "setup": "INSERT INTO users (id, name, email, city, created_at) VALUES (9, 'Lan', 'lan@naver.com', 'Daegu', '2024-06-01'); INSERT INTO orders (id, user_id, status, created_at) VALUES (11, 8, 'paid', '2024-06-07');",
        "expected": [
         [
          1,
          "An",
          3
         ],
         [
          2,
          "Bình",
          1
         ],
         [
          3,
          "Chi",
          2
         ],
         [
          4,
          "Dũng",
          0
         ],
         [
          5,
          "Hà",
          1
         ],
         [
          6,
          "Minh",
          1
         ],
         [
          7,
          "Jisoo",
          2
         ],
         [
          8,
          "Minho",
          1
         ],
         [
          9,
          "Lan",
          0
         ]
        ]
       }
      ]
     },
     {
      "id": "sql-revenue-by-category",
      "title": "Doanh thu theo danh mục",
      "difficulty": "medium",
      "prompt": "<p>Tính doanh thu <code>revenue</code> = tổng <code>quantity * unit_price</code> theo <strong>danh mục sản phẩm</strong>, chỉ tính các đơn có <code>status = 'paid'</code>. Chỉ giữ danh mục có doanh thu <strong>≥ 150.000</strong>. Cột: <code>category</code>, <code>revenue</code>; sắp theo doanh thu giảm dần.</p>\n",
      "fn": null,
      "starter": "SELECT p.category, SUM(oi.quantity * oi.unit_price) AS revenue\nFROM order_items oi\nJOIN products p ON p.id = oi.product_id\nGROUP BY p.category\nORDER BY revenue DESC;\n",
      "solution": "SELECT p.category, SUM(oi.quantity * oi.unit_price) AS revenue\nFROM order_items oi\nJOIN orders o ON o.id = oi.order_id\nJOIN products p ON p.id = oi.product_id\nWHERE o.status = 'paid'\nGROUP BY p.category\nHAVING SUM(oi.quantity * oi.unit_price) >= 150000\nORDER BY revenue DESC;\n",
      "explain": "",
      "hints": [
       "<p>Trạng thái nằm ở bảng <code>orders</code> — cần JOIN thêm bảng này rồi lọc bằng <code>WHERE</code>.</p>\n",
       "<p>Điều kiện trên <strong>tổng</strong> (sau khi gộp) phải viết trong <code>HAVING</code>, không phải <code>WHERE</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Dữ liệu mẫu",
        "ordered": true,
        "columns": [
         "category",
         "revenue"
        ],
        "expected": [
         [
          "electronics",
          2124000
         ],
         [
          "furniture",
          320000
         ],
         [
          "books",
          208000
         ]
        ]
       },
       {
        "label": "Đơn pending của Bình được thanh toán",
        "hidden": true,
        "ordered": true,
        "columns": [
         "category",
         "revenue"
        ],
        "setup": "UPDATE orders SET status = 'paid' WHERE id = 3; INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (3, 8, 1, 18000);",
        "expected": [
         [
          "electronics",
          2253000
         ],
         [
          "furniture",
          320000
         ],
         [
          "books",
          208000
         ],
         [
          "food",
          153000
         ]
        ]
       }
      ]
     },
     {
      "id": "sql-top-customers",
      "title": "Top 3 khách hàng",
      "difficulty": "medium",
      "prompt": "<p>Tìm 3 khách hàng <strong>chi tiêu nhiều nhất</strong> (chỉ tính đơn <code>paid</code>). Cột: <code>name</code>, <code>total_spent</code>; sắp giảm dần theo <code>total_spent</code>.</p>\n",
      "fn": null,
      "starter": "SELECT u.name\nFROM users u;\n",
      "solution": "SELECT u.name, SUM(oi.quantity * oi.unit_price) AS total_spent\nFROM users u\nJOIN orders o ON o.user_id = u.id\nJOIN order_items oi ON oi.order_id = o.id\nWHERE o.status = 'paid'\nGROUP BY u.id, u.name\nORDER BY total_spent DESC\nLIMIT 3;\n",
      "explain": "",
      "hints": [
       "<p>JOIN ba bảng <code>users → orders → order_items</code>, lọc <code>paid</code>, <code>GROUP BY u.id</code>, <code>ORDER BY ... DESC LIMIT 3</code>.</p>\n",
       "<p>Nên <code>GROUP BY u.id</code> chứ không chỉ <code>u.name</code> — hai người có thể trùng tên.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Dữ liệu mẫu",
        "ordered": true,
        "columns": [
         "name",
         "total_spent"
        ],
        "expected": [
         [
          "An",
          2040000
         ],
         [
          "Hà",
          320000
         ],
         [
          "Jisoo",
          183000
         ]
        ]
       },
       {
        "label": "Có hai khách cùng tên \"An\"",
        "hidden": true,
        "ordered": true,
        "columns": [
         "name",
         "total_spent"
        ],
        "setup": "INSERT INTO users (id, name, email, city, created_at) VALUES (9, 'An', 'an2@naver.com', 'Busan', '2024-06-01'); INSERT INTO orders (id, user_id, status, created_at) VALUES (11, 9, 'paid', '2024-06-08'); INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (11, 9, 1, 450000);",
        "expected": [
         [
          "An",
          2040000
         ],
         [
          "An",
          450000
         ],
         [
          "Hà",
          320000
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "be-sql-write-design",
    "title": "SQL — ghi dữ liệu, ràng buộc, thiết kế bảng",
    "html": "<h2>INSERT, UPDATE, DELETE</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">INSERT INTO products (name, category, price, stock)\nVALUES ('Monitor 27', 'electronics', 289000, 10);\n\nUPDATE products SET stock = stock - 1 WHERE id = 2;\n\nDELETE FROM products WHERE stock = 0 AND category = 'food';\n\nSELECT id, name, stock FROM products ORDER BY id;</code></pre>\n<blockquote><p><strong>Luôn có <code>WHERE</code> khi UPDATE/DELETE.</strong> <code>DELETE FROM products;</code> xoá <strong>toàn bộ</strong> bảng. Thói quen an toàn: viết câu <code>SELECT</code> với đúng <code>WHERE</code> đó trước, xem kết quả, rồi mới đổi thành <code>UPDATE</code>/<code>DELETE</code>.</p>\n</blockquote>\n<h2>Ràng buộc (constraint) — để database tự bảo vệ dữ liệu</h2>\n<pre class=\"code\"><code class=\"language-sql\">CREATE TABLE accounts (\n  id       INTEGER PRIMARY KEY,                     -- khoá chính: duy nhất, không NULL\n  email    TEXT NOT NULL UNIQUE,                    -- bắt buộc, không trùng\n  owner_id INTEGER NOT NULL REFERENCES users(id),   -- khoá ngoại: phải trỏ tới user có thật\n  balance  INTEGER NOT NULL DEFAULT 0 CHECK (balance &gt;= 0),\n  UNIQUE (owner_id, email)                          -- ràng buộc trên nhiều cột\n);</code></pre>\n<pre class=\"code\" data-run><code class=\"language-sql\">CREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE);\nINSERT INTO tags (name) VALUES ('sale');\nINSERT INTO tags (name) VALUES ('sale');  -- lỗi: UNIQUE constraint failed</code></pre>\n<p>Tại sao không chỉ kiểm tra trong code backend? Vì <strong>mọi</strong> đường ghi dữ liệu (nhiều service, script sửa tay, bug, hai request đồng thời) đều đi qua database. Code kiểm tra &quot;email đã tồn tại chưa&quot; rồi mới INSERT vẫn có thể bị hai request cùng lúc vượt qua — chỉ <code>UNIQUE</code> ở database chặn được chắc chắn.</p>\n<blockquote><p><strong>Lưu ý SQLite:</strong> khoá ngoại chỉ được kiểm tra khi bật <code>PRAGMA foreign_keys = ON;</code> (PostgreSQL và MySQL InnoDB luôn kiểm tra).</p>\n</blockquote>\n<h2>UPSERT — thêm, hoặc cập nhật nếu đã có</h2>\n<pre class=\"code\" data-run><code class=\"language-sql\">CREATE TABLE stock_log (product_id INTEGER PRIMARY KEY, views INTEGER NOT NULL);\nINSERT INTO stock_log VALUES (1, 1)\n  ON CONFLICT (product_id) DO UPDATE SET views = views + 1;\nINSERT INTO stock_log VALUES (1, 1)\n  ON CONFLICT (product_id) DO UPDATE SET views = views + 1;\nSELECT * FROM stock_log;   -- views = 2</code></pre>\n<p>Một câu lệnh, nguyên tử — tốt hơn &quot;SELECT xem có chưa → INSERT hoặc UPDATE&quot; (hai request đồng thời sẽ cùng thấy &quot;chưa có&quot;).</p>\n<h2>Chuẩn hoá (정규화, normalization)</h2>\n<p>Mục tiêu: <strong>mỗi sự thật chỉ lưu ở một chỗ</strong> để không bị mâu thuẫn khi cập nhật.</p>\n<table><thead><tr><th>Dạng</th><th>Quy tắc (rút gọn)</th><th>Vi phạm điển hình</th></tr></thead>\n<tbody>\n<tr><td>1NF</td><td>mỗi ô một giá trị nguyên tử, không có nhóm lặp</td><td>cột <code>phones = &quot;010-1111, 010-2222&quot;</code></td></tr>\n<tr><td>2NF</td><td>1NF + mọi cột phụ thuộc <strong>toàn bộ</strong> khoá chính</td><td>bảng <code>(order_id, product_id, product_name)</code> — <code>product_name</code> chỉ phụ thuộc <code>product_id</code></td></tr>\n<tr><td>3NF</td><td>2NF + không phụ thuộc bắc cầu qua cột không phải khoá</td><td><code>orders(…, user_id, user_city)</code> — <code>user_city</code> phụ thuộc <code>user_id</code></td></tr>\n</tbody></table>\n<p><strong>Phi chuẩn hoá</strong> (denormalization) có chủ đích: chấp nhận lặp dữ liệu để đọc nhanh (VD lưu sẵn <code>order_count</code> trong <code>users</code>), đổi lại phải tự giữ đồng bộ khi ghi.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Khoá chính nên là số tự tăng, UUID, hay &quot;khoá tự nhiên&quot; như email? Trade-off của mỗi lựa chọn? (Gợi ý: email có thể đổi; UUID ngẫu nhiên làm index phân mảnh; id tự tăng lộ số lượng bản ghi.)</li><li>Xoá cứng (<code>DELETE</code>) hay xoá mềm (<code>deleted_at</code> timestamp)? Mỗi cách ảnh hưởng thế nào tới khoá ngoại, <code>UNIQUE</code>, và luật bảo vệ dữ liệu cá nhân?</li></ul>\n",
    "source": "content/05-backend/06-sql-write-design.md",
    "snippetSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "sql-modify-products",
      "title": "Cập nhật kho hàng",
      "difficulty": "medium",
      "prompt": "<p>Viết các câu lệnh (cách nhau bởi <code>;</code>) để:</p>\n<ol><li>Thêm sản phẩm <code>'Monitor 27'</code>, danh mục <code>'electronics'</code>, giá <code>289000</code>, tồn kho <code>10</code>.</li><li>Giảm giá <strong>10%</strong> cho mọi sản phẩm danh mục <code>'books'</code> (giá là số nguyên — làm tròn bằng <code>CAST(... AS INTEGER)</code> hoặc nhân <code>* 9 / 10</code>).</li><li>Xoá các sản phẩm <strong>hết hàng</strong> (<code>stock = 0</code>) <strong>chưa từng được bán</strong> (không xuất hiện trong <code>order_items</code>).</li></ol>\n<p>Bộ chấm sẽ chạy <code>SELECT id, name, price, stock FROM products ORDER BY id</code> sau code của bạn.</p>\n",
      "fn": null,
      "starter": "INSERT INTO products (name, category, price, stock)\nVALUES ('Monitor 27', 'electronics', 289000, 10);\n\n-- 2. giảm giá sách\n\n-- 3. xoá sản phẩm hết hàng chưa từng bán\n",
      "solution": "INSERT INTO products (name, category, price, stock)\nVALUES ('Monitor 27', 'electronics', 289000, 10);\n\nUPDATE products\nSET price = price * 9 / 10\nWHERE category = 'books';\n\nDELETE FROM products\nWHERE stock = 0\n  AND id NOT IN (SELECT product_id FROM order_items);\n",
      "explain": "<p>Nếu xoá cả sản phẩm đã bán, các dòng <code>order_items</code> cũ sẽ trỏ tới sản phẩm không còn tồn tại — với khoá ngoại bật, database sẽ từ chối; không bật thì dữ liệu lịch sử bị hỏng. Đó là lý do hệ thống thật thường <strong>xoá mềm</strong> sản phẩm.</p>\n",
      "hints": [
       "<p>Phép chia số nguyên trong SQLite: <code>price * 9 / 10</code> (nhân trước để không mất phần lẻ).</p>\n",
       "<p>Điều kiện &quot;chưa từng được bán&quot;: <code>id NOT IN (SELECT product_id FROM order_items)</code> hoặc <code>NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = products.id)</code>.</p>\n",
       "<p><code>Green Tea Set</code> hết hàng nhưng <strong>đã từng bán</strong> (đơn 9) → phải giữ lại, vì <code>order_items</code> còn tham chiếu tới nó.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Bảng products sau khi chạy",
        "ordered": true,
        "after": "SELECT id, name, price, stock FROM products ORDER BY id",
        "expected": [
         [
          1,
          "Laptop Pro 14",
          1890000,
          5
         ],
         [
          2,
          "Wireless Mouse",
          35000,
          120
         ],
         [
          3,
          "Mechanical Keyboard",
          129000,
          40
         ],
         [
          5,
          "Clean Code",
          28800,
          25
         ],
         [
          6,
          "Designing Data-Intensive Applications",
          43200,
          12
         ],
         [
          7,
          "Coffee Beans 1kg",
          27000,
          60
         ],
         [
          8,
          "Green Tea Set",
          18000,
          0
         ],
         [
          9,
          "Standing Desk",
          450000,
          3
         ],
         [
          10,
          "Office Chair",
          320000,
          7
         ],
         [
          11,
          "Monitor 27",
          289000,
          10
         ]
        ]
       },
       {
        "label": "Dữ liệu khác: thêm sách và sản phẩm hết hàng",
        "hidden": true,
        "ordered": true,
        "setup": "INSERT INTO products (id, name, category, price, stock) VALUES (20, 'SQL Antipatterns', 'books', 41000, 2), (21, 'Old Cable', 'electronics', 5000, 0); UPDATE products SET stock = 0 WHERE id = 7;",
        "after": "SELECT id, name, price, stock FROM products ORDER BY id",
        "expected": [
         [
          1,
          "Laptop Pro 14",
          1890000,
          5
         ],
         [
          2,
          "Wireless Mouse",
          35000,
          120
         ],
         [
          3,
          "Mechanical Keyboard",
          129000,
          40
         ],
         [
          5,
          "Clean Code",
          28800,
          25
         ],
         [
          6,
          "Designing Data-Intensive Applications",
          43200,
          12
         ],
         [
          7,
          "Coffee Beans 1kg",
          27000,
          0
         ],
         [
          8,
          "Green Tea Set",
          18000,
          0
         ],
         [
          9,
          "Standing Desk",
          450000,
          3
         ],
         [
          10,
          "Office Chair",
          320000,
          7
         ],
         [
          20,
          "SQL Antipatterns",
          36900,
          2
         ],
         [
          22,
          "Monitor 27",
          289000,
          10
         ]
        ]
       }
      ]
     },
     {
      "id": "sql-create-reviews",
      "title": "Thiết kế bảng có ràng buộc",
      "difficulty": "medium",
      "prompt": "<p>Tạo bảng <code>reviews</code> lưu đánh giá sản phẩm, với các cột:</p>\n<table><thead><tr><th>Cột</th><th>Yêu cầu</th></tr></thead>\n<tbody>\n<tr><td><code>id</code></td><td>INTEGER, khoá chính</td></tr>\n<tr><td><code>product_id</code></td><td>bắt buộc, khoá ngoại tới <code>products(id)</code></td></tr>\n<tr><td><code>user_id</code></td><td>bắt buộc, khoá ngoại tới <code>users(id)</code></td></tr>\n<tr><td><code>rating</code></td><td>INTEGER bắt buộc, chỉ từ <strong>1 đến 5</strong></td></tr>\n<tr><td><code>comment</code></td><td>TEXT, không bắt buộc</td></tr>\n</tbody></table>\n<p>Thêm ràng buộc: mỗi người dùng chỉ được đánh giá <strong>một lần</strong> cho mỗi sản phẩm. Bộ chấm sẽ thử chèn dữ liệu sai và kiểm tra database có <strong>từ chối</strong> không.</p>\n",
      "fn": null,
      "starter": "CREATE TABLE reviews (\n  id INTEGER PRIMARY KEY,\n  product_id INTEGER,\n  user_id INTEGER,\n  rating INTEGER,\n  comment TEXT\n);\n",
      "solution": "CREATE TABLE reviews (\n  id INTEGER PRIMARY KEY,\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),\n  comment TEXT,\n  UNIQUE (product_id, user_id)\n);\n",
      "explain": "",
      "hints": [
       "<p><code>NOT NULL</code>, <code>REFERENCES bảng(cột)</code>, <code>CHECK (rating BETWEEN 1 AND 5)</code>.</p>\n",
       "<p>Ràng buộc trên hai cột: thêm dòng <code>UNIQUE (product_id, user_id)</code> cuối định nghĩa bảng.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "Chèn đánh giá hợp lệ",
        "after": "INSERT INTO reviews (product_id, user_id, rating, comment) VALUES (1, 1, 5, 'Tốt'), (1, 2, 4, NULL); SELECT product_id, user_id, rating FROM reviews ORDER BY user_id",
        "ordered": true,
        "expected": [
         [
          1,
          1,
          5
         ],
         [
          1,
          2,
          4
         ]
        ]
       },
       {
        "label": "rating = 6 phải bị từ chối",
        "expectError": true,
        "after": "INSERT INTO reviews (product_id, user_id, rating) VALUES (1, 1, 6)"
       },
       {
        "label": "rating = 0 phải bị từ chối",
        "expectError": true,
        "after": "INSERT INTO reviews (product_id, user_id, rating) VALUES (1, 1, 0)"
       },
       {
        "label": "thiếu rating phải bị từ chối",
        "expectError": true,
        "after": "INSERT INTO reviews (product_id, user_id) VALUES (1, 1)"
       },
       {
        "label": "thiếu user_id phải bị từ chối",
        "expectError": true,
        "after": "INSERT INTO reviews (product_id, rating) VALUES (1, 3)"
       },
       {
        "label": "một người đánh giá cùng sản phẩm hai lần phải bị từ chối",
        "expectError": true,
        "after": "INSERT INTO reviews (product_id, user_id, rating) VALUES (2, 3, 5); INSERT INTO reviews (product_id, user_id, rating) VALUES (2, 3, 1)"
       },
       {
        "label": "product_id không tồn tại phải bị từ chối (khoá ngoại bật)",
        "setup": "PRAGMA foreign_keys = ON;",
        "expectError": true,
        "after": "INSERT INTO reviews (product_id, user_id, rating) VALUES (999, 1, 5)"
       }
      ]
     },
     {
      "id": "sql-upsert-cart",
      "title": "Thêm vào giỏ hàng (UPSERT)",
      "difficulty": "medium",
      "prompt": "<p>Bảng <code>cart_items(user_id, product_id, quantity)</code> có khoá chính ghép <code>(user_id, product_id)</code>. Viết <strong>một câu lệnh</strong> để người dùng <code>1</code> thêm <strong>2</strong> sản phẩm <code>3</code> vào giỏ: nếu đã có dòng đó thì <strong>cộng dồn</strong> <code>quantity</code>, chưa có thì thêm mới.</p>\n<p>Bộ chấm chạy câu lệnh trên các trạng thái giỏ hàng khác nhau, rồi <code>SELECT * FROM cart_items ORDER BY user_id, product_id</code>.</p>\n",
      "fn": null,
      "starter": "INSERT INTO cart_items (user_id, product_id, quantity)\nVALUES (1, 3, 2);\n",
      "solution": "INSERT INTO cart_items (user_id, product_id, quantity)\nVALUES (1, 3, 2)\nON CONFLICT (user_id, product_id)\nDO UPDATE SET quantity = quantity + excluded.quantity;\n",
      "explain": "<p>Cú pháp này có trong SQLite và PostgreSQL. MySQL viết <code>INSERT ... ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)</code>. Ý tưởng giống nhau: một thao tác nguyên tử, không có khoảng hở giữa &quot;kiểm tra&quot; và &quot;ghi&quot;.</p>\n",
      "hints": [
       "<p><code>INSERT ... ON CONFLICT (cột khoá) DO UPDATE SET ...</code></p>\n",
       "<p><code>excluded.quantity</code> là giá trị bạn <strong>định</strong> chèn (2); <code>quantity</code> là giá trị đang có trong bảng.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);\n\nCREATE TABLE cart_items (\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL CHECK (quantity > 0),\n  PRIMARY KEY (user_id, product_id)\n);\nINSERT INTO cart_items VALUES (1, 3, 1), (2, 5, 4);",
      "needsSql": false,
      "tests": [
       {
        "label": "Giỏ đã có 1 sản phẩm 3 → thành 3",
        "after": "SELECT * FROM cart_items ORDER BY user_id, product_id",
        "ordered": true,
        "expected": [
         [
          1,
          3,
          3
         ],
         [
          2,
          5,
          4
         ]
        ]
       },
       {
        "label": "Giỏ chưa có sản phẩm 3 → thêm mới 2",
        "setup": "DELETE FROM cart_items WHERE user_id = 1;",
        "after": "SELECT * FROM cart_items ORDER BY user_id, product_id",
        "ordered": true,
        "expected": [
         [
          1,
          3,
          2
         ],
         [
          2,
          5,
          4
         ]
        ]
       },
       {
        "label": "Giỏ đang có 5 → thành 7",
        "hidden": true,
        "setup": "UPDATE cart_items SET quantity = 5 WHERE user_id = 1;",
        "after": "SELECT * FROM cart_items ORDER BY user_id, product_id",
        "ordered": true,
        "expected": [
         [
          1,
          3,
          7
         ],
         [
          2,
          5,
          4
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "be-index-transaction",
    "title": "Index và Transaction",
    "html": "<p>Hai chủ đề được hỏi <strong>nhiều nhất</strong> trong phỏng vấn backend ở Hàn (인덱스, 트랜잭션).</p>\n<h2>Index — mục lục của bảng</h2>\n<p>Không có index, tìm <code>WHERE user_id = 7</code> phải <strong>đọc mọi dòng</strong> (full table scan, O(n)). Index là một cấu trúc <strong>B-tree</strong> (B+tree) sắp sẵn theo cột được đánh index, trỏ về dòng gốc → tìm kiếm O(log n), giống tra mục lục sách.</p>\n<pre class=\"code\" data-run><code class=\"language-sql\">EXPLAIN QUERY PLAN SELECT * FROM orders WHERE user_id = 7;   -- SCAN orders: quét cả bảng\n\nCREATE INDEX idx_orders_user ON orders (user_id);\n\nEXPLAIN QUERY PLAN SELECT * FROM orders WHERE user_id = 7;   -- SEARCH ... USING INDEX</code></pre>\n<p><code>EXPLAIN</code> (MySQL, PostgreSQL: <code>EXPLAIN ANALYZE</code>) là công cụ số một khi một API chậm: xem database <strong>thực sự</strong> làm gì.</p>\n<blockquote><p>Khoá chính và cột <code>UNIQUE</code> tự có index. <strong>Khoá ngoại thì không</strong> (trong SQLite, PostgreSQL) — một nguồn chậm rất phổ biến khi JOIN.</p>\n</blockquote>\n<h3>Vì sao B-tree mà không phải hash?</h3>\n<p>Hash tra cứu bằng <code>=</code> rất nhanh nhưng <strong>không hỗ trợ khoảng</strong> (<code>&lt;</code>, <code>BETWEEN</code>, <code>ORDER BY</code>, <code>LIKE 'abc%'</code>). B-tree giữ dữ liệu <strong>có thứ tự</strong> nên làm được cả hai, và rất nông (3–4 tầng cho hàng triệu dòng) → ít lần đọc đĩa.</p>\n<h3>Index ghép (composite) và quy tắc &quot;tiền tố bên trái&quot;</h3>\n<p>Index <code>(user_id, status, created_at)</code> sắp xếp như danh bạ theo (họ, tên đệm, tên):</p>\n<table><thead><tr><th>Truy vấn</th><th>Dùng được index?</th></tr></thead>\n<tbody>\n<tr><td><code>WHERE user_id = 1</code></td><td>✔ (tiền tố trái)</td></tr>\n<tr><td><code>WHERE user_id = 1 AND status = 'paid'</code></td><td>✔</td></tr>\n<tr><td><code>WHERE user_id = 1 AND status = 'paid' ORDER BY created_at</code></td><td>✔ — kể cả <strong>không cần sắp xếp lại</strong></td></tr>\n<tr><td><code>WHERE status = 'paid'</code></td><td>✘ — thiếu cột đầu tiên</td></tr>\n<tr><td><code>WHERE user_id = 1 ORDER BY created_at</code></td><td>một phần — phải sắp xếp thêm</td></tr>\n</tbody></table>\n<h3>Khi nào index không giúp, hoặc gây hại</h3>\n<ul><li>Bọc cột trong hàm: <code>WHERE LOWER(email) = ...</code>, <code>WHERE price * 2 &gt; ...</code> → không dùng được index (trừ khi tạo index trên biểu thức).</li><li><code>LIKE '%abc'</code> (wildcard ở đầu).</li><li>Cột ít giá trị khác nhau (VD <code>status</code> chỉ 3 giá trị) → quét bảng có khi còn nhanh hơn.</li><li><strong>Mỗi index làm INSERT/UPDATE/DELETE chậm hơn</strong> (phải cập nhật cả index) và tốn dung lượng. Đánh index theo <strong>truy vấn thực tế</strong>, không phải &quot;cột nào cũng đánh&quot;.</li></ul>\n<h2>Transaction — tất cả hoặc không gì cả</h2>\n<p>Chuyển 100.000 won từ An sang Jisoo là <strong>hai</strong> câu UPDATE. Nếu server sập giữa chừng, tiền biến mất. Transaction gom chúng thành một đơn vị:</p>\n<pre class=\"code\" data-run><code class=\"language-sql\">CREATE TABLE accounts (id INTEGER PRIMARY KEY, owner TEXT, balance INTEGER CHECK (balance &gt;= 0));\nINSERT INTO accounts VALUES (1, 'An', 500000), (2, 'Jisoo', 100000);\n\nBEGIN;\nUPDATE accounts SET balance = balance - 100000 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100000 WHERE id = 2;\nCOMMIT;                       -- hoặc ROLLBACK; để huỷ mọi thay đổi từ BEGIN\n\nSELECT * FROM accounts;</code></pre>\n<h3>ACID</h3>\n<table><thead><tr><th></th><th>Ý nghĩa</th></tr></thead>\n<tbody>\n<tr><td><strong>A</strong>tomicity (원자성)</td><td>tất cả câu lệnh thành công, hoặc không câu nào có hiệu lực</td></tr>\n<tr><td><strong>C</strong>onsistency (일관성)</td><td>trước và sau transaction, dữ liệu thoả mọi ràng buộc</td></tr>\n<tr><td><strong>I</strong>solation (격리성)</td><td>các transaction chạy đồng thời không thấy trạng thái dở dang của nhau (ở mức độ tuỳ cấu hình)</td></tr>\n<tr><td><strong>D</strong>urability (지속성)</td><td>đã COMMIT thì không mất, kể cả mất điện</td></tr>\n</tbody></table>\n<h3>Mức cô lập (isolation level) và các hiện tượng</h3>\n<table><thead><tr><th>Hiện tượng</th><th>Mô tả</th></tr></thead>\n<tbody>\n<tr><td>Dirty read</td><td>đọc dữ liệu transaction khác <strong>chưa commit</strong> (có thể bị rollback)</td></tr>\n<tr><td>Non-repeatable read</td><td>đọc lại cùng một dòng trong một transaction, giá trị đã <strong>bị sửa</strong></td></tr>\n<tr><td>Phantom read</td><td>chạy lại cùng truy vấn, xuất hiện <strong>dòng mới</strong></td></tr>\n</tbody></table>\n<table><thead><tr><th>Mức</th><th>Dirty</th><th>Non-repeatable</th><th>Phantom</th></tr></thead>\n<tbody>\n<tr><td>READ UNCOMMITTED</td><td>có thể</td><td>có thể</td><td>có thể</td></tr>\n<tr><td>READ COMMITTED (mặc định PostgreSQL, Oracle)</td><td>✘</td><td>có thể</td><td>có thể</td></tr>\n<tr><td>REPEATABLE READ (mặc định MySQL InnoDB)</td><td>✘</td><td>✘</td><td>có thể (InnoDB hạn chế phần lớn)</td></tr>\n<tr><td>SERIALIZABLE</td><td>✘</td><td>✘</td><td>✘</td></tr>\n</tbody></table>\n<p>Mức càng cao càng an toàn nhưng càng nhiều khoá/xung đột → chậm hơn.</p>\n<h3>Lost update — bug đồng thời kinh điển</h3>\n<p>Hai request cùng đọc <code>stock = 1</code>, cùng thấy còn hàng, cùng trừ → <code>stock = -1</code> (bán quá số lượng). Cách chống:</p>\n<ul><li>Cập nhật nguyên tử có điều kiện: <code>UPDATE products SET stock = stock - 1 WHERE id = ? AND stock &gt;= 1</code> rồi kiểm tra số dòng bị ảnh hưởng.</li><li>Khoá dòng: <code>SELECT ... FOR UPDATE</code> (MySQL, PostgreSQL).</li><li>Optimistic locking: cột <code>version</code>, <code>UPDATE ... WHERE id = ? AND version = ?</code>.</li></ul>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Index làm đọc nhanh, ghi chậm. Với bảng log ghi liên tục mà hiếm khi đọc, bạn đánh index thế nào?</li><li>Tại sao không đặt mọi transaction ở mức SERIALIZABLE cho an toàn?</li><li>Deadlock (교착 상태) xảy ra khi nào giữa hai transaction? Một quy tắc đơn giản giúp tránh nó là gì? (Gợi ý: thứ tự khoá các dòng.)</li></ul>\n",
    "source": "content/05-backend/07-index-transaction.md",
    "snippetSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "sql-index-foreign-key",
      "title": "Đánh index cho khoá ngoại",
      "difficulty": "easy",
      "prompt": "<p>API <code>GET /users/:id/orders</code> chạy truy vấn <code>SELECT * FROM orders WHERE user_id = ?</code> và đang <strong>quét toàn bộ bảng</strong> (chạy <code>EXPLAIN QUERY PLAN</code> để thấy <code>SCAN orders</code>).</p>\n<p>Viết câu lệnh tạo index để truy vấn này (và phép JOIN <code>users</code> → <code>orders</code>) dùng <strong>SEARCH</strong> thay vì <strong>SCAN</strong>.</p>\n",
      "fn": null,
      "starter": "EXPLAIN QUERY PLAN SELECT * FROM orders WHERE user_id = 7;\n",
      "solution": "CREATE INDEX idx_orders_user_id ON orders (user_id);\n",
      "explain": "",
      "hints": [
       "<p><code>CREATE INDEX tên_index ON bảng (cột);</code> — đặt tên có ý nghĩa, VD <code>idx_orders_user_id</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "kế hoạch của WHERE user_id = 7",
        "plan": "SELECT * FROM orders WHERE user_id = 7",
        "planIncludes": "USING",
        "planExcludes": "SCAN"
       },
       {
        "label": "kế hoạch của JOIN users → orders",
        "plan": "SELECT u.name, o.id FROM users u JOIN orders o ON o.user_id = u.id WHERE u.id = 7",
        "planIncludes": "SEARCH o USING",
        "planExcludes": "SCAN"
       },
       {
        "label": "dữ liệu không bị thay đổi",
        "after": "SELECT COUNT(*) FROM orders",
        "expected": [
         [
          10
         ]
        ]
       }
      ]
     },
     {
      "id": "sql-composite-index",
      "title": "Index ghép cho truy vấn có sắp xếp",
      "difficulty": "medium",
      "prompt": "<p>Trang &quot;Lịch sử mua hàng&quot; chạy:</p>\n<pre class=\"code\"><code class=\"language-sql\">SELECT id, created_at FROM orders\nWHERE user_id = ? AND status = 'paid'\nORDER BY created_at DESC;</code></pre>\n<p>Tạo <strong>một</strong> index sao cho database:</p>\n<ol><li>tìm theo <strong>cả</strong> <code>user_id</code> và <code>status</code> bằng index, và</li><li><strong>không</strong> phải sắp xếp thêm (kế hoạch không có <code>USE TEMP B-TREE FOR ORDER BY</code>).</li></ol>\n<p>Index đó cũng phải phục vụ được truy vấn chỉ lọc <code>WHERE user_id = ?</code>.</p>\n",
      "fn": null,
      "starter": "CREATE INDEX idx_orders_user ON orders (user_id);\n\nEXPLAIN QUERY PLAN\nSELECT id, created_at FROM orders\nWHERE user_id = 1 AND status = 'paid'\nORDER BY created_at DESC;\n",
      "solution": "CREATE INDEX idx_orders_user_status_created ON orders (user_id, status, created_at);\n",
      "explain": "<p>Index <code>(user_id, status, created_at)</code>: các dòng của cùng <code>(user_id, status)</code> nằm liền nhau trong B-tree và <strong>đã sắp theo <code>created_at</code></strong> — database chỉ cần đọc ngược đoạn đó. Thêm nữa, <code>id</code> (rowid) và <code>created_at</code> đều có trong index nên SQLite không cần quay lại bảng gốc: đó là <strong>covering index</strong>.</p>\n",
      "hints": [
       "<p>Index một cột <code>(user_id)</code> tìm được theo user nhưng vẫn phải lọc <code>status</code> và sắp xếp lại — xem kế hoạch của code có sẵn.</p>\n",
       "<p>Thứ tự cột trong index ghép: các cột so sánh <strong>bằng</strong> (<code>=</code>) trước, cột dùng để <strong>sắp xếp</strong> sau cùng.</p>\n"
      ],
      "followUp": "<p>Nếu đổi thứ tự thành <code>(created_at, user_id, status)</code> thì sao? Thử tạo và xem <code>EXPLAIN QUERY PLAN</code>. Giải thích bằng quy tắc tiền tố bên trái.</p>\n",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "sql",
      "schema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);",
      "needsSql": false,
      "tests": [
       {
        "label": "tìm theo user_id và status",
        "plan": "SELECT id, created_at FROM orders WHERE user_id = 1 AND status = 'paid' ORDER BY created_at DESC",
        "planIncludes": "user_id=? AND status=?"
       },
       {
        "label": "không phải sắp xếp thêm",
        "plan": "SELECT id, created_at FROM orders WHERE user_id = 1 AND status = 'paid' ORDER BY created_at DESC",
        "planIncludes": "USING",
        "planExcludes": "TEMP B-TREE"
       },
       {
        "label": "truy vấn chỉ lọc user_id vẫn dùng index",
        "plan": "SELECT * FROM orders WHERE user_id = 1",
        "planIncludes": "USING",
        "planExcludes": "SCAN"
       }
      ]
     }
    ]
   },
   {
    "id": "be-api-database",
    "title": "API + Database",
    "html": "<p>Ghép hai mảnh lại: handler nhận request → truy vấn database → trả JSON. Trong bài này, mỗi handler có sẵn:</p>\n<ul><li><code>query(sql, params)</code> → mảng object (cho SELECT)</li><li><code>execute(sql, params)</code> → <code>{ changes, lastInsertId }</code> (cho INSERT/UPDATE/DELETE)</li><li><code>db.exec(&quot;BEGIN&quot;)</code>, <code>db.exec(&quot;COMMIT&quot;)</code>, <code>db.exec(&quot;ROLLBACK&quot;)</code> cho transaction</li></ul>\n<p>Chúng mô phỏng thư viện thật: <code>pg</code> (PostgreSQL), <code>mysql2</code>, <code>better-sqlite3</code> đều có API tương tự.</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const app = createApp();\n\napp.get(&quot;/products/:id&quot;, (req, res) =&gt; {\n  const rows = query(&quot;SELECT id, name, price, stock FROM products WHERE id = ?&quot;, [Number(req.params.id)]);\n  if (rows.length === 0) return res.status(404).json({ error: &quot;Product not found&quot; });\n  res.json(rows[0]);\n});\n\n(async () =&gt; {\n  console.log(await request(app, { path: &quot;/products/3&quot; }));\n  console.log(await request(app, { path: &quot;/products/404&quot; }));\n})();</code></pre>\n<h2>1. SQL injection — lỗ hổng số một của backend</h2>\n<p><strong>Không bao giờ</strong> ghép input của người dùng vào chuỗi SQL:</p>\n<pre class=\"code\" data-run><code class=\"language-js\">const app = createApp();\n\napp.get(&quot;/login-unsafe&quot;, (req, res) =&gt; {\n  const email = req.query.email;\n  const sql = &quot;SELECT id, name FROM users WHERE email = '&quot; + email + &quot;'&quot;;\n  console.log(&quot;SQL thực sự chạy:&quot;, sql);\n  res.json(query(sql));\n});\n\n(async () =&gt; {\n  const attack = await request(app, { path: &quot;/login-unsafe?email=&quot; + encodeURIComponent(&quot;x' OR '1'='1&quot;) });\n  console.log(&quot;Kẻ tấn công nhận được&quot;, attack.body.length, &quot;người dùng!&quot;);\n})();</code></pre>\n<p>Input <code>x' OR '1'='1</code> biến điều kiện thành <code>email = 'x' OR '1'='1'</code> — luôn đúng. Kẻ tấn công còn có thể <code>UNION SELECT</code> để đọc bảng mật khẩu, hoặc xoá dữ liệu.</p>\n<p><strong>Cách đúng: tham số hoá (prepared statement / placeholder)</strong> — gửi câu SQL và dữ liệu <strong>riêng rẽ</strong>; database không bao giờ hiểu dữ liệu là code:</p>\n<pre class=\"code\"><code class=\"language-js\">query(&quot;SELECT id, name FROM users WHERE email = ?&quot;, [email]);   // SQLite, MySQL\n// PostgreSQL (pg):  client.query(&quot;... WHERE email = $1&quot;, [email])</code></pre>\n<p>ORM (Prisma, TypeORM, Sequelize; JPA/Hibernate bên Java) tham số hoá tự động — nhưng các hàm &quot;raw query&quot; của chúng vẫn có thể bị injection nếu bạn tự ghép chuỗi.</p>\n<h2>2. Vấn đề N+1 query</h2>\n<pre class=\"code\"><code class=\"language-js\">// Lấy 50 đơn hàng → 1 truy vấn\nconst orders = query(&quot;SELECT * FROM orders WHERE user_id = ?&quot;, [userId]);\nfor (const o of orders) {\n  // ... rồi mỗi đơn lại 1 truy vấn → tổng 1 + 50 = 51 truy vấn\n  o.items = query(&quot;SELECT * FROM order_items WHERE order_id = ?&quot;, [o.id]);\n}</code></pre>\n<p>Mỗi truy vấn tốn một vòng đi-về mạng tới database (~0,5–2 ms trong cùng datacenter). 51 truy vấn → API chậm hàng chục lần, và tệ hơn khi dữ liệu lớn dần. Đây là lỗi hiệu năng <strong>phổ biến nhất</strong> với ORM (lazy loading).</p>\n<p>Cách sửa: lấy hết trong <strong>một</strong> truy vấn với <code>JOIN</code>, hoặc <strong>hai</strong> truy vấn với <code>WHERE order_id IN (...)</code>, rồi gom nhóm trong code.</p>\n<h2>3. Transaction trong code</h2>\n<pre class=\"code\"><code class=\"language-js\">db.exec(&quot;BEGIN&quot;);\ntry {\n  // ... nhiều câu lệnh\n  db.exec(&quot;COMMIT&quot;);\n} catch (err) {\n  db.exec(&quot;ROLLBACK&quot;);\n  throw err;\n}</code></pre>\n<p>Mọi <code>return</code> sớm (VD trả 404 giữa chừng) cũng phải <code>ROLLBACK</code> — nếu không transaction treo, giữ khoá, và các request sau bị kẹt. Thư viện thật thường có helper kiểu <code>db.transaction(async (tx) =&gt; {...})</code> tự lo việc này.</p>\n<h2>4. Connection pool</h2>\n<p>Mở kết nối database tốn kém (bắt tay TCP, xác thực). Server giữ sẵn một <strong>pool</strong> vài chục kết nối và cho các request mượn. Pool quá nhỏ → request xếp hàng chờ; quá lớn → database quá tải. Một transaction quên <code>COMMIT/ROLLBACK</code> sẽ &quot;giữ&quot; một kết nối mãi mãi — đủ nhiều lần là cả API treo.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Đã escape dấu nháy (<code>'</code> → <code>''</code>) thì có an toàn như tham số hoá không? Tại sao người ta vẫn khuyên dùng placeholder?</li><li>JOIN một lần trả về dữ liệu lặp lại (thông tin đơn hàng lặp ở mỗi dòng sản phẩm), còn cách &quot;hai truy vấn + IN&quot; thì không. Khi nào chọn cách nào?</li><li>ORM giúp gì và giấu gì? Khi phỏng vấn được hỏi &quot;JPA N+1 là gì, sửa thế nào?&quot; bạn sẽ trả lời ra sao? (Gợi ý: fetch join, batch size, EntityGraph.)</li></ul>\n",
    "source": "content/05-backend/08-api-database.md",
    "snippetSchema": "",
    "snippetHelpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Database SQLite thật (sql.js) =====\n// query(sql, params)   → mảng object, dùng cho SELECT        VD: query('SELECT * FROM users WHERE id = ?', [id])\n// execute(sql, params) → { changes, lastInsertId }, dùng cho INSERT / UPDATE / DELETE\n// db                   → đối tượng Database của sql.js (db.exec('BEGIN') ...)\n// queryLog             → danh sách các câu SQL đã chạy qua query/execute (để đếm số truy vấn)\nlet db = null;\nconst queryLog = [];\nconst SEED_SQL = `CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);`;\n\nasync function resetDb() {\n  const SQL = await __sqlReady;\n  if (db) db.close();\n  db = new SQL.Database();\n  db.exec(SEED_SQL);\n  queryLog.length = 0;\n  return db;\n}\n\nasync function __ensureDb() {\n  if (!db) await resetDb();\n}\n\nfunction query(sql, params = []) {\n  queryLog.push(sql);\n  const stmt = db.prepare(sql);\n  try {\n    stmt.bind(params);\n    const rows = [];\n    while (stmt.step()) rows.push(stmt.getAsObject());\n    return rows;\n  } finally {\n    stmt.free();\n  }\n}\n\nfunction execute(sql, params = []) {\n  queryLog.push(sql);\n  db.run(sql, params);\n  const changes = db.getRowsModified();\n  const lastInsertId = db.exec('SELECT last_insert_rowid()')[0].values[0][0];\n  return { changes, lastInsertId };\n}\n",
    "snippetNeedsSql": true,
    "exercises": [
     {
      "id": "api-fix-sql-injection",
      "title": "Vá lỗ hổng SQL injection",
      "difficulty": "medium",
      "prompt": "<p><code>GET /users/search?name=...</code> trả về <code>[{ id, name, city }]</code> của người dùng có tên <strong>chứa</strong> chuỗi <code>name</code>, sắp theo <code>id</code>. Code có sẵn chạy đúng với input bình thường nhưng bị <strong>SQL injection</strong> và <strong>vỡ</strong> khi tên có dấu nháy.</p>\n<p>Sửa lại để:</p>\n<ul><li>Dùng <strong>tham số hoá</strong> (<code>query(sql, [params])</code>), không ghép chuỗi.</li><li>Thiếu <code>name</code> hoặc <code>name</code> rỗng → <code>400 { &quot;error&quot;: &quot;name is required&quot; }</code>.</li></ul>\n",
      "fn": null,
      "starter": "const app = createApp();\n\napp.get(\"/users/search\", (req, res) => {\n  const name = req.query.name;\n  const rows = query(\"SELECT id, name, city FROM users WHERE name LIKE '%\" + name + \"%' ORDER BY id\");\n  res.json(rows);\n});\n",
      "solution": "const app = createApp();\n\napp.get(\"/users/search\", (req, res) => {\n  const name = req.query.name;\n  if (!name) return res.status(400).json({ error: \"name is required\" });\n  const rows = query(\"SELECT id, name, city FROM users WHERE name LIKE ? ORDER BY id\", [\"%\" + name + \"%\"]);\n  res.json(rows);\n});\n",
      "explain": "<p>Tham số hoá đảm bảo input luôn được coi là <strong>dữ liệu</strong>. Input <code>%</code> vẫn khớp mọi tên (đó là ký tự đại diện của LIKE, không phải injection) — muốn chặn thì escape <code>%</code>/<code>_</code> và dùng <code>LIKE ? ESCAPE '\\\\'</code>.</p>\n",
      "hints": [
       "<p>Placeholder <code>?</code> thay cho <strong>toàn bộ</strong> giá trị, kể cả các dấu <code>%</code>: <code>WHERE name LIKE ?</code> với tham số <code>&quot;%&quot; + name + &quot;%&quot;</code>.</p>\n",
       "<p>Không viết <code>LIKE '%?%'</code> — dấu <code>?</code> nằm trong chuỗi SQL sẽ chỉ là ký tự <code>?</code> bình thường.</p>\n"
      ],
      "followUp": "",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Database SQLite thật (sql.js) =====\n// query(sql, params)   → mảng object, dùng cho SELECT        VD: query('SELECT * FROM users WHERE id = ?', [id])\n// execute(sql, params) → { changes, lastInsertId }, dùng cho INSERT / UPDATE / DELETE\n// db                   → đối tượng Database của sql.js (db.exec('BEGIN') ...)\n// queryLog             → danh sách các câu SQL đã chạy qua query/execute (để đếm số truy vấn)\nlet db = null;\nconst queryLog = [];\nconst SEED_SQL = `CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);`;\n\nasync function resetDb() {\n  const SQL = await __sqlReady;\n  if (db) db.close();\n  db = new SQL.Database();\n  db.exec(SEED_SQL);\n  queryLog.length = 0;\n  return db;\n}\n\nasync function __ensureDb() {\n  if (!db) await resetDb();\n}\n\nfunction query(sql, params = []) {\n  queryLog.push(sql);\n  const stmt = db.prepare(sql);\n  try {\n    stmt.bind(params);\n    const rows = [];\n    while (stmt.step()) rows.push(stmt.getAsObject());\n    return rows;\n  } finally {\n    stmt.free();\n  }\n}\n\nfunction execute(sql, params = []) {\n  queryLog.push(sql);\n  db.run(sql, params);\n  const changes = db.getRowsModified();\n  const lastInsertId = db.exec('SELECT last_insert_rowid()')[0].values[0][0];\n  return { changes, lastInsertId };\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": true,
      "tests": [
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/users/search?name=Min\" }); return [r.status, r.body];",
        "label": "name=Min",
        "expected": [
         200,
         [
          {
           "id": 6,
           "name": "Minh",
           "city": "Busan"
          },
          {
           "id": 8,
           "name": "Minho",
           "city": "Daegu"
          }
         ]
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/users/search?name=\" + encodeURIComponent(\"x' OR '1'='1\") }); return [r.status, r.body];",
        "label": "tấn công: name = x' OR '1'='1",
        "expected": [
         200,
         []
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/users/search?name=\" + encodeURIComponent(\"O'Brien\") }); return [r.status, r.body];",
        "label": "tên có dấu nháy: O'Brien",
        "expected": [
         200,
         []
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/users/search?name=\" + encodeURIComponent(\"zz%' UNION SELECT id, email, created_at FROM users --\") }); return [r.status, r.body.length];",
        "label": "tấn công UNION để đọc email",
        "expected": [
         200,
         0
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/users/search\" }); return [r.status, r.body];",
        "label": "thiếu name",
        "expected": [
         400,
         {
          "error": "name is required"
         }
        ]
       }
      ]
     },
     {
      "id": "api-products-pagination",
      "title": "API danh sách có lọc & phân trang",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>GET /products</code> với query:</p>\n<ul><li><code>category</code> (tuỳ chọn): lọc theo danh mục</li><li><code>page</code> (mặc định 1) và <code>limit</code> (mặc định 5): phải là <strong>số nguyên</strong>, <code>page &gt;= 1</code>, <code>1 &lt;= limit &lt;= 50</code>. Sai → <code>400 { &quot;error&quot;: &quot;invalid pagination&quot; }</code>.</li></ul>\n<p>Sắp theo <code>id</code>. Trả về:</p>\n<pre class=\"code\"><code class=\"language-json\">{ &quot;data&quot;: [{ &quot;id&quot;: 1, &quot;name&quot;: &quot;...&quot;, &quot;price&quot;: 1890000 }], &quot;page&quot;: 1, &quot;limit&quot;: 5, &quot;total&quot;: 10 }</code></pre>\n<p><code>total</code> là tổng số sản phẩm <strong>khớp bộ lọc</strong> (không phải chỉ trang hiện tại). Dùng tham số hoá cho mọi giá trị.</p>\n",
      "fn": null,
      "starter": "const app = createApp();\n\napp.get(\"/products\", (req, res) => {\n  const data = query(\"SELECT id, name, price FROM products ORDER BY id\");\n  res.json({ data, page: 1, limit: data.length, total: data.length });\n});\n",
      "solution": "const app = createApp();\n\nfunction parsePositiveInt(value, fallback) {\n  if (value === undefined) return fallback;\n  if (!/^\\d+$/.test(value)) return NaN;\n  return Number(value);\n}\n\napp.get(\"/products\", (req, res) => {\n  const page = parsePositiveInt(req.query.page, 1);\n  const limit = parsePositiveInt(req.query.limit, 5);\n  if (!(page >= 1) || !(limit >= 1 && limit <= 50)) {\n    return res.status(400).json({ error: \"invalid pagination\" });\n  }\n  const where = req.query.category ? \"WHERE category = ?\" : \"\";\n  const params = req.query.category ? [req.query.category] : [];\n  const total = query(\"SELECT COUNT(*) AS n FROM products \" + where, params)[0].n;\n  const data = query(\n    \"SELECT id, name, price FROM products \" + where + \" ORDER BY id LIMIT ? OFFSET ?\",\n    [...params, limit, (page - 1) * limit]\n  );\n  res.json({ data, page, limit, total });\n});\n",
      "explain": "",
      "hints": [
       "<p>Query string luôn là chuỗi: <code>&quot;2&quot;</code>, <code>&quot;abc&quot;</code>, <code>&quot;1.5&quot;</code>, <code>&quot;-1&quot;</code>. Kiểm tra bằng regex <code>/^\\d+$/</code> trước khi <code>Number(...)</code>.</p>\n",
       "<p>Hai truy vấn: <code>SELECT COUNT(*)</code> (với cùng WHERE) để lấy <code>total</code>, và <code>SELECT ... LIMIT ? OFFSET ?</code> để lấy trang.</p>\n",
       "<p>Ghép <strong>phần cố định</strong> của SQL (<code>WHERE category = ?</code>) là an toàn; chỉ <strong>giá trị</strong> mới phải đi qua tham số.</p>\n"
      ],
      "followUp": "",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Database SQLite thật (sql.js) =====\n// query(sql, params)   → mảng object, dùng cho SELECT        VD: query('SELECT * FROM users WHERE id = ?', [id])\n// execute(sql, params) → { changes, lastInsertId }, dùng cho INSERT / UPDATE / DELETE\n// db                   → đối tượng Database của sql.js (db.exec('BEGIN') ...)\n// queryLog             → danh sách các câu SQL đã chạy qua query/execute (để đếm số truy vấn)\nlet db = null;\nconst queryLog = [];\nconst SEED_SQL = `CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);`;\n\nasync function resetDb() {\n  const SQL = await __sqlReady;\n  if (db) db.close();\n  db = new SQL.Database();\n  db.exec(SEED_SQL);\n  queryLog.length = 0;\n  return db;\n}\n\nasync function __ensureDb() {\n  if (!db) await resetDb();\n}\n\nfunction query(sql, params = []) {\n  queryLog.push(sql);\n  const stmt = db.prepare(sql);\n  try {\n    stmt.bind(params);\n    const rows = [];\n    while (stmt.step()) rows.push(stmt.getAsObject());\n    return rows;\n  } finally {\n    stmt.free();\n  }\n}\n\nfunction execute(sql, params = []) {\n  queryLog.push(sql);\n  db.run(sql, params);\n  const changes = db.getRowsModified();\n  const lastInsertId = db.exec('SELECT last_insert_rowid()')[0].values[0][0];\n  return { changes, lastInsertId };\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": true,
      "tests": [
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/products\" }); return [r.status, r.body];",
        "label": "mặc định page=1, limit=5",
        "expected": [
         200,
         {
          "data": [
           {
            "id": 1,
            "name": "Laptop Pro 14",
            "price": 1890000
           },
           {
            "id": 2,
            "name": "Wireless Mouse",
            "price": 35000
           },
           {
            "id": 3,
            "name": "Mechanical Keyboard",
            "price": 129000
           },
           {
            "id": 4,
            "name": "USB-C Hub",
            "price": 59000
           },
           {
            "id": 5,
            "name": "Clean Code",
            "price": 32000
           }
          ],
          "page": 1,
          "limit": 5,
          "total": 10
         }
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/products?page=2&limit=4\" }); return [r.status, r.body];",
        "label": "page=2&limit=4",
        "expected": [
         200,
         {
          "data": [
           {
            "id": 5,
            "name": "Clean Code",
            "price": 32000
           },
           {
            "id": 6,
            "name": "Designing Data-Intensive Applications",
            "price": 48000
           },
           {
            "id": 7,
            "name": "Coffee Beans 1kg",
            "price": 27000
           },
           {
            "id": 8,
            "name": "Green Tea Set",
            "price": 18000
           }
          ],
          "page": 2,
          "limit": 4,
          "total": 10
         }
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/products?category=electronics&limit=2&page=2\" }); return [r.status, r.body];",
        "label": "lọc electronics, trang 2",
        "expected": [
         200,
         {
          "data": [
           {
            "id": 3,
            "name": "Mechanical Keyboard",
            "price": 129000
           },
           {
            "id": 4,
            "name": "USB-C Hub",
            "price": 59000
           }
          ],
          "page": 2,
          "limit": 2,
          "total": 4
         }
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/products?category=toys\" }); return [r.status, r.body];",
        "label": "danh mục không có sản phẩm",
        "expected": [
         200,
         {
          "data": [],
          "page": 1,
          "limit": 5,
          "total": 0
         }
        ]
       },
       {
        "code": "await resetDb(); const out = []; for (const q of [\"page=0\", \"limit=51\", \"limit=abc\", \"page=1.5\", \"page=-1\", \"limit=0\"]) out.push((await request(app, { path: \"/products?\" + q })).status); return out;",
        "label": "các tham số không hợp lệ",
        "expected": [
         400,
         400,
         400,
         400,
         400,
         400
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/products?category=\" + encodeURIComponent(\"x' OR '1'='1\") }); return r.body.total;",
        "label": "category chứa chuỗi tấn công",
        "expected": 0
       }
      ]
     },
     {
      "id": "api-n-plus-one",
      "title": "Sửa lỗi N+1 query",
      "difficulty": "hard",
      "prompt": "<p><code>GET /users/:id/orders</code> trả về các đơn hàng của người dùng (theo <code>id</code> đơn tăng dần), mỗi đơn kèm danh sách sản phẩm (theo <code>id</code> của <code>order_items</code>):</p>\n<pre class=\"code\"><code class=\"language-json\">[{ &quot;id&quot;: 1, &quot;status&quot;: &quot;paid&quot;, &quot;items&quot;: [{ &quot;product&quot;: &quot;Laptop Pro 14&quot;, &quot;quantity&quot;: 1 }] }]</code></pre>\n<p>Người dùng không tồn tại → <code>404 { &quot;error&quot;: &quot;User not found&quot; }</code>; tồn tại nhưng chưa có đơn → <code>[]</code>.</p>\n<p>Code có sẵn trả <strong>đúng kết quả</strong> nhưng chạy <code>1 + số đơn + số sản phẩm</code> truy vấn. Viết lại sao cho <strong>tối đa 3 truy vấn</strong> bất kể có bao nhiêu đơn (<code>queryLog</code> đếm mọi lần gọi <code>query</code>).</p>\n",
      "fn": null,
      "starter": "const app = createApp();\n\napp.get(\"/users/:id/orders\", (req, res) => {\n  const userId = Number(req.params.id);\n  const users = query(\"SELECT id FROM users WHERE id = ?\", [userId]);\n  if (users.length === 0) return res.status(404).json({ error: \"User not found\" });\n  const orders = query(\"SELECT id, status FROM orders WHERE user_id = ? ORDER BY id\", [userId]);\n  for (const order of orders) {\n    const items = query(\"SELECT product_id, quantity FROM order_items WHERE order_id = ? ORDER BY id\", [order.id]);\n    order.items = items.map((it) => ({\n      product: query(\"SELECT name FROM products WHERE id = ?\", [it.product_id])[0].name,\n      quantity: it.quantity\n    }));\n  }\n  res.json(orders);\n});\n",
      "solution": "const app = createApp();\n\napp.get(\"/users/:id/orders\", (req, res) => {\n  const userId = Number(req.params.id);\n  const users = query(\"SELECT id FROM users WHERE id = ?\", [userId]);\n  if (users.length === 0) return res.status(404).json({ error: \"User not found\" });\n  const rows = query(\n    \"SELECT o.id AS order_id, o.status, p.name AS product, oi.quantity \" +\n    \"FROM orders o \" +\n    \"LEFT JOIN order_items oi ON oi.order_id = o.id \" +\n    \"LEFT JOIN products p ON p.id = oi.product_id \" +\n    \"WHERE o.user_id = ? \" +\n    \"ORDER BY o.id, oi.id\",\n    [userId]\n  );\n  const orders = [];\n  const byId = new Map();\n  for (const row of rows) {\n    let order = byId.get(row.order_id);\n    if (!order) {\n      order = { id: row.order_id, status: row.status, items: [] };\n      byId.set(row.order_id, order);\n      orders.push(order);\n    }\n    if (row.product !== null) order.items.push({ product: row.product, quantity: row.quantity });\n  }\n  res.json(orders);\n});\n",
      "explain": "<p>Từ <code>1 + N + M</code> truy vấn xuống 2. Cách khác cũng đạt yêu cầu: truy vấn đơn hàng, rồi <strong>một</strong> truy vấn <code>... WHERE order_id IN (?, ?, ?)</code> cho mọi sản phẩm (cách ORM dùng với &quot;batch fetching&quot;). JOIN trả về dữ liệu đơn hàng lặp lại ở mỗi dòng; IN thì không lặp nhưng cần hai lượt.</p>\n",
      "hints": [
       "<p>Một truy vấn JOIN <code>orders → order_items → products</code> lọc theo <code>o.user_id</code>, <code>ORDER BY o.id, oi.id</code>, trả về mỗi dòng là một sản phẩm trong một đơn.</p>\n",
       "<p>Gom nhóm trong JS: duyệt các dòng, dùng <code>Map</code> từ <code>order_id</code> → object đơn hàng; push sản phẩm vào <code>items</code>.</p>\n",
       "<p>Dùng <code>LEFT JOIN</code> cho <code>order_items</code> để đơn không có sản phẩm nào vẫn xuất hiện (với <code>items: []</code>).</p>\n"
      ],
      "followUp": "<p>Với người dùng có 10.000 đơn, API này vẫn trả về tất cả. Bạn sẽ thêm phân trang kiểu nào (offset hay cursor), và phân trang <strong>đơn hàng</strong> hay <strong>dòng</strong> của JOIN? Tại sao <code>LIMIT</code> trên truy vấn JOIN lại cắt sai?</p>\n",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Database SQLite thật (sql.js) =====\n// query(sql, params)   → mảng object, dùng cho SELECT        VD: query('SELECT * FROM users WHERE id = ?', [id])\n// execute(sql, params) → { changes, lastInsertId }, dùng cho INSERT / UPDATE / DELETE\n// db                   → đối tượng Database của sql.js (db.exec('BEGIN') ...)\n// queryLog             → danh sách các câu SQL đã chạy qua query/execute (để đếm số truy vấn)\nlet db = null;\nconst queryLog = [];\nconst SEED_SQL = `CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  city TEXT,\n  created_at TEXT NOT NULL\n);\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT NOT NULL,\n  price INTEGER NOT NULL,      -- đơn vị: won\n  stock INTEGER NOT NULL\n);\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  status TEXT NOT NULL,        -- 'paid' | 'pending' | 'cancelled'\n  created_at TEXT NOT NULL\n);\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER NOT NULL REFERENCES orders(id),\n  product_id INTEGER NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  unit_price INTEGER NOT NULL  -- giá tại thời điểm mua\n);\n\nINSERT INTO users (id, name, email, city, created_at) VALUES\n  (1, 'An', 'an@gmail.com', 'Seoul', '2024-01-05'),\n  (2, 'Bình', 'binh@naver.com', 'Busan', '2024-02-11'),\n  (3, 'Chi', 'chi@gmail.com', 'Seoul', '2024-02-20'),\n  (4, 'Dũng', 'dung@kakao.com', NULL, '2024-03-02'),\n  (5, 'Hà', 'ha@naver.com', 'Incheon', '2024-03-15'),\n  (6, 'Minh', 'minh@gmail.com', 'Busan', '2024-04-01'),\n  (7, 'Jisoo', 'jisoo@naver.com', 'Seoul', '2024-04-18'),\n  (8, 'Minho', 'minho@kakao.com', 'Daegu', '2024-05-07');\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Laptop Pro 14', 'electronics', 1890000, 5),\n  (2, 'Wireless Mouse', 'electronics', 35000, 120),\n  (3, 'Mechanical Keyboard', 'electronics', 129000, 40),\n  (4, 'USB-C Hub', 'electronics', 59000, 0),\n  (5, 'Clean Code', 'books', 32000, 25),\n  (6, 'Designing Data-Intensive Applications', 'books', 48000, 12),\n  (7, 'Coffee Beans 1kg', 'food', 27000, 60),\n  (8, 'Green Tea Set', 'food', 18000, 0),\n  (9, 'Standing Desk', 'furniture', 450000, 3),\n  (10, 'Office Chair', 'furniture', 320000, 7);\n\nINSERT INTO orders (id, user_id, status, created_at) VALUES\n  (1, 1, 'paid', '2024-05-01'),\n  (2, 1, 'paid', '2024-05-10'),\n  (3, 2, 'pending', '2024-05-11'),\n  (4, 3, 'paid', '2024-05-12'),\n  (5, 3, 'cancelled', '2024-05-13'),\n  (6, 5, 'paid', '2024-05-20'),\n  (7, 6, 'paid', '2024-06-01'),\n  (8, 7, 'pending', '2024-06-02'),\n  (9, 1, 'cancelled', '2024-06-03'),\n  (10, 7, 'paid', '2024-06-05');\n\nINSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES\n  (1, 1, 1, 1, 1890000),\n  (2, 1, 2, 2, 35000),\n  (3, 2, 5, 1, 32000),\n  (4, 2, 6, 1, 48000),\n  (5, 3, 3, 1, 129000),\n  (6, 4, 7, 3, 27000),\n  (7, 4, 2, 1, 35000),\n  (8, 5, 9, 1, 450000),\n  (9, 6, 10, 1, 320000),\n  (10, 7, 6, 2, 48000),\n  (11, 7, 5, 1, 32000),\n  (12, 8, 1, 1, 1890000),\n  (13, 9, 8, 2, 18000),\n  (14, 10, 3, 1, 129000),\n  (15, 10, 7, 2, 27000);`;\n\nasync function resetDb() {\n  const SQL = await __sqlReady;\n  if (db) db.close();\n  db = new SQL.Database();\n  db.exec(SEED_SQL);\n  queryLog.length = 0;\n  return db;\n}\n\nasync function __ensureDb() {\n  if (!db) await resetDb();\n}\n\nfunction query(sql, params = []) {\n  queryLog.push(sql);\n  const stmt = db.prepare(sql);\n  try {\n    stmt.bind(params);\n    const rows = [];\n    while (stmt.step()) rows.push(stmt.getAsObject());\n    return rows;\n  } finally {\n    stmt.free();\n  }\n}\n\nfunction execute(sql, params = []) {\n  queryLog.push(sql);\n  db.run(sql, params);\n  const changes = db.getRowsModified();\n  const lastInsertId = db.exec('SELECT last_insert_rowid()')[0].values[0][0];\n  return { changes, lastInsertId };\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": true,
      "tests": [
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/users/1/orders\" }); return [r.status, r.body];",
        "label": "GET /users/1/orders",
        "expected": [
         200,
         [
          {
           "id": 1,
           "status": "paid",
           "items": [
            {
             "product": "Laptop Pro 14",
             "quantity": 1
            },
            {
             "product": "Wireless Mouse",
             "quantity": 2
            }
           ]
          },
          {
           "id": 2,
           "status": "paid",
           "items": [
            {
             "product": "Clean Code",
             "quantity": 1
            },
            {
             "product": "Designing Data-Intensive Applications",
             "quantity": 1
            }
           ]
          },
          {
           "id": 9,
           "status": "cancelled",
           "items": [
            {
             "product": "Green Tea Set",
             "quantity": 2
            }
           ]
          }
         ]
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/users/4/orders\" }); return [r.status, r.body];",
        "label": "người dùng chưa có đơn",
        "expected": [
         200,
         []
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { path: \"/users/99/orders\" }); return [r.status, r.body];",
        "label": "người dùng không tồn tại",
        "expected": [
         404,
         {
          "error": "User not found"
         }
        ]
       },
       {
        "code": "await resetDb(); await request(app, { path: \"/users/1/orders\" }); return queryLog.length <= 3;",
        "label": "số truy vấn cho user 1 (3 đơn, 5 sản phẩm) ≤ 3",
        "expected": true
       },
       {
        "code": "await resetDb(); for (let i = 0; i < 40; i++) { execute(\"INSERT INTO orders (user_id, status, created_at) VALUES (8, 'paid', '2024-07-01')\"); execute(\"INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (last_insert_rowid(), 7, 1, 27000)\"); } queryLog.length = 0; const r = await request(app, { path: \"/users/8/orders\" }); return [r.body.length, r.body[39].items[0].product, queryLog.length <= 3];",
        "label": "user có 40 đơn: vẫn ≤ 3 truy vấn",
        "expected": [
         40,
         "Coffee Beans 1kg",
         true
        ]
       }
      ]
     },
     {
      "id": "api-transfer-transaction",
      "title": "Chuyển tiền với transaction",
      "difficulty": "hard",
      "prompt": "<p>Bảng <code>accounts(id, owner, balance)</code> có ràng buộc <code>CHECK (balance &gt;= 0)</code>. Viết <code>POST /transfers</code> với body <code>{ &quot;fromId&quot;: 1, &quot;toId&quot;: 2, &quot;amount&quot;: 50000 }</code>:</p>\n<ol><li><code>amount</code> phải là <strong>số nguyên dương</strong>, <code>fromId !== toId</code> → sai: <code>400 { &quot;error&quot;: &quot;invalid transfer&quot; }</code>.</li><li>Một trong hai tài khoản không tồn tại → <code>404 { &quot;error&quot;: &quot;Account not found&quot; }</code>.</li><li>Không đủ số dư → <code>409 { &quot;error&quot;: &quot;Insufficient funds&quot; }</code>.</li><li>Thành công → <code>200 { &quot;fromBalance&quot;: ..., &quot;toBalance&quot;: ... }</code>.</li></ol>\n<p><strong>Bất biến bắt buộc:</strong> trong <strong>mọi</strong> trường hợp lỗi, không tài khoản nào bị thay đổi, và tổng tiền trong hệ thống luôn không đổi. Dùng transaction (<code>db.exec(&quot;BEGIN&quot;)</code> / <code>&quot;COMMIT&quot;</code> / <code>&quot;ROLLBACK&quot;</code>).</p>\n",
      "fn": null,
      "starter": "const app = createApp();\n\napp.post(\"/transfers\", (req, res) => {\n  const { fromId, toId, amount } = req.body;\n  execute(\"UPDATE accounts SET balance = balance - ? WHERE id = ?\", [amount, fromId]);\n  const to = execute(\"UPDATE accounts SET balance = balance + ? WHERE id = ?\", [amount, toId]);\n  if (to.changes === 0) return res.status(404).json({ error: \"Account not found\" });\n  const balances = query(\"SELECT id, balance FROM accounts WHERE id IN (?, ?)\", [fromId, toId]);\n  res.json({\n    fromBalance: balances.find((a) => a.id === fromId).balance,\n    toBalance: balances.find((a) => a.id === toId).balance\n  });\n});\n",
      "solution": "const app = createApp();\n\napp.post(\"/transfers\", (req, res) => {\n  const { fromId, toId, amount } = req.body || {};\n  if (!Number.isInteger(amount) || amount <= 0 || fromId === toId) {\n    return res.status(400).json({ error: \"invalid transfer\" });\n  }\n  db.exec(\"BEGIN\");\n  try {\n    const from = query(\"SELECT balance FROM accounts WHERE id = ?\", [fromId])[0];\n    const to = query(\"SELECT balance FROM accounts WHERE id = ?\", [toId])[0];\n    if (!from || !to) {\n      db.exec(\"ROLLBACK\");\n      return res.status(404).json({ error: \"Account not found\" });\n    }\n    if (from.balance < amount) {\n      db.exec(\"ROLLBACK\");\n      return res.status(409).json({ error: \"Insufficient funds\" });\n    }\n    execute(\"UPDATE accounts SET balance = balance - ? WHERE id = ?\", [amount, fromId]);\n    execute(\"UPDATE accounts SET balance = balance + ? WHERE id = ?\", [amount, toId]);\n    db.exec(\"COMMIT\");\n    res.json({ fromBalance: from.balance - amount, toBalance: to.balance + amount });\n  } catch (err) {\n    db.exec(\"ROLLBACK\");\n    throw err;\n  }\n});\n",
      "explain": "<p>Trong database thật có nhiều request đồng thời, &quot;đọc số dư rồi mới trừ&quot; vẫn có thể bị <strong>lost update</strong> nếu hai giao dịch cùng đọc trước khi ai kịp ghi. Cách chắc chắn: <code>UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance &gt;= ?</code> rồi kiểm tra <code>changes === 1</code>, hoặc <code>SELECT ... FOR UPDATE</code> để khoá dòng (MySQL/PostgreSQL).</p>\n",
      "hints": [
       "<p>Code có sẵn trừ tiền người gửi <strong>trước</strong> khi biết người nhận có tồn tại — chuyển tới tài khoản 999 làm tiền biến mất. Chạy test để thấy.</p>\n",
       "<p>Validate input trước khi mở transaction. Trong transaction: đọc cả hai tài khoản, kiểm tra tồn tại và số dư, rồi mới UPDATE.</p>\n",
       "<p>Mọi đường thoát sau <code>BEGIN</code> (return lỗi, exception) đều phải <code>ROLLBACK</code>.</p>\n"
      ],
      "followUp": "<p>Hai request chuyển tiền chéo nhau cùng lúc: A→B và B→A, mỗi bên khoá tài khoản nguồn trước. Chuyện gì xảy ra? Quy tắc nào giúp tránh deadlock? (Gợi ý: luôn khoá theo thứ tự id tăng dần.)</p>\n",
      "helpers": "// ===== Mini framework giống Express — chạy trong trình duyệt, không có mạng thật =====\n// app.get/post/put/patch/delete(path, ...handlers) · app.use(middleware) · app.use((err, req, res, next) => ...)\n// req: { method, path, params, query, headers, body }   (headers viết thường: req.headers.authorization)\n// res: res.status(code) · res.json(data) · res.send(text) · res.set(name, value) · res.end()\n\nclass HttpError extends Error {\n  constructor(status, message) {\n    super(message);\n    this.status = status;\n  }\n}\n\nfunction createApp() {\n  const routes = [];\n  const middlewares = [];\n  let errorHandler = null;\n  const app = {\n    use(fn) {\n      if (fn.length === 4) errorHandler = fn;\n      else middlewares.push(fn);\n      return app;\n    }\n  };\n  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {\n    app[method] = (path, ...handlers) => {\n      const keys = [];\n      const pattern = path.replace(/:([A-Za-z_]\\w*)/g, (_, k) => {\n        keys.push(k);\n        return '([^/]+)';\n      });\n      routes.push({ method: method.toUpperCase(), re: new RegExp('^' + pattern + '/?$'), keys, handlers });\n      return app;\n    };\n  }\n  app.handle = async (req, res) => {\n    let route = null;\n    for (const r of routes) {\n      const m = r.method === req.method && r.re.exec(req.path);\n      if (m) {\n        route = r;\n        r.keys.forEach((k, i) => (req.params[k] = decodeURIComponent(m[i + 1])));\n        break;\n      }\n    }\n    const notFound = (req, res) => res.status(404).json({ error: 'Not Found' });\n    const chain = [...middlewares, ...(route ? route.handlers : [notFound])];\n    let index = 0;\n    let failure = null;\n    const pending = [];\n    const next = (err) => {\n      if (err) {\n        failure = failure || err;\n        return Promise.resolve();\n      }\n      const p = (async () => {\n        if (res.sent || failure) return;\n        const handler = chain[index++];\n        if (!handler) return;\n        try {\n          await handler(req, res, next);\n        } catch (e) {\n          failure = failure || e;\n        }\n      })();\n      pending.push(p);\n      return p;\n    };\n    next();\n    while (pending.length) await pending.shift();\n    if (failure) {\n      if (errorHandler) {\n        try {\n          await errorHandler(failure, req, res, () => {});\n        } catch (e) {\n          failure = e;\n        }\n      }\n      if (!res.sent) {\n        if (!failure.status) console.error('Lỗi trong handler:', failure);\n        const status = failure.status || 500;\n        res.status(status).json({ error: status === 500 ? 'Internal Server Error' : failure.message });\n      }\n    }\n    if (!res.sent) res.status(500).json({ error: 'Handler không gửi response (quên res.json / res.send?)' });\n  };\n  return app;\n}\n\nfunction createResponse() {\n  const res = {\n    statusCode: 200,\n    headers: {},\n    body: undefined,\n    sent: false,\n    status(code) {\n      res.statusCode = code;\n      return res;\n    },\n    set(name, value) {\n      res.headers[String(name).toLowerCase()] = String(value);\n      return res;\n    },\n    json(data) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = 'application/json';\n      res.body = data;\n      res.sent = true;\n      return res;\n    },\n    send(text) {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.headers['content-type'] = res.headers['content-type'] || 'text/plain';\n      res.body = text;\n      res.sent = true;\n      return res;\n    },\n    end() {\n      if (res.sent) throw new Error('Response đã được gửi rồi — mỗi request chỉ được trả lời một lần');\n      res.sent = true;\n      return res;\n    }\n  };\n  return res;\n}\n\n// Giả lập một HTTP request tới app (giống supertest). Trả về { status, headers, body }.\n// Body được \"đi qua mạng\" bằng JSON nên chỉ dữ liệu JSON hợp lệ mới tới được server.\nfunction request(app, { method = 'GET', path = '/', headers = {}, body } = {}) {\n  const hold = typeof __hold === 'function' ? __hold : (p) => p;\n  return hold((async () => {\n    if (typeof __ensureDb === 'function') await __ensureDb();\n    const url = new URL(path, 'http://localhost');\n    const lowerHeaders = {};\n    for (const [k, v] of Object.entries(headers)) lowerHeaders[k.toLowerCase()] = String(v);\n    const req = {\n      method: method.toUpperCase(),\n      path: url.pathname,\n      params: {},\n      query: Object.fromEntries(url.searchParams),\n      headers: lowerHeaders,\n      body: body === undefined ? undefined : JSON.parse(JSON.stringify(body))\n    };\n    const res = createResponse();\n    await app.handle(req, res);\n    return {\n      status: res.statusCode,\n      headers: res.headers,\n      body: res.body === undefined ? undefined : JSON.parse(JSON.stringify(res.body))\n    };\n  })());\n}\n\n// ===== Database SQLite thật (sql.js) =====\n// query(sql, params)   → mảng object, dùng cho SELECT        VD: query('SELECT * FROM users WHERE id = ?', [id])\n// execute(sql, params) → { changes, lastInsertId }, dùng cho INSERT / UPDATE / DELETE\n// db                   → đối tượng Database của sql.js (db.exec('BEGIN') ...)\n// queryLog             → danh sách các câu SQL đã chạy qua query/execute (để đếm số truy vấn)\nlet db = null;\nconst queryLog = [];\nconst SEED_SQL = `CREATE TABLE accounts (\n  id INTEGER PRIMARY KEY,\n  owner TEXT NOT NULL,\n  balance INTEGER NOT NULL CHECK (balance >= 0)\n);\nINSERT INTO accounts (id, owner, balance) VALUES (1, 'An', 500000), (2, 'Jisoo', 100000), (3, 'Minho', 0);`;\n\nasync function resetDb() {\n  const SQL = await __sqlReady;\n  if (db) db.close();\n  db = new SQL.Database();\n  db.exec(SEED_SQL);\n  queryLog.length = 0;\n  return db;\n}\n\nasync function __ensureDb() {\n  if (!db) await resetDb();\n}\n\nfunction query(sql, params = []) {\n  queryLog.push(sql);\n  const stmt = db.prepare(sql);\n  try {\n    stmt.bind(params);\n    const rows = [];\n    while (stmt.step()) rows.push(stmt.getAsObject());\n    return rows;\n  } finally {\n    stmt.free();\n  }\n}\n\nfunction execute(sql, params = []) {\n  queryLog.push(sql);\n  db.run(sql, params);\n  const changes = db.getRowsModified();\n  const lastInsertId = db.exec('SELECT last_insert_rowid()')[0].values[0][0];\n  return { changes, lastInsertId };\n}",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": true,
      "tests": [
       {
        "code": "await resetDb(); const r = await request(app, { method: \"POST\", path: \"/transfers\", body: { fromId: 1, toId: 2, amount: 50000 } }); return [r.status, r.body, query(\"SELECT balance FROM accounts ORDER BY id\").map((a) => a.balance)];",
        "label": "An chuyển 50.000 cho Jisoo",
        "expected": [
         200,
         {
          "fromBalance": 450000,
          "toBalance": 150000
         },
         [
          450000,
          150000,
          0
         ]
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { method: \"POST\", path: \"/transfers\", body: { fromId: 1, toId: 999, amount: 50000 } }); return [r.status, r.body, query(\"SELECT balance FROM accounts ORDER BY id\").map((a) => a.balance)];",
        "label": "chuyển tới tài khoản không tồn tại → không mất tiền",
        "expected": [
         404,
         {
          "error": "Account not found"
         },
         [
          500000,
          100000,
          0
         ]
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { method: \"POST\", path: \"/transfers\", body: { fromId: 999, toId: 1, amount: 50000 } }); return [r.status, query(\"SELECT balance FROM accounts ORDER BY id\").map((a) => a.balance)];",
        "label": "tài khoản nguồn không tồn tại",
        "expected": [
         404,
         [
          500000,
          100000,
          0
         ]
        ]
       },
       {
        "code": "await resetDb(); const r = await request(app, { method: \"POST\", path: \"/transfers\", body: { fromId: 2, toId: 3, amount: 100001 } }); return [r.status, r.body, query(\"SELECT balance FROM accounts ORDER BY id\").map((a) => a.balance)];",
        "label": "không đủ số dư → 409",
        "expected": [
         409,
         {
          "error": "Insufficient funds"
         },
         [
          500000,
          100000,
          0
         ]
        ]
       },
       {
        "code": "await resetDb(); const out = []; for (const body of [{ fromId: 1, toId: 2, amount: -5 }, { fromId: 1, toId: 2, amount: 1.5 }, { fromId: 1, toId: 2, amount: \"100\" }, { fromId: 1, toId: 1, amount: 10 }, {}]) out.push((await request(app, { method: \"POST\", path: \"/transfers\", body })).status); out.push(query(\"SELECT SUM(balance) AS s FROM accounts\")[0].s); return out;",
        "label": "input không hợp lệ",
        "expected": [
         400,
         400,
         400,
         400,
         400,
         600000
        ]
       },
       {
        "code": "await resetDb(); await request(app, { method: \"POST\", path: \"/transfers\", body: { fromId: 1, toId: 999, amount: 1 } }); const r = await request(app, { method: \"POST\", path: \"/transfers\", body: { fromId: 2, toId: 3, amount: 30000 } }); return [r.status, r.body];",
        "label": "request sau một lần lỗi vẫn chạy bình thường (transaction không bị treo)",
        "expected": [
         200,
         {
          "fromBalance": 70000,
          "toBalance": 30000
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "be-interview",
    "title": "Phỏng vấn kỹ thuật Backend (기술면접)",
    "html": "<p>Phỏng vấn backend cho vị trí junior/신입 ở Hàn thường gồm: <strong>코딩테스트</strong> (thuật toán) → <strong>기술면접</strong> (câu hỏi kiến thức nền + hỏi sâu về dự án đã làm) → <strong>인성면접</strong> (văn hoá, thái độ). Phần kiến thức nền xoay quanh một danh sách khá ổn định. Bảng dưới có <strong>thuật ngữ tiếng Hàn</strong> để bạn nhận ra câu hỏi và trả lời đúng từ khoá.</p>\n<blockquote><p><strong>Cách luyện:</strong> với mỗi câu, tự trả lời <strong>thành tiếng</strong> trong 1–2 phút trước khi đọc gợi ý. Người phỏng vấn ở Hàn rất hay hỏi <strong>꼬리 질문</strong> (câu hỏi nối đuôi): trả lời xong câu A, họ hỏi &quot;tại sao?&quot;, &quot;nếu ... thì sao?&quot; — nên phải hiểu <strong>lý do</strong>, không chỉ thuộc định nghĩa.</p>\n</blockquote>\n<h2>Mạng &amp; HTTP (네트워크)</h2>\n<table><thead><tr><th>Câu hỏi</th><th>Từ khoá tiếng Hàn</th><th>Ý chính cần nói</th></tr></thead>\n<tbody>\n<tr><td>Gõ URL vào trình duyệt thì chuyện gì xảy ra?</td><td>URL 입력 시 동작 과정</td><td>DNS → TCP 3-way handshake → TLS → HTTP request → server xử lý → response → render</td></tr>\n<tr><td>TCP vs UDP</td><td>TCP와 UDP의 차이</td><td>tin cậy, có thứ tự, có kết nối vs nhanh, không đảm bảo (video call, game, DNS)</td></tr>\n<tr><td>HTTP vs HTTPS</td><td>HTTP와 HTTPS 차이</td><td>TLS mã hoá, chứng chỉ, khoá công khai/đối xứng</td></tr>\n<tr><td>GET vs POST</td><td>GET과 POST 차이</td><td>ngữ nghĩa, idempotent (멱등성), body, cache, độ dài URL</td></tr>\n<tr><td>Status code 401 vs 403</td><td>상태 코드</td><td>chưa xác thực vs không có quyền</td></tr>\n<tr><td>REST là gì?</td><td>REST API, RESTful</td><td>tài nguyên + method, stateless, URL là danh từ</td></tr>\n<tr><td>Cookie vs Session vs JWT</td><td>쿠키, 세션, 토큰</td><td>lưu ở đâu, thu hồi, scale-out, XSS/CSRF</td></tr>\n<tr><td>CORS là gì?</td><td>CORS, 동일 출처 정책</td><td>chính sách cùng nguồn của trình duyệt, header Access-Control-Allow-Origin</td></tr>\n</tbody></table>\n<h2>Database (데이터베이스)</h2>\n<table><thead><tr><th>Câu hỏi</th><th>Từ khoá tiếng Hàn</th><th>Ý chính cần nói</th></tr></thead>\n<tbody>\n<tr><td>Index là gì, tại sao nhanh?</td><td>인덱스</td><td>B+tree, O(log n), đổi lại ghi chậm &amp; tốn dung lượng</td></tr>\n<tr><td>Khi nào index không được dùng?</td><td>인덱스를 타지 않는 경우</td><td>hàm trên cột, <code>LIKE '%x'</code>, cardinality thấp, sai thứ tự index ghép</td></tr>\n<tr><td>Transaction và ACID</td><td>트랜잭션, 원자성 일관성 격리성 지속성</td><td>tất cả hoặc không; ví dụ chuyển tiền</td></tr>\n<tr><td>Isolation level</td><td>트랜잭션 격리 수준</td><td>4 mức; dirty / non-repeatable / phantom read</td></tr>\n<tr><td>Deadlock</td><td>교착 상태 (데드락)</td><td>hai bên chờ khoá của nhau; khoá theo thứ tự cố định, timeout</td></tr>\n<tr><td>Chuẩn hoá</td><td>정규화, 반정규화</td><td>1NF–3NF, loại dư thừa; phi chuẩn hoá để đọc nhanh</td></tr>\n<tr><td>JOIN các loại</td><td>조인 종류</td><td>INNER / LEFT / RIGHT / FULL</td></tr>\n<tr><td>N+1 là gì?</td><td>N+1 문제</td><td>lazy loading; fetch join, batch, IN</td></tr>\n<tr><td>SQL injection</td><td>SQL 인젝션</td><td>prepared statement (바인딩 변수)</td></tr>\n<tr><td>RDBMS vs NoSQL</td><td>RDB와 NoSQL 차이</td><td>schema, JOIN, transaction vs mở rộng ngang, dữ liệu linh hoạt</td></tr>\n</tbody></table>\n<h2>Hệ điều hành &amp; runtime (운영체제)</h2>\n<table><thead><tr><th>Câu hỏi</th><th>Từ khoá tiếng Hàn</th><th>Ý chính cần nói</th></tr></thead>\n<tbody>\n<tr><td>Process vs Thread</td><td>프로세스와 스레드</td><td>bộ nhớ riêng vs dùng chung; chi phí chuyển ngữ cảnh</td></tr>\n<tr><td>Sync/Async, Blocking/Non-blocking</td><td>동기 비동기, 블로킹 논블로킹</td><td>hai trục khác nhau; ví dụ I/O</td></tr>\n<tr><td>Node.js xử lý đồng thời thế nào?</td><td>이벤트 루프</td><td>một luồng JS + event loop + thread pool (libuv) cho I/O; tác vụ CPU nặng chặn mọi request</td></tr>\n<tr><td>Race condition</td><td>경쟁 상태, 동시성</td><td>lost update; khoá, thao tác nguyên tử</td></tr>\n</tbody></table>\n<h2>Kiến trúc &amp; vận hành (아키텍처)</h2>\n<table><thead><tr><th>Câu hỏi</th><th>Từ khoá tiếng Hàn</th><th>Ý chính cần nói</th></tr></thead>\n<tbody>\n<tr><td>Scale-up vs scale-out</td><td>수직 확장, 수평 확장</td><td>máy mạnh hơn vs nhiều máy; stateless là điều kiện để scale-out</td></tr>\n<tr><td>Load balancer</td><td>로드 밸런서</td><td>phân phối request; round robin, health check</td></tr>\n<tr><td>Cache, Redis</td><td>캐시, 레디스</td><td>cache-aside, TTL, invalidation; cái gì không nên cache</td></tr>\n<tr><td>Connection pool</td><td>커넥션 풀</td><td>tái sử dụng kết nối; kích thước pool</td></tr>\n<tr><td>Monolith vs Microservices</td><td>모놀리식, MSA</td><td>đơn giản vs triển khai độc lập; chi phí vận hành, transaction phân tán</td></tr>\n<tr><td>Docker là gì?</td><td>도커, 컨테이너</td><td>đóng gói ứng dụng + môi trường; khác VM</td></tr>\n</tbody></table>\n<h2>Câu hỏi về dự án (프로젝트 질문) — phần quyết định</h2>\n<p>Người phỏng vấn sẽ đào sâu vào <strong>dự án bạn ghi trong CV</strong>. Chuẩn bị cho mỗi dự án:</p>\n<ol><li>Bạn phụ trách phần nào? Kiến trúc tổng thể ra sao (vẽ được trên giấy)?</li><li><strong>Tại sao</strong> chọn công nghệ đó (DB nào, framework nào)? Có cân nhắc lựa chọn khác không?</li><li>Vấn đề khó nhất gặp phải (트러블슈팅 경험) và cách bạn <strong>đo</strong>, <strong>tìm nguyên nhân</strong>, <strong>sửa</strong>. Có số liệu càng tốt (&quot;API giảm từ 1,2s xuống 150ms nhờ thêm index và sửa N+1&quot;).</li><li>Nếu làm lại, bạn sẽ làm khác điều gì?</li></ol>\n<blockquote><p>Với web app bạn đang làm: chọn <strong>một API</strong> quan trọng, đo thời gian phản hồi, xem <code>EXPLAIN</code> của các truy vấn chính, kiểm tra có N+1 không. Tìm được và sửa được một vấn đề thật là câu chuyện phỏng vấn giá trị hơn mọi định nghĩa thuộc lòng.</p>\n</blockquote>\n<h2>Gợi ý lộ trình sau chặng này</h2>\n<ul><li><strong>Thực hành với Node thật:</strong> Express + PostgreSQL (hoặc MySQL) qua Docker, viết lại các bài trong chặng này thành một API chạy được, có test bằng <code>supertest</code>.</li><li><strong>Thị trường Hàn:</strong> backend chủ yếu dùng <strong>Java + Spring Boot + JPA + MySQL</strong>. Mọi khái niệm ở đây (HTTP, REST, SQL, index, transaction, N+1) dùng nguyên vẹn bên Spring — chỉ đổi cú pháp.</li></ul>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Chọn một câu bất kỳ ở trên và tự đặt ba câu 꼬리 질문 cho nó. Bạn trả lời được đến tầng thứ mấy?</li><li>Tại sao câu hỏi về dự án lại quan trọng hơn câu hỏi định nghĩa trong mắt người tuyển dụng?</li></ul>\n",
    "source": "content/05-backend/09-backend-interview.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": []
   }
  ]
 },
 {
  "id": "real-project",
  "title": "Dự án thật: Express + PostgreSQL + Docker",
  "desc": "<p>Rời trình duyệt: chạy API thật bằng Node.js 22, Express 5, PostgreSQL 16 trong Docker, với test tự động. Project nằm ở <code>projects/shop-api</code> trong repo.</p>\n",
  "lessons": [
   {
    "id": "rp-docker",
    "title": "Docker cho lập trình viên backend",
    "html": "<h2>Vấn đề Docker giải quyết</h2>\n<p>&quot;Máy em chạy được mà!&quot; — vì máy bạn có Postgres 16, máy đồng nghiệp có Postgres 13, server production lại cấu hình khác. Docker đóng gói <strong>ứng dụng + môi trường</strong> (hệ điều hành tối giản, runtime, thư viện) thành một <strong>image</strong> chạy giống nhau ở mọi nơi.</p>\n<table><thead><tr><th>Khái niệm</th><th>Giống như</th><th>Ví dụ</th></tr></thead>\n<tbody>\n<tr><td><strong>Image</strong></td><td>bản thiết kế, chỉ đọc</td><td><code>postgres:16-alpine</code>, image API bạn build</td></tr>\n<tr><td><strong>Container</strong></td><td>một lần chạy image (tiến trình cô lập)</td><td>container <code>shop-api-db-1</code></td></tr>\n<tr><td><strong>Volume</strong></td><td>ổ đĩa gắn ngoài, sống lâu hơn container</td><td>dữ liệu Postgres trong <code>pgdata</code></td></tr>\n<tr><td><strong>Port mapping</strong></td><td>nối cổng máy bạn vào cổng container</td><td><code>5432:5432</code></td></tr>\n<tr><td><strong>Network</strong></td><td>mạng riêng giữa các container</td><td>API gọi Postgres bằng hostname <code>db</code></td></tr>\n<tr><td><strong>Compose</strong></td><td>file khai báo cả hệ thống nhiều container</td><td><code>docker-compose.yml</code></td></tr>\n</tbody></table>\n<h2>Container ≠ máy ảo</h2>\n<p>Máy ảo (VM) chạy <strong>cả một hệ điều hành</strong> riêng (vài GB, khởi động hàng chục giây). Container dùng chung <strong>kernel</strong> của máy chủ, chỉ cô lập tiến trình, file system, mạng → nhẹ (vài chục MB) và khởi động trong mili-giây. Đổi lại, cô lập kém hơn VM.</p>\n<h2>Dockerfile — công thức build image</h2>\n<pre class=\"code\"><code class=\"language-text\">FROM node:22-alpine                 # bắt đầu từ image có sẵn Node 22 (Alpine Linux: rất nhỏ)\nWORKDIR /app\nENV NODE_ENV=production\nCOPY package.json package-lock.json ./\nRUN npm ci --omit=dev               # cài dependencies production\nCOPY src ./src                      # rồi mới copy source code\nUSER node                           # không chạy bằng root\nCMD [&quot;node&quot;, &quot;src/server.js&quot;]</code></pre>\n<p>Mỗi dòng tạo ra một <strong>layer</strong> được cache. Docker chỉ build lại từ layer đầu tiên bị thay đổi. Vì vậy copy <code>package.json</code> và chạy <code>npm ci</code> <strong>trước</strong> khi copy code: sửa code không làm cài lại <code>node_modules</code> (tiết kiệm hàng phút mỗi lần build).</p>\n<h2>docker-compose.yml của project</h2>\n<pre class=\"code\"><code class=\"language-text\">services:\n  db:\n    image: postgres:16-alpine\n    environment: { POSTGRES_USER: shop, POSTGRES_PASSWORD: shop, POSTGRES_DB: shop }\n    ports: [&quot;5432:5432&quot;]\n    volumes: [pgdata:/var/lib/postgresql/data]\n    healthcheck: { test: [&quot;CMD-SHELL&quot;, &quot;pg_isready -U shop -d shop&quot;] }\n  api:\n    build: .\n    environment: { DATABASE_URL: postgres://shop:shop@db:5432/shop }\n    depends_on: { db: { condition: service_healthy } }</code></pre>\n<ul><li>Trong mạng của compose, container API gọi database bằng <strong>tên service</strong> <code>db</code>, không phải <code>localhost</code> (<code>localhost</code> bên trong container là chính container đó!).</li><li><code>depends_on</code> + <code>service_healthy</code>: chờ Postgres <strong>sẵn sàng nhận kết nối</strong>, không chỉ &quot;đã khởi động tiến trình&quot;.</li><li>Không có volume, <code>docker compose down</code> sẽ <strong>xoá sạch dữ liệu</strong>.</li></ul>\n<h2>Lệnh hay dùng</h2>\n<table><thead><tr><th>Lệnh</th><th>Tác dụng</th></tr></thead>\n<tbody>\n<tr><td><code>docker compose up -d db</code></td><td>chạy service <code>db</code> ở chế độ nền</td></tr>\n<tr><td><code>docker compose ps</code> / <code>logs -f db</code></td><td>trạng thái / log</td></tr>\n<tr><td><code>docker compose exec db psql -U shop -d shop</code></td><td>chạy lệnh bên trong container</td></tr>\n<tr><td><code>docker compose down</code> / <code>down -v</code></td><td>dừng (giữ dữ liệu) / dừng và xoá dữ liệu</td></tr>\n<tr><td><code>docker build -t shop-api .</code></td><td>build image</td></tr>\n<tr><td><code>docker images</code> / <code>docker ps -a</code></td><td>liệt kê image / container</td></tr>\n</tbody></table>\n<h2>Dev workflow được khuyên dùng</h2>\n<p><strong>Database</strong> chạy trong Docker (giống production, dễ xoá làm lại), <strong>code</strong> chạy trực tiếp trên máy (<code>npm run dev</code>: sửa là thấy ngay, debug dễ). Chỉ khi muốn kiểm tra image production mới chạy cả API trong Docker.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao image production nên chạy bằng user không phải <code>root</code>? Chuyện gì xảy ra nếu ứng dụng bị chiếm quyền?</li><li>Có nên chạy PostgreSQL production trong Docker không? So sánh với dịch vụ quản lý sẵn (AWS RDS, Naver Cloud DB...): ai lo backup, nâng cấp, failover?</li><li>Tại sao <code>.dockerignore</code> loại <code>node_modules</code> của máy bạn ra khỏi build? (Gợi ý: thư viện native biên dịch cho macOS/Windows không chạy trên Linux Alpine.)</li></ul>\n",
    "source": "content/06-real-project/01-docker.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": []
   },
   {
    "id": "rp-structure",
    "title": "Cấu trúc một dự án backend",
    "html": "<h2>Chia lớp: routes → service → repository</h2>\n<pre class=\"code\"><code class=\"language-text\">HTTP request\n   │\n   ▼\nroutes      đọc req (params, query, body), gọi service, chọn status code, trả JSON\n   │\n   ▼\nservice     nghiệp vụ: kiểm tra quy tắc, điều phối nhiều bước, quản lý transaction\n   │\n   ▼\nrepository  CHỈ có SQL: findById, list, insert...\n   │\n   ▼\nPostgreSQL</code></pre>\n<p>Tại sao tách? Mỗi lớp <strong>một lý do để thay đổi</strong>: đổi định dạng response → chỉ sửa routes; đổi quy tắc giảm giá → service; tối ưu câu SQL → repository. Spring Boot bên Java dùng đúng mô hình này với tên <code>Controller → Service → Repository</code>.</p>\n<p>Đừng chia lớp máy móc: route chỉ đọc một sản phẩm thì gọi thẳng repository là đủ (project làm vậy với products). Thêm lớp khi có <strong>logic</strong> cần đặt ở đó.</p>\n<h2>Dependency injection: <code>createApp({ db, config })</code></h2>\n<pre class=\"code\"><code class=\"language-js\">// ❌ Khó test: module tự tạo kết nối tới database thật lúc import\nimport { pool } from './db.js';\n\n// ✅ Nhận phụ thuộc từ bên ngoài\nexport function createApp({ db, config }) { /* ... */ }\n\n// server.js:  createApp({ db: createDb(process.env.DATABASE_URL), config })\n// test:       createApp({ db: createDb(TEST_DATABASE_URL), config: testConfig })</code></pre>\n<p>Test truyền database test; production truyền database thật; code ứng dụng không cần biết.</p>\n<h2>Cấu hình qua biến môi trường (12-factor)</h2>\n<ul><li>Cùng một image chạy ở dev / staging / production, chỉ khác <strong>biến môi trường</strong> (<code>DATABASE_URL</code>, <code>JWT_SECRET</code>...).</li><li><strong>Không</strong> commit secret vào git. <code>.env</code> nằm trong <code>.gitignore</code>; chỉ commit <code>.env.example</code>.</li><li><strong>Fail fast</strong>: kiểm tra cấu hình ngay khi khởi động và dừng với thông báo rõ ràng, thay vì chạy được nửa ngày rồi lỗi khi request đầu tiên cần <code>JWT_SECRET</code>.</li></ul>\n<h2>Xử lý lỗi một chỗ</h2>\n<p>Service ném lỗi có ý nghĩa (<code>throw notFound('Product not found')</code>), error middleware dịch thành response. Express 5 tự chuyển lỗi của handler <code>async</code> tới error middleware (Express 4 thì không — phải bọc <code>try/catch</code> hoặc dùng thư viện).</p>\n<h2>Graceful shutdown</h2>\n<p>Khi deploy phiên bản mới, Docker/Kubernetes gửi <code>SIGTERM</code>. Server tốt sẽ: ngừng nhận request mới → chờ request đang xử lý xong → đóng pool database → thoát. Không làm vậy, người dùng đang đặt hàng giữa chừng sẽ nhận lỗi.</p>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Đặt logic transaction ở service hay repository? Nếu một nghiệp vụ cần ghi vào hai repository (orders và products) thì sao?</li><li><code>config.js</code> của project cho phép <code>JWT_SECRET</code> mặc định khi dev nhưng bắt buộc khi production. Trade-off của việc có giá trị mặc định là gì?</li></ul>\n",
    "source": "content/06-real-project/02-project-structure.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "rp-load-config",
      "title": "Đọc và kiểm tra cấu hình",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>loadConfig(env)</code> (<code>env</code> là object giống <code>process.env</code>: mọi giá trị là <strong>chuỗi</strong>) trả về:</p>\n<pre class=\"code\"><code class=\"language-js\">{ nodeEnv, port, databaseUrl, jwtSecret }</code></pre>\n<ul><li><code>nodeEnv</code>: <code>env.NODE_ENV</code>, mặc định <code>&quot;development&quot;</code>.</li><li><code>port</code>: số nguyên từ <code>env.PORT</code> (mặc định <code>3000</code>), phải trong khoảng 1–65535.</li><li><code>databaseUrl</code>: <strong>bắt buộc</strong>, phải bắt đầu bằng <code>&quot;postgres://&quot;</code> hoặc <code>&quot;postgresql://&quot;</code>.</li><li><code>jwtSecret</code>: production (<code>nodeEnv === &quot;production&quot;</code>) thì <strong>bắt buộc</strong> và dài ≥ 16 ký tự; môi trường khác mặc định <code>&quot;dev-secret&quot;</code>.</li></ul>\n<p>Sai thì <code>throw new Error(...)</code> với thông điệp liệt kê <strong>tất cả</strong> vấn đề, mỗi vấn đề một dòng bắt đầu bằng <code>&quot;- &quot;</code>, theo thứ tự PORT → DATABASE_URL → JWT_SECRET:</p>\n<pre class=\"code\"><code class=\"language-text\">Invalid configuration:\n- PORT must be an integer 1-65535\n- DATABASE_URL is required</code></pre>\n<p>Các thông điệp: <code>PORT must be an integer 1-65535</code>, <code>DATABASE_URL is required</code>, <code>DATABASE_URL must start with postgres://</code>, <code>JWT_SECRET must be at least 16 characters in production</code>.</p>\n",
      "fn": "loadConfig",
      "starter": "function loadConfig(env) {\n\n}\n",
      "solution": "function loadConfig(env) {\n  const nodeEnv = env.NODE_ENV || \"development\";\n  const problems = [];\n\n  const portText = env.PORT ?? \"3000\";\n  const port = Number(portText);\n  if (!/^\\d+$/.test(portText) || port < 1 || port > 65535) problems.push(\"PORT must be an integer 1-65535\");\n\n  const databaseUrl = env.DATABASE_URL;\n  if (!databaseUrl) problems.push(\"DATABASE_URL is required\");\n  else if (!/^postgres(ql)?:\\/\\//.test(databaseUrl)) problems.push(\"DATABASE_URL must start with postgres://\");\n\n  let jwtSecret = env.JWT_SECRET;\n  if (nodeEnv === \"production\") {\n    if (!jwtSecret || jwtSecret.length < 16) problems.push(\"JWT_SECRET must be at least 16 characters in production\");\n  } else if (!jwtSecret) {\n    jwtSecret = \"dev-secret\";\n  }\n\n  if (problems.length) throw new Error(\"Invalid configuration:\\n- \" + problems.join(\"\\n- \"));\n  return { nodeEnv, port, databaseUrl, jwtSecret };\n}\n",
      "explain": "<p>Fail fast + báo <strong>tất cả</strong> lỗi cùng lúc giúp deploy sai cấu hình bị phát hiện ngay ở bước khởi động (container crash, CI đỏ), thay vì âm thầm chạy với giá trị sai. Thư viện như <code>zod</code> / <code>envalid</code> làm việc này gọn hơn trong dự án thật.</p>\n",
      "hints": [
       "<p>Gom lỗi vào mảng <code>problems</code> thay vì <code>throw</code> ngay ở lỗi đầu tiên — người vận hành sửa hết một lần.</p>\n",
       "<p><code>Number(&quot;&quot;)</code> là <code>0</code> và <code>Number(&quot;3000abc&quot;)</code> là <code>NaN</code>: kiểm tra chuỗi bằng regex <code>/^\\d+$/</code> trước.</p>\n",
       "<p>Cuối cùng: <code>throw new Error(&quot;Invalid configuration:\\n- &quot; + problems.join(&quot;\\n- &quot;))</code>.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "code": "return loadConfig({ DATABASE_URL: \"postgres://u:p@localhost:5432/shop\" });",
        "label": "chỉ có DATABASE_URL → dùng mặc định",
        "expected": {
         "nodeEnv": "development",
         "port": 3000,
         "databaseUrl": "postgres://u:p@localhost:5432/shop",
         "jwtSecret": "dev-secret"
        }
       },
       {
        "code": "return loadConfig({ NODE_ENV: \"production\", PORT: \"8080\", DATABASE_URL: \"postgresql://db/shop\", JWT_SECRET: \"a-very-long-secret-123\" });",
        "label": "production đầy đủ",
        "expected": {
         "nodeEnv": "production",
         "port": 8080,
         "databaseUrl": "postgresql://db/shop",
         "jwtSecret": "a-very-long-secret-123"
        }
       },
       {
        "code": "try { loadConfig({ PORT: \"abc\" }); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "PORT sai + thiếu DATABASE_URL → báo cả hai",
        "expected": "Invalid configuration:\n- PORT must be an integer 1-65535\n- DATABASE_URL is required"
       },
       {
        "code": "try { loadConfig({ NODE_ENV: \"production\", DATABASE_URL: \"mysql://x\", JWT_SECRET: \"short\" }); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "production: URL sai loại + secret ngắn",
        "expected": "Invalid configuration:\n- DATABASE_URL must start with postgres://\n- JWT_SECRET must be at least 16 characters in production"
       },
       {
        "code": "try { loadConfig({ PORT: \"70000\", DATABASE_URL: \"postgres://x\" }); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "PORT ngoài khoảng",
        "expected": "Invalid configuration:\n- PORT must be an integer 1-65535"
       },
       {
        "code": "try { loadConfig({ PORT: \"\", DATABASE_URL: \"postgres://x\" }); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "PORT rỗng",
        "expected": "Invalid configuration:\n- PORT must be an integer 1-65535"
       }
      ]
     }
    ]
   },
   {
    "id": "rp-node-postgres",
    "title": "Node.js + PostgreSQL với thư viện pg",
    "html": "<h2>Pool và truy vấn</h2>\n<pre class=\"code\"><code class=\"language-js\">import pg from 'pg';\nconst pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 10 });\n\nconst { rows, rowCount } = await pool.query(\n  'SELECT id, name, price FROM products WHERE category = $1 AND price &lt;= $2',\n  ['books', 50000]\n);</code></pre>\n<ul><li>PostgreSQL dùng placeholder <strong>đánh số</strong> <code>$1, $2, ...</code> (MySQL/SQLite dùng <code>?</code>). Cùng một giá trị dùng hai lần thì viết lại <code>$1</code> hai lần.</li><li>Placeholder chỉ thay được <strong>giá trị</strong> — không thay được tên bảng, tên cột, <code>ASC/DESC</code>. Những thứ đó phải lấy từ <strong>whitelist</strong> trong code.</li></ul>\n<h2>Bẫy kiểu dữ liệu</h2>\n<pre class=\"code\"><code class=\"language-js\">const { rows } = await pool.query('SELECT COUNT(*) AS n, SUM(price) AS s FROM products');\nconsole.log(rows[0]);   // { n: '10', s: '3008000' }  ← CHUỖI!</code></pre>\n<table><thead><tr><th>Kiểu Postgres</th><th>pg trả về</th><th>Lý do / cách xử lý</th></tr></thead>\n<tbody>\n<tr><td><code>integer</code></td><td>number</td><td>an toàn</td></tr>\n<tr><td><code>bigint</code> (COUNT, SUM của integer, BIGSERIAL)</td><td><strong>string</strong></td><td>có thể vượt 2^53 → pg không dám đổi thành number. Ép <code>COUNT(*)::int</code> nếu chắc chắn nhỏ</td></tr>\n<tr><td><code>numeric</code> / <code>decimal</code> (tiền tệ)</td><td><strong>string</strong></td><td>giữ chính xác tuyệt đối; dùng thư viện số thập phân nếu cần tính</td></tr>\n<tr><td><code>timestamptz</code></td><td><code>Date</code></td><td><code>JSON.stringify</code> thành chuỗi ISO UTC</td></tr>\n<tr><td><code>json</code> / <code>jsonb</code></td><td>object</td><td></td></tr>\n<tr><td>mảng <code>integer[]</code></td><td>mảng JS</td><td>truyền mảng làm tham số được: <code>WHERE id = ANY($1)</code></td></tr>\n</tbody></table>\n<h2>Transaction phải dùng MỘT kết nối</h2>\n<p>Bug kinh điển:</p>\n<pre class=\"code\"><code class=\"language-js\">// ❌ SAI: pool.query mỗi lần có thể lấy một kết nối KHÁC → BEGIN, UPDATE, COMMIT nằm ở 3 kết nối khác nhau\nawait pool.query('BEGIN');\nawait pool.query('UPDATE ...');\nawait pool.query('COMMIT');\n\n// ✅ ĐÚNG: mượn một client, làm hết trên client đó, luôn trả lại\nconst client = await pool.connect();\ntry {\n  await client.query('BEGIN');\n  await client.query('UPDATE ...');\n  await client.query('COMMIT');\n} catch (err) {\n  await client.query('ROLLBACK');\n  throw err;\n} finally {\n  client.release();          // quên dòng này → pool cạn dần → cả API treo\n}</code></pre>\n<p>Project gói đoạn trên thành <code>db.transaction(async (tx) =&gt; { ... })</code> — bên trong <strong>phải</strong> dùng <code>tx.query</code>, không phải <code>db.query</code>.</p>\n<h2>Đồng thời: kiểm tra và ghi trong cùng một câu lệnh</h2>\n<pre class=\"code\"><code class=\"language-sql\">-- Trừ kho an toàn: điều kiện và thao tác ghi là MỘT câu lệnh nguyên tử\nUPDATE products SET stock = stock - $1\nWHERE id = $2 AND stock &gt;= $1\nRETURNING name, price;        -- 0 dòng trả về = không đủ hàng (hoặc không tồn tại)</code></pre>\n<p>Postgres khoá dòng khi <code>UPDATE</code>; request thứ hai phải chờ, rồi đánh giá lại <code>stock &gt;= $1</code> trên giá trị <strong>mới</strong>. Trong project, test gửi 5 request mua đồng thời sản phẩm còn 3 cái: cách &quot;SELECT rồi UPDATE&quot; để cả 5 thành công; cách trên cho đúng 3.</p>\n<p>Khi cần đọc rồi quyết định phức tạp hơn: <code>SELECT ... FOR UPDATE</code> khoá dòng tới hết transaction (xem <code>cancelOrder</code> trong project).</p>\n<h2>Mã lỗi Postgres</h2>\n<p>Lỗi từ database có thuộc tính <code>code</code> (5 ký tự). Vài mã hay gặp:</p>\n<table><thead><tr><th>code</th><th>Tên</th><th>Thường dịch thành</th></tr></thead>\n<tbody>\n<tr><td><code>23505</code></td><td>unique_violation</td><td>409 Conflict (email đã tồn tại)</td></tr>\n<tr><td><code>23503</code></td><td>foreign_key_violation</td><td>409 / 400 (tham chiếu tới dòng không tồn tại, hoặc xoá dòng đang được tham chiếu)</td></tr>\n<tr><td><code>23502</code></td><td>not_null_violation</td><td>400</td></tr>\n<tr><td><code>23514</code></td><td>check_violation</td><td>400</td></tr>\n<tr><td><code>22P02</code></td><td>invalid_text_representation</td><td>400 (VD <code>'abc'</code> cho cột integer)</td></tr>\n<tr><td><code>40P01</code></td><td>deadlock_detected</td><td>thử lại transaction</td></tr>\n<tr><td><code>40001</code></td><td>serialization_failure</td><td>thử lại transaction (mức SERIALIZABLE)</td></tr>\n</tbody></table>\n<h2>Câu hỏi tại sao</h2>\n<ul><li>Tại sao pg không tự đổi <code>bigint</code> thành <code>number</code>? Nếu bạn tự cấu hình cho nó đổi, rủi ro là gì?</li><li>Pool <code>max: 10</code> mà có 100 request đồng thời thì sao? Tăng lên <code>max: 500</code> có giải quyết được không? (Gợi ý: giới hạn <code>max_connections</code> của Postgres, mỗi kết nối tốn RAM ở server.)</li><li>Lỗi <code>40P01</code> (deadlock) thì &quot;thử lại&quot; là hợp lý, còn <code>23505</code> thì không. Tại sao?</li></ul>\n",
    "source": "content/06-real-project/03-node-postgres.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": [
     {
      "id": "rp-build-where",
      "title": "Xây WHERE động với $1, $2...",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>buildProductFilter(filters)</code> trả về <code>{ where, values }</code> để ghép vào câu SQL của PostgreSQL. <code>filters</code> có thể có (bỏ qua các trường <code>undefined</code>):</p>\n<table><thead><tr><th>Trường</th><th>Điều kiện sinh ra</th></tr></thead>\n<tbody>\n<tr><td><code>category</code></td><td><code>category = $n</code></td></tr>\n<tr><td><code>minPrice</code></td><td><code>price &gt;= $n</code></td></tr>\n<tr><td><code>maxPrice</code></td><td><code>price &lt;= $n</code></td></tr>\n<tr><td><code>q</code></td><td><code>name ILIKE $n</code> với giá trị <code>'%' + q + '%'</code></td></tr>\n<tr><td><code>ids</code> (mảng)</td><td><code>id = ANY($n)</code> với giá trị là <strong>cả mảng</strong></td></tr>\n</tbody></table>\n<p>Các điều kiện theo <strong>đúng thứ tự trong bảng</strong>, nối bằng <code>&quot; AND &quot;</code>, có tiền tố <code>&quot;WHERE &quot;</code>. Không có điều kiện nào → <code>where</code> là chuỗi rỗng.</p>\n<pre class=\"code\"><code class=\"language-js\">buildProductFilter({ maxPrice: 50000, category: &quot;books&quot; })\n// { where: &quot;WHERE category = $1 AND price &lt;= $2&quot;, values: [&quot;books&quot;, 50000] }</code></pre>\n",
      "fn": "buildProductFilter",
      "starter": "function buildProductFilter(filters) {\n  const conditions = [];\n  const values = [];\n\n  return { where: \"\", values };\n}\n",
      "solution": "function buildProductFilter(filters) {\n  const conditions = [];\n  const values = [];\n  const add = (sql, value) => {\n    values.push(value);\n    conditions.push(sql.replace(\"?\", \"$\" + values.length));\n  };\n  if (filters.category !== undefined) add(\"category = ?\", filters.category);\n  if (filters.minPrice !== undefined) add(\"price >= ?\", filters.minPrice);\n  if (filters.maxPrice !== undefined) add(\"price <= ?\", filters.maxPrice);\n  if (filters.q !== undefined) add(\"name ILIKE ?\", \"%\" + filters.q + \"%\");\n  if (filters.ids !== undefined) add(\"id = ANY(?)\", filters.ids);\n  return { where: conditions.length ? \"WHERE \" + conditions.join(\" AND \") : \"\", values };\n}\n",
      "explain": "<p>Đây chính là phần khó nhất của Nhiệm vụ 2 trong project. Thư viện query builder (Knex, Kysely) hay ORM làm việc này cho bạn — nhưng khi đọc log SQL chậm hoặc debug lỗi &quot;bind message supplies 3 parameters, but prepared statement requires 2&quot;, bạn cần hiểu nó hoạt động thế nào.</p>\n",
      "hints": [
       "<p>Số thứ tự placeholder = độ dài mảng <code>values</code> <strong>sau khi</strong> push giá trị.</p>\n",
       "<p>Viết một hàm phụ <code>add(sqlCoDauHoi, giaTri)</code> để khỏi lặp lại việc đếm.</p>\n",
       "<p>Kiểm tra <code>!== undefined</code> chứ không phải truthy: <code>minPrice: 0</code> là một bộ lọc hợp lệ!</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         {
          "maxPrice": 50000,
          "category": "books"
         }
        ],
        "expected": {
         "where": "WHERE category = $1 AND price <= $2",
         "values": [
          "books",
          50000
         ]
        }
       },
       {
        "args": [
         {}
        ],
        "expected": {
         "where": "",
         "values": []
        }
       },
       {
        "args": [
         {
          "minPrice": 0
         }
        ],
        "expected": {
         "where": "WHERE price >= $1",
         "values": [
          0
         ]
        },
        "label": "minPrice = 0 vẫn là bộ lọc"
       },
       {
        "args": [
         {
          "q": "pro",
          "ids": [
           1,
           3,
           5
          ]
         }
        ],
        "expected": {
         "where": "WHERE name ILIKE $1 AND id = ANY($2)",
         "values": [
          "%pro%",
          [
           1,
           3,
           5
          ]
         ]
        }
       },
       {
        "args": [
         {
          "category": "electronics",
          "minPrice": 10000,
          "maxPrice": 200000,
          "q": "key",
          "ids": [
           3
          ]
         }
        ],
        "expected": {
         "where": "WHERE category = $1 AND price >= $2 AND price <= $3 AND name ILIKE $4 AND id = ANY($5)",
         "values": [
          "electronics",
          10000,
          200000,
          "%key%",
          [
           3
          ]
         ]
        }
       },
       {
        "args": [
         {
          "category": "x' OR '1'='1"
         }
        ],
        "expected": {
         "where": "WHERE category = $1",
         "values": [
          "x' OR '1'='1"
         ]
        },
        "label": "chuỗi tấn công chỉ nằm trong values"
       }
      ]
     },
     {
      "id": "rp-insert-many",
      "title": "INSERT nhiều dòng trong một câu lệnh",
      "difficulty": "medium",
      "prompt": "<p>Viết <code>insertMany(table, columns, rows)</code> trả về <code>{ text, values }</code> cho <strong>một</strong> câu INSERT nhiều dòng (nhanh hơn N câu INSERT riêng lẻ: một lượt đi-về mạng thay vì N):</p>\n<pre class=\"code\"><code class=\"language-js\">insertMany(&quot;order_items&quot;, [&quot;order_id&quot;, &quot;product_id&quot;, &quot;quantity&quot;], [[7, 1, 2], [7, 5, 1]])\n// {\n//   text: &quot;INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3), ($4, $5, $6)&quot;,\n//   values: [7, 1, 2, 7, 5, 1]\n// }</code></pre>\n<p><code>table</code> và <code>columns</code> chỉ được chứa chữ thường, số và <code>_</code> (bắt đầu bằng chữ) — sai thì <code>throw new Error(&quot;Invalid identifier: &lt;tên&gt;&quot;)</code> (vì chúng bị ghép thẳng vào SQL, không đi qua placeholder). <code>rows</code> rỗng → <code>throw new Error(&quot;No rows&quot;)</code>. Mỗi dòng phải có đúng số cột → <code>throw new Error(&quot;Row 1 has 2 values, expected 3&quot;)</code> (chỉ số bắt đầu từ 0).</p>\n",
      "fn": "insertMany",
      "starter": "function insertMany(table, columns, rows) {\n\n}\n",
      "solution": "function insertMany(table, columns, rows) {\n  for (const name of [table, ...columns]) {\n    if (!/^[a-z][a-z0-9_]*$/.test(name)) throw new Error(\"Invalid identifier: \" + name);\n  }\n  if (rows.length === 0) throw new Error(\"No rows\");\n  const values = [];\n  const tuples = rows.map((row, i) => {\n    if (row.length !== columns.length) {\n      throw new Error(\"Row \" + i + \" has \" + row.length + \" values, expected \" + columns.length);\n    }\n    const placeholders = row.map((value) => {\n      values.push(value);\n      return \"$\" + values.length;\n    });\n    return \"(\" + placeholders.join(\", \") + \")\";\n  });\n  return {\n    text: \"INSERT INTO \" + table + \" (\" + columns.join(\", \") + \") VALUES \" + tuples.join(\", \"),\n    values\n  };\n}\n",
      "explain": "<p>Postgres giới hạn 65.535 tham số mỗi câu lệnh — chèn hàng trăm nghìn dòng thì chia thành từng lô (batch), hoặc dùng <code>COPY</code> (nhanh nhất). Lời giải Nhiệm vụ 4 trong project dùng đúng kỹ thuật này cho <code>order_items</code>.</p>\n",
      "hints": [
       "<p>Duyệt từng dòng, từng giá trị: push vào <code>values</code>, placeholder là <code>&quot;$&quot; + values.length</code>.</p>\n",
       "<p>Kiểm tra tên bảng/cột bằng regex <code>/^[a-z][a-z0-9_]*$/</code> trước tiên.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         "order_items",
         [
          "order_id",
          "product_id",
          "quantity"
         ],
         [
          [
           7,
           1,
           2
          ],
          [
           7,
           5,
           1
          ]
         ]
        ],
        "expected": {
         "text": "INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3), ($4, $5, $6)",
         "values": [
          7,
          1,
          2,
          7,
          5,
          1
         ]
        }
       },
       {
        "args": [
         "tags",
         [
          "name"
         ],
         [
          [
           "sale"
          ]
         ]
        ],
        "expected": {
         "text": "INSERT INTO tags (name) VALUES ($1)",
         "values": [
          "sale"
         ]
        }
       },
       {
        "code": "try { insertMany(\"users; DROP TABLE users\", [\"id\"], [[1]]); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "tên bảng chứa SQL độc",
        "expected": "Invalid identifier: users; DROP TABLE users"
       },
       {
        "code": "try { insertMany(\"t\", [\"a\", \"Bad-Col\"], [[1, 2]]); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "tên cột không hợp lệ",
        "expected": "Invalid identifier: Bad-Col"
       },
       {
        "code": "try { insertMany(\"t\", [\"a\"], []); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "không có dòng nào",
        "expected": "No rows"
       },
       {
        "code": "try { insertMany(\"t\", [\"a\", \"b\", \"c\"], [[1, 2, 3], [4, 5]]); return \"không ném lỗi\"; } catch (e) { return e.message; }",
        "label": "dòng thiếu giá trị",
        "expected": "Row 1 has 2 values, expected 3"
       }
      ]
     },
     {
      "id": "rp-pg-error",
      "title": "Dịch lỗi PostgreSQL thành HTTP",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>pgErrorToHttp(err)</code> nhận một lỗi (object có thể có <code>code</code>, <code>constraint</code>) và trả về <code>{ status, error }</code>:</p>\n<table><thead><tr><th>err.code</th><th>status</th><th>error</th></tr></thead>\n<tbody>\n<tr><td><code>23505</code></td><td>409</td><td><code>&quot;Duplicate value&quot;</code> — riêng khi <code>err.constraint === &quot;users_email_key&quot;</code> thì <code>&quot;Email already registered&quot;</code></td></tr>\n<tr><td><code>23503</code></td><td>409</td><td><code>&quot;Related resource missing or in use&quot;</code></td></tr>\n<tr><td><code>23502</code>, <code>23514</code>, <code>22P02</code></td><td>400</td><td><code>&quot;Invalid input&quot;</code></td></tr>\n<tr><td><code>40P01</code>, <code>40001</code></td><td>503</td><td><code>&quot;Please retry&quot;</code></td></tr>\n<tr><td>khác (kể cả không có code)</td><td>500</td><td><code>&quot;Internal Server Error&quot;</code></td></tr>\n</tbody></table>\n",
      "fn": "pgErrorToHttp",
      "starter": "function pgErrorToHttp(err) {\n  return { status: 500, error: err.message };\n}\n",
      "solution": "function pgErrorToHttp(err) {\n  switch (err && err.code) {\n    case \"23505\":\n      return { status: 409, error: err.constraint === \"users_email_key\" ? \"Email already registered\" : \"Duplicate value\" };\n    case \"23503\":\n      return { status: 409, error: \"Related resource missing or in use\" };\n    case \"23502\":\n    case \"23514\":\n    case \"22P02\":\n      return { status: 400, error: \"Invalid input\" };\n    case \"40P01\":\n    case \"40001\":\n      return { status: 503, error: \"Please retry\" };\n    default:\n      return { status: 500, error: \"Internal Server Error\" };\n  }\n}\n",
      "explain": "<p>Tên ràng buộc (<code>users_email_key</code>) do Postgres tự đặt theo mẫu <code>&lt;bảng&gt;_&lt;cột&gt;_key</code> khi khai báo <code>UNIQUE</code> trên cột. Dựa vào tên ràng buộc để chọn thông điệp thân thiện là kỹ thuật phổ biến — nên đặt tên ràng buộc tường minh trong migration để không phụ thuộc quy ước tự đặt.</p>\n",
      "hints": [
       "<p><code>switch (err.code)</code> với nhiều <code>case</code> dùng chung một nhánh.</p>\n",
       "<p>Code có sẵn để lộ <code>err.message</code> của database ra ngoài — đừng làm vậy với lỗi 500.</p>\n"
      ],
      "followUp": "",
      "helpers": "",
      "compare": null,
      "timeout": null,
      "brokenStarter": false,
      "kind": "js",
      "schema": "",
      "needsSql": false,
      "tests": [
       {
        "args": [
         {
          "code": "23505",
          "constraint": "users_email_key",
          "message": "duplicate key value violates unique constraint \"users_email_key\""
         }
        ],
        "expected": {
         "status": 409,
         "error": "Email already registered"
        }
       },
       {
        "args": [
         {
          "code": "23505",
          "constraint": "tags_name_key"
         }
        ],
        "expected": {
         "status": 409,
         "error": "Duplicate value"
        }
       },
       {
        "args": [
         {
          "code": "23503"
         }
        ],
        "expected": {
         "status": 409,
         "error": "Related resource missing or in use"
        }
       },
       {
        "args": [
         {
          "code": "22P02",
          "message": "invalid input syntax for type integer: \"abc\""
         }
        ],
        "expected": {
         "status": 400,
         "error": "Invalid input"
        }
       },
       {
        "args": [
         {
          "code": "40P01"
         }
        ],
        "expected": {
         "status": 503,
         "error": "Please retry"
        }
       },
       {
        "args": [
         {
          "message": "connect ECONNREFUSED 127.0.0.1:5432"
         }
        ],
        "expected": {
         "status": 500,
         "error": "Internal Server Error"
        },
        "label": "lỗi kết nối: không lộ địa chỉ database"
       }
      ]
     }
    ]
   },
   {
    "id": "rp-tasks",
    "title": "Làm 6 nhiệm vụ của shop-api",
    "html": "<p>Đây là phần <strong>thực hành chính</strong> của chặng: code chạy trên máy bạn, với PostgreSQL thật. Hướng dẫn chi tiết, sơ đồ thư mục và cách xử lý lỗi nằm trong <code>projects/shop-api/README.md</code>.</p>\n<h2>1. Chuẩn bị (một lần)</h2>\n<pre class=\"code\"><code class=\"language-bash\">cd projects/shop-api\nnpm install\ndocker compose up -d db\nnpm run migrate\nnpm run seed\nnpm test            # 19 test &quot;phần mẫu&quot; phải qua; các test nhiệm vụ trượt — bình thường</code></pre>\n<h2>2. Vòng lặp làm một nhiệm vụ</h2>\n<ol><li><code>npm run task</code> để xem danh sách, đọc <strong>comment hướng dẫn</strong> ngay trên dòng <code>throw notImplemented('NHIỆM VỤ n ...')</code>.</li><li>Đọc code <strong>MẪU</strong> gần đó (<code>register</code>, <code>products.create</code>, <code>cancelOrder</code>) — chúng dùng đúng các kỹ thuật bạn cần.</li><li>Viết code. Chạy <code>npm run dev</code> và thử bằng <code>curl</code> / Postman nếu muốn xem tận mắt.</li><li><code>npm run task -- n</code> cho đến khi tất cả test của nhiệm vụ đó qua.</li><li><code>npm test</code> để chắc không làm hỏng phần khác.</li><li>Mở <code>solutions/</code> để <strong>so sánh</strong> (không phải để chép), rồi trả lời câu &quot;tại sao&quot; bên dưới.</li></ol>\n<h2>3. Đọc kết quả test</h2>\n<pre class=\"code\"><code class=\"language-text\">not ok 6 - 5 request ĐỒNG THỜI mua sản phẩm chỉ còn 3 cái → đúng 3 thành công, kho về 0\n  error: |-\n    Expected values to be strictly deep-equal:\n    + actual - expected\n      [ 201, 201, 201,\n    +   201,\n    +   201\n    -   409,\n    -   409 ]</code></pre>\n<p>Dòng <code>+</code> là <strong>thực tế</strong> code của bạn trả về, <code>-</code> là <strong>mong đợi</strong>. Ở ví dụ trên: 5 đơn đều thành công trong khi kho chỉ có 3 → bán vượt.</p>\n<h2>4. Debug với database</h2>\n<pre class=\"code\"><code class=\"language-bash\">docker compose exec db psql -U shop -d shop</code></pre>\n<pre class=\"code\"><code class=\"language-sql\">SELECT id, name, stock FROM products ORDER BY id;\nEXPLAIN SELECT * FROM orders WHERE user_id = 1;   -- Nhiệm vụ 6\nSELECT * FROM schema_migrations;                  -- migration nào đã chạy</code></pre>\n<p>Muốn làm lại dữ liệu sạch: <code>npm run seed</code>. Test dùng database riêng <code>shop_test</code> và tự dựng lại từ đầu mỗi lần, nên không ảnh hưởng dữ liệu dev.</p>\n<h2>5. Sáu nhiệm vụ</h2>\n<table><thead><tr><th>#</th><th>Việc</th><th>Học được</th><th>Câu hỏi tại sao</th></tr></thead>\n<tbody>\n<tr><td>1</td><td><code>GET /products/:id</code></td><td>placeholder <code>$1</code>, 400 vs 404</td><td>Tại sao <code>/products/abc</code> là 400 mà không phải 404?</td></tr>\n<tr><td>2</td><td><code>GET /products</code> lọc + sắp xếp + phân trang</td><td>WHERE động, whitelist ORDER BY, escape LIKE</td><td>Tại sao <code>sort</code> không truyền qua placeholder được?</td></tr>\n<tr><td>3</td><td><code>POST /auth/login</code></td><td>so mật khẩu băm, cấp JWT</td><td>Tại sao &quot;sai email&quot; và &quot;sai mật khẩu&quot; phải trả cùng một thông báo?</td></tr>\n<tr><td>4</td><td><code>POST /orders</code></td><td>transaction, trừ kho nguyên tử, tránh deadlock</td><td>Tại sao xử lý item theo <code>productId</code> tăng dần lại tránh được deadlock?</td></tr>\n<tr><td>5</td><td><code>GET /me/orders</code></td><td>sửa N+1, <code>= ANY($1)</code></td><td>Khi nào JOIN một lần tốt hơn hai truy vấn, và ngược lại?</td></tr>\n<tr><td>6</td><td>Migration tạo index</td><td>migration, <code>EXPLAIN</code></td><td>Tại sao test phải tắt <code>enable_seqscan</code> mới thấy index được dùng?</td></tr>\n</tbody></table>\n<p>Gợi ý thứ tự: <strong>1 → 2 → 3 → 5 → 6 → 4</strong>. Nhiệm vụ 4 khó nhất vì lỗi của nó chỉ lộ ra khi có nhiều request <strong>cùng lúc</strong> — test đã mô phỏng điều đó cho bạn.</p>\n<h2>6. Mang vào phỏng vấn</h2>\n<p>Sau khi xong, bạn có một câu chuyện thật để kể trong phần 프로젝트 질문: <em>&quot;Em viết API đặt hàng; lúc đầu dùng SELECT rồi UPDATE nên khi test 5 request đồng thời thì bán vượt kho. Em đổi sang UPDATE có điều kiện trong transaction, xử lý theo thứ tự id để tránh deadlock, và viết test tái hiện race condition.&quot;</em> — đó là loại câu trả lời người phỏng vấn muốn nghe: vấn đề → nguyên nhân → cách sửa → cách kiểm chứng.</p>\n",
    "source": "content/06-real-project/04-tasks.md",
    "snippetSchema": "",
    "snippetHelpers": "",
    "snippetNeedsSql": false,
    "exercises": []
   }
  ]
 }
];
