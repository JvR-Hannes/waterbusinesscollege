import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import { IncomingMessage } from "http";
import { Readable } from "stream";
import crypto from "crypto";
import { saveToken } from "@/lib/tokenStore";
import { IncomingHttpHeaders } from "http";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function requestToIncomingMessage(req: Request): Promise<IncomingMessage> {
  const reader = req.body?.getReader();
  const stream = new Readable({
    async read() {
      if (!reader) {
        this.push(null);
        return;
      }

      try {
        const { done, value } = await reader.read();
        if (done) {
          this.push(null);
        } else {
          this.push(value);
        }
      } catch (err) {
        this.destroy(err instanceof Error ? err : new Error(String(err)));
      }
    }
  }) as IncomingMessage;

  stream.headers = Object.fromEntries(req.headers.entries()) as IncomingHttpHeaders;
  stream.method = req.method || "POST";
  stream.url = req.url || "";

  return stream;
}

function getField(fields: formidable.Fields, key: string): string {
  const value = fields[key as keyof typeof fields];
  if (Array.isArray(value)) return value[0] ?? '';
  if (typeof value === 'string') return value;
  return '';
}

export async function POST(req: Request): Promise<Response> {
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

        let file: formidable.File | undefined;
        const uploaded = files.file;
        if (Array.isArray(uploaded)) {
          file = uploaded[0];
        } else if (uploaded) {
          file = uploaded;
        }

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 465,
          secure: true, // true for port 465
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
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

        console.log(`Saved token for ${email}: ${token}`);

        const mailOptions = {
          from: `"Application Form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
          to: "students@waterbusinesscollege.co.za",
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
          if (error instanceof Error) {
            console.error("Error sending email:", error.message);
          } else {
            console.error("Unknown error sending email:", error);
          }
          return resolve(NextResponse.json({ error: "Failed to send email" }, { status: 500 }));
        }
      });
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error("Unhandled error:", err.message);
    } else {
      console.error("Unknown server error:", err);
    }
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
