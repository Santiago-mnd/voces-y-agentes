import { SectionWrapper } from '../ui/SectionWrapper';
import deco3 from '../../assets/decorations/03.svg';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';

export function Objective() {
  return (
    <SectionWrapper
      id="objective"
      className="text-surface mt-12 md:mt-20"
      diagonal="left"
      diagonalColor="var(--color-accent)"
      fullWidth
      paddingClass="py-24 md:py-36"
    >
      <InteractiveDecoration src={deco3} alt="" className="absolute right-6 bottom-6 w-20 md:w-32 opacity-30 z-0 rotate-12" />

      <div className="max-w-5xl mx-auto text-center relative space-y-12">
        <h2 className="font-heading text-5xl md:text-6xl text-surface uppercase tracking-[0.028em] leading-tight heading-balanced">Nuestro Objetivo</h2>
        <p className="font-body text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed text-surface px-4">
          Fortalecer la capacidad de las juventudes para liderar la transformación de sus propios territorios, transitando del activismo de base a una incidencia estratégica que genere cambios reales, sostenibles y con autonomía en sus comunidades.
        </p>
      </div>
    </SectionWrapper>
  );
}
