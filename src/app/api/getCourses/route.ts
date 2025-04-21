import { NextResponse } from "next/server";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string, options: RequestInit, retries = 3, delay = 1000): Promise<Response> {
  let attempt = 0;
  while (attempt < retries) {
    const res = await fetch(url, options);

    if (res.status === 503) {
      // If it's a 503, wait and retry
      console.log("503 Service Unavailable, retrying...");
      attempt += 1;
      await sleep(delay);
    } else {
      return res;
    }
  }
  throw new Error("Max retries reached or server is still unavailable.");
}

export async function GET() {
  const tutorKey = process.env.TUTOR_API_KEY;
  const tutorSecret = process.env.TUTOR_API_SECRET;

  // Check for missing credentials
  if (!tutorKey || !tutorSecret) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 500 });
  }

  const auth = Buffer.from(`${tutorKey}:${tutorSecret}`).toString("base64");
  const baseHeaders = {
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/json",
  };

  try {
    // Fetch the courses data
    const res = await fetch("https://waterbusinesscollege.co.za/wp-json/tutor/v1/courses", {
      headers: baseHeaders,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`❌ Error fetching courses: ${errorText}`);
      return NextResponse.json({ error: "Error fetching courses" }, { status: 500 });
    }

    const data = await res.json();

    // Check if 'data.data.posts' exists and is an array
    if (!data?.data?.posts || !Array.isArray(data.data.posts)) {
      return NextResponse.json({ error: "Invalid data format" }, { status: 500 });
    }

    // Process each course with additional metadata
    const coursesWithProducts = await Promise.all(
      data.data.posts.map(async (course: any) => {
        await sleep(200); // Prevent excessive requests

        try {
          // Fetch metadata for each course with retry logic
          const metaRes = await fetchWithRetry(
            `https://waterbusinesscollege.co.za/wp-json/wp/v2/tutor_courses/${course.ID}`,
            { headers: baseHeaders }
          );

          if (!metaRes.ok) {
            const errorText = await metaRes.text();
            console.error(`❌ Error fetching meta for course ${course.ID}: ${errorText}`);
            return { ...course, product_id: null };
          }

          const contentType = metaRes.headers.get("content-type");
          const isJson = contentType?.includes("application/json");

          if (!isJson) {
            const body = await metaRes.text();
            console.error(`❌ Invalid JSON for course ${course.ID}: ${body.slice(0, 100)}...`);
            return { ...course, product_id: null };
          }

          const metaData = await metaRes.json();
          const productId = metaData?.meta?._tutor_course_product_id || null;

          return {
            ...course,
            product_id: productId,
          };
        } catch (err: any) {
          console.error(`❌ Error fetching product ID for course ${course.ID}: ${err.message}`);
          return { ...course, product_id: null };
        }
      })
    );

    return NextResponse.json({ data: coursesWithProducts });
  } catch (error: any) {
    console.error(`❌ Error in main request: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
