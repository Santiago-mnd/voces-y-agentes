import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { ProyectoGallery, ProyectoCarrusel } from '../components/ui/Gallery';
import { setPageMeta } from '../lib/meta';
import { proyectos, getProyecto, ESTADO_LABEL, iniciales } from '../data/proyectos';

const RED_LABEL: Record<string, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  web: 'Sitio web'
};

export function ProyectoDetalle() {
  const { slug } = useParams();
  const p = getProyecto(slug ?? '');

  useEffect(() => {
    if (p) {
      setPageMeta({
        title: `${p.nombre} — Proyectos | Voces y Agentes`,
        description: p.tagline
          ? `${p.tagline}. ${p.resumen.slice(0, 120)}...`
          : p.resumen.slice(0, 160),
        path: `/proyectos/${p.slug}`,
        image: p.media?.logo ? `${'https://vocesyagentes.goynmexico.org'}${p.media.logo}` : undefined,
      });
    } else {
      setPageMeta({
        title: 'Proyecto no encontrado | Voces y Agentes',
        description: 'La página que buscas no existe o cambió de dirección.',
        path: '/proyectos',
      });
    }
  }, [p]);

  if (!p) {
    return (
      <SectionWrapper id="proyecto" className="bg-surface" paddingClass="py-20 md:py-28">
        <div className="text-center py-16">
          <h1 className="font-heading text-4xl text-neutral uppercase tracking-[0.028em] mb-6">Proyecto no encontrado</h1>
          <Link to="/proyectos" className="font-body font-extrabold text-secondary hover:text-primary uppercase tracking-wide">
            ← Ver todas las colectivas
          </Link>
        </div>
      </SectionWrapper>
    );
  }

  const otros = proyectos.filter((x) => x.slug !== p.slug);

  return (
    <>
      <SectionWrapper id="proyecto" className="bg-surface" paddingClass="py-16 md:py-24">
        <Link to="/proyectos" className="font-body text-sm font-extrabold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
          ← Ver todas las colectivas
        </Link>

        <div className="flex flex-col md:flex-row md:items-center gap-6 mt-10 mb-12">
          {p.media?.logo ? (
            <img src={p.media.logo} alt={`Logo de ${p.nombre}`} className="h-24 w-auto" />
          ) : (
            <div className="bg-accent h-24 w-24 flex items-center justify-center font-heading text-4xl text-surface uppercase rotate-[-4deg] flex-none">
              {iniciales(p.nombre)}
            </div>
          )}
          <div>
            <h1 className="font-heading text-4xl md:text-6xl text-neutral uppercase tracking-[0.028em] leading-tight heading-balanced">
              {p.nombre}
            </h1>
            {p.tagline && <p className="font-body text-lg text-neutral/80 mt-2">{p.tagline}</p>}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="bg-success text-surface font-body text-xs font-extrabold uppercase tracking-wider px-3 py-1">
                {ESTADO_LABEL[p.estado]}
              </span>
              <span className="font-body text-sm text-neutral/70">{p.territorios.slice(0, 3).join(' · ')}{p.territorios.length > 3 ? ` +${p.territorios.length - 3}` : ''}</span>
            </div>
          </div>
        </div>

        {p.cifras.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {p.cifras.map((c) => (
              <div key={c.label} className="border-l-4 border-l-secondary border border-neutral/10 bg-white p-5">
                <p className="font-heading text-4xl text-primary leading-none">{c.valor}</p>
                <p className="font-body text-sm text-neutral mt-2">{c.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-3xl space-y-10">
          <section>
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-4">El proyecto</p>
            <p className="font-body text-lg text-neutral leading-relaxed">{p.resumen}</p>
          </section>
        </div>

        {p.media?.galeria && p.media.galeria.length > 0 && (
          <div className="mt-14">
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-6">Así se ve en el territorio</p>
            {p.vistaGaleria === 'carrusel' ? (
              <ProyectoCarrusel images={p.media.galeria} nombre={p.nombre} />
            ) : (
              <ProyectoGallery images={p.media.galeria} nombre={p.nombre} />
            )}
          </div>
        )}

        <div className="max-w-3xl space-y-10 mt-14">
          <section>
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-4">Su paso por Voces y Agentes</p>
            <p className="font-body text-lg text-neutral leading-relaxed">{p.pasoPorVyA}</p>
          </section>

          {p.adaptacion && (
            <section>
              <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-4">Adaptación e implementación</p>
              <p className="font-body text-lg text-neutral leading-relaxed">{p.adaptacion}</p>
            </section>
          )}

          {p.liderazgo && (
            <section>
              <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-4">Fortalecimiento del liderazgo</p>
              <p className="font-body text-lg text-neutral leading-relaxed">{p.liderazgo}</p>
            </section>
          )}

          <blockquote className="bg-accent/10 border-l-4 border-l-accent p-8">
            <p className="font-heading text-2xl md:text-3xl text-neutral leading-snug">❝ {p.testimonio.texto} ❞</p>
            {p.testimonio.autor && <cite className="font-body text-sm text-neutral/70 not-italic block mt-4">— {p.testimonio.autor}</cite>}
          </blockquote>

          {p.consejo && (
            <section>
              <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-4">Para la siguiente generación</p>
              <p className="font-body text-lg text-neutral leading-relaxed">{p.consejo}</p>
            </section>
          )}

          {p.redes && p.redes.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {p.redes.map((r) => (
                <a key={r.tipo} href={r.url} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-extrabold uppercase tracking-wider text-secondary hover:text-primary border-2 border-secondary/30 hover:border-primary px-4 py-2 transition-colors">
                  {RED_LABEL[r.tipo] ?? r.tipo} ↗
                </a>
              ))}
            </div>
          )}

          <p className="font-body text-xs text-neutral/50 uppercase tracking-widest border-t border-neutral/10 pt-6">
            Fuente: {p.fuente}
          </p>
        </div>
      </SectionWrapper>

      {otros.length > 0 && (
        <SectionWrapper id="otros-proyectos" className="bg-surface" paddingClass="pb-20 md:pb-28">
          <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-6">Otras colectivas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otros.map((o) => (
              <Link key={o.slug} to={`/proyectos/${o.slug}`} className="group border border-neutral/10 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <p className="font-heading text-xl text-neutral uppercase group-hover:text-primary transition-colors">{o.nombre}</p>
                <p className="font-body text-sm text-neutral/70 mt-1">{ESTADO_LABEL[o.estado]}</p>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
