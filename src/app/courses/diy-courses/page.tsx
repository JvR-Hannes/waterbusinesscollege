import CourseCard from "@/components/CourseCard";

const mockCourses = [
  {
    title: " ",
    description: (
      <>
        <p>
          The focus of the <strong>online DIY / self-assessment course</strong> is on
          methodology, i.e. how to conduct a Waste Classification and an Acid Rock
          Drainage (ARD / ABA) Assessment of mine residue deposits / waste
          material.
        </p>
        <p>
          Target audiences: <strong>Technicians</strong>, <strong>Younger practitioners</strong> and{" "}
          <strong>Senior</strong> and <strong>post-graduate students</strong> in the water resources as well as related
          engineering, environmental and related science disciplines.
        </p>
        <p>
          Case Study: Platinum Group Minerals (PGM&apos;s) in the Bushveld
          Igneous Complex (BIC).
        </p>
        <p><strong>ECSA Accreditation – 2 CPD Points</strong></p>
      </>
    ),
    imageUrl: "/images/courses/waste.png",
    href: "/courses/modules/diycourses", // or the actual course detail path if available
  },
  {
    title: " ",
    description: (
      <>
        <p>
          This <strong>online DIY / self-assessment course</strong> focusses on the naming of
          pumps, pumping rates, suction and pressure head, pump curves, pump
          selection, pumps in parallel and in series and an introduction to
          system curves.
        </p>
        <p>The DIY course contains informative videos.</p>
        <p>
          Target audiences: <strong>Technicians</strong>, <strong>Younger practitioners</strong> and{" "}
          <strong>Senior</strong> and <strong>post-graduate students</strong> in the water, civil engineering, environmental
          and related science disciplines.
        </p>
        <p><strong>ECSA Accreditation – 3 CPD Points</strong></p>
      </>
    ),
    imageUrl: "/images/courses/basic-theory-on-pumps.png",
    href: "/courses/modules/diypumps", // or the actual course detail path if available
  },
];

export default function DiyCourses() {
  return (
    <main className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 align-center">
        <h1 className="text-3xl font-bold mb-12 text-center">DIY Courses</h1>
        <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-20 pb-6 mb-12">
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
