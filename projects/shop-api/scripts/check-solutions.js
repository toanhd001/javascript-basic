// Dành cho người bảo trì: chép project sang thư mục tạm, đè các file trong solutions/ lên,
// rồi chạy toàn bộ test. Đảm bảo lời giải tham khảo luôn qua 100% test.
import { cpSync, mkdtempSync, rmSync, symlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const work = mkdtempSync(path.join(tmpdir(), 'shop-api-solutions-'));
try {
  cpSync(root, work, {
    recursive: true,
    filter: (src) => !/[/\\](node_modules|solutions)([/\\]|$)/.test(path.relative(root, src) ? '/' + path.relative(root, src) : '')
  });
  cpSync(path.join(root, 'solutions'), work, { recursive: true });
  symlinkSync(path.join(root, 'node_modules'), path.join(work, 'node_modules'), 'dir');
  const result = spawnSync(process.execPath, ['--test', '--test-concurrency=1', 'test/*.test.js'], { cwd: work, stdio: 'inherit' });
  process.exitCode = result.status ?? 1;
} finally {
  rmSync(work, { recursive: true, force: true });
}
