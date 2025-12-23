import type { FC } from 'react'
import SignupForm from './form'

const SignupPage: FC = () => {
  return (
    <>
      <h1 className='mb-8 text-3xl font-bold'>Daftar</h1>
      <SignupForm />
    </>
  )
}

export default SignupPage
