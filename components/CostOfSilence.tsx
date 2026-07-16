export function CostOfSilence() {
  return (
    <section className="relative py-24 md:py-36 bg-paper text-ink" aria-labelledby="cost-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-16">
          <span className="mono-tag text-forge">Chapitre 01</span>
          <span className="rule flex-1 text-ink" />
          <span className="mono-tag text-ink/60">Le coût du silence</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 id="cost-title" className="display-tight text-[clamp(2.5rem,7vw,6.5rem)] text-balance">
              Un avis sans réponse<br />
              coûte <span className="italic text-forge">plus cher</span> qu&apos;un<br />
              avis <span className="italic">négatif</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-lg text-ink/70 leading-snug max-w-sm text-pretty">
              Google favorise les fiches qui répondent. Les clients aussi. Le silence est le seul signal que vos concurrents rêvent que vous envoyiez.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15">
          {[
            { num: '−32 %', label: 'de visibilité SEO locale', desc: 'quand vos concurrents répondent et pas vous.' },
            { num: '×2,3', label: 'sur la note perçue', desc: 'lorsqu\'une réponse suit un avis négatif sous 48 h.' },
            { num: '76 %', label: 'des clients', desc: 'lisent les réponses du gérant avant de choisir.' },
          ].map((k) => (
            <div key={k.num} className="bg-paper p-10 md:p-12">
              <div className="editorial-num text-7xl md:text-8xl text-ink">{k.num}</div>
              <div className="mt-6 mono-tag text-forge">{k.label}</div>
              <p className="mt-3 text-ink/75 leading-snug">{k.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-2xl text-sm text-ink/50 leading-relaxed">
          Sources : Google Business Profile Insights (2024), BrightLocal Consumer Review Survey 2024, étude interne ReplyForge sur 1&nbsp;240 fiches françaises.
        </p>
      </div>
    </section>
  );
}
