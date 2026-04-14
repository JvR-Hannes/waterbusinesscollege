"use client";

import { useEffect, useState } from "react";
import type { Media } from "@/lib/models";

export default function AdminMediaPage() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    try {
      const res = await fetch("/api/admin/media");
      if (!res.ok) {
        setError("Failed to load media");
        return;
      }
      const data = await res.json();
      setMedia(data.media ?? []);
    } catch {
      setError("Failed to load media");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/media/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Upload failed");
        return;
      }
      await load();
    } catch {
      setError("Upload failed");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this file? This cannot be undone.")) return;
    setError(null);
    try {
      const res = await fetch(`/api/admin/media/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Delete failed");
        return;
      }
      setMedia((prev) => prev.filter((m) => m.id !== id));
    } catch {
      setError("Delete failed");
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-[#2e528e]">
            Media library
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Upload and manage images and documents used by courses and lessons.
          </p>
        </div>
        <label className="inline-flex cursor-pointer items-center rounded-md bg-[#2e528e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#24406e]">
          <input
            type="file"
            className="hidden"
            onChange={handleUpload}
            disabled={uploading}
          />
          {uploading ? "Uploading…" : "Upload file"}
        </label>
      </div>

      {loading && <p className="text-sm text-gray-600">Loading…</p>}
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {!loading && media.length === 0 && !error && (
        <p className="text-sm text-gray-600">
          No media yet. Upload images or PDFs to use in your courses.
        </p>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-lg bg-white p-4 shadow-sm"
          >
            <div className="mb-3 h-32 overflow-hidden rounded border bg-gray-50 flex items-center justify-center">
              {item.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.url}
                  alt={item.fileName}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <span className="text-xs text-gray-500">
                  {item.mimeType.toUpperCase()}
                </span>
              )}
            </div>
            <div className="flex-1">
              <p className="truncate text-sm font-medium text-gray-900">
                {item.fileName}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {(item.sizeBytes / 1024).toFixed(1)} KB · {item.type}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDelete(item.id)}
              className="mt-3 self-end rounded-md border border-red-300 px-3 py-1 text-xs text-red-700 hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

