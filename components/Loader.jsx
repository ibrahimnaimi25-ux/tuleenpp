'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsLoading(false);
              document.body.style.overflow = '';
            }, 900);
          }, 300);
          return 100;
        }
        const increment = prev < 60 ? Math.random() * 12 + 4 : Math.random() * 6 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top panel slides up on exit */}
          <motion.div
            className="absolute inset-0 bg-[#0A0A0A] origin-top"
            animate={isExiting ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />

          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <span
                className="font-display text-[2.5rem] md:text-[5rem] font-light text-cream uppercase"
                style={{ letterSpacing: '0.2em' }}
              >
                TULEEN
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 h-[1px] bg-gold"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              />
            </motion.div>

            {/* Progress track */}
            <motion.div
              className="flex flex-col items-center gap-4 w-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gold"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="font-sans text-cream-muted text-xs tracking-[0.3em]">
                {Math.round(progress).toString().padStart(3, '0')}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
