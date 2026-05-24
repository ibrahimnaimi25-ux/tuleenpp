'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

const marqueeText = 'SOCIAL MEDIA STRATEGY · CONTENT CREATION · CAMPAIGN PLANNING · PAID ADVERTISING · BRAND STORYTELLING · CREATIVE MARKETING · ';

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const headlineLines = [
    { text: 'Digital', italic: false, delay: 0.2 },
    { text: 'Marketing', italic: true, delay: 0.36 },
    { text: '& Social', italic: false, delay: 0.52 },
    { text: 'Strategy.', italic: false, delay: 0.68, gold: true },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0A0A] flex flex-col"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" aria-hidden="true" />

      {/* ── PHOTO (right half, directly in section) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ y: imgY }}
        transition={{ delay: 0.8, duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full z-0"
      >
        <img
          src="/tuleen.jpeg"
          alt="Tuleen Rezek"
          className="w-full h-full object-cover object-top"
        />
        {/* fade left edge into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        {/* fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
        {/* gold corner marks */}
        <div className="absolute top-24 right-8 w-7 h-7 border-t border-r border-gold/30" />
        <div className="absolute bottom-20 right-8 w-7 h-7 border-b border-r border-gold/30" />
        {/* name tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="absolute bottom-8 left-8 px-4 py-2 border border-white/[0.08] bg-black/50 backdrop-blur-sm"
        >
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted">
            Tuleen Rezek · Amman, Jordan
          </p>
        </motion.div>
      </motion.div>

      {/* ── TEXT (left half) ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col justify-center flex-1 px-6 md:px-16 lg:px-24 pt-20 w-full lg:w-[58%]"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-center gap-3 mb-10 md:mb-14"
        >
          <div className="hr-gold" />
          <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">
            Marketing Portfolio · 2025
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10 md:mb-14">
          {headlineLines.map((line, i) => (
            <div key={i} className="clip-reveal overflow-hidden">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ delay: 1.8 + line.delay, duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
                className={`leading-[0.92] tracking-[-0.02em] font-display font-light
                  text-[13vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7vw]
                  ${line.italic ? 'italic' : ''}
                  ${line.gold ? 'text-gold glow-text-gold' : 'text-cream'}
                `}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Buttons + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-14"
        >
          <p className="font-sans text-cream-muted text-sm leading-[1.8] max-w-[240px] font-light">
            Helping brands create<br />
            engaging digital experiences<br />
            through strategy-driven content.
          </p>

          <div className="flex items-center gap-5">
            <MagneticButton strength={0.4}>
              <button
                onClick={() => scrollTo('#work')}
                className="font-sans text-[11px] tracking-[0.3em] uppercase font-medium px-8 py-4 bg-gold text-black hover:bg-gold-light transition-colors duration-300"
              >
                View Work
              </button>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <button
                onClick={() => scrollTo('#contact')}
                className="font-sans text-[11px] tracking-[0.3em] uppercase text-cream-muted hover:text-cream transition-colors duration-300 border-b border-cream-muted/30 pb-0.5 hover:border-cream"
              >
                Get in Touch
              </button>
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.8 }}
        className="absolute left-6 md:left-14 bottom-16 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-cream-muted rotate-90 origin-center mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>

      {/* Bottom marquee */}
      <div className="relative z-10 border-t border-white/[0.05] py-4 overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-inner text-cream/[0.15] font-sans text-[10px] tracking-[0.4em] uppercase">
            {marqueeText.repeat(6)}
          </div>
        </div>
      </div>
    </section>
  );
}
