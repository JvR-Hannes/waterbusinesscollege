import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-white text-white overflow-hidden">
      {/* Navbar on top of everything */}
      {/*<div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>*/}

      {/* Hero Content */}
      <div className="relative z-10 px-6 container mx-auto flex flex-col md:flex-row items-center min-h-[80vh]">
        {/* Text */}
        <div className="w-full md:w-1/2 text-left space-y-6 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              WATER BUSINESS COLLEGE
          </h1>
          <p className="text-lg text-gray-200">
          Water Business College (WBC) is an accredited Skills Development Provider (QCTO Accreditation Number: QCTOSDP01200724-2088).<br/>
          WBC aims to contribute to the development of skills and capacity in the water sector<br/> through occupational qualifications and skills training programmes.<br/>
          Developing Centre of Excellence contributing to the improvement of water management.<br/>
          We are creating a Personalised, Flexible and an Affordable Learning Environment for the<br/> learner. Our training programmes are Employer Friendly.<br/>
          WBC is applying for CPD accreditation for relevant courses.
          </p>
          <a
            href="#courses"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Explore Courses
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 relative h-80 md:h-[500px] md:pl-12">
          <Image
            src="/images/hero-banner.png"
            alt="Hero Banner"
            fill
            className="object-contain md:object-cover rounded-none border-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}