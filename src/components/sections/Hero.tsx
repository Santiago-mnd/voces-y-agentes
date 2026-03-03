import faceLogo from '../../assets/face.svg';
import deco1 from '../../assets/decorations/01.svg';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="hero" className="relative bg-[#f4f1e8] min-h-[90vh] flex items-center overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Decoration */}
      <img src={deco1} alt="" className="absolute -left-16 top-20 w-80 opacity-20 -z-10 -rotate-12 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="max-w-3xl lg:w-1/2 flex flex-col justify-center">
            <h1 className="font-title text-5xl md:text-6xl lg:text-[5rem] leading-[1.3] tracking-[0.028em] mb-10">
              <span className="block text-[#fdb725] mb-2">Damos Voz a los</span>
              <span className="block text-[#0969a7]">Agentes del Cambio</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-slate-900 mb-12 max-w-md lg:max-w-lg leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <a href="#initiatives">
                <Button variant="primary">Ver Iniciativas</Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Únete a Nosotros</Button>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center w-full mt-12 lg:mt-0 relative">
            <div className="relative animate-[bounce_4s_infinite] flex items-center justify-center">
              <div className="absolute bg-[#fdb725] rounded-full w-[280px] h-[280px] md:w-[420px] md:h-[420px] lg:w-[560px] lg:h-[560px] -z-10 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8"></div>
              <img
                src={faceLogo}
                alt="Voces y Agentes Carita"
                className="relative z-10 w-[300px] md:w-[450px] lg:w-[600px] -rotate-6 transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
