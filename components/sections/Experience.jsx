'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '../../lib/content';
import { ar } from '../../lib/ar';
import { useLang } from '../../lib/LanguageContext';

const { items } = content.experience;
const { creativeExperience } = content.about;

function ExperienceItem({ item, index, arDescription, lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const description = lang === 'ar' ? arDescription : item.description;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className="relative pl-10 md:pl-14"
    >
      {/* Timeline dot */}
      <motion.span
        className="absolute left-0 top-9 w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-gold"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.08 + 0.15, duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      />

      <div className="group border border-white/[0.06] bg-[#0D0D0D] p-7 md:p-8
        hover:border-gold/30 transition-colors duration-500">
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
            <p
              className={`text-sm text-cream-muted font-light leading-[1.8] max-w-2xl ${lang === 'ar' ? 'font-arabic text-right' : 'font-sans'}`}
              dir={lang === 'ar' ? 'rtl' : undefined}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const creativeRef = useRef(null);
  const creativeInView = useInView(creativeRef, { once: true, margin: '-60px' });
  const { lang } = useLang();
  const creative = lang === 'ar' ? ar.about.creativeExperience : creativeExperience;

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
              <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">03 / Experience</span>
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
        <div className="relative">
          {/* Connecting vertical line */}
          <motion.div
            className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/50 via-gold/15 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="space-y-4">
            {items.map((item, i) => (
              <ExperienceItem
                key={i}
                item={item}
                index={i}
                arDescription={ar.experience.items[i]?.description}
                lang={lang}
              />
            ))}
          </div>
        </div>

        {/* Creative Experience — grouped within Experience, separated by spacing */}
        <motion.div
          ref={creativeRef}
          initial={{ opacity: 0, y: 24 }}
          animate={creativeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mt-16 md:mt-20 pl-10 md:pl-14"
        >
          <div className="border border-white/[0.06] bg-[#0D0D0D] p-7 md:p-8">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream-muted mb-4">
              Creative Experience
            </p>
            <div
              className={`space-y-3 text-cream-muted text-sm leading-[1.9] font-light max-w-2xl ${lang === 'ar' ? 'font-arabic text-right' : 'font-sans'}`}
              dir={lang === 'ar' ? 'rtl' : undefined}
            >
              {creative.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
