'use client';

import { useState, type FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';
import { COMPANY, OPENING_HOURS } from '@/lib/constants';

/* Kontakt-Sektion: Formular + Öffnungszeiten + Google Maps */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  /* Aktuellen Wochentag bestimmen (0=So, 1=Mo, ...) */
  const today = new Date().getDay();
  /* Umrechnen: JavaScript 0=So → unser Array 0=Mo */
  const todayIndex = today === 0 ? 6 : today - 1;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    /* TODO: Backend-Integration (z.B. per E-Mail oder API) */
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section-Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-honey font-medium mb-4">
            Wir freuen uns auf Sie
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-forest mb-4">
            Kontakt & <span className="italic font-semibold">Anfahrt</span>
          </h2>
          <div className="w-16 h-[2px] bg-honey mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Linke Seite: Kontaktformular */}
          <ScrollReveal direction="left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="font-display text-2xl text-forest mb-6">
                Schreiben Sie uns
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-display text-xl text-forest mb-2">Vielen Dank!</p>
                  <p className="text-charcoal-light">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-cream/50 text-charcoal placeholder:text-gray-400 transition-colors focus:border-forest"
                      placeholder="Ihr Name"
                    />
                  </div>

                  {/* E-Mail */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-cream/50 text-charcoal placeholder:text-gray-400 transition-colors focus:border-forest"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                      Telefon <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-cream/50 text-charcoal placeholder:text-gray-400 transition-colors focus:border-forest"
                      placeholder="07042 / ..."
                    />
                  </div>

                  {/* Anlass */}
                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-charcoal mb-1.5">
                      Anlass
                    </label>
                    <select
                      id="occasion"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-cream/50 text-charcoal transition-colors focus:border-forest"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="bestellung">Bestellung / Anfrage</option>
                      <option value="hochzeit">Hochzeitsfloristik</option>
                      <option value="trauer">Trauerfloristik</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-cream/50 text-charcoal placeholder:text-gray-400 transition-colors focus:border-forest resize-none"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-forest text-white rounded-lg font-medium tracking-wide
                               hover:bg-forest-light transition-colors duration-300
                               active:scale-[0.98] transform"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Rechte Seite: Maps + Öffnungszeiten + Kontaktdaten */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-8">
              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[280px]">
                <iframe
                  src={COMPANY.googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Gärtnerei Weeber"
                />
              </div>

              {/* Öffnungszeiten */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="font-display text-2xl text-forest mb-5">
                  Öffnungszeiten
                </h3>
                <div className="space-y-2.5">
                  {OPENING_HOURS.map((item, index) => (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                        index === todayIndex ? 'bg-forest/5' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Grüner Punkt für heute */}
                        <div
                          className={`w-2 h-2 rounded-full ${
                            index === todayIndex ? 'bg-forest' : 'bg-transparent'
                          }`}
                        />
                        <span className={`text-sm ${index === todayIndex ? 'font-semibold text-forest' : 'text-charcoal'}`}>
                          {item.day}
                        </span>
                      </div>
                      <span className={`text-sm ${
                        item.hours === 'geschlossen'
                          ? 'text-red-500'
                          : index === todayIndex
                          ? 'font-semibold text-forest'
                          : 'text-charcoal-light'
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-charcoal-light italic">
                  Bestellungen können nach Absprache auch außerhalb der Öffnungszeiten abgeholt werden.
                </p>
              </div>

              {/* Kontaktdaten */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="font-display text-2xl text-forest mb-5">
                  So erreichen Sie uns
                </h3>
                <div className="space-y-4">
                  {/* Adresse */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-honey mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-charcoal">{COMPANY.address.street}</p>
                      <p className="text-charcoal-light text-sm">{COMPANY.address.zip} {COMPANY.address.city}</p>
                    </div>
                  </div>

                  {/* Telefon */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-honey shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={COMPANY.phoneLink} className="text-charcoal hover:text-forest transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>

                  {/* E-Mail */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-honey shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${COMPANY.email}`} className="text-charcoal hover:text-forest transition-colors text-sm">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
