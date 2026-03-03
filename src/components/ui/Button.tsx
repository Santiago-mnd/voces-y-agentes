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
  const baseStyles = "inline-flex items-center justify-center font-body px-8 py-4 transition-all duration-200 font-extrabold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0969a7]";

  const variants = {
    primary: "bg-naranja text-white hover:brightness-110",
    secondary: "bg-azul text-white hover:brightness-110",
    outline: "bg-[#f4f1e8] text-slate-900 hover:brightness-90"
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
