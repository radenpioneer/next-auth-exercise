'use server'

import { createUser } from "~/lib/user/user";
import { createSession } from "~/lib/session/session";
import db from "~/lib/db";
import { usersTable, userInsertSchema } from "~/lib/db/schema/user";
import { sessionsTable } from "~/lib/db/schema/session";
import z from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const signupSchema = userInsertSchema.omit({ passwordHash: true }).extend({
    password: z.string().min(8, { message: 'Password minimal 8 karakter' }).trim(),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password konfirmasi harus sama.'
})

export const signup = async (_formState: any, formData: FormData) => {
    const validatedFormData = signupSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    })

    if (!validatedFormData.success) {
        return {
            errors: validatedFormData.error.flatten().fieldErrors
        }
    }

    const { username, password } = validatedFormData.data
    const passwordHash = await Bun.password.hash(password)
    const user = await createUser({ username, passwordHash }, db, usersTable)
    const session = await createSession(user.id, db, sessionsTable)
    const expiresAt = new Date(session.createdAt + 1000 * 60 * 60 * 24 * 3)

    const cookieStore = await cookies()
    cookieStore.set('session', session.token, {
        expires: expiresAt,
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development'
    })

    redirect('/')
}
