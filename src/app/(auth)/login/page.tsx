import type { FC } from 'react'
import LoginForm from './form'

const LoginPage: FC = () => {
  return (
    <>
      <h1 className='mb-8 text-3xl font-bold'>Login</h1>
      <LoginForm />
    </>
  )
}

export default LoginPage
