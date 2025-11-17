import ProfileForm from '@/components/page-content/profile/form'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className="w-full py-8 px-16">
      <div className="bg-white rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-bgDark relative mb-6">
          Account Information
          <span className="absolute -bottom-2 left-0 w-28 h-[2px] bg-primary"></span>
        </h3>
        <ProfileForm />
      </div>
    </div>
  )
}

export default ProfilePage