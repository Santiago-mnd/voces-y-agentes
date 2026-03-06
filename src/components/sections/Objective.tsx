import { SectionWrapper } from '../ui/SectionWrapper';
import deco3 from '../../assets/decorations/03.svg';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';

export function Objective() {
  return (
    <SectionWrapper id="objective" className="relative overflow-hidden bg-transparent text-white border-0 py-32 md:py-48 z-10">
      {/* Background diagonal */}
      <div className="absolute inset-0 bg-[#0969a7] -skew-y-3 transform origin-top-left -z-10"></div>

      <InteractiveDecoration src={deco3} alt="" className="absolute -left-8 top-1/2 -translate-y-1/2 w-24 md:w-40 opacity-60 z-0 -rotate-45" />

      <div className="max-w-5xl mx-auto text-center transform skew-y-0 relative z-10">
        <h2 className="font-title text-center text-5xl md:text-7xl text-[#fdb725] mb-12 uppercase tracking-[0.028em] leading-tight">Nuestro Objetivo</h2>
        <p className="font-body text-xs sm:text-lg md:text-2xl lg:text-3xl leading-tight mb-16 text-[#f4f1e8] font-normal whitespace-nowrap truncate max-w-full px-4">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim. Sed at eros nec diam consectetur suscipit. Aenean dapibus vulputate neque, ut fermentum risus."
        </p>
        <div className="w-32 h-6 bg-[#ff99af] mx-auto rotate-3"></div>
      </div>
    </SectionWrapper>
  );
}
