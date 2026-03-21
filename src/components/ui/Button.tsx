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
  const baseStyles = "inline-flex items-center justify-center font-body px-6 py-3 transition-opacity duration-200 font-extrabold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary border-0 cursor-pointer";

  const variants = {
    primary: "bg-primary text-surface hover:opacity-90",
    secondary: "bg-secondary text-surface hover:opacity-90",
    outline: "bg-surface text-neutral hover:opacity-90"
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
