import { useEffect } from 'react';
import { usePostHog } from '@posthog/react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Button } from '../components/ui/Button';

const registrationLink = 'https://forms.office.com/Pages/ResponsePage.aspx?id=IuM32_rpj0CWUe-e0ST4bn6LKNdmFmZIi6Vw_xmxOkBUQVdaV0RRQ0wwUE5HV0lYTVBXU1Y5VDZVUS4u';

const liderazgo = [
  {
    title: 'Liderazgo Comunitario',
    desc: 'Mapeamos los activos y talentos que ya existen en nuestras calles para construir soluciones colectivas.',
    bg: 'bg-primary',
  },
  {
    title: 'Liderazgo Personal',
    desc: 'Transformamos tu historia de vida en conocimiento y poder de incidencia.',
    bg: 'bg-accent',
  },
  {
    title: 'Liderazgo para la Equidad',
    desc: 'Diseñamos proyectos que buscan justicia social y el derecho a un futuro digno.',
    bg: 'bg-success',
  },
];

const soberania = [
  {
    title: 'Aprender Filantropía Comunitaria',
    borderColor: 'border-l-primary',
    headingColor: 'text-primary',
    desc: 'Trabajamos con el Grupo Asesor de Jóvenes — GAJ y aliados adultos para identificar dónde hace falta la inversión.',
  },
  {
    title: 'Gestión de Fondos Reales',
    borderColor: 'border-l-secondary',
    headingColor: 'text-secondary',
    desc: 'Para muchos, esta es la primera experiencia administrando capital y tomando decisiones estratégicas sobre cómo usarlo para generar impacto social.',
  },
  {
    title: 'Ingenio y Creatividad',
    borderColor: 'border-l-accent',
    headingColor: 'text-accent',
    desc: 'Aunque los montos parecen pequeños, las juventudes en el territorio han demostrado una capacidad increíble para maximizar cada peso en favor de su comunidad.',
  },
];

const impacto = [
  {
    title: 'Emprendimiento Social y Trabajo Digno',
    desc: 'Creamos alternativas económicas autogestionadas que rompen la precariedad laboral.',
  },
  {
    title: 'Entrenamiento',
    desc: 'Aprendes a diseñar proyectos bajo estándares globales, lo que te prepara para postular con éxito a otras convocatorias, becas y fondos internacionales.',
  },
  {
    title: 'Profesionalización',
    desc: 'Entender que administrar recursos es un acto de soberanía política y transparencia.',
  },
];

const ministracion = [
  { ministracion: 'Primera', fecha: '10 de Julio', porcentaje: '30%' },
  { ministracion: 'Segunda', fecha: '24 de Julio', porcentaje: '40%' },
  { ministracion: 'Tercera', fecha: '21 de Agosto', porcentaje: '30%' },
];

const pasos = [
  {
    title: 'Arma tu Alianza o Colectivo',
    desc: 'Para participar, necesitas un equipo de mínimo 3 integrantes. Puedes presentar tu proyecto de forma colaborativa: dos o más colectivos o participantes de VyA pueden unirse en una sola propuesta integral.',
  },
  {
    title: 'Cumple con el Perfil',
    desc: 'Los integrantes del equipo que pertenecen al Laboratorio deben contar con al menos el 75% de asistencia en las sesiones. El responsable técnico del proyecto debe tener entre 18 y 29 años. Tu proyecto debe alinearse a los ODS 8, 10, 11 o temas de Cultura de Paz.',
  },
  {
    title: 'Diseña tu Proyecto (Acompañamiento)',
    desc: 'No tienes que hacerlo solo. Tendrás hasta el 15 de junio para recibir asesoría técnica y mentorías para pulir tu diseño social y financiero.',
  },
  {
    title: 'Envía tu Propuesta',
    desc: 'Una vez listo tu proyecto, llena el formulario oficial de postulación antes del 15 de Junio.',
  },
];

const criterios = [
  {
    title: 'Viabilidad',
    desc: 'Que el plan y el presupuesto sean realistas.',
    bg: 'bg-primary',
  },
  {
    title: 'Impacto',
    desc: 'El potencial de cambio real en la comunidad.',
    bg: 'bg-accent',
  },
  {
    title: 'Independencia',
    desc: 'Proyectos estrictamente sociales y apartidistas.',
    bg: 'bg-success',
  },
];

const fechasClave = [
  { etapa: 'Diseño y Mentoría', fecha: 'A partir del 27 de Mayo' },
  { etapa: 'Cierre de Convocatoria', fecha: '15 de Junio' },
  { etapa: 'Anuncio de Beneficiados', fecha: '19 de Junio' },
  { etapa: 'Acción en el Barrio', fecha: 'Junio - Agosto' },
  { etapa: 'Evento de Resultados', fecha: '5 de Septiembre' },
];

export function NuestrosAntecedentes() {
  const posthog = usePostHog();

  useEffect(() => {
    document.title = 'Nuestros Antecedentes | Voces y Agentes';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SECCIÓN 1: Hero */}
      <SectionWrapper
        id="antecedentes-hero"
        className="bg-secondary"
        fullWidth
        paddingClass="py-24 md:py-32"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 px-4">
          <p className="font-heading text-sm uppercase tracking-[0.4em] text-surface">
            Nuestros Antecedentes
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-surface uppercase tracking-[0.028em] leading-tight heading-balanced">
            ¿Qué sostiene a Voces y Agentes?
          </h1>
          <p className="font-body text-lg md:text-xl text-surface leading-relaxed max-w-3xl mx-auto">
            La base de todo lo que hacemos en Voces y Agentes es el Programa de Liderazgo para la Equidad — ELP. Este modelo nació en 2023 como una respuesta colectiva para mover las barreras que el sistema nos pone. Es una metodología creada por jóvenes, diseñada para ser práctica, inclusiva y, sobre todo, útil para la realidad de nuestros barrios.
          </p>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 2: ELP + Quién impulsa */}
      <SectionWrapper id="elp" className="bg-surface" paddingClass="py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl text-secondary uppercase tracking-[0.028em] leading-tight heading-balanced">
                El Programa de Liderazgo para la Equidad
              </h2>
              <div className="space-y-4 font-body text-lg text-neutral leading-relaxed">
                <p>
                  El ELP es una iniciativa de la Red Global de Jóvenes Oportunidad — GOYN. Fue co-creado en el Laboratorio de Creación de Contenidos de Global Nomads Group, donde jóvenes líderes de diversas partes del mundo unieron mentes para diseñar una ruta que realmente nos sirviera.
                </p>
                <p>
                  No es un programa hecho desde un escritorio; es una herramienta viva diseñada por quienes viven los retos día a día.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl uppercase tracking-[0.2em] text-secondary">
                Poder Global, Acción Local
              </h3>
              <p className="font-body text-lg text-neutral leading-relaxed">
                El ELP es un movimiento presente en 14 comunidades del mundo. En Voces y Agentes, aterrizamos esta base global en tres niveles de liderazgo hacia la autonomía:
              </p>
            </div>
          </div>

          {/* 3 niveles de liderazgo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liderazgo.map((item) => (
              <div key={item.title} className={`${item.bg} p-8 space-y-4`}>
                <h4 className="font-heading text-white text-xl uppercase tracking-wider leading-snug">
                  {item.title}
                </h4>
                <p className="font-body text-white/90 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 3: YIF — El Motor */}
      <SectionWrapper
        id="yif"
        className="text-surface mt-12 md:mt-20"
        diagonal="left"
        diagonalColor="var(--color-primary-soft)"
        fullWidth
        paddingClass="py-24 md:py-36"
      >
        <div className="max-w-5xl mx-auto text-center space-y-12 px-4">
          <h2 className="font-heading text-5xl md:text-6xl text-surface uppercase tracking-[0.028em] leading-tight heading-balanced">
            El Motor de la Autonomía: Youth Innovation Fund — YIF
          </h2>
          <div className="space-y-6 font-body text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-surface px-4">
            <p>
              Para que las ideas no se queden en el papel, necesitamos recursos. El YIF es el brazo financiero que respalda nuestras iniciativas.
            </p>
            <p>
              Lanzado en 2021, el YIF nació de una colaboración entre los socios comunitarios de GOYN y jóvenes de todo el mundo. Su propósito es claro: proporcionar el conocimiento y las herramientas para que las juventudes cuenten sus propias historias y derriben las barreras locales de empleo y equidad.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 4: Soberanía Económica */}
      <SectionWrapper id="soberania" className="bg-surface mt-14 md:mt-20" paddingClass="py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-12 px-4">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl text-secondary uppercase tracking-[0.028em] leading-tight heading-balanced">
              Más que una beca, es Soberanía Económica
            </h2>
            <p className="font-body text-lg md:text-xl text-neutral leading-relaxed max-w-3xl mx-auto">
              El YIF entrega microbecas (promedio de $500 a $1000 USD) que funcionan como catalizadores de cambio. Para nosotros, gestionar estos fondos significa:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soberania.map((item) => (
              <div
                key={item.title}
                className={`bg-surface ${item.borderColor} border-l-4 shadow-sm p-8 space-y-4`}
              >
                <h4 className={`font-heading text-xl uppercase tracking-[0.2em] ${item.headingColor}`}>
                  {item.title}
                </h4>
                <p className="font-body text-base text-neutral leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 5: Del Aprendizaje al Impacto */}
      <SectionWrapper id="impacto" className="bg-surface" paddingClass="py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-12 px-4">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl text-secondary uppercase tracking-[0.028em] leading-tight heading-balanced">
              Del Aprendizaje al Impacto Real
            </h2>
            <p className="font-body text-lg md:text-xl text-neutral leading-relaxed max-w-3xl mx-auto">
              Gracias a la combinación del ELP y el YIF, logramos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impacto.map((item, i) => (
              <div key={item.title} className="bg-surface border border-neutral/10 p-8 space-y-4 shadow-sm">
                <span className="font-heading text-3xl text-secondary">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="font-heading text-xl uppercase tracking-[0.2em] text-secondary">
                  {item.title}
                </h4>
                <p className="font-body text-base text-neutral leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 6: ¡Postula al YIF! */}
      <SectionWrapper
        id="convocatoria"
        className="bg-secondary mt-14 md:mt-20"
        fullWidth
        paddingClass="py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto space-y-14 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-surface">
              Convocatoria abierta
            </p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-surface uppercase tracking-[0.028em] leading-tight heading-balanced">
              ¡Postula al fondo de Innovación Juvenil!
            </h2>
            <p className="font-body text-lg md:text-xl text-surface leading-relaxed max-w-3xl mx-auto">
              En Voces y Agentes — VyA, creemos que la transformación de nuestros barrios no ocurre de forma aislada. La incidencia real nace cuando las y los Jóvenes Oportunidad unen su liderazgo para transformar realidades locales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl uppercase tracking-[0.2em] text-surface">
                Objetivo: Innovación con Sentido Humano
              </h3>
              <p className="font-body text-lg text-surface leading-relaxed">
                Buscamos financiar y acompañar técnicamente hasta 9 iniciativas juveniles que propongan soluciones creativas a problemáticas sociales, fomentando la cultura de paz, el trabajo digno y el ejercicio de derechos.
              </p>
            </div>
            <div className="bg-surface p-8 space-y-6">
              <h3 className="font-heading text-2xl uppercase tracking-[0.2em] text-secondary">
                Capital Semilla: El Impulso para tu Idea
              </h3>
              <p className="font-body text-base text-neutral leading-relaxed">
                Sabemos que para transformar se necesitan recursos. El YIF otorgará apoyos destinados exclusivamente a la ejecución de tu propuesta:
              </p>
              <ul className="space-y-3 font-body text-base text-neutral">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-none" aria-hidden />
                  <span><strong>Monto máximo:</strong> Hasta $500.00 USD por proyecto seleccionado.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-none" aria-hidden />
                  <span><strong>Distribución:</strong> Contamos con fondos para 7 proyectos de $500 USD y 3 proyectos de $250 USD.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 7: Ministración */}
      <SectionWrapper id="ministracion" className="bg-surface mt-14 md:mt-20" paddingClass="py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8 px-4">
          <h3 className="font-heading text-4xl md:text-5xl text-secondary uppercase tracking-[0.028em] leading-tight heading-balanced text-center">
            Ministración
          </h3>
          <p className="font-body text-lg text-neutral text-center leading-relaxed">
            El apoyo se entrega en tres pagos programados:
          </p>

          <div className="space-y-4">
            {ministracion.map((item) => (
              <article key={item.ministracion} className="border-l-4 border-l-secondary border border-neutral/10 bg-surface shadow-sm">
                <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] md:items-stretch">
                  <div className="px-5 py-4 border-r border-neutral/10">
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary mb-1">Ministración</p>
                    <p className="font-heading text-2xl text-neutral">{item.ministracion}</p>
                  </div>
                  <div className="px-5 py-4 border-r border-neutral/10">
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary mb-1">Fecha de Pago</p>
                    <p className="font-heading text-lg">{item.fecha}</p>
                  </div>
                  <div className="px-5 py-4 flex items-center">
                    <div>
                      <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary mb-1">Porcentaje</p>
                      <p className="font-heading text-2xl text-secondary">{item.porcentaje}</p>
                    </div>
                  </div>
                </div>
                {/* Mobile */}
                <div className="md:hidden px-5 py-4 flex flex-col gap-3">
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary mb-1">Ministración</p>
                    <p className="font-heading text-2xl text-neutral">{item.ministracion}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary mb-1">Fecha de Pago</p>
                    <p className="font-heading text-lg">{item.fecha}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-secondary mb-1">Porcentaje</p>
                    <p className="font-heading text-2xl text-secondary">{item.porcentaje}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 8: ¿Cómo postular? */}
      <SectionWrapper id="como-postular" className="bg-surface" paddingClass="py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-12 px-4">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl text-secondary uppercase tracking-[0.028em] leading-tight heading-balanced">
              ¿Cómo postular al YIF?
            </h2>
            <p className="font-body text-lg md:text-xl text-neutral leading-relaxed max-w-3xl mx-auto">
              Sigue esta ruta para asegurar que tu proyecto sea tomado en cuenta:
            </p>
          </div>

          <div className="space-y-6">
            {pasos.map((paso, i) => (
              <div key={paso.title} className="bg-surface border-l-4 border-secondary p-8 shadow-sm space-y-3">
                <div className="flex items-center gap-4">
                  <span className="font-heading text-3xl text-secondary flex-none">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="font-heading text-xl uppercase tracking-[0.2em] text-secondary">
                    {paso.title}
                  </h4>
                </div>
                <p className="font-body text-base text-neutral leading-relaxed pl-14">
                  {paso.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 9: Transparencia + Criterios + Fechas */}
      <SectionWrapper id="transparencia" className="bg-surface" paddingClass="py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-16 px-4">
          {/* Transparencia */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl text-secondary uppercase tracking-[0.028em] leading-tight heading-balanced">
                Transparencia
              </h2>
              <p className="font-body text-lg md:text-xl text-neutral leading-relaxed max-w-3xl mx-auto">
                ¿Quién evalúa tu proyecto? Para asegurar un proceso justo y profesional, contamos con un Comité Evaluador Externo de alto nivel integrado por especialistas de GOYN y Plataforma Juventudes. Tu propuesta será revisada por 5 especialistas con amplia trayectoria en juventud y desarrollo social.
              </p>
            </div>

            <h3 className="font-heading text-2xl uppercase tracking-[0.2em] text-secondary text-center">
              Criterios de Selección
            </h3>
            <p className="font-body text-base text-neutral text-center leading-relaxed">
              El comité evaluará bajo una rúbrica ciega:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {criterios.map((item) => (
                <div key={item.title} className={`${item.bg} p-8 space-y-3`}>
                  <h4 className="font-heading text-white text-xl uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="font-body text-white/90 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fechas clave */}
          <div className="space-y-8">
            <h3 className="font-heading text-3xl uppercase tracking-[0.2em] text-secondary text-center">
              La Ruta del Impacto
            </h3>

            <div className="space-y-4">
              {fechasClave.map((item) => (
                <article key={item.etapa} className="border-l-4 border-l-accent border border-neutral/10 bg-surface shadow-sm">
                  <div className="hidden md:grid md:grid-cols-[1fr_1fr] md:items-stretch">
                    <div className="px-5 py-4 border-r border-neutral/10">
                      <p className="font-body text-xs uppercase tracking-[0.4em] text-accent mb-1">Etapa</p>
                      <p className="font-heading text-lg text-neutral">{item.etapa}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="font-body text-xs uppercase tracking-[0.4em] text-accent mb-1">Fecha</p>
                      <p className="font-heading text-lg text-neutral">{item.fecha}</p>
                    </div>
                  </div>
                  {/* Mobile */}
                  <div className="md:hidden px-5 py-4 flex flex-col gap-3">
                    <div>
                      <p className="font-body text-xs uppercase tracking-[0.4em] text-accent mb-1">Etapa</p>
                      <p className="font-heading text-lg text-neutral">{item.etapa}</p>
                    </div>
                    <div>
                      <p className="font-body text-xs uppercase tracking-[0.4em] text-accent mb-1">Fecha</p>
                      <p className="font-heading text-lg text-neutral">{item.fecha}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECCIÓN 10: CTA final */}
      <SectionWrapper
        id="cta-postulacion"
        className="bg-primary-soft mt-14 md:mt-20"
        fullWidth
        paddingClass="py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-surface uppercase tracking-[0.028em] leading-tight heading-balanced">
            ¿Listo para transformar tu barrio?
          </h2>
          <p className="font-body text-lg md:text-xl text-surface leading-relaxed max-w-2xl mx-auto">
            Tu idea tiene el potencial de generar cambio real. Regístrate ahora y da el primer paso hacia la autonomía de tu comunidad.
          </p>
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture('click_registro_antecedentes')}
            className="inline-block"
          >
            <Button className="px-16 py-5 bg-secondary hover:brightness-110 text-surface text-xl font-extrabold uppercase tracking-widest transition-all">
              Ir al formulario oficial
            </Button>
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
