import * as dotenv from 'dotenv';

dotenv.config();

export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'JWT_SECRET',
  expired: process.env.JWT_EXPIRED_IN || '600',
};

export const defaultSalt = 10;
