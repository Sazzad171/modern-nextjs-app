import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
  minwidth?: string;
};

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  icon,
  className = "",
  disabled,
  type,
  minwidth="200px",
  ...rest
}) => {

  return (
    <button
      className={`${className} bg-primary text-white rounded-lg text-center text-sm font-medium px-6 py-3 min-w-[${minwidth}] ${fullWidth && "w-full"} disabled:bg-[#8CA3CD]`}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};