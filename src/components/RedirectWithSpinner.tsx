// components/RedirectWithSpinner.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

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
    }, 1500);

    return () => clearTimeout(timeout);
  }, [url, newTab]);

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/images/wbc-main.png" 
          alt="Redirecting"
          width={100}
          height={100}
          className="animate-neon-pulse"
        />
        <p className="text-white text-sm animate-fade-in">Redirecting you...</p>
      </div>
    </div>
  );
}