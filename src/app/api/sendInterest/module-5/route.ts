// src/app/api/send-interest/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { sendMail } from '@/utils/mailer'; // You’ll need to define this if not yet

export async function POST(req: NextRequest) {
  const { name, email, phone } = await req.json();

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    await sendMail({
      subject: 'New Module 5 Interest Submission',
      to: 'applications@waterbusinesscollage.co.za',
      html: `
        <h2>Module 5 Interest Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}