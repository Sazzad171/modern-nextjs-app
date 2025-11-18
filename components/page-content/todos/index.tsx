'use client'

import { useEffect, useState } from "react";
import AllTodos from "./AllTodos";
import NoTodos from "./NoTodos";
import { getTodos } from "@/api/api";
import toast from "react-hot-toast";
import { TodoResponse } from "@/types/interface";
import { CustomButton } from "@/components/ui/button/CustomButton";
import { FaPlus } from "react-icons/fa";
import Modal from "@/components/ui/modal";
import AddEditModal from "./AddEditModal";

const TodosPage = () => {
  const [todoList, setTodoList] = useState<TodoResponse[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // get full todo list
  const getTodoList = async () => {
    try {
      const response = await getTodos();
      setTodoList(response?.data?.results);
    } catch (err) {
      toast.error("Todo fetch failed!");
    }
  }

  useEffect(() => {
    getTodoList();
  }, []);

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

      {todoList?.length > 0 ?
        <AllTodos todoList={todoList} />
        : <NoTodos />
      }

      {/* add/edit modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <AddEditModal setOpen={setOpenModal} />
      </Modal>
    </div>
  )
}

export default TodosPage