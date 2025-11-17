import LoginForm from '@/components/page-content/public-pages/LoginForm'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="max-w-[448px] p-4">
      <h4 className="text-3xl font-bold text-bgDark text-center mb-2">Log in to your account</h4>
      <p className="text-center text-grey-2">Start managing your tasks efficiently</p>
      <div className="mt-9 mb-4">
        <LoginForm />
      </div>
      <p className="text-center text-grey-2">
        Don’t have an account?
        <Link href={"/login"} className="text-primary"> Register now</Link>
      </p>
    </div>
  )
}

export default LoginPage