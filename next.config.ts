import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import type { Question } from "@/types/database";

type RouteContext = {
  params: Promise<{
    subtopicId: string;
  }>;
};

export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { subtopicId } = await params;

    const questions = await query<Question>(
      `
        SELECT
          id,
          stem,
          option_a,
          option_b,
          option_c,
          option_d,
          option_e,
          correct_answer,
          explanation,
          subtopic_id,
          created_at
        FROM questions
        WHERE subtopic_id = $1
        ORDER BY created_at ASC
      `,
      [subtopicId]
    );

    return NextResponse.json({
      success: true,
      questions,
    });
  } catch (error) {
    console.error("Error fetching questions:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch questions",
      },
      { status: 500 }
    );
  }
}
