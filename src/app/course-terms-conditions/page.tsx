'use client';

import Head from 'next/head';

export default function QualificationRules() {
  return (
    <>
      <Head>
        <title>Qualification Rules & Regulations – Water Business College</title>
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-8 text-blue-900">
          Qualification Rules & Regulations
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">MPAYL: Modular Pay-As-You-Learn System</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-300">
            <table className="min-w-full table-auto text-left text-sm text-gray-700">
              <thead className="bg-blue-100 text-blue-900 uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Non-Contractual</td>
                  <td className="px-4 py-3">No financial contract is required to register for individual modules.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Modular</td>
                  <td className="px-4 py-3">Divided into credit-bearing Knowledge (KM) and Practical (PM) modules. Designed for flexibility and affordability.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Pay-As-You-Learn</td>
                  <td className="px-4 py-3">Pay per module, per period, based on credit allocation.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Flexible Learning</td>
                  <td className="px-4 py-3">Choose one of 3 offered periods per module. Complete the program at your own pace, full-time or part-time.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Affordable Learning</td>
                  <td className="px-4 py-3">Only pay for what you register. Materials are identical across periods.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Module Completion with Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Module Completion</h2>
          <p className="mb-4">Learners must complete all requirements for each selected Knowledge (KM) and Practical (PM) module within the chosen period.</p>

          <div className="overflow-x-auto rounded-lg border border-gray-300 mb-6">
            <table className="min-w-full table-auto text-left text-sm text-gray-700">
              <thead className="bg-blue-100 text-blue-900 uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3">Module Type</th>
                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Knowledge Module (KM)</td>
                  <td className="px-4 py-3">
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Attend contact sessions with facilitator</li>
                      <li>Consult prescribed reading material</li>
                      <li>Complete informal and formal tests</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Practical Module (PM)</td>
                  <td className="px-4 py-3">
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Pre-practical assignments/tasks</li>
                      <li>Attend 2-week in-person sessions</li>
                      <li>Complete daily tasks & final report</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* RPL */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Recognition of Prior Learning (RPL)</h2>
          <p>Water Business College adheres to national requirements for RPL. A certificate is issued upon completion of both KM and PM modules.</p>
        </section>

        {/* Hybrid Strategy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Delivering the Occupational Qualification</h2>

          <h3 className="font-semibold text-blue-700">Hybrid Learning Strategy</h3>
          <p className="mb-4">Combines online learning for Knowledge Modules with in-person sessions for Practical Modules.</p>

          <h3 className="font-semibold text-blue-700">Knowledge Modules (KM)</h3>
          <p className="mb-4">Offered in two 2-hour online sessions weekly. A minimum number of learners is required for module delivery.</p>

          <h3 className="font-semibold text-blue-700">KM Assessment</h3>
          <p className="mb-4">Includes assignments and online tests. Completion of all assessments is required to earn the module certificate.</p>

          <h3 className="font-semibold text-blue-700">Practical Modules (PM)</h3>
          <p className="mb-4">Offered in-person with a mandatory two 2-week attendance. Includes 1-week prep and 2-week report writing.</p>

          <h3 className="font-semibold text-blue-700">Practical Site / Laboratory</h3>
          <p className="mb-4">Includes a prototype water reticulation system. Currently being relocated and rebuilt for future sessions.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Examinations & Assessments</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-300">
            <table className="min-w-full table-auto text-left text-sm text-gray-700">
              <thead className="bg-blue-100 text-blue-900 uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3">Assessment Type</th>
                  <th className="px-4 py-3">Pre-requisites & Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Examination Paper 1</td>
                  <td className="px-4 py-3">Requires KM01–KM04</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Examination Paper 2</td>
                  <td className="px-4 py-3">Requires KM05–KM06</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Examination Paper 3</td>
                  <td className="px-4 py-3">Requires KM07–KM08</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Re-Examinations</td>
                  <td className="px-4 py-3">Allowed for scores between 45–49% for the respective paper</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Summative Exam 1</td>
                  <td className="px-4 py-3">Failing Re-Exam 1/2, having completed KM01–KM05</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Summative Exam 2</td>
                  <td className="px-4 py-3">Failing Re-Exam 3, having completed KM06–KM08</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Informal & Formal Tests</td>
                  <td className="px-4 py-3">Completed per module and required for KM completion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Practical Assessment Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-800 bg-white p-4 rounded-md border border-gray-200">
            <li>Complete pre-practical assignments before the 2-week session.</li>
            <li>Attend all 2 weeks of in-person training.</li>
            <li>Complete daily practical scenarios and tasks.</li>
            <li>Undergo written and verbal assessments during the session.</li>
            <li>Submit a comprehensive practical report post-session.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Registration & Payment Process</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-300">
            <table className="min-w-full table-auto text-left text-sm text-gray-700">
              <thead className="bg-blue-100 text-blue-900 uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3">Step</th>
                  <th className="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Application</td>
                  <td className="px-4 py-3">Complete application form. Upload certified ID and academic records.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">KM Registration</td>
                  <td className="px-4 py-3">Register and pay per selected period. Offered 3 times/year.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">PM Registration</td>
                  <td className="px-4 py-3">Register and pay per selected period. Offered 3 times/year.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Examination Registration</td>
                  <td className="px-4 py-3">Select and pay per examination date. All exams are in-person.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Important Note</td>
                  <td className="px-4 py-3">Check pre-requisites before registering for any module or assessment.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Registration & Payment */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Registration & Payment Procedures</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Apply with certified ID and academic records</li>
            <li>Register and pay per KM and PM module period</li>
            <li>Register and pay per exam attempt</li>
            <li>Carefully review prerequisites before enrolling</li>
          </ul>
        </section>

        {/* Occupational Qualification */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Occupational Qualification Completion</h2>
          <div className="bg-white border border-gray-200 rounded-md p-4 text-sm text-gray-800 space-y-3">
            <p>
              Learners will be awarded the full 2-year occupational qualification upon successful completion of:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>All Knowledge Modules (KM)</li>
              <li>All Practical Modules (PM)</li>
              <li>All Year 1 Examinations</li>
              <li>Year 2: Workplace Skills Modules</li>
            </ul>
            <p>
              Practitioners not pursuing the full qualification may register for specific KM or PM modules and receive a <strong>Certificate of Completion</strong> per module.
            </p>
            <p>
              More information on the 2-year qualification structure is available on the WBC website.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
