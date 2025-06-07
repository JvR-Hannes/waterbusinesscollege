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
    <main className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Application Procedures (Short Courses)</h1>
      <p className="text-center mb-12 text-blue-600">
        Application Procedures to Complete Individual Short Courses
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {shortCourses.map((course, index) => (
          <div
            key={index}
            className="w-full mx-auto mb-4"
          >
            <Image
              src={course.img}
              alt={course.title}
              width={400}
              height={300}
              className="object-cover rounded-xl w-full h-auto"
            />
            <div className="p-8">
              <h2 className="text-xl font-semibold text-center">{course.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}