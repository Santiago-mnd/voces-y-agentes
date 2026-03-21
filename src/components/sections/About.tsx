import { SectionWrapper } from '../ui/SectionWrapper';
import faceLogo from '../../assets/face.svg';
import deco2 from '../../assets/decorations/02.svg';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';

const PILLARS = [
  {
    title: 'Participación Juvenil Significativa',
    desc: 'Tu voz es el motor, no un requisito.',
    bg: 'bg-primary',
  },
  {
    title: 'Cuidado Colectivo',
    desc: 'Movemos cada proceso desde la empatía y la salud mental comunitaria.',
    bg: 'bg-accent',
  },
  {
    title: 'Aprender Haciendo',
    desc: 'Teoría y práctica van juntas, siempre en territorio.',
    bg: 'bg-success',
  },
  {
    title: 'Incidencia Real',
    desc: 'Buscamos cambios que se sientan en la calle y en las políticas públicas.',
    bg: 'bg-secondary',
  },
];

export function About() {
  return (
    <SectionWrapper id="about" className="relative bg-surface py-24 md:py-32">
      <InteractiveDecoration src={deco2} alt="" className="absolute right-5 top-10 w-24 md:w-32 opacity-50 z-0 rotate-12" />
      <div className="relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 lg:self-stretch">
          <div className="relative h-full min-h-96 bg-transparent lg:bg-accent -rotate-3 flex items-center justify-center">
            {/* Label decorativo — arriba izquierda */}
            <div className="absolute top-5 left-5 bg-surface/90 text-accent font-heading uppercase tracking-[0.3em] text-xs px-4 py-2 shadow-md rotate-2 z-30">
              Laboratorio VyA
            </div>
            {/* Polaroid: rota al contrario del fondo */}
            <div className="relative z-10 bg-white p-3 pb-10 shadow-xl w-4/5 rotate-3">
              <img
                src="https://t3.ftcdn.net/jpg/15/96/34/16/360_F_1596341627_WhD3YIDJPjv9LAUyL7HVsWTk0QYz8gUq.jpg"
                alt="Foto del equipo Voces y Agentes"
                className="w-full object-cover"
              />
              {/* Caption del polaroid */}
              <p className="font-heading text-neutral/50 text-xs uppercase tracking-[0.3em] text-center mt-5">
                Grupo asesor de jóvenes
              </p>
            </div>
            {/* Carita — marca de agua abajo derecha */}
            <img src={faceLogo} alt="" aria-hidden="true" className="absolute bottom-4 right-4 w-20 h-20 opacity-30 rotate-12 z-20" />
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
          <div className="space-y-6 font-body text-lg md:text-xl text-neutral leading-relaxed">
            <p className="text-secondary font-semibold uppercase tracking-[0.3em] text-sm">De la intención a la acción</p>
            <p>
              Somos Voces y Agentes (VyA), un Laboratorio de Incidencia y Acción Juvenil nacido en el Valle de México. Impulsamos a juventudes de Iztapalapa, Cuauhtémoc y Ecatepec para que pasen del activismo de base a la incidencia política estratégica.
            </p>
            <p>
              Creemos que las Juventudes Oportunidad conocen mejor sus territorios. Les damos herramientas técnicas, acompañamiento psicosocial y capital semilla para que diseñen soluciones reales sobre trabajo digno, cultura de paz y derechos humanos.
            </p>
            <div className="mt-8">
              <h3 className="font-heading text-xl text-secondary tracking-[0.2em] uppercase mb-4">Nuestros pilares</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className={`${pillar.bg} rounded-2xl p-5`}>
                    <h4 className="font-heading text-white text-base uppercase tracking-wider leading-snug mb-3">{pillar.title}</h4>
                    <p className="font-body text-white/90 text-sm leading-relaxed tracking-wide">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
