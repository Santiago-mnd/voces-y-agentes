import { useEffect, useState } from 'react';
import { usePostHog } from '@posthog/react';

const registrationLink = 'https://forms.office.com/Pages/ResponsePage.aspx?id=IuM32_rpj0CWUe-e0ST4bn6LKNdmFmZIi6Vw_xmxOkBUQVdaV0RRQ0wwUE5HV0lYTVBXU1Y5VDZVUS4u';

export function FloatingRegistrationButton() {
  const posthog = usePostHog();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('registro');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={registrationLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture('click_registro_flotante')}
      aria-label="Ir al formulario de registro"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button className="bg-accent text-surface font-body font-extrabold text-sm uppercase tracking-widest px-6 py-4 shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary cursor-pointer">
        <span className="sm:hidden">¡Regístrate!</span>
        <span className="hidden sm:inline">Únete al registro ↗</span>
      </button>
    </a>
  );
}
