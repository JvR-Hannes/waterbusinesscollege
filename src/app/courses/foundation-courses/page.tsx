import CourseCard from "@/components/CourseCard";

const mockCourses = [
  {
    title: "642605001-KM-01 // Module 1 // NQF 4 (CREDITS: 5)",
    description: (
      <>
        <p>
          This <strong>online Introduction to Basic Mathematics self-assessment course</strong>{" "}
          focusses on exponents; scientific notation; dimensional analyses;
          rounding and estimation; solving equations and for unknown values;
          ratios and proportions; calculating averages and percentage; linear,
          area and volume measurements; graphs, etc.
        </p>
        <p>
          Target audiences: <strong>Technical staff</strong> enrolling for entry-level
          occupational qualifications and <strong>High School Students</strong> looking to review
          basic mathematical concepts.
        </p>
      </>
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
        <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-20 mb-12">
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