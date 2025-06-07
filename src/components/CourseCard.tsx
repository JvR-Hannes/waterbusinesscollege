import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: ReactNode;
  imageUrl: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "large";
  buttonText?: string;
  customStyles?: string;
};

const CourseCard = ({ title, description, imageUrl, href, variant = "default", buttonText, customStyles }: Props) => {
  return (
    <div className={`relative group mx-auto p-8 space-y-4 transition-all duration-500 ease-in-out overflow-visible ${customStyles ? customStyles : variant === "large"
        ? "w-[360px] md:w-[720px] h-[360px]"
        : "w-[300px] hover:w-[720px] h-[350px]"
      }`}>
      {/* Card Background & Content */}
      <div className="absolute rounded-2xl inset-0 z-20 flex flex-col justify-center px-8 py-8 transition-all duration-500 text-white-900 group-hover:bg-[#3e64de] group-hover:text-white">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 pr-55 text-left">
          <h3 className="text-2xl text-white-900 mb-6 mt-3">
            <span className="text-white">{title}</span>
          </h3>
          <div className="text-md text-white-700 line-clamp-7 mb-3 mt-3">
            {description}
          </div>

          {/* ✅ Only this button navigates */}
          {href && (
            <Link
              href={href}
              className="inline-block mt-2 mb-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition"
            >
              {buttonText || "View The Courses"}
            </Link>
          )}
        </div>
      </div>

      {/* Floating Image */}
      <div className={`absolute top-0 left-0 h-full z-20 transition-transform duration-500 ease-in-out group-hover:scale-105 ${variant === "large" ? "w-[360px] md:group-hover:translate-x-[480px]" : "w-[300px] group-hover:translate-x-[460px]"
        }`}>
        <Image
          src={imageUrl}
          alt={title}
          width={variant === "large" ? 360 : 300}
          height={variant === "large" ? 360 : 300}
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default CourseCard;
