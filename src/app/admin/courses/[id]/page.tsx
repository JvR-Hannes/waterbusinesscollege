"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import type { Course } from "@/lib/models";

export default function EditCoursePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const courseId = params.id;

  const [course, setCourse] = useState<Course | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState<string>("");
  const [isFree, setIsFree] = useState(false);
  const [status, setStatus] = useState<"draft" | "published" | "archived">(
    "draft"
  );
  const [legacyPortalCourseUrl, setLegacyPortalCourseUrl] = useState("");
  const [legacyWooProductUrl, setLegacyWooProductUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/admin/courses/${courseId}`);
        if (!res.ok) {
          setError("Course not found");
          return;
        }
        const data = await res.json();
        const c = data.course as Course;
        setCourse(c);
        setTitle(c.title);
        setSlug(c.slug);
        setShortDescription(c.shortDescription ?? "");
        setIsFree(c.isFree);
        setPrice(
          !c.isFree && c.price != null ? c.price.toString() : ""
        );
        setStatus(c.status);
        setLegacyPortalCourseUrl(c.legacyPortalCourseUrl ?? "");
        setLegacyWooProductUrl(c.legacyWooProductUrl ?? "");
      } catch {
        setError("Failed to load course");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [courseId]);

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const body: Record<string, unknown> = {
        title,
        slug,
        shortDescription,
        isFree,
        status,
      };
      if (!isFree && price) {
        body.price = Number(price);
      } else {
        body.price = null;
      }
      body.legacyPortalCourseUrl = legacyPortalCourseUrl || null;
      body.legacyWooProductUrl = legacyWooProductUrl || null;

      const res = await fetch(`/api/admin/courses/${courseId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to save course");
        return;
      }

      const data = await res.json();
      const updated = data.course as Course;
      setCourse(updated);
      setStatus(updated.status);
    } catch {
      setError("Failed to save course");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this course and its modules/lessons?")) return;
    setError(null);
    try {
      const res = await fetch(`/api/admin/courses/${courseId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to delete course");
        return;
      }
      router.push("/admin/courses");
    } catch {
      setError("Failed to delete course");
    }
  };

  if (loading) {
    return <p className="text-sm text-gray-600">Loading…</p>;
  }

  if (!course) {
    return (
      <p className="text-sm text-red-600" role="alert">
        {error || "Course not found"}
      </p>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-[#2e528e]">
            Edit course
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Configure core details. A later step will add modules, lessons, and
            media management.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Delete course
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-4 rounded-lg bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Short description
          </label>
          <textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <input
              id="isFree"
              type="checkbox"
              checked={isFree}
              onChange={(e) => setIsFree(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-[#2e528e] focus:ring-[#2e528e]"
            />
            <label htmlFor="isFree" className="text-sm text-gray-700">
              Free course
            </label>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Price (ZAR)
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={isFree}
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e] disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as "draft" | "published" | "archived"
                )
              }
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Legacy TutorLMS course URL (optional)
            </label>
            <input
              type="url"
              value={legacyPortalCourseUrl}
              onChange={(e) => setLegacyPortalCourseUrl(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
              placeholder="https://portal.waterbusinesscollege.co.za/..."
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Legacy WooCommerce product URL (optional)
            </label>
            <input
              type="url"
              value={legacyWooProductUrl}
              onChange={(e) => setLegacyWooProductUrl(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
              placeholder="https://portal.waterbusinesscollege.co.za/product/..."
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/courses")}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Back to list
          </button>
          <button
            type="submit"
            disabled={saving}
            className="rounded-md bg-[#2e528e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#24406e] disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </div>
      </form>
    </section>
  );
}

