'use client'

import { signUp } from "@/api/api";
import { CustomButton } from "@/components/ui/button/CustomButton";
import InputField from "@/components/ui/form/InputField";
import { signupSchema } from "@/lib/zodSchema";
import { SignupType } from "@/types/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignupForm = () => {
  const router = useRouter();

  const methods = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupType) => {
    try {
      const {first_name, last_name, email, password} = data;
      const payload = {
        first_name,
        last_name,
        email,
        password
      }
      await signUp(payload);
      toast.success("Sign up in successfully!");
      router.replace("/login")
    } catch (err) {
      toast.error("Sign up in failed!");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-2">
            <InputField 
              name="first_name" 
              label="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <InputField 
              name="last_name" 
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
          <CustomButton fullWidth type="submit">Signup</CustomButton>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default SignupForm