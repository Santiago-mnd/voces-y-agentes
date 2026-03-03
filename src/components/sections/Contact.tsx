import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import type { FormEvent } from 'react';

export function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Connect to backend API
    console.log('Form submitted');
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
  };

  return (
    <SectionWrapper id="contact" className="bg-transparent relative z-10 pt-24 pb-48 md:pt-32 md:pb-64 border-0">
      <div className="absolute inset-0 bg-[#fdb725] skew-y-2 transform origin-bottom-right -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10 bg-[#f4f1e8] p-12 md:p-24 transform -skew-y-0">
        <div className="text-center mb-12">
          <h2 className="font-title text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ff7300] mb-8 uppercase tracking-[0.028em] leading-tight md:leading-[1.3] break-words hyphens-auto">Únete al Movimiento</h2>
          <p className="font-body text-xs sm:text-sm md:text-xl lg:text-2xl text-slate-900 font-normal max-w-full mx-auto whitespace-nowrap truncate px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="block font-title text-lg uppercase tracking-widest text-slate-900 leading-tight">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0969a7] font-body bg-white text-lg font-normal transition-all"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="block font-title text-lg uppercase tracking-widest text-slate-900 leading-tight">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0969a7] font-body bg-white text-lg font-normal transition-all"
                placeholder="ejemplo@correo.com"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="block font-title text-lg uppercase tracking-widest text-slate-900 leading-tight">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0969a7] font-body bg-white text-lg font-normal resize-none transition-all"
              placeholder="¿Cómo te gustaría colaborar con nosotros?"
            ></textarea>
          </div>

          <div className="pt-6 text-center">
            <Button type="submit" className="w-full md:w-auto px-16 py-5 bg-[#1a8533] hover:brightness-110 text-white text-xl font-extrabold uppercase tracking-widest transition-all">
              Enviar Mensaje
            </Button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
}
