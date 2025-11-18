import { CustomButton } from '@/components/ui/button/CustomButton';
import DateField from '@/components/ui/form/DateField';
import InputField from '@/components/ui/form/InputField';
import SingleSelectCheckbox from '@/components/ui/form/RadioBox';
import TextAreaField from '@/components/ui/form/TextArea';
import { todoSchema } from '@/lib/zodSchema';
import { TodoPayload } from '@/types/interface';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineDelete } from 'react-icons/ai';

interface AddEditModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddEditModal = ({ setOpen }: AddEditModalProps) => {
  const methods = useForm<TodoPayload>({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data: TodoPayload) => {
    console.log("Submitted Data:", data);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-2 mb-8">
        <div>
          <h5 className="text-base font-semibold text-black relative">
            Add New Task
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
            <div className="w-full">
              <div className="flex flex-wrap-gap-4">
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
              <CustomButton minwidth="auto" disabled><AiOutlineDelete className="text-lg" /></CustomButton>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default AddEditModal