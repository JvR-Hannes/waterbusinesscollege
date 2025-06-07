import { NextResponse } from "next/server";
import { getTokenData, updateApprovalStatus } from "@/lib/tokenStore";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const data = getTokenData(token);
  if (!data) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 404 });
  }

  updateApprovalStatus(token, false);

  return NextResponse.json({ message: `Declined ${data.email} for ${data.course}` });
}