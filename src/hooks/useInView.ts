import { useEffect, useRef, useState } from 'react';

type VisibilityCallback = () => void;

let sharedObserver: IntersectionObserver | null = null;
const pendingCallbacks = new Map<Element, VisibilityCallback>();

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const callback = pendingCallbacks.get(entry.target);
            if (callback) {
              callback();
              pendingCallbacks.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        }
      },
      // Revelar cuando el top del elemento cruza el 90% del viewport.
      // Un threshold por proporción (p.ej. 0.15) es una lotería geométrica:
      // en fichas altas el ratio inicial puede quedar por debajo del threshold
      // y el primer callback (el único si no hay scroll) llega con
      // isIntersecting: false → el elemento nunca se revela.
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );
  }
  return sharedObserver;
}

export function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();

    pendingCallbacks.set(el, () => setIsVisible(true));
    observer.observe(el);

    return () => {
      pendingCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return { ref, isVisible };
}
