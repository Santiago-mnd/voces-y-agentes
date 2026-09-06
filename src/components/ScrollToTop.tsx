import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Scroll al top en cada navegación de ruta: instantáneo + el fade-in del
// contenedor de rutas (animate-page-in) cubre el salto. Un scroll smooth
// aquí se cancela con el re-render y deja al usuario a mitad de página.
// Excepción: si la URL trae hash (#calendario, #about...) el scroll lo
// maneja la página destino, no esto.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
