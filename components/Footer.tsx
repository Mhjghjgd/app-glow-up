import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/8 pt-20 pb-10" aria-labelledby="footer-title">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <h2 id="footer-title" className="sr-only">Pied de page</h2>

        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <Link href="/" className="flex items-baseline gap-1" aria-label="ReplyForge — accueil">
              <span className="display italic text-4xl leading-none">Reply</span>
              <span className="display text-4xl leading-none text-forge">Forge</span>
            </Link>
            <p className="mt-6 max-w-md text-paper/70 leading-snug text-pretty">
              L&apos;instrument de précision pour la réputation Google des commerces locaux. Fait à Paris, avec un vrai souci du ton.
            </p>
            <address className="not-italic mt-8 mono-tag text-stone">
              contact@replyforge.fr<br />
              12 rue de Turbigo · 75002 Paris
            </address>
          </div>

          <nav className="col-span-6 md:col-span-4 lg:col-span-2" aria-label="Produit">
            <h3 className="mono-tag text-stone mb-4">Produit</h3>
            <ul className="space-y-3">
              {[
                ['Fonctionnalités', '#piliers'],
                ['Méthode', '#comment'],
                ['Tarifs', '#tarifs'],
                ['Exemple', '/exemple'],
                ['FAQ', '#faq'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-forge transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="col-span-6 md:col-span-4 lg:col-span-2" aria-label="Ressources">
            <h3 className="mono-tag text-stone mb-4">Ressources</h3>
            <ul className="space-y-3">
              {[
                ['Blog SEO local', '/blog'],
                ['Guide fiche Google', '/blog/guide-fiche-google'],
                ['Étude réputation 2026', '/blog/etude-2026'],
                ['Statut · uptime', '/statut'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-forge transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="col-span-12 md:col-span-4 lg:col-span-3" aria-label="Société">
            <h3 className="mono-tag text-stone mb-4">Société</h3>
            <ul className="space-y-3">
              {[
                ['Mentions légales', '/mentions-legales'],
                ['Conditions générales', '/cgv'],
                ['Politique de confidentialité', '/confidentialite'],
                ['Cookies', '/cookies'],
                ['Nous écrire', 'mailto:contact@replyforge.fr'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-forge transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-paper/12 flex flex-wrap items-center justify-between gap-4 mono-tag text-stone">
          <span>© 2026 ReplyForge SAS · RCS Paris 923 145 872</span>
          <span>Édition n°01 · janvier 2026</span>
        </div>
      </div>
    </footer>
  );
}
