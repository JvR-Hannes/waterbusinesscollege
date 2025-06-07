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

    updateApprovalStatus(token, true);

    // TODO: Apply discount logic here (e.g., update DB)

    return new NextResponse(`
  <html>
    <body>
      <h1>Application Approved ✅</h1>
      <p>${data.email} is approved for the course: ${data.course}</p>
    </body>
  </html>
`, {
        headers: { "Content-Type": "text/html" }
    });
}
