'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { SERVICES } from '@/lib/constants';

/* Bento-Grid für Angebote/Services
   Asymmetrisches Layout mit Hover-Effekten */

export default function ServicesGrid() {
  return (
    <section id="angebot" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section-Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-honey font-medium mb-4">
            Was wir bieten
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-forest mb-4">
            Unser <span className="italic font-semibold">Angebot</span>
          </h2>
          <div className="w-16 h-[2px] bg-honey mx-auto" />
        </ScrollReveal>

        {/* Bento Grid – asymmetrisches Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => {
            /* Abwechselnde Größen für Bento-Effekt */
            const isLarge = index === 0 || index === 3;
            const gridClass = isLarge
              ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9] sm:aspect-[2/1]'
              : 'aspect-[4/5] sm:aspect-square';

            return (
              <ScrollReveal
                key={service.title}
                delay={index * 0.1}
                direction="scale"
                className={gridClass}
              >
                <ServiceCard service={service} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Einzelne Service-Karte mit Hover-Animation */
function ServiceCard({
  service,
}: {
  service: (typeof SERVICES)[number];
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg"
    >
      {/* Hintergrundbild */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Standard-Overlay (immer sichtbar) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Hover-Overlay */}
      <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Titel (immer sichtbar, unten) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h3 className="font-display text-2xl sm:text-3xl text-white font-light mb-2 transition-transform duration-500 group-hover:-translate-y-2">
          {service.title}
        </h3>

        {/* Beschreibung (nur bei Hover) */}
        <p className="text-white/90 text-sm sm:text-base leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {service.description}
        </p>
      </div>

      {/* Dekorative Ecke */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
