import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { usePostHog } from '@posthog/react';

const links = [
  { name: 'Qui\u00E9nes somos', href: '/#about' },
  { name: 'Nuestro objetivo', href: '/#objective' },
  { name: 'Participa', href: '/#participate' },
  { name: 'Calendario', href: '/#calendario' },
  { name: 'Registro', href: '/#registro' },
  { name: 'Aliadxs', href: '/#aliados' },
  { name: 'FAQ', href: '/#faq' },
];

export function Navbar() {
  const posthog = usePostHog();
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (link: { name: string; href: string }) => {
    posthog.capture('navbar_click', { section: link.name, destination: link.href });
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const firstLink = menuRef.current?.querySelector<HTMLElement>('a');
    firstLink?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface shadow-sm" aria-label={'Navegaci\u00F3n principal de Voces y Agentes'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/#hero"
            onClick={() => handleLinkClick({ name: 'Inicio', href: '/#hero' })}
            className="flex-shrink-0 group"
            aria-label="Voces y Agentes \u2014 inicio"
          >
            <img
              src="/icons/vya-logo.svg"
              alt="Voces y Agentes"
              className="h-10 lg:h-14 w-auto transition-transform duration-200 group-hover:-rotate-2 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link)}
                className="font-body text-xs font-extrabold text-neutral hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-secondary transition-colors uppercase tracking-wide whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Cerrar men\u00FA' : 'Abrir men\u00FA'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-0.5 bg-neutral transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-neutral transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-neutral transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile/tablet menu */}
      {menuOpen && (
        <div ref={menuRef} id="mobile-menu" className="lg:hidden bg-surface border-t border-neutral/20 px-6 py-5" aria-label={'Men\u00FA de navegaci\u00F3n'}>
          <div className="flex flex-col gap-y-5">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link)}
                className="font-body text-base font-extrabold text-neutral hover:text-primary uppercase tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}