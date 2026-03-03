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
      {/* Background diagonal */}
      <div className="absolute inset-0 bg-[#fceb54] skew-y-2 transform origin-bottom-right border-t-4 border-slate-900 -z-10 shadow-[0_-16px_0_0_rgba(15,23,42,1)]"></div>

      <div className="max-w-4xl mx-auto relative z-10 bg-[#f4f1e8] border-4 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] p-8 md:p-16 transform -skew-y-0">
        <div className="text-center mb-12">
          <h2 className="font-title text-5xl md:text-6xl text-[#ff7300] mb-6 font-black uppercase drop-shadow-[3px_3px_0px_rgba(15,23,42,1)]">Únete al Movimiento</h2>
          <p className="font-body text-xl text-slate-900 font-bold max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="block font-title text-lg uppercase tracking-wider font-black text-slate-900">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-5 py-4 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:translate-y-[2px] focus:translate-x-[2px] focus:shadow-none font-body bg-white text-lg font-bold transition-all"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="block font-title text-lg uppercase tracking-wider font-black text-slate-900">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-5 py-4 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:translate-y-[2px] focus:translate-x-[2px] focus:shadow-none font-body bg-white text-lg font-bold transition-all"
                placeholder="ejemplo@correo.com"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="block font-title text-lg uppercase tracking-wider font-black text-slate-900">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-5 py-4 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:translate-y-[2px] focus:translate-x-[2px] focus:shadow-none font-body bg-white text-lg font-bold resize-none transition-all"
              placeholder="¿Cómo te gustaría colaborar con nosotros?"
            ></textarea>
          </div>

          <div className="pt-6 text-center">
            <Button type="submit" className="w-full md:w-auto px-16 py-5 bg-[#1a8533] hover:bg-[#126b27] text-white text-xl uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
              Enviar Mensaje
            </Button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
}
