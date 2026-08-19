// src/fullCourseData.tsx

export type Course = {
  title: string;
  image: string;
  description: string;
  price?: string;
  link?: string;
  category: string;
  requiresStudentDiscountApplication?: boolean;
  requiresQualificationApplication?: boolean;
};

const PORTAL_BASE_URL = "https://portal.waterbusinesscollege.co.za";
const PORTAL_CART_URL = `${PORTAL_BASE_URL}/cart-2/`;

function buildPortalPurchaseLink(productId: number): string {
  return `${PORTAL_BASE_URL}/?add-to-cart=${productId}&redirect_to=${encodeURIComponent(
    PORTAL_CART_URL,
  )}`;
}

export const fullCourses: Course[] = [
  {
    title: "Module 1: Workplace Fundamentals – NQF L4",
    image: "/images/courses/M1.png",
    description:
      "Gain essential workplace knowledge including communication, ethics, and numeracy.",
    price: "R2600.00",
    link: buildPortalPurchaseLink(1057),
    category: "Qualifications",
    requiresQualificationApplication: true,
  },
  {
    title:
      "Module 2: The World of The Water Reticulation Practitioner – NQF L4",
    image: "/images/courses/M2.png",
    description:
      "Develop hands-on skills for water infrastructure installation and maintenance.",
    price: "R3100.00",
    link: buildPortalPurchaseLink(1222),
    category: "Qualifications",
    requiresQualificationApplication: true,
  },
  {
    title: "Module 3: Tools, Equipement and Electronic Devices – NQF L4",
    image: "/images/courses/M3.png",
    description:
      "Develop hands-on skills for water infrastructure installation and maintenance.",
    price: "R2600.00",
    link: buildPortalPurchaseLink(1221),
    category: "Qualifications",
    requiresQualificationApplication: true,
  },
  {
    title: "Module 4: Basic Slinging and Lifting Operations – NQF L4",
    image: "/images/courses/M4.png",
    description:
      "Develop hands-on skills for water infrastructure installation and maintenance.",
    price: "R2600.00",
    link: buildPortalPurchaseLink(1220),
    category: "Qualifications",
    requiresQualificationApplication: true,
  },
  {
    title: "Introduction to Basic Mathematics",
    image: "/images/courses/2-course-image.png",
    description:
      "Online self-assessment covering exponents, scientific notation, equations, ratios and proportions, measurement, and graphs — for technical staff and learners preparing for entry-level occupational qualifications.",
    price: "R500.00",
    link: buildPortalPurchaseLink(8719),
    category: "Foundational Courses",
  },
  {
    title: "Introduction to Basic Mathematics – Student",
    image: "/images/courses/2-course-image.png",
    description: "Student",
    price: "R100.00",
    category: "Foundational Courses",
    requiresStudentDiscountApplication: true,
  },
  {
    title: "Surface Water Management On Mines",
    image: "/images/courses/surfacewater.png",
    description: "",
    price: "R2500.00",
    link: buildPortalPurchaseLink(1453),
    category: "Short Courses",
  },
  {
    title: "Surface Water Management On Mines - Student",
    image: "/images/courses/surfacewater.png",
    description: "",
    price: "R350.00",
    link: buildPortalPurchaseLink(7336),
    category: "Short Courses",
    requiresStudentDiscountApplication: true,
  },
  {
    title:
      "Waste Classification and Acid Rock Drainage (ARD) Assessment - Platinum Mine",
    image: "/images/courses/ARD.png",
    description: "",
    price: "R2500.00",
    link: buildPortalPurchaseLink(3741),
    category: "DIY Courses",
  },
  {
    title:
      "Waste Classification and Acid Rock Drainage (ARD) Assessment - Platinum Mine - Student",
    image: "/images/courses/ARD.png",
    description: "",
    price: "R350.00",
    link: buildPortalPurchaseLink(7383),
    category: "DIY Courses",
    requiresStudentDiscountApplication: true,
  },
  {
    title: "Introduction to Basic Theory on Pumps (Centrigual Pumps)",
    image: "/images/courses/centrifugal.png",
    description: "",
    price: "R2500.00",
    link: buildPortalPurchaseLink(7140),
    category: "DIY Courses",
  },
  {
    title: "Introduction to Basic Theory on Pumps (Centrigual Pumps) - Student",
    image: "/images/courses/centrifugal.png",
    description: "Student",
    price: "R350.00",
    link: buildPortalPurchaseLink(7124),
    category: "DIY Courses",
    requiresStudentDiscountApplication: true,
  },
];
