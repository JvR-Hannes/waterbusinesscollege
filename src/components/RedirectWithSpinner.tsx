"use client";

import { useEffect } from "react";

export default function RedirectWithSpinner({
  url,
  newTab = false,
}: {
  url: string;
  newTab?: boolean;
}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (newTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }, 1500); // 1.5s delay

    return () => clearTimeout(timeout);
  }, [url, newTab]);

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-700">Redirecting you...</p>
      </div>
    </div>
  );
}