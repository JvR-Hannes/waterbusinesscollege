import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const DEFAULT_ADMIN_PASSWORD = "change-me-admin-password";

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: "" }));

  const expectedPassword =
    process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.length > 0
      ? process.env.ADMIN_PASSWORD
      : DEFAULT_ADMIN_PASSWORD;

  if (!password || password !== expectedPassword) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const cookieStore = await cookies();

  cookieStore.set("admin_session", "1", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  return NextResponse.json({ ok: true });
}

