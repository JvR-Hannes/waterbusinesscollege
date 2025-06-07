'use client';

import Link from 'next/link';

export default function QctoAccreditationLetterDuplicate() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">
        QCTO Accreditation Letter (Duplicate)
      </h1>
      <div className="w-full h-[75vh] mb-6">
        <iframe
          src="/pdfs/water-reticulation.pdf"
          className="w-full h-full border rounded shadow"
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