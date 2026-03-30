'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { TESTIMONIALS } from '@/lib/constants';

/* Kundenstimmen – elegantes Karussell mit Autorotation */

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  /* Auto-Rotation alle 6 Sekunden */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section-Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-honey font-medium mb-4">
            Das sagen unsere Kunden
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-forest mb-4">
            Kunden<span className="italic font-semibold">stimmen</span>
          </h2>
          <div className="w-16 h-[2px] bg-honey mx-auto mb-4" />
          {/* Google Bewertung */}
          <div className="flex items-center justify-center gap-2 text-sm text-charcoal-light">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < 5 ? 'text-honey' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.8 bei Google</span>
          </div>
        </ScrollReveal>

        {/* Testimonial-Karussell */}
        <div className="relative min-h-[280px] sm:min-h-[240px]">
          {/* Dekorative Anführungszeichen */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-display text-[120px] text-forest/5 leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-light text-charcoal leading-relaxed italic mb-8 px-4">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-[1px] bg-honey" />
                <cite className="not-italic">
                  <span className="font-medium text-forest">
                    {TESTIMONIALS[current].author}
                  </span>
                  <span className="text-charcoal-light text-sm ml-2">
                    aus {TESTIMONIALS[current].location}
                  </span>
                </cite>
                <div className="w-8 h-[1px] bg-honey" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigations-Punkte */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-forest w-8'
                  : 'bg-forest/20 hover:bg-forest/40'
              }`}
              aria-label={`Kundenstimme ${index + 1} anzeigen`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
