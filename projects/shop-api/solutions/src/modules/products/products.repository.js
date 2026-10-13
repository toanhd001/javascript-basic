// Repository: CHỈ chứa SQL. Nhận `db` (hoặc `tx` trong transaction) làm tham số → dễ test, dễ đổi.
// PostgreSQL dùng placeholder $1, $2, ... (MySQL/SQLite dùng ?). Không bao giờ ghép giá trị vào chuỗi SQL.

const COLUMNS = 'id, name, category, price, stock';

// MẪU: INSERT ... RETURNING trả về luôn dòng vừa tạo (có id) trong một lượt đi-về
export async function create(db, { name, category, price, stock }) {
  const { rows } = await db.query(
    `INSERT INTO products (name, category, price, stock) VALUES ($1, $2, $3, $4) RETURNING ${COLUMNS}`,
    [name, category, price, stock]
  );
  return rows[0];
}

// NHIỆM VỤ 1
export async function findById(db, id) {
  const { rows } = await db.query(`SELECT ${COLUMNS} FROM products WHERE id = $1`, [id]);
  return rows[0] ?? null;
}

// Whitelist: sort do người dùng gửi lên KHÔNG bao giờ được ghép thẳng vào SQL
const ORDER_BY = {
  id: 'id ASC',
  price_asc: 'price ASC, id ASC',
  price_desc: 'price DESC, id ASC',
  name: 'name ASC, id ASC'
};

// Escape các ký tự đặc biệt của LIKE: \ % _
const escapeLike = (s) => s.replace(/[\\%_]/g, (c) => '\\' + c);

// NHIỆM VỤ 2
export async function list(db, { category, q, minPrice, maxPrice, sort = 'id', limit, offset }) {
  const conditions = [];
  const values = [];
  const add = (sqlWithPlaceholder, value) => {
    values.push(value);
    conditions.push(sqlWithPlaceholder.replace('?', `$${values.length}`));
  };
  if (category !== undefined) add('category = ?', category);
  if (q !== undefined) add('name ILIKE ?', `%${escapeLike(q)}%`);
  if (minPrice !== undefined) add('price >= ?', minPrice);
  if (maxPrice !== undefined) add('price <= ?', maxPrice);
  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

  const totalResult = await db.query(`SELECT COUNT(*)::int AS total FROM products ${where}`, values);
  const { rows } = await db.query(
    `SELECT ${COLUMNS} FROM products ${where} ORDER BY ${ORDER_BY[sort]} LIMIT $${values.length + 1} OFFSET $${values.length + 2}`,
    [...values, limit, offset]
  );
  return { rows, total: totalResult.rows[0].total };
}
