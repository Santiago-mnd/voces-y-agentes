import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`transition-opacity duration-300 hover:opacity-90 ${className}`}>
      {children}
    </div>
  );
}
