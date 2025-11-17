"use client"

import { handleLogout } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaRegCalendarCheck, FaUser } from 'react-icons/fa'
import { MdHome, MdLogout } from 'react-icons/md'

const Sidebar = () => {
  const router = useRouter();

  const mainMenuItem = [
    {
      name: "Dashboard",
      icon: MdHome,
      link: "/"
    },
    {
      name: "Todos",
      icon: FaRegCalendarCheck,
      link: "/"
    },
    {
      name: "Account Information",
      icon: FaUser,
      link: "/profile"
    },
  ]

  const logout = () => {
    handleLogout();
    router.replace("/login");
  }

  return (
    <>
      <div>
        <div className="text-center px-4 pt-14 pb-10">
          <Image
            src="/images/user.png"
            alt="user"
            width={86}
            height={86}
            className="object-cover rounded-full mx-auto"
          />
          <h6 className="font-semibold text-white mt-3 mb-[2px]">amanuel</h6>
          <p className="text-xs text-white">amanuel@gmail.com</p>
        </div>
        <div>
          <ul
            className="[&>li>a]:flex [&>li>a]:items-center [&>li>a]:font-medium [&>li>a]:px-10 [&>li>a]:py-4 [&>li>a]:gap-x-4"
          >
            {mainMenuItem?.map((item, index) => {
              const Icon = item.icon

              return <li key={index}>
                <Link
                  href={item.link}
                  className="text-grey hover:text-white transition hover:bg-[linear-gradient(90deg,rgba(82,114,255,0.25)_1.44%,rgba(13,34,74,0.25)_74.16%)]"
                >
                  <Icon className="text-2xl" /> {item.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className="px-10 py-8">
        <p>
          <span
            className="inline-flex items-center gap-x-3 text-grey hover:text-white font-medium transition cursor-pointer"
            onClick={logout}
          >
            <MdLogout className="text-2xl" /> Logout
          </span>
        </p>
      </div>
    </>
  )
}

export default Sidebar