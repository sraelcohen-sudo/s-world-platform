import Link from "next/link";
import { notFound } from "next/navigation";
import type { Route } from "next";
import { getSubjectById } from "@/lib/mock-data";

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

  return (
    <main>
      <div className="container">
        <div className="breadcrumbs">
          <Link href={"/subjects" as Route}>← Back to subjects</Link>
        </div>

        <h1 className="page-title">{subject.name}</h1>
        <p className="page-subtitle">
          This is the Phase 1 subject detail page. In Phase 2, this page will
          load real topics from the database.
        </p>

        <div className="card">
          <h2>Coming Next</h2>
          <p className="muted">
            Phase 2 will add the PostgreSQL connection, shared database types,
            and topic retrieval for each subject.
          </p>
        </div>
      </div>
    </main>
  );
}