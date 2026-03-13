import Link from "next/link";
import type { Route } from "next";
import { subjects } from "@/lib/mock-data";

export default function SubjectsPage() {
  return (
    <main>
      <div className="container">
        <h1 className="page-title">Subjects</h1>
        <p className="page-subtitle">
          Start with a subject. Phase 1 uses mock data so the routes work
          cleanly before database integration.
        </p>

        <div className="stack">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}` as Route}
              className="list-link"
            >
              <strong>{subject.name}</strong>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
