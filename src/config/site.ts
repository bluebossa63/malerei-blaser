export const siteConfig = {
  businessName: 'Atelier Martin Blaser',
  brandShort: 'Malerei Blaser',
  location: 'Spiez',
  region: 'Berner Oberland',
  email: 'info@malerei-blaser.ch',
  phoneDisplay: '+41 33 654 12 34',
  phoneHref: 'tel:+41336541234',
  whatsappDisplay: '',
  whatsappHref: '',
  formAction: '',
  responseTime: 'In der Regel innerhalb von 24 Stunden',
  siteUrl: 'https://bluebossa63.github.io/malerei-blaser'
} as const;

export const productionFlags = {
  whatsappEnabled: false,
  formEnabled: false,
  usingPlaceholderImages: true,
  usingPlaceholderTestimonials: true
} as const;
