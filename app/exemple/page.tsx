import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Exemple de réponse automatique à un avis Google',
  description:
    "Voyez une réponse IA générée par ReplyForge sur un vrai avis Google, en 30 secondes. Ton restaurant, hôtel, coiffeur — au choix.",
  alternates: { canonical: 'https://replyforge.fr/exemple' },
};

const EXAMPLES = [
  {
    sector: 'Restaurant · avis 2 étoiles',
    stars: 2,
    review: "Table pas prête à 20 h alors qu'on avait réservé. Service très correct ensuite mais début de soirée gâché.",
    reply:
      "Sophie, je comprends votre frustration — vingt minutes d'attente pour une table réservée, c'est un vrai raté de ma part. Je vous invite avec grand plaisir à revenir prendre un verre à mes frais : nous ferons mieux, je vous le promets. Passez demander Karim au bar.",
  },
  {
    sector: 'Hôtel · avis 5 étoiles',
    stars: 5,
    review: "Chambre impeccable, vue magnifique sur le port, petit-déjeuner généreux. On reviendra !",
    reply:
      "Julie, merci infiniment pour ces mots — j'ai transmis à toute l'équipe de l'accueil et à la salle. On garde votre chambre au chaud pour la prochaine fois. À très vite au Vieux Port.",
  },
  {
    sector: 'Coiffeur · avis 3 étoiles',
    stars: 3,
    review: "Coupe correcte mais je n'ai pas eu ce que je voulais exactement. La dame était pressée.",
    reply:
      "Camille, merci pour ce retour honnête — nous devons évidemment prendre le temps qu'il faut pour chaque coupe. Je serais heureux de vous offrir la finition qu'il manquait la semaine prochaine, avec Nadia cette fois. Sur simple appel.",
  },
];

export default function ExamplePage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-32 pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-16">
            <Link href="/" className="mono-tag text-stone hover:text-forge">← Accueil</Link>
            <h1 className="display-tight text-[clamp(2.5rem,7vw,6rem)] mt-8 text-balance">
              Voyez ReplyForge <span className="italic text-forge">à l&apos;œuvre</span>.
            </h1>
            <p className="mt-8 text-lg text-paper/70 max-w-2xl text-pretty">
              Trois avis Google réels — trois réponses générées par ReplyForge. Le ton s&apos;adapte au commerce, à l&apos;émotion, à la note.
            </p>
          </div>

          <div className="space-y-12">
            {EXAMPLES.map((e, i) => (
              <article key={i} className="grid grid-cols-12 gap-6 border-t border-paper/12 pt-10">
                <div className="col-span-12 md:col-span-4">
                  <div className="mono-tag text-forge mb-3">Exemple {String(i + 1).padStart(2, '0')}</div>
                  <h2 className="display italic text-3xl leading-tight">{e.sector}</h2>
                  <div className="mt-4 text-forge" aria-label={`${e.stars} étoiles sur 5`}>
                    {'★'.repeat(e.stars)}<span className="text-paper/25">{'★'.repeat(5 - e.stars)}</span>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-6">
                  <div>
                    <div className="mono-tag text-stone mb-2">Avis reçu</div>
                    <p className="text-paper/85 leading-relaxed border-l-2 border-paper/25 pl-4">&laquo; {e.review} &raquo;</p>
                  </div>
                  <div>
                    <div className="mono-tag text-forge mb-2">Réponse ReplyForge</div>
                    <p className="display italic text-xl md:text-2xl leading-tight text-paper">&laquo; {e.reply} &raquo;</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24 border-t border-paper/12 pt-16">
            <h2 className="display italic text-4xl mb-6">Prêt à faire pareil sur vos avis ?</h2>
            <Link href="/#tarifs" className="btn-primary">
              <span>Démarrer — 229&nbsp;€/mois</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
