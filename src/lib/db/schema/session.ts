import { sqliteTable, text, blob, integer } from "drizzle-orm/sqlite-core";
import { usersTable } from "./user";

export const sessionsTable = sqliteTable('sessions', {
    id: text().primaryKey(),
    secretHash: blob('secret_hash').$type<Uint8Array>().notNull(),
    createdAt: integer('created_at').notNull(),
    userId: text('user_id').notNull().references(() => usersTable.id)
})

export type SessionsTable = typeof sessionsTable
export type SessionInsert = typeof sessionsTable.$inferInsert
export type SessionSelect = typeof sessionsTable.$inferSelect