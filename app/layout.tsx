import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

/* Display-Schrift – elegant, serif */
const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

/* Body-Schrift – clean, modern */
const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

/* SEO Metadata */
export const metadata: Metadata = {
  title: 'Gärtnerei Weeber – Blumen & Pflanzen aus Eberdingen | Ihr Florist seit Generationen',
  description:
    'Gärtnerei Weeber in Eberdingen: Blumensträuße, Hochzeitsfloristik, Trauerfloristik, Beet- & Balkonpflanzen aus eigenem Anbau. ☎ 07042/77707',
  keywords: [
    'Gärtnerei Eberdingen',
    'Blumen Vaihingen',
    'Florist Ludwigsburg',
    'Hochzeitsfloristik',
    'Trauerfloristik',
    'Balkonpflanzen',
    'Blumensträuße',
    'Gärtnerei Weeber',
  ],
  authors: [{ name: 'Gärtnerei Weeber' }],
  openGraph: {
    title: 'Gärtnerei Weeber – Lust auf Blumen',
    description: 'Ihre familiengeführte Gärtnerei in Eberdingen bei Stuttgart. Blumensträuße, Hochzeitsfloristik und Pflanzen aus eigenem Anbau.',
    url: 'https://www.gaertnerei-weeber.de',
    siteName: 'Gärtnerei Weeber',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* Schema.org JSON-LD für LocalBusiness */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Florist',
  name: 'Gärtnerei Weeber',
  image: 'https://www.gaertnerei-weeber.de/og-image.jpg',
  '@id': 'https://www.gaertnerei-weeber.de',
  url: 'https://www.gaertnerei-weeber.de',
  telephone: '+49704277707',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Badweg 6',
    addressLocality: 'Eberdingen',
    postalCode: '71735',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.884,
    longitude: 8.963,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '08:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '15:00',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00',
    },
  ],
  priceRange: '€€',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}
