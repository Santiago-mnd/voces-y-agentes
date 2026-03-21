import { SectionWrapper } from '../ui/SectionWrapper';
import deco3 from '../../assets/decorations/03.svg';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';

export function Objective() {
  return (
    <SectionWrapper
      id="objective"
      className="text-surface mt-12 md:mt-20"
      diagonal="left"
      diagonalColor="var(--color-secondary)"
      fullWidth
      paddingClass="py-16 md:py-24"
    >
      <InteractiveDecoration src={deco3} alt="" className="absolute -left-8 top-1/2 -translate-y-1/2 w-24 md:w-40 opacity-60 z-0 -rotate-45" />

      <div className="max-w-5xl mx-auto text-center relative space-y-12">
        <div className="inline-flex flex-col items-center gap-3">
          <h2 className="font-heading text-5xl md:text-7xl text-primary-soft uppercase tracking-[0.028em] leading-tight heading-balanced">Nuestro Objetivo</h2>
          <div className="flex gap-2" aria-hidden="true">
            <span className="block h-1.5 w-16 bg-primary-soft rounded-sm"></span>
            <span className="block h-1.5 w-12 bg-primary rounded-sm"></span>
          </div>
        </div>
        <p className="font-body text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight text-surface px-4">
          Fortalecer la capacidad de las juventudes para liderar la transformación de sus propios territorios, transitando del activismo de base a una incidencia estratégica que genere cambios reales, sostenibles y con autonomía en sus comunidades.
        </p>
        <div className="w-32 h-6 bg-accent mx-auto rotate-3"></div>
      </div>
    </SectionWrapper>
  );
}
