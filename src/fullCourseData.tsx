// src/fullCourseData.tsx

export type Course = {
  title: string;
  image: string;
  description: string;
  price?: string;
  link?: string;
  category: string;
  requiresStudentDiscountApplication?: boolean;
};

export const fullCourses: Course[] = [
  {
    title: "Module 1: Workplace Fundamentals – NQF L4",
    image: "/images/courses/M1.png",
    description: "Gain essential workplace knowledge including communication, ethics, and numeracy.",
    price: "R2600.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1057&redirect-to=cart",
    category: "Qualifications",
  },
  {
    title: "Module 2: The World of The Water Reticulation Practitioner – NQF L4",
    image: "/images/courses/M2.png",
    description: "Develop hands-on skills for water infrastructure installation and maintenance.",
    price: "R3100.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "Qualifications",
  },
  {
    title: "Module 3: Tools, Equipement and Electronic Devices – NQF L4",
    image: "/images/courses/M3.png",
    description: "Develop hands-on skills for water infrastructure installation and maintenance.",
    price: "R2600.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "Qualifications",
  },
  {
    title: "Module 4: Basic Slinging and Lifting Operations – NQF L4",
    image: "/images/courses/M4.png",
    description: "Develop hands-on skills for water infrastructure installation and maintenance.",
    price: "R2600.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "Qualifications",
  },
  {
    title: "Surface Water Management On Mines",
    image: "/images/courses/surfacewater.png",
    description: "",
    price: "R2500.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "Short Courses",
  },
  {
    title: "Surface Water Management On Mines - Student",
    image: "/images/courses/surfacewater.png",
    description: "",
    price: "R350.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "Short Courses",
    requiresStudentDiscountApplication: true
  },
  {
    title: "Waste Classification and Acid Rock Drainage (ARD) Assessment - Platinum Mine",
    image: "/images/courses/ARD.png",
    description: "",
    price: "R2500.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "DIY Courses",
  },
  {
    title: "Waste Classification and Acid Rock Drainage (ARD) Assessment - Platinum Mine - Student",
    image: "/images/courses/ARD.png",
    description: "",
    price: "R350.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "DIY Courses",
    requiresStudentDiscountApplication: true
  },
  {
    title: "Introduction to Centrifugal Pumps",
    image: "/images/courses/centrifugal.png",
    description: "",
    price: "R2500.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "DIY Courses",
  },
  {
    title: "Introduction to Centrifugal Pumps - Student",
    image: "/images/courses/centrifugal.png",
    description: "Student",
    price: "R350.00",
    link: "https://waterbusinesscollege.co.za/?add-to-cart=1058&redirect-to=cart",
    category: "DIY Courses",
    requiresStudentDiscountApplication: true
  },
];
