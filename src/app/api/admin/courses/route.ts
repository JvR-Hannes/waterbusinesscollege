import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { CourseStatus } from "@/lib/models";

export async function GET() {
  const courses = db.listCourses();
  return NextResponse.json({ courses });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const {
    title,
    slug,
    shortDescription,
    fullDescription,
    price,
    isFree,
    status,
    thumbnailMediaId,
  } = body as {
    title?: string;
    slug?: string;
    shortDescription?: string;
    fullDescription?: string;
    price?: number;
    isFree?: boolean;
    status?: CourseStatus;
    thumbnailMediaId?: string;
    legacyPortalCourseUrl?: string;
    legacyWooProductUrl?: string;
  };

  if (!title || !slug) {
    return NextResponse.json(
      { error: "Title and slug are required" },
      { status: 400 }
    );
  }

  const effectiveStatus: CourseStatus = status ?? "draft";

  const course = db.createCourse({
    title,
    slug,
    shortDescription,
    fullDescription,
    price,
    isFree: Boolean(isFree),
    status: effectiveStatus,
    thumbnailMediaId,
    legacyPortalCourseUrl: body.legacyPortalCourseUrl,
    legacyWooProductUrl: body.legacyWooProductUrl,
  });

  return NextResponse.json({ course }, { status: 201 });
}

