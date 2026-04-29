import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

export default function QualificationStructure() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-8">
        {/* White box with shadow */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start text-center md:text-left">

            {/* Column 1: Title */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2e528e] text-center leading-tight mt-4">
                Qualification Structure
              </h1>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center md:items-start space-y-3 border-l md:pl-6">
              <span className="text-4xl font-bold text-[#2e528e]">2</span>
              <h3 className="text-lg font-semibold text-gray-800">
                Short Learning Programmes
              </h3>
              <Link
                href="/courses"
                className="flex items-center gap-2 text-[#2e528e] hover:underline text-sm transition"
              >
                Sign Up Now <FaAngleRight />
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center md:items-start space-y-3 border-l md:pl-6">
              <span className="text-4xl font-bold text-[#2e528e]">2</span>
              <h3 className="text-lg font-semibold text-gray-800">
                Occupational Qualifications
              </h3>
              <Link
                href="/qualification-application"
                className="flex items-center gap-2 text-[#2e528e] hover:underline text-sm transition"
              >
                Start Today <FaAngleRight />
              </Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center md:items-start space-y-3 border-l md:pl-6">
              <span className="text-4xl font-bold text-[#2e528e]">2</span>
              <h3 className="text-lg font-semibold text-gray-800">
                Years Of Experience
              </h3>
              <Link
                href="#"
                className="flex items-center gap-2 text-[#2e528e] hover:underline text-sm transition"
              >
                More About Us <FaAngleRight />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
