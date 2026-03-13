import Link from "next/link";
import type { Route } from "next";
import { subjects } from "@/lib/mock-data";

export default function SubjectsPage() {
  return (
    <main>
      <div className="container">
        <h1 className="page-title">Subjects</h1>
        <p className="page-subtitle">
          Phase 2 still uses mock display data for the UI, while API routes and
          database utilities are now ready for integration.
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
