import type { FC } from "react";
import SignupForm from "./form";

const SignupPage: FC = () => {
  return (
    <>
    <h1 className="font-bold text-3xl mb-8">Daftar</h1>
    <SignupForm />
    </>
  )
}

export default SignupPage