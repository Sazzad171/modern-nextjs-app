import React from 'react'
import TodoItem from './TodoItem'
import { TodoResponse } from '@/types/interface'

interface AllTodoProps {
  todoList: TodoResponse[]
}

const AllTodos = ({todoList}: AllTodoProps) => {
  return (
    <div>
      <h5 className="text-black text-lg font-semibold mb-4">Your Tasks</h5>
      <div className="flex flex-wrap">
        {todoList?.map((todoItem, index) => (
          <div className="w-full md:w-6/12 lg:w-4/12" key={index}>
            <TodoItem todoItemData={todoItem} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTodos