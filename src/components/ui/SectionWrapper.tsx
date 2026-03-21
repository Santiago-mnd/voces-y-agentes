import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type DiagonalStyle = CSSProperties & {
  '--diagonal-color'?: string;
};

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  diagonal?: 'left' | 'right';
  diagonalColor?: string;
  fullWidth?: boolean;
  paddingClass?: string;
}

export function SectionWrapper({
  id,
  children,
  className = '',
  containerClassName = '',
  diagonal,
  diagonalColor = 'var(--color-surface)',
  fullWidth = false,
  paddingClass = 'py-16 md:py-24'
}: SectionWrapperProps) {
  const { ref, isVisible } = useInView();
  const diagonalClasses = diagonal ? `section-diagonal section-diagonal-${diagonal}` : '';
  const sectionClasses = `${diagonal ? 'relative' : ''} ${paddingClass} ${diagonalClasses} ${className}`;
  const diagonalStyle: DiagonalStyle | undefined = diagonal ? { '--diagonal-color': diagonalColor } : undefined;

  return (
    <section id={id} className={sectionClasses} style={diagonalStyle}>
      <div
        ref={ref}
        className={`relative fade-in-up ${isVisible ? 'is-visible' : ''} ${diagonal ? 'z-10' : ''} ${
          fullWidth ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'
        } ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
