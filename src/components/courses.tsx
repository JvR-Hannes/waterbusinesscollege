import Image from "next/image";
import { courses } from "@/coursesData";

export default function Courses() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Courses</h2>
        <div className="grid md:grid-cols-2 gap-6 justify-center">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={250}
                className="rounded-t-lg"
              />
              <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                     {course.title}
                  </h3>
                  <div className="text-base text-gray-600">{course.description }</div>
                  <button className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                     Learn More
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}