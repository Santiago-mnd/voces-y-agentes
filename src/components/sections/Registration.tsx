import { usePostHog } from '@posthog/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';
import deco1 from '../../assets/decorations/01.svg';

const registrationLink = 'https://forms.office.com/Pages/ResponsePage.aspx?id=IuM32_rpj0CWUe-e0ST4bn6LKNdmFmZIi6Vw_xmxOkBUQVdaV0RRQ0wwUE5HV0lYTVBXU1Y5VDZVUS4u';

const steps = [
  'Comparte tus datos básicos en menos de 5 minutos.',
  'Indica el ciclo formativo que más te interesa iniciar.',
  'Confirma que puedes cubrir al menos el 75% de las sesiones híbridas.'
];

const reminders = [
  'Tienes entre 18 y 29 años.',
  'Vives o trabajas en Iztapalapa, Cuauhtémoc o Ecatepec.',
  'Participas en un colectivo, red comunitaria o lideras una iniciativa local.'
];

export function Registration() {
  const posthog = usePostHog();
  return (
    <SectionWrapper
      id="registro"
      className="bg-surface mt-14 md:mt-20"
      diagonal="left"
      diagonalColor="var(--color-primary-soft)"
      fullWidth
      paddingClass="py-16 md:py-24"
    >
      <InteractiveDecoration src={deco1} alt="" className="absolute left-5 bottom-5 w-24 md:w-32 opacity-70 z-0 rotate-90" />

      <div className="max-w-4xl mx-auto relative z-10 bg-surface p-12 md:p-24 space-y-10">
        <div className="text-center space-y-4">
          <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary">Registro abierto</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase tracking-[0.028em] leading-tight md:leading-[1.3] break-words hyphens-auto heading-balanced">
            Únete al movimiento
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-neutral heading-balanced">
            Traslada tu energía a la convocatoria oficial. Completa el formulario, agenda la llamada de orientación y activa tu celda de incidencia sin intermediarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="font-heading text-xl uppercase tracking-[0.3em] text-secondary">¿Qué harás?</h3>
            <ul className="space-y-3">
              {steps.map((step) => (
                <li key={step} className="flex gap-3 text-left">
                  <span className="mt-1 h-2 w-2 bg-secondary flex-none" aria-hidden></span>
                  <span className="font-body text-base md:text-lg text-neutral">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-xl uppercase tracking-[0.3em] text-secondary">Requisitos rápidos</h3>
            <ul className="space-y-3">
              {reminders.map((item) => (
                <li key={item} className="flex gap-3 text-left">
                  <span className="mt-1 h-2 w-2 bg-primary flex-none" aria-hidden></span>
                  <span className="font-body text-base md:text-lg text-neutral">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-3">
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture('click_registro_oficial')}
          >
            <Button className="w-full md:w-auto px-16 py-5 bg-success hover:brightness-110 text-surface text-xl font-extrabold uppercase tracking-widest transition-all">
              Ir al formulario oficial
            </Button>
          </a>
          <p className="text-sm text-neutral/80">El formulario se abrirá en una pestaña nueva.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
