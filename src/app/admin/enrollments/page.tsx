"use client";

import { useEffect, useState } from "react";
import type { Enrollment, EnrollmentSource } from "@/lib/models";

type EnrollmentRow = Enrollment & {
  userEmail?: string;
  courseTitle?: string;
};

export default function AdminEnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<EnrollmentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [source, setSource] = useState<EnrollmentSource>("woo");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/admin/enrollments");
        if (!res.ok) {
          setError("Failed to load enrollments");
          return;
        }
        const data = await res.json();
        setEnrollments(data.enrollments ?? []);
      } catch {
        setError("Failed to load enrollments");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[#2e528e]">
          Enrollments
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Overview of who has access to which courses. This can track manual
          enrollments alongside those created from WooCommerce data.
        </p>
      </div>

      <form
        className="space-y-3 rounded-lg bg-white p-4 shadow-sm"
        onSubmit={async (event) => {
          event.preventDefault();
          setError(null);
          try {
            const res = await fetch("/api/admin/enrollments", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId,
                courseId,
                status: "active",
                source,
              }),
            });
            if (!res.ok) {
              const data = await res.json().catch(() => ({}));
              setError(data.error || "Failed to create enrollment");
              return;
            }
            setUserId("");
            setCourseId("");
            const refreshed = await fetch("/api/admin/enrollments");
            const data = await refreshed.json();
            setEnrollments(data.enrollments ?? []);
          } catch {
            setError("Failed to create enrollment");
          }
        }}
      >
        <p className="text-sm font-medium text-gray-700">
          Add enrollment manually (e.g. based on WooCommerce order)
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
            required
          />
          <input
            type="text"
            placeholder="Course ID"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
            required
          />
          <select
            value={source}
            onChange={(e) =>
              setSource(e.target.value as EnrollmentSource)
            }
            className="rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
          >
            <option value="woo">WooCommerce</option>
            <option value="manual">Manual</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="rounded-md bg-[#2e528e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#24406e]"
        >
          Save enrollment
        </button>
      </form>

      {loading && <p className="text-sm text-gray-600">Loading…</p>}
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {!loading && enrollments.length === 0 && !error && (
        <p className="text-sm text-gray-600">
          No enrollments stored yet in this system.
        </p>
      )}

      <div className="grid gap-4">
        {enrollments.map((enrollment) => (
          <div
            key={enrollment.id}
            className="rounded-lg bg-white p-4 shadow-sm"
          >
            <p className="text-sm text-gray-900">
              User ID: <span className="font-mono">{enrollment.userId}</span>
            </p>
            <p className="text-sm text-gray-900">
              Course ID: <span className="font-mono">{enrollment.courseId}</span>
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Status: {enrollment.status} · Source: {enrollment.source}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

