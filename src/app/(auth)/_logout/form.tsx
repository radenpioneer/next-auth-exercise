'use client'

import  { type FC, useActionState } from "react";
import { logout } from "./actions";

const LogoutForm: FC = () => {
  const [_state, action, pending] = useActionState(logout, undefined)
  return (
    <form action={action}>
        <input className="disabled:opacity-5" type="submit" value="Logout" disabled={pending} />
    </form>
  )
}

export default LogoutForm