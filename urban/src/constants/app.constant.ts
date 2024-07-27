import * as dotenv from 'dotenv';

dotenv.config();

export const defaultPort = 3000;

export const defaultDbConfig = {
  dbName: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 5432,
  migrations: {
    path: './src/migrations',
  },
};
