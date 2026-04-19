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
        <div className="w-full md:w-1/2 min-w-0 space-y-4 break-words">
          <h1 className="text-10xl md:text-6xl font-extrabold text-white leading-tight font-[var(--font-raleway)]">
            <span className="text-white">WATER BUSINESS COLLEGE</span>
          </h1>
          <div className="max-w-prose space-y-4">
            <p className="text-base text-gray-100 font-small">
              <strong>
                Water Business College (WBC) delivers industry-aligned skills
                programmes / courses for the water sector.
              </strong>
            </p>
            <p className="text-base text-gray-100 font-small">
              <strong>
                We are developing a Personalised, Flexible and an Affordable
                Learning Environment for the learner.
              </strong>
            </p>
            <p className="text-base text-gray-100 font-small">
              <strong>
                Our bespoke Learner Management System (LMS) offers learners a
                personalised, accessible and flexible 24/7 learning environment.
              </strong>
            </p>
            <p className="text-base text-gray-100 font-small">
              <strong>
                Our Modular Pay-As-You-Learn (MPAYL) model makes training
                affordable.
              </strong>
            </p>
            <p className="text-base text-gray-100 font-small">
              <strong>
                Our employer-friendly courses are designed to integrate with
                workplace responsibilities and industry requirements.
              </strong>
            </p>
            <p className="text-base text-gray-100 font-small">
              <strong>
                Our programmes support technical staff, younger professionals,
                senior and post-graduate students and new entrants to the water
                sector.
              </strong>
            </p>
            <p className="text-base text-gray-100 font-small">
              <strong>Short courses are CPD-accredited.</strong>
            </p>
          </div>

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
