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
    <label className="inline-flex items-center gap-2 cursor-pointer select-none mb-3">
      <input
        type="checkbox"
        checked={selectedValue === value}
        onChange={() => setValue(name, value)}
        className="h-4 w-4 rounded border-black"
      />

      <span className="text-[#374151] text-sm">{label}</span>

      <input type="hidden" {...register(name)} />
    </label>
  );
}
