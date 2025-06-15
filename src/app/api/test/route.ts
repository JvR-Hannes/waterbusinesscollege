import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: true });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ message: "API test route is working!" });
}