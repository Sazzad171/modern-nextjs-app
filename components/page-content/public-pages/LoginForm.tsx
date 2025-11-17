'use client'

import { CustomButton } from "@/components/ui/button/CustomButton";
import Checkbox from "@/components/ui/form/Checkbox";
import InputField from "@/components/ui/form/InputField";
import { handleLogin } from "@/lib/auth";
import { LoginSchema } from "@/lib/zodSchema";
import { LoginType } from "@/types/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();

  const methods = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginType) => {
    try {
      await handleLogin(data);
      toast.success("Logged in successfully!");
      router.replace("/");
    } catch (err) {
      toast.error("Logged in failed!");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-wrap items-center">
          <div className="w-full px-2">
            <InputField 
              name="email" 
              label="Email" 
              type="email" 
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full px-2">
            <InputField 
              name="password" 
              label="Password" 
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Checkbox
              label="Remember me"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <p className="text-right mb-4">
              <Link href={"/signup"} className="text-primary text-sm font-medium">Forgot your password?</Link>
            </p>
          </div>
          <div className="w-full px-2 ">
            <CustomButton fullWidth>Log in</CustomButton>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default LoginForm