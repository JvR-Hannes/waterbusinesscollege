'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the type for a single course
type Course = {
  ID: number;
  post_title: string;
  guid: string;
  thumbnail_url?: string;
  course_category: Array<{ name: string }>;
  product_id?: number;
};

export default function CoursesPage() {
  // Specify that courses will be an array of Course objects
  const [courses, setCourses] = useState<Course[]>([]); // Type is an array of Course objects
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/getCourses');
        const data = await res.json();

        if (data.error) {
          setError(data.error);
        } else {
          const filteredCourses = data.data.posts.filter((course: Course) =>
            !course.post_title.toLowerCase().includes("assessors guide")
          );
          setCourses(filteredCourses);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to fetch courses');
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container flexflex-col items-center text-center mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Featured Course</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {courses.length > 0 ? (
          // Grouping courses by category
          Object.entries(
            courses.reduce((acc: Record<string, Course[]>, course: Course) => {
              course.course_category.forEach((category) => {
                // If the category doesn't exist in accumulator, create it
                if (!acc[category.name]) acc[category.name] = [];
                acc[category.name].push(course);
              });
              return acc;
            }, {})
          ).map(([category, coursesInCategory]: [string, Course[]]) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-left">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
                {coursesInCategory.map((course: Course) => (
                  <div key={course.ID} className="course-card p-4 border rounded shadow-md">
                    {/* Render course image */}
                    {course.thumbnail_url && (
                      <img
                        src={course.thumbnail_url}
                        alt={course.post_title}
                        className="course-image w-full h-auto mb-4"
                      />
                    )}
                    <h2 className="text-xl font-semibold">{course.post_title}</h2>
                    <p className="text-gray-600 mt-2">{course.guid}</p>
                    <Link
                      href={`/courses/${course.ID}`}
                      className="mt-4 inline-block bg-blue-600 text-white text-xl px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      View Course
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
}
