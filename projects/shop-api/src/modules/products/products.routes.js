import { Router } from 'express';
import { requireAuth, requireRole } from '../../middleware/auth.js';
import { badRequest, notFound, notImplemented } from '../../errors.js'; // badRequest, notFound: dùng ở Nhiệm vụ 1–2
import { parseIntParam, requireString, requireInt } from '../../lib/validate.js';
import * as products from './products.repository.js';

export const SORTS = ['id', 'price_asc', 'price_desc', 'name'];

export function createProductsRouter({ db, config }) {
  const router = Router();

  /*
   * NHIỆM VỤ 2 — GET /products?category=&q=&minPrice=&maxPrice=&sort=&page=&limit=
   *  - page: số nguyên ≥ 1, mặc định 1. limit: 1–50, mặc định 10. minPrice/maxPrice: số nguyên ≥ 0.
   *    Dùng parseIntParam(value, { name, min, max, defaultValue }) — nó tự ném lỗi 400.
   *  - sort: một trong SORTS, mặc định 'id' (id tăng dần). Sai → 400 `sort must be one of: id, price_asc, price_desc, name`
   *    price_asc / price_desc / name: bằng nhau thì xếp tiếp theo id tăng dần.
   *  - 200 → { data: [...], page, limit, total }
   */
  router.get('/products', async (req, res) => {
    throw notImplemented('NHIỆM VỤ 2 (src/modules/products/products.routes.js → GET /products)');
  });

  /*
   * NHIỆM VỤ 1 — GET /products/:id
   *  - id phải là số nguyên ≥ 1 → dùng parseIntParam(req.params.id, { name: 'id' }) (tự trả 400 nếu sai)
   *  - không có → 404 { error: "Product not found" }   (throw notFound('Product not found'))
   *  - có → 200 + { id, name, category, price, stock }
   */
  router.get('/products/:id', async (req, res) => {
    throw notImplemented('NHIỆM VỤ 1 (src/modules/products/products.routes.js → GET /products/:id)');
  });

  // MẪU: route chỉ admin, validate body, gọi repository, trả 201
  router.post('/products', requireAuth(config), requireRole('admin'), async (req, res) => {
    const body = req.body || {};
    const product = await products.create(db, {
      name: requireString(body.name, { name: 'name', max: 200 }),
      category: requireString(body.category, { name: 'category', max: 50 }),
      price: requireInt(body.price, { name: 'price', min: 0, max: 1_000_000_000 }),
      stock: requireInt(body.stock, { name: 'stock', min: 0, max: 1_000_000 })
    });
    res.status(201).location(`/products/${product.id}`).json(product);
  });

  return router;
}
