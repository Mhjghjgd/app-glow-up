const ITEMS = [
  { label: 'Restaurant · Lyon 6e', value: '+38 avis / mois' },
  { label: 'Hôtel 3★ · Nice', value: 'Note 4,7 → 4,9' },
  { label: 'Coiffeur · Toulouse', value: '92 % de réponses' },
  { label: 'Garage · Rennes', value: '1er sur "garage centre"' },
  { label: 'Boulangerie · Paris 11e', value: '+41 % de visites' },
  { label: 'Institut · Marseille', value: '−73 % d\'avis négatifs' },
  { label: 'Restaurant · Bordeaux', value: 'Réponse en 4 min' },
  { label: 'Pharmacie · Strasbourg', value: 'Fiche complétée à 98 %' },
];

export function Ticker() {
  const items = [...ITEMS, ...ITEMS]; // duplicate for seamless loop
  return (
    <div
      className="mt-20 relative overflow-hidden border-y border-paper/12 bg-ink"
      style={{ height: '72px' }} // reserved height → CLS 0
      aria-label="Résultats clients récents"
    >
      <div className="ticker-track animate-ticker items-center h-full">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-6 px-8 h-full whitespace-nowrap border-r border-paper/8">
            <span className="mono-tag text-stone">{it.label}</span>
            <span className="display italic text-2xl text-forge">{it.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
