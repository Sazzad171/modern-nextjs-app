import React from 'react'
import TodoItem from './TodoItem'

const AllTodos = () => {
  return (
    <div>
      <h5 className="text-black text-lg font-semibold mb-4">Your Tasks</h5>
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 lg:w-4/12">
          <TodoItem />
        </div>

      </div>
    </div>
  )
}

export default AllTodos