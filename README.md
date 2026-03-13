import Link from "next/link";
import { notFound } from "next/navigation";
import type { Route } from "next";
import { getSubjectById, getTopicsBySubjectId } from "@/lib/mock-data";

type PageProps = {
  params: Promise<{
    subjectId: string;
  }>;
};

export default async function SubjectDetailPage({ params }: PageProps) {
  const { subjectId } = await params;
  const subject = getSubjectById(subjectId);

  if (!subject) {
    notFound();
  }

  const topics = getTopicsBySubjectId(subjectId);

  return (
    <main>
      <div className="container">
        <div className="breadcrumbs">
          <Link href={"/subjects" as Route}>← Back to subjects</Link>
        </div>

        <h1 className="page-title">{subject.name}</h1>
        <p className="page-subtitle">
          Select a topic. In the next phase, these will come from the database.
        </p>

        {topics.length === 0 ? (
          <div className="card">
            <p className="muted">No topics found for this subject yet.</p>
          </div>
        ) : (
          <div className="stack">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}` as Route}
                className="list-link"
              >
                <strong>{topic.name}</strong>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
