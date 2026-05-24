'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Research',
    description: 'Understanding the audience, competitors, trends, and brand positioning to build a solid strategic foundation.',
    color: '#C9A96E',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Building content directions and campaign ideas aligned with business goals and audience behaviour.',
    color: '#7DA5C9',
  },
  {
    number: '03',
    title: 'Content Creation',
    description: 'Designing visuals, creating reels concepts, writing captions, and planning the full execution timeline.',
    color: '#86C99A',
  },
  {
    number: '04',
    title: 'Launch & Management',
    description: 'Publishing content, managing campaigns, and monitoring engagement across all active platforms.',
    color: '#D4A853',
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'Reviewing performance and refining future content based on real audience behaviour and data insights.',
    color: '#C9A9C9',
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className="group relative border border-white/[0.06] bg-[#0D0D0D] p-7 md:p-8 overflow-hidden
        hover:border-white/[0.14] transition-colors duration-500"
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)` }}
      />

      <div className="flex items-start gap-6">
        {/* Number */}
        <span
          className="font-display text-5xl font-light leading-none flex-shrink-0 transition-colors duration-500"
          style={{ color: `${step.color}30` }}
        >
          {step.number}
        </span>

        <div className="space-y-3 pt-1">
          <h3
            className="font-sans text-[11px] tracking-[0.3em] uppercase font-medium transition-colors duration-300 group-hover:text-cream"
            style={{ color: step.color }}
          >
            {step.title}
          </h3>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8]">
            {step.description}
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px]"
        style={{ backgroundColor: `${step.color}40` }}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative bg-[#080808] py-32 md:py-44 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-radial from-gold/[0.04] to-transparent blur-[120px] pointer-events-none" />

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
              <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">04 / Process</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display font-light leading-[1.1] tracking-tight text-cream"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Creative{' '}
                <em className="italic text-gold">Process</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-sm text-cream-muted font-light max-w-xs leading-relaxed"
          >
            Every campaign follows a structured path — from insight to execution to measurable results.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
