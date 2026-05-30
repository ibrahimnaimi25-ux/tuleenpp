'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../../lib/projects';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(false);

  const isLarge = project.size === 'large';

  return (
    <Link href={`/work/${project.slug}`}>
      <motion.div
        ref={ref}
        data-cursor="view"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.12, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="relative overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ aspectRatio: isLarge ? '16/10' : '4/3' }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            background: project.bg,
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        >
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          ) : null}
        </div>

        {/* Grid texture — only when no image */}
        {!project.image && !project.video && (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />
        )}

        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 project-card-overlay" />

        {/* Hover reveal overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center p-8"
          style={{ background: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(4px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-center mb-3"
            style={{ color: project.accentColor }}>
            {project.role}
          </p>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.75] text-center max-w-sm">
            {project.description}
          </p>
          <div className="mt-6 px-5 py-2 border text-[11px] tracking-[0.25em] uppercase font-sans"
            style={{ borderColor: `${project.accentColor}60`, color: project.accentColor }}>
            View Project →
          </div>
        </motion.div>

        {/* Always-visible footer info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-muted mb-2">
              {project.category}
            </p>
            <h3 className="font-display font-light leading-none"
              style={{ fontSize: isLarge ? 'clamp(2rem, 4vw, 3.5rem)' : 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              <span className="text-cream">{project.name}</span>
            </h3>
          </div>
          <div className="text-right">
            <p className="font-display font-light text-5xl md:text-7xl opacity-10 text-cream select-none leading-none">
              {project.id}
            </p>
            <p className="font-sans text-[10px] text-cream-muted tracking-[0.2em]">{project.year}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const largeProjects = projects.filter((_, i) => i < 2).map((p) => ({ ...p, size: 'large' }));
  const smallProjects = projects.filter((_, i) => i >= 2).map((p) => ({ ...p, size: 'small' }));

  return (
    <section id="work" className="relative bg-[#080808] py-32 md:py-44 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(201,169,110,0.04) 0%, transparent 60%)',
        }}
      />

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
              <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">02 / Work</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display font-light text-[8vw] sm:text-[5vw] md:text-[4vw] leading-[1.1] tracking-tight text-cream"
              >
                Selected <em className="italic text-gold">Work</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-sm text-cream-muted font-light max-w-xs leading-relaxed"
          >
            A curated selection of campaigns, brand stories, and digital strategies built for Jordanian brands.
          </motion.p>
        </div>

        {/* Large projects row */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {largeProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Small projects row */}
        <div className="grid md:grid-cols-2 gap-4">
          {smallProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
