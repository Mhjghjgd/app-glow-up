export function Pricing() {
  const plans = [
    {
      name: 'Comptoir',
      price: '229',
      pitch: 'Le commerce indépendant qui veut gagner la ville.',
      volume: '1 fiche · jusqu\'à 100 avis / mois',
      features: [
        'Réponses IA illimitées',
        'Choix du modèle (Claude, GPT-5, Grok)',
        '14 templates sectoriels',
        'Optimisation photos (20 / mois)',
        'Générateur de cartes QR',
        '30 posts sociaux / mois',
        'Assistant SEO local',
        'Rapport NLP mensuel',
      ],
      highlight: false,
    },
    {
      name: 'Établi',
      price: '449',
      pitch: 'L\'enseigne qui vise 4,8 et la première place.',
      volume: 'jusqu\'à 5 fiches · avis illimités',
      features: [
        'Tout le plan Comptoir',
        'Multi-établissements (5)',
        'A/B testing des tons',
        'Veille concurrentielle par ville',
        'Alertes SMS avis négatifs',
        'Relance WhatsApp post-visite',
        '90 posts sociaux / mois',
        'Support prioritaire · 4 h ouvrées',
      ],
      highlight: true,
    },
    {
      name: 'Enseigne',
      price: '1 190',
      pitch: 'Le groupe qui pilote 10 à 50 points.',
      volume: 'jusqu\'à 50 fiches · SLA sur-mesure',
      features: [
        'Tout le plan Établi',
        'Multi-établissements (50)',
        'Rôles et permissions',
        'API + Webhooks',
        'Onboarding dédié 2 semaines',
        'Consultant SEO local trimestriel',
        'Rapport de direction mensuel',
        'Support prioritaire · 1 h ouvrée',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="tarifs" className="py-24 md:py-36 bg-paper text-ink" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="mono-tag text-forge">Chapitre 11</span>
          <span className="rule flex-1 text-ink" />
          <span className="mono-tag text-ink/60">Tarifs</span>
        </div>
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <h2 id="pricing-title" className="col-span-12 lg:col-span-8 display-tight text-[clamp(2.5rem,7vw,6.5rem)] text-balance">
            Trois plans.<br />
            <span className="italic text-forge">Un</span> engagement mensuel.
          </h2>
          <p className="col-span-12 lg:col-span-4 text-lg text-ink/70 leading-snug text-pretty">
            Sans engagement de durée. 14 jours d&apos;essai. Migration depuis un autre outil : offerte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
          {plans.map((p) => (
            <article key={p.name} className={`p-8 md:p-10 flex flex-col ${p.highlight ? 'bg-ink text-paper' : 'bg-paper'}`}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="display italic text-3xl">{p.name}</h3>
                {p.highlight && <span className="mono-tag text-signal">le plus choisi</span>}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="editorial-num text-6xl md:text-7xl">{p.price}</span>
                <span className="mono-tag">€ HT / mois</span>
              </div>
              <p className={`mb-6 ${p.highlight ? 'text-paper/70' : 'text-ink/60'} text-sm`}>{p.volume}</p>
              <p className={`display italic text-xl leading-tight mb-8 ${p.highlight ? 'text-forge' : 'text-forge'}`}>&laquo; {p.pitch} &raquo;</p>
              <ul className="space-y-3 mb-10 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 items-start">
                    <span className={p.highlight ? 'text-forge' : 'text-forge'}>—</span>
                    <span className={p.highlight ? 'text-paper/85' : 'text-ink/85'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-auto inline-flex items-center justify-between px-5 py-4 ${p.highlight ? 'bg-forge text-paper hover:bg-paper hover:text-ink' : 'bg-ink text-paper hover:bg-forge'} transition-colors text-sm`}
              >
                <span>Démarrer avec {p.name}</span>
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink/50 max-w-2xl">
          Une seule chose exclue de tous les plans : le mensonge. Vos avis restent authentiques, vos réponses restent les vôtres.
        </p>
      </div>
    </section>
  );
}
