import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { randomUUIDv7 } from "bun";

export const usersTable = sqliteTable('users', {
    id: text().primaryKey().$defaultFn(() => randomUUIDv7()),
    username: text().notNull().unique(),
    passwordHash: text().notNull()
})

export type UsersTable = typeof usersTable
export type UserInsert = typeof usersTable.$inferInsert
export type UserSelect = typeof usersTable.$inferSelect