// app/courses/[id]/page.tsx

import { notFound } from "next/navigation";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const tutorKey = process.env.TUTOR_API_KEY!;
  const tutorSecret = process.env.TUTOR_API_SECRET!;
  const auth = Buffer.from(`${tutorKey}:${tutorSecret}`).toString("base64");

  const res = await fetch(`https://waterbusinesscollege.co.za/wp-json/wp/v2/tutor_courses/${params.id}`, {
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    cache: 'no-store',
  });

  if (!res.ok) return notFound();

  const data = await res.json();

  const title = data?.title?.rendered || "Untitled Course";
  const content = data?.content?.rendered || "";
  const productId = data?.meta?._tutor_course_product_id;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {productId ? (
        <a
          href={`https://waterbusinesscollege.co.za/?add-to-cart=${productId}`}
          className="inline-block mt-6 bg-green-600 text-white text-lg px-6 py-3 rounded hover:bg-green-700"
        >
          Enroll Now
        </a>
      ) : (
        <p className="mt-6 text-red-500">Product not linked yet.</p>
      )}
    </div>
  );
}
