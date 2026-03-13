export type Subject = {
  id: string;
  name: string;
};

export const subjects: Subject[] = [
  { id: "mccqe", name: "MCCQE" },
  { id: "internal-medicine", name: "Internal Medicine" },
  { id: "public-health", name: "Public Health" },
];

export function getSubjectById(subjectId: string): Subject | undefined {
  return subjects.find((subject) => subject.id === subjectId);
}
