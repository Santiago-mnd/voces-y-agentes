import { SectionWrapper } from '../ui/SectionWrapper';

export function Objective() {
  return (
    <SectionWrapper id="objective" className="bg-transparent text-white border-0 py-24 md:py-32 relative z-10">
      {/* Background diagonal */}
      <div className="absolute inset-0 bg-[#0969a7] -skew-y-3 transform origin-top-left -z-10"></div>

      <div className="max-w-5xl mx-auto text-center transform skew-y-0">
        <h2 className="font-title text-5xl md:text-7xl text-[#fceb54] mb-12 uppercase tracking-wide leading-tight">Nuestro Objetivo</h2>
        <p className="font-body text-2xl md:text-4xl leading-tight mb-16 text-[#f4f1e8] font-normal">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim. Sed at eros nec diam consectetur suscipit. Aenean dapibus vulputate neque, ut fermentum risus."
        </p>
        <div className="w-32 h-6 bg-[#ff99af] mx-auto rotate-3"></div>
      </div>
    </SectionWrapper>
  );
}
