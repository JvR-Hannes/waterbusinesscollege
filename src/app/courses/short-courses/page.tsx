import CourseCard from "@/components/CourseCard";

const mockCourses = [
  {
    title: " ",
    description: (
      <>
        <p>The Surface Water Management in Mining short course addresses the following:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Baseline climate & rainfall/runoff response</li>
          <li>Flood hydrology & modelling of flood events</li>
          <li>Stormwater management in the mining context</li>
          <li>Developing surface water quality monitoring programs</li>
          <li>Governing legislation - Management of surface water in the mining context</li>
          <li>The importance of GIS in hydrological assessments</li>
        </ul>
        <br />
        <p>ECSA Accreditation – 1 CPD Point</p>
      </>
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