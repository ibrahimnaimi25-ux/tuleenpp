'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const cursorRef = useRef({ x: 0, y: 0 });
  const followerRef = useRef({ x: 0, y: 0 });
  const dotEl = useRef(null);
  const followerEl = useRef(null);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'view' | 'drag'
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId;

    const moveCursor = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (dotEl.current) {
        dotEl.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animateFollower = () => {
      followerRef.current.x += (cursorRef.current.x - followerRef.current.x) * 0.12;
      followerRef.current.y += (cursorRef.current.y - followerRef.current.y) * 0.12;

      if (followerEl.current) {
        followerEl.current.style.transform = `translate(${followerRef.current.x}px, ${followerRef.current.y}px)`;
      }
      rafId = requestAnimationFrame(animateFollower);
    };

    const handleHover = (e) => {
      const el = e.target;
      if (
        el.closest('a') ||
        el.closest('button') ||
        el.closest('[data-cursor="hover"]')
      ) {
        setCursorState('hover');
        setLabel('');
      } else if (el.closest('[data-cursor="view"]')) {
        setCursorState('view');
        setLabel('View');
      } else {
        setCursorState('default');
        setLabel('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    rafId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const followerSize = cursorState === 'hover' ? 48 : cursorState === 'view' ? 80 : 32;
  const dotSize = cursorState === 'hover' ? 4 : 6;
  const followerOpacity = cursorState === 'view' ? 1 : 0.5;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[99999]" aria-hidden="true">
      {/* Follower ring */}
      <div
        ref={followerEl}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: followerSize,
          height: followerSize,
          marginLeft: -followerSize / 2,
          marginTop: -followerSize / 2,
          border: `1px solid rgba(201, 169, 110, ${followerOpacity})`,
          borderRadius: cursorState === 'view' ? '50%' : '50%',
          backgroundColor: cursorState === 'view' ? 'rgba(201,169,110,0.9)' : 'transparent',
          transition: 'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), background-color 0.2s ease, opacity 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
        }}
      >
        {cursorState === 'view' && (
          <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-black select-none">
            {label}
          </span>
        )}
      </div>

      {/* Dot */}
      <div
        ref={dotEl}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
          borderRadius: '50%',
          backgroundColor: cursorState === 'view' ? 'transparent' : '#C9A96E',
          transition: 'width 0.15s ease, height 0.15s ease, opacity 0.15s ease',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
