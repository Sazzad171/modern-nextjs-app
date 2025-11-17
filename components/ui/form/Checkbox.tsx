
interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none mb-4">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-black"
        {...rest}
      />
      {label && <span className="text-[#374151] text-sm">{label}</span>}
    </label>
  );
};

export default Checkbox;
