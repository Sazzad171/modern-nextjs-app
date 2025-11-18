import { useFormContext } from "react-hook-form";

interface TextAreaFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  onChange?: (value: string) => void;
}

export default function TextAreaField({
  name,
  label,
  placeholder = "",
  rows = 4,
  onChange,
}: TextAreaFieldProps) {
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

      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name, {
          onChange: (e) => {
            if (onChange) onChange(e.target.value);
          },
        })}
        className="w-full p-3 text-sm border rounded-lg outline-none min-h-[120px] border-[#D1D5DB] resize-none"
      />

      {isError && (
        <p className="text-red-400 text-xs text-red mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}
