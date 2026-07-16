import Link from 'next/link';

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/70 backdrop-blur-md border-b border-paper/8">
      <nav className="mx-auto max-w-[1440px] px-6 md:px-10 h-16 flex items-center justify-between" aria-label="Navigation principale">
        <Link href="/" className="flex items-center gap-2" aria-label="ReplyForge — accueil">
          <span className="display italic text-2xl leading-none">Reply</span>
          <span className="display text-2xl leading-none text-forge">Forge</span>
          <span className="hidden md:inline mono-tag text-stone ml-3">v.1</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li><Link href="#piliers" className="hover:text-forge transition-colors">Produit</Link></li>
          <li><Link href="#comment" className="hover:text-forge transition-colors">Méthode</Link></li>
          <li><Link href="#tarifs" className="hover:text-forge transition-colors">Tarifs</Link></li>
          <li><Link href="#faq" className="hover:text-forge transition-colors">FAQ</Link></li>
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/exemple" className="hidden md:inline text-sm hover:text-forge transition-colors">Voir un exemple</Link>
          <Link href="#tarifs" className="text-sm px-4 py-2 bg-paper text-ink hover:bg-forge hover:text-paper transition-colors">Essayer</Link>
        </div>
      </nav>
    </header>
  );
}
