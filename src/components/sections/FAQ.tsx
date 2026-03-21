import { useEffect, useState } from 'react';
import { usePostHog } from '@posthog/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { InteractiveDecoration } from '../ui/InteractiveDecoration';
import deco1 from '../../assets/decorations/01.svg';

const faqs = [
  {
    question: '¿Qué es el capital semilla y cómo lo obtengo?',
    answer:
      'Es un fondo del Youth Innovation Fund (~$500 USD) para proyectos diseñados dentro del laboratorio. Tu colectiva debe cumplir con la asistencia mínima y demostrar que atiende una necesidad real del territorio.'
  },
  {
    question: '¿Tengo que pagar por el programa?',
    answer: 'No. La única inversión es tu tiempo, creatividad y compromiso con la comunidad.'
  },
  {
    question: '¿Puedo participar si mi proyecto tiene fines partidistas?',
    answer: 'No. Somos estrictamente apartidistas y no aceptamos iniciativas de proselitismo o afiliación electoral.'
  },
  {
    question: '¿Cuánto dura el proceso?',
    answer:
      'Son 12 módulos formativos (T0–T11) en formato híbrido: sesiones presenciales en tu demarcación y refuerzos en línea.'
  },
  {
    question: '¿Necesito llegar con un colectivo armado?',
    answer:
      'No. VyA es un espacio para articularte con otras personas y formar una célula de incidencia en el camino.'
  },
  {
    question: '¿Qué obtengo al finalizar?',
    answer:
      'Además del financiamiento potencial, recibes certificación técnica en monitoreo, evaluación y procuración de fondos, y entras a la red regional de líderes juveniles.'
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const posthog = usePostHog();
  const [open, setOpen] = useState(false);
  const contentId = `faq-panel-${index}`;

  return (
    <div className="bg-surface shadow-sm border border-neutral/10 border-l-4 border-l-secondary">
      <h3>
        <button
          id={`faq-trigger-${index}`}
          type="button"
          onClick={() => setOpen((prev) => {
            if (!prev) posthog.capture('faq_opened', { question });
            return !prev;
          })}
          className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
          aria-expanded={open}
          aria-controls={contentId}
        >
          <span className="font-heading text-xl text-secondary">{question}</span>
          <span
            className={`font-heading text-3xl text-secondary transition-transform duration-300 ease-out ${open ? 'rotate-45' : ''}`}
            aria-hidden
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        className={`px-6 pr-10 ${open ? 'max-h-125 opacity-100 pb-6' : 'max-h-0 opacity-0'} transition-all duration-500 ease-out overflow-hidden`}
      >
        <p className="font-body text-base md:text-lg text-neutral">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  useEffect(() => {
    const schemaId = 'faq-structured-data';
    const existing = document.getElementById(schemaId);
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = schemaId;
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <SectionWrapper id="faq" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <InteractiveDecoration src={deco1} alt="" className="absolute right-4 top-6 w-20 md:w-32 opacity-20 rotate-12" />
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <h2 className="font-heading text-4xl md:text-5xl text-neutral leading-tight text-center">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} index={index} {...faq} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
