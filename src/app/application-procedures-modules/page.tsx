'use client';

import Image from 'next/image';

export default function ModulesPage() {
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
  ];

  return (
    <main className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">Application Procedures & Modules</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {modules.map((module) => (
          <div key={module.id} className="flex flex-col items-center text-center">
            <div className="w-full max-w-md mx-auto mb-4">
              <Image
                src={module.image}
                alt={module.title}
                width={400}
                height={250}
                className="object-cover rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <h2 className="text-xl font-semibold">{module.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
