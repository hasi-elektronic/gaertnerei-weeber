'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { SEASONAL_IMAGES } from '@/lib/constants';

/* Saisonale Galerie – horizontaler Scroll auf Desktop, vertikal auf Mobile */

const SEASON_COLORS: Record<string, string> = {
  'Frühling': 'bg-emerald-100 text-emerald-800',
  'Sommer': 'bg-amber-100 text-amber-800',
  'Herbst': 'bg-orange-100 text-orange-800',
  'Winter': 'bg-blue-100 text-blue-800',
};

export default function SeasonalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="galerie" className="py-24 sm:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section-Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-honey font-medium mb-4">
            Durch das Jahr
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-forest mb-4">
            Saisonale <span className="italic font-semibold">Highlights</span>
          </h2>
          <div className="w-16 h-[2px] bg-honey mx-auto" />
        </ScrollReveal>

        {/* Scroll-Navigation (Desktop) */}
        <div className="hidden sm:flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-white transition-all duration-300"
            aria-label="Nach links scrollen"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-white transition-all duration-300"
            aria-label="Nach rechts scrollen"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Horizontaler Scroll-Container (Desktop) / Grid (Mobile) */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide
                     sm:grid sm:grid-flow-col sm:auto-cols-[300px] sm:overflow-x-auto
                     max-sm:grid max-sm:grid-cols-2 max-sm:gap-3 max-sm:overflow-x-visible"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SEASONAL_IMAGES.map((img, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.08}
              direction="up"
              className="snap-start shrink-0 w-[260px] sm:w-auto max-sm:w-auto"
            >
              <motion.div
                whileHover={{ y: -8, rotate: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 bg-white"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="300px"
                  />

                  {/* Jahreszeit-Tag */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${SEASON_COLORS[img.season] || 'bg-gray-100 text-gray-700'}`}>
                      {img.season}
                    </span>
                  </div>
                </div>

                {/* Beschriftung */}
                <div className="p-4">
                  <p className="text-sm text-charcoal-light leading-snug">{img.alt}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
