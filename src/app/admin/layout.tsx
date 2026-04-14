import type { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8 flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#2e528e]">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">
              Manage courses, users, enrollments, and media.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link href="/admin" className="rounded-md bg-white px-3 py-1 shadow-sm hover:bg-gray-100">
              Overview
            </Link>
            <Link href="/admin/courses" className="rounded-md bg-white px-3 py-1 shadow-sm hover:bg-gray-100">
              Courses
            </Link>
            <Link href="/admin/users" className="rounded-md bg-white px-3 py-1 shadow-sm hover:bg-gray-100">
              Users
            </Link>
            <Link href="/admin/enrollments" className="rounded-md bg-white px-3 py-1 shadow-sm hover:bg-gray-100">
              Enrollments
            </Link>
            <Link href="/admin/media" className="rounded-md bg-white px-3 py-1 shadow-sm hover:bg-gray-100">
              Media
            </Link>
            <form
              action="/api/admin/logout"
              method="post"
              className="inline"
            >
              <button
                type="submit"
                className="rounded-md bg-red-600 px-3 py-1 text-white shadow-sm hover:bg-red-700"
              >
                Logout
              </button>
            </form>
          </nav>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}

