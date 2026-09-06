import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { setPageMeta } from '../lib/meta';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Objective } from '../components/sections/Objective';
import { Participation } from '../components/sections/Participation';
import { Schedule } from '../components/sections/Schedule';
import { Registration } from '../components/sections/Registration';
import { Supporters } from '../components/sections/Supporters';
import { FAQ } from '../components/sections/FAQ';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    setPageMeta({
      title: 'Voces y Agentes | Laboratorio juvenil GOYN México',
      description: 'Voces y Agentes (VyA) es el laboratorio juvenil de GOYN México que impulsa a jóvenes oportunidad de Iztapalapa, Cuauhtémoc y Ecatepec para pasar de la organización comunitaria a la incidencia política.',
      path: '/',
    });
  }, []);

  // Handle scroll for hashes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Objective />
      <Participation />
      <Schedule />
      <Registration />
      <Supporters />
      <FAQ />
    </>
  );
}
