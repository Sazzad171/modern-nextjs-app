import Image from 'next/image'
import React from 'react'

const NoTodos = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#D1D5DB] px-4 py-28">
      <Image
        src="/images/icon-no projects.png"
        alt="no todo"
        width={240}
        height={216}
        className="object-cover mx-auto"
        unoptimized
      />
      <h6 className="text-center text-2xl text-[#201F1E]">No todos yet</h6>
    </div>
  )
}

export default NoTodos