import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';

export function Initiatives() {
  const initiatives = [
    {
      title: 'Iniciativa Alpha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      color: 'bg-naranja'
    },
    {
      title: 'Proyecto Beta',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      color: 'bg-verde'
    },
    {
      title: 'Programa Gamma',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      color: 'bg-rosa'
    }
  ];

  return (
    <SectionWrapper id="initiatives" className="bg-[#f4f1e8] border-b-4 border-slate-900 py-24 md:py-32">
      <div className="text-center mb-20">
        <h2 className="font-title text-5xl md:text-6xl text-[#0969a7] mb-6 font-black uppercase tracking-tight drop-shadow-[4px_4px_0px_rgba(15,23,42,0.1)]">Nuestras Iniciativas</h2>
        <p className="font-body text-xl md:text-2xl text-slate-900 max-w-3xl mx-auto font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative, index) => (
          <Card key={index} className="flex flex-col h-full !rounded-none !border-2">
            <div className={`h-48 ${initiative.color} border-b-4 border-slate-900 flex items-center justify-center`}>
              <span className="font-title text-4xl text-slate-900 px-6 text-center font-black uppercase drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                {initiative.title}
              </span>
            </div>
            <div className="p-8 flex-grow flex flex-col bg-[#f4f1e8]">
              <h3 className="font-title text-3xl text-slate-900 mb-4 font-black">{initiative.title}</h3>
              <p className="font-body text-lg text-slate-900 flex-grow leading-relaxed font-semibold">
                {initiative.description}
              </p>
              <div className="mt-6">
                <a href="#" className="font-body font-bold text-naranja hover:text-orange-700 transition-colors uppercase tracking-wider text-sm flex items-center">
                  Leer más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
