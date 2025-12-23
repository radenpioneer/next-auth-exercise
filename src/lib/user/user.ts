import { type DB } from '../db'
import { type UsersTable, type UserInsert } from '../db/schema/user'
import { eq } from 'drizzle-orm'

export const createUser = async (
  values: UserInsert,
  db: DB,
  table: UsersTable
) => {
  const [user] = await db
    .insert(table)
    .values(values)
    .returning({ id: table.id, username: table.username })

  return user
}

export const getUser = async (userId: string, db: DB, table: UsersTable) => {
  const user = await db
    .select({ id: table.id, username: table.username })
    .from(table)
    .where(eq(table.id, userId))

  return user
}

export const deleteUser = async (userId: string, db: DB, table: UsersTable) => {
  await db.delete(table).where(eq(table.id, userId))
}
