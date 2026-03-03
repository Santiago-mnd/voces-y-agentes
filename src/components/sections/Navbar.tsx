import vyaText from '../../assets/vya.svg';

export function Navbar() {
  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Quiénes somos', href: '#about' },
    { name: 'Nuestro objetivo', href: '#objective' },
    { name: 'Iniciativas', href: '#initiatives' },
    { name: 'Únete', href: '#contact' },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center flex-shrink-0">
            <a href="#hero" className="flex items-center gap-3 group">
              <div
                className="h-10 w-48 bg-[#0969a7] transition-transform group-hover:-rotate-2 group-hover:scale-105"
                style={{
                  WebkitMaskImage: `url(${vyaText})`,
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskImage: `url(${vyaText})`,
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'contain'
                }}
                aria-label="Voces y Agentes"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-title text-xl font-bold text-gray-700 hover:text-[#ff7300] hover:underline decoration-4 underline-offset-8 decoration-[#0969a7] transition-all uppercase tracking-widest leading-none"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
