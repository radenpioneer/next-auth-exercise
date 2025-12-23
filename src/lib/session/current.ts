import { validateSession } from "./session";
import db from "../db";
import { sessionsTable as table } from "../db/schema/session";
import { cookies } from "next/headers";
import { cache } from "react";

export const getCurrentSession = cache(async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get('session')?.value ?? undefined
    if (!token) {
        return undefined
    }

    return await validateSession(token, db, table)
})