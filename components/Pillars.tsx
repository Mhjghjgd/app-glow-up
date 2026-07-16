import Link from 'next/link';

function Chapter({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="mono-tag text-forge">{num}</span>
      <span className="rule flex-1" />
      <span className="mono-tag text-stone">{title}</span>
    </div>
  );
}

export function Pillars() {
  return (
    <div id="piliers">
      {/* -------- PILIER 1 — Réponse automatique (hero split, editorial) -------- */}
      <section className="py-24 md:py-36 border-t border-paper/8" aria-labelledby="p1">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Chapter num="Pilier 01 · le cœur" title="Réponse automatique aux avis" />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7">
              <h2 id="p1" className="display-tight text-[clamp(2.5rem,6.5vw,6rem)] text-balance">
                Chaque avis reçoit sa <span className="italic text-forge">réponse</span> — et son <span className="italic">bon ton</span>.
              </h2>
              <p className="mt-10 text-lg md:text-xl text-paper/75 leading-snug max-w-2xl text-pretty">
                Connectez votre fiche Google Business Profile en 40 secondes. ReplyForge lit chaque nouvel avis, comprend le sens, et rédige une réponse conforme à votre ton — pas un template. Choisissez le modèle IA (Claude, GPT-5, Grok) et laissez-le écrire comme vous auriez écrit un mardi soir calme.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  ['Connexion GBP native', 'OAuth Google officiel, aucune extension à installer.'],
                  ['Modèle IA au choix', 'Claude 4.6, GPT-5, Grok — vous décidez qui répond.'],
                  ['Ton par type de commerce', '14 profils sectoriels : restaurant, hôtel, coiffure, auto…'],
                  ['Validation optionnelle', 'Publication auto ou brouillon selon votre niveau de contrôle.'],
                ].map(([k, v]) => (
                  <li key={k} className="grid grid-cols-12 gap-4 border-t border-paper/10 pt-4">
                    <span className="col-span-12 md:col-span-4 mono-tag text-forge">{k}</span>
                    <span className="col-span-12 md:col-span-8 text-paper/80 leading-snug">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:pl-8">
              <div className="border border-paper/12 bg-smoke p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="mono-tag text-stone">modèle</span>
                  <span className="mono-tag text-forge">claude-sonnet-4-6 ✓</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {['Claude', 'GPT-5', 'Grok'].map((m, i) => (
                    <div key={m} className={`text-center py-2 border ${i === 0 ? 'border-forge text-forge' : 'border-paper/15 text-paper/50'}`}>
                      <div className="text-xs">{m}</div>
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <span className="mono-tag text-stone">Ton</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Restaurant', 'Hôtel', 'Salon', 'Garage', 'Boutique'].map((t, i) => (
                      <span key={t} className={`text-xs px-2 py-1 border ${i === 0 ? 'bg-paper text-ink border-paper' : 'border-paper/15 text-paper/60'}`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-paper/10 pt-4">
                  <div className="mono-tag text-stone mb-2">Aperçu réponse</div>
                  <p className="display italic text-xl leading-tight">
                    &laquo; Merci Julien pour ces mots — je transmets à toute l&apos;équipe. À très vite en salle.&nbsp;»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- PILIER 2 — Assistant IA (chat magazine) -------- */}
      <section className="py-24 md:py-36 bg-paper text-ink" aria-labelledby="p2">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Chapter num="Pilier 02" title="Conseil SEO local" />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <h2 id="p2" className="display-tight text-[clamp(2.2rem,5.5vw,5rem)] text-balance">
                Un consultant SEO<br />
                <span className="italic text-forge">de garde</span>,<br />
                dans votre poche.
              </h2>
              <p className="mt-8 text-lg text-ink/70 leading-snug max-w-md text-pretty">
                &laquo; Pourquoi mon concurrent est devant moi ? &raquo; L&apos;assistant ReplyForge répond en 8 secondes, avec les données réelles de votre fiche et de votre zone. Il ne bavarde pas, il diagnostique.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <div className="border border-ink/12 p-6 md:p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="mono-tag text-ink/50 mt-1 shrink-0">Vous</span>
                    <p className="text-ink/85 leading-snug">Pourquoi &laquo; La Table du Marché &raquo; passe devant moi sur &laquo; restaurant Lyon 6 &raquo; ?</p>
                  </div>
                  <div className="flex gap-4 border-t border-ink/10 pt-6">
                    <span className="mono-tag text-forge mt-1 shrink-0">Forge</span>
                    <div className="text-ink/85 leading-snug space-y-3">
                      <p>Trois raisons, par ordre d&apos;impact :</p>
                      <ol className="space-y-2 pl-1">
                        <li><span className="text-forge">1.</span> Ils répondent à <b>94 %</b> des avis (vous : 31 %).</li>
                        <li><span className="text-forge">2.</span> Leur description contient &laquo; restaurant traditionnel Lyon 6 &raquo;, la vôtre non.</li>
                        <li><span className="text-forge">3.</span> Ils ont 42 photos géolocalisées, vous en avez 11.</li>
                      </ol>
                      <p className="pt-2 text-ink/70 text-sm">Voulez-vous que je corrige les 3 en un clic ?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- PILIER 3 — Optimisation visuelle (avant/après) -------- */}
      <section className="py-24 md:py-36 border-t border-paper/8" aria-labelledby="p3">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Chapter num="Pilier 03" title="Optimisation visuelle" />
          <div className="grid grid-cols-12 gap-6 mb-16">
            <h2 id="p3" className="col-span-12 lg:col-span-8 display-tight text-[clamp(2.2rem,6vw,5.5rem)] text-balance">
              Vos photos <span className="italic">avant</span>. Vos photos <span className="italic text-forge">après</span>.
            </h2>
            <p className="col-span-12 lg:col-span-4 text-lg text-paper/70 leading-snug text-pretty self-end">
              L&apos;IA image analyse chaque photo de votre fiche, corrige colorimétrie et cadrage, et suggère les angles qui manquent — ceux que Google pousse en tête.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-paper/15 border border-paper/15">
            <div className="relative bg-smoke aspect-[4/3] flex items-center justify-center">
              <div className="absolute top-4 left-4 mono-tag text-stone">avant</div>
              <div className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full opacity-40" role="img" aria-label="Photo avant optimisation">
                  <rect width="400" height="300" fill="#3A362E" />
                  <circle cx="120" cy="120" r="40" fill="#5A5348" />
                  <rect x="200" y="150" width="150" height="100" fill="#4A4438" />
                </svg>
              </div>
            </div>
            <div className="relative bg-smoke aspect-[4/3] flex items-center justify-center">
              <div className="absolute top-4 left-4 mono-tag text-forge">après</div>
              <svg viewBox="0 0 400 300" className="w-full h-full" role="img" aria-label="Photo après optimisation">
                <defs>
                  <linearGradient id="warm" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#C77A3B" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#F2EDE4" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="#1A1A17" />
                <rect width="400" height="300" fill="url(#warm)" />
                <circle cx="120" cy="120" r="45" fill="#C77A3B" opacity="0.9" />
                <rect x="200" y="140" width="160" height="110" fill="#F2EDE4" opacity="0.85" />
              </svg>
            </div>
          </div>
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 text-sm">
            {['Colorimétrie corrigée', 'Cadrage suggéré', 'Angle manquant identifié : la salle en vue plongeante'].map((t) => (
              <li key={t} className="flex gap-3 border-t border-paper/12 pt-4">
                <span className="text-forge">↳</span>
                <span className="text-paper/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------- PILIER 4 — Acquisition d'avis (planche imprimable) -------- */}
      <section className="py-24 md:py-36 bg-paper text-ink relative" aria-labelledby="p4">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Chapter num="Pilier 04" title="Acquisition d'avis Google" />
          <div className="grid grid-cols-12 gap-6 mb-16">
            <h2 id="p4" className="col-span-12 lg:col-span-7 display-tight text-[clamp(2.2rem,6vw,5.5rem)] text-balance">
              Un carton. Un QR. <span className="italic text-forge">Un avis.</span>
            </h2>
            <p className="col-span-12 lg:col-span-5 text-lg text-ink/70 leading-snug text-pretty self-end">
              Générez des cartes imprimables par secteur — sobres ou audacieuses. Le QR pointe directement vers le formulaire d&apos;avis Google. Zéro friction, zéro clic perdu.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {[
              { theme: 'Restaurant', tag: 'Merci d\'être passé', bg: 'bg-ink text-paper' },
              { theme: 'Hôtel', tag: 'Un mot avant de partir ?', bg: 'bg-forge text-paper' },
              { theme: 'Salon', tag: 'Comment était-ce ?', bg: 'bg-paper border border-ink/25' },
            ].map((c, i) => (
              <div key={c.theme} className={`col-span-12 md:col-span-4 aspect-[3/4] ${c.bg} p-8 flex flex-col justify-between relative`}>
                <div>
                  <div className="mono-tag opacity-70">Carte {String(i + 1).padStart(2, '0')} · {c.theme}</div>
                  <div className="display italic text-4xl md:text-5xl mt-4 leading-none">{c.tag}</div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs opacity-70 mb-1">Scannez pour laisser un avis</div>
                    <div className="display text-xl">→ Google</div>
                  </div>
                  <div className="w-20 h-20 grid grid-cols-8 gap-px p-1.5" aria-hidden style={{ backgroundColor: c.bg.includes('text-paper') ? '#F2EDE4' : '#0E0E0C' }}>
                    {Array.from({ length: 64 }).map((_, k) => (
                      <div key={k} className={((k * 7 + i * 3) % 3 === 0) ? 'opacity-0' : 'opacity-100'} style={{ backgroundColor: c.bg.includes('text-paper') ? '#0E0E0C' : '#F2EDE4' }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- PILIER 5 — Veille concurrentielle (data terminal) -------- */}
      <section className="py-24 md:py-36 border-t border-paper/8" aria-labelledby="p5">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Chapter num="Pilier 05" title="Veille concurrentielle locale" />
          <div className="grid grid-cols-12 gap-6 mb-14">
            <h2 id="p5" className="col-span-12 lg:col-span-8 display-tight text-[clamp(2.2rem,6vw,5.5rem)] text-balance">
              Ce que vos <span className="italic text-forge">voisins</span><br />
              font <span className="italic">mieux</span> que vous.
            </h2>
            <p className="col-span-12 lg:col-span-4 text-lg text-paper/70 leading-snug text-pretty self-end">
              Sélectionnez votre ville. ReplyForge cartographie vos 5 concurrents directs, ce qui marche chez eux, et sort la liste des 3 actions à prendre cette semaine.
            </p>
          </div>
          <div className="border border-paper/12 bg-smoke overflow-x-auto">
            <table className="w-full text-sm" aria-label="Comparatif concurrentiel">
              <thead className="border-b border-paper/12">
                <tr className="text-left">
                  {['Établissement', 'Note', 'Avis / mois', 'Réponses', 'Photos', 'Signal'].map((h) => (
                    <th key={h} className="mono-tag text-stone px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-mono text-paper/90">
                {[
                  ['Vous', '4,3', '18', '31 %', '11', 'À la traîne', ''],
                  ['La Table du Marché', '4,7', '42', '94 %', '38', 'En tête', 'text-forge'],
                  ['Chez Nino', '4,6', '31', '78 %', '27', 'Progresse', ''],
                  ['Bistro Rive Nord', '4,4', '22', '52 %', '16', 'Stable', ''],
                  ['La Vieille Cuisine', '4,5', '19', '61 %', '21', 'Stable', ''],
                ].map((r, i) => (
                  <tr key={i} className={`border-b border-paper/8 ${i === 0 ? 'bg-forge/10' : ''}`}>
                    <td className={`px-4 py-3 ${i === 0 ? 'text-forge' : ''}`}>{r[0]}</td>
                    <td className="px-4 py-3">{r[1]}</td>
                    <td className="px-4 py-3">{r[2]}</td>
                    <td className="px-4 py-3">{r[3]}</td>
                    <td className="px-4 py-3">{r[4]}</td>
                    <td className={`px-4 py-3 ${r[6] || ''}`}>{r[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 border border-forge/30 bg-forge/5 p-6">
            <div className="mono-tag text-forge mb-3">Recommandation de la semaine</div>
            <p className="display italic text-2xl md:text-3xl leading-tight max-w-3xl">
              Publier 4 photos de plats en gros plan avant vendredi. Vos deux concurrents devant vous en ont posté 6 le mois dernier.
            </p>
          </div>
        </div>
      </section>

      {/* -------- PILIER 6 — NLP report (dossier de presse) -------- */}
      <section className="py-24 md:py-36 bg-paper text-ink" aria-labelledby="p6">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Chapter num="Pilier 06" title="Analyse sémantique des avis" />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <h2 id="p6" className="display-tight text-[clamp(2.2rem,5.5vw,5rem)] text-balance">
                3 problèmes.<br />
                <span className="italic text-forge">3 solutions.</span>
              </h2>
              <p className="mt-8 text-lg text-ink/70 leading-snug max-w-sm text-pretty">
                L&apos;IA relit 6 mois d&apos;avis, isole les plaintes récurrentes, et rend un rapport court. Actionnable. Pas un tableau de bord de plus.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:pl-8">
              <div className="border-t border-ink/25 pt-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="mono-tag text-ink/50">Rapport #182 · 12 janv. 2026 · 218 avis analysés</span>
                  <span className="mono-tag text-forge">Confiance 96 %</span>
                </div>
                {[
                  { pb: 'L\'attente en salle le vendredi soir', freq: '31 %', sol: 'Ouvrir un poste supplémentaire de 19 h à 21 h — testé sur 4 restaurants comparables : −68 % de plaintes en 3 semaines.' },
                  { pb: 'Le bruit ambiant côté baie vitrée', freq: '18 %', sol: 'Ajouter 2 panneaux acoustiques suspendus. Solution documentée par le restaurant Le Comptoir (Bordeaux).' },
                  { pb: 'La carte des desserts jugée courte', freq: '14 %', sol: 'Ajouter 2 desserts saisonniers. Vos concurrents en proposent en moyenne 6, vous 3.' },
                ].map((r, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 py-8 border-b border-ink/15">
                    <div className="col-span-1 editorial-num text-5xl text-forge">{i + 1}</div>
                    <div className="col-span-11 md:col-span-6">
                      <div className="mono-tag text-ink/50 mb-2">Problème · {r.freq} des avis négatifs</div>
                      <div className="display italic text-2xl leading-tight">{r.pb}</div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                      <div className="mono-tag text-forge mb-2">Solution</div>
                      <p className="text-ink/80 leading-snug text-pretty">{r.sol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- PILIER 7 — Contenu social (feed vertical) -------- */}
      <section className="py-24 md:py-36 border-t border-paper/8" aria-labelledby="p7">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Chapter num="Pilier 07" title="Contenu social" />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <h2 id="p7" className="display-tight text-[clamp(2.2rem,5.5vw,5rem)] text-balance">
                Instagram et TikTok<br />
                <span className="italic text-forge">écrits</span> pour vous.
              </h2>
              <p className="mt-8 text-lg text-paper/70 leading-snug max-w-md text-pretty">
                Chaque mois, ReplyForge rédige les légendes, propose les visuels et cale un calendrier. Vous validez d&apos;un pouce. Quota inclus dans chaque plan.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
                <div>
                  <div className="editorial-num text-5xl text-signal">30</div>
                  <div className="mono-tag text-stone mt-1">posts / mois · plan Établi</div>
                </div>
                <div>
                  <div className="editorial-num text-5xl text-signal">90</div>
                  <div className="mono-tag text-stone mt-1">posts / mois · plan Enseigne</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { day: 'Lun', title: 'Le plat du jour', tag: 'Instagram' },
                  { day: 'Mer', title: 'Coulisses cuisine', tag: 'TikTok' },
                  { day: 'Ven', title: 'Weekend spécial', tag: 'Instagram' },
                  { day: 'Sam', title: 'Vue depuis la terrasse', tag: 'Instagram' },
                  { day: 'Dim', title: 'Le brunch continue', tag: 'TikTok' },
                  { day: 'Lun', title: 'Nouveau dessert', tag: 'Instagram' },
                ].map((p, i) => (
                  <div key={i} className="aspect-[3/4] border border-paper/15 bg-smoke p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="mono-tag text-stone">{p.day}</span>
                      <span className={`mono-tag ${p.tag === 'TikTok' ? 'text-signal' : 'text-forge'}`}>{p.tag}</span>
                    </div>
                    <div className="display italic text-xl leading-tight">{p.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
