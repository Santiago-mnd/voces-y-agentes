import { useState } from 'react';

interface InteractiveDecorationProps {
  src: string;
  className?: string;
  alt?: string;
}

export function InteractiveDecoration({ src, className = '', alt = '' }: InteractiveDecorationProps) {
  const [pos, setPos] = useState({ x: 0, y: 0, rotation: 0 });

  const handleClick = () => {
    // Generate random values: -40 to 40 for translation, -45 to 45 for rotation
    const x = Math.floor(Math.random() * 81) - 40;
    const y = Math.floor(Math.random() * 81) - 40;
    const rotation = Math.floor(Math.random() * 91) - 45;
    setPos({ x, y, rotation });
  };

  const safeClassName = className.replace('pointer-events-none', '');

  return (
    <div
      className={`${safeClassName} transition-transform duration-500 ease-out cursor-pointer hover:scale-110`}
      onClick={handleClick}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(calc(var(--tw-rotate, 0deg) + ${pos.rotation}deg)) scale(var(--tw-scale-x, 1), var(--tw-scale-y, 1))`
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain pointer-events-none" />
    </div>
  );
}
