'use client'

import AllTodos from "./AllTodos";
import NoTodos from "./NoTodos";

const TodosPage = () => {
  const hasData = true;

  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-between gap-2 mb-10">
        <div>
          <h3 className="text-4xl font-bold text-bgDark relative">
            Todos
            <span className="absolute -bottom-2 left-0 w-16 h-[2px] bg-primary"></span>
          </h3>
        </div>
        <div>

        </div>
      </div>

      <div className="flex">
        <div>

        </div>
        <div>

        </div>
      </div>

      {hasData ?
        <AllTodos />
        : <NoTodos />
      }
    </div>
  )
}

export default TodosPage