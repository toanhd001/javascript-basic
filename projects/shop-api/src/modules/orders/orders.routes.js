import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import { parseIntParam } from '../../lib/validate.js';
import * as ordersService from './orders.service.js';
import * as orders from './orders.repository.js';

export function createOrdersRouter({ db, config }) {
  const router = Router();
  const auth = requireAuth(config);

  router.post('/orders', auth, async (req, res) => {
    const order = await ordersService.createOrder(db, req.user, req.body);
    res.status(201).location(`/orders/${order.id}`).json(order);
  });

  router.post('/orders/:id/cancel', auth, async (req, res) => {
    const id = parseIntParam(req.params.id, { name: 'id' });
    res.json(await ordersService.cancelOrder(db, req.user, id));
  });

  router.get('/me/orders', auth, async (req, res) => {
    res.json(await orders.findByUserWithItems(db, req.user.id));
  });

  return router;
}
