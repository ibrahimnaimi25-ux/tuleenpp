'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { content } from '../../lib/content';

const { contact: c } = content;

const inputClass =
  'w-full bg-white/[0.07] border border-white/30 text-cream font-sans text-sm font-light px-5 py-3.5 outline-none ' +
  'placeholder:text-cream/40 focus:border-gold focus:bg-white/[0.10] hover:border-white/50 transition-colors duration-300';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const email = c.email;

  const copyEmail = () => {
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" className="relative bg-[#070707] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-radial from-gold/[0.05] to-transparent blur-[140px]" />
      </div>

      {/* Top border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">

        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14 md:mb-16"
        >
          <div className="hr-gold" />
          <span className="font-sans text-xs text-cream-muted tracking-[0.35em] uppercase">06 / Contact</span>
        </motion.div>

        {/* Headline row */}
        <div className="mb-12 md:mb-14">
          <div className="flex flex-wrap gap-x-4">
            {c.headline.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h2
                  initial={{ y: '105%' }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className={`font-display font-light leading-[1.0] tracking-tight
                    text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw]
                    ${i === c.headline.length - 1 ? 'text-gold glow-text-gold italic' : 'text-cream'}
                  `}
                >
                  {line}
                </motion.h2>
              </div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-sans text-sm text-cream-muted font-light max-w-md leading-relaxed mt-5"
          >
            {c.intro}
          </motion.p>
        </div>

        {/* ── Main two-column layout ── */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start">

          {/* LEFT — Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            onSubmit={handleSubmit}
            className="border border-white/[0.07] bg-[#0D0D0D] p-7 md:p-9 space-y-3"
          >
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream-muted mb-5">Send a Message</p>

            <div className="grid sm:grid-cols-2 gap-3">
              <input type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Full Name *" required className={inputClass} />
              <input type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="Email Address *" required className={inputClass} />
            </div>

            <input type="text" name="subject" value={form.subject} onChange={handleChange}
              placeholder="Subject / Project Type" className={inputClass} />

            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Tell me about your project... *" required rows={6}
              className={inputClass + ' resize-none'} />

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
                  <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold">
                    Message sent ✓
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    className="font-sans text-[11px] tracking-[0.2em] uppercase text-red-400">
                    Something went wrong. Try emailing directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>

          {/* RIGHT — Single structured info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="border border-white/[0.07] bg-[#0D0D0D] p-7 md:p-9 space-y-0"
          >
            {/* Availability */}
            <div className="pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-green-400">{c.availabilityStatus}</span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {c.availability.map((item) => (
                  <div key={item.label}>
                    <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-cream-muted mb-1">{item.label}</p>
                    <p className="font-sans text-[12px] text-cream font-light">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct email */}
            <div className="py-6 border-b border-white/[0.06]">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-3">Direct Email</p>
              <div className="flex items-center gap-3 flex-wrap">
                <a href={`mailto:${email}`}
                  className="font-sans text-sm text-cream hover:text-gold transition-colors duration-300 break-all">
                  {email}
                </a>
                <button onClick={copyEmail}
                  className="font-sans text-[10px] tracking-[0.2em] uppercase border border-white/10 px-3 py-1.5 text-cream-muted hover:border-gold/40 hover:text-gold transition-all duration-300 flex-shrink-0">
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            {/* What I offer */}
            <div className="py-6 border-b border-white/[0.06]">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-4">What I Offer</p>
              <div className="grid grid-cols-1 gap-2">
                {c.services.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-gold text-[10px]">✦</span>
                    <span className="font-sans text-[12px] text-cream-muted font-light">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="pt-6">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted mb-4">Socials</p>
              <div className="flex gap-6">
                {c.socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="font-sans text-[11px] tracking-[0.25em] uppercase text-cream-muted hover:text-cream transition-colors duration-300 relative group w-fit">
                    {s.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-white/[0.06] mt-16" />
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-cream-muted tracking-[0.2em]">
            {c.footer}
          </p>
          <p className="font-sans text-[10px] text-cream-muted/40 tracking-[0.15em]">
            Digital Marketing · Social Media Strategy
          </p>
        </div>
      </div>
    </section>
  );
}
