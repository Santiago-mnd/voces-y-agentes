import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Scroll al top en cada navegación de ruta. Excepción: si la URL trae hash
// (#calendario, #about...) el scroll lo maneja la página destino, no esto.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
