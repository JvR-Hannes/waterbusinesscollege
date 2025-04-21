import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo and Paragraph */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-[250px] h-[120px]">
            <Image
              src="/images/wbc-white.png" // ✅ No "@/public" needed
              alt="Logo"
              width={500}
              height={500}
              layout="intrinsic" // Auto-resizing image
            />
          </div>
          <div className="text-base">
            <h3 className="font-semibold text-xl mb-2">Water Business College</h3>
            <p>
                Water Business College (WBC) is an accredited Skills Development Provider (SDP)
                implementing occupational qualifications in the water and related engineering sectors.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-2">Contact</h3>
          <p>Email: info@waterbusinesscollege.co.za</p>
          <p>Phone: +27 (0)81 727 9793</p>
        </div>

        {/* Address / Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
          <p>Offices H4,<br/>
              The Willows Office Park,<br/>
              559 Farm Road,<br/>
              Die Wilgers
          </p>
          <p>Pretoria, South Africa</p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Subscribe</h3>
          <p className="mb-2 text-gray-400">Get updates & course announcements:</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded text-black text-sm focus:outline-none bg-blue-100"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-sm py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}