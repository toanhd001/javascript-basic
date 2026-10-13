import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import * as authService from './auth.service.js';

// Route chỉ lo phần HTTP (đọc request, chọn status code); logic nằm ở service.
export function createAuthRouter({ db, config }) {
  const router = Router();

  router.post('/auth/register', async (req, res) => {
    const user = await authService.register(db, req.body);
    res.status(201).json(user);
  });

  router.post('/auth/login', async (req, res) => {
    const result = await authService.login(db, config, req.body);
    res.json(result);
  });

  router.get('/me', requireAuth(config), async (req, res) => {
    res.json(await authService.getUser(db, req.user.id));
  });

  return router;
}
