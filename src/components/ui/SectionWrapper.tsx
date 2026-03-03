import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className = '',
  containerClassName = ''
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
