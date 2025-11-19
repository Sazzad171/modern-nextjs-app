import { useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";

type DateFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

export default function DateField({ name, label, placeholder }: DateFieldProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  register(name, { value: "" });

  const value = watch(name);
  const isError = Boolean(errors[name]);

  return (
    <div className="flex flex-col space-y-1 mb-4">
      {label && (
        <label className="block mb-[6px] text-sm font-medium text-black">
          {label}
        </label>
      )}

      <div className="relative w-full">
        <DatePicker
          selected={value ? new Date(value) : null}
          onChange={(date) => {
            const iso = date ? date.toISOString() : "";
            setValue(name, iso, { shouldValidate: true });
          }}
          placeholderText={placeholder}
          className="w-full p-3 text-sm border rounded-lg outline-none min-h-[42px] border-[#D1D5DB]"
          wrapperClassName="w-full"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <SlCalender className="text-grey" />
        </div>

        {isError && (
          <p className="text-red-400 text-xs text-red mt-1">
            {errors[name]?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
