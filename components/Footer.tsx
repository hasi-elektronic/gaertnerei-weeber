'use client';

import { COMPANY, NAV_LINKS } from '@/lib/constants';

/* Footer – dezent, dunkel, mit allen wichtigen Links */

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Spalte 1: Logo & Beschreibung */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl text-white font-semibold mb-1">
              {COMPANY.name}
            </h3>
            <p className="text-honey text-sm tracking-[0.15em] uppercase mb-4">
              {COMPANY.slogan}
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Ihre familiengeführte Gärtnerei in Eberdingen bei Stuttgart.
              Blumensträuße, Hochzeitsfloristik, Trauerfloristik und Pflanzen
              aus eigenem Anbau – mit Leidenschaft und Liebe zur Natur.
            </p>
          </div>

          {/* Spalte 2: Navigation */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-white/60 hover:text-honey transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/impressum"
                className="block text-sm text-white/60 hover:text-honey transition-colors duration-200"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="block text-sm text-white/60 hover:text-honey transition-colors duration-200"
              >
                Datenschutz
              </a>
            </nav>
          </div>

          {/* Spalte 3: Kontakt */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>{COMPANY.address.street}</p>
              <p>{COMPANY.address.zip} {COMPANY.address.city}</p>
              <a href={COMPANY.phoneLink} className="block hover:text-honey transition-colors">
                Tel: {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="block hover:text-honey transition-colors">
                {COMPANY.email}
              </a>
            </div>

            {/* Social Media Platzhalter */}
            <div className="flex gap-3 mt-6">
              {/* TODO: Echte Social-Media-Links einsetzen */}
              {['facebook', 'instagram'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                             hover:bg-honey hover:border-honey transition-all duration-300"
                >
                  {platform === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  )}
                  {platform === 'instagram' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trennlinie + Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-white/30">
            Webdesign by{' '}
            <a
              href="https://hasi-elektronic.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-honey transition-colors"
            >
              Hasi Elektronic
            </a>
          </p>
        </div>
      </div>

      {/* Abstand für Mobile Sticky-Bar */}
      <div className="h-14 md:hidden" />
    </footer>
  );
}
