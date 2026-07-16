import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de ReplyForge SAS — éditeur, hébergement, propriété intellectuelle.',
  alternates: { canonical: 'https://replyforge.fr/mentions-legales' },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-32 pb-24">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <Link href="/" className="mono-tag text-stone hover:text-forge">← Accueil</Link>
          <h1 className="display-tight text-[clamp(2.5rem,6vw,5rem)] mt-8 mb-16">Mentions légales</h1>

          <div className="space-y-12 text-paper/85 leading-relaxed">
            <section>
              <h2 className="display italic text-3xl mb-4">Éditeur</h2>
              <p>ReplyForge SAS — société par actions simplifiée au capital de 10 000 €. RCS Paris 923 145 872. Siège social : 12 rue de Turbigo, 75002 Paris.</p>
              <p className="mt-3">Directeur de la publication : Karim B.</p>
              <p className="mt-3">Contact : contact@replyforge.fr</p>
            </section>
            <section>
              <h2 className="display italic text-3xl mb-4">Hébergement</h2>
              <p>Vercel Inc. — 340 S Lemon Ave #4133, Walnut CA 91789, États-Unis.</p>
            </section>
            <section>
              <h2 className="display italic text-3xl mb-4">Propriété intellectuelle</h2>
              <p>L&apos;ensemble des éléments du site (textes, images, graphismes, code, marques) est protégé par le droit de la propriété intellectuelle. Toute reproduction sans autorisation écrite est interdite.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
