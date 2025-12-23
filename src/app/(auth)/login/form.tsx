'use client'

import type { FC } from 'react'
import Link from 'next/link'

const LoginForm: FC = () => {
  return (
    <form className='flex min-w-md flex-col gap-2' action=''>
      <div className='flex flex-col'>
        <label className='text-sm text-zinc-700' htmlFor='username'>
          Username
        </label>
        <input
          className='border border-zinc-300 p-1'
          type='text'
          name='username'
          id='username'
          placeholder='Username'
          required={true}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-sm text-zinc-700' htmlFor='password'>
          Password
        </label>
        <input
          className='border border-zinc-300 p-1'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          required={true}
        />
      </div>
      <div className='mt-4 flex flex-col gap-2'>
        <input
          className='border border-zinc-300 p-1'
          type='submit'
          value='Login'
        />
        <Link className='border border-zinc-300 p-1 text-center' href='/signup'>
          Belum punya akun?
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
