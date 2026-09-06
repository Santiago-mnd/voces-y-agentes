import { useEffect } from 'react';
import { Link } from 'react-router';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { setPageMeta } from '../lib/meta';
import { proyectos, ESTADO_LABEL, iniciales } from '../data/proyectos';

const MONO_BG = ['bg-primary-soft', 'bg-accent', 'bg-success', 'bg-secondary'];
const ESTADO_BG: Record<string, string> = {
  'en-marcha': 'bg-success',
  'piloto': 'bg-accent',
  'diseño': 'bg-secondary',
  'finalizado': 'bg-neutral'
};

export function Proyectos() {
  useEffect(() => {
    setPageMeta({
      title: 'Proyectos seleccionados | Voces y Agentes',
      description: 'Las colectivas juveniles nacidas y acompañadas dentro del laboratorio Voces y Agentes: qué hicieron, qué aprendieron y su impacto en Iztapalapa, Cuauhtémoc y Ecatepec.',
      path: '/proyectos',
    });
  }, []);

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Proyectos seleccionados de Voces y Agentes',
    itemListElement: proyectos.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.nombre,
      url: `https://vocesyagentes.goynmexico.org/proyectos/${p.slug}`,
    })),
  };

  return (
    <SectionWrapper id="proyectos" className="bg-surface" paddingClass="py-20 md:py-28">
      <script type="application/ld+json">{JSON.stringify(itemListLd)}</script>
      <div className="max-w-3xl mb-14">
        <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-4">Proyectos seleccionados</p>
        <h2 className="font-heading text-4xl md:text-5xl text-neutral uppercase tracking-[0.028em] leading-tight heading-balanced mb-6">
          Las colectivas del laboratorio
        </h2>
        <p className="font-body text-lg text-neutral leading-relaxed">
          Proyectos nacidos y acompañados dentro de Voces y Agentes. Cada ficha reúne lo que hicieron, lo que aprendieron y lo que dejaron en movimiento en sus territorios.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((p, i) => {
          const territorios = p.territorios.slice(0, 2).join(' · ') + (p.territorios.length > 2 ? ` +${p.territorios.length - 2}` : '');
          return (
            <Link
              key={p.slug}
              to={`/proyectos/${p.slug}`}
              className="group block border border-neutral/10 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  {p.media?.logo ? (
                    <img src={p.media.logo} alt={`Logo de ${p.nombre}`} className="h-16 w-auto" />
                  ) : (
                    <div className={`${MONO_BG[i % MONO_BG.length]} h-16 w-16 flex items-center justify-center font-heading text-2xl text-surface uppercase rotate-[-4deg]`}>
                      {iniciales(p.nombre)}
                    </div>
                  )}
                  <span className={`${ESTADO_BG[p.estado]} text-surface font-body text-[11px] font-extrabold uppercase tracking-wider px-3 py-1`}>
                    {ESTADO_LABEL[p.estado]}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-neutral uppercase tracking-[0.02em] leading-tight group-hover:text-primary transition-colors">
                    {p.nombre}
                  </h3>
                  {p.tagline && <p className="font-body text-sm text-neutral/80 leading-relaxed mt-2">{p.tagline}</p>}
                </div>
                <p className="font-body text-xs font-extrabold uppercase tracking-widest text-secondary mt-auto">{territorios}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
