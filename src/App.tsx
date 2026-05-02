import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { Home } from './pages/Home';
import { Requisitos } from './pages/Requisitos';

function App() {
  return (
    <BrowserRouter>
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
            <Route path="/requisitos" element={<Requisitos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;