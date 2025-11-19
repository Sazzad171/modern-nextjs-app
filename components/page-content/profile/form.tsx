'use client'

import { CustomButton } from "@/components/ui/button/CustomButton";
import DateField from "@/components/ui/form/DateField";
import InputField from "@/components/ui/form/InputField"
import { profileSchema } from "@/lib/zodSchema";
import { ProfileType } from "@/types/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form"
import { ImUpload3 } from "react-icons/im";
import { IoMdCamera } from "react-icons/io";

const ProfileForm = () => {
  const methods = useForm<ProfileType>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileType) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div>
      <div className="inline-flex gap-6 items-center border border-[#A1A3ABA1] py-3 px-10 rounded-2xl shadow-[0px_1px_2px_0px_#0000000D] mb-6">
        <div className="relative">
          <Image
            src="/images/user.png"
            alt="user"
            width={86}
            height={86}
            className="object-cover rounded-full"
          />
          <span className="absolute right-1 bottom-0 bg-primary w-8 h-8 p-2 rounded-full">
            <IoMdCamera className="text-white" />
          </span>
        </div>
        <div>
          <CustomButton
            icon={<ImUpload3 />}
            className="flex items-center justify-center gap-2"
          >
            Upload New Photo
          </CustomButton>
        </div>
      </div>
      <div className="border border-[#A1A3ABA1] py-3 px-6 rounded-2xl shadow-[0px_1px_2px_0px_#0000000D]">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-wrap mb-12">
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
              <div className="w-full md:w-1/2 px-2">
                <InputField
                  name="address"
                  label="Address"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <InputField
                  name="contact_number"
                  label="Contact"
                />
              </div>
              <div className="w-full px-2">
                <DateField
                  name="birthday"
                  label="Birthday"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div>
                <CustomButton type="submit">Save Changes</CustomButton>
              </div>
              <div>
                <CustomButton disabled>Cancel</CustomButton>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default ProfileForm