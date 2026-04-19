"use client";

import Link from "next/link";

export default function EcsaCpdAccreditation() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-4 text-gray-800">
        ECSA CPD Accreditation
      </h1>
      <div className="w-full h-[75vh] mb-6">
        <iframe
          src="/pdfs/SAIMM01852-SAIMM01855-Water-Business-College.pdf"
          className="w-full h-full border rounded shadow"
          title="ECSA CPD Accreditation"
        />
      </div>

      <div className="mb-6">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
