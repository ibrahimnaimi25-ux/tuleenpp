'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Social Media Strategy',
    icon: '◈',
    color: '#C9A96E',
    skills: ['Social Media Management', 'Platform Strategy', 'Audience Engagement', 'Content Calendars', 'Community Building'],
  },
  {
    title: 'Content Creation',
    icon: '◎',
    color: '#86C99A',
    skills: ['Reels Concepts', 'Caption Writing', 'Visual Storytelling', 'Trend-Based Content', 'Creative Direction'],
  },
  {
    title: 'Digital Marketing',
    icon: '◉',
    color: '#7DA5C9',
    skills: ['Marketing Strategy', 'Campaign Planning', 'Brand Positioning', 'Market Research', 'Audience Targeting'],
  },
  {
    title: 'Paid Advertising',
    icon: '⬡',
    color: '#D4A853',
    skills: ['Meta Ads', 'Sponsored Campaigns', 'Performance Monitoring', 'Reach Optimization', 'Budget Allocation'],
  },
  {
    title: 'Branding Support',
    icon: '◇',
    color: '#C9A9C9',
    skills: ['Tone of Voice', 'Visual Consistency', 'Launch Campaigns', 'Brand Storytelling', 'Brand Identity'],
  },
  {
    title: 'Event Marketing',
    icon: '△',
    color: '#A9C9C9',
    skills: ['Brand Activations', 'Experiential Marketing', 'Event Execution', 'Campaign Concepts', 'Team Collaboration'],
  },
];

const tools = [
  'Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Meta Business Suite',
  'Google Analytics', 'HubSpot', 'Mailchimp',
];

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.09, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-white/[0.06] bg-[#0D0D0D] p-6 md:p-7 overflow-hidden
        hover:border-white/[0.14] transition-colors duration-500 group"
    >
      {/* Hover glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Icon + title */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-lg transition-transform duration-400"
          style={{
            color: category.color,
            transform: hovered ? 'scale(1.2)' : 'scale(1)',
            display: 'inline-block',
            transition: 'transform 0.3s ease',
          }}
        >
          {category.icon}
        </span>
        <h3 className="font-sans text-[11px] tracking-[0.25em] uppercase text-cream/80 font-medium">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="space-y-2.5">
        {category.skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.09 + 0.2 + i * 0.06, duration: 0.5 }}
            className="flex items-center gap-2.5 group/item"
          >
            <div
              className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-300 group-hover/item:scale-150"
              style={{ backgroundColor: `${category.color}80` }}
            />
            <span className="font-sans text-sm text-cream-muted font-light hover:text-cream transition-colors duration-200">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom accent line that grows on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px]"
        style={{ backgroundColor: `${category.color}50` }}
        initial={{ width: 0 }}
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />
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
              <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">03 / Skills</span>
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

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
          {skillCategories.map((cat, i) => (
            <SkillCard key={i} category={cat} index={i} />
          ))}
        </div>

        {/* Tools section */}
        <div ref={toolsRef}>
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
