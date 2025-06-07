'use client';

export default function Module8Page() {
  return (
    <main className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Module 8 - Course Info</h1>

      <div className="aspect-w-16 aspect-h-9 w-full max-w-5xl mx-auto mb-10">
        <iframe
          src="/pdfs/module-8.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-[80vh] border rounded shadow-lg"
          title="Module 8 PDF Viewer"
        />
      </div>

      <div className="flex justify-center">
        <button
          className="bg-[#2e528e] hover:bg-[#2e528e] text-white font-semibold px-6 py-3 rounded-lg shadow w-[400px]"
          onClick={() => window.location.href = '/interestform/module-8-interest'} // or your actual internal registration page
        >
          Submit your interest
        </button>
      </div>
    </main>
  );
}