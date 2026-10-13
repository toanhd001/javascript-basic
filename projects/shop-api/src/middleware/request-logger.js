// Ghi một dòng log cho mỗi request khi response đã gửi xong: method, đường dẫn, status, thời gian.
export function requestLogger() {
  return (req, res, next) => {
    const start = process.hrtime.bigint();
    res.on('finish', () => {
      const ms = Number(process.hrtime.bigint() - start) / 1e6;
      console.log(`${req.method} ${req.originalUrl} → ${res.statusCode} (${ms.toFixed(1)}ms)`);
    });
    next();
  };
}
