// app/checkout/page.tsx
"use client";
import { useEffect } from "react";

export default function CheckoutPage() {
  useEffect(() => {
    window.open("https://portal.waterbusinesscollege.co.za/checkout/", "_blank");
  }, []);

  return (
    <main className="flex items-center justify-center h-screen">
      <p>Redirecting to checkout...</p>
    </main>
  );
}
