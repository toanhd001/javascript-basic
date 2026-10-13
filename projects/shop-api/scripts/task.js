// npm run task          → liệt kê nhiệm vụ
// npm run task -- 3     → chạy test của Nhiệm vụ 3
import { readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const TASKS = {
  1: 'GET /products/:id',
  2: 'GET /products — lọc, sắp xếp, phân trang',
  3: 'POST /auth/login — đăng nhập, cấp token',
  4: 'POST /orders — transaction trừ kho an toàn khi có request đồng thời',
  5: 'GET /me/orders — không N+1 (≤ 2 truy vấn)',
  6: 'Migration: index cho orders(user_id)'
};

const n = process.argv[2];
const testDir = fileURLToPath(new URL('../test/', import.meta.url));
if (!n || !TASKS[n]) {
  console.log('Các nhiệm vụ (chạy test một nhiệm vụ: npm run task -- <số>):\n');
  for (const [k, v] of Object.entries(TASKS)) console.log(`  ${k}. ${v}`);
  console.log('\nChạy toàn bộ test: npm test');
  process.exit(n ? 1 : 0);
}
const file = readdirSync(testDir).find((f) => f.startsWith(`task${n}-`));
const result = spawnSync(process.execPath, ['--test', '--test-concurrency=1', testDir + file], { stdio: 'inherit' });
process.exit(result.status ?? 1);
