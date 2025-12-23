import type { DB } from "../db"
import type { SessionsTable } from "../db/schema/session"
import { CryptoHasher } from "bun"
import { eq } from "drizzle-orm"

const sessionExpiresInMs = 1000 * 60 * 60 * 24

export const createSession = async (userId: string, db: DB, table: SessionsTable) => {
    const id = generateSecureRandomString()
    const secret = generateSecureRandomString()
    const secretHash = hashSecret(secret)
    const token = [id, secret].join('.')
    const createdAt = Date.now()

    const [session] = await db.insert(table).values({ id, secretHash, createdAt, userId }).returning({
        id: table.id,
        createdAt: table.createdAt,
        userId: table.userId,
    })

    return {
        ...session,
        token
    }
}

export const validateSession = async (token: string, db: DB, table: SessionsTable) => {
    const [sessionId, sessionSecret] = token.split('.')
    const session = await getSession(sessionId, db, table)
    if (!session) {
        return undefined
    }

    const {secretHash: storedSecretHash, ...sessionData} = session
    const secretHash = hashSecret(sessionSecret)
    const isSecretValid = constantTimeEqual(secretHash, storedSecretHash)
    if (!isSecretValid) {
        return undefined
    }

    return sessionData
}

export const getSession = async (sessionId: string, db: DB, table: SessionsTable) => {
    const now = Date.now()

    const sessions = await db.select().from(table).where(eq(table.id, sessionId))
    if (sessions.length === 0) {
        return undefined
    }

    const [session] = sessions
    if (now - session.createdAt >= sessionExpiresInMs) {
        await deleteSession(sessionId, db, table)
        return undefined
    }

    return session
}

export const deleteSession = async (sessionId: string, db: DB, table: SessionsTable) => {
    await db.delete(table).where(eq(table.id, sessionId))
}



const generateSecureRandomString = () => {
    const alphabet = 'abcdefghijkmnpqrstuvwxyz23456789' as const
    const byteLength = 20 as const

    const bytes = crypto.getRandomValues(new Uint8Array(byteLength))
    const totalBits = byteLength * 8
    const length = Math.floor(totalBits / 5)

    return Array.from({ length }, (_, i) => {
        const bitOffset = i * 5
        const byteIndex = Math.floor(bitOffset / 8)
        const bitInByte = bitOffset % 8

        const view = (bytes[byteIndex] << 8) | (bytes[byteIndex + 1] || 0)
        const index = (view >> (11 - bitInByte)) & 0x1f

        return alphabet[index]
    }).join('')
}

const hashSecret = (secret: string) => {
    const hasher = new CryptoHasher('sha256')

    return hasher.update(secret).digest()
}

const constantTimeEqual = (a: Uint8Array, b: Uint8Array) => {
    if (a.byteLength !== b.byteLength) {
        return false
    }

    const diff = a.reduce((acc, byte, i) => acc | (byte ^ b[i]), 0)
    return diff === 0
}