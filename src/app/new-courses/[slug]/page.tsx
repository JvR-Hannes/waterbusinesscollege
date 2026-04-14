"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Course } from "@/lib/models";

export default function NewCourseDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/public-courses/${slug}`);
        if (!res.ok) {
          setError("Course not found");
          return;
        }
        const data = await res.json();
        setCourse(data.course ?? null);
      } catch {
        setError("Failed to load course");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <p className="text-sm text-gray-600">Loading…</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <p className="text-sm text-red-600" role="alert">
            {error || "Course not found"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-4 text-3xl font-bold text-blue-700">
          {course.title}
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          This course is delivered via the new platform. Existing portal
          courses are still available on the old site while you transition.
        </p>

        {course.shortDescription && (
          <p className="mb-4 text-base text-gray-800">
            {course.shortDescription}
          </p>
        )}

        {course.fullDescription && (
          <div className="prose max-w-none text-gray-800">
            <p>{course.fullDescription}</p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-xl font-semibold text-gray-900">
              {course.isFree
                ? "Free"
                : course.price != null
                ? `R ${course.price.toFixed(2)}`
                : "To be confirmed"}
            </p>
          </div>
          <button
            type="button"
            className="rounded-md bg-blue-700 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Enrol / Apply (coming soon)
          </button>
        </div>
      </div>
    </div>
  );
}

