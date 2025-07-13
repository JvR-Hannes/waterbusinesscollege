// src/config/courseModuleMapping.ts

export const courseModuleMapping: {
  [courseTitle: string]: {
    modules: {
      title: string;
      href: string;
    }[];
  };
} = {
  "Occupational Qualifications": {
    modules: [
      {
        title: "642605001-KM-01 // Module 1 // NQF 4 (CREDITS: 5)",
        href: "/courses/modules/module-1",
      },
      {
        title: "642605001-KM-02 // Module 2 // NQF 4 (CREDITS: 6)",
        href: "/courses/modules/module-2",
      },
      {
        title: "642605001-KM-03 // Module 3 // NQF 4 (CREDITS: 8)",
        href: "/courses/modules/module-3",
      },
      {
        title: "642605001-KM-04 // Module 4 // NQF 4 (CREDITS: 10)",
        href: "/courses/modules/module-4",
      },
      {
        title: "642605001-KM-05 // Module 5 // NQF 4 (CREDITS: 7)",
        href: "/courses/modules/module-5",
      },
      {
        title: "642605001-KM-06 // Module 6 // NQF 4 (CREDITS: 9)",
        href: "/courses/modules/module-6",
      },
      {
        title: "642605001-KM-07 // Module 7 // NQF 4 (CREDITS: 11)",
        href: "/courses/modules/module-7",
      },
      {
        title: "642605001-KM-08 // Module 8 // NQF 4 (CREDITS: 6)",
        href: "/courses/modules/module-8",
      },
    ],
  },

  "Do-It-Yourself (DIY) Courses": {
    modules: [
      {
        title: " ",
        href: "/courses/modules/diycourses",
      },
      {
        title: " ",
        href: "/courses/modules/diypumps",
      },
    ],
  },

  "Self-Study Foundation Courses": {
    modules: [
      {
        title: "642605001-KM-01 // Module 1 // NQF 4 (CREDITS: 5)",
        href: "/courses/foundation-courses",
      },
    ],
  },

  "Short Courses": {
    modules: [
      {
        title: " ",
        href: "/courses/modules/shortcourses",
      },
    ],
  },

  // Add more courses and module mappings as needed
};
