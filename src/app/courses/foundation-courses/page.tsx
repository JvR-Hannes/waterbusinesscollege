import CourseCard from "@/components/CourseCard";

const mockCourses = [
  {
    title: "Introduction to Basic Mathematics",
    description: (
      <>
        <p>
          Numbers are at the heart of every technical role. This self-paced
          foundation course equips water-sector technicians, operational staff,
          and scholars with basic core numeracy skills — covering exponents,
          scientific notation, dimensional analysis, rounding, mensuration,
          descriptive statistics, functions, and more. The Introduction to Basic
          Mathematics self-study course will assist participants with basic data
          analyses and report writing. No prior knowledge required.
        </p>
        <p>
          Target audiences: <strong>Technical staff</strong> enrolling for
          entry-level occupational qualifications and{" "}
          <strong>High School Students</strong> looking to review basic
          mathematical concepts.
        </p>
      </>
    ),
    imageUrl: "/images/courses/introduction-to-basic-math.png",
    href: "/courses/modules/foundation-intro-basic-mathematics",
  },
  {
    title: "Introduction to Algebra",
    description: (
      <>
        <p>
          This self-paced course provides a structured foundation in algebra,
          from core operations through to quadratic equations, illustrated
          throughout with water-sector applications. For scholars, a solid grasp
          of algebra underpins academic performance and readiness for further
          technical study. The course also supports water-sector technicians
          pursuing upskilling, and adult learners seeking a structured
          refresher. Delivered online via the WBC Tutor LMS, learners may begin
          at any time, working through thirteen topics at their own pace.
        </p>
      </>
    ),
    imageUrl: "/images/courses/introToAlgebraIcon.png",
    href: "/courses/modules/foundation-intro-algebra",
  },
];

export default function FoundationCourses() {
  return (
    <main className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 align-center">
        <h1 className="text-3xl font-bold mb-12 text-center">
          Foundation Programs
        </h1>
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
