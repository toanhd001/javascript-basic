import { notImplemented } from '../../errors.js';

/*
 * NHIỆM VỤ 5 — đơn hàng của một người dùng kèm sản phẩm, KHÔNG bị N+1.
 * Trả về mảng, đơn MỚI NHẤT trước (created_at giảm dần, bằng nhau thì id giảm dần):
 *   [{ id, status, total, createdAt, items: [{ productId, name, quantity, unitPrice }] }]
 * items sắp theo id của order_items tăng dần. createdAt là giá trị Date từ cột created_at.
 * Yêu cầu: TỐI ĐA 2 truy vấn bất kể có bao nhiêu đơn (test đếm bằng db.queryCount).
 * Gợi ý: truy vấn 1 lấy các đơn; truy vấn 2 lấy mọi item của các đơn đó bằng
 *   WHERE oi.order_id = ANY($1)   với $1 là MẢNG id   (cú pháp PostgreSQL; MySQL dùng IN (...))
 * rồi gom nhóm bằng Map trong JavaScript.
 */
export async function findByUserWithItems(db, userId) {
  throw notImplemented('NHIỆM VỤ 5 (src/modules/orders/orders.repository.js → findByUserWithItems)');
}
