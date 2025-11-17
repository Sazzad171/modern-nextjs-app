import { useFormContext } from "react-hook-form";

interface FormInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function InputField({
  name,
  label,
  type = "text",
  placeholder = "",
  onChange,
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = Boolean(errors[name]);

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-[6px] text-sm font-medium text-black">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          onChange: (e) => {
            if (onChange) onChange(e.target.value);
          },
        })}
        className={"w-full p-3 text-sm border rounded-lg outline-none min-h-[42px] border-[#D1D5DB]"}
      />

      {isError && (
        <p className="text-red-400 text-xs text-red mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}
