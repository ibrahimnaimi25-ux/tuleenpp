'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '../../lib/content';

const { categories: skillCategories, tools } = content.skills;

function SkillRow({ category, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="grid sm:grid-cols-[260px_1fr] gap-4 sm:gap-10 items-start py-7 md:py-8
        border-b border-white/[0.06] last:border-b-0 transition-colors duration-500"
    >
      {/* Icon + title */}
      <div className="flex items-center gap-4">
        <span
          className="text-2xl transition-transform duration-400"
          style={{
            color: category.color,
            transform: hovered ? 'scale(1.2)' : 'scale(1)',
            display: 'inline-block',
          }}
        >
          {category.icon}
        </span>
        <h3 className="font-display font-light text-xl md:text-2xl text-cream leading-tight">
          {category.title}
        </h3>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.07 + 0.1 + i * 0.04, duration: 0.5 }}
            className="font-sans text-[11px] tracking-[0.15em] uppercase text-cream-muted border border-white/[0.08]
              px-3.5 py-1.5 hover:border-current hover:text-cream transition-all duration-300"
            style={{ borderColor: hovered ? `${category.color}50` : undefined }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="relative bg-[#0A0A0A] py-32 md:py-44 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.04] to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="hr-gold" />
              <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">05 / Skills</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display font-light leading-[1.1] tracking-tight text-cream"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Craft &{' '}
                <em className="italic text-gold">Expertise</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-sm text-cream-muted font-light max-w-xs leading-relaxed"
          >
            Combining strategy, creativity, and cultural insight to build brands that connect.
          </motion.p>
        </div>

        {/* Skills list — divided rows instead of card grid */}
        <div className="border-t border-white/[0.06]">
          {skillCategories.map((cat, i) => (
            <SkillRow key={i} category={cat} index={i} />
          ))}
        </div>

        {/* Tools section */}
        <div ref={toolsRef} className="mt-16 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={toolsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="hr-gold" />
            <span className="font-sans text-[10px] text-cream-muted tracking-[0.35em] uppercase">Tools & Platforms</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={toolsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            {tools.map((tool, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={toolsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream-muted border border-white/[0.08]
                  px-4 py-2 hover:border-gold/40 hover:text-cream transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
