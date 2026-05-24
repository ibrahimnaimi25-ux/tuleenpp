'use client';

import dynamic from 'next/dynamic';
import SmoothScroll from '../components/SmoothScroll';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Skills from '../components/sections/Skills';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const CustomCursor = dynamic(() => import('../components/CustomCursor'), { ssr: false });
const Loader = dynamic(() => import('../components/Loader'), { ssr: false });

export default function Page() {
  return (
    <SmoothScroll>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <div className="noise-overlay" aria-hidden="true" />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
