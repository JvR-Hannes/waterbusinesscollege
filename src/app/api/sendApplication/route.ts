import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import { IncomingMessage } from "http";
import { Readable } from "stream";
import crypto from "crypto";
import { saveToken } from "@/lib/tokenStore";

// Disable Next.js default body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper: Convert Web `Request` to Node.js `IncomingMessage`
async function requestToIncomingMessage(req: Request): Promise<IncomingMessage> {
  const readable = Readable.fromWeb(req.body as any) as unknown as IncomingMessage;
  readable.headers = Object.fromEntries(req.headers.entries());
  readable.method = req.method || "POST";
  readable.url = req.url || "";
  return readable;
}

// Helper: Normalize form fields
function getField(fields: formidable.Fields, key: string): string {
  const value = fields[key as keyof typeof fields];
  if (Array.isArray(value)) return value[0] ?? '';
  if (typeof value === 'string') return value;
  return '';
}

export async function POST(req: Request) {
  try {
    const incomingReq = await requestToIncomingMessage(req);

    const form = formidable({ multiples: false, keepExtensions: true });

    return await new Promise((resolve) => {
      form.parse(incomingReq, async (err, fields, files) => {
        if (err) {
          console.error("Formidable parse error:", err);
          return resolve(NextResponse.json({ error: "Form parsing failed" }, { status: 500 }));
        }

        const fullName = getField(fields, 'fullName');
        const idNumber = getField(fields, 'idNumber');
        const contactNumber = getField(fields, 'contactNumber');
        const email = getField(fields, 'email');
        const course = getField(fields, 'course');
        const additionalInfo = getField(fields, 'additionalInfo');

        // Handle file safely
        let file: formidable.File | undefined;
        const uploaded = files.file;
        if (Array.isArray(uploaded)) {
          file = uploaded[0];
        } else if (uploaded) {
          file = uploaded;
        }

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const token = crypto.randomUUID();

        const approveLink = `${process.env.BASE_URL}/api/approve?token=${token}`;
        const declineLink = `${process.env.BASE_URL}/api/decline?token=${token}`;

        saveToken(token, {
          email,
          course,
          approved: null,
        });

        const mailOptions = {
          from: `"Application Form" <${process.env.EMAIL_USER}>`,
          to: "admin@yourdomain.com",
          subject: `New Application from ${fullName}`,
          text: `
Name: ${fullName}
ID Number: ${idNumber}
Contact Number: ${contactNumber}
Email: ${email}
Course: ${course}
Additional Info: ${additionalInfo || "N/A"}

--- Admin Actions ---
Approve: ${approveLink}
Decline: ${declineLink}
  `,
          attachments: file
            ? [
              {
                filename: file.originalFilename || "document",
                content: fs.createReadStream(file.filepath),
              },
            ]
            : [],
        };

        try {
          await transporter.sendMail(mailOptions);
          return resolve(NextResponse.json({ success: true }));
        } catch (error) {
          console.error("Error sending email:", error);
          return resolve(NextResponse.json({ error: "Failed to send email" }, { status: 500 }));
        }
      });
    });
  } catch (err) {
    console.error("Unhandled error:", err);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}