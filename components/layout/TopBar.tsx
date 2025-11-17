import { getDayAndDate } from '@/lib/functions'
import Image from 'next/image'
import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'

const TopBar = () => {
  const {day, date} = getDayAndDate(new Date());

  return (
    <header className="px-16 py-6">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={105}
              height={32}
              className="object-cover"
            />
          </div>
          <div className='flex items-center gap-x-5'>
            <FaRegBell className="bg-primary text-white text-xl rounded-lg w-8 h-8 p-2 cursor-pointer" />
            <SlCalender className="bg-primary text-white text-xl rounded-lg w-8 h-8 p-2 cursor-pointer" />
            <div>
              <p className="text-base font-medium">{day}</p>
              <p className="text-sm font-medium">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar