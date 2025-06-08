import { NextResponse } from 'next/server';

export async function GET() {
  const tutorKey = process.env.TUTOR_API_KEY;
  const tutorSecret = process.env.TUTOR_API_SECRET;

  if (!tutorKey || !tutorSecret) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 500 });
  }

  const auth = Buffer.from(`${tutorKey}:${tutorSecret}`).toString('base64');
  const headers = {
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/json',
  };

  try {
    const res = await fetch('https://waterbusinesscollege.co.za/wp-json/tutor/v1/courses', {
      headers,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`❌ Error fetching courses: ${errorText}`);
      return NextResponse.json({ error: 'Error fetching courses' }, { status: 500 });
    }

    const data = await res.json();

    if (!data?.data?.posts || !Array.isArray(data.data.posts)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 500 });
    }

    return NextResponse.json({ data: data.data.posts });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Error in main request: ${error.message}`);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.error(`❌ Unknown error`, error);
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
