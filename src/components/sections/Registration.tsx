import { usePostHog } from '@posthog/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';
import deco1 from '../../assets/decorations/01.svg';

const registrationLink = 'https://forms.office.com/Pages/ResponsePage.aspx?id=IuM32_rpj0CWUe-e0ST4bn6LKNdmFmZIi6Vw_xmxOkBUQVdaV0RRQ0wwUE5HV0lYTVBXU1Y5VDZVUS4u';

const steps = [
  'Cuéntanos sobre ti: comparte tus datos y qué te motiva a transformar tu entorno.',
  'Platícanos tu idea: si ya tienes un colectivo o una propuesta, cuéntanos; y si no, aquí la desarrollaremos contigo.',
  'Confirma tu compromiso: asegúrate de que puedes asistir al 75% de las sesiones. ¡Tu constancia es clave!'
];

const reminders = [
  'Edad: tienes entre 18 y 29 años.',
  'Territorio: vives, trabajas o realizas acciones de impacto en Iztapalapa, Cuauhtémoc o Ecatepec.',
  'Acción: participas en un colectivo, red comunitaria o lideras una iniciativa local (o tienes muchas ganas de arrancarla con nosotros).'
];

export function Registration() {
  const posthog = usePostHog();
  return (
    <SectionWrapper
      id="registro"
      className="bg-primary-soft mt-14 md:mt-20"
      fullWidth
      paddingClass="py-16 md:py-24"
    >
      <InteractiveDecoration src={deco1} alt="" className="absolute left-5 bottom-5 w-24 md:w-32 opacity-70 z-0 rotate-90" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-14">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div className="space-y-4">
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-surface">Registro abierto</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-surface uppercase tracking-[0.028em] leading-tight heading-balanced">
              Únete al movimiento
            </h2>
          </div>
          <div className="space-y-4 font-body text-lg md:text-xl text-neutral">
            <p>¿Tienes una idea para cambiar tu entorno? ¡Queremos conocerla! Regístrate en 15 minutos y agenda tu sesión de orientación.</p>
            <p>¿Ya tienes un colectivo armado? ¡Increíble! Y si aún no defines tu proyecto, aquí te acompañamos desde la idea hasta la acción.</p>
          </div>
        </div>

        {/* Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary p-8 space-y-5">
            <h3 className="font-heading text-2xl uppercase tracking-[0.2em] text-white">¿Qué harás?</h3>
            <ul className="space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4 text-left">
                  <span className="font-heading text-surface text-lg leading-none flex-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-body text-base text-white/90 leading-snug">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface border-l-4 border-secondary p-8 space-y-5 shadow-sm">
            <h3 className="font-heading text-2xl uppercase tracking-[0.2em] text-secondary">Requisitos rápidos</h3>
            <ul className="space-y-4">
              {reminders.map((item) => (
                <li key={item} className="flex gap-3 text-left">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-secondary flex-none" aria-hidden />
                  <span className="font-body text-base text-neutral leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture('click_registro_oficial')}
            className="w-full md:w-auto"
          >
            <Button className="w-full md:w-auto px-16 py-5 !bg-secondary hover:brightness-110 text-surface text-xl font-extrabold uppercase tracking-widest transition-all">
              Ir al formulario oficial
            </Button>
          </a>
          <p className="text-sm text-neutral/80">El formulario se abrirá en una pestaña nueva.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
