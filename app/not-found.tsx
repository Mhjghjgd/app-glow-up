import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="editorial-num text-8xl md:text-9xl text-forge mb-6">404</div>
        <h1 className="display italic text-3xl md:text-4xl mb-6">Cette page a été effacée par la mer.</h1>
        <Link href="/" className="btn-primary inline-flex">
          <span>Retour au sommaire</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
