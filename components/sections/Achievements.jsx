'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '../../lib/content';

const { achievements } = content.about;

function AchievementCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="group flex items-start gap-4 border border-white/[0.06] bg-[#0D0D0D] p-5 md:p-6
        hover:border-gold/30 transition-colors duration-500"
    >
      <span className="font-display text-2xl font-light text-gold/40 group-hover:text-gold/80 transition-colors duration-500 leading-none flex-shrink-0">
        ✓
      </span>
      <span className="font-sans text-[13px] text-cream-muted font-light leading-relaxed pt-1 group-hover:text-cream transition-colors duration-300">
        {item}
      </span>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative bg-[#080808] py-32 md:py-44 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-gold/[0.04] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="hr-gold" />
              <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">02 / Achievements</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display font-light leading-[1.1] tracking-tight text-cream"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Career <em className="italic text-gold">Highlights</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-sm text-cream-muted font-light max-w-xs leading-relaxed"
          >
            Key milestones and contributions across academic, agency, and freelance work.
          </motion.p>
        </div>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {achievements.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
