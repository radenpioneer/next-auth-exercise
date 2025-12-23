'use client'

import type { FC } from "react";
import Link from "next/link";

const SignupForm: FC = () => {
  return (
    <form className="min-w-md flex flex-col gap-2" action="">
        <div className="flex flex-col">
            <label className="text-sm text-zinc-700" htmlFor="username">Username</label>
            <input className="border border-zinc-300 p-1" type="text" name="username" id="username" placeholder="Username" required={true} />
        </div>
        <div className="flex flex-col">
            <label className="text-sm text-zinc-700" htmlFor="password">Password</label>
            <input className="border border-zinc-300 p-1" type="password" name="password" id="password" placeholder="Password" required={true} />
        </div>
        <div className="flex flex-col">
            <label className="text-sm text-zinc-700" htmlFor="confirmPassword">Confirm Password</label>
            <input className="border border-zinc-300 p-1" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required={true} />
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <input className="border border-zinc-300 p-1" type="submit" value="Daftar" />
            <Link className="border border-zinc-300 p-1 text-center" href="/login">Sudah punya akun?</Link>
        </div>
    </form>
  )
}

export default SignupForm