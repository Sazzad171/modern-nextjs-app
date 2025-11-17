import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
};

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  icon,
  className = "",
  disabled,
  ...rest
}) => {

  return (
    <button
      className={`${className} bg-primary text-white rounded-lg text-center text-sm font-medium px-4 py-3 min-w-[200px] ${fullWidth && "w-full"}`}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};