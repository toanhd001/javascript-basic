import { notImplemented } from '../../errors.js';

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

/*
 * NHIỆM VỤ 1 — tìm sản phẩm theo id. Trả về object sản phẩm, hoặc null nếu không có.
 */
export async function findById(db, id) {
  throw notImplemented('NHIỆM VỤ 1 (src/modules/products/products.repository.js → findById)');
}

/*
 * NHIỆM VỤ 2 — danh sách có lọc, sắp xếp, phân trang.
 * filters: { category?, q?, minPrice?, maxPrice?, sort, limit, offset }
 * Trả về { rows, total } — total là số sản phẩm KHỚP BỘ LỌC (không phải chỉ trang hiện tại).
 * Gợi ý:
 *  - Xây mảng `conditions` và `values` dần dần; placeholder là `$${values.length}` sau mỗi lần push.
 *  - q: tìm không phân biệt hoa thường trong name bằng ILIKE. Escape \ % _ trong q trước khi bọc '%...%'
 *    (nếu không, q = "%" sẽ khớp mọi sản phẩm).
 *  - sort KHÔNG thể truyền bằng placeholder (placeholder chỉ dành cho GIÁ TRỊ, không phải tên cột/từ khoá):
 *    dùng một object whitelist ánh xạ sort → mệnh đề ORDER BY.
 *  - COUNT(*) trả về kiểu bigint, thư viện pg biến nó thành CHUỖI "10" → ép kiểu: COUNT(*)::int
 */
export async function list(db, filters) {
  throw notImplemented('NHIỆM VỤ 2 (src/modules/products/products.repository.js → list)');
}
