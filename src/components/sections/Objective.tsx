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
        <h2 className="font-heading text-5xl md:text-7xl text-primary-soft uppercase tracking-[0.028em] leading-tight heading-balanced">Nuestro Objetivo</h2>
        <p className="font-body text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight text-surface px-4">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim. Sed at eros nec diam consectetur suscipit. Aenean dapibus vulputate neque, ut fermentum risus."
        </p>
        <div className="w-32 h-6 bg-accent mx-auto rotate-3"></div>
      </div>
    </SectionWrapper>
  );
}
