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
    const openTabTimeout = setTimeout(() => {
      if (newTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }, 1500);

    const backHomeTimeout = setTimeout(() => {
      if (newTab) {
        window.location.href = "/";
      }
    }, 4000); // 4s total delay before returning to homepage

    return () => {
      clearTimeout(openTabTimeout);
      clearTimeout(backHomeTimeout);
    };
  }, [url, newTab]);

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/images/wbc-main.png"
          alt="Redirecting"
          width={100}
          height={100}
          className="animate-neon-pulse"
        />
        <p className="text-white text-sm animate-fade-in">Redirecting you...</p>
        {newTab && (
          <p className="text-white text-xs opacity-70 animate-fade-in delay-500">
            You&apos;ll return to the homepage shortly.
          </p>
        )}
      </div>
    </div>
  );
}