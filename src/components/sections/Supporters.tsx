import { SectionWrapper } from '../ui/SectionWrapper';
import goynLogo from '../../assets/goyn.webp';
import juventudesLogo from '../../assets/logo-juventudes.svg';

const supporters = [
  { name: 'Global Opportunity Youth Network (GOYN)', logo: goynLogo },
  { name: 'Secretaría de las Juventudes CDMX', logo: juventudesLogo }
];

export function Supporters() {
  return (
    <SectionWrapper id="aliados" className="bg-secondary" paddingClass="py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="font-heading text-sm uppercase tracking-[0.5em] text-surface">Aliadxs</p>
        <h2 className="font-heading text-4xl md:text-5xl text-surface leading-tight heading-balanced">La red que respalda Voces y Agentes</h2>
        <p className="font-body text-base md:text-lg text-surface/70 heading-balanced">
          Su acompañamiento permite brindar herramientas, cuidados y capital semilla a las juventudes del Valle de México.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {supporters.map((supporter) => (
          <div
            key={supporter.name}
            className="flex items-center justify-center h-32 min-w-50 max-w-65"
          >
            <img src={supporter.logo} alt={`Logo ${supporter.name}`} loading="lazy" className="max-h-16 w-auto object-contain brightness-0 invert" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
