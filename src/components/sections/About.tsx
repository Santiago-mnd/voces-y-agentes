import { SectionWrapper } from '../ui/SectionWrapper';
import faceLogo from '../../assets/face.svg';
import deco2 from '../../assets/decorations/02.svg';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';

const PILLARS = [
  'Participación Juvenil Significativa: Tu voz es el motor, no un requisito.',
  'Cuidado Colectivo: Movemos cada proceso desde la empatía y la salud mental comunitaria.',
  'Aprender Haciendo: Teoría y práctica van juntas, siempre en territorio.',
  'Incidencia Real: Buscamos cambios que se sientan en la calle y en las políticas públicas.'
];

export function About() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <InteractiveDecoration src={deco2} alt="" className="absolute right-5 top-10 w-24 md:w-32 opacity-50 z-0 rotate-12" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="aspect-square max-w-md mx-auto relative overflow-hidden bg-accent flex items-center justify-center -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="text-neutral font-heading text-4xl uppercase tracking-widest leading-tight z-10 relative text-center px-4">
              Imagen del Equipo
            </div>
            <img src={faceLogo} alt="" className="absolute -bottom-16 -right-16 w-64 h-64 opacity-50 rotate-12" />
            <div className="absolute top-6 left-6 bg-surface/90 text-secondary font-heading uppercase tracking-[0.3em] text-xs px-4 py-2 shadow-lg rotate-2">
              Laboratorio VyA
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="inline-flex flex-col items-center lg:items-start gap-3 mb-8">
            <h2 className="font-heading text-center lg:text-left text-5xl md:text-6xl text-success uppercase tracking-[0.028em] leading-tight">¿Quiénes Somos?</h2>
            <div className="flex gap-2" aria-hidden="true">
              <span className="block h-1.5 w-16 bg-secondary rounded-sm"></span>
              <span className="block h-1.5 w-12 bg-secondary/70 rounded-sm"></span>
            </div>
          </div>
          <div className="space-y-6 font-body text-lg md:text-xl text-neutral leading-relaxed font-normal">
            <p className="text-secondary font-semibold uppercase tracking-[0.3em] text-sm">De la intención a la acción</p>
            <p>
              Somos Voces y Agentes (VyA), un Laboratorio de Incidencia y Acción Juvenil nacido en el Valle de México. Impulsamos a juventudes de Iztapalapa, Cuauhtémoc y Ecatepec para que pasen del activismo de base a la incidencia política estratégica.
            </p>
            <p>
              Creemos que las Juventudes Oportunidad conocen mejor sus territorios. Les damos herramientas técnicas, acompañamiento psicosocial y capital semilla para que diseñen soluciones reales sobre trabajo digno, cultura de paz y derechos humanos.
            </p>
            <div className="bg-surface/80 border-l-4 border-secondary p-6 space-y-4">
              <h3 className="font-heading text-2xl text-secondary tracking-[0.2em] uppercase">Nuestros pilares</h3>
              <ul className="space-y-3">
                {PILLARS.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary" aria-hidden />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
