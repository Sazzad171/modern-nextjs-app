import { deleteTodo } from '@/api/api'
import { getFormattedDate } from '@/lib/functions'
import { TodoEditPayload, TodoResponse } from '@/types/interface'
import toast from 'react-hot-toast'
import { BiGridVertical } from 'react-icons/bi'
import { FiTrash } from 'react-icons/fi'
import { LuPencilLine } from 'react-icons/lu'

interface TodoItemDataProps {
  todoItemData: TodoResponse,
  handleEdit: (todo: TodoEditPayload) => void,
  getTodoList: () => void
}

const PRIORITY_STYLES: Record<
  "low" | "moderate" | "extreme",
  string
> = {
  low: "bg-[#FEF9C3] text-[#CA8A04]",
  moderate: "bg-[#DCFCE7] text-[#16A34A]",
  extreme: "bg-[#FEE2E2] text-[#DC2626]",
};

const TodoItem = ({todoItemData, handleEdit, getTodoList}: TodoItemDataProps) => {
  if (!todoItemData) return;

  const { id, title, description, priority, todo_date } = todoItemData;
  if (id === undefined || !title || !description || !priority || !todo_date) return;

  const onEdit = () => {
    const todoEditData = {
      id,
      title,
      description,
      priority,
      todo_date,
    } as TodoEditPayload;
    handleEdit(todoEditData);
  }

  // delete todo
  const handleDeleteTodo = async () => {
    try {
      await deleteTodo(todoItemData?.id);
      getTodoList();
      toast.success("Todo deleted successfully!");
    } catch (err) {
      toast.error("Todo deletion failed!");
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-[#FEE2E2] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] mb-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h6 className="text-bgDark text-lg font-medium">{todoItemData?.title}</h6>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className={`text-sm px-2 rounded ${PRIORITY_STYLES[todoItemData?.priority]}`}>{todoItemData?.priority}</span>
            <BiGridVertical className="text-grey text-lg" />
          </div>
        </div>
      </div>
      <p className="text-sm text-grey-2 mb-5">
        {todoItemData?.description}
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-grey-2">Due {getFormattedDate(todoItemData?.todo_date)}</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="bg-bgLight rounded-lg w-8 h-8 p-2" onClick={onEdit}>
            <LuPencilLine className="text-primary" />
          </button>
          <button className="bg-bgLight rounded-lg w-8 h-8 p-2" onClick={handleDeleteTodo}>
            <FiTrash className="text-red" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem