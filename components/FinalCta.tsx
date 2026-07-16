export function FinalCta() {
  return (
    <section className="py-24 md:py-36 bg-forge text-ink relative overflow-hidden" aria-labelledby="cta-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 relative z-10">
        <div className="flex items-center gap-3 mb-16">
          <span className="mono-tag text-ink/70">Édition n°01 · Finale</span>
          <span className="rule flex-1 text-ink" />
          <span className="mono-tag text-ink/70">2026</span>
        </div>
        <h2 id="cta-title" className="display-tight text-[clamp(3rem,10vw,11rem)] text-balance">
          Prenez la <span className="italic">plume</span>.<br />
          On tient l&apos;<span className="italic">encre</span>.
        </h2>
        <div className="mt-16 flex flex-wrap items-center gap-6">
          <a href="#tarifs" className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-5 hover:bg-paper hover:text-ink transition-colors text-base">
            <span>Démarrer 14 jours d&apos;essai</span>
            <span aria-hidden>→</span>
          </a>
          <a href="/exemple" className="inline-flex items-center gap-3 border-b border-ink text-ink hover:opacity-70 transition-opacity">
            <span>Voir un exemple d&apos;abord</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
        <p className="mt-10 mono-tag text-ink/60">Sans carte bancaire · Migration offerte · Résiliation en un clic</p>
      </div>
    </section>
  );
}
