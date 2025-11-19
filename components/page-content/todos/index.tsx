'use client'

import { useEffect, useState } from "react";
import AllTodos from "./AllTodos";
import NoTodos from "./NoTodos";
import { getTodos } from "@/api/api";
import toast from "react-hot-toast";
import { TodoEditPayload, TodoPayload, TodoResponse } from "@/types/interface";
import { CustomButton } from "@/components/ui/button/CustomButton";
import { FaPlus } from "react-icons/fa";
import Modal from "@/components/ui/modal";
import AddEditModal from "./AddEditModal";

const TodosPage = () => {
  const [todoList, setTodoList] = useState<TodoResponse[]>([]);
  const [loadingTodoList, setLoadingTodoList] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editTodoData, setEditTodoData] = useState<TodoEditPayload | null>(null);

  // get full todo list
  const getTodoList = async () => {
    setLoadingTodoList(true);

    try {
      const response = await getTodos();
      setTodoList(response?.data?.results);
      setLoadingTodoList(false);
    } catch (err) {
      toast.error("Todo fetch failed!");
      setLoadingTodoList(false);
    }
  }

  useEffect(() => {
    getTodoList();
  }, []);

  // handle edit
  const handleEdit = (todo: TodoEditPayload) => {
    setEditTodoData(todo);
    setOpenModal(true);
  };

  // onClose modal handle
  const handleCloseModal = () => {
    setEditTodoData(null);
    setOpenModal(false);
  }

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
          <CustomButton
            icon={<FaPlus />}
            className="flex items-center justify-center gap-2"
            minwidth="134px"
            onClick={() => setOpenModal(true)}
          >
            New Task
          </CustomButton>
        </div>
      </div>

      <div className="flex">
        <div>
        </div>
        <div>
        </div>
      </div>

      {loadingTodoList ?
        <></> :
          todoList?.length > 0 ?
            <AllTodos todoList={todoList} handleEdit={handleEdit} getTodoList={getTodoList} />
            : <NoTodos />
      }

      {/* add/edit modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <AddEditModal
          setOpen={setOpenModal} 
          getTodoList={getTodoList}
          editTodoData={editTodoData}
        />
      </Modal>
    </div>
  )
}

export default TodosPage