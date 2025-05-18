import CourseCard from "@/components/CourseCard";
import { courses } from "@/coursesData";

export default function Courses() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Courses</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course, idx) => (
            <CourseCard
              key={idx}
              title={course.title}
              description={course.description}
              imageUrl={course.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
