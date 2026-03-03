import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-body px-6 py-3 transition-opacity duration-200 font-extrabold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0969a7] border-0";

  const variants = {
    primary: "bg-[#ff7300] text-[#f4f1e8] hover:opacity-90",
    secondary: "bg-[#0969a7] text-[#f4f1e8] hover:opacity-90",
    outline: "bg-[#f4f1e8] text-slate-900 hover:opacity-90"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
