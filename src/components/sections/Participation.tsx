import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';
import deco3 from '../../assets/decorations/03.svg';

const cycles = [
  {
    title: 'Raíces',
    description: 'Identidad y liderazgo desde el barrio para nombrar lo que duele y lo que inspira.',
    color: 'bg-[#ff7300] text-crema'
  },
  {
    title: 'Terreno',
    description: 'Lectura de la política local, mapeo de poder y alianzas estratégicas.',
    color: 'bg-azul text-crema'
  },
  {
    title: 'Herramientas',
    description: 'Diseño de estrategias, comunicación y procuración de recursos para proyectos reales.',
    color: 'bg-[#13853c] text-crema'
  },
  {
    title: 'Proyección',
    description: 'Sostenibilidad, monitoreo y formación de formadores para que la red crezca.',
    color: 'bg-amarillo text-[#0f172a]'
  }
];

const profile = [
  'Tienes entre 18 y 29 años.',
  'Resides o incides en Iztapalapa, Cuauhtémoc o Ecatepec.',
  'Formas parte de un colectivo, red comunitaria o lideras un proyecto independiente.',
  'Puedes comprometerte al menos al 75% de las sesiones híbridas.',
  'Quieres profesionalizar tu activismo y aprender a gestionar recursos.'
];

export function Participation() {
  return (
    <SectionWrapper
      id="participate"
      className="bg-crema mt-12 md:mt-20 relative overflow-hidden"
      paddingClass="py-16 md:py-24"
    >
      <InteractiveDecoration src={deco3} alt="" className="absolute top-10 left-10 w-24 md:w-40 opacity-30 rotate-45" />
      <div className="relative z-10 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="font-title text-sm uppercase tracking-[0.5em] text-azul">Únete a la red de agentes</p>
          <h2 className="font-title text-5xl md:text-6xl text-[#0f172a] leading-tight heading-balanced">¿Cómo participar?</h2>
          <p className="font-body text-lg md:text-xl text-slate-800 heading-balanced">
            Participar en VyA es iniciar un viaje dividido en cuatro ciclos formativos. Cada uno mezcla teoría, territorio y acompañamiento para que transformes tu barrio con estrategia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {cycles.map((cycle, index) => (
            <Card
              key={cycle.title}
              className={`cycle-card ${index % 2 === 0 ? 'cycle-card--tilt-left' : 'cycle-card--tilt-right'} p-8 h-full relative overflow-hidden ${cycle.color}`}
            >
              <span className="font-title text-3xl tracking-wide block mb-4">{cycle.title}</span>
              <p className="font-body text-lg leading-relaxed">{cycle.description}</p>
              <span className="absolute top-4 right-4 font-body text-xs uppercase tracking-[0.3em] opacity-70">Ciclo</span>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-stretch">
          <div className="bg-crema border border-azul p-10 space-y-6">
            <h3 className="font-title text-4xl text-azul uppercase tracking-[0.2em]">Perfil del Agente VyA</h3>
            <p className="font-body text-lg text-slate-800">
              Buscamos mentes inquietas y corazones comprometidos. Si te reconoces en esta lista, ya eres parte del movimiento.
            </p>
            <ul className="space-y-4">
              {profile.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 w-4 h-4 border-2 border-azul flex-none" aria-hidden></span>
                  <span className="font-body text-lg text-slate-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0f172a] text-white p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="font-title uppercase tracking-[0.4em] text-sm text-amarillo">Capital Semilla</p>
              <h3 className="font-title text-4xl leading-tight">Hasta ~$500 USD vía Youth Innovation Fund</h3>
              <p className="font-body text-lg text-white/80">
                Cubre la asistencia mínima, valida tu propuesta y accede al fondo para impulsar tu célula de incidencia.
              </p>
            </div>
            <a href="#registro" className="block mt-8">
              <Button variant="outline" className="w-full text-[#0f172a] bg-white" fullWidth>
                Ver calendario y registrarme
              </Button>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
