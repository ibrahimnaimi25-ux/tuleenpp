'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '../../lib/content';

const { stats } = content.about;

function StatItem({ value, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="flex flex-col items-center text-center px-6 py-10 md:py-0"
    >
      <p className="font-display font-light text-gold glow-text-gold leading-none mb-3"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
        {value}
      </p>
      <p className="font-sans text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-cream-muted">
        {label}
      </p>
    </motion.div>
  );
}

// Full-width interstitial banner — resets scroll rhythm between Work and Skills
export default function StatsBanner() {
  return (
    <section className="relative bg-[#050505] border-y border-white/[0.05] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] rounded-full bg-gradient-radial from-gold/[0.05] to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`md:border-l md:first:border-l-0 border-white/[0.06] ${i % 2 === 0 ? '' : 'border-l border-white/[0.06]'}`}
            >
              <StatItem {...stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
