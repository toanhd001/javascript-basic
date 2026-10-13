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
         null
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
        "expected": null
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
    "exercises": [
     {
      "id": "unique-in-order",
      "title": "Khử trùng lặp giữ thứ tự",
      "difficulty": "easy",
      "prompt": "<p>Viết <code>uniqueInOrder(arr)</code> trả về mảng các giá trị không trùng lặp, <strong>giữ thứ tự xuất hiện lần đầu</strong>. Bộ test có mảng 200.000 phần tử — <code>includes</code> trong vòng lặp sẽ quá chậm.</p>\n",
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
        "gen": "return [Array.from({ length: 200000 }, (_, i) => i % 150000)];",
        "check": "return Array.isArray(result) && result.length === 150000 && result[0] === 0 && result[149999] === 149999;",
        "label": "n = 200.000 phần tử (150.000 giá trị khác nhau) — cần O(n)",
        "expectedText": "mảng 150.000 phần tử [0, 1, ..., 149999]"
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
        "gen": "let s = \"\"; for (let i = 0; i < 100000; i++) s += String.fromCharCode(33 + (i % 90)); return [s];",
        "label": "n = 100.000",
        "expected": 90
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
      "prompt": "<p><code>temps[i]</code> là nhiệt độ ngày i. Trả về mảng <code>answer</code> với <code>answer[i]</code> = số ngày phải chờ sau ngày i để có ngày <strong>ấm hơn</strong>; không có thì 0.</p>\n<p><code>[73,74,75,71,69,72,76,73]</code> → <code>[1,1,4,2,1,1,0,0]</code>. Ràng buộc <code>n &lt;= 10^5</code>.</p>\n",
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
        "gen": "const a = Array.from({ length: 100000 }, (_, i) => 100000 - i); a.push(200000); return [a];",
        "check": "return result.length === 100001 && result[0] === 100000 && result[99999] === 1 && result[100000] === 0;",
        "label": "n = 100.000 giảm dần, ngày cuối nóng nhất",
        "expectedText": "[100000, 99999, ..., 1, 0]"
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
   }
  ]
 }
];
