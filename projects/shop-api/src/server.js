import { loadConfig } from './config.js';
import { createDb } from './db.js';
import { createApp } from './app.js';

const config = loadConfig();
const db = createDb(config.databaseUrl);
const app = createApp({ db, config });

const server = app.listen(config.port, () => {
  console.log(`shop-api đang chạy: http://localhost:${config.port}  (NODE_ENV=${config.nodeEnv})`);
});

// Graceful shutdown: khi Docker/Kubernetes gửi SIGTERM, ngừng nhận request mới,
// chờ các request đang chạy xong, đóng pool database rồi mới thoát.
function shutdown(signal) {
  console.log(`Nhận ${signal}, đang tắt...`);
  server.close(async () => {
    await db.close();
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10_000).unref(); // quá 10 giây thì buộc thoát
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
