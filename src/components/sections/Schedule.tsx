import { usePostHog } from '@posthog/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';
import deco4 from '../../assets/decorations/04.svg';

const timeline = [
  { code: 'T0', focus: 'Arranque y Raíces', status: 'Próximo' },
  { code: 'T1-T4', focus: 'Terreno y diagnósticos', status: 'En calendarización' },
  { code: 'T5-T8', focus: 'Herramientas y prototipos', status: 'Híbrido' },
  { code: 'T9-T11', focus: 'Proyección y pitch final', status: 'Cierre regional' }
];

export function Schedule() {
  const posthog = usePostHog();
  return (
    <SectionWrapper
      id="calendario"
      className="bg-crema mt-14 md:mt-20"
      diagonal="right"
      diagonalColor="#f4f1e8"
      fullWidth
      paddingClass="py-16 md:py-24"
    >
      <InteractiveDecoration src={deco4} alt="" className="absolute -right-12 top-10 w-48 md:w-72 opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto bg-white/90 border border-[#0969a7]/10 p-10 shadow-lg flex flex-col gap-6">
        <div className="space-y-5 text-center md:text-left">
          <p className="font-title text-sm uppercase tracking-[0.4em] text-[#ff7300]">Calendario</p>
          <h3 className="font-title text-4xl md:text-5xl text-[#0f172a] leading-tight heading-balanced">12 módulos híbridos</h3>
          <p className="font-body text-base md:text-lg text-slate-700">
            Mantén este bloque actualizado con las fechas reales del laboratorio. Mientras tanto mostramos los tramos y su foco principal.
          </p>
        </div>
        <div className="space-y-6">
          {timeline.map((slot) => (
            <div key={slot.code} className="flex flex-col sm:flex-row sm:items-stretch gap-4">
              <div className="sm:w-48 bg-[#0969a7] text-white px-5 py-4 flex flex-col items-center justify-center text-center tracking-[0.2em] uppercase">
                <span className="font-title text-2xl sm:text-3xl tracking-normal">{slot.code}</span>
                <span className="font-body text-xs text-white/80">{slot.status}</span>
              </div>
              <div className="flex-1 border border-dashed border-slate-300 bg-white px-6 py-4 flex items-center">
                <p className="font-body text-base md:text-lg text-slate-800">{slot.focus}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#registro"
          data-placeholder="calendario-pdf"
          className="block"
          onClick={() => posthog.capture('descarga_calendario_intent')}
        >
          <Button variant="secondary" fullWidth>
            Descargar calendario (próximamente)
          </Button>
        </a>
      </div>
    </SectionWrapper>
  );
}
