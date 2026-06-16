'use client';

import dynamic from 'next/dynamic';
import SmoothScroll from '../components/SmoothScroll';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Achievements from '../components/sections/Achievements';
import Experience from '../components/sections/Experience';
import Work from '../components/sections/Work';
import StatsBanner from '../components/sections/StatsBanner';
import Skills from '../components/sections/Skills';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import { LanguageProvider } from '../lib/LanguageContext';

const Loader = dynamic(() => import('../components/Loader'), { ssr: false });

export default function Page() {
  return (
    <LanguageProvider>
    <SmoothScroll>
      <Loader />
      <ScrollProgress />
      <Navigation />
      <div className="noise-overlay" aria-hidden="true" />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Work />
        <StatsBanner />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </SmoothScroll>
    </LanguageProvider>
  );
}
