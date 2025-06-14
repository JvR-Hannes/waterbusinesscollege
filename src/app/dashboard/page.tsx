"use client";
import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    window.location.replace("https://portal.waterbusinesscollege.co.za/dashboard/");
  }, []);

  return (
    <main className="py-16 px-4">
      <p>Redirecting to your dashboard...</p>
    </main>
  );
}