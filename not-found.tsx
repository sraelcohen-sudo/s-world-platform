import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <section className="hero">
          <h1>S-World Platform</h1>
          <p>
            Phase 2 adds the database layer, shared types, and API routes while
            keeping the core learner navigation clean and stable.
          </p>
        </section>

        <div className="grid">
          <div className="card">
            <h2>Learner Flow</h2>
            <p className="muted">
              Subjects now connect to topic detail pages, and API routes are in
              place for subjects, topics, and questions.
            </p>
          </div>

          <div className="card">
            <h2>Explore</h2>
            <p className="muted">Start from the subjects directory.</p>
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
