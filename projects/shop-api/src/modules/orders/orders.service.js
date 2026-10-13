import { badRequest, conflict, forbidden, notFound, notImplemented } from '../../errors.js'; // badRequest: dùng ở Nhiệm vụ 4

// MẪU TRANSACTION — đọc kỹ trước khi làm Nhiệm vụ 4.
// Huỷ đơn: chỉ chủ đơn (hoặc admin) huỷ được, chỉ đơn 'pending', và phải TRẢ LẠI hàng vào kho.
export async function cancelOrder(db, user, orderId) {
  return db.transaction(async (tx) => {
    // FOR UPDATE: khoá dòng này tới hết transaction. Hai request huỷ cùng lúc → request thứ hai phải chờ,
    // rồi sẽ thấy status đã là 'cancelled' → không trả hàng về kho hai lần.
    const { rows } = await tx.query('SELECT id, user_id, status FROM orders WHERE id = $1 FOR UPDATE', [orderId]);
    const order = rows[0];
    if (!order) throw notFound('Order not found');
    if (order.user_id !== user.id && user.role !== 'admin') throw forbidden();
    if (order.status !== 'pending') throw conflict(`Only pending orders can be cancelled (current: ${order.status})`);

    // Trả hàng về kho bằng MỘT câu lệnh (UPDATE ... FROM), không phải vòng lặp từng sản phẩm
    await tx.query(
      `UPDATE products p
       SET stock = p.stock + oi.quantity
       FROM order_items oi
       WHERE oi.order_id = $1 AND oi.product_id = p.id`,
      [orderId]
    );
    await tx.query("UPDATE orders SET status = 'cancelled' WHERE id = $1", [orderId]);
    return { id: order.id, status: 'cancelled' };
    // Lỗi ném ra ở bất kỳ đâu phía trên → db.transaction() tự ROLLBACK: không có gì bị thay đổi.
  });
}

/*
 * NHIỆM VỤ 4 — đặt hàng.  body = { items: [{ productId, quantity }] }
 *
 * Validate (trước khi mở transaction) → 400:
 *   - items là mảng 1–20 phần tử                        → 'items must be an array of 1-20 items'
 *   - mỗi productId là số nguyên ≥ 1, quantity 1–100    → (dùng requireInt hoặc tự viết, thông báo tuỳ bạn)
 *   - không có productId trùng nhau                      → 'duplicate productId'
 *
 * Trong MỘT transaction (db.transaction(async (tx) => ...)):
 *   - Xử lý các item theo productId TĂNG DẦN (mọi request khoá dòng theo cùng thứ tự → tránh deadlock).
 *   - Trừ kho NGUYÊN TỬ, có điều kiện:
 *       UPDATE products SET stock = stock - $1 WHERE id = $2 AND stock >= $1 RETURNING name, price
 *     Không "SELECT stock rồi tính rồi UPDATE stock = giá_trị_mới": hai request đồng thời sẽ cùng đọc
 *     stock cũ → bán vượt số lượng (lost update). Test có kiểm tra 5 request song song!
 *   - Không dòng nào bị UPDATE → sản phẩm không tồn tại (404 `Product <id> not found`)
 *     hoặc không đủ hàng (409 `Insufficient stock for product <id>`).
 *   - total = Σ price × quantity (giá tại thời điểm đặt). INSERT orders (status 'pending') RETURNING id,
 *     rồi INSERT order_items với unit_price = price.
 *
 * Trả về { id, status: 'pending', total, items: [{ productId, name, quantity, unitPrice }] }
 * với items theo productId tăng dần. Route sẽ trả 201.
 */
export async function createOrder(db, user, body = {}) {
  throw notImplemented('NHIỆM VỤ 4 (src/modules/orders/orders.service.js → createOrder)');
}

