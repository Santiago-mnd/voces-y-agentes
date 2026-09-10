import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { setPageMeta } from '../lib/meta';
import { proyectos, proyectosInverso, ESTADO_LABEL, iniciales } from '../data/proyectos';

const MONO_BG = ['bg-primary-soft', 'bg-accent', 'bg-success', 'bg-secondary'];
const ESTADO_BG: Record<string, string> = {
  'en-marcha': 'bg-success',
  'piloto': 'bg-accent',
  'diseño': 'bg-secondary',
  'finalizado': 'bg-neutral'
};

type Orden = 'az' | 'za';

function useFlipReorder(orden: Orden) {
  const gridRef = useRef<HTMLDivElement>(null);
  const positions = useRef<Map<string, DOMRect>>(new Map());

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = Array.from(grid.children) as HTMLElement[];
    const snapshot = () =>
      new Map(
        cards
          .map((el) => [el.getAttribute('data-slug'), el.getBoundingClientRect()] as const)
          .filter(([slug]) => !!slug) as [string, DOMRect][],
      );
    const prevPositions = positions.current;
    const settled = snapshot();
    if (!reduceMotion) {
      cards.forEach((el) => {
        const slug = el.getAttribute('data-slug');
        if (!slug) return;
        const prev = prevPositions.get(slug);
        const next = settled.get(slug);
        if (!prev || !next) return;
        const dx = prev.left - next.left;
        const dy = prev.top - next.top;
        if (dx === 0 && dy === 0) return;
        el.getAnimations().forEach((a) => a.cancel());
        el.animate(
          [
            { transform: `translate(${dx}px, ${dy}px)` },
            { transform: 'translate(0, 0)' },
          ],
          { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
        );
      });
    }
    positions.current = settled;
  }, [orden]);

  return gridRef;
}

export function Proyectos() {
  const [orden, setOrden] = useState<Orden>('az');
  const ordenados = orden === 'az' ? proyectos : proyectosInverso;
  const esAz = orden === 'az';
  const gridRef = useFlipReorder(orden);

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

      <div className="flex justify-end mb-6">
        <span className="sr-only" aria-live="polite">{esAz ? 'Orden alfabético de la A a la Z' : 'Orden alfabético de la Z a la A'}</span>
        <button
          type="button"
          onClick={() => setOrden(esAz ? 'za' : 'az')}
          aria-label={`Cambiar orden alfabético. Actualmente ${esAz ? 'de la A a la Z' : 'de la Z a la A'}`}
          className="cursor-pointer font-body text-xs font-extrabold uppercase tracking-widest px-4 py-2 border border-neutral/20 bg-white text-secondary hover:border-secondary hover:text-primary transition-colors"
        >
          {esAz ? 'A-Z ↓' : 'Z-A ↑'}
        </button>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ordenados.map((p, i) => {
          const territorios = p.territorios.slice(0, 2).join(' · ') + (p.territorios.length > 2 ? ` +${p.territorios.length - 2}` : '');
          return (
            <Link
              key={p.slug}
              data-slug={p.slug}
              to={`/proyectos/${p.slug}`}
              className="group block border border-neutral/10 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  {p.media?.logo ? (
                    <img src={p.media.logo} alt={`Logo de ${p.nombre}`} className="max-h-16 w-16 object-contain" />
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
