import { createTodo, updateTodo } from '@/api/api';
import { CustomButton } from '@/components/ui/button/CustomButton';
import DateField from '@/components/ui/form/DateField';
import InputField from '@/components/ui/form/InputField';
import SingleSelectCheckbox from '@/components/ui/form/RadioBox';
import TextAreaField from '@/components/ui/form/TextArea';
import { todoSchema } from '@/lib/zodSchema';
import { TodoEditPayload, TodoPayload } from '@/types/interface';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';

interface AddEditModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getTodoList: () => void,
  editTodoData: TodoEditPayload | null
}

const AddEditModal = ({
  setOpen,
  getTodoList,
  editTodoData
}: AddEditModalProps) => {
  const isEdit = !!editTodoData;

  const methods = useForm<TodoPayload>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: editTodoData?.title ?? "",
      description: editTodoData?.description ?? "",
      priority: editTodoData?.priority ?? undefined,
      todo_date: editTodoData?.todo_date ?? "",
    },
  });

  const onSubmit = async (data: TodoPayload) => {
    const formattedDate = data.todo_date.split("T")[0];

    const payload = {
      ...data,
      todo_date: formattedDate
    }

    try {
      editTodoData ?
        await updateTodo(editTodoData?.id, payload)
        :
        await createTodo(payload)

      getTodoList();
      setOpen(false);
      toast.success("Todo action successfully!");
    } catch (err) {
      toast.error("Todo action failed!");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between gap-2 mb-8">
        <div>
          <h5 className="text-base font-semibold text-black relative">
            {isEdit ? "Edit Task" : "Add New Task"}
            <span className="absolute -bottom-2 left-0 w-16 h-[2px] bg-primary"></span>
          </h5>
        </div>
        <div>
          <h6
            className="text-black text-sm font-semibold border-b border-black cursor-pointer inline-block"
            onClick={() => setOpen(false)}
          >
            Go Back
          </h6>
        </div>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <InputField
                name="title"
                label="Title"
              />
            </div>
            <div className="w-full">
              <DateField
                name="todo_date"
                label="Date"
              />
            </div>
            <div className="w-full mb-4">
              <div className="flex flex-wrap gap-4">
                <div>
                  <SingleSelectCheckbox
                    name="priority"
                    label="Extreme"
                    value="extreme"
                  />
                </div>
                <div>
                  <SingleSelectCheckbox
                    name="priority"
                    label="Moderate"
                    value="moderate"
                  />
                </div>
                <div>
                  <SingleSelectCheckbox
                    name="priority"
                    label="Low Priority"
                    value="low"
                  />
                </div>
              </div>
              {methods.formState.errors.priority && (
                <p className="text-red-400 text-xs text-red mt-1">
                  {methods.formState.errors.priority.message as string}
                </p>
              )}
            </div>
            <div className="w-full">
              <TextAreaField
                name="description"
                label="Description"
                placeholder="Start writing here..."
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <CustomButton type="submit" minwidth="auto">Done</CustomButton>
            </div>
            <div>
              <CustomButton
                minwidth="auto"
                className="!bg-red"
                onClick={() => setOpen(false)}
              >
                <AiOutlineDelete className="text-lg" />
              </CustomButton>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default AddEditModal