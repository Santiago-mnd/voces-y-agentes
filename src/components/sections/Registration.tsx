import { SectionWrapper } from '../ui/SectionWrapper';

export function Registration() {
  return (
    <SectionWrapper
      id="registro"
      className="bg-primary-soft mt-14 md:mt-20"
      fullWidth
      paddingClass="py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto relative z-10 space-y-14 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div className="space-y-4">
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-surface">Registro cerrado</p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-surface uppercase tracking-[0.028em] leading-tight heading-balanced">
              ¡Gracias por sumarte!
            </h2>
          </div>
          <div className="space-y-4 font-body text-lg md:text-xl text-neutral">
            <p className="font-extrabold text-2xl mb-4">¡Muchas gracias por su participación! Las convocatorias se han cerrado.</p>
            <p>Voces y Agentes inició sus sesiones con muy buena recepción. Ahora toca prepararse para postular sus proyectos al fondo YIF (Youth Innovation Fund).</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
