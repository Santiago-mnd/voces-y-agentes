import { useEffect, useRef, useState } from 'react';

type VisibilityCallback = () => void;

let sharedObserver: IntersectionObserver | null = null;
const pendingCallbacks = new Map<Element, VisibilityCallback>();

function getSharedObserver(threshold: number): IntersectionObserver {
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
      { threshold }
    );
  }
  return sharedObserver;
}

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver(threshold);

    pendingCallbacks.set(el, () => setIsVisible(true));
    observer.observe(el);

    return () => {
      pendingCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, [threshold]);

  return { ref, isVisible };
}