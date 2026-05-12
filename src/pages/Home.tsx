import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Objective } from '../components/sections/Objective';
import { Participation } from '../components/sections/Participation';
import { Schedule } from '../components/sections/Schedule';
import { Registration } from '../components/sections/Registration';
import { Requirements } from '../components/sections/Requirements';
import { Supporters } from '../components/sections/Supporters';
import { FAQ } from '../components/sections/FAQ';

export function Home() {
  const location = useLocation();
  const [showRequirements, setShowRequirements] = useState(() => window.location.hash === '#requisitos');

  // Handle initial scroll when hash is #requisitos on mount
  useEffect(() => {
    if (window.location.hash === '#requisitos') {
      setTimeout(() => {
        document.getElementById('requisitos')?.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    }
  }, []);

  // Handle scroll for other hashes
  useEffect(() => {
    if (location.hash && location.hash !== '#requisitos') {
      const id = location.hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.hash]);

  const handleToggleRequirements = () => {
    setShowRequirements((prev) => {
      const next = !prev;
      if (next) {
        // Opening: update URL hash without triggering native scroll
        history.pushState(null, '', '#requisitos');
        // Scroll after animation completes
        setTimeout(() => {
          document.getElementById('requisitos')?.scrollIntoView({ behavior: 'smooth' });
        }, 600);
      } else {
        // Closing: remove hash from URL
        history.pushState(null, '', window.location.pathname);
      }
      return next;
    });
  };

  return (
    <>
      <Hero />
      <About />
      <Objective />
      <Participation />
      <Schedule />
      <Registration
        showRequirements={showRequirements}
        onToggleRequirements={handleToggleRequirements}
      />
      <Requirements isOpen={showRequirements} />
      <Supporters />
      <FAQ />
    </>
  );
}
