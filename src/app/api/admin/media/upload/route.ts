import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.startsWith("multipart/form-data")) {
    return NextResponse.json(
      { error: "Expected multipart/form-data" },
      { status: 400 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "No file uploaded" },
      { status: 400 }
    );
  }

  const uploadsDir = path.resolve(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const filePath = path.join(uploadsDir, `${Date.now()}-${safeName}`);
  fs.writeFileSync(filePath, buffer);

  const urlPath = "/uploads/" + path.basename(filePath);

  const stat = fs.statSync(filePath);

  const media = db.addMedia({
    url: urlPath,
    fileName: file.name,
    mimeType: file.type || "application/octet-stream",
    sizeBytes: stat.size,
    type: file.type.startsWith("image/")
      ? "image"
      : file.type === "application/pdf"
      ? "document"
      : "other",
    usedByType: undefined,
    usedById: undefined,
  });

  return NextResponse.json({ media }, { status: 201 });
}

