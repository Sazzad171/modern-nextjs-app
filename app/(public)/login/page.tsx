import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="p-4">
      <h4 className="text-3xl font-bold text-bgDark text-center mb-2">Create your account</h4>
      <p className="text-center text-grey-2">Start managing your tasks efficiently</p>

      <p className="text-center text-grey-2">
        Already have an account?
        <Link href={"/login"} className="text-primary"> Log in</Link>
      </p>
    </div>
  )
}

export default LoginPage