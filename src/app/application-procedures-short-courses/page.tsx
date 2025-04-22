'use client';

import Image from 'next/image';

const shortCourses = [
  {
    title: '',
    img: '/images/application-procedures/short-course-1.png',
  },
  {
    title: '',
    img: '/images/application-procedures/short-course-2.png',
  },
  {
    title: '',
    img: '/images/application-procedures/short-course-3.png',
  },
  // Add more as needed
];

export default function ShortCoursesPage() {
  return (
    <main className="py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Application Procedures (Short Courses)</h1>
      <p className="text-center mb-12 text-blue-600">
        Application Procedures to Complete Individual Short Courses
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shortCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden max-w-md mx-auto"
          >
            <Image
              src={course.img}
              alt={course.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{course.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}