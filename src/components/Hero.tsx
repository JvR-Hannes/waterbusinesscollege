export default function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0591F9 0%, #FEFEFE 100%)",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 py-10 flex flex-col md:flex-row items-center min-h-[60vh]">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-10xl md:text-6xl font-extrabold text-white leading-tight font-[var(--font-raleway)]">
            <span className="text-white">WATER BUSINESS COLLEGE</span>
          </h1>
          <p className="text-base text-gray-100 font-small">
            <strong>Water Business College (WBC) is an accredited
            Skills Development Provider<br /> (QCTO Accreditation Number: QCTOSDP01200724-2088).</strong>
          </p>
          <p className="text-base text-gray-100 font-small">
            <strong>WBC aims to contribute to the development of skills
            and capacity in the water<br /> sector through occupational
            qualifications and skills training programmes.</strong>
          </p>
          <p className="text-base text-gray-100 font-small">
            <strong>Developing Centre of Excellence contributing to the improvement of water<br /> management.<br />
            We are creating a Personalised,
            Flexible and an Affordable Learning Environment<br /> for the learner.</strong>
          </p>
          <p className="text-base text-gray-100 font-small">
            <strong>Our training programmes are Employer Friendly. <br />
            WBC is applying for CPD accreditation for relevant courses.</strong>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/application-procedures"
              className="bg-[#2E528E] text-white px-4 py-2 rounded-md shadow"
            >
              Application Procedures
            </a>
            <a
              href="/qualification-application"
              className="bg-[#2E528E] text-white px-4 py-2 rounded-md shadow"
            >
              Apply Now
            </a>
            <a
              href="/faq"
              className="bg-[#2E528E] text-white px-4 py-2 rounded-md shadow"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Right Column - Image */}{/*Adjust image size bigger to the right */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/images/hero-banner.png"
            alt="Hero Banner"
            className="max-w-[1000px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}