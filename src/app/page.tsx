import type { FC } from "react";
import LogoutForm from "./(auth)/_logout/form";

const HomePage: FC = () => {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center">
      <h1 className="font-black text-6xl lg:text-9xl">Next.js</h1>
      <LogoutForm />
    </main>
  )
}

export default HomePage