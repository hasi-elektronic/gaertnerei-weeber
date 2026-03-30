/* Firmendaten & Konfiguration für Gärtnerei Weeber */

export const COMPANY = {
  name: 'Gärtnerei Weeber',
  owner: 'Klaus Weeber',
  slogan: 'Lust auf Blumen',
  subtitle: 'Seit Generationen – Ihre Gärtnerei in Eberdingen',
  address: {
    street: 'Badweg 6',
    zip: '71735',
    city: 'Eberdingen',
    full: 'Badweg 6, 71735 Eberdingen',
  },
  phone: '07042 / 77 707',
  phoneLink: 'tel:+49704277707',
  fax: '07042 / 79 22 92',
  email: 'gaertnerei.weeber@gmx.de',
  website: 'www.gaertnerei-weeber.de',
  vatId: 'DE247875593',
  googleMapsUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.8!2d8.963!3d48.884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzAyLjQiTiA4wrA1NyczNy44IkU!5e0!3m2!1sde!2sde!4v1!5m2!1sde!2sde',
  foundedYear: 1980, // Platzhalter – bitte durch echtes Gründungsjahr ersetzen
} as const;

export const OPENING_HOURS = [
  { day: 'Montag', hours: '08:00 – 13:00', short: 'Mo' },
  { day: 'Dienstag', hours: '08:00 – 13:00, 15:00 – 18:30', short: 'Di' },
  { day: 'Mittwoch', hours: '08:00 – 13:00, 15:00 – 18:30', short: 'Mi' },
  { day: 'Donnerstag', hours: '08:00 – 13:00, 15:00 – 18:30', short: 'Do' },
  { day: 'Freitag', hours: '08:00 – 13:00, 15:00 – 18:30', short: 'Fr' },
  { day: 'Samstag', hours: '08:00 – 13:00', short: 'Sa' },
  { day: 'Sonntag', hours: 'geschlossen', short: 'So' },
] as const;

/* Navigation-Links für die Single-Page */
export const NAV_LINKS = [
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Angebot', href: '#angebot' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;

/* Services / Angebots-Karten */
export const SERVICES = [
  {
    title: 'Blumensträuße',
    description: 'Für jeden Anlass – von klein und fein bis opulent und üppig. Individuell gebunden mit frischen Blumen der Saison.',
    /* TODO: Durch echtes Foto ersetzen */
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
  },
  {
    title: 'Hochzeitsfloristik',
    description: 'Brautsträuße, Tischdekoration, Kirchenschmuck und Locationdeko – Ihr schönster Tag verdient die schönsten Blumen.',
    /* TODO: Durch echtes Foto ersetzen */
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
  },
  {
    title: 'Trauerfloristik',
    description: 'Kränze, Gestecke und Sargschmuck – mit Einfühlungsvermögen und Sorgfalt für einen würdevollen Abschied.',
    /* TODO: Durch echtes Foto ersetzen */
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80',
  },
  {
    title: 'Beet- & Balkonpflanzen',
    description: 'Aus eigenem Anbau: Geranien, Petunien, Fuchsien und vieles mehr – kräftig, gesund und direkt aus unserem Gewächshaus.',
    /* TODO: Durch echtes Foto ersetzen */
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  },
  {
    title: 'Setzware & Gemüse',
    description: 'Ab Ende Februar: Salatpflanzen, Gurken, Tomaten und mehr. Frisch aus eigener Anzucht für Ihren Garten.',
    /* TODO: Durch echtes Foto ersetzen */
    image: 'https://images.unsplash.com/photo-1592921870789-04563d55041c?w=800&q=80',
  },
  {
    title: 'Wochendekoration',
    description: 'Regelmäßig frische Blumenarrangements für Ihre Geschäftsräume – abgestimmt auf Ihren Stil und die Saison.',
    /* TODO: Durch echtes Foto ersetzen */
    image: 'https://images.unsplash.com/photo-1478217655589-37e72e3bc7f2?w=800&q=80',
  },
  {
    title: 'Blumenvermittlung',
    description: 'Deutschlandweite Lieferung über unser Partnernetzwerk – für Ihre Lieben, egal wo sie sind.',
    /* TODO: Durch echtes Foto ersetzen */
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
  },
] as const;

/* Saisonale Galerie-Bilder */
export const SEASONAL_IMAGES = [
  {
    /* TODO: Durch echtes Foto ersetzen */
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80',
    alt: 'Frühlingsstrauß mit Tulpen und Narzissen',
    season: 'Frühling',
  },
  {
    /* TODO: Durch echtes Foto ersetzen */
    src: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=600&q=80',
    alt: 'Sommerliche Blumenwiese',
    season: 'Sommer',
  },
  {
    /* TODO: Durch echtes Foto ersetzen */
    src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80',
    alt: 'Sonnenblumen im Spätsommer',
    season: 'Sommer',
  },
  {
    /* TODO: Durch echtes Foto ersetzen */
    src: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?w=600&q=80',
    alt: 'Herbstliche Chrysanthemen',
    season: 'Herbst',
  },
  {
    /* TODO: Durch echtes Foto ersetzen */
    src: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80',
    alt: 'Herbstgesteck mit Kürbis',
    season: 'Herbst',
  },
  {
    /* TODO: Durch echtes Foto ersetzen */
    src: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=600&q=80',
    alt: 'Adventskranz mit Kerzen',
    season: 'Winter',
  },
  {
    /* TODO: Durch echtes Foto ersetzen */
    src: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=600&q=80',
    alt: 'Weihnachtliches Blumenarrangement',
    season: 'Winter',
  },
  {
    /* TODO: Durch echtes Foto ersetzen */
    src: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80',
    alt: 'Frühlingshafte Ranunkeln',
    season: 'Frühling',
  },
] as const;

/* Kundenstimmen – Platzhalter */
export const TESTIMONIALS = [
  {
    text: 'Die Blumen von der Gärtnerei Weeber sind einfach wunderschön! Jeder Strauß ist ein kleines Kunstwerk. Wir kommen seit über 10 Jahren hierher.',
    author: 'Sabine M.',
    location: 'Eberdingen',
  },
  {
    text: 'Unsere Hochzeitsfloristik war absolut traumhaft. Herr Weeber hat unsere Wünsche perfekt umgesetzt – besser als wir es uns vorgestellt hatten!',
    author: 'Laura & Thomas K.',
    location: 'Vaihingen/Enz',
  },
  {
    text: 'Die Balkonpflanzen aus eigenem Anbau sind so viel kräftiger als im Baumarkt. Unsere Geranien blühen seit Mai ununterbrochen!',
    author: 'Heinrich S.',
    location: 'Eberdingen',
  },
  {
    text: 'In einer schweren Zeit hat uns die Gärtnerei Weeber mit viel Einfühlungsvermögen bei der Trauerfloristik begleitet. Herzlichen Dank.',
    author: 'Familie Bauer',
    location: 'Nussdorf',
  },
] as const;

/* Design-Tokens als Referenz (primär über Tailwind gesteuert) */
export const COLORS = {
  forestGreen: '#2D5A3D',
  cream: '#FDF8F0',
  honey: '#C4975C',
  blush: '#E8C4B8',
  charcoal: '#2C2C2C',
} as const;
