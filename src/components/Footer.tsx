import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#68A4D7] text-white pt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr_2fr] gap-8 text-xl pb-6">
        {/* Logo + About + Socials */}
        <div>
          <div className="mb-4">
            <Image
              src="/images/wbc-white.png"
              alt="WBC Logo"
              width={150}
              height={100}
              className="mb-4"
            />
          </div>
          <p className="text-white/90 text-base text-xl">
            Water Business College (WBC) is an accredited Skills Development Provider (SDP) implementing occupational qualifications in the water and related engineering sectors.
          </p>
        </div>

        {/* Contact Info */}
        <div className="px-25">
          <h3 className="font-semibold text-xl mb-8">Contact Us</h3>
          <p className="mb-2 flex flex-wrap gap-1">
            <span className="font-small">Email:</span>
            <a
              href="mailto:contactus@waterbusinesscollege.co.za"
              className="text-white hover:text-blue-100 break-all"
            >
              contactus@waterbusinesscollege.co.za
            </a>
          </p>
          <p className="mb-2">Phone: +27 (0)81 727 9793</p>
          <p className="mt-2">Offices H4,<br />
            The Willows Office Park,<br />
            559 Farm Road,<br />
            Die Wilgers, Pretoria</p>
        </div>
        <div className="flex mt-20">
          <a
            href="https://twitter.com/water_college"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[49px] h-[49px] rounded-full bg-[rgba(232,232,232,0.05)] text-white/60 flex items-center justify-center mx-[20px] transition-all duration-150 ease-out hover:text-white"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/waterbusinesscollege/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[49px] h-[49px] rounded-full bg-[rgba(232,232,232,0.05)] text-white/60 flex items-center justify-center mx-[20px] transition-all duration-150 ease-out hover:text-white"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/waterbusinesscollege/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[49px] h-[49px] rounded-full bg-[rgba(232,232,232,0.05)] text-white/60 flex items-center justify-center mx-[20px] transition-all duration-150 ease-out hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/p/Water-Business-College-100034951943342/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[49px] h-[49px] rounded-full bg-[rgba(232,232,232,0.05)] text-white/60 flex items-center justify-center mx-[20px] transition-all duration-150 ease-out hover:text-white"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFzEmTqautTL9QeQcZN-PaA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[49px] h-[49px] rounded-full bg-[rgba(232,232,232,0.05)] text-white/60 flex items-center justify-center mx-[20px] transition-all duration-150 ease-out hover:text-white"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>

      {/* Footer bottom strip */}
      <div className="bg-gray-800 border-t border-gray-700 mt-6">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <span>© 2025 Water Business College. All rights reserved.</span>
          <span className="mt-2 md:mt-0">
            Made with love by <strong>360Inc.</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}