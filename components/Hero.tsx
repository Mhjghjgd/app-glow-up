import { Ticker } from './Ticker';

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden" aria-labelledby="hero-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Left column — masthead */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="mono-tag text-forge">édition n°01</span>
              <span className="rule flex-1 text-paper" />
              <time className="mono-tag text-stone" dateTime="2026-01">France · 2026</time>
            </div>
            <h1 id="hero-title" className="display-tight text-[clamp(3rem,9vw,8.5rem)] text-balance">
              Répondez à <span className="italic text-forge">100 %</span><br />
              de vos avis Google.<br />
              <span className="italic text-stone">Sans y penser.</span>
            </h1>
            <p className="mt-10 max-w-xl text-lg md:text-xl text-paper/75 text-pretty leading-snug">
              ReplyForge est l&apos;instrument que les commerces locaux utilisent pour transformer chaque avis en trafic, chaque réponse en preuve — et chaque fiche Google Business en actif SEO qui rapporte.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#tarifs" className="btn-primary">
                <span>Démarrer — 229&nbsp;€/mois</span>
                <span aria-hidden>→</span>
              </a>
              <a href="/exemple" className="btn-ghost">
                <span>Voir un exemple en 30 secondes</span>
                <span aria-hidden>↗</span>
              </a>
            </div>

            {/* Live proof row */}
            <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <dt className="mono-tag text-stone">Avis traités</dt>
                <dd className="editorial-num text-4xl md:text-5xl mt-2 text-paper">184&nbsp;302</dd>
              </div>
              <div>
                <dt className="mono-tag text-stone">Temps moyen</dt>
                <dd className="editorial-num text-4xl md:text-5xl mt-2 text-paper">4<span className="text-stone">min</span></dd>
              </div>
              <div>
                <dt className="mono-tag text-stone">Note gagnée</dt>
                <dd className="editorial-num text-4xl md:text-5xl mt-2 text-signal">+0,7</dd>
              </div>
            </dl>
          </div>

          {/* Right column — live reply card */}
          <div className="col-span-12 lg:col-span-5 lg:pl-8">
            <div className="sticky top-24 border border-paper/12 bg-smoke p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="mono-tag text-forge">réponse · en direct</span>
                <span className="flex items-center gap-2 mono-tag text-stone">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-signal animate-pulse" aria-hidden />
                  claude sonnet 4.6
                </span>
              </div>
              <div className="border-l-2 border-forge pl-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-forge" aria-label="2 étoiles sur 5">★★<span className="text-paper/25">★★★</span></span>
                  <span className="mono-tag text-stone">Sophie · il y a 12 min</span>
                </div>
                <p className="text-paper/85 text-sm leading-relaxed">
                  &laquo; Table pas prête à 20 h alors qu&apos;on avait réservé. Service très correct ensuite mais début de soirée gâché. &raquo;
                </p>
              </div>
              <div className="mb-4">
                <span className="mono-tag text-stone">réponse générée</span>
              </div>
              <p className="display italic text-2xl leading-tight text-paper">
                &laquo; Sophie, je comprends votre frustration — vingt minutes d&apos;attente pour une table réservée, c&apos;est un vrai raté de ma part.&nbsp;»
              </p>
              <p className="mt-3 text-paper/70 text-sm leading-relaxed">
                Je vous invite avec grand plaisir à revenir prendre un verre à mes frais : nous ferons mieux, je vous le promets. Passez demander Karim au bar.
              </p>
              <div className="mt-6 pt-6 border-t border-paper/10 flex items-center justify-between text-xs">
                <span className="mono-tag text-stone">ton · restaurant chaleureux</span>
                <button className="mono-tag text-forge hover:underline">publier ↗</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker — CLS-safe fixed height */}
      <Ticker />
    </section>
  );
}
