import type { FC } from "react";
import LoginForm from "./form";

const LoginPage: FC = () => {
  return (
    <>
    <h1 className="font-bold text-3xl mb-8">Login</h1>
    <LoginForm />
    </>
  )
}

export default LoginPage