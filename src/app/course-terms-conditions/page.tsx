'use client';

import Head from 'next/head';
import { useState, ReactNode } from 'react';

type Tab = {
  title: string;
  content: (string | ReactNode)[];
};

type Section = {
  heading: string;
  tabs: Tab[];
};

function VerticalTabSections() {
  const sections: Section[] = [
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
            'Means that learners can register for individual modules (i.e. learning areas or subjects) of the occupational qualification. A full occupational qualification includes Knowledge Modules (KM), Practical Modules (PM), and the Work Experience Modules (WEM).',
          ],
        },
        {
          title: 'Pay-As-You-Learn (PAYL)',
          content: [
            'Means that learners only pay for the modules they register for.',
            'In this way, the cost of the occupational qualification is more affordable and accessible to learners and employers.',
          ],
        },
      ],
    },
    {
      heading: 'QUALIFICATION RULES AND REGULATIONS',
      tabs: [
        {
          title: 'Enrolment',
          content: [
            'A learner may register for any of the individual knowledge or practical modules on a “modular pay-as-you-learn” (MPAYL) basis.',
            'This implies that learners may enroll for one or more modules at a time.',
          ],
        },
        {
          title: 'Entry Requirements',
          content: [
            'Each occupational qualification has entry requirements as per the Curriculum Document (Curriculum Code).',
            'Some qualifications might require relevant NQF levels or prior learning/workplace exposure.',
          ],
        },
        {
          title: 'Module Completion',
          content: [
            'To complete a module, the learner must:',
            <ul className="list-disc ml-6" key="module-completion">
              <li>Complete all learning material and formative assessments</li>
              <li>Achieve competence in the summative assessment</li>
              <li>Submit all required evidence for portfolio review</li>
            </ul>,
          ],
        },
        {
          title: 'Certification',
          content: [
            'Learners who complete all knowledge, practical and workplace modules will be eligible to undergo an external integrated summative assessment (EISA) and receive the full occupational certificate.',
          ],
        },
      ],
    },
    {
      heading: 'LEARNER MANAGEMENT SYSTEM (LMS)',
      tabs: [
        {
          title: 'About the LMS',
          content: [
            'The LMS is a digital platform developed to support the Non-Contractual, Modular ‘Pay-As-You-Learn’ system.',
            'It offers learners access to online materials, assessments, feedback, and tracking tools.',
          ],
        },
        {
          title: 'LMS Access',
          content: [
            'Learners will receive login credentials upon registration for their selected module(s).',
            'Support is available to guide learners on how to use the LMS effectively.',
          ],
        },
      ],
    },
  ];

  const [activeTabs, setActiveTabs] = useState(sections.map(() => 0));

  const handleTabClick = (sectionIndex: number, tabIndex: number) => {
    setActiveTabs((prev) => {
      const updated = [...prev];
      updated[sectionIndex] = tabIndex;
      return updated;
    });
  };

  return (
    <div className="space-y-10">
      {sections.map((section, sectionIndex) => {
        const activeTab = activeTabs[sectionIndex];

        return (
          <div key={sectionIndex} className="border rounded-md shadow bg-white">
            <h4 className="text-lg md:text-xl font-bold text-blue-900 px-6 py-4 bg-blue-50 border-b">
              {section.heading}
            </h4>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 border-r bg-blue-50">
                {section.tabs.map((tab, tabIndex) => (
                  <button
                    key={tabIndex}
                    onClick={() => handleTabClick(sectionIndex, tabIndex)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-blue-100 transition ${
                      activeTab === tabIndex
                        ? 'bg-blue-200 text-blue-900'
                        : 'text-blue-700'
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
                <div>
                  {section.tabs[activeTab].content.map((item, i) => (
                    <div key={i} className="mb-2">
                      {typeof item === 'string' ? <p>{item}</p> : item}
                    </div>
                  ))}
                </div>
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
            Water Business College (WBC){' '}
            <a
              href="https://waterbusinesscollege.co.za/"
              className="text-[#8ed1fc] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              (https://www.waterbusinesscollege.co.za/)
            </a>{' '}
            is introducing a <br />
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

        {/* Tab Sections */}
        <VerticalTabSections />
      </main>
    </>
  );
}
