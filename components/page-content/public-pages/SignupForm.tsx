'use client'

import { CustomButton } from "@/components/ui/button/CustomButton";
import InputField from "@/components/ui/form/InputField";
import { signupSchema } from "@/lib/zodSchema";
import { SignupType } from "@/types/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";


const SignupForm = () => {
  const methods = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupType) => {
    console.log("Submitted Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-2">
            <InputField 
              name="firstName" 
              label="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <InputField 
              name="lastName" 
              label="Last Name"
            />
          </div>
          <div className="w-full px-2">
            <InputField 
              name="email" 
              label="Email" 
              type="email" 
            />
          </div>
          <div className="w-full px-2">
            <InputField 
              name="password" 
              label="Password" 
              type="password" 
            />
          </div>
          <div className="w-full px-2">
            <InputField 
              name="confirmPassword" 
              label="Confirm Password" 
              type="password" 
            />
          </div>
          <div className="w-full px-2">
          <CustomButton fullWidth>Signup</CustomButton>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default SignupForm