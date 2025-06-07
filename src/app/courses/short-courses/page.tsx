import CourseCard from "@/components/CourseCard";

const mockCourses = [
  {
    title: " ",
    description: (
      <p>
        Build an understanding of the basic concepts, principles and practices which relate to the workplace context,
        and the explicit and tacit rules which govern the workplace.<br /><br />
        Learner material is available 24/7 online on our LMS.<br /><br /><br />
      </p>
    ),
    imageUrl: "/images/courses/short.png",
    href: "/courses/modules/shortcourses", // or the actual course detail path if available
  },
];

export default function ShortCoursesPage() {
  return (
    <main className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 align-center">
        <h1 className="text-3xl font-bold mb-12 text-center">Short Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-14 mb-12">
          {mockCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              href={course.href}
              variant="large"
              buttonText="More Information" 
            />
          ))}
        </div>
      </div>
    </main>
  );
}