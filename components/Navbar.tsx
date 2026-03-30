'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY } from '@/lib/constants';

/* Sticky Navigation – transparent auf Hero, solid beim Scrollen
   Mobile: Fullscreen-Overlay-Menü */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Scroll zu Section und Menü schließen */
  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo / Firmenname */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex flex-col"
            >
              <span
                className={`font-display text-xl sm:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-forest' : 'text-white'
                }`}
              >
                {COMPANY.name}
              </span>
              <span
                className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-honey' : 'text-blush-light'
                }`}
              >
                {COMPANY.slogan}
              </span>
            </a>

            {/* Desktop-Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300
                    ${scrolled ? 'text-charcoal hover:text-forest' : 'text-white/90 hover:text-white'}
                    after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                    after:transition-all after:duration-300 hover:after:w-full
                    ${scrolled ? 'after:bg-forest' : 'after:bg-white'}`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={COMPANY.phoneLink}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? 'bg-forest text-white hover:bg-forest-light'
                    : 'bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border border-white/20'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Anrufen
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Menü öffnen"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-current origin-center transition-colors"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block w-6 h-[2px] bg-current transition-colors"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-current origin-center transition-colors"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay Menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-white text-3xl font-display font-light tracking-wide hover:text-honey transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.4 }}
                href={COMPANY.phoneLink}
                className="mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-honey text-white text-lg font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phone}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky "Anrufen"-Leiste auf Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-forest text-white p-3 flex items-center justify-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <a href={COMPANY.phoneLink} className="font-medium text-sm">
          Jetzt anrufen: {COMPANY.phone}
        </a>
      </div>
    </>
  );
}
