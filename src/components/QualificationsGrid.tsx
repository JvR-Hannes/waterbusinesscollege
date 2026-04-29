import Image from "next/image";

export default function QualificationsGrid() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">

        {/* Card 1 */}
        <div className="relative flex flex-col items-center text-center group">
          {/* Floating icon */}
          <div className="z-10 relative -mb-14 flex items-center justify-center w-24 h-24 rounded-full bg-[#2e528e] shadow-md transition-all duration-300 group-hover:bg-[#1e3a6b] group-hover:shadow-xl">
            <Image
              src="/images/water-tower.png"
              alt="Water Tower Icon"
              width={64}
              height={64}
            />
          </div>

          {/* Text box */}
          <div className="relative bg-white rounded-xl pt-20 pb-6 px-6 w-full max-w-sm transition-all duration-300 group-hover:shadow-[0_-4px_10px_rgba(0,0,0,0.1),4px_0_10px_rgba(0,0,0,0.1),-4px_0_10px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-bold text-gray-800 transition-all duration-300">
              Water Reticulation Practitioner (NQF Level 04)
            </h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col items-center text-center group">
          <div className="z-10 relative -mb-14 flex items-center justify-center w-24 h-24 rounded-full bg-[#2e528e] shadow-md transition-all duration-300 group-hover:bg-[#1e3a6b] group-hover:shadow-xl">
            <Image
              src="/images/water-infra-icon.svg"
              alt="Water Infrastructure Icon"
              width={64}
              height={64}
            />
          </div>

          <div className="relative bg-white rounded-xl pt-20 pb-6 px-6 w-full max-w-sm transition-all duration-300 group-hover:shadow-[0_-4px_10px_rgba(0,0,0,0.1),4px_0_10px_rgba(0,0,0,0.1),-4px_0_10px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-bold text-gray-800 transition-all duration-300">
              Water Infrastructure Manager (NQF Level 08)
            </h2>
          </div>
        </div>

      </div>
    </section>
    
  );
}

