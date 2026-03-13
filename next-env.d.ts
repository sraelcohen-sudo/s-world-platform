import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import type { Topic } from "@/types/database";

type RouteContext = {
  params: Promise<{
    subjectId: string;
  }>;
};

export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { subjectId } = await params;

    const topics = await query<Topic>(
      `
        SELECT id, name, subject_id
        FROM topics
        WHERE subject_id = $1
        ORDER BY name ASC
      `,
      [subjectId]
    );

    return NextResponse.json({
      success: true,
      topics,
    });
  } catch (error) {
    console.error("Error fetching topics:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch topics",
      },
      { status: 500 }
    );
  }
}
