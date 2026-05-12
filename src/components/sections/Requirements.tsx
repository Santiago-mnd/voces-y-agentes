const requirements = [
  {
    title: 'Perfil del liderazgo',
    borderColor: 'border-l-primary',
    headingColor: 'text-primary',
    bulletColor: 'bg-primary',
    items: [
      'Rango de Edad: El responsable técnico y administrativo del proyecto debe tener entre 18 y 29 años al momento de la postulación.',
      'Representatividad: El liderazgo del proyecto debe emanar de los propios jóvenes participantes de las células territoriales (Iztapalapa, Cuauhtémoc o Ecatepec).',
    ],
  },
  {
    title: 'Compromiso con el proceso',
    borderColor: 'border-l-secondary',
    headingColor: 'text-secondary',
    bulletColor: 'bg-secondary',
    items: [
      'Asistencia y Participación: Se requiere un cumplimiento mínimo del 75% de las sesiones formativas del Laboratorio VyA para que el colectivo sea elegible.',
      'Validación de Aprendizajes: El colectivo debe demostrar la aplicación de las herramientas de incidencia y diagnóstico impartidas durante el laboratorio Voces y Agentes.',
    ],
  },
  {
    title: 'Naturaleza del proyecto',
    borderColor: 'border-l-success',
    headingColor: 'text-success',
    bulletColor: 'bg-success',
    items: [
      'Independencia Política: Los proyectos deben ser estrictamente de carácter comunitario y social. No se aceptarán iniciativas con fines de proselitismo partidista, afiliación política electoral o vinculación directa con estructuras de partidos políticos.',
      'Alineados con los ODS: 8. Trabajo Digno y Crecimiento Económico, 10. Reducción de Desigualdades, 11. Ciudades y Comunidades Sostenibles.',
      'Alineación Temática: Las propuestas deben abordar problemáticas vinculadas a la agenda de las juventudes, tales como: trabajo digno, cultura de paz, derechos humanos, educación, autoempleo/emprendimiento o sistemas de cuidados. (sin ser excluyentes)',
    ],
  },
  {
    title: 'Viabilidad técnica y financiera',
    borderColor: 'border-l-accent',
    headingColor: 'text-accent',
    bulletColor: 'bg-accent',
    items: [
      'Estructura del Proyecto: Presentar un diseño que incluya problema central, solución propuesta, impacto esperado y cronograma de ejecución.',
      'Presupuesto: Elaborar un plan de gastos detallado que se ajuste al monto asignado (Hasta 500 USD por célula) enfocado en la sostenibilidad del impacto.',
      'Transparencia: Disposición para la rendición de cuentas y el monitoreo técnico de la ejecución del fondo.',
    ],
  },
];

interface RequirementsProps {
  isOpen: boolean;
}

export function Requirements({ isOpen }: RequirementsProps) {
  return (
    <section
      id="requisitos"
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="bg-surface py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary">
              Youth Innovation Fund
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-neutral uppercase tracking-[0.028em] leading-tight heading-balanced">
              Requisitos
            </h2>
            <p className="font-body text-lg md:text-xl text-neutral leading-relaxed max-w-3xl mx-auto">
              Para acceder al capital semilla del Youth Innovation Fund, tu célula y tu proyecto deben cumplir los siguientes criterios.
            </p>
          </div>

          {/* Requirements grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req) => (
              <div
                key={req.title}
                className={`bg-surface ${req.borderColor} border-l-4 shadow-sm p-8 space-y-5`}
              >
                <h3 className={`font-heading text-2xl uppercase tracking-[0.2em] ${req.headingColor}`}>
                  {req.title}
                </h3>
                <ul className="space-y-4">
                  {req.items.map((item) => (
                    <li key={item} className="flex gap-3 text-left">
                      <span className={`mt-2 h-2 w-2 rounded-full flex-none ${req.bulletColor}`} aria-hidden />
                      <span className="font-body text-base text-neutral leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
