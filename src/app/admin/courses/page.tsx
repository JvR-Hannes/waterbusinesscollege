"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Course } from "@/lib/models";

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/admin/courses");
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
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-[#2e528e]">
            Courses
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Manage courses that live in this custom system. Existing TutorLMS
            courses remain on the separate portal.
          </p>
        </div>
        <Link
          href="/admin/courses/new"
          className="rounded-md bg-[#2e528e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#24406e]"
        >
          New course
        </Link>
      </div>

      {loading && <p className="text-sm text-gray-600">Loading…</p>}
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {!loading && courses.length === 0 && !error && (
        <p className="text-sm text-gray-600">
          No courses yet. Click &quot;New course&quot; to create one.
        </p>
      )}

      <div className="grid gap-4">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/admin/courses/${course.id}`}
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm hover:bg-gray-50"
          >
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {course.title}
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Slug: {course.slug} · Status: {course.status}
              </p>
            </div>
            <span className="text-xs text-gray-500">
              {course.isFree
                ? "Free"
                : course.price != null
                ? `R ${course.price.toFixed(2)}`
                : "Price not set"}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

