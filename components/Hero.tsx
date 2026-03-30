'use client';

import { motion } from 'framer-motion';
import PetalAnimation from './PetalAnimation';
import { COMPANY } from '@/lib/constants';

/* Fullscreen Hero mit Parallax, Blütenblättern und staggered Text-Reveal */

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector('#ueber-uns');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Hintergrundbild mit Parallax-Effekt */}
      {/* TODO: Durch echtes Foto ersetzen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80')",
        }}
      />

      {/* Dunkler Gradient-Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Blütenblatt-Animation */}
      <PetalAnimation />

      {/* Inhalt */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Dekorative Linie */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-16 h-[1px] bg-honey mx-auto mb-8"
        />

        {/* Haupttitel */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-wide mb-6"
        >
          {COMPANY.slogan.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Untertitel */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-lg sm:text-xl text-white/80 font-light tracking-wide mb-10 max-w-xl mx-auto"
        >
          {COMPANY.subtitle}
        </motion.p>

        {/* CTA-Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          onClick={scrollToNext}
          className="group relative inline-flex items-center gap-3 px-8 py-4 border border-white/30 rounded-full
                     text-sm tracking-[0.15em] uppercase font-medium
                     hover:bg-white hover:text-forest transition-all duration-500
                     backdrop-blur-sm"
        >
          Entdecken Sie unsere Welt
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </div>

      {/* Scroll-Hinweis unten */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
