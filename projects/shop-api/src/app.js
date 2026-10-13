import express from 'express';
import { requestLogger } from './middleware/request-logger.js';
import { errorHandler, notFoundHandler } from './middleware/error-handler.js';
import { createAuthRouter } from './modules/auth/auth.routes.js';
import { createProductsRouter } from './modules/products/products.routes.js';
import { createOrdersRouter } from './modules/orders/orders.routes.js';

// Tạo app từ các "phụ thuộc" truyền vào (dependency injection) thay vì import trực tiếp một db toàn cục.
// Nhờ vậy test có thể truyền database test, server.js truyền database thật.
export function createApp({ db, config }) {
  const app = express();
  app.disable('x-powered-by');             // đừng quảng cáo bạn dùng framework gì
  app.use(express.json({ limit: '100kb' })); // giới hạn kích thước body: chống request khổng lồ
  if (config.logRequests) app.use(requestLogger());

  app.get('/health', async (req, res) => {
    try {
      await db.query('SELECT 1');
      res.json({ status: 'ok', db: 'up' });
    } catch {
      res.status(503).json({ status: 'degraded', db: 'down' });
    }
  });

  const deps = { db, config };
  app.use(createAuthRouter(deps));
  app.use(createProductsRouter(deps));
  app.use(createOrdersRouter(deps));

  app.use(notFoundHandler);
  app.use(errorHandler(config));
  return app;
}
