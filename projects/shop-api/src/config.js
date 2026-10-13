// Đọc cấu hình từ biến môi trường (nguyên tắc "12-factor app"): cùng một image chạy ở dev/staging/prod,
// chỉ khác biến môi trường. Không bao giờ hard-code mật khẩu / secret production trong code.

export function loadConfig(env = process.env) {
  const nodeEnv = env.NODE_ENV || 'development';
  const isProduction = nodeEnv === 'production';

  const config = {
    nodeEnv,
    port: Number(env.PORT ?? 3000),
    databaseUrl: env.DATABASE_URL || 'postgres://shop:shop@localhost:5432/shop',
    // Dev có giá trị mặc định cho tiện; production BẮT BUỘC phải đặt
    jwtSecret: env.JWT_SECRET || (isProduction ? '' : 'dev-secret-change-me'),
    tokenTtlSec: Number(env.TOKEN_TTL_SEC ?? 3600),
    logRequests: nodeEnv !== 'test'
  };

  const problems = [];
  if (!Number.isInteger(config.port) || config.port < 0 || config.port > 65535) problems.push('PORT must be an integer 0-65535');
  if (!config.jwtSecret) problems.push('JWT_SECRET is required in production');
  if (isProduction && config.jwtSecret.length < 16) problems.push('JWT_SECRET must be at least 16 characters in production');
  if (!Number.isInteger(config.tokenTtlSec) || config.tokenTtlSec <= 0) problems.push('TOKEN_TTL_SEC must be a positive integer');
  // Fail fast: cấu hình sai thì dừng ngay lúc khởi động, đừng để lỗi lộ ra lúc 3 giờ sáng
  if (problems.length) throw new Error('Invalid configuration:\n- ' + problems.join('\n- '));

  return config;
}
