'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lenis;
    let gsap;
    let ScrollTrigger;

    async function initScroll() {
      const LenisModule = await import('lenis');
      const LenisClass = LenisModule.default;
      const gsapModule = await import('gsap');
      const ScrollTriggerModule = await import('gsap/ScrollTrigger');

      gsap = gsapModule.default || gsapModule.gsap;
      ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      lenis = new LenisClass({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.1,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }

    initScroll();

    return () => {
      if (lenis) lenis.destroy();
      if (gsap && ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return <>{children}</>;
}
