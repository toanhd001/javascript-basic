// NHIỆM VỤ 5 — 2 truy vấn bất kể bao nhiêu đơn: đơn hàng, rồi mọi item của chúng bằng ANY($1).
export async function findByUserWithItems(db, userId) {
  const { rows: orders } = await db.query(
    `SELECT id, status, total, created_at
     FROM orders
     WHERE user_id = $1
     ORDER BY created_at DESC, id DESC`,
    [userId]
  );
  if (orders.length === 0) return []; // khỏi chạy truy vấn thứ hai

  const { rows: items } = await db.query(
    `SELECT oi.order_id, oi.product_id, p.name, oi.quantity, oi.unit_price
     FROM order_items oi
     JOIN products p ON p.id = oi.product_id
     WHERE oi.order_id = ANY($1)
     ORDER BY oi.id`,
    [orders.map((o) => o.id)]
  );

  const itemsByOrder = new Map(orders.map((o) => [o.id, []]));
  for (const it of items) {
    itemsByOrder.get(it.order_id).push({ productId: it.product_id, name: it.name, quantity: it.quantity, unitPrice: it.unit_price });
  }
  return orders.map((o) => ({
    id: o.id,
    status: o.status,
    total: o.total,
    createdAt: o.created_at,
    items: itemsByOrder.get(o.id)
  }));
}
