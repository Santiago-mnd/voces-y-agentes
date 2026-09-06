import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePostHog } from '@posthog/react';

interface GalleryBaseProps {
  images: string[];
  nombre: string;
}

interface LightboxProps extends GalleryBaseProps {
  index: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}

// Lightbox controlado: overlay full-viewport con portal al body (immune a
// ancestros con transform, que rompen position:fixed).
function Lightbox({ images, nombre, index, onClose, onStep }: LightboxProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose, onStep]);

  return createPortal(
    <div
      className="fixed inset-0 z-100 bg-neutral/95 flex flex-col items-center justify-center p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${nombre}`}
      onClick={onClose}
    >
      <div className="absolute top-4 right-5 left-5 flex items-center justify-between text-surface" onClick={(e) => e.stopPropagation()}>
        <p className="font-heading text-sm uppercase tracking-[0.4em]">
          {nombre} — {index + 1}/{images.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar galería"
          className="font-heading text-3xl leading-none hover:opacity-70 transition-opacity cursor-pointer"
        >
          ✕
        </button>
      </div>

      <img
        src={images[index]}
        alt={`${nombre} — foto ${index + 1}`}
        className="max-h-[78vh] max-w-full object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onStep(-1); }}
            aria-label="Foto anterior"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-surface text-neutral font-heading text-2xl hover:bg-secondary hover:text-surface transition-colors cursor-pointer"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onStep(1); }}
            aria-label="Foto siguiente"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-surface text-neutral font-heading text-2xl hover:bg-secondary hover:text-surface transition-colors cursor-pointer"
          >
            ›
          </button>
        </>
      )}

      <p className="absolute bottom-4 font-body text-xs text-surface/70 uppercase tracking-widest" onClick={(e) => e.stopPropagation()}>
        Fuente: ficha de registro VyA
      </p>
    </div>,
    document.body
  );
}

// Vista GRID: todas las fotos visibles en mosaico 4:3, click abre lightbox.
export function ProyectoGallery({ images, nombre }: GalleryBaseProps) {
  const posthog = usePostHog();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const step = useCallback((dir: 1 | -1) => {
    setOpenIndex((prev) => {
      if (prev === null) return prev;
      const next = (prev + dir + images.length) % images.length;
      posthog.capture('gallery_navigate', { proyecto: nombre, foto: next + 1 });
      return next;
    });
  }, [images.length, nombre, posthog]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => { setOpenIndex(i); posthog.capture('gallery_open', { proyecto: nombre, total: images.length, vista: 'grid' }); }}
            className="group relative aspect-[4/3] overflow-hidden border border-neutral/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 cursor-pointer"
            aria-label={`Abrir foto ${i + 1} de ${images.length} de ${nombre}`}
          >
            <img
              src={src.replace(/(galeria-\d+)\.webp$/, '$1-640.webp')}
              srcSet={`${src.replace(/(galeria-\d+)\.webp$/, '$1-640.webp')} 640w, ${src} 1200w`}
              sizes="(min-width: 768px) 350px, 50vw"
              alt={`${nombre} — foto ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" aria-hidden="true" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          nombre={nombre}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onStep={step}
        />
      )}
    </>
  );
}

// Vista CARRUSEL: una foto a la vez, contenido (max-w-4xl), 4:3, flechas + swipe táctil + dots.
// Sin autoplay: nada se mueve solo (regla de la casa). srcset 640w/1200w.
export function ProyectoCarrusel({ images, nombre }: GalleryBaseProps) {
  const posthog = usePostHog();
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const startX = useRef<number | null>(null);

  const go = useCallback((next: number, metodo: string) => {
    const wrapped = (next % images.length + images.length) % images.length;
    setIdx(wrapped);
    posthog.capture('carrusel_navigate', { proyecto: nombre, foto: wrapped + 1, metodo });
  }, [images.length, nombre, posthog]);

  const step = useCallback((dir: 1 | -1) => go(idx + dir, 'flecha'), [go, idx]);

  const onPointerDown = (e: React.PointerEvent) => { startX.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) < 40) return;
    go(idx + (dx < 0 ? 1 : -1), 'swipe');
  };

  if (images.length === 0) return null;

  const thumb = (src: string) => src.replace(/(galeria-\d+)\.webp$/, '$1-640.webp');

  return (
    <>
      <div className="relative max-w-3xl mx-auto">
        <div
          className="overflow-hidden border border-neutral/10 select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => { setLightbox(true); posthog.capture('gallery_open', { proyecto: nombre, total: images.length, vista: 'carrusel' }); }}
                className="w-full flex-none aspect-[4/3] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                aria-label={`Ampliar foto ${i + 1} de ${images.length}`}
              >
                <img
                  src={thumb(src)}
                  srcSet={`${thumb(src)} 640w, ${src} 1200w`}
                  sizes="(min-width: 896px) 768px, 100vw"
                  alt={`${nombre} — foto ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </button>
            ))}
          </div>

          <span className="absolute top-3 right-3 bg-neutral/70 text-surface font-body text-xs font-extrabold px-2.5 py-1 pointer-events-none">
            {idx + 1}/{images.length}
          </span>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-surface/90 text-neutral font-heading text-2xl hover:bg-secondary hover:text-surface transition-colors cursor-pointer shadow"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Foto siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-surface/90 text-neutral font-heading text-2xl hover:bg-secondary hover:text-surface transition-colors cursor-pointer shadow"
              >
                ›
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => go(i, 'dot')}
                aria-label={`Ir a foto ${i + 1}`}
                aria-current={i === idx}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === idx ? 'w-6 bg-secondary' : 'w-2.5 bg-neutral/30 hover:bg-neutral/50'}`}
              />
            ))}
          </div>
        )}

        <p className="font-body text-xs text-neutral/50 mt-3 text-center">Desliza o usa las flechas — click para ampliar</p>
      </div>

      {lightbox && (
        <Lightbox
          images={images}
          nombre={nombre}
          index={idx}
          onClose={() => setLightbox(false)}
          onStep={(dir) => {
            const next = (idx + dir + images.length) % images.length;
            setIdx(next);
            posthog.capture('gallery_navigate', { proyecto: nombre, foto: next + 1 });
          }}
        />
      )}
    </>
  );
}
