import { usePostHog } from '@posthog/react';
import vyaText from '../../assets/vya.svg';

export function Navbar() {
  const posthog = usePostHog();
  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Quiénes somos', href: '#about' },
    { name: 'Nuestro objetivo', href: '#objective' },
    { name: 'Participa', href: '#participate' },
    { name: 'Calendario', href: '#calendario' },
    { name: 'Registro', href: '#registro' },
    { name: 'Aliadxs', href: '#aliados' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface shadow-sm" aria-label="Navegación principal de Voces y Agentes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center flex-shrink-0">
            <a href="#hero" className="flex items-center gap-3 group">
              <div
                className="h-10 w-48 bg-secondary transition-transform group-hover:-rotate-2 group-hover:scale-105"
                style={{
                  WebkitMaskImage: `url(${vyaText})`,
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskImage: `url(${vyaText})`,
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'contain'
                }}
                aria-label="Voces y Agentes"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => posthog.capture('navbar_click', { section: link.name, destination: link.href })}
                className="font-heading text-xl font-bold text-neutral hover:text-primary hover:underline decoration-4 underline-offset-8 decoration-secondary transition-all uppercase tracking-widest leading-none"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
