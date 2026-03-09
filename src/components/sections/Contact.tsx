import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import type { FormEvent } from 'react';
import deco1 from '../../assets/decorations/01.svg';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';

const cycles = ['Raíces', 'Terreno', 'Herramientas', 'Proyección'];

export function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Connect to backend API
    console.log('Form submitted');
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
  };

  return (
    <SectionWrapper
      id="contact"
      className="bg-crema mt-14 md:mt-20"
      diagonal="left"
      diagonalColor="#fdb725"
      fullWidth
      paddingClass="py-16 md:py-24"
    >
      <InteractiveDecoration src={deco1} alt="" className="absolute left-5 bottom-5 w-24 md:w-32 opacity-70 z-0 rotate-90" />

      <div className="max-w-4xl mx-auto relative z-10 bg-[#f4f1e8] p-12 md:p-24">
        <div className="text-center mb-12 space-y-4">
          <p className="font-title text-sm uppercase tracking-[0.4em] text-[#0969a7]">Registro abierto</p>
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ff7300] uppercase tracking-[0.028em] leading-tight md:leading-[1.3] break-words hyphens-auto heading-balanced">Únete al movimiento</h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-slate-900">
            ¿Listo para que tu voz sea el agente de cambio que tu barrio necesita? Déjanos tus datos y agenda una llamada de orientación.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="block font-title text-lg uppercase tracking-widest text-slate-900 leading-tight">Nombre completo</label>
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
              <label htmlFor="email" className="block font-title text-lg uppercase tracking-widest text-slate-900 leading-tight">Correo electrónico</label>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="territory" className="block font-title text-lg uppercase tracking-widest text-slate-900 leading-tight">Territorio</label>
              <input
                type="text"
                id="territory"
                name="territory"
                required
                className="w-full px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0969a7] font-body bg-white text-lg font-normal transition-all"
                placeholder="Ej. Iztapalapa, Barrio San Pedro"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="cycle" className="block font-title text-lg uppercase tracking-widest text-slate-900 leading-tight">Ciclo de interés</label>
              <select
                id="cycle"
                name="cycle"
                required
                className="w-full px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0969a7] font-body bg-white text-lg font-normal transition-all"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona un ciclo
                </option>
                {cycles.map((cycle) => (
                  <option key={cycle} value={cycle}>
                    {cycle}
                  </option>
                ))}
              </select>
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
              placeholder="Cuéntanos sobre tu colectivo o la idea que quieres impulsar."
            ></textarea>
          </div>

          <div className="space-y-4">
            <label className="flex items-start gap-4 text-left">
              <input type="checkbox" required className="mt-1 h-5 w-5 text-[#0969a7]" />
              <span className="font-body text-base text-slate-900">
                Confirmo que puedo cubrir al menos el 75% de las sesiones híbridas y que mi iniciativa es apartidista.
              </span>
            </label>
            <p className="text-sm text-slate-500">
              Al enviar aceptas que nos comuniquemos contigo para compartir el calendario detallado y acompañamiento personalizado.
            </p>
          </div>

          <div className="pt-6 text-center">
            <Button type="submit" className="w-full md:w-auto px-16 py-5 bg-[#1a8533] hover:brightness-110 text-white text-xl font-extrabold uppercase tracking-widest transition-all">
              Enviar mensaje
            </Button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
}
