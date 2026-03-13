import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="container">
        <h1 className="page-title">Page not found</h1>
        <p className="page-subtitle">
          The page you requested does not exist in Phase 1.
        </p>
        <Link href="/" className="button">
          Return home
        </Link>
      </div>
    </main>
  );
}
