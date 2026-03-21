import { SectionWrapper } from '../ui/SectionWrapper';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';
import deco4 from '../../assets/decorations/04.svg';

const sessions = [
  {
    id: '01',
    weekday: 'Sábado',
    date: '16 de mayo',
    format: 'Presencial',
    time: '8:30 a.m. – 2:30 p.m.',
    topic: 'Bienvenida, Encuadre e Introducción a la incidencia.',
    cycle: 'Raíces'
  },
  {
    id: '02',
    weekday: 'Miércoles',
    date: '20 de mayo',
    format: 'En línea',
    time: '6:00 p.m. – 8:00 p.m.',
    topic: 'Juventudes y memoria histórica.',
    cycle: 'Raíces'
  },
  {
    id: '03',
    weekday: 'Sábado',
    date: '23 de mayo',
    format: 'Presencial',
    time: '8:30 a.m. – 2:30 p.m.',
    topic: 'Identificación de problemáticas, diagnóstico participativo y metodologías MEL.',
    cycle: 'Terreno'
  },
  {
    id: '04',
    weekday: 'Miércoles',
    date: '27 de mayo',
    format: 'En línea',
    time: '6:00 p.m. – 8:00 p.m.',
    topic: 'Diseño de proyecto YIF.',
    cycle: 'Terreno'
  },
  {
    id: '05',
    weekday: 'Sábado',
    date: '30 de mayo',
    format: 'Presencial',
    time: '8:30 a.m. – 2:30 p.m.',
    topic: 'Mapeo de actores, iniciativas de ley y poder local.',
    cycle: 'Herramientas'
  },
  {
    id: '06',
    weekday: 'Miércoles',
    date: '3 de junio',
    format: 'En línea',
    time: '6:00 p.m. – 8:00 p.m.',
    topic: 'RESICO, SAT y cómo facturar.',
    cycle: 'Herramientas'
  },
  {
    id: '07',
    weekday: 'Sábado',
    date: '6 de junio',
    format: 'Presencial',
    time: '8:30 a.m. – 2:30 p.m.',
    topic: 'Diseño de estrategias de comunicación y storytelling.',
    cycle: 'Proyección'
  },
  {
    id: '08',
    weekday: 'Sábado',
    date: '13 de junio',
    format: 'Presencial',
    time: '8:30 a.m. – 2:30 p.m.',
    topic: 'Cultura de paz, violencia política y formación de formadores.',
    cycle: 'Proyección'
  }
];

const intensiveWeek = {
  range: '15 al 19 de junio',
  format: 'En línea',
  description: 'Semana de sesiones 1:1 para acompañar la implementación de los proyectos.'
};

export function Schedule() {
  return (
    <SectionWrapper
      id="calendario"
      className="bg-surface mt-14 md:mt-20"
      diagonal="right"
      diagonalColor="var(--color-surface)"
      fullWidth
      paddingClass="py-16 md:py-24"
    >
      <InteractiveDecoration src={deco4} alt="" className="absolute -right-12 top-10 w-48 md:w-72 opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto bg-surface/90 border border-secondary/10 p-10 shadow-lg flex flex-col gap-8">
        <div className="space-y-4 text-center md:text-left">
          <p className="font-heading text-sm uppercase tracking-[0.4em] text-primary">Calendario</p>
          <h3 className="font-heading text-4xl md:text-5xl text-secondary leading-tight heading-balanced">8 módulos híbridos</h3>
          <p className="font-body text-base md:text-lg text-neutral">
            Consulta las fechas y formatos de cada taller. Mantén la información al día para que las juventudes organicen su agenda con tiempo.
          </p>
        </div>
        <div className="space-y-5">
          {sessions.map((session) => (
            <article key={session.id} className="border border-neutral/20 bg-surface px-6 py-5 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="md:w-52">
                  <p className="font-heading text-xs uppercase tracking-[0.5em] text-primary">Sesión {session.id}</p>
                  <p className="font-heading text-2xl text-secondary">{session.weekday}</p>
                  <p className="font-body text-sm text-neutral/80">{session.date}</p>
                </div>
                <div className="flex-1 grid gap-4 md:grid-cols-[0.9fr_1.4fr_0.7fr]">
                  <div className="space-y-1">
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary">Formato</p>
                    <p className="font-heading text-lg">{session.format}</p>
                    <p className="font-body text-sm text-neutral/80">{session.time}</p>
                  </div>
                  <div className="space-y-1 md:border-x md:border-neutral/20 md:px-4">
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary">Temas</p>
                    <p className="font-body text-base text-neutral leading-snug">{session.topic}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary">Ciclo</p>
                    <p className="font-heading text-lg">{session.cycle}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="border border-primary/30 bg-primary/5 px-6 py-5">
          <p className="font-heading text-sm uppercase tracking-[0.4em] text-primary mb-2">Seguimiento</p>
          <p className="font-heading text-2xl text-secondary">{intensiveWeek.range}</p>
          <p className="font-body text-sm text-neutral/80">{intensiveWeek.format}</p>
          <p className="font-body text-base text-neutral mt-2">{intensiveWeek.description}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
