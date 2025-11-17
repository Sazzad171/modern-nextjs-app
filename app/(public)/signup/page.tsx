import Link from 'next/link'
import SignupForm from '@/components/page-content/public-pages/SignupForm';

const SignupPage = () => {


  return (
    <div className="max-w-[448px] p-4">
      <h4 className="text-3xl font-bold text-bgDark text-center mb-2">Create your account</h4>
      <p className="text-center text-grey-2">Start managing your tasks efficiently</p>
      <div className="mt-9 mb-4">
        <SignupForm />
      </div>
      <p className="text-center text-grey-2">
        Already have an account?
        <Link href={"/login"} className="text-primary"> Log in</Link>
      </p>
    </div>
  )
}

export default SignupPage