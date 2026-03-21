import { useState } from 'react';
import { usePostHog } from '@posthog/react';

const links = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Quiénes somos', href: '#about' },
  { name: 'Nuestro objetivo', href: '#objective' },
  { name: 'Participa', href: '#participate' },
  { name: 'Calendario', href: '#calendario' },
  { name: 'Registro', href: '#registro' },
  { name: 'Aliadxs', href: '#aliados' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const posthog = usePostHog();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link: { name: string; href: string }) => {
    posthog.capture('navbar_click', { section: link.name, destination: link.href });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface shadow-sm" aria-label="Navegación principal de Voces y Agentes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo — rectángulo redondeado amarillo como en el brand guide */}
          <a
            href="#hero"
            onClick={() => handleLinkClick(links[0])}
            className="flex-shrink-0 group"
            aria-label="Voces y Agentes — inicio"
          >
            <div className="bg-primary-soft rounded-xl px-3 py-2 transition-transform duration-200 group-hover:-rotate-2 group-hover:scale-105">
              <span className="font-heading text-white text-sm leading-tight uppercase block">
                VOCES Y<br />AGENTES
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className="font-body text-xs font-extrabold text-neutral hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-secondary transition-colors uppercase tracking-wide whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger — visible en mobile y tablet */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-neutral transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-neutral transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-neutral transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile/tablet menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface border-t border-neutral/20 px-6 py-5">
          <div className="flex flex-col gap-y-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className="font-body text-base font-extrabold text-neutral hover:text-primary uppercase tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
