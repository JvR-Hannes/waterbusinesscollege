import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { EnrollmentStatus, EnrollmentSource } from "@/lib/models";

export async function GET() {
  const enrollments = db.listEnrollments();
  return NextResponse.json({ enrollments });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { userId, courseId, status, source } = body as {
    userId?: string;
    courseId?: string;
    status?: EnrollmentStatus;
    source?: EnrollmentSource;
  };

  if (!userId || !courseId) {
    return NextResponse.json(
      { error: "userId and courseId are required" },
      { status: 400 }
    );
  }

  const effectiveStatus: EnrollmentStatus = status ?? "active";
  const effectiveSource: EnrollmentSource = source ?? "woo";

  const enrollment = db.addEnrollment({
    userId,
    courseId,
    status: effectiveStatus,
    source: effectiveSource,
  });

  return NextResponse.json({ enrollment }, { status: 201 });
}

