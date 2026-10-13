// XOÁ SẠCH dữ liệu rồi nạp db/seed.sql. Chỉ dùng cho dev/test.
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

const SEED_FILE = fileURLToPath(new URL('../db/seed.sql', import.meta.url));

// `queryable` là bất cứ thứ gì có .query(): pg.Client, pg.Pool, hoặc db của src/db.js
export async function seed(queryable) {
  const sql = await readFile(SEED_FILE, 'utf8');
  // RESTART IDENTITY: id lại bắt đầu từ 1 → test biết chắc id của dữ liệu mẫu
  await queryable.query('TRUNCATE order_items, orders, products, users RESTART IDENTITY CASCADE');
  await queryable.query(sql);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (process.env.NODE_ENV === 'production') {
    console.error('Từ chối seed khi NODE_ENV=production (seed xoá sạch dữ liệu).');
    process.exit(1);
  }
  const client = new pg.Client({ connectionString: process.env.DATABASE_URL || 'postgres://shop:shop@localhost:5432/shop' });
  await client.connect();
  try {
    await seed(client);
    console.log('✔ Đã nạp dữ liệu mẫu (mật khẩu mọi tài khoản: password123)');
  } finally {
    await client.end();
  }
}
