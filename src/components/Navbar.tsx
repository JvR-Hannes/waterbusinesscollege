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
    href: "#",
    submenu: [
      { label: "Student Login", href: "/dashboard" },
      { label: "Admin Login", href: "/admin/login" },
    ],
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
      { label: "Cart", href: "https://waterbusinesscollege.co.za/cart-2/" },
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
      { label: "ECSA CPD Accreditation", href: "/ecsa-cpd-accreditation" },
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
    <nav
      ref={navRef}
      className="bg-white text-[#2E528E] shadow-md w-full"
    >
      <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
          {/* Logo: height capped via className so the bar stays compact */}
          <Link href="/" className="relative flex shrink-0 items-center">
            <Image
              src="/images/wbc-main.png"
              alt="Water Business College"
              width={240}
              height={72}
              className="h-10 w-auto sm:h-11 md:h-12"
              priority
            />
          </Link>

          {/* Hamburger for mobile */}
          <button
            type="button"
            className="-mr-1 inline-flex rounded-md p-2 text-[#2E528E] md:hidden hover:bg-gray-100"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden min-w-0 flex-1 md:flex md:flex-wrap md:items-center md:justify-end md:gap-x-3 md:gap-y-2 lg:gap-x-4 text-sm font-medium lg:text-base">
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
                <ul className="absolute left-0 top-full z-50 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-lg border bg-white text-sm shadow-md">
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

        {/* Mobile menu */}
        {mobileOpen ? (
          <ul className="border-t border-gray-100 pb-4 pt-3 text-base font-medium md:hidden">
            {navLinks.map((item, index) => (
              <li key={index}>
                <div
                  className="flex items-center justify-between"
                  onClick={() => setOpenMenu(openMenu === index ? null : index)}
                >
                  <Link href={item.href} className="block py-2 text-gray-700">
                    {item.label}
                  </Link>
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </div>
                {item.submenu && openMenu === index && (
                  <ul className="mt-2 space-y-2 pl-4">
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
        ) : null}
      </div>
    </nav>
  );
}
