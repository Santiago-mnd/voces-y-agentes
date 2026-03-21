import faceLogo from '../../assets/face.svg';
import deco1 from '../../assets/decorations/01.svg';
// import deco2 from '../../assets/decorations/02.svg';
import { Button } from '../ui/Button';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';
import { useInView } from '../../hooks/useInView';

export function Hero() {
  const { ref, isVisible } = useInView();

  return (
    <section id="hero" className="relative bg-surface min-h-[90vh] flex items-center overflow-hidden pt-16 pb-12 md:pt-40 md:pb-32">
      {/* Background Decoration — solo desktop, abajo a la izquierda para no tapar el texto */}
      <InteractiveDecoration src={deco1} alt="" className="hidden lg:block absolute -left-10 bottom-16 w-64 opacity-40 z-0 -rotate-12" />
      {/* <InteractiveDecoration src={deco2} alt="" className="absolute -bottom-10 -right-10 w-32 md:w-40 opacity-50 z-0 rotate-45" /> */}

      <div ref={ref} className={`fade-in-up ${isVisible ? 'is-visible' : ''} w-full relative z-10 py-10`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col text-center md:text-left items-center md:items-start w-full">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] leading-[1.3] tracking-[0.028em] mb-10">
              <span className="block text-primary-soft mb-2">Damos Voz a los</span>
              <span className="block text-secondary">Agentes del Cambio</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-neutral mb-12 max-w-md lg:max-w-lg leading-relaxed font-normal">
              Voces y Agentes (VyA) es el laboratorio juvenil de GOYN México que acompaña a jóvenes de Iztapalapa, Cuauhtémoc y Ecatepec para transformar su voluntariado barrial en incidencia política estratégica con formación híbrida, cuidados colectivos y capital semilla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start mt-6">
              <a href="#calendario" className="w-full sm:w-auto">
                <Button variant="primary" fullWidth className="sm:w-auto !bg-primary-soft !text-surface">Ver calendario</Button>
              </a>
              <a href="#registro" className="w-full sm:w-auto">
                <Button variant="primary" fullWidth className="sm:w-auto !bg-accent">Únete al registro</Button>
              </a>
            </div>
          </div>

          <div className="hidden md:flex relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto justify-center">
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute bg-primary-soft rounded-full w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] -z-10 mt-6 ml-6"></div>
              <img
                src={faceLogo}
                alt="Voces y Agentes Carita"
                className="relative z-10 w-full hover:scale-105 transition-transform duration-300 -rotate-6"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
