import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <section className="hero">
          <h1>S-World Platform</h1>
          <p>
            A clean Phase 1 foundation for a medical exam preparation platform
            with structured subjects, topics, questions, analytics, and future
            contributor workflows.
          </p>
        </section>

        <div className="grid">
          <div className="card">
            <h2>Phase 1 Goal</h2>
            <p className="muted">
              Establish a stable Next.js foundation with clean routing before
              adding database logic, APIs, and dashboards.
            </p>
          </div>

          <div className="card">
            <h2>Current Routes</h2>
            <p className="muted">Home, subjects list, and subject detail pages.</p>
            <div style={{ marginTop: "1rem" }}>
              <Link href="/subjects" className="button">
                Open Subjects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
