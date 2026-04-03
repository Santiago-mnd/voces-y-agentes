import { Navbar } from './components/sections/Navbar';
import { FloatingRegistrationButton } from './components/ui/FloatingRegistrationButton';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Objective } from './components/sections/Objective';
import { Participation } from './components/sections/Participation';
// import { Initiatives } from './components/sections/Initiatives';
import { Schedule } from './components/sections/Schedule';
import { Registration } from './components/sections/Registration';
import { Supporters } from './components/sections/Supporters';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';

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
      <Footer />
      <FloatingRegistrationButton />
    </div>
  );
}

export default App;
