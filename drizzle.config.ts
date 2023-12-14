import 'dotenv/config'
import { env } from 'node:process'
import type { Config } from 'drizzle-kit'

export default {
  schema: './db/schema.ts',
  out: './drizzle',
  // UPDATE HERE TO YOUR DRIVER
  driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: env.DB_HOST as string,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME as string,
  },
} satisfies Config
