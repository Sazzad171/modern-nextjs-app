import React from 'react'
import TodoItem from './TodoItem'
import { TodoEditPayload, TodoResponse } from '@/types/interface'

interface AllTodoProps {
  todoList: TodoResponse[];
  handleEdit: (todo: TodoEditPayload) => void,
  getTodoList: () => void
}

const AllTodos = ({todoList, handleEdit, getTodoList}: AllTodoProps) => {
  return (
    <div>
      <h5 className="text-black text-lg font-semibold mb-4">Your Tasks</h5>
      <div className="flex flex-wrap -mx-2">
        {todoList?.map((todoItem, index) => (
          <div className="w-full md:w-6/12 lg:w-4/12 px-2" key={index}>
            <TodoItem todoItemData={todoItem} handleEdit={handleEdit} getTodoList={getTodoList} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTodos