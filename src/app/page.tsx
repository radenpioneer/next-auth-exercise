import type { FC } from 'react'
import LogoutForm from './(auth)/_logout/form'

const HomePage: FC = () => {
  return (
    <main className='flex min-h-dvh flex-col items-center justify-center'>
      <h1 className='text-6xl font-black lg:text-9xl'>Next.js</h1>
      <LogoutForm />
    </main>
  )
}

export default HomePage
