import { useFormContext } from "react-hook-form";

interface SingleSelectCheckboxProps {
  name: string;
  label: string;
  value: string;
}

export default function SingleSelectCheckbox({
  name,
  label,
  value,
}: SingleSelectCheckboxProps) {
  const { register, watch, setValue } = useFormContext();

  const selectedValue = watch(name);

  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <span className="text-[#374151] text-sm">{label}</span>

      <input
        type="checkbox"
        checked={selectedValue === value}
        onChange={() => setValue(name, value)}
        className="h-4 w-4 rounded border-black"
      />

      <input type="hidden" {...register(name)} />
    </label>
  );
}
