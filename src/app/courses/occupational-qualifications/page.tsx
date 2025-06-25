import CourseCard from "@/components/CourseCard";

const mockCourses = [
  {
    title: "642605001-KM-01 // Module 1 // NQF 4 (CREDITS: 5)",
    description: (
      <p>
        Build an understanding of the basic concepts, principles and practices which relate to the workplace context,
        and the explicit and tacit rules which govern the workplace.<br /><br />
        Learner material is available 24/7 online on our LMS.
      </p>
    ),
    imageUrl: "/images/qualifications/workplace.png",
    href: "/courses/modules/module-1", // or the actual course detail path if available
  },
  {
    title: "642605001-KM-02 // Module 2 // NQF 4 (CREDITS: 6)",
    description: (
      <p>
        Build an understanding of the various mechanical, electrical, electronic, hydraulic, and pneumatic Build an understanding of the water services sector, the scope of work, career opportunities and the legislative framework for the Water Reticulation Practitioner.
        <br />
        Learner material is available 24/7 online on our LMS.

      </p>
    ),
    imageUrl: "/images/qualifications/world.png",
    href: "/courses/modules/module-2",
  },
  {
    title: "642605001-KM-03 // Module 3 // NQF 4 (CREDITS: 5)",
    description: (
      <p>
        Build an understanding of the various mechanical, electrical, electronic, hydraulic, and pneumatic tools and equipment and electronic devices used by the WRP.
        In addition, the module provides specific guidelines when working with electricity and electrical equipment.
        <br />
        Learner material is available 24/7 online on our LMS.
      </p>
    ),
    imageUrl: "/images/courses/module-3.png",
    href: "/courses/modules/module-3",
  },
  {
    title: "642605001-KM-04 // Module 4 // NQF 4 (CREDITS: 5)",
    description: (
      <p>
        Build an understanding of basic slinging and lifting operations. In addition, the learners will learn the theory regarding directing the operation of cranes used in a water reticulation environment.
        <br />
        Learner material is available 24/7 online on our LMS.
      </p>
    ),
    imageUrl: "/images/qualifications/module-4.png",
    href: "/courses/modules/module-4",
  },
  {
    title: "642605001- KM-05 // Module 5 // NQF 4 (TOTAL CREDITS: 17)",
    description: (
      <p>
        Understanding water reticulation systems, contamination, cleaning and disinfecting water mains, construction work, backfilling and compaction, trench excavation and installation of shoring, pressure zones and backflow prevention, maps and engineering drawings, hydraulics and flow measurements, connecting the customer.
        <br /><br />
        Learner material is available 24/7 online on our LMS.
      </p>
    ),
    imageUrl: "/images/qualifications/module-5.png",
    href: "/courses/modules/module-5",
  },
  {
    title: "624605001- KM-06 // Module 6 // NQF 4 (CREDITS: 6)",
    description: (
      <p>
        Build an understanding of pipes, piping, and pipe joining in a water reticulation system.
        <br /><br />
        Learner material is available 24/7 online on our LMS.
      </p>
    ),
    imageUrl: "/images/qualifications/module-6.png",
    href: "/courses/modules/module-6",
  },
  {
    title: "624605001- KM-07 // Module 7 // NQF 4 (CREDITS: 9)",
    description: (
      <p>
        Build an understanding of pipe laying, valves and actuators, water meters, pumps, and corrosion control in a water reticulation system.
        <br /><br />
        Learner material is available 24/7 online on our LMS.
      </p>
    ),
    imageUrl: "/images/qualifications/module-7.png",
    href: "/courses/modules/module-7",
  },
  {
    title: "624605001- KM-08 // Module 8 // NQF 4 (TOTAL CREDITS: 12)",
    description: (
      <p>
        Build an understanding of operating and maintaining a water reticulation system to reduce water loss through the maintenance of components such as valves, pumps and water meters. The module also focuses on the role of the team in this activity.
        <br /><br />
        Learner material is available 24/7 online on our LMS.
      </p>
    ),
    imageUrl: "/images/qualifications/module-8.png",
    href: "/courses/modules/module-8",
  },
];

export default function OccupationalQualifications() {
  return (
    <main className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 align-center">
        <h1 className="text-3xl font-bold mb-8 mt-8 text-center">Qualifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-14 mt-8 mb-8">
          {mockCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              href={course.href}
              variant="large" 
              buttonText="More Information"
              customStyles="w-[400px] md:w-[800px] h-auto min-h-[360px]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}