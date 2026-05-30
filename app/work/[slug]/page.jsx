'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getProject, getAdjacentProjects } from '../../../lib/projects';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => { window.scrollTo(0, 0); }, [params.slug]);

  if (!project) return notFound();

  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <main className="min-h-screen bg-[#080808] text-cream overflow-x-hidden">

      {/* Fixed nav */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-5 bg-[#080808]/80 backdrop-blur-lg border-b border-white/[0.05]"
      >
        <Link
          href="/#work"
          className="flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase text-cream-muted hover:text-gold transition-colors duration-300 group"
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1.5">
            <path d="M1 5h14M1 5l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Work
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block font-sans text-[10px] tracking-[0.3em] uppercase text-cream-muted/50">
            {project.id} of 04
          </span>
          <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase" style={{ color: project.accentColor }}>
            {project.category}
          </span>
        </div>
      </motion.div>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">

        {/* Background layer */}
        <div className="absolute inset-0" style={{ background: project.bg }}>
          {project.video ? (
            <>
              {/* Mobile: show poster image only — 61MB video is too heavy for mobile */}
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 md:hidden"
              />
              {/* Desktop: play video */}
              <video
                src={project.video}
                poster={project.image}
                autoPlay muted loop playsInline preload="none"
                className="absolute inset-0 w-full h-full object-cover opacity-50 hidden md:block"
              />
            </>
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          ) : null}

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-transparent" />
        </div>

        {/* Corner marks */}
        <div className="absolute top-24 left-6 md:left-16 w-8 h-8 border-t border-l opacity-40" style={{ borderColor: project.accentColor }} />
        <div className="absolute top-24 right-6 md:right-16 w-8 h-8 border-t border-r opacity-40" style={{ borderColor: project.accentColor }} />

        {/* Hero text */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pb-16 md:pb-24 w-full"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-sans text-[10px] tracking-[0.5em] uppercase mb-5"
            style={{ color: project.accentColor }}
          >
            {project.year} · {project.category}
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display font-light leading-[0.92] tracking-tight text-cream"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
            >
              {project.name}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="font-sans text-sm text-cream-muted font-light max-w-md leading-[1.8]"
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute right-6 md:right-10 bottom-10 flex flex-col items-center gap-3 z-10"
        >
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-cream-muted rotate-90 origin-center mb-4">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="border-y border-white/[0.06] bg-[#0A0A0A]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { label: 'Role', value: project.role },
              { label: 'Year', value: project.year },
              { label: 'Industry', value: project.category.split(' · ')[1] || project.category },
              { label: 'Outcome', value: project.result },
            ].map((item) => (
              <div key={item.label} className="px-6 py-7 first:pl-0 last:pr-0">
                <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-cream-muted mb-2">{item.label}</p>
                <p className="font-sans text-[13px] text-cream font-light leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── CONTENT ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">

        {/* Overview + Deliverables */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-28 mb-24 md:mb-32">

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px]" style={{ background: project.accentColor }} />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-cream-muted">Overview</span>
            </div>
            {project.fullDescription.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="font-sans text-[15px] text-cream-muted font-light leading-[1.95]"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px]" style={{ background: project.accentColor }} />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-cream-muted">Deliverables</span>
            </div>

            <div>
              {project.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-4 py-3.5 border-b border-white/[0.05] group"
                >
                  <span className="text-xs shrink-0 transition-transform duration-300 group-hover:scale-125" style={{ color: project.accentColor }}>✦</span>
                  <span className="font-sans text-[13px] text-cream-muted font-light group-hover:text-cream transition-colors duration-300">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Outcome card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-6 border relative overflow-hidden"
              style={{ borderColor: `${project.accentColor}25` }}
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{ background: `radial-gradient(circle at top left, ${project.accentColor}, transparent 70%)` }}
              />
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase mb-3" style={{ color: project.accentColor }}>
                Outcome
              </p>
              <p className="font-display font-light text-2xl text-cream leading-tight">{project.result}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── MEDIA SECTION ── */}
        {(project.image || project.video) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 md:mb-32"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px]" style={{ background: project.accentColor }} />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-cream-muted">Work Sample</span>
            </div>

            <div className={`grid gap-4 ${project.video && project.image ? 'lg:grid-cols-2' : 'grid-cols-1 max-w-3xl'}`}>
              {project.image && (
                <div className="relative overflow-hidden border border-white/[0.06] aspect-video group">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              {project.video && (
                <div className="relative overflow-hidden border border-white/[0.06] aspect-video bg-black">
                  <video
                    src={project.video}
                    poster={project.image}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ── PREV / NEXT ── */}
        <div className="border-t border-white/[0.06] pt-14">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-cream-muted mb-8">More Projects</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/work/${prev.slug}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden border border-white/[0.06] bg-[#0D0D0D] p-7 hover:border-white/20 transition-colors duration-300"
                  style={{ borderLeft: `2px solid ${prev.accentColor}40` }}
                >
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-4 flex items-center gap-2">
                    <svg width="12" height="8" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                      <path d="M1 5h14M1 5l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Previous
                  </p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: prev.accentColor }}>{prev.category}</p>
                  <p className="font-display font-light text-xl md:text-2xl text-cream">{prev.name}</p>
                </motion.div>
              </Link>
            ) : <div />}

            {next ? (
              <Link href={`/work/${next.slug}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden border border-white/[0.06] bg-[#0D0D0D] p-7 hover:border-white/20 transition-colors duration-300 text-right"
                  style={{ borderRight: `2px solid ${next.accentColor}40` }}
                >
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-4 flex items-center justify-end gap-2">
                    Next
                    <svg width="12" height="8" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M15 5H1M15 5l-4-4M15 5l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: next.accentColor }}>{next.category}</p>
                  <p className="font-display font-light text-xl md:text-2xl text-cream">{next.name}</p>
                </motion.div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-cream-muted tracking-[0.2em]">
            © 2025 Tuleen Rezek — All rights reserved.
          </p>
          <Link
            href="/#contact"
            className="font-sans text-[10px] tracking-[0.25em] uppercase text-cream-muted hover:text-gold transition-colors duration-300"
          >
            Get in Touch →
          </Link>
        </div>
      </div>

    </main>
  );
}
