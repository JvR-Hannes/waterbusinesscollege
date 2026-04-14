import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { CourseStatus } from "@/lib/models";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const course = db.getCourse(id);
  if (!course) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ course });
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
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
    legacyPortalCourseUrl,
    legacyWooProductUrl,
  } = body as {
    title?: string;
    slug?: string;
    shortDescription?: string;
    fullDescription?: string;
    price?: number;
    isFree?: boolean;
    status?: CourseStatus;
    thumbnailMediaId?: string | null;
    legacyPortalCourseUrl?: string | null;
    legacyWooProductUrl?: string | null;
  };

  const updates: Record<string, unknown> = {};
  if (title !== undefined) updates.title = title;
  if (slug !== undefined) updates.slug = slug;
  if (shortDescription !== undefined) updates.shortDescription = shortDescription;
  if (fullDescription !== undefined) updates.fullDescription = fullDescription;
  if (price !== undefined) updates.price = price;
  if (isFree !== undefined) updates.isFree = isFree;
  if (status !== undefined) updates.status = status;
  if (thumbnailMediaId !== undefined) updates.thumbnailMediaId = thumbnailMediaId;
  if (legacyPortalCourseUrl !== undefined) updates.legacyPortalCourseUrl = legacyPortalCourseUrl;
  if (legacyWooProductUrl !== undefined) updates.legacyWooProductUrl = legacyWooProductUrl;

  const updated = db.updateCourse(id, updates);
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ course: updated });
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  const deleted = db.deleteCourse(id);
  if (!deleted) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

