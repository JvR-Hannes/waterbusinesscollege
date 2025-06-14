import nodemailer from 'nodemailer';

export async function sendMail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  // Set up transporter with your mail service credentials
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Water Business College" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
}