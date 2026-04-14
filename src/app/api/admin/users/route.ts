import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const users = db.listUsers();
  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { name, email, role } = body as {
    name?: string;
    email?: string;
    role?: "admin" | "student";
  };

  if (!name || !email || !role) {
    return NextResponse.json(
      { error: "Name, email, and role are required" },
      { status: 400 }
    );
  }

  const user = db.addUser({
    name,
    email,
    role,
    lastLoginAt: undefined,
  });

  return NextResponse.json({ user }, { status: 201 });
}

