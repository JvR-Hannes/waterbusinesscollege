import { NextResponse } from "next/server";
import { db } from "@/lib/db";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, { params }: Params) {
  const { slug } = await params;
  const courses = db.listCourses();
  const course = courses.find((c) => c.slug === slug && c.status === "published");
  if (!course) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ course });
}

