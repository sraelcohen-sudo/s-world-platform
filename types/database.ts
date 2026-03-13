export type ExamTrack = {
  id: string;
  name: string;
  slug?: string | null;
};

export type Discipline = {
  id: string;
  name: string;
  exam_track_id?: string | null;
  slug?: string | null;
};

export type Competency = {
  id: string;
  name: string;
  discipline_id?: string | null;
  slug?: string | null;
};

export type Blueprint = {
  id: string;
  name: string;
  description?: string | null;
  competency_id?: string | null;
};

export type Subject = {
  id: string;
  name: string;
  exam_track_id?: string | null;
};

export type Topic = {
  id: string;
  name: string;
  subject_id?: string | null;
};

export type Subtopic = {
  id: string;
  name: string;
  topic_id?: string | null;
};

export type Question = {
  id: string;
  stem: string;
  option_a?: string | null;
  option_b?: string | null;
  option_c?: string | null;
  option_d?: string | null;
  option_e?: string | null;
  correct_answer?: string | null;
  explanation?: string | null;
  subtopic_id?: string | null;
  created_at?: string | null;
};

export type Submission = {
  id: string;
  author_id?: string | null;
  question_id?: string | null;
  status?: "draft" | "submitted" | "approved" | "rejected" | null;
  created_at?: string | null;
};

export type UserProfile = {
  id: string;
  full_name?: string | null;
  email?: string | null;
  role?: string | null;
};