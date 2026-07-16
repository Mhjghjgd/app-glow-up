import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { CostOfSilence } from '@/components/CostOfSilence';
import { Pillars } from '@/components/Pillars';
import { Bento } from '@/components/Bento';
import { HowItWorks } from '@/components/HowItWorks';
import { Proof } from '@/components/Proof';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

export default function Home() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://replyforge.fr' },
    ],
  };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-forge focus:text-paper focus:px-4 focus:py-2">
        Aller au contenu principal
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <CostOfSilence />
        <Pillars />
        <Bento />
        <HowItWorks />
        <Proof />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
