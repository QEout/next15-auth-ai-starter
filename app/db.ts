import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// 确保这段代码只在服务器端运行
if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL is not defined');
}

declare global {
  var __postgres: {
    client: ReturnType<typeof postgres>;
    db: ReturnType<typeof drizzle>;
  } | undefined;
}

let clientInstance: ReturnType<typeof postgres>;
let dbInstance: ReturnType<typeof drizzle>;

if (process.env.NODE_ENV === 'production') {
  // 生产环境使用
  clientInstance = postgres(process.env.POSTGRES_URL);
  dbInstance = drizzle(clientInstance);
} else {
  // 开发环境使用全局变量以避免热重载时创建多个连接
  if (!global.__postgres) {
    clientInstance = postgres(process.env.POSTGRES_URL);
    dbInstance = drizzle(clientInstance);
    global.__postgres = { client: clientInstance, db: dbInstance };
  } else {
    clientInstance = global.__postgres.client;
    dbInstance = global.__postgres.db;
  }
}

export const client = clientInstance;
export const db = dbInstance; 