import { ReactNode } from "react";

type Course = {
  title: string;
  description: ReactNode;
  image: string;
};

export const courses: Course[] = [
  {
    title: "Water Business Essentials",
    description: (
      <p>
        This qualification is designed for individuals aiming to install, operate,
        and maintain water supply infrastructure. It's suitable for technical staff
        seeking formal recognition of their experience and for newcomers entering
        the water sector.
      </p>
    ),
    image: "/images/courses/waterreticulation.png",
  },
  {
    title: "Self-Study Foundation Courses",
    description: (
      <p>
        The <strong>Foundation Courses</strong> (i.e. Basic Mathematics, Basic Chemistry, etc.) prepare
        learners for the occupational qualifications.
        <br />
        Scholars (High School Students) can use the Foundation Courses for revision.
      </p>
    ),
    image: "/images/courses/foundation.png",
  },
  {
    title: "Short Courses",
    description: (
      <>
        <p>
          Water Business College (WBC) is offering several short courses (1-day and
          3-day short courses) on water resource management that were previously
          accredited for <strong>Continuing Professional Development (CPD)</strong>{" "}
          points by the Engineering Council of South Africa (ECSA) and the{" "}
          <strong>South African Council for Natural Scientific Professions (SACNASP)</strong>.
          The accreditation for the short courses will be renewed. The short courses
          will be delivered online and in-person.
        </p>
      </>
    ),
    image: "/images/courses/shortcourse.png",
  },
  {
    title: "Do-It-Yourself (DIY) Courses",
    description: (
      <>
        <p>
          The <strong>Do-It-Yourself (DIY) courses</strong> focus on applied methods
          to conduct industry-specific tasks and activities, including courses on
          municipal water supply systems, and on the classification and ARD/ABA
          assessment of waste materials (incl. mine wastes), etc.
        </p>
        <p>The DIY courses are available 24/7 and are ideal for:</p>
        <ol className="list-decimal list-inside ml-4">
          <li>
            <strong>Technicians, Younger practitioners</strong> and{" "}
            <strong>Senior and post-graduate students</strong> in the water, related
            engineering, environmental and science disciplines
          </li>
          <li>
            <strong>Scholars</strong> reviewing math, hydraulics, and more
          </li>
        </ol>
      </>
    ),
    image: "/images/courses/diy.png",
  },
];