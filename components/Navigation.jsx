'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: '01 About', href: '#about' },
  { label: '02 Work', href: '#work' },
  { label: '03 Skills', href: '#skills' },
  { label: '04 Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.04]' : ''
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-[72px]">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="font-display text-lg font-semibold tracking-[0.25em] text-cream uppercase hover:text-gold transition-colors duration-300"
          >
            TR
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollTo(link.href)}
                className="group relative font-sans text-xs tracking-[0.2em] uppercase text-cream-muted hover:text-cream transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-[1px] bg-cream origin-center"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-4 h-[1px] bg-cream origin-right"
              animate={menuOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[1px] bg-cream origin-center"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.button
                  key={i}
                  onClick={() => scrollTo(link.href)}
                  className="font-display text-4xl font-light text-cream hover:text-gold transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
