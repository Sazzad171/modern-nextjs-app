'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const ImageBanner = () => {
    const posterPath = {
    signup: "/images/signup-poster.png",
    login: "/images/login-poster.png"
  }

  const pathname = usePathname()

  return (
    <Image
      src={pathname === "/login" ? posterPath.login : posterPath.signup}
      alt="Poster"
      width={606}
      height={400}
      className="object-cover"
    />
  )
}

export default ImageBanner