import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Impressum – Gärtnerei Weeber',
  description: 'Impressum der Gärtnerei Weeber, Badweg 6, 71735 Eberdingen.',
};

/* Impressum – rechtlich notwendige Angaben */

export default function Impressum() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest text-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-honey hover:text-honey-light transition-colors text-sm mb-4 inline-block">
            &larr; Zurück zur Startseite
          </Link>
          <h1 className="font-display text-4xl font-light">Impressum</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none space-y-8 text-charcoal">
          <section>
            <h2 className="font-display text-2xl text-forest mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              {COMPANY.name}<br />
              Inhaber: {COMPANY.owner}<br />
              {COMPANY.address.street}<br />
              {COMPANY.address.zip} {COMPANY.address.city}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">Kontakt</h2>
            <p>
              Telefon: {COMPANY.phone}<br />
              Fax: {COMPANY.fax}<br />
              E-Mail: {COMPANY.email}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              {COMPANY.vatId}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">Streitschlichtung</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-honey transition-colors">https://ec.europa.eu/consumers/odr/</a>.
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">Haftung für Inhalte</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">Haftung für Links</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">Urheberrecht</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section className="pt-6 border-t border-forest/10">
            <p className="text-xs text-charcoal-light">
              Webdesign:{' '}
              <a href="https://hasi-elektronic.de" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-honey transition-colors">
                Hasi Elektronic
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
