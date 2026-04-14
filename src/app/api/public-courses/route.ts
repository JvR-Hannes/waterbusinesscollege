import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const courses = db.listCourses().filter((c) => c.status === "published");
  return NextResponse.json({ courses });
}

