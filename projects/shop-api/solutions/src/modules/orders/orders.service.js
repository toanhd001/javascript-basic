import { badRequest, conflict, forbidden, notFound } from '../../errors.js';
import { requireInt } from '../../lib/validate.js';

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

// NHIỆM VỤ 4
function validateItems(body) {
  const items = body?.items;
  if (!Array.isArray(items) || items.length < 1 || items.length > 20) {
    throw badRequest('items must be an array of 1-20 items');
  }
  const seen = new Set();
  const clean = items.map((item, i) => {
    const productId = requireInt(item?.productId, { name: `items[${i}].productId`, min: 1 });
    const quantity = requireInt(item?.quantity, { name: `items[${i}].quantity`, min: 1, max: 100 });
    if (seen.has(productId)) throw badRequest('duplicate productId');
    seen.add(productId);
    return { productId, quantity };
  });
  // Mọi request khoá các dòng products theo CÙNG thứ tự → không bao giờ chờ vòng tròn (deadlock)
  return clean.sort((a, b) => a.productId - b.productId);
}

export async function createOrder(db, user, body = {}) {
  const items = validateItems(body);

  return db.transaction(async (tx) => {
    const lines = [];
    for (const { productId, quantity } of items) {
      // Kiểm tra và trừ kho trong MỘT câu lệnh: Postgres khoá dòng khi UPDATE, request đồng thời
      // phải chờ rồi đọc lại giá trị MỚI của stock → không bao giờ bán vượt.
      const { rows } = await tx.query(
        'UPDATE products SET stock = stock - $1 WHERE id = $2 AND stock >= $1 RETURNING name, price',
        [quantity, productId]
      );
      if (rows.length === 0) {
        const exists = await tx.query('SELECT 1 FROM products WHERE id = $1', [productId]);
        if (exists.rowCount === 0) throw notFound(`Product ${productId} not found`);
        throw conflict(`Insufficient stock for product ${productId}`);
      }
      lines.push({ productId, name: rows[0].name, quantity, unitPrice: rows[0].price });
    }

    const total = lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0);
    const { rows } = await tx.query(
      "INSERT INTO orders (user_id, status, total) VALUES ($1, 'pending', $2) RETURNING id, status",
      [user.id, total]
    );
    const order = rows[0];

    // Một câu INSERT nhiều dòng thay vì N câu: ($1,$2,$3,$4), ($5,$6,$7,$8), ...
    const values = [];
    const tuples = lines.map((l) => {
      values.push(order.id, l.productId, l.quantity, l.unitPrice);
      const n = values.length;
      return `($${n - 3}, $${n - 2}, $${n - 1}, $${n})`;
    });
    await tx.query(
      `INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES ${tuples.join(', ')}`,
      values
    );

    return { id: order.id, status: order.status, total, items: lines };
  });
}
