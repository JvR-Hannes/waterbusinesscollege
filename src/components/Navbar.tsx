"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Login",
    href: "/dashboard",
  },
  {
    label: "Application Procedures",
    href: "/application-procedures",
    submenu: [
      { label: "Application Procedures", href: "/application-procedures" },
      { label: "FAQ", href: "/faq" },
      { label: "Application Procedures (Modules)", href: "/application-procedures-modules" },
      { label: "Application Procedures (Short Courses)", href: "/application-procedures-short-courses" },
      { label: "Application Procedures (DIY Courses)", href: "/application-procedures-diy-courses" },
      { label: "Occupational Qualification Application Form", href: "/qualification-application" },
      { label: "RPL Policy and Implementation Process", href: "/rpl-policy" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "My Account",
    href: "/my-account",
    submenu: [
      { label: "Checkout", href: "https://waterbusinesscollege.co.za/checkout/" },
      { label: "Cart", href: "https://waterbusinesscollege.co.za/cart/" },
    ],
  },
  {
    label: "Qualification Rules & Regulations",
    href: "/course-terms-conditions",
  },
  {
    label: "WBC Programs Overview",
    href: "#",
    submenu: [
      { label: "QCTO Accreditation Letter", href: "/qcto-accreditation-letter" },
      { label: "WBC Overview", href: "/overview-of-the-water-reticulation-qualification-nqf-04-2" },
      { label: "Water Reticulation Practitioner Qualification (NQF Level 4)", href: "/overview-of-the-water-reticulation-qualification-nqf-04" },
      { label: "Occupational Certificate: Water Reticulation Practitioner", href: "/qcto-accreditation-letter-duplicate-1438" },
      { label: "Occupational Certificate: Water Infrastructure Manager", href: "/water-infrastructure-manager-nqf-08" },
    ],
  },
  {
    label: "Contact us",
    href: "/contact-us",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !(navRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="bg-white shadow-md text-xl font-medium text-[#2E528E] px-12 py-6">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-6">
          <Image 
            src="/images/wbc-main.png" // Replace with your logo path
            alt="Logo"
            width={150} // Adjust logo size
            height={150} // Adjust logo size
          />
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="relative"
              onClick={() => setOpenMenu(openMenu === index ? null : index)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 hover:text-blue-600 ${pathname === item.href ? "text-blue-600 font-semibold" : ""}`}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    setOpenMenu(openMenu === index ? null : index);
                  } else {
                    setMobileOpen(false);
                    setOpenMenu(null);
                  }
                }}
              >
                {item.label}
                {item.submenu && <ChevronDown className="w-4 h-4" />}
              </Link>

              {item.submenu && openMenu === index && (
                <ul className="absolute left-0 top-full mt-2 bg-white border rounded-lg shadow-md w-64 z-1000">
                  {item.submenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <ul className="md:hidden mt-4 space-y-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              <div
                className="flex justify-between items-center"
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                <Link href={item.href} className="block py-2 text-gray-700">
                  {item.label}
                </Link>
                {item.submenu && <ChevronDown className="w-4 h-4" />}
              </div>
              {item.submenu && openMenu === index && (
                <ul className="pl-4 mt-2 space-y-2">
                  {item.submenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={sub.href}
                        className="block py-1 text-gray-600"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
