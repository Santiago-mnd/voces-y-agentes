import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Objective } from './components/sections/Objective';
import { Initiatives } from './components/sections/Initiatives';
import { Contact } from './components/sections/Contact';



function App() {
  return (
    <div className="min-h-screen flex flex-col font-body relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow relative">
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
