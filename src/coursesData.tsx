import { ReactNode } from "react";

type Course = {
  title: string;
  description: ReactNode;
  image: string;
  category: string;
  href: string;
  /** When true, CTA shows "Temporarily Unavailable" (outline style, not a link). */
  temporarilyUnavailable?: boolean;
};

export const courses: Course[] = [
  {
    title: "Water Reticulation Practitioner (NQF Level 04)",
    description: (
      <>
        <p>
          This qualification is designed for individuals aiming to install, operate,
          and maintain water supply infrastructure.
        </p>
        <p>
          It&apos;s suitable for technical staff seeking formal recognition for their
          relevant experience and for young persons&apos; / scholars entering the water
          sector.
        </p>
        <p>
          A Water Reticulation Practitioner installs, operates and maintains the water
          reticulation / water supply infrastructure and manages a water reticulation
          team.
        </p>
      </>
    ),
    image: "/images/courses/waterreticulation.png",
    category: "Occupational Qualifications",
    href: "/courses/occupational-qualifications",
    temporarilyUnavailable: true,
  },
  {
    title: "Self-Study Foundation Courses",
    description: (
      <>
        <p>
          Water Business College (WBC) is developing online self-assessment Foundation
          Courses (i.e. Basic Mathematics, Basic Chemistry, etc.) to prepare technical
          staff / younger practitioners for entry-level occupational qualifications.
        </p>
        <p>
          Scholars (High School Students) can use the Foundation Courses for revision.
        </p>
        <p>
          These low fee courses are available 24/7 on the WBC LMS and the learner /
          participant can start at any time.
        </p>
      </>
    ),
    image: "/images/courses/foundation.png",
    category: "Foundation Courses",
    href: "/courses/foundation-courses",
  },
  {
    title: "Online Short Courses",
    description: (
      <>
        <p>
          Water Business College (WBC) is developing short courses for the water
          sector.
        </p>
        <p>
          The short courses are accredited by the Engineering Council of South Africa
          (ECSA) and/or the South African Council for Natural Scientific Professions
          (SACNASP) for Continuing Professional Development (CPD) points.
        </p>
        <p>The short courses will be delivered online (in various formats).</p>
        <p>
          The course material is available 24/7 on the WBC LMS and the learner /
          participant can start at any time.
        </p>
        <p>Significantly reduced course fees for tertiary students.</p>
      </>
    ),
    image: "/images/courses/online-short-courses.png",
    category: "Short Courses",
    href: "/courses/short-courses",
  },
  {
    title: "Do-It-Yourself (DIY) Courses",
    description: (
      <>
        <p>
          The Do-It-Yourself (DIY) courses focus on applied topics as <br />well as on
          methods to conduct industry-specific tasks / activities, and include courses
          on municipal water supply systems, mine water management, etc.
        </p>
        <p>
          ECSA and/or SACNASP accreditation for Continuing Professional Development
          (CPD) points.
        </p>
        <p>
          Courses are available 24/7 on the WBC LMS and the learner / participant can
          start at any time.
        </p>
        <p>
          Target audiences: Technicians, Younger practitioners and Senior and
          post-graduate students.
        </p>
        <p>Significantly reduced course fees for tertiary students.</p>
      </>
    ),
    image: "/images/courses/diy.png",
    category: "DIY Courses",
    href: "/courses/diy-courses",
  },
];/*Adjust margin size on DIY Course, Adjust button , Adjust CourseCard height*/