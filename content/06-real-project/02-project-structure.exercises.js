module.exports = [
  {
    id: 'rp-load-config',
    title: 'Đọc và kiểm tra cấu hình',
    difficulty: 'medium',
    fn: 'loadConfig',
    prompt: `
Viết \`loadConfig(env)\` (\`env\` là object giống \`process.env\`: mọi giá trị là **chuỗi**) trả về:

\`\`\`js
{ nodeEnv, port, databaseUrl, jwtSecret }
\`\`\`

- \`nodeEnv\`: \`env.NODE_ENV\`, mặc định \`"development"\`.
- \`port\`: số nguyên từ \`env.PORT\` (mặc định \`3000\`), phải trong khoảng 1–65535.
- \`databaseUrl\`: **bắt buộc**, phải bắt đầu bằng \`"postgres://"\` hoặc \`"postgresql://"\`.
- \`jwtSecret\`: production (\`nodeEnv === "production"\`) thì **bắt buộc** và dài ≥ 16 ký tự; môi trường khác mặc định \`"dev-secret"\`.

Sai thì \`throw new Error(...)\` với thông điệp liệt kê **tất cả** vấn đề, mỗi vấn đề một dòng bắt đầu bằng \`"- "\`, theo thứ tự PORT → DATABASE_URL → JWT_SECRET:

\`\`\`text
Invalid configuration:
- PORT must be an integer 1-65535
- DATABASE_URL is required
\`\`\`

Các thông điệp: \`PORT must be an integer 1-65535\`, \`DATABASE_URL is required\`, \`DATABASE_URL must start with postgres://\`, \`JWT_SECRET must be at least 16 characters in production\`.
`,
    starter: `
function loadConfig(env) {

}
`,
    solution: `
function loadConfig(env) {
  const nodeEnv = env.NODE_ENV || "development";
  const problems = [];

  const portText = env.PORT ?? "3000";
  const port = Number(portText);
  if (!/^\\d+$/.test(portText) || port < 1 || port > 65535) problems.push("PORT must be an integer 1-65535");

  const databaseUrl = env.DATABASE_URL;
  if (!databaseUrl) problems.push("DATABASE_URL is required");
  else if (!/^postgres(ql)?:\\/\\//.test(databaseUrl)) problems.push("DATABASE_URL must start with postgres://");

  let jwtSecret = env.JWT_SECRET;
  if (nodeEnv === "production") {
    if (!jwtSecret || jwtSecret.length < 16) problems.push("JWT_SECRET must be at least 16 characters in production");
  } else if (!jwtSecret) {
    jwtSecret = "dev-secret";
  }

  if (problems.length) throw new Error("Invalid configuration:\\n- " + problems.join("\\n- "));
  return { nodeEnv, port, databaseUrl, jwtSecret };
}
`,
    hints: [
      'Gom lỗi vào mảng `problems` thay vì `throw` ngay ở lỗi đầu tiên — người vận hành sửa hết một lần.',
      '`Number("")` là `0` và `Number("3000abc")` là `NaN`: kiểm tra chuỗi bằng regex `/^\\d+$/` trước.',
      'Cuối cùng: `throw new Error("Invalid configuration:\\n- " + problems.join("\\n- "))`.'
    ],
    explain: 'Fail fast + báo **tất cả** lỗi cùng lúc giúp deploy sai cấu hình bị phát hiện ngay ở bước khởi động (container crash, CI đỏ), thay vì âm thầm chạy với giá trị sai. Thư viện như `zod` / `envalid` làm việc này gọn hơn trong dự án thật.',
    tests: [
      { code: 'return loadConfig({ DATABASE_URL: "postgres://u:p@localhost:5432/shop" });', label: 'chỉ có DATABASE_URL → dùng mặc định', expected: { nodeEnv: 'development', port: 3000, databaseUrl: 'postgres://u:p@localhost:5432/shop', jwtSecret: 'dev-secret' } },
      { code: 'return loadConfig({ NODE_ENV: "production", PORT: "8080", DATABASE_URL: "postgresql://db/shop", JWT_SECRET: "a-very-long-secret-123" });', label: 'production đầy đủ', expected: { nodeEnv: 'production', port: 8080, databaseUrl: 'postgresql://db/shop', jwtSecret: 'a-very-long-secret-123' } },
      { code: 'try { loadConfig({ PORT: "abc" }); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'PORT sai + thiếu DATABASE_URL → báo cả hai', expected: 'Invalid configuration:\n- PORT must be an integer 1-65535\n- DATABASE_URL is required' },
      { code: 'try { loadConfig({ NODE_ENV: "production", DATABASE_URL: "mysql://x", JWT_SECRET: "short" }); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'production: URL sai loại + secret ngắn', expected: 'Invalid configuration:\n- DATABASE_URL must start with postgres://\n- JWT_SECRET must be at least 16 characters in production' },
      { code: 'try { loadConfig({ PORT: "70000", DATABASE_URL: "postgres://x" }); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'PORT ngoài khoảng', expected: 'Invalid configuration:\n- PORT must be an integer 1-65535' },
      { code: 'try { loadConfig({ PORT: "", DATABASE_URL: "postgres://x" }); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'PORT rỗng', expected: 'Invalid configuration:\n- PORT must be an integer 1-65535' }
    ]
  }
];
