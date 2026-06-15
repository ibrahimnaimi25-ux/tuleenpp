'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '../../lib/content';

const { items } = content.experience;

function ExperienceItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className="group relative border border-white/[0.06] bg-[#0D0D0D] p-7 md:p-8
        hover:border-gold/30 transition-colors duration-500"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold/80 flex-shrink-0 sm:w-32">
          {item.period}
        </span>
        <div className="space-y-2">
          <h3 className="font-sans text-sm tracking-[0.1em] uppercase font-medium text-cream">
            {item.title}
          </h3>
          {item.company && (
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream-muted">
              {item.company}
            </p>
          )}
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] max-w-2xl">
            {item.description}
          </p>
        </div>
      </div>

      {/* Left accent */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-[1px] bg-gold/40"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.08, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: 'top' }}
      />
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative bg-[#0A0A0A] py-32 md:py-44 overflow-hidden">
      {/* Ambient */}
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
              <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">02 / Experience</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display font-light leading-[1.1] tracking-tight text-cream"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Professional <em className="italic text-gold">Journey</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-sm text-cream-muted font-light max-w-xs leading-relaxed"
          >
            A timeline of internships, freelance work, and roles that shaped my marketing experience.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <ExperienceItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
