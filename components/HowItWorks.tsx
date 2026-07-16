export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Connectez',
      time: '40 sec',
      desc: 'Reliez votre fiche Google Business Profile via OAuth officiel. Aucune donnée sensible ne quitte votre navigateur.',
    },
    {
      num: '02',
      title: 'Calibrez',
      time: '3 min',
      desc: 'Choisissez votre modèle IA, votre ton, votre niveau de validation. ReplyForge s\'imprègne de 20 anciennes réponses si vous en avez.',
    },
    {
      num: '03',
      title: 'Oubliez',
      time: 'toujours',
      desc: 'Chaque nouvel avis est traité sous 15 minutes. Vous recevez un résumé hebdomadaire par mail. C\'est tout.',
    },
  ];

  return (
    <section id="comment" className="py-24 md:py-36 border-t border-paper/8" aria-labelledby="how-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="mono-tag text-forge">Chapitre 09</span>
          <span className="rule flex-1" />
          <span className="mono-tag text-stone">Méthode</span>
        </div>
        <h2 id="how-title" className="display-tight text-[clamp(2.5rem,7vw,6.5rem)] max-w-4xl text-balance">
          Trois gestes.<br />
          <span className="italic text-forge">Un</span> instrument qui prend le relais.
        </h2>

        <ol className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/12">
          {steps.map((s) => (
            <li key={s.num} className="bg-ink p-10">
              <div className="flex items-baseline justify-between mb-8">
                <span className="editorial-num text-8xl text-forge">{s.num}</span>
                <span className="mono-tag text-stone">{s.time}</span>
              </div>
              <h3 className="display italic text-4xl mb-4">{s.title}</h3>
              <p className="text-paper/70 leading-snug text-pretty">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
