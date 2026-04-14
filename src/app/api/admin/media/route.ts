import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const media = db.listMedia();
  return NextResponse.json({ media });
}

