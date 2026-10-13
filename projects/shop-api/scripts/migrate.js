// Chạy các file db/migrations/*.sql CHƯA từng chạy, theo thứ tự tên file.
// Mỗi file chạy trong một transaction: lỗi giữa chừng → không áp dụng gì của file đó.
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import pg from 'pg';

const MIGRATIONS_DIR = fileURLToPath(new URL('../db/migrations/', import.meta.url));

export async function migrate(databaseUrl, { log = console.log } = {}) {
  const client = new pg.Client({ connectionString: databaseUrl });
  await client.connect();
  try {
    // Khoá advisory: nếu 3 container API cùng khởi động và cùng chạy migrate, chỉ một cái được làm.
    await client.query('SELECT pg_advisory_lock(727272)');
    await client.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
      name TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`);
    const { rows } = await client.query('SELECT name FROM schema_migrations');
    const applied = new Set(rows.map((r) => r.name));
    const files = (await readdir(MIGRATIONS_DIR)).filter((f) => f.endsWith('.sql')).sort();
    let count = 0;
    for (const file of files) {
      if (applied.has(file)) continue;
      const sql = await readFile(path.join(MIGRATIONS_DIR, file), 'utf8');
      await client.query('BEGIN');
      try {
        await client.query(sql);
        await client.query('INSERT INTO schema_migrations (name) VALUES ($1)', [file]);
        await client.query('COMMIT');
      } catch (err) {
        await client.query('ROLLBACK');
        throw new Error(`Migration ${file} thất bại: ${err.message}`);
      }
      log(`✔ đã chạy ${file}`);
      count++;
    }
    if (count === 0) log('Không có migration mới.');
  } finally {
    await client.query('SELECT pg_advisory_unlock(727272)').catch(() => {});
    await client.end();
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const url = process.env.DATABASE_URL || 'postgres://shop:shop@localhost:5432/shop';
  migrate(url).catch((err) => {
    console.error(err.message);
    if (err.code === 'ECONNREFUSED') console.error('→ Postgres chưa chạy? Thử: docker compose up -d db');
    process.exit(1);
  });
}
