import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Gärtnerei Weeber',
  description: 'Datenschutzerklärung der Gärtnerei Weeber, Eberdingen.',
};

/* Datenschutzerklärung – DSGVO-konform, Platzhalter
   TODO: Von einem Anwalt prüfen lassen */

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest text-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-honey hover:text-honey-light transition-colors text-sm mb-4 inline-block">
            &larr; Zurück zur Startseite
          </Link>
          <h1 className="font-display text-4xl font-light">Datenschutzerklärung</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none space-y-8 text-charcoal">
          <section>
            <h2 className="font-display text-2xl text-forest mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-display text-lg text-forest-light mb-2">Allgemeine Hinweise</h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">2. Verantwortlicher</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
              {COMPANY.name}<br />
              {COMPANY.owner}<br />
              {COMPANY.address.street}<br />
              {COMPANY.address.zip} {COMPANY.address.city}<br /><br />
              Telefon: {COMPANY.phone}<br />
              E-Mail: {COMPANY.email}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-display text-lg text-forest-light mb-2">Kontaktformular</h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">4. Hosting</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Diese Website wird bei Vercel Inc. gehostet. Details entnehmen Sie der
              Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">5. Google Maps</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
              Limited. Durch die Nutzung von Google Maps können Informationen über Ihre Benutzung
              dieser Website (einschließlich Ihrer IP-Adresse) an einen Server von Google in den
              USA übertragen und dort gespeichert werden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">6. Ihre Rechte</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu
              weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <div className="bg-honey/10 rounded-xl p-6 mt-8">
            <p className="text-sm text-charcoal font-medium">
              Hinweis: Diese Datenschutzerklärung ist ein Platzhalter und sollte von einem
              spezialisierten Anwalt für Datenschutzrecht geprüft und ergänzt werden.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
