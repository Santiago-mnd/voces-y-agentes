import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] ${className}`}>
      {children}
    </div>
  );
}
