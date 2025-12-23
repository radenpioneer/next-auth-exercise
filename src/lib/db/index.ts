import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'

const client = new Database(process.env.DB_FILE)
const db = drizzle({ client })

export type DB = typeof db
export default db
