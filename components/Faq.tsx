const QA = [
  {
    q: 'Comment fonctionne la réponse automatique aux avis Google ?',
    a: 'ReplyForge se connecte à votre fiche Google Business Profile via OAuth officiel. Chaque nouvel avis est lu par le modèle IA que vous avez choisi (Claude, GPT-5 ou Grok), qui rédige une réponse dans le ton pré-défini de votre commerce. La publication est automatique ou soumise à votre validation, selon votre préférence.',
  },
  {
    q: 'Répondre aux avis clients avec une IA améliore-t-il vraiment le SEO local ?',
    a: 'Oui. Google confirme dans sa documentation Business Profile que les fiches qui répondent régulièrement aux avis sont mieux valorisées dans le pack local. Nos données internes sur 1 240 fiches françaises montrent un gain moyen de 3,4 positions en 90 jours pour les commerces passés de moins de 30 % à 100 % de taux de réponse.',
  },
  {
    q: 'La gestion des avis Google est-elle conforme aux règles de la plateforme ?',
    a: 'Entièrement. ReplyForge utilise l\'API Google Business Profile officielle. Les réponses sont générées par IA mais publiées sous votre identité de gérant, ce que Google autorise explicitement — tant que les réponses restent authentiques et personnalisées, ce qui est le cœur de notre approche.',
  },
  {
    q: 'Peut-on personnaliser le ton par type de commerce local ?',
    a: 'Oui. Nous fournissons 14 profils sectoriels (restaurant traditionnel, restaurant gastronomique, hôtel, salon de coiffure, garage, boulangerie, pharmacie, institut de beauté, boutique mode, sport, immobilier, santé, restauration rapide, cave) et un mode sur-mesure où ReplyForge apprend votre style à partir de 20 anciennes réponses.',
  },
  {
    q: 'Que se passe-t-il face à un avis 1 étoile ou un client mécontent ?',
    a: 'Les avis de 1 ou 2 étoiles déclenchent une alerte SMS immédiate (plan Établi et Enseigne). Un brouillon de réponse est préparé, mais rien n\'est publié sans votre feu vert. Vous conservez la main sur les situations sensibles — l\'IA vous fait gagner du temps, pas du contrôle.',
  },
  {
    q: 'Combien de temps faut-il pour améliorer la réputation en ligne d\'un commerce local ?',
    a: 'La différence est visible sous 30 jours : taux de réponse à 100 %, notes moyennes en progression, avis plus récents. L\'impact SEO local sur la position dans le pack Google se mesure à partir de 60 à 90 jours, selon la concurrence de votre zone.',
  },
  {
    q: 'Peut-on gérer plusieurs fiches Google Business Profile ?',
    a: 'Oui, jusqu\'à 5 fiches sur le plan Établi et 50 sur le plan Enseigne. Chaque fiche a son propre ton, ses propres modèles, ses propres statistiques. Un tableau de bord consolidé donne la vue d\'ensemble pour les groupes multi-sites.',
  },
  {
    q: 'Le générateur de cartes pour avoir plus d\'avis Google est-il vraiment efficace ?',
    a: 'Sur nos commerces clients, la mise en place d\'une carte QR au comptoir ou à l\'addition multiplie par 2 à 3 le nombre d\'avis mensuels. Nos plus de 40 designs par secteur sont conçus pour ne pas ressembler à des flyers — ils s\'intègrent au décor.',
  },
  {
    q: 'Puis-je résilier ou changer de plan à tout moment ?',
    a: 'Oui. Aucun engagement de durée sur les plans Comptoir et Établi. Résiliation en un clic, effective à la fin du mois en cours. Les 14 jours d\'essai sont sans carte bancaire.',
  },
  {
    q: 'Comment ReplyForge se différencie des autres outils de gestion d\'avis ?',
    a: 'Trois choses : le choix explicite du modèle IA (aucun concurrent français ne l\'offre à ce jour), l\'approche éditoriale du ton par secteur, et la couverture bout-en-bout du sujet réputation (réponses, acquisition d\'avis, veille concurrentielle, contenu social). Ce n\'est pas un outil de plus, c\'est celui qui remplace les trois autres.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-36 border-t border-paper/8" aria-labelledby="faq-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="mono-tag text-forge">Chapitre 12</span>
          <span className="rule flex-1" />
          <span className="mono-tag text-stone">Questions fréquentes</span>
        </div>
        <div className="grid grid-cols-12 gap-6 mb-16">
          <h2 id="faq-title" className="col-span-12 lg:col-span-8 display-tight text-[clamp(2.5rem,7vw,6.5rem)] text-balance">
            Ce qu&apos;on nous <span className="italic text-forge">demande</span> le plus souvent.
          </h2>
        </div>

        <div className="border-t border-paper/12">
          {QA.map((item, i) => (
            <details key={i} className="group border-b border-paper/12 py-6 md:py-8">
              <summary className="flex items-start gap-6 md:gap-10 hover:text-forge transition-colors">
                <span className="mono-tag text-stone shrink-0 mt-2">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display italic text-2xl md:text-3xl leading-tight flex-1">{item.q}</h3>
                <span className="plus display text-3xl leading-none shrink-0 mt-1" aria-hidden>+</span>
              </summary>
              <p className="mt-6 md:pl-24 max-w-3xl text-paper/75 leading-relaxed text-pretty">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: QA.map((it) => ({
              '@type': 'Question',
              name: it.q,
              acceptedAnswer: { '@type': 'Answer', text: it.a },
            })),
          }),
        }}
      />
    </section>
  );
}
