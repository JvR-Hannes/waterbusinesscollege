"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewCoursePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [legacyPortalCourseUrl, setLegacyPortalCourseUrl] = useState("");
  const [legacyWooProductUrl, setLegacyWooProductUrl] = useState("");
  const [price, setPrice] = useState<string>("");
  const [isFree, setIsFree] = useState(false);
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

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
      }
      if (legacyPortalCourseUrl) {
        body.legacyPortalCourseUrl = legacyPortalCourseUrl;
      }
      if (legacyWooProductUrl) {
        body.legacyWooProductUrl = legacyWooProductUrl;
      }

      const res = await fetch("/api/admin/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to create course");
        return;
      }

      const data = await res.json();
      const id = data.course?.id as string | undefined;
      if (id) {
        router.push(`/admin/courses/${id}`);
      } else {
        router.push("/admin/courses");
      }
    } catch {
      setError("Failed to create course");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[#2e528e]">
          New course
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Define the basic details. You&apos;ll add modules, lessons, and media
          after saving.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow-sm">
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
              placeholder="e.g. water-reticulation-nqf4"
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
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
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
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-md bg-[#2e528e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#24406e] disabled:opacity-60"
          >
            {submitting ? "Creating…" : "Create course"}
          </button>
        </div>
      </form>
    </section>
  );
}

