'use client';

import { useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getProject, getAdjacentProjects } from '../../../lib/projects';

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return notFound();

  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <main className="min-h-screen bg-[#080808] text-cream">

      {/* Nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-6 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.04]">
        <Link
          href="/#work"
          className="flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase text-cream-muted hover:text-cream transition-colors duration-300 group"
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
            <path d="M1 5h14M1 5l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-muted">
          {project.id} / {project.category}
        </span>
      </div>

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: project.bg }}>
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
          ) : null}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: project.accentColor }}>
              {project.year} · {project.category}
            </p>
            <h1 className="font-display font-light text-[10vw] sm:text-[7vw] md:text-[5.5vw] leading-[0.95] tracking-tight text-cream mb-6">
              {project.name}
            </h1>
            <p className="font-sans text-sm text-cream-muted font-light max-w-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-20 md:py-28">

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] mb-20"
        >
          {[
            { label: 'Role', value: project.role },
            { label: 'Year', value: project.year },
            { label: 'Category', value: project.category },
            { label: 'Result', value: project.result },
          ].map((item) => (
            <div key={item.label} className="bg-[#080808] px-6 py-6">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-2">{item.label}</p>
              <p className="font-sans text-sm text-cream font-light leading-snug">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Two-column: description + deliverables */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 mb-20">

          {/* Full description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px]" style={{ background: project.accentColor }} />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream-muted">Overview</span>
            </div>
            {project.fullDescription.map((para, i) => (
              <p key={i} className="font-sans text-base text-cream-muted font-light leading-[1.9]">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px]" style={{ background: project.accentColor }} />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream-muted">Deliverables</span>
            </div>
            <div className="space-y-3">
              {project.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-white/[0.05]">
                  <span className="font-sans text-[10px] mt-1" style={{ color: project.accentColor }}>✦</span>
                  <span className="font-sans text-sm text-cream-muted font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* Result highlight */}
            <div className="mt-8 p-5 border" style={{ borderColor: `${project.accentColor}30` }}>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: project.accentColor }}>
                Outcome
              </p>
              <p className="font-sans text-sm text-cream font-light">{project.result}</p>
            </div>
          </motion.div>
        </div>

        {/* Image / video section — only if media exists */}
        {(project.image || project.video) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px]" style={{ background: project.accentColor }} />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream-muted">Work Sample</span>
            </div>
            <div className={`grid gap-4 ${project.video && project.image ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
              {project.image && (
                <div className="relative overflow-hidden border border-white/[0.06] aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {project.video && (
                <div className="relative overflow-hidden border border-white/[0.06] aspect-video">
                  <video
                    src={project.video}
                    poster={project.image}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Prev / Next navigation */}
        <div className="border-t border-white/[0.06] pt-12 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group border border-white/[0.06] bg-[#0D0D0D] p-6 hover:border-white/20 transition-colors duration-300"
            >
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-3 flex items-center gap-2">
                <svg width="12" height="8" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                  <path d="M1 5h14M1 5l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Previous
              </p>
              <p className="font-display font-light text-xl text-cream">{prev.name}</p>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group border border-white/[0.06] bg-[#0D0D0D] p-6 hover:border-white/20 transition-colors duration-300 text-right"
            >
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-3 flex items-center justify-end gap-2">
                Next
                <svg width="12" height="8" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M15 5H1M15 5l-4-4M15 5l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </p>
              <p className="font-display font-light text-xl text-cream">{next.name}</p>
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  );
}
