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

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://waterbusinesscollege.co.za',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
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

export async function OPTIONS(): Promise<NextResponse> {
  // CORS preflight response
  console.log("OPTIONS /api/sendApplication called - returning CORS headers");
  return new NextResponse(null, {
    status: 200,
    headers: CORS_HEADERS,
  });
}

export async function POST(req: Request): Promise<NextResponse> {
  console.log("POST /api/sendApplication called");
  try {
    const incomingReq = await requestToIncomingMessage(req);
    console.log("Converted request to IncomingMessage, starting form parse");

    const form = formidable({ multiples: false, keepExtensions: true });

    return await new Promise((resolve) => {
      form.parse(incomingReq, async (err, fields, files) => {
        if (err) {
          console.error("Formidable parse error:", err);
          return resolve(new NextResponse(JSON.stringify({ error: "Form parsing failed" }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...CORS_HEADERS,
            },
          }));
        }

        console.log("Form parsed successfully", { fields, files });

        const fullName = getField(fields, 'fullName');
        const idNumber = getField(fields, 'idNumber');
        const contactNumber = getField(fields, 'contactNumber');
        const email = getField(fields, 'email');
        const course = getField(fields, 'course');
        const additionalInfo = getField(fields, 'additionalInfo');

        console.log("Parsed fields:", {
          fullName,
          idNumber,
          contactNumber,
          email,
          course,
          additionalInfo,
        });

        let file: formidable.File | undefined;
        const uploaded = files.file;
        if (Array.isArray(uploaded)) {
          file = uploaded[0];
        } else if (uploaded) {
          file = uploaded;
        }
        console.log("File attached:", file ? file.originalFilename : "No file");

        console.log("Creating SMTP transporter with host:", process.env.SMTP_HOST);
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 465,
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          logger: true,
          debug: true,
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

        console.log("Sending email with options:", {
          from: mailOptions.from,
          to: mailOptions.to,
          subject: mailOptions.subject,
          attachments: file ? true : false,
        });

        try {
          await transporter.verify();
          console.log("SMTP connection verified successfully.");
        } catch (verifyError) {
          console.error("SMTP verification failed:", verifyError);
        }

        try {
          const info = await transporter.sendMail(mailOptions);
          console.log("Email sent successfully:", info);
          return resolve(new NextResponse(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              ...CORS_HEADERS,
            },
          }));
        } catch (error) {
          console.error("Failed to send email.");
          if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Full error:", error);
          } else {
            console.error("Unknown error type:", error);
          }
          return resolve(new NextResponse(JSON.stringify({ error: "Failed to send email" }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...CORS_HEADERS,
            },
          }));
        }
      });
    });
  } catch (err) {
    console.error("Unhandled error in POST /api/sendApplication:", err);
    return new NextResponse(JSON.stringify({ error: "Unexpected server error" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
    });
  }
}