'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

/* Über uns / Willkommen-Sektion
   Split-Layout mit Bild und emotionalem Text */

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="relative py-24 sm:py-32 botanical-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bild – von links einblenden */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* TODO: Durch echtes Foto ersetzen */}
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Gärtnerei Weeber – Gewächshaus und Pflanzen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dekorativer Rahmen */}
              <div className="absolute inset-4 border border-white/20 rounded-xl pointer-events-none" />
            </div>
            {/* Dekorativer Akzent-Block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-honey/20 rounded-2xl -z-10 hidden lg:block" />
          </ScrollReveal>

          {/* Text – von rechts einblenden */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              {/* Tagline */}
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-honey font-medium">
                Willkommen bei uns
              </span>

              <h2 className="font-display text-4xl sm:text-5xl font-light text-forest leading-tight">
                Mit Leidenschaft <br />
                <span className="font-semibold italic">für die Natur</span>
              </h2>

              <div className="w-16 h-[2px] bg-honey" />

              <p className="text-charcoal-light leading-relaxed text-base sm:text-lg">
                In unserer familiengeführten Gärtnerei in Eberdingen verbinden wir
                seit Generationen Tradition mit Leidenschaft. Was als kleiner Betrieb
                begann, ist heute ein Ort, an dem Blumen und Pflanzen mit Hingabe
                gezogen und zu einzigartigen Arrangements verarbeitet werden.
              </p>

              <p className="text-charcoal-light leading-relaxed text-base sm:text-lg">
                Bei uns ist alles <strong className="text-forest font-medium">aus eigener Hand</strong> –
                vom Samenkorn in unseren Gewächshäusern bis zum fertigen Strauß, den
                Sie mit nach Hause nehmen. Diese Nähe zur Pflanze schmeckt man,
                riecht man, sieht man.
              </p>

              <p className="text-charcoal-light leading-relaxed text-base sm:text-lg">
                Ob ein fröhlicher Frühlingsstrauß, die feierliche Hochzeitsfloristik
                oder einfach die perfekte Geranie für Ihren Balkon – bei uns finden
                Sie, was aus Liebe zur Natur entsteht.
              </p>

              {/* Signatur */}
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-honey" />
                <p className="font-display text-lg italic text-forest">
                  Klaus Weeber & Familie
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
