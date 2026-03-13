import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import type { Subject } from "@/types/database";

export async function GET() {
  try {
    const subjects = await query<Subject>(
      `
        SELECT id, name, exam_track_id
        FROM subjects
        ORDER BY name ASC
      `
    );

    return NextResponse.json({
      success: true,
      subjects,
    });
  } catch (error) {
    console.error("Error fetching subjects:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch subjects",
      },
      { status: 500 }
    );
  }
}
