import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Scroll al top en cada navegación de ruta + fade-in del contenido.
//
// Por qué no una animación CSS en el contenedor: al navegar, React
// re-renderiza y hace scrollTo en el mismo frame; el batching del navegador
// puede congelar la animación CSS en su frame 0 (opacity 0) hasta la
// siguiente interacción — se ve como "brinco" o página invisible.
// La Web Animations API arranca fuera de ese batching y el fade siempre corre.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({ top: 0, behavior: 'instant' });
    const main = document.getElementById('main-content');
    if (main && typeof main.animate === 'function') {
      main.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 350, easing: 'ease-out' }
      );
    }
  }, [pathname, hash]);

  return null;
}
