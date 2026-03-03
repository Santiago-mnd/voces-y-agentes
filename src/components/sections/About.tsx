import { SectionWrapper } from '../ui/SectionWrapper';
import faceLogo from '../../assets/face.svg';

export function About() {
  return (
    <SectionWrapper id="about" className="bg-[#f4f1e8] border-b-4 border-slate-900 py-24 md:py-32">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="aspect-square max-w-md mx-auto relative overflow-hidden border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] bg-[#ff99af] flex items-center justify-center -rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Image Placeholder */}
            <div className="text-slate-900 font-title text-4xl uppercase tracking-wider font-black z-10 relative text-center px-4">
              Imagen del Equipo
            </div>
            {/* Decorative logo */}
            <img src={faceLogo} alt="" className="absolute -bottom-16 -right-16 w-64 h-64 opacity-50 rotate-12 drop-shadow-[4px_4px_0px_rgba(15,23,42,1)]" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <h2 className="font-title text-5xl md:text-6xl text-[#1a8533] mb-8 font-black uppercase tracking-tight">Quiénes Somos</h2>
          <div className="space-y-6 font-body text-xl md:text-2xl text-slate-900 leading-relaxed font-semibold">
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
