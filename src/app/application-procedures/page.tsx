'use client';

import Image from 'next/image';

export default function ApplicationProceduresPage() {
  const modules = [
    {
      id: 1,
      title: 'Step 1: Complete Application Form',
      image: '/images/application-procedures/1.png',
    },
    {
      id: 2,
      title: 'Step 2: Attach Required Documents',
      image: '/images/application-procedures/2.png',
    },
    {
      id: 3,
      title: 'Step 3: Submit Your Application',
      image: '/images/application-procedures/3.png',
    },
    {
      id: 4,
      title: 'Step 4: Await Feedback',
      image: '/images/application-procedures/4.png',
    },
    {
      id: 5,
      title: 'Step 5: Modules Payment',
      image: '/images/application-procedures/5.png',
    },
  ];

  const buttons = [
    {
      text: 'Application Procedure to Complete Individual Modules',
      href: '/application-procedures-modules/',
    },
    {
      text: 'Application Procedure to Complete Individual Short Courses',
      href: '/application-procedures-short-courses/',
    },
    {
      text: 'Application Procedure to Complete DIY Courses',
      href: '/application-procedures-diy-courses/',
    },
  ];

  return (
    <main className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-24 text-center">Application Procedure to Complete Occupational Qualification</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {modules.map((module) => (
          <div key={module.id} className="flex flex-col items-center text-center">
            <div className="w-full mx-auto mb-4">
              <Image
                src={module.image}
                alt={module.title}
                layout="responsive"
                width={24}
                height={11}
                className="rounded-xl"
              />
            </div>
          </div>
        ))}

        {/* Button Block as last grid item */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className="px-6 py-2 text-md font-medium bg-[#2e528e] hover:bg-[#68A4D7] text-white rounded transition w-full max-w-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
      {/* Buttons below the grid */}
      <section className="mt-20 flex flex-col items-left gap-4">
        <a
          href="/course-terms-conditions/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[184px] min-h-[45px] px-6 py-3 text-[13px] text-center font-raleway text-[#2e528e] bg-white border-[3px] border-[#2e528e] rounded-[3px] transition-all duration-300 ease-in-out hover:brightness-95 flex items-center justify-center leading-snug"
        >
          Terms &amp; Conditions
        </a>
        <a
          href="/contact-us/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[184px] min-h-[45px] px-6 py-3 text-[13px] text-center font-raleway text-[#2e528e] bg-white border-[3px] border-[#2e528e] rounded-[3px] transition-all duration-300 ease-in-out hover:brightness-95 flex items-center justify-center leading-snug"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}