import { useEffect } from 'react';
import { useLocation } from 'react-router';
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