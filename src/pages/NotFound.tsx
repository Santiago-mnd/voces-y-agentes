import { Link } from 'react-router';

export function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary mb-4">Error 404</p>
      <h1 className="font-heading text-4xl md:text-5xl text-neutral uppercase tracking-[0.028em] leading-tight heading-balanced mb-6">
        Esta página no existe
      </h1>
      <p className="font-body text-lg text-neutral max-w-md leading-relaxed mb-10">
        Puede que la dirección haya cambiado o que la página ya no esté disponible.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center font-body px-6 py-3 transition-opacity duration-200 font-extrabold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary cursor-pointer bg-primary text-surface hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
