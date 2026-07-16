import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description: 'Conditions générales de vente de ReplyForge SAS — abonnement, résiliation, données.',
  alternates: { canonical: 'https://replyforge.fr/cgv' },
  robots: { index: true, follow: true },
};

export default function CgvPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-32 pb-24">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <Link href="/" className="mono-tag text-stone hover:text-forge">← Accueil</Link>
          <h1 className="display-tight text-[clamp(2.5rem,6vw,5rem)] mt-8 mb-16">Conditions générales de vente</h1>

          <div className="space-y-12 text-paper/85 leading-relaxed">
            <section>
              <h2 className="display italic text-3xl mb-4">1. Objet</h2>
              <p>Les présentes CGV régissent l&apos;abonnement à ReplyForge, service en ligne de gestion de la réputation Google pour commerces locaux, édité par ReplyForge SAS.</p>
            </section>
            <section>
              <h2 className="display italic text-3xl mb-4">2. Tarifs et durée</h2>
              <p>Trois plans mensuels : Comptoir (229 €), Établi (449 €), Enseigne (1 190 €). Tarifs HT. Abonnement mensuel sans engagement. Résiliation en un clic depuis l&apos;espace client, effective à la fin du mois en cours.</p>
            </section>
            <section>
              <h2 className="display italic text-3xl mb-4">3. Essai gratuit</h2>
              <p>14 jours d&apos;essai sans carte bancaire. Aucune facturation ne peut avoir lieu sans souscription explicite à un plan payant à l&apos;issue de l&apos;essai.</p>
            </section>
            <section>
              <h2 className="display italic text-3xl mb-4">4. Données personnelles et confidentialité</h2>
              <p>ReplyForge est responsable de traitement au sens du RGPD. Les avis Google traités par le service restent la propriété du commerce. Aucune donnée n&apos;est revendue ni utilisée pour entraîner des modèles tiers.</p>
            </section>
            <section>
              <h2 className="display italic text-3xl mb-4">5. Loi applicable</h2>
              <p>Les présentes CGV sont soumises au droit français. Tout litige relève de la compétence exclusive des tribunaux de Paris.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
