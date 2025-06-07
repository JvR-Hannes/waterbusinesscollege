'use client';

import Head from 'next/head';
import { useState } from 'react';

function VerticalTabSections() {
  const sections = [
    {
      heading: "NON-CONTRACTUAL, MODULAR ‘PAY-AS-YOU-LEARN’ (MPAYL) SYSTEM",
      tabs: [
        {
          title: 'Non-Contractual',
          content: [
            'Means that it is not required of the learner to complete a financial contract to register for the individual Knowledge and Practical modules (i.e. the qualification).',
          ],
        },
        {
          title: 'Modular',
          content: [
            'The qualification is sub-divided into individual credit-bearing Knowledge (KM) and Practical (PM) modules.',
            'The re-structuring of the qualification into credit-bearing Knowledge (KM) and Practical (PM) modules addresses / accommodates',
            'the requirements of flexibility for part-time students (i.e. employed staff) and also aims to make it affordability for all learners.',
          ],
        },
        {
          title: 'Pay-As-You-Learn',
          content: [
            'Learners pay per Period per Module (i.e. for both the Knowledge and Practical modules) prior to getting access to the learning material / content for the specific course / module.',
            'Each credit-bearing Knowledge and Practical module is costed individually based on the credit allocation / rating for that module.',
            'The learning material for each of the periods per module is exactly the same.',
          ],
        },
        {
          title: 'Flexible Learning',
          content: [
            'Learners can select and complete an individual Knowledge and/or Practical module during a period that suits their programme.',
            'Each Knowledge and/or Practical module will be offered at three (3) different periods during an academic year.',
            'The learning material for each of the periods per module is exactly the same.',
            'As a result, learners can complete the occupational qualification over a longer period than the minimum period of two (2) years.',
            'For example, learners can complete year 1 (of the 2 year occupational qualification) either full-time (over a 1 year period), or part-time (over a 2 year to 2.5 year period).',
          ],
        },
        {
          title: 'Affordable Learning',
          content: [
            'As indicated, learners pay per Period per Module and will only be enrolled for the selected Period',
            'Learners will register and pay to attend only one (1) Period per Knowledge (KM) and Practical (PM) module as the learning material covered is exactly the same for all periods',
            'The learning material for each of the periods per module is exactly the same.',
          ],
        },
        {
          title: 'Module Completion',
          content: ([
            'Learners must complete all requirements for the Knowledge (KM) and Practical (PM) module within the period (per module) selected.',
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                The requirements for a Knowledge module (KM) include
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Attendance of the contact sessions with the facilitator.</li>
                <li>Consultation of the prescribed reading material.</li>
                <li>Completion of the informal and formal tests, etc.</li>
              </ul>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                The requirements for a Practical module (PM) include
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Complete tasks in preparation for the 2 week full-time practical sessions.</li>
                <li>In-person attendance of the 2 week blocks.</li>
                <li>Completion of daily practical tasks.</li>
                <li>Comprehensive report on the practical sessions, etc.</li>
              </ul>
            </>,
            'Please Note: A Certificate will be issued on completion of the Knowledge (KM) and Practical (PM) modules.',
            'The above re-structuring of the qualification into modules applies to year 1 of the 2 year occupational qualification.',
          ]),
        },
        {
          title: 'Recognition of Prior Learning (RPL)',
          content: [
            'Water Business College (WBC) recognises and will meet the national requirements for Recognition of Prior Learning (RPL).',
          ],
        },
      ],
    },
    {
      heading: "DELIVERING THE OCCUPATIONAL QUALIFICATION",
      tabs: [
        {
          title: 'Hybrid Learning Strategy',
          content: [
            'A hybrid / blended approach to offering the academic programs of WBC will be implemented to also cater to',
            'employed persons located in different provinces in South Africa (and beyond the borders of South Africa).',
            'Knowledge modules will be offered online while two, 2 week practical sessions must be attended in person.',
          ],
        },
        {
          title: 'Knowledge Modules (KM)',
          content: [
            'The knowledge modules will be offered online, in two 2 hour online sessions, at least twice a week during the',
            'afternoons (Online lectures are currently scheduled for Tuesday and Thursday afternoons from 17h00 to 19h00).',
            'A minimum number of registered learners per module is required for the specific module to proceed.',
          ],
        },
        {
          title: 'Knowledge Module (KM) Assessment',
          content: [
            'Learners will be required to familiarise themselves with the relevant pre-scribed content / reading material,',
            'complete assignments as well as informal and formal tests to successfully complete a particular module.',
            'The assessments are designed to be completed online. The learners may, however, be required to download and',
            'upload completed assignments, etc. The number of assignments and tests depend on the credit allocation / rating',
            'of the module. Learners will receive a certificate (per module) if all the requirements for the module are met.',
          ],
        },
        {
          title: 'Module Completion',
          content: ([
            'The practical modules will be scheduled and offered in-person at a practical site. The in-person and full-time',
            'afternoons (Online lectures are currently scheduled for Tuesday and Thursday afternoons from 17h00 to 19h00).',
            'attendance of two, 2 week practical sessions at a venue determined by WBC is compulsory. Each practical ',
            'programme requires a minimum of 1 week preparation (prior to attending the 2 week practical session) as well as',
            '2 weeks allocated to report writing (after attending the 2 week practical session). ‘Practical 3 - Know your Water',
            'Reticulation System’ will take the form of a comprehensive assignment developed by WBC specific to the learner’s profile.',
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                Learners must complete three (3) practical sessions. The pre-requisites to gain entry to the practical sessions are as follows:
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>On-Site Practical 1 - Water Reticulation Systems: Learners must complete Knowledge Modules 1 to 5 (i.e. KM01 to KM05).</li>
                <li>On-Site Practical 2 - Operation & Maintenance: Learners must complete Knowledge Modules 6 to 8 (i.e. KM06 to KM08).</li>
                <li>Practical 3 - Know your Water Reticulation System: Assignment developed by WBC specific to the learner’s profile. Learners must successfully complete On-Site Practical 1 and On-Site Practical 2.</li>
              </ul>
            </>
          ]),
        },
        {
          title: 'Practical Site / Laboratory',
          content: ([
            'WBC developed / built a ‘hands-on’ / practical laboratory (i.e. a prototype water reticulation system) to simulate',
            '(for training purposes) the water reticulation processes / systems of water service providers (i.e. municipalities)',
            'and private industry (eg. mines, industrial plants, etc).',
            <br />,
            'Learners are required to attend two, 2 week practical sessions (4 weeks in total during the academic year) for ',
            'in-person, hands-on training at our practical site. Please see a video of our practical site by accessing the following ',
            'YouTube link: Click Here!',
          ]),
        },
        {
          title: 'Please Note:',
          content: [
            'WBC has recently dissembled the practical site after calibration of the instruments and the conducting of two',
            'practical sessions during the pilot programme. The practical site will be re-assembled, at a more appropriate ',
            'locality, in time of the next practical sessions.',
          ],
        },
      ],
    },
    {
      heading: "EXAMINATION / ASSESSMENTS",
      tabs: [
        {
          title: 'EXAMINATIONS',
          content: [
            'Examinations, Re-Examinations and Summative Examinations will be conducted in-person at pre-determined ',
            'examination venues (unless otherwise informed).',
          ],
        },
        {
          title: 'Three Examination Papers',
          content: ([
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                The pre-requisites to gain entry to the examinations are as follows:
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Examination Paper 1 – Learners must complete Knowledge Modules 1 to 4.</li>
                <li>Examination Paper 2 – Learners must complete Knowledge Modules 5 to 6.</li>
                <li>Examination Paper 3 – Learners must complete Knowledge Modules 7 to 8.</li>
              </ul>
            </>,
          ]),
        },
        {
          title: 'Three Re-Examination Papers',
          content: ([
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                The pre-requisites to gain entry to the re-examinations are as follows:
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Re-Examination Paper 1 – Mark between 45% to 50% for Examination Paper 1.</li>
                <li>Re-Examination Paper 2 – Mark between 45% to 50% for Examination Paper 2.</li>
                <li>Re-Examination Paper 3 – Mark between 45% to 50% for Examination Paper 3.</li>
              </ul>
            </>,
          ]),
        },
        {
          title: 'Two Summative Examination Papers',
          content: ([
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                The pre-requisites to gain entry to the summative examinations are as follows:
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Summative Examination Paper 1:</li>
                <li>Learners failed a relevant re-examination paper.</li>
                <li>Learners successfully completed Knowledge Modules 1 to 5.</li>
                <li>Summative Examination Paper 2: </li>
                <li>Learners failed a relevant re-examination paper.</li>
                <li>Learners successfully complete Knowledge Modules 6 to 8.</li>
              </ul>
            </>,
          ]),
        },
        {
          title: 'Informal  and Formal Assessment',
          content: ([
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                Informal  and Formal Assessment
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Informal and formal online tests are set for each Knowledge module (KM).</li>
                <li>The informal and formal online tests form part of the requirements to successfully complete a Knowledge module (KM).</li>
              </ul>
            </>,
          ]),
        },
      ],
    },
    {
      heading: "PRACTICAL ASSESSMENT",
      tabs: [
        {
          title: 'Practical Assessment',
          content: ([
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                The requirements for 2 week Practical modules (PM) include;
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Complete pre-practical assignments / tasks in preparation for the 2 week, full-time practical sessions.</li>
                <li>Written and verbal assessments will be conducted during the 2 week practical sessions.</li>
                <li>Complete daily practical tasks / scenarios.</li>
                <li>Each learner must complete a comprehensive report on the practical session, etc.</li>
              </ul>
            </>,
          ]),
        },
      ],
    },
    {
      heading: "A PASS MARK OF 50% APPLIES TO:",
      tabs: [
        {
          title: 'Pass Mark',
          content: ([
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                Pass Mark
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>All informal and formal tests.</li>
                <li>All examinations, re-examinations, and summative examinations.</li>
                <li>All practical assessments.</li>
              </ul>
            </>,
          ]),
        },
        {
          title: 'Please Note: YEAR MARK',
          content: ([
            <>
              <h4 className="text-base font-semibold mb-2 text-blue-700">
                Please Note: YEAR MARK
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>The weighting of the formal tests (per module),<br/>
                 as a contribution to the final year mark (i.e. year 1) for the knowledge modules,<br/>
                 differs based on the credit allocations of the individual modules.</li>
                <li>The weighting of the individual examination papers,<br/>
                 as a contribution to the final examination mark for Year 1 (of the qualification),<br/>
                 differs based on the credit allocations of the individual modules<br/>
                 constituting the specific examination.</li>
                <li>The weighting of the individual practical sessions,<br/>
                 as a contribution to the final practical mark for year 1,<br/>
                 differs based on the credit allocations for individual practical sessions.</li>
              </ul>
            </>,
          ]),
        },
      ],
    },
    {
      heading: "OCCUPATIONAL QUALIFICATION",
      tabs: [
        {
          title: 'Occupational Qualification',
          content: [
            'A learner can then achieve / obtain the occupational',
            'qualification on completion of all the knowledge and practical',
            'modules as well as the examinations for year 1 and the workplace skills modules for year 2.',
            'Interested practitioners / technical staff (not interested in a qualification) can register for individual knowledge',
            'modules as well as practical modules and on completion receive a ‘Certificate of Completion’ for the particular ',
            'module completed.',<br />,
            'Interested learners and practitioners must familiarise themselves with information on, and the structure of, the 2',
            'year occupational qualifications on the Water Business College (WBC) website.',
          ],
        },
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {sections.map((section, sectionIndex) => {
        const [activeTab, setActiveTab] = useState(0);

        return (
          <div key={sectionIndex} className="border rounded-md shadow bg-white">
            <h4 className="text-lg md:text-xl font-bold text-blue-900 px-6 py-4 bg-blue-50 border-b">
              {section.heading}
            </h4>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 border-r bg-blue-50">
                {section.tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-blue-100 transition ${activeTab === index ? 'bg-blue-200 text-blue-900' : 'text-blue-700'
                      }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="md:w-3/4 p-6 text-sm text-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">
                  {section.tabs[activeTab].title}
                </h3>
                <p>{section.tabs[activeTab].content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function QualificationRules() {
  return (
    <>
      <Head>
        <title>Qualification Rules & Regulations – Water Business College</title>
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
        <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">
          Qualification Rules & Regulations
        </h1>

        {/* LMS Intro Block */}
        <div className="bg-white border border-gray-200 p-6 rounded-md mb-6 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">Learner Management System (LMS)</h2>
          <p className="text-sm text-center text-[#68a4d8]">
            Water Business College (WBC) <a href="https://waterbusinesscollege.co.za/" className="text-[#8ed1fc] underline" target="_blank" rel="noopener noreferrer">
              (https://www.waterbusinesscollege.co.za/)
            </a> is introducing a <br />
            Non-Contractual, Modular ‘Pay-As-You-Learn’ (MPAYL) system.<br />
            As a result, WBC developed a new Learner Management System (LMS) to implement the <br />
            Non-Contractual, Modular ‘Pay-As-You-Learn’ (MPAYL) system.
          </p>
        </div>

        {/* Terms & Conditions Block */}
        <div className="bg-blue-50 border border-blue-200 text-gray-800 text-sm p-4 rounded-md mb-10">
          <p className="mb-2">
            The <strong>Terms &amp; Conditions</strong> apply to learners intending to complete the occupational qualification.
          </p>
          <p className="mb-2">
            Any practitioner can, however, register for individual knowledge and practical modules for continuous development.
          </p>
          <p>
            All the requirements for the knowledge and practical modules must be completed to obtain a Certificate of Completion for the module.
          </p>
        </div>

        <VerticalTabSections />

        {/*{/* LMS Block: Styled Like Elementor Tabs Section */}
        {/*<section className="bg-white border border-gray-200 rounded-md mb-10 p-6 shadow-sm">
          <h4 className="text-xl font-bold text-blue-900 uppercase mb-4 text-center">
            NON-CONTRACTUAL, MODULAR ‘PAY-AS-YOU-LEARN’ (MPAYL) SYSTEM
          </h4>*/}

        {/* Simulated Tabs Layout */}
        {/*<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Vertical Tabs (as buttons or labels) 
            <div className="space-y-2 text-sm font-medium text-blue-700">
              <div className="bg-blue-100 px-4 py-2 rounded-md border border-blue-300 shadow-sm">Non-Contractual</div>
              <div className="bg-blue-100 px-4 py-2 rounded-md border border-blue-300 shadow-sm">Modular</div>
              <div className="bg-blue-100 px-4 py-2 rounded-md border border-blue-300 shadow-sm">Pay-As-You-Learn</div>
              <div className="bg-blue-100 px-4 py-2 rounded-md border border-blue-300 shadow-sm">Flexible Learning</div>
              <div className="bg-blue-100 px-4 py-2 rounded-md border border-blue-300 shadow-sm">Affordable Learning</div>
            </div>*/}

        {/* Tab Content (combined into one block here for simplicity) */}
        {/*<div className="md:col-span-3 text-sm text-gray-800 space-y-4">
              <p>
                Water Business College (WBC) <a href="https://waterbusinesscollege.co.za/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                  (https://www.waterbusinesscollege.co.za/)
                </a> is introducing a Non-Contractual, Modular ‘Pay-As-You-Learn’ (MPAYL) system.
              </p>
              <p>
                This system allows learners to register and pay for modules independently, with no binding financial agreement. It’s structured into Knowledge (KM) and Practical (PM) modules, allowing for flexibility and affordability.
              </p>
              <p>
                Learners may attend any period offered and can complete the qualification at their own pace — full-time or part-time.
              </p>
            </div>
          </div>
        </section>

        {/*<section className="mb-10">
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
        </section>*/}

        {/* Module Completion with Table */}
        {/*<section className="mb-10">
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
        {/*<section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Recognition of Prior Learning (RPL)</h2>
          <p>Water Business College adheres to national requirements for RPL. A certificate is issued upon completion of both KM and PM modules.</p>
        </section>

        {/* Hybrid Strategy */}
        {/*<section className="mb-10">
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
        {/*<section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Registration & Payment Procedures</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Apply with certified ID and academic records</li>
            <li>Register and pay per KM and PM module period</li>
            <li>Register and pay per exam attempt</li>
            <li>Carefully review prerequisites before enrolling</li>
          </ul>
        </section>

        {/* Occupational Qualification */}
        {/*<section className="mb-10">
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
        </section>*/}
      </main>
    </>
  );
}
