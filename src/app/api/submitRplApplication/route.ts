import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import { IncomingMessage } from "http";
import { Readable } from "stream";
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
                const surname = getField(fields, 'surname');
                const idNumber = getField(fields, 'idNumber');
                const email = getField(fields, 'email');
                const course = getField(fields, 'course');
                const motivation = getField(fields, 'motivation');

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

                const mailOptions = {
                    from: `"RPL Application" <${process.env.EMAIL_USER}>`,
                    to: "students@waterbusinesscollege.co.za",
                    subject: `New RPL Application from ${fullName} ${surname}`,
                    replyTo: email,
                    text: `
Full Name: ${fullName} ${surname}
ID Number: ${idNumber}
Email: ${email}
Course: ${course}
Motivation/Statement:
${motivation}

To reply to the applicant, just click "Reply" in your email client.
          `,
                    html: `
<div style="font-family: sans-serif; line-height: 1.5;">
  <h2>New RPL Application</h2>
  <p><strong>Full Name:</strong> ${fullName} ${surname}</p>
  <p><strong>ID Number:</strong> ${idNumber}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Course:</strong> ${course}</p>
  <p><strong>Motivation / Statement:</strong><br/>${motivation.replace(/\n/g, "<br/>")}</p>
  <p>
    <a href="mailto:${email}" style="
      display: inline-block;
      margin-top: 16px;
      padding: 10px 16px;
      background-color: #2563eb;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    ">Reply to Applicant</a>
  </p>
</div>
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
