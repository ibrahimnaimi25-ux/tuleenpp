'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tuleen-rezek-86b1b5297' },
  { label: 'Instagram', href: 'https://www.instagram.com/yourusername' },
];

const inputClass =
  'w-full bg-white/[0.04] border border-white/20 text-cream font-sans text-sm font-light px-5 py-4 outline-none ' +
  'placeholder:text-cream-muted/60 focus:border-gold focus:bg-white/[0.06] hover:border-white/40 transition-colors duration-300';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const email = 'tuleen.rezek23@gmail.com';

  const copyEmail = () => {
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-[#070707] overflow-hidden">
      {/* Large ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full bg-gradient-radial from-gold/[0.06] to-transparent blur-[160px]" />
      </div>

      {/* Top border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-32 md:py-48">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20 md:mb-28"
        >
          <div className="hr-gold" />
          <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">05 / Contact</span>
        </motion.div>

        {/* Main CTA — two columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16 md:mb-20 items-start">

          {/* Left — headline + subtext */}
          <div>
            {["Let's build", 'something', 'remarkable.'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h2
                  initial={{ y: '105%' }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className={`font-display font-light leading-[0.93] tracking-tight
                    text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw]
                    ${i === 2 ? 'text-gold glow-text-gold italic' : 'text-cream'}
                  `}
                >
                  {line}
                </motion.h2>
              </div>
            ))}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-sans text-sm text-cream-muted font-light max-w-sm leading-relaxed mt-8"
            >
              Interested in collaborations, freelance projects, or creative partnerships?
              Fill in the form and I'll get back to you.
            </motion.p>
          </div>

          {/* Right — availability + services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-5 lg:pt-4"
          >
            {/* Availability card */}
            <div className="border border-white/[0.06] bg-[#0D0D0D] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-green-400">
                  Available for Work
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-1">
                {[
                  { label: 'Based in', value: 'Amman, Jordan' },
                  { label: 'Response', value: 'Within 24h' },
                  { label: 'Open to', value: 'Remote Projects' },
                  { label: 'Availability', value: 'Freelance & Full-time' },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-cream-muted mb-1">{item.label}</p>
                    <p className="font-sans text-[12px] text-cream font-light">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services list */}
            <div className="border border-white/[0.06] bg-[#0D0D0D] p-6">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-4">What I Offer</p>
              <div className="space-y-2.5">
                {[
                  'Social Media Strategy & Management',
                  'Content Creation & Reels',
                  'Campaign Planning & Execution',
                  'Paid Advertising (Meta Ads)',
                  'Brand Storytelling',
                  'Creative Direction',
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-gold text-xs">✦</span>
                    <span className="font-sans text-sm text-cream-muted font-light">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Two-column: form left, info right */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 mb-24">

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className={inputClass}
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject / Project Type"
              className={inputClass}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project... *"
              required
              rows={6}
              className={inputClass + ' resize-none'}
            />

            <div className="flex items-center gap-6 pt-2">
              <MagneticButton strength={0.3}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="font-sans text-[11px] tracking-[0.3em] uppercase font-medium px-10 py-4 bg-gold text-black hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </MagneticButton>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold"
                  >
                    Message sent ✓
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-sans text-[11px] tracking-[0.2em] uppercase text-red-400"
                  >
                    Something went wrong. Try emailing directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>

          {/* Right info column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-10 lg:pt-2"
          >
            {/* Direct email */}
            <div className="space-y-3">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-muted">Direct Email</p>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href={`mailto:${email}`}
                  className="font-sans text-sm text-cream hover:text-gold transition-colors duration-300 break-all"
                >
                  {email}
                </a>
                <button
                  onClick={copyEmail}
                  className="font-sans text-[10px] tracking-[0.2em] uppercase border border-white/10 px-3 py-1.5 text-cream-muted hover:border-gold/40 hover:text-gold transition-all duration-300 flex-shrink-0"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/[0.05]" />

            {/* Location */}
            <div className="space-y-3">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-muted">Based In</p>
              <p className="font-sans text-sm text-cream font-light">Amman, Jordan</p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/[0.05]" />

            {/* Socials */}
            <div className="space-y-4">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-muted">Socials</p>
              <div className="flex flex-col gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[11px] tracking-[0.25em] uppercase text-cream-muted hover:text-cream transition-colors duration-300 relative group w-fit"
                  >
                    {s.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom border row */}
        <div className="border-t border-white/[0.06] pt-10" />
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-cream-muted tracking-[0.2em]">
            © 2025 Tuleen Rezek — All rights reserved.
          </p>
          <p className="font-sans text-[10px] text-cream-muted/40 tracking-[0.15em]">
            Digital Marketing · Social Media Strategy
          </p>
        </div>
      </div>
    </section>
  );
}
