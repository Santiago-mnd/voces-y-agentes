import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Objective } from './components/sections/Objective';
import { Participation } from './components/sections/Participation';
// import { Initiatives } from './components/sections/Initiatives';
import { Schedule } from './components/sections/Schedule';
import { Registration } from './components/sections/Registration';
import { Supporters } from './components/sections/Supporters';
import { FAQ } from './components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body relative overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:bg-secondary focus:text-surface focus:px-4 focus:py-2 focus:font-body focus:font-extrabold"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" className="grow relative">
        <Hero />
        <About />
        <Objective />
        <Participation />
        {/* <Initiatives /> */}
        <Schedule />
        <Registration />
        <Supporters />
        <FAQ />
      </main>
      <footer className="bg-secondary py-8 text-center text-surface font-body border-t-4 border-accent space-y-2">
        <p className=" text-surface">&copy; {new Date().getFullYear()} Voces y Agentes.</p>
        <p className="text-sm text-surface">
          Este micrositio alojado en goynmexico.org se apega al{' '}
          <a
            href="https://youthbuildmexico.org/aviso-de-privacidad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-soft underline decoration-2 decoration-primary-soft"
          >
            aviso de privacidad de GOYN
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
