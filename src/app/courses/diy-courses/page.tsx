import CourseCard from "@/components/CourseCard";

const mockCourses = [
  {
    title: " ",
    description: (
      <p>
        The focus of the online DIY course is on methodology, i.e. how to conduct a Waste Classification and an Acid Rock Drainage (ARD / ABA) Assessment of mine residue deposits / waste material.
        Target audiences: Technicians, Younger practitioners and Senior and post-graduate students in the water resources, engineering, environmental and science disciplines.
        {"Case Study: Platinum Group Minerals (PGM's) in the Bushveld Igneous Complex (BIC)."}
        <br /><br />
        The DIY courses are available 24/7 and the learner / participant can start at any time once registered!
        <br /><br />
        DELIVERED ONLINE
        <br /><br />
      </p>
    ),
    imageUrl: "/images/courses/waste.png",
    href: "/courses/modules/diycourses", // or the actual course detail path if available
  },
  {
    title: " ",
    description: (
      <p>
        The Introduction to Centrifugal Pumps DIY course focusses on the naming of pumps, pumping rates, suction and pressure head, pump curves, pump selection, pumps in parallel and in series and system curves.
        <br /><br />
        The DIY courses are available 24/7 and the learner / participant can start at any time once registered!
        <br /><br />
        DELIVERED ONLINE
        <br /><br />
      </p>
    ),
    imageUrl: "/images/courses/diyIntro.png",
    href: "/courses/modules/diypumps", // or the actual course detail path if available
  },
];

export default function DiyCourses() {
  return (
    <main className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 align-center">
        <h1 className="text-3xl font-bold mb-12 text-center">DIY Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 text-sm justify-items-center gap-y-12 pb-6 mb-12">
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