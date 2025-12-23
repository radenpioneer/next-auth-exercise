import type { FC, PropsWithChildren } from 'react'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='flex min-h-dvh flex-col items-center justify-center'>
      {children}
    </main>
  )
}

export default AuthLayout
