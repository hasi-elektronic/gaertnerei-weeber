'use client';

import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import { COMPANY } from '@/lib/constants';

/* Gewächshaus-Sektion – dunkler Hintergrund für visuellen Kontrast
   Mit animierten Countern und Parallax */

export default function Greenhouse() {
  const yearsActive = new Date().getFullYear() - COMPANY.foundedYear;

  return (
    <section className="relative py-28 sm:py-40 overflow-hidden">
      {/* Hintergrundbild mit Parallax */}
      {/* TODO: Durch echtes Foto ersetzen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80')",
        }}
      />

      {/* Dunkles Overlay */}
      <div className="absolute inset-0 bg-forest-dark/85" />

      {/* Inhalt */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Tagline */}
        <ScrollReveal>
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-honey font-medium mb-6">
            Unser Gewächshaus
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight">
            Vom Samenkorn <br />
            <span className="italic font-semibold text-honey">bis zur Blüte</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Alles aus eigener Hand – in unseren Gewächshäusern ziehen wir einen Großteil
            unserer Pflanzen selbst auf. So garantieren wir beste Qualität und
            können Ihnen Pflanzen anbieten, die Sie so im Handel nicht finden.
          </p>
        </ScrollReveal>

        {/* Animierte Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-3xl mx-auto">
          <ScrollReveal delay={0.3} direction="up">
            <div className="space-y-2">
              <div className="font-display text-5xl sm:text-6xl font-light text-honey">
                <AnimatedCounter target={yearsActive} suffix="+" />
              </div>
              <p className="text-white/60 text-sm tracking-wide uppercase">Jahre Erfahrung</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="up">
            <div className="space-y-2">
              <div className="font-display text-5xl sm:text-6xl font-light text-honey">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <p className="text-white/60 text-sm tracking-wide uppercase">Eigener Anbau</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5} direction="up">
            <div className="space-y-2">
              <div className="font-display text-5xl sm:text-6xl font-light text-honey">
                <AnimatedCounter target={1000} suffix="+" />
              </div>
              <p className="text-white/60 text-sm tracking-wide uppercase">Zufriedene Kunden</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
