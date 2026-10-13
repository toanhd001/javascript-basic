# Image cho production: chỉ cài dependencies cần chạy, chạy bằng user không phải root.
FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copy package*.json TRƯỚC source code: layer `npm ci` được cache,
# sửa code không phải cài lại node_modules.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY src ./src
COPY db ./db
COPY scripts/migrate.js scripts/seed.js ./scripts/

USER node
EXPOSE 3000
CMD ["sh", "-c", "node scripts/migrate.js && node src/server.js"]
