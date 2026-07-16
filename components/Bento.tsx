export function Bento() {
  return (
    <section className="py-24 md:py-36 bg-paper text-ink" aria-labelledby="bento-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="mono-tag text-forge">Chapitre 08</span>
          <span className="rule flex-1 text-ink" />
          <span className="mono-tag text-ink/60">Le reste, à demeure</span>
        </div>
        <h2 id="bento-title" className="display-tight text-[clamp(2.2rem,6vw,5.5rem)] max-w-4xl text-balance">
          Huit détails qui font le <span className="italic text-forge">professionnel</span>.
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-4">
          {/* Alertes avis négatifs — large */}
          <div className="col-span-12 md:col-span-8 border border-ink/20 p-8 md:p-10 relative overflow-hidden">
            <div className="mono-tag text-forge mb-4">Alerte · validation humaine</div>
            <h3 className="display text-3xl md:text-5xl italic leading-tight">Aucun avis 1 étoile ne passe sans votre feu vert.</h3>
            <p className="mt-4 text-ink/70 max-w-lg leading-snug">Notification SMS immédiate, brouillon rédigé, publication seulement après votre validation.</p>
            <div className="absolute right-8 bottom-8 hidden md:flex items-center gap-3">
              <span className="editorial-num text-6xl text-ink/20">SMS</span>
            </div>
          </div>

          {/* Dashboard analytics — square */}
          <div className="col-span-12 md:col-span-4 border border-ink/20 p-8 md:p-10">
            <div className="mono-tag text-forge mb-4">Analytics</div>
            <h3 className="display text-2xl md:text-3xl italic leading-tight">Un tableau de bord qui tient sur un écran.</h3>
            <div className="mt-6 flex items-end gap-1 h-16" aria-hidden>
              {[40, 55, 48, 62, 71, 68, 82, 91].map((h, i) => (
                <div key={i} className="flex-1 bg-forge" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          {/* Multi-établissements */}
          <div className="col-span-6 md:col-span-4 border border-ink/20 p-8">
            <div className="mono-tag text-forge mb-4">Multi-sites</div>
            <h3 className="display text-2xl italic leading-tight">Une chaîne, un compte, tous les points.</h3>
            <div className="mt-6 mono-tag text-ink/50">jusqu&apos;à 50 fiches</div>
          </div>

          {/* A/B testing */}
          <div className="col-span-6 md:col-span-4 border border-ink/20 p-8">
            <div className="mono-tag text-forge mb-4">A/B testing</div>
            <h3 className="display text-2xl italic leading-tight">Deux tons. Un gagnant, mesuré.</h3>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="editorial-num text-4xl">A</span>
              <span className="mono-tag text-ink/50">vs</span>
              <span className="editorial-num text-4xl text-forge">B</span>
            </div>
          </div>

          {/* Templates sectoriels — large horizontal */}
          <div className="col-span-12 md:col-span-4 border border-ink/20 p-8">
            <div className="mono-tag text-forge mb-4">Templates</div>
            <h3 className="display text-2xl italic leading-tight">14 profils métier, prêts à l&apos;emploi.</h3>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {['Resto', 'Hôtel', 'Salon', 'Auto', 'Boulangerie', 'Pharma', 'Sport'].map((t) => (
                <span key={t} className="text-xs px-2 py-1 border border-ink/25">{t}</span>
              ))}
            </div>
          </div>

          {/* Relance WhatsApp/SMS */}
          <div className="col-span-12 md:col-span-6 border border-ink/20 p-8">
            <div className="mono-tag text-forge mb-4">Relance post-visite</div>
            <h3 className="display text-2xl italic leading-tight">Un SMS ou un WhatsApp au bon moment double le taux d&apos;avis.</h3>
          </div>

          {/* Traduction */}
          <div className="col-span-6 md:col-span-3 border border-ink/20 p-8">
            <div className="mono-tag text-forge mb-4">Traduction</div>
            <h3 className="display text-2xl italic leading-tight">Répondez dans la langue.</h3>
            <div className="mt-4 mono-tag text-ink/50">32 langues</div>
          </div>

          {/* Score gamifié */}
          <div className="col-span-6 md:col-span-3 border border-forge bg-forge/10 p-8">
            <div className="mono-tag text-forge mb-4">Score de fiche</div>
            <h3 className="display text-2xl italic leading-tight">Votre note interne.</h3>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="editorial-num text-5xl text-forge">87</span>
              <span className="text-ink/50 text-sm">/ 100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
