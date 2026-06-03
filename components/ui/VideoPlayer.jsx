'use client';

import { useRef, useEffect } from 'react';

// Shared iOS-safe attributes for all videos
const iosAttrs = {
  playsInline: true,
  'webkit-playsinline': 'true',
  'x-webkit-airplay': 'allow',
};

export function AutoplayVideo({ src, poster, className }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Force webkit attribute via DOM for maximum iOS compatibility
      ref.current.setAttribute('webkit-playsinline', 'true');
      ref.current.setAttribute('playsinline', '');
    }
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      preload="none"
      poster={poster}
      className={className}
      {...iosAttrs}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function ControlsVideo({ src, poster, className }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('webkit-playsinline', 'true');
      ref.current.setAttribute('playsinline', '');
    }
  }, []);

  return (
    <video
      ref={ref}
      controls
      preload="metadata"
      poster={poster}
      className={className}
      {...iosAttrs}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
