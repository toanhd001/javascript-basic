import pg from 'pg';

// Bọc pg.Pool để:
//  - mọi truy vấn đi qua một chỗ (dễ log, đo, đếm — test dùng queryCount để bắt lỗi N+1)
//  - có helper transaction() luôn COMMIT/ROLLBACK và trả kết nối về pool
export function createDb(connectionString, { max = 10 } = {}) {
  const pool = new pg.Pool({ connectionString, max });
  let queryCount = 0;

  const db = {
    pool,

    // db.query('SELECT ... WHERE id = $1', [id]) → { rows, rowCount }
    query(text, params) {
      queryCount++;
      return pool.query(text, params);
    },

    // await db.transaction(async (tx) => { await tx.query(...); ... })
    // Mọi truy vấn trong fn phải dùng `tx` (cùng MỘT kết nối) — dùng db.query sẽ chạy NGOÀI transaction!
    async transaction(fn) {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        const tx = {
          query(text, params) {
            queryCount++;
            return client.query(text, params);
          }
        };
        const result = await fn(tx);
        await client.query('COMMIT');
        return result;
      } catch (err) {
        await client.query('ROLLBACK');
        throw err;
      } finally {
        client.release(); // QUAN TRỌNG: không release → pool cạn kết nối → cả API treo
      }
    },

    get queryCount() {
      return queryCount;
    },
    resetQueryCount() {
      queryCount = 0;
    },
    close() {
      return pool.end();
    }
  };
  return db;
}
