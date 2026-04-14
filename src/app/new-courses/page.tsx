"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Course } from "@/lib/models";

export default function NewCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/public-courses");
        if (!res.ok) {
          setError("Failed to load courses");
          return;
        }
        const data = await res.json();
        setCourses(data.courses ?? []);
      } catch {
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-2 text-center text-3xl font-bold text-blue-700">
          New Online Courses
        </h1>
        <p className="mb-10 text-center text-sm text-gray-600">
          These courses are managed fully in the new system. Existing portal
          courses remain available on your current platform.
        </p>

        {loading && <p className="text-center text-sm text-gray-600">Loading…</p>}
        {error && (
          <p className="text-center text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {!loading && courses.length === 0 && !error && (
          <p className="text-center text-sm text-gray-600">
            No new-system courses are published yet.
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="h-48 bg-gray-50">
                {/* Placeholder for thumbnail; later we can load from media library */}
                <div className="flex h-full items-center justify-center text-xs text-gray-400">
                  Thumbnail
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h2 className="mb-1 text-base font-semibold text-gray-900">
                  {course.title}
                </h2>
                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                  {course.shortDescription ||
                    "Course description will appear here."}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm text-gray-800">
                  <span className="font-semibold">
                    {course.isFree
                      ? "Free"
                      : course.price != null
                      ? `R ${course.price.toFixed(2)}`
                      : "Price TBC"}
                  </span>
                  <Link
                    href={`/new-courses/${course.slug}`}
                    className="rounded-md border border-blue-700 px-3 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-700 hover:text-white"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

