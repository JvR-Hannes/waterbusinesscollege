import CourseCard from "@/components/CourseCard";

const mockCourses = [
  {
    title: "642605001-KM-01 // Module 1 // NQF 4 (CREDITS: 5)",
    description: (
      <p>
        The Introduction to Mathematics self-study course focusses on.
        <br />
        Learner material is available 24/7 online on our LMS.
      </p>
    ),
    imageUrl: "/images/courses/math.png",
    href: "#", // or the actual course detail path if available
  },
];

export default function FoundationCourses() {
  return (
    <main className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 align-center">
        <h1 className="text-3xl font-bold mb-12 text-center">Foundation</h1>
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