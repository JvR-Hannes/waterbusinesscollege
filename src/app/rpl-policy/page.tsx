'use client';

import Link from 'next/link';

export default function RPLPolicyPage() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-4 text-gray-800">
        RPL Policy and Implementation Process
      </h1>

      <div className="w-full h-[75vh]">
        <iframe
          src="/pdfs/rplpolicy.pdf"
          className="w-full h-full border rounded shadow"
        />
      </div>

      <div className="mb-6 mt-6 flex gap-4">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
        <Link
          href="/rpl-application"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Proceed to PRL Application Form
        </Link>
      </div>
    </div>
  );
}
