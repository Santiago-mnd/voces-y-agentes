import { useEffect } from 'react';
import { Link } from 'react-router';
import { SectionWrapper } from '../components/ui/SectionWrapper';

export function Requisitos() {
  useEffect(() => {
    document.title = 'Requisitos | Voces y Agentes';
  }, []);

  return (
    <SectionWrapper
      id="requisitos"
      className="text-surface min-h-[90vh] flex items-center mb-16 md:mb-24"
      diagonal="left"
      diagonalColor="var(--color-accent)"
      fullWidth
      paddingClass="py-24 md:py-36"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10 px-4">
        <p className="font-heading text-sm uppercase tracking-[0.5em] text-surface/80">
          Ampliando la convocatoria
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-surface uppercase tracking-[0.028em] leading-tight heading-balanced">
          Requisitos
        </h1>

        <div className="space-y-4">
          <p className="font-heading text-2xl md:text-3xl text-surface/90 tracking-[0.1em]">
            Próximamente
          </p>
          <p className="font-body text-lg md:text-xl text-surface/70 leading-relaxed max-w-xl mx-auto">
            Estamos afinando los requisitos extendidos para participantes, colectivas y proyectos. Vuelve pronto para conocerlos a detalle.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/#registro"
            className="inline-flex items-center justify-center font-body px-8 py-4 bg-secondary text-surface font-extrabold text-lg uppercase tracking-wider transition-all hover:brightness-110"
          >
            Ir al registro
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/#participate"
            className="inline-flex items-center justify-center font-body px-8 py-4 border-2 border-surface/40 text-surface font-extrabold text-lg uppercase tracking-wider transition-all hover:bg-surface/10"
          >
            Cómo participar
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}