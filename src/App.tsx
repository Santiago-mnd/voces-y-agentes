import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Objective } from './components/sections/Objective';
import { Participation } from './components/sections/Participation';
// import { Initiatives } from './components/sections/Initiatives';
import { Schedule } from './components/sections/Schedule';
import { Contact } from './components/sections/Contact';
import { FAQ } from './components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body relative overflow-x-hidden">
      <Navbar />
      <main className="grow relative">
        <Hero />
        <About />
        <Objective />
        <Participation />
        {/* <Initiatives /> */}
        <Schedule />
        <Contact />
        <FAQ />
      </main>
      <footer className="bg-slate-900 py-8 text-center text-slate-400 font-body border-t-4 border-naranja">
        <p>&copy; {new Date().getFullYear()} Voces y Agentes. Lorem ipsum dolor sit.</p>
      </footer>
    </div>
  );
}

export default App;
