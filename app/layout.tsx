import type { Metadata, Viewport } from 'next';
import { Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const SITE = 'https://replyforge.fr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'ReplyForge — Réponse automatique aux avis Google',
    template: '%s · ReplyForge',
  },
  description:
    "Répondez à 100 % de vos avis Google, automatiquement. IA sur mesure pour hôtels, restaurants, coiffeurs, garages. Réputation et SEO local réunis.",
  keywords: [
    'réponse automatique avis Google',
    'gestion avis Google',
    'répondre aux avis clients IA',
    'réputation en ligne commerce local',
    'SEO local fiche Google Business',
  ],
  authors: [{ name: 'ReplyForge' }],
  creator: 'ReplyForge',
  publisher: 'ReplyForge',
  alternates: { canonical: SITE },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE,
    siteName: 'ReplyForge',
    title: 'ReplyForge — Réponse automatique aux avis Google',
    description:
      "Répondez à 100 % de vos avis Google, automatiquement. L'instrument de précision pour la réputation des commerces locaux.",
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ReplyForge — réponse automatique aux avis Google' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReplyForge — Réponse automatique aux avis Google',
    description:
      "L'instrument de précision pour la réputation des commerces locaux. Réponses IA, SEO local, acquisition d'avis.",
    images: ['/og.png'],
  },
  category: 'business',
};

export const viewport: Viewport = {
  themeColor: '#0E0E0C',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ReplyForge',
    url: SITE,
    logo: `${SITE}/logo.png`,
    sameAs: ['https://www.linkedin.com/company/replyforge'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@replyforge.fr',
      contactType: 'customer support',
      areaServed: 'FR',
      availableLanguage: ['French'],
    },
  };

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ReplyForge',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      "Plateforme de gestion de la réputation Google pour commerces locaux : réponses IA aux avis, SEO local, acquisition d'avis et veille concurrentielle.",
    offers: {
      '@type': 'Offer',
      price: '229',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '184',
    },
  };

  return (
    <html lang="fr" className={`${display.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="grain">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </body>
    </html>
  );
}
