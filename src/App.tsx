import { BrowserRouter, Routes, Route } from 'react-router';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { Home } from './pages/Home';
import { NuestrosAntecedentes } from './pages/NuestrosAntecedentes';
import { NotFound } from './pages/NotFound';
import { Proyectos } from './pages/Proyectos';
import { ProyectoDetalle } from './pages/ProyectoDetalle';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-body relative overflow-x-clip">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:bg-secondary focus:text-surface focus:px-4 focus:py-2 focus:font-body focus:font-extrabold"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuestros-antecedentes" element={<NuestrosAntecedentes />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;