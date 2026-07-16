export function Proof() {
  return (
    <section className="py-24 md:py-36 border-t border-paper/8" aria-labelledby="proof-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="mono-tag text-forge">Chapitre 10</span>
          <span className="rule flex-1" />
          <span className="mono-tag text-stone">Preuves à l&apos;appui</span>
        </div>
        <h2 id="proof-title" className="display-tight text-[clamp(2.5rem,7vw,6.5rem)] max-w-5xl text-balance">
          Ce qui se passe <span className="italic text-forge">quand on répond.</span>
        </h2>

        {/* Before / after fiche Google */}
        <div className="mt-20 grid grid-cols-12 gap-6">
          {/* AVANT */}
          <div className="col-span-12 md:col-span-6 border border-paper/12 bg-smoke p-6">
            <div className="mono-tag text-stone mb-4">Fiche · avant ReplyForge</div>
            <div className="display italic text-3xl mb-3">Le Comptoir de Léa</div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-forge" aria-hidden>★★★★<span className="text-paper/25">★</span></span>
              <span className="mono-tag text-paper/70">4,1 · 87 avis</span>
            </div>
            <dl className="space-y-3 text-sm">
              {[
                ['Taux de réponse', '18 %'],
                ['Avis / mois', '4'],
                ['Photos', '9'],
                ['Position &quot;restaurant Lyon 3&quot;', '#14'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-paper/10 pb-3">
                  <dt className="text-paper/60">{k}</dt>
                  <dd className="font-mono">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* APRÈS */}
          <div className="col-span-12 md:col-span-6 border border-forge bg-forge/5 p-6">
            <div className="mono-tag text-forge mb-4">Fiche · 4 mois plus tard</div>
            <div className="display italic text-3xl mb-3">Le Comptoir de Léa</div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-forge" aria-hidden>★★★★★</span>
              <span className="mono-tag text-paper">4,8 · 156 avis</span>
            </div>
            <dl className="space-y-3 text-sm">
              {[
                ['Taux de réponse', '100 %', '+82 pts'],
                ['Avis / mois', '19', '×4,7'],
                ['Photos', '41', '+32'],
                ['Position &quot;restaurant Lyon 3&quot;', '#3', '↑11'],
              ].map(([k, v, delta]) => (
                <div key={k} className="flex justify-between items-center border-b border-forge/25 pb-3">
                  <dt className="text-paper/70">{k}</dt>
                  <dd className="flex items-baseline gap-3">
                    <span className="font-mono">{v}</span>
                    <span className="mono-tag text-signal">{delta}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <blockquote className="mt-20 max-w-4xl">
          <p className="display italic text-3xl md:text-5xl leading-tight text-balance">
            &laquo; En quatre mois, ma fiche est passée devant deux restaurants qui étaient là depuis dix ans. Je fais deux services par week-end en plus. &raquo;
          </p>
          <footer className="mt-8 mono-tag text-stone">
            Karim B. · Le Comptoir de Léa · Lyon 3<sup>e</sup>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
