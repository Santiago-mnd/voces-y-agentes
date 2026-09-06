import { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';
import deco3 from '../../assets/decorations/03.svg';

interface Cycle {
  title: string;
  description: string;
  color: string;
  topics: string[];
}

const cycles: Cycle[] = [
  {
    title: 'Raíces',
    description: 'Identidad y liderazgo desde el barrio para nombrar lo que duele y lo que inspira.',
    color: 'bg-primary text-surface',
    topics: [
      'Bienvenida, encuadre e introducción a la incidencia.',
      'Jóvenes Oportunidad y memoria histórica.'
    ]
  },
  {
    title: 'Terreno',
    description: 'Lectura de la política local, mapeo de poder y alianzas estratégicas.',
    color: 'bg-secondary text-surface',
    topics: [
      'Identificación de problemáticas, diagnóstico participativo y metodologías MEL.',
      'Diseño de proyecto YIF.'
    ]
  },
  {
    title: 'Herramientas',
    description: 'Diseño de estrategias, comunicación y procuración de recursos para proyectos reales.',
    color: 'bg-success text-surface',
    topics: [
      'Mapeo de actores, iniciativas de ley y poder local.',
      'RESICO, SAT y cómo facturar.'
    ]
  },
  {
    title: 'Proyección',
    description: 'Sostenibilidad, monitoreo y formación de formadores para que la red crezca.',
    color: 'bg-primary-soft text-surface',
    topics: [
      'Diseño de estrategias de comunicación y storytelling.',
      'Cultura de paz, violencia política y formación de formadores.'
    ]
  }
];

const profile = [
  'Tienes entre 18 y 29 años.',
  'Resides o incides en Iztapalapa, Cuauhtémoc o Ecatepec.',
  'Formas parte de un colectivo, red comunitaria o lideras un proyecto independiente.',
  'Puedes comprometerte al menos al 75% de las sesiones híbridas.',
  'Quieres profesionalizar tu activismo y aprender a gestionar recursos.'
];

interface CycleCardProps {
  cycle: Cycle;
  isActive: boolean;
  onToggle: () => void;
}

function CycleCard({ cycle, isActive, onToggle }: CycleCardProps) {
  return (
    <Card className="cycle-card flip-card cursor-pointer">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isActive}
        className="w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-surface/70"
      >
        <div className={`flip-card-inner ${isActive ? 'is-active' : ''}`}>
          <div className={`flip-card-face flip-card-front ${cycle.color} p-8 h-full flex flex-col relative`}>
            <div className="flip-card-content h-full flex flex-col gap-4">
              <span className="cycle-card__title font-heading text-3xl tracking-wide block">{cycle.title}</span>
              <p className="font-body text-lg leading-relaxed flex-1">{cycle.description}</p>
              <span className="cycle-card__hint font-body text-xs uppercase tracking-[0.4em] opacity-80">
                {isActive ? 'Pulsa para volver' : (
                  <>
                    <span className="hidden md:inline">Clic para ver más</span>
                    <span className="md:hidden">Toca para ver más</span>
                  </>
                )}
              </span>
            </div>
          </div>
          <div className={`flip-card-face flip-card-back ${cycle.color} p-8 h-full flex flex-col relative`}>
            <div className="flip-card-content h-full flex flex-col gap-4">
              <p className="font-heading text-2xl">Temas clave</p>
              <ul className="space-y-3 font-body text-base leading-relaxed">
                {cycle.topics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-surface/80 flex-none" aria-hidden></span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <span className="font-body text-xs uppercase tracking-[0.4em] opacity-80 mt-auto">Pulsa para volver</span>
            </div>
          </div>
        </div>
      </button>
    </Card>
  );
}

export function Participation() {
  const [activeCycle, setActiveCycle] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveCycle((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper
      id="participate"
      className="bg-surface mt-12 md:mt-20 relative overflow-hidden"
      paddingClass="py-16 md:py-24"
    >
      <InteractiveDecoration src={deco3} alt="" className="absolute top-10 left-10 w-24 md:w-40 opacity-30 rotate-45" />
      <div className="relative z-10 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="font-heading text-sm uppercase tracking-[0.5em] text-secondary">Únete a la red de agentes</p>
          <h2 className="font-heading text-5xl md:text-6xl text-secondary leading-tight heading-balanced">¿Cómo participar?</h2>
          <p className="font-body text-lg md:text-xl text-neutral heading-balanced">
            Participar en VyA es iniciar un viaje dividido en cuatro ciclos formativos. Cada uno mezcla teoría, territorio y acompañamiento para que transformes tu barrio con estrategia.
          </p>
        </div>

        <div className="cycles-grid motion-ready grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {cycles.map((cycle, index) => (
            <CycleCard
              key={cycle.title}
              cycle={cycle}
              isActive={activeCycle === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-stretch">
          <div className="bg-surface border-l-4 border-secondary p-10 space-y-6 shadow-sm">
            <h3 className="font-heading text-4xl text-secondary uppercase tracking-[0.2em]">Perfil del Agente VyA</h3>
            <p className="font-body text-lg text-neutral">
              Buscamos mentes inquietas y corazones comprometidos. Si te reconoces en esta lista, ya eres parte del movimiento.
            </p>
            <ul className="space-y-3">
              {profile.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 w-3 h-3 rounded-full flex-none bg-secondary" aria-hidden />
                  <span className="font-body text-lg text-neutral">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-accent text-surface p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="font-heading uppercase tracking-[0.4em] text-sm text-surface">Capital Semilla</p>
              <h3 className="font-heading text-4xl leading-tight">Hasta ~$500 USD vía Youth Innovation Fund</h3>
              <p className="font-body text-lg text-surface/80">
                Cubre la asistencia mínima, valida tu propuesta y accede al fondo para impulsar tu célula de incidencia.
              </p>
            </div>
            <a href="#calendario" className="inline-flex mt-8 items-center justify-center w-full font-body px-6 py-3 transition-opacity duration-200 font-extrabold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary cursor-pointer bg-primary-soft text-surface hover:opacity-90">
              Ver calendario
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
