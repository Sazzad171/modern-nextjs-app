import React from 'react'
import { FiTrash } from 'react-icons/fi'
import { LuPencilLine } from 'react-icons/lu'

const TodoItem = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-[#FEE2E2] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] mb-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h6 className="text-bgDark text-lg font-medium">fds dsfa fsda</h6>
        </div>
        <div>
          <span className="text-sm px-2 py-4 rounded">Extreme</span>
        </div>
      </div>
      <p className="text-sm text-grey-2 mb-5">
        Upgrading backend infrastructure for better
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-grey-2">Due Apr 15, 2025</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <LuPencilLine className="bg-bgLight rounded-lg w-8 h-8 text-primary p-2" />
          <FiTrash className="bg-bgLight rounded-lg w-8 h-8 text-red p-2" />
        </div>
      </div>
    </div>
  )
}

export default TodoItem