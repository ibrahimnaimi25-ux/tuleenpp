'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { content } from '../../lib/content';
import { ar } from '../../lib/ar';
import { useLang } from '../../lib/LanguageContext';

const { about } = content;

function StatCard({ value, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 * index, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="group border border-white/[0.06] bg-[#0F0F0F] p-6 hover:border-gold/30 transition-colors duration-500"
    >
      <p className="font-display text-4xl md:text-5xl font-light text-cream group-hover:text-gold transition-colors duration-500 mb-1">
        {value}
      </p>
      <p className="font-sans text-[11px] text-cream-muted tracking-[0.2em] uppercase">{label}</p>
    </motion.div>
  );
}

function GraduationBlock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Two-column: photo left, card right — stacked on mobile */}
      <div className="grid sm:grid-cols-[auto_1fr] gap-4 items-stretch">
        {/* Graduation photo */}
        <button
          onClick={() => setOpen(true)}
          className="group relative overflow-hidden border border-white/[0.06] hover:border-gold/30 transition-colors duration-500 focus:outline-none"
          style={{ width: '120px', minHeight: '150px' }}
          aria-label="View graduation photo"
        >
          <img
            src="/tuleen-graduation.jpeg"
            alt="Tuleen Rezek — Graduation"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{ display: 'block' }}
          />
          {/* Corner marks */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/40 pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/40 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/40 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/40 pointer-events-none" />
          {/* Hover hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/40 px-2 py-1">
              View
            </span>
          </div>
        </button>

        {/* Education card */}
        <div className="border border-white/[0.06] bg-[#0D0D0D] px-5 py-4 hover:border-gold/20 transition-colors duration-500 flex flex-col justify-center">
          <p className="font-sans text-sm font-light text-cream mb-1">
            {about.education.university}
          </p>
          <p className="font-sans text-[11px] text-gold/80 tracking-[0.1em] mb-2">
            {about.education.degree}
          </p>
          <p className="font-sans text-[10px] text-cream-muted tracking-[0.2em] uppercase mb-3">
            {about.education.status}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <span className="font-sans text-[10px] text-cream-muted">{about.education.location}</span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Image */}
            <motion.div
              className="relative max-w-sm w-full border border-white/10"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner marks */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/50 z-10 pointer-events-none" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/50 z-10 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/50 z-10 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/50 z-10 pointer-events-none" />

              <img
                src="/tuleen-graduation.jpeg"
                alt="Tuleen Rezek — Graduation"
                className="w-full object-cover block"
              />

              {/* Caption bar */}
              <div className="bg-black/60 backdrop-blur-sm px-5 py-3 border-t border-white/[0.06]">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-muted">
                  Tuleen Rezek · Princess Sumaya University · 2025
                </p>
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 border border-white/20 flex items-center justify-center text-cream-muted hover:border-gold/40 hover:text-gold transition-all duration-300"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' });
  const { lang } = useLang();
  const bio = lang === 'ar' ? ar.about.bio : about.bio;
  const arText = lang === 'ar' ? 'font-arabic text-right' : '';

  return (
    <section id="about" className="relative bg-[#0A0A0A] py-32 md:py-44 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-gold/[0.04] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20 md:mb-28"
        >
          <div className="hr-gold" />
          <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">01 / About</span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-start">
          {/* Left — abstract visual + stats */}
          <div className="space-y-8">
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="relative aspect-[4/5] border border-white/[0.06] overflow-hidden bg-[#0D0D0D]"
            >
              {/* Photo */}
              <img
                src="/tuleen.jpeg"
                alt="Tuleen Rezek"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Subtle dark overlay at bottom for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Corner marks */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/40" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/40" />
              <div className="absolute bottom-[60px] left-4 w-6 h-6 border-b border-l border-gold/40" />
              <div className="absolute bottom-[60px] right-4 w-6 h-6 border-b border-r border-gold/40" />
              {/* Location badge */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2">
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/80 border border-gold/30 px-3 py-1 bg-black/40 backdrop-blur-sm">
                  Amman, Jordan
                </span>
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/[0.05] bg-black/30 backdrop-blur-sm">
                <p className="font-sans text-[10px] text-cream-muted tracking-[0.3em] uppercase">
                  Tuleen Rezek · Digital Marketing Strategist
                </p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {about.stats.map((stat, i) => (
                <StatCard key={i} {...stat} index={i} />
              ))}
            </div>
          </div>

          {/* Right — text content */}
          <div ref={rightRef} className="space-y-10 lg:pt-8">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={rightInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display font-light text-[6vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] leading-[1.1] tracking-tight text-cream"
              >
                {(() => {
                  const { heading, headingEmphasis } = about;
                  const idx = heading.indexOf(headingEmphasis);
                  if (idx === -1) return heading;
                  return (
                    <>
                      {heading.slice(0, idx)}
                      <em className="text-gold not-italic italic">{headingEmphasis}</em>
                      {heading.slice(idx + headingEmphasis.length)}
                    </>
                  );
                })()}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className={`space-y-5 text-cream-muted text-base leading-[1.9] font-light max-w-xl ${arText || 'font-sans'}`}
              dir={lang === 'ar' ? 'rtl' : undefined}
            >
              {bio.map((para, i) => <p key={i}>{para}</p>)}
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={rightInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="w-full h-[1px] bg-gradient-to-r from-gold/40 to-transparent origin-left"
            />

            {/* Focus Areas + Education — grouped together, no divider between */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream-muted">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {about.expertise.map((item, i) => (
                    <span
                      key={i}
                      className="font-sans text-[11px] tracking-[0.15em] uppercase text-cream-muted border border-white/[0.08] px-3.5 py-1.5 hover:border-gold/40 hover:text-cream transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream-muted">
                  Education
                </p>
                <GraduationBlock />
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.7 }}
            >
              <a
                href="/tuleen-cv.pdf"
                download
                className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase font-medium px-8 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M7 9l-3-3M7 9l3-3M1 11h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download CV
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
