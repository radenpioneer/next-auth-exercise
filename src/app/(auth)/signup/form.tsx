'use client'

import { useActionState, type FC } from "react";
import { signup } from "./actions";
import Link from "next/link";

const SignupForm: FC = () => {
    const [state, action, pending] = useActionState(signup, undefined)
  return (
    <form className="min-w-md flex flex-col gap-2" action={action}>
        <div className="flex flex-col">
            <label className="text-sm text-zinc-700" htmlFor="username">Username</label>
            <input className="border border-zinc-300 p-1" type="text" name="username" id="username" placeholder="Username" required={true} />
            {state?.errors.username && <span className="text-sm text-red-500">{state.errors.username}</span>}
        </div>
        <div className="flex flex-col">
            <label className="text-sm text-zinc-700" htmlFor="password">Password</label>
            <input className="border border-zinc-300 p-1" type="password" name="password" id="password" placeholder="Password" required={true} />
            {state?.errors.password && <span className="text-sm text-red-500">{state.errors.password}</span>}
        </div>
        <div className="flex flex-col">
            <label className="text-sm text-zinc-700" htmlFor="confirmPassword">Confirm Password</label>
            <input className="border border-zinc-300 p-1" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required={true} />
            {state?.errors.confirmPassword && <span className="text-sm text-red-500">{state.errors.confirmPassword}</span>}
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <input className="border border-zinc-300 p-1 disabled:opacity-5" type="submit" value="Daftar" disabled={pending} />
            <Link className="border border-zinc-300 p-1 text-center" href="/login">Sudah punya akun?</Link>
        </div>
    </form>
  )
}

export default SignupForm