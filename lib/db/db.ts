import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';


// 创建数据库连接
const client = postgres(process.env.POSTGRES_URL!);
export const db = drizzle(client);

// 导出client以便需要时使用
export { client };
