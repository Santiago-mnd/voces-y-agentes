import { SectionWrapper } from '../ui/SectionWrapper';
import faceLogo from '../../assets/face.svg';
import deco2 from '../../assets/decorations/02.svg';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';

export function About() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden bg-[#f4f1e8] py-24 md:py-32">
      <InteractiveDecoration src={deco2} alt="" className="absolute right-5 top-10 w-24 md:w-32 opacity-50 z-0 rotate-12" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="aspect-square max-w-md mx-auto relative overflow-hidden bg-[#ff99af] flex items-center justify-center -rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Image Placeholder */}
            <div className="text-slate-900 font-title text-4xl uppercase tracking-widest leading-tight z-10 relative text-center px-4">
              Imagen del Equipo
            </div>
            {/* Decorative logo */}
            <img src={faceLogo} alt="" className="absolute -bottom-16 -right-16 w-64 h-64 opacity-50 rotate-12" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <h2 className="font-title text-center lg:text-left text-5xl md:text-6xl text-[#1a8533] mb-8 uppercase tracking-[0.028em] leading-tight">Quiénes Somos</h2>
          <div className="space-y-6 font-body text-lg md:text-xl text-slate-900 leading-relaxed font-normal">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
