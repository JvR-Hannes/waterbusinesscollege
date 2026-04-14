"use client";

import { useEffect, useState } from "react";
import type { User } from "@/lib/models";

type UserWithCourses = User & {
  courses?: string[];
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserWithCourses[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "student">("student");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/admin/users");
        if (!res.ok) {
          setError("Failed to load users");
          return;
        }
        const data = await res.json();
        const list: UserWithCourses[] = data.users ?? [];
        setUsers(list);
      } catch {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[#2e528e]">Users</h2>
        <p className="mt-1 text-sm text-gray-600">
          View users and which courses they&apos;re enrolled in. Later we can
          sync or import from your existing portal.
        </p>
      </div>

      <form
        className="space-y-3 rounded-lg bg-white p-4 shadow-sm"
        onSubmit={async (event) => {
          event.preventDefault();
          setError(null);
          try {
            const res = await fetch("/api/admin/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, role }),
            });
            if (!res.ok) {
              const data = await res.json().catch(() => ({}));
              setError(data.error || "Failed to create user");
              return;
            }
            setName("");
            setEmail("");
            const refreshed = await fetch("/api/admin/users");
            const data = await refreshed.json();
            setUsers(data.users ?? []);
          } catch {
            setError("Failed to create user");
          }
        }}
      >
        <p className="text-sm font-medium text-gray-700">
          Add user manually (for imported enrollments)
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
            required
          />
          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "admin" | "student")
            }
            className="rounded-md border px-3 py-2 text-sm focus:border-[#2e528e] focus:outline-none focus:ring-1 focus:ring-[#2e528e]"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="rounded-md bg-[#2e528e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#24406e]"
        >
          Save user
        </button>
      </form>

      {loading && <p className="text-sm text-gray-600">Loading…</p>}
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {!loading && users.length === 0 && !error && (
        <p className="text-sm text-gray-600">
          No users stored yet in this system.
        </p>
      )}

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {user.name}{" "}
                  <span className="ml-2 rounded bg-gray-100 px-2 py-0.5 text-xs uppercase text-gray-600">
                    {user.role}
                  </span>
                </p>
                <p className="mt-0.5 text-xs text-gray-600">
                  {user.email}
                </p>
              </div>
            </div>
            {Array.isArray(user.courses) && user.courses.length > 0 && (
              <p className="mt-2 text-xs text-gray-600">
                Enrolled in: {user.courses.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

