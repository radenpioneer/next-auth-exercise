'use server'

import { deleteSession } from "~/lib/session/session";
import db from "~/lib/db";
import { sessionsTable } from "~/lib/db/schema/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCurrentSession } from "~/lib/session/current";

export const logout = async () => {
    const session = await getCurrentSession()
    if (!session) {
        return {
            errors: {
                logout: 'Action invalid.'
            }
        }
    }

    await deleteSession(session.id, db, sessionsTable)

    const cookieStore = await cookies()
    cookieStore.delete('session')

    redirect('/login')
}
