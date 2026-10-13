import { Router } from 'express';
import { requireAuth, requireRole } from '../../middleware/auth.js';
import { badRequest, notFound } from '../../errors.js';
import { parseIntParam, requireString, requireInt } from '../../lib/validate.js';
import * as products from './products.repository.js';

export const SORTS = ['id', 'price_asc', 'price_desc', 'name'];

export function createProductsRouter({ db, config }) {
  const router = Router();

  // NHIỆM VỤ 2
  router.get('/products', async (req, res) => {
    const query = req.query;
    const page = parseIntParam(query.page, { name: 'page', min: 1, defaultValue: 1 });
    const limit = parseIntParam(query.limit, { name: 'limit', min: 1, max: 50, defaultValue: 10 });
    const minPrice = parseIntParam(query.minPrice, { name: 'minPrice', min: 0, defaultValue: null }) ?? undefined;
    const maxPrice = parseIntParam(query.maxPrice, { name: 'maxPrice', min: 0, defaultValue: null }) ?? undefined;
    const sort = query.sort ?? 'id';
    if (!SORTS.includes(sort)) throw badRequest(`sort must be one of: ${SORTS.join(', ')}`);

    const { rows, total } = await products.list(db, {
      category: query.category,
      q: query.q,
      minPrice,
      maxPrice,
      sort,
      limit,
      offset: (page - 1) * limit
    });
    res.json({ data: rows, page, limit, total });
  });

  // NHIỆM VỤ 1
  router.get('/products/:id', async (req, res) => {
    const id = parseIntParam(req.params.id, { name: 'id' });
    const product = await products.findById(db, id);
    if (!product) throw notFound('Product not found');
    res.json(product);
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
