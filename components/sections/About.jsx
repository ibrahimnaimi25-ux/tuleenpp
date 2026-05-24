'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Brands Elevated' },
  { value: '5', label: 'Industries Covered' },
  { value: '2+', label: 'Years of Craft' },
  { value: '100%', label: 'Strategy-Driven' },
];

const expertise = [
  'Social Media Strategy', 'Content Creation', 'Campaign Planning',
  'Paid Advertising', 'Brand Storytelling', 'Creative Marketing',
];

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

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' });

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
              {stats.map((stat, i) => (
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
                Building brands that feel{' '}
                <em className="text-gold not-italic italic">visually strong</em> and culturally relevant.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="space-y-5 text-cream-muted font-sans text-base leading-[1.9] font-light max-w-xl"
            >
              <p>
                I'm Tuleen — a digital marketing and social media strategist with hands-on experience
                working with Jordanian brands across food, hospitality, beauty, lifestyle, and
                service industries.
              </p>
              <p>
                My work combines creative storytelling with strategic marketing to help brands build
                stronger online identities, engage audiences, and create content people actually
                connect with.
              </p>
              <p>
                Through agency internships and freelance projects, I've worked on social media
                management, campaign planning, content creation, paid advertising, brand activations,
                and audience engagement strategies.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={rightInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="w-full h-[1px] bg-gradient-to-r from-gold/40 to-transparent origin-left"
            />

            {/* Expertise pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="space-y-4"
            >
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream-muted">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2.5">
                {expertise.map((item, i) => (
                  <span
                    key={i}
                    className="font-sans text-[11px] tracking-[0.15em] uppercase text-cream-muted border border-white/[0.08] px-3.5 py-1.5 hover:border-gold/40 hover:text-cream transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
