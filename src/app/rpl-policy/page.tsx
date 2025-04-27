'use client';

export default function RPLPolicyPage() {
  return (
    <main className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        RPL Policy and Implementation Process
      </h1>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">What is RPL?</h2>
        <p className="text-gray-700 leading-relaxed">
          RPL (Recognition of Prior Learning) is the process of recognising previous formal, informal and non-formal learning.
          It allows individuals to achieve formal recognition for the skills and knowledge they already possess, regardless
          of how, when, or where the learning occurred.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Benefits of RPL</h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Shortens the time needed to get a qualification.</li>
          <li>Reduces duplication of learning.</li>
          <li>Identifies gaps in skills and knowledge.</li>
          <li>Provides access to learning opportunities that may have previously been inaccessible.</li>
          <li>Recognises workplace experience and achievements.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">The RPL Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The RPL process at Water Business College involves:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 leading-relaxed">
          <li>Initial consultation and self-assessment.</li>
          <li>Formal application for RPL assessment.</li>
          <li>Compilation and submission of a portfolio of evidence.</li>
          <li>Assessment of evidence by qualified assessors.</li>
          <li>Feedback and possible further evidence gathering if needed.</li>
          <li>Final decision and awarding of credits/qualification.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Who Should Apply for RPL?</h2>
        <p className="text-gray-700 leading-relaxed">
          Anyone who has acquired knowledge, skills, and competencies through work experience, informal training,
          life experience, or other non-traditional learning methods, and who wishes to gain formal recognition for their learning.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          For more information on the RPL process, please contact our admissions office at&nbsp;
          <a href="mailto:info@waterbusinesscollege.co.za" className="text-blue-600 underline">
            info@waterbusinesscollege.co.za
          </a>.
        </p>
      </section>
    </main>
  );
}