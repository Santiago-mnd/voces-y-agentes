import { useState } from 'react';

const TEAM = [
  {
    name: 'Ana Victoria Avila Alvarez',
    role: 'Identidad y diseño visual',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/profile/in/ana-victoria-avila-alvarez-031383287/' },
    ],
  },
  {
    name: 'Santiago García Arellano',
    role: 'Diseño UI & desarrollo web',
    links: [
      { label: 'Portafolio', href: 'https://www.santiagos.mx/' },
      { label: 'GitHub', href: 'https://github.com/Santiago-mnd' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/santiago-garcia-arellano/' },
    ],
  },
];

export function Footer() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      {/* Panel de créditos — se despliega justo arriba del footer */}
      <div
        className={`bg-surface border-t-4 border-accent overflow-hidden transition-all duration-500 ease-in-out ${
          showCredits ? 'max-h-96 py-12' : 'max-h-0'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {TEAM.map((person) => (
            <div key={person.name}>
              <p className="font-heading text-neutral text-lg uppercase tracking-wide leading-tight">
                {person.name}
              </p>
              <p className="font-body text-xs text-neutral/70 uppercase tracking-widest mt-1">
                {person.role}
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                {person.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-body font-extrabold text-secondary hover:text-accent transition-colors uppercase tracking-wider"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary py-8 text-center text-surface font-body border-t-4 border-accent space-y-2">
        <p className="text-surface">&copy; {new Date().getFullYear()} Voces y Agentes.</p>
        <p className="text-sm text-surface">
          Este micrositio alojado en goynmexico.org se apega al{' '}
          <a
            href="https://youthbuildmexico.org/aviso-de-privacidad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-soft underline decoration-2 decoration-primary-soft"
          >
            aviso de privacidad de GOYN
          </a>
          .
        </p>
        <button
          onClick={() => setShowCredits((v) => !v)}
          className="text-xs text-surface/50 hover:text-surface transition-colors cursor-pointer uppercase tracking-widest mt-1"
        >
          {showCredits ? 'Cerrar créditos ↓' : 'Créditos ↑'}
        </button>
      </footer>
    </>
  );
}
