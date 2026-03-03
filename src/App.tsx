import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Objective } from './components/sections/Objective';
import { Initiatives } from './components/sections/Initiatives';
import { Contact } from './components/sections/Contact';

import deco2 from './assets/decorations/02.svg';
import deco3 from './assets/decorations/03.svg';
import deco4 from './assets/decorations/04.svg';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow relative">
        {/* Global Floating Decorations */}
        <img src={deco2} alt="" className="absolute right-0 top-[25%] w-96 opacity-20 -z-10 rotate-12 pointer-events-none" />
        <img src={deco3} alt="" className="absolute -left-32 top-[55%] w-[500px] opacity-30 -z-10 -rotate-6 pointer-events-none" />
        <img src={deco4} alt="" className="absolute -right-20 top-[85%] w-72 opacity-20 -z-10 rotate-45 pointer-events-none" />
        <Hero />
        <About />
        <Objective />
        <Initiatives />
        <Contact />
      </main>
      <footer className="bg-slate-900 py-8 text-center text-slate-400 font-body border-t-4 border-naranja">
        <p>&copy; {new Date().getFullYear()} Voces y Agentes. Lorem ipsum dolor sit.</p>
      </footer>
    </div>
  );
}

export default App;
