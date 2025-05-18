'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Provide more information on the Water Reticulation Practitioner Qualification (NQF Level 4)",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          A Water Reticulation Practitioner installs and maintains the water reticulation infrastructure, identifies and attends to water leaks, installs water meters, maintains the water system and interfaces with colleagues (QCTO Curriculum Document).
        </p>
        <p>The qualification is equivalent to the National Senior Certificate (i.e. matric), but its strength lies in its occupational focus — preparing learners to be “work ready”.</p>
        <p><strong>Occupational Tasks:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Install water reticulation infrastructure</li>
          <li>Operate and maintain a water reticulation system</li>
          <li>Manage a water reticulation team</li>
        </ul>
        <p><strong>Entry Requirements:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>NQF Level 2 with Mathematical Literacy (Grade 10 or Standard 8)</li>
          <li>Recognition of Prior Learning (RPL) supported by Water Business College</li>
        </ul>
        <p><em>Note: Meeting entry requirements does not guarantee placement due to limited seats.</em></p>
        <p><strong>Target Groups:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Technical staff in the private and public sectors seeking formal qualifications</li>
          <li>Young persons aiming to enter the workforce in water services</li>
        </ul>
        <p>Please see the full <strong>SAQA qualification document</strong> on the WBC website.</p>
      </div>
    ),
  },
  {
    question: "Provide more information on the Water Infrastructure Manager Qualification (NQF Level 8)",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Water Business College (WBC) is introducing a Non-Contractual, Modular ‘Pay-As-You-Learn’ (MPAYL) system.
          <br />
          (See Terms and Conditions at: <strong>Qualification Rules & Regulations – Water Business College</strong>)
        </p>
        <p><strong>Non-Contractual:</strong> Learners are not required to sign a financial contract to register for individual Knowledge and Practical modules.</p>
        <p><strong>Modular:</strong> The qualification is divided into credit-bearing Knowledge (KM) and Practical (PM) modules, ideal for part-time students or working professionals.</p>
        <p><strong>Pay-As-You-Learn:</strong> Learners pay per module, per period, before gaining access to course content. Each module is priced based on its credit value.</p>
        <p><strong>Flexible Learning Environment:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Modules are offered during three different periods throughout the academic year</li>
          <li>Content is the same across all periods</li>
          <li>Complete the full qualification in 2 years (full-time) or up to 2.5 years (part-time)</li>
        </ul>
        <p><strong>Affordable Learning Environment:</strong> 
          Learners only pay for and register for the periods/modules they select, making it financially manageable.
        </p>
      </div>
    ),
  },  
  {
    question: "What are the costs (tuition fees) for the qualifications and/or modules, and does WBC offer student loans?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Water Business College (WBC) uses a Non-Contractual, Modular 'Pay-As-You-Learn' (MPAYL) model. This means learners are not bound by financial contracts and only pay for modules as they enroll.
        </p>
        <p>
          <strong>Cost Transparency:</strong> Tuition fees for each Knowledge and Practical Module, as well as short courses, will be published on the WBC website. No application fees are charged.
        </p>
        <p>
          <strong>What your payment includes:</strong>
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Access to study materials (study guides, reading links, assignments)</li>
          <li>Assessment content (self-study questions, tests, assignments)</li>
          <li>Facilitator contact sessions (presentations, Q&A, feedback)</li>
        </ul>
        <p>
          <strong>Modular Flexibility:</strong> Qualifications are broken down into credit-bearing Knowledge (KM) and Practical (PM) modules to accommodate part-time learning.
        </p>
        <p>
          Learners only register and pay for one module at a time — with the option to complete modules in any of the three available periods throughout the academic year.
        </p>
        <p>
          <em>Note: A minimum number of learners is required for a module to proceed. WBC is finalizing a reimbursement policy for such cases.</em>
        </p>
      </div>
    ),
  },  
  {
    question: "Explain the Non-Contractual, Modular ‘Pay-As-You-Learn’ (MPAYL) system of WBC",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          The MPAYL system at Water Business College (WBC) is designed to provide flexibility and affordability, particularly for part-time learners and working professionals.
        </p>
        <p><strong>Non-Contractual:</strong> Learners are not required to sign a financial contract to register for individual Knowledge (KM) or Practical (PM) modules. You only pay when you're ready to study a module.</p>
        <p><strong>Modular:</strong> Each qualification is divided into credit-bearing Knowledge and Practical modules. This modular approach makes it easier for learners to study at their own pace and balance other commitments.</p>
        <p><strong>Pay-As-You-Learn:</strong> You pay per module, per academic period. Each module has a set cost based on its credit rating. Payment grants access to the module’s content, assessments, and contact sessions.</p>
        <p><strong>Flexible Learning Environment:</strong> Each module is offered in three different periods throughout the academic year. This means learners can choose when to complete each module and potentially extend their studies beyond the standard two-year duration if needed.</p>
        <p><strong>Affordable Learning Environment:</strong> Costs are transparent and tied to each module’s credit value. You only pay for the module you register for in a given period—no extra charges or commitment to full program costs upfront.</p>
      </div>
    ),
  },
  {
    question: "How will WBC offer / deliver the occupational qualification? What is the delivery mode or delivery strategy for the occupational qualifications?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>Water Business College (WBC) uses a <strong>Hybrid Learning Strategy</strong> to deliver its occupational qualifications, designed to support both full-time learners and part-time/employed learners across different provinces (and even international learners).</p>
        
        <p><strong>Delivery Structure:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Knowledge Modules (KM)</strong> are delivered <em>online</em> with two 2-hour sessions per week (currently Tuesdays and Thursdays, 17:00–19:00).</li>
          <li><strong>Practical Modules (PM)</strong> are delivered <em>in-person</em> and require full-time attendance at two separate 2-week practical sessions.</li>
        </ul>
  
        <p><strong>Flexible Learning Environment:</strong> Learners can choose periods that suit their schedule. Each module is offered during three different periods per academic year, and learners may complete the programme full-time in 1 year, or part-time over 2 to 2.5 years.</p>
  
        <p><strong>Assessment for Knowledge Modules:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Pre-reading and familiarisation with prescribed material</li>
          <li>Completion of assignments and online assessments (formal/informal tests)</li>
          <li>Certificates are issued upon successful completion of each module</li>
        </ul>
  
        <p><strong>Assessment for Practical Modules:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Practical 1 – Water Reticulation Systems:</strong> Requires KM01–KM05</li>
          <li><strong>Practical 2 – Operation & Maintenance:</strong> Requires KM06–KM08</li>
          <li><strong>Practical 3 – Know your Water Reticulation System:</strong> A customised assignment based on the learner's profile</li>
        </ul>
  
        <p><strong>Practical Training Site:</strong> WBC operates a hands-on laboratory simulating water reticulation systems as found in municipalities and private industry (e.g., mines, industrial plants). Two 2-week practical sessions are required each academic year. Watch the <a href="https://www.youtube.com/watch?v=RndYrlr6L7Q" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">YouTube video</a> to view the facility.</p>
  
        <p><em>Note: The practical site is being relocated and reassembled for upcoming sessions, following successful pilot phase testing and updates to the practical manual.</em></p>
      </div>
    ),
  },
  {
    question: "Does Water Business College (WBC) offer distance learning programmes?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Yes, WBC implements a <strong>blended / hybrid learning strategy</strong> that combines online and in-person learning sessions. The theoretical and selected practical modules are delivered online, supporting distance learning for most of the qualification.
        </p>
        <p>
          However, <strong>practical modules</strong> require <em>in-person attendance</em> for hands-on training. To accommodate learners across regions, WBC will establish practical training infrastructure in provinces or areas where there is sufficient demand.
        </p>
        <p>
          Please note that WBC will <strong>enrol only a limited number of learners</strong> per intake for each qualification annually, ensuring focused attention and support.
        </p>
      </div>
    ),
  },
  {
    question: "Does Water Business College (WBC) offer student loans and/or bursaries?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          <strong>No, WBC does not offer student loans or bursaries directly.</strong> However, WBC has introduced a <strong>Non-Contractual, Modular ‘Pay-As-You-Learn’ (MPAYL)</strong> system to make learning more accessible and affordable. Learners pay per Period per Module and are only enrolled for the selected period.
        </p>
        <p>
          Additionally, WBC has formed partnerships with established and registered financial institutions, including <strong>MANATI</strong> and <strong>FUNDI</strong>, to support learners with <strong>affordable student loans</strong>. Once admitted to a qualification, learners can apply directly to these institutions using the WBC admission letter.
        </p>
        <p>
          Please note that <strong>WBC is a private institution</strong> and does not receive government funding or subsidies. As such, students enrolling at WBC <strong>do not qualify for NSFAS funding</strong>.
        </p>
        <p>
          For more details on financial support options and how to apply, please visit the WBC website or follow this link to apply online: <a href="https://waterbusinesscollege.co.za" target="_blank" className="text-blue-600 underline">Occupational Qualification Application Form – Water Business College</a>.
        </p>
      </div>
    ),
  },
  {
    question: "What are the requirements for completing an occupational qualification at WBC?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          To complete an occupational qualification at Water Business College (WBC), learners must successfully complete all Knowledge Modules (KMs), Practical Modules (PMs), formal examinations, and workplace skills modules.
        </p>
        <p><strong>Knowledge Module (KM) Requirements:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Attend scheduled contact sessions with the facilitator.</li>
          <li>Engage with the prescribed reading materials.</li>
          <li>Complete all informal and formal online tests.</li>
        </ul>
        <p><strong>Practical Module (PM) Requirements:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Complete preparatory assignments before the 2-week full-time sessions.</li>
          <li>Attend the two, 2-week in-person practical sessions.</li>
          <li>Participate in daily hands-on tasks and assessments.</li>
          <li>Submit a comprehensive report on the practical experience.</li>
        </ul>
        <p><strong>Examinations:</strong> Learners must pass three written examinations conducted in person:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Paper 1: Completion of KM01 to KM04</li>
          <li>Paper 2: Completion of KM05 to KM06</li>
          <li>Paper 3: Completion of KM07 to KM08</li>
        </ul>
        <p>
          Re-examinations and summative exams are available under specific conditions for learners scoring between 45% and 49%, or who fail a re-exam.
        </p>
        <p><strong>Assessments:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>All KM tests (informal and formal) must be passed with a minimum of 50%.</li>
          <li>All examinations and re-examinations require a 50% pass mark.</li>
          <li>All practical assessments during PMs also require a 50% pass mark.</li>
        </ul>
        <p>
          A certificate is awarded upon successful completion of each Knowledge and Practical module. Completion of all modules and exams leads to the award of the full occupational qualification.
        </p>
      </div>
    ),
  },
  {
    question: "How are the occupational qualifications assessed? What are the examination requirements for the occupational qualifications?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Occupational qualifications at Water Business College (WBC) are assessed through a structured combination of online tests, in-person examinations, and practical assessments.
        </p>
        <p><strong>Examinations:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Conducted in-person at pre-determined venues.</li>
          <li><strong>Examination Paper 1:</strong> After completing KM01 to KM04.</li>
          <li><strong>Examination Paper 2:</strong> After completing KM05 to KM06.</li>
          <li><strong>Examination Paper 3:</strong> After completing KM07 to KM08.</li>
        </ul>
        <p><strong>Re-Examinations:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Available to learners scoring 45% to &lt;50% on a standard examination.</li>
          <li>Three re-examination papers match the original exam structure.</li>
        </ul>
        <p><strong>Summative Examinations:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Accessible only if the learner failed a re-examination.</li>
          <li><strong>Paper 1:</strong> Must have completed KM01 to KM05.</li>
          <li><strong>Paper 2:</strong> Must have completed KM06 to KM08.</li>
        </ul>
        <p><strong>Online Tests:</strong> Each Knowledge Module includes informal and formal online tests, which are mandatory for module completion.</p>
        <p><strong>Practical Assessments:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Pre-practical assignments prior to the 2-week sessions.</li>
          <li>Written and verbal assessments during practicals.</li>
          <li>Daily practical task completion and submission of a final report.</li>
        </ul>
        <p><strong>Minimum Pass Mark:</strong> 50% is required for all online tests, exams, re-exams, summative exams, and practical assessments.</p>
        <p>
          Assessment weightings vary depending on the credit value of each module, influencing the final year marks for knowledge modules, examination papers, and practical sessions.
        </p>
      </div>
    ),
  },
  {
    question: "Who can register / apply for the occupational qualifications offered by WBC? Who are the beneficiaries / target groups for the occupational qualifications offered by WBC?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Any qualifying learner can apply for the occupational qualifications offered by Water Business College (WBC). To achieve the qualification, learners must complete all knowledge and practical modules, examinations for Year 1, and workplace skills modules for Year 2.
        </p>
        <p><strong>Target Groups / Beneficiaries:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Water practitioners / technical staff</strong> in the private and public sectors – including those seeking to formalise their experience or expand their expertise.
          </li>
          <li>
            <strong>Young persons / scholars</strong> entering the workforce via entry-level qualifications in the water services sector.
          </li>
          <li>
            <strong>Graduates</strong> in water services, water resources, or related engineering and science disciplines.
          </li>
        </ul>
        <p>
          WBC adheres to national requirements for <strong>Recognition of Prior Learning (RPL)</strong>, allowing experienced individuals to be assessed based on prior knowledge and experience.
        </p>
        <p>
          Practitioners or technical staff not pursuing the full qualification may register for individual knowledge and/or practical modules. Upon successful completion, they will receive a <strong>Certificate of Completion</strong> for that module.
        </p>
        <p>
          Note: All required activities for each module must be completed to obtain the Certificate of Completion.
        </p>
        <p className="text-red-600">
          Please note: Due to the capital-intensive nature of implementation, a minimum number of registered learners per module per period is required for the module to proceed.
        </p>
      </div>
    ),
  },
  {
    question: "Explain the application procedure to complete the occupational qualification.",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          To apply for an occupational qualification at Water Business College (WBC), applicants must follow a clearly defined process that ensures eligibility and proper enrollment.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Review the <strong>‘Course Rules and Regulations’</strong> available on the WBC website. This includes detailed scheduling of modules and examinations.
          </li>
          <li>
            Complete the <strong>Application Form</strong> provided on the WBC website and attach the following:
            <ul className="list-disc list-inside ml-6">
              <li>Certified copy of your ID</li>
              <li>Certified copy of your NSC / Matric certificate</li>
              <li>Certified copies of other relevant educational qualifications (if applicable)</li>
            </ul>
          </li>
          <li>
            WBC staff will assess all applications. Successful applicants will be notified via email with a formal invitation letter.
          </li>
          <li>
            Upon acceptance, applicants will receive login credentials to access available knowledge and practical modules and short courses on the WBC platform.
          </li>
          <li>
            Additional module and examination information will be posted on the WBC website as it becomes available.
          </li>
          <li>
            Applicants must select and pay for a minimum of <strong>one (1) module</strong> and are advised to select no more than <strong>four (4) modules</strong> at a time.
          </li>
        </ul>
        <p className="text-red-600">
          Please note: WBC reserves the right to cancel or reschedule a module, or change the facilitator up to ten (10) days prior to the scheduled module. In case of cancellation, learners will be fully reimbursed.
        </p>
      </div>
    ),
  },
  {
    question: "Explain the application procedure to complete the individual modules.",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          • All applicants/practitioners interested in completing individual knowledge and practical modules must consult the{' '}
          <a href="https://waterbusinesscollege.co.za/qualification-rules-regulations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Course Rules and Regulations
          </a>{' '}
          on the WBC website. The document contains tables with scheduling details for modules and examinations.
        </p>
        <p>
          • Applicants must click on the relevant knowledge and/or practical module and complete the billing information required.
        </p>
        <p>
          • Module information will be available during the period that the module is offered.
        </p>
        <p className="text-red-600">
          Water Business College (WBC) reserves the right to cancel or reschedule a module, or change the facilitator up to ten (10) days before the scheduled module period due to unforeseen circumstances. Learners will be fully reimbursed if a module is cancelled.
        </p>
      </div>
    ),
  },
  {
    question: "Explain the application procedure to complete the individual short courses.",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          • Brief information about each short course will be displayed when hovering the mouse over it.
        </p>
        <p>
          • Applicants must click on the relevant short course and complete the required billing information.
        </p>
        <p>
          • Course content will be available on the day that the short course is offered.
        </p>
        <p className="text-red-600">
          Water Business College (WBC) reserves the right to cancel or reschedule a short course, or change the presenter up to ten (10) days prior to the scheduled course date due to unforeseen circumstances. Participants will be fully reimbursed if the course is cancelled.
        </p>
      </div>
    ),
  },
  {
    question: "Is Water Business College (WBC) an accredited training institute / Skill Development Provider (SDP)?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Water Business College (PTY) Ltd (WBC) is accredited as a Skills Development Provider (SDP) by the Quality Council for Trades and Occupations (QCTO), under Accreditation Number QCTOSDP01200724-2088.
        </p>
        <p>
          WBC is accredited to offer the following occupational qualifications in the water services sector:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Water Reticulation Practitioner (SAQA ID 102581 – NQF Level 4)</li>
          <li>Water Infrastructure Manager (SAQA ID 104623 – NQF Level 8)</li>
        </ul>
        <p>
          WBC launched a Pilot Programme for the entry-level Water Reticulation Practitioner qualification in May 2022, enrolling a limited number of learners across provinces who are employed in both public and private sectors.
        </p>
        <p>
          WBC has developed a hands-on practical laboratory – a prototype water reticulation system – to simulate systems used by water service providers and industry (e.g., municipalities, mines, industrial plants).
        </p>
        <p>
          Learners are required to attend a total of 4 weeks of in-person training in Year 1, split into two 2-week sessions. Practical training is conducted at our site. A video of the site can be viewed at:{' '}
          <a href="https://www.youtube.com/watch?v=RndYrlr6L7Q" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            https://www.youtube.com/watch?v=RndYrlr6L7Q
          </a>.
        </p>
        <p>
          WBC intends to offer these qualifications formally from 2023 onwards.
        </p>
      </div>
    ),
  },
  {
    question: "Where is WBC located?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Water Business College (WBC) currently operates from an administrative office shared with an engineering company:
          <br />
          <strong>Office H4, The Willows Office Park, Die Wilgers, Pretoria</strong>.
        </p>
        <p>
          The Willows Park Office is mainly used for online classes. WBC employs a blended learning approach, combining online knowledge modules with in-person practical modules.
        </p>
        <p>
          <strong>Knowledge Modules (KM):</strong> Delivered online through two 2-hour sessions per week, typically on Tuesday and Thursday afternoons from 17h00 to 19h00.
        </p>
        <p>
          <strong>Practical Modules (PM):</strong> Conducted in-person at WBC’s practical site. Learners are required to attend two 2-week practical sessions (total of 4 weeks) during the academic year.
        </p>
        <p>
          <strong>Practical Site / Laboratory:</strong> WBC has developed a prototype water reticulation system for hands-on training, simulating municipal and industrial water systems.
          <br />
          Watch a video of the practical site here:{" "}
          <a href="https://www.youtube.com/watch?v=RndYrlr6L7Q" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            https://www.youtube.com/watch?v=RndYrlr6L7Q
          </a>
        </p>
        <p>
          <strong>Note:</strong> The practical site has been disassembled for relocation and will be reassembled in time for upcoming sessions.
        </p>
        <p>
          <strong>Future Decentralised Operations:</strong> WBC is working on establishing infrastructure in other provinces, collaborating with local engineering firms to support regional delivery of practical modules.
        </p>
      </div>
    ),
  },
  {
    question: "How can we contact WBC?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Water Business College (WBC) operates from a shared office with a specialist engineering company in Lynnwood, Pretoria. For all administrative inquiries, please use one of the following contact channels:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Visit our website:{" "}
            <a href="https://waterbusinesscollege.co.za" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Water Business College – Water is Life
            </a>
          </li>
          <li>Call us at: <strong>081 7279 793</strong></li>
          <li>Email: <strong>contactus@waterbusinesscollege.co.za</strong></li>
          <li>Follow us on Facebook.</li>
        </ul>
        <p>
          The Willows Park Office (Office H4, The Willows Office Park, Die Wilgers, Pretoria) is primarily used for online classes.
        </p>
        <p>
          WBC will expand its infrastructure based on demand for academic programmes across various regions.
        </p>
      </div>
    ),
  },
  {
    question: "Can both the private sector and public sector institutions benefit from the occupational qualifications offered by WBC?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p><strong>Yes.</strong> WBC's occupational qualifications are valuable to both private and public sector institutions.</p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Businesses incorporate training to build a skilled workforce that aligns with strategic objectives.
          </li>
          <li>
            Re-skilling and up-skilling initiatives help employees formalise existing expertise and expand their knowledge base.
          </li>
          <li>
            Corporate training improves job satisfaction, boosts productivity, enhances performance, and reduces staff turnover.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How did WBC implement the Pilot Programme for the entry-level Water Reticulation Practitioner Qualification (NQF Level 04)?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Water Business College (WBC) launched the Pilot Programme for the Water Reticulation Practitioner Qualification (NQF Level 04) in April/May 2022. A limited group of five learners participated using Microsoft Teams to test online learning and assignment management systems.
        </p>
        <p>
          The pilot addressed operational, logistical, and financial challenges in preparation for full roll-out. Online sessions were held every Tuesday and Thursday from 17h00 to 19h00, and weekly assignments were assigned.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Participants were full-time employees in both public and private sectors.</li>
          <li>Learners came from multiple provinces, including rural areas.</li>
          <li>Recognition of Prior Learning (RPL) was applied for some learners.</li>
        </ul>
        <p>
          WBC employed a technical director and two qualified young engineers to lead training in water treatment and reticulation. A prototype laboratory was developed to simulate municipal and industrial water systems.
        </p>
        <p>
          Two, 2-week practical sessions were held during the pilot, resulting in the creation of a practical manual.
        </p>
        <p>
          Facilities included Unit H4 at Willows Office Park for online delivery, and a 200m² space at N4 Gateway, Pretoria, for the practical site.
        </p>
        <p>
          WBC partnered with FESTO DIDACTIC to integrate modern technology, simulation, and VR into the training. View the water processing video here:{" "}
          <a href="https://waterbusinesscollege.co.za/blog" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Blog Page – Water Business College
          </a>
        </p>
        <p>
          Financial aid partnerships were formed with MANATI and FUNDI. A WBC-specific student loan agreement is also under development for greater accessibility.
        </p>
        <p>
          The pilot led to the creation of the Non-Contractual, Modular ‘Pay-As-You-Learn’ (MPAYL) system to support flexible learning and payment. More info:{" "}
          <a href="https://waterbusinesscollege.co.za/qualification-rules-regulations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Qualification Rules & Regulations – Water Business College
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "Do I get automatic entry to a qualification when submitting an application form?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          <strong>No</strong>, all applications are subject to a rigorous selection process. Acceptance depends on multiple factors, including limited intake capacity.
        </p>
        <p>
          While demand for the NQF Level 4 – Water Reticulation Practitioner qualification is growing, submitting an application does not guarantee admission.
        </p>
        <p>
          <strong>Note:</strong> No application fee is required. Submitting an application form does not place any obligation on the applicant or sponsor.
        </p>
        <p>
          To apply online, please visit:{" "}
          <a href="https://waterbusinesscollege.co.za/occupational-qualification-application-form/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Occupational Qualification Application Form – Water Business College
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "Does Water Business College (WBC) offer qualifications / courses on water processing / water treatment?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          <strong>Not yet.</strong> A new occupational qualification in water processing was published in 2022.
        </p>
        <p>
          WBC plans to apply for accreditation from the Quality Council for Trades and Occupations (QCTO) during 2023 to offer this and other qualifications across various National Qualifications Framework (NQF) levels.
        </p>
      </div>
    ),
  },
  {
    question: "Does WBC support Recognition of Prior Learning (RPL or ARPL)?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Yes. Water Business College (WBC) supports and complies with national requirements for Recognition of Prior Learning (RPL).
        </p>
        <p>
          RPL is available for all qualifications and may be based on:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Informal learning or non-accredited formal study equivalent to required qualifications.</li>
          <li>A minimum of 3 years of relevant work experience and academic history.</li>
          <li>Advanced standing where minimum entry requirements are not met.</li>
          <li>Completed modules from other accredited institutions with equivalent content and standards.</li>
        </ul>
        <p>
          Exemption cases and access to qualifications are handled by the WBC Board with input from programme leaders and relevant workplaces.
        </p>
        <p>
          RPL for the External Integrated Summative Assessment (EISA) must be confirmed by WBC and Approved Workplaces using internal assessment criteria.
        </p>
        <p>
          Applications may also be reviewed in consultation with the Assessment Quality Partner (AQP) and/or the Quality Council for Trades and Occupations (QCTO).
        </p>
        <p>
          The RPL process is rigorous, especially if there is a significant gap between the applicant’s current academic standing and the target qualification’s NQF level.
        </p>
        <p>
          Evaluation includes a Portfolio of Evidence (POE), possible interview, employer questionnaire, and a practical assignment aligned to the qualification’s learning outcomes.
        </p>
      </div>
    ),
  },
  {
    question: "How will WBC implement the Recognition of Prior Learning (RPL or ARPL) application process?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          RPL (or ARPL) applicants must upload supporting documentation during the qualification application process. Details can be found here:{" "}
          <a href="https://waterbusinesscollege.co.za/application-procedures" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Application Procedures – Water Business College
          </a>
        </p>
        <p>
          The RPL/ARPL application consists of:
        </p>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li>
            <strong>Letter of Recommendation</strong> from the applicant’s supervisor or manager, including:
            <ul className="list-disc list-inside ml-4">
              <li>Full name and ID number</li>
              <li>Desired qualification</li>
              <li>Motivation for application</li>
              <li>Confirmation that the submitted POE is accurate</li>
            </ul>
          </li>
          <li>
            <strong>Portfolio of Evidence (POE)</strong>: Up to 3 project summaries (max 1 page each) including:
            <ul className="list-disc list-inside ml-4">
              <li>Project name, dates, and applicant’s role</li>
              <li>Description and responsibilities</li>
              <li>Two contactable references with email and phone</li>
            </ul>
          </li>
          <li>
            <strong>Short CV</strong> of the applicant</li>
          <li>
            <strong>Relevant certificates</strong> obtained by the applicant</li>
        </ol>
      </div>
    ),
  },
  {
    question: "I have an NQF Level 3 Water and Wastewater qualification. Can I apply?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Yes, you can apply for the NQF Level 04 qualification (Water Reticulation). However, acceptance is not automatic and will depend on the outcome of the selection process.
        </p>
        <p>
          The new Occupational Certificate qualifications differ from older qualifications, so each application is carefully assessed.
        </p>
        <p>
          Apply online at:{" "}
          <a href="https://waterbusinesscollege.co.za/occupational-qualification-application-form/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Occupational Qualification Application Form – Water Business College
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "I have a NQF Level 4 Water and Wastewater Process Controller qualification. Can I still apply?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          Yes, you can apply for the NQF Level 04 Water Reticulation qualification. However, admission is not automatic and will depend on the selection process.
        </p>
        <p>
          The Occupational Certificate qualifications differ from older qualifications, so each application is evaluated individually.
        </p>
        <p>
          Please apply using the following link:{" "}
          <a href="https://waterbusinesscollege.co.za/occupational-qualification-application-form/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Occupational Qualification Application Form – Water Business College
          </a>
        </p>
        <p>
          Note: New occupational qualifications at higher NQF Levels for the water services sector are expected to be published during 2022/2023.
        </p>
      </div>
    ),
  },
  {
    question: "Do the learners enrolled at WBC qualify for NSFAS funding? Does WBC receive funding from NSFAS?",
    answer: (
      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm space-y-2">
        <p>
          No. Water Business College (WBC) is a private educational institution and does not receive any funding or subsidies from the South African Government.
        </p>
        <p>
          As a result, learners enrolled at WBC do not qualify for NSFAS funding or loans.
        </p>
        <p>
          WBC has introduced the Non-Contractual, Modular ‘Pay-As-You-Learn’ (MPAYL) system to make studies more affordable. For more details, see:{" "}
          <a href="https://waterbusinesscollege.co.za/qualification-rules-regulations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Qualification Rules & Regulations – Water Business College
          </a>
        </p>
        <p>
          WBC also partners with financial institutions such as MANATI and FUNDI to offer student loans. These organisations provide funding options to students who are unable to afford tuition or secure financing.
        </p>
        <p>
          In addition, WBC is developing its own student loan agreement for applicants who do not qualify under the terms of MANATI and FUNDI.
        </p>
      </div>
    ),
  },
];


export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-10">
        Find answers to the most common questions below.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}