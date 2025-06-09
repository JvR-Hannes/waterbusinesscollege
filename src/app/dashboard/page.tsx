"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://waterbusinesscollege.co.za/dashboard/";
  }, []);

  return (
    <main className="py-16 px-4">
      <p>Redirecting to your dashboard...</p>
    </main>
  );
}