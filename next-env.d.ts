import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          S-World
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/subjects">Subjects</Link>
        </nav>
      </div>
    </header>
  );
}
