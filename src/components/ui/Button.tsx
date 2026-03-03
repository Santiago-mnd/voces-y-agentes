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
  const baseStyles = "inline-flex items-center justify-center font-body px-8 py-4 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900";

  const variants = {
    primary: "bg-naranja text-white hover:bg-[#e66800]",
    secondary: "bg-azul text-white hover:bg-[#085a8f]",
    outline: "bg-[#f4f1e8] text-slate-900 hover:bg-slate-200"
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
