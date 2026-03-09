import { SectionWrapper } from '../ui/SectionWrapper';
import goynLogo from '../../assets/goyn.webp';
import juventudesLogo from '../../assets/juventudes.webp';

const supporters = [
  { name: 'Global Opportunity Youth Network (GOYN)', logo: goynLogo },
  { name: 'Secretaría de las Juventudes CDMX', logo: juventudesLogo }
];

export function Supporters() {
  return (
    <SectionWrapper id="aliados" className="bg-crema" paddingClass="py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="font-title text-sm uppercase tracking-[0.5em] text-azul">Aliadxs</p>
        <h2 className="font-title text-4xl md:text-5xl text-[#0f172a] leading-tight heading-balanced">La red que respalda Voces y Agentes</h2>
        <p className="font-body text-base md:text-lg text-slate-700 heading-balanced">
          Su acompañamiento permite brindar herramientas, cuidados y capital semilla a las juventudes del Valle de México. Mantén este bloque actualizado conforme se sumen más organizaciones.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {supporters.map((supporter) => (
          <div
            key={supporter.name}
            className="bg-white border border-slate-200 p-6 flex items-center justify-center h-32 min-w-[200px] max-w-[260px] shadow-[0_12px_35px_-25px_rgba(15,23,42,0.5)]"
          >
            <img src={supporter.logo} alt={`Logo ${supporter.name}`} loading="lazy" className="max-h-16 w-auto object-contain" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
