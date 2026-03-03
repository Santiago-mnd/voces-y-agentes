import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';

export function Initiatives() {
  const initiatives = [
    {
      title: 'Iniciativa Alpha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      color: 'bg-[#ff7300]'
    },
    {
      title: 'Proyecto Beta',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      color: 'bg-[#13853c]'
    },
    {
      title: 'Programa Gamma',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      color: 'bg-[#0969a7]'
    }
  ];

  return (
    <SectionWrapper id="initiatives" className="bg-[#f4f1e8] py-24 md:py-32">
      <div className="text-center mb-20">
        <h2 className="font-title text-center text-5xl md:text-6xl text-[#0969a7] mb-6 uppercase tracking-[0.028em] leading-tight">Nuestras Iniciativas</h2>
        <p className="font-body text-lg md:text-xl lg:text-2xl text-slate-900 max-w-full mx-auto font-normal px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative, index) => (
          <Card key={index} className={`flex flex-col h-full rounded-none ${initiative.color}`}>
            <div className={`pt-12 pb-6 px-12 flex items-center justify-center`}>
              <span className="font-title text-center text-4xl text-[#f4f1e8] uppercase tracking-[0.028em] leading-tight">
                {initiative.title}
              </span>
            </div>
            <div className="px-12 pb-16 flex-grow flex flex-col">
              <h3 className="font-title text-center text-xl text-[#f4f1e8] mb-4 tracking-[0.028em] leading-tight">{initiative.title}</h3>
              <p className="font-body text-lg md:text-xl lg:text-2xl text-[#f4f1e8] flex-grow leading-relaxed font-normal">
                {initiative.description}
              </p>
              <div className="mt-auto pt-6">
                <a href="#" className="font-body font-extrabold text-[#fdb725] hover:text-[#fff] transition-colors uppercase tracking-wider text-sm flex items-center">
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
