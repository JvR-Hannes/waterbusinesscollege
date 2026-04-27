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
  temporarilyUnavailable?: boolean;
};

const CourseCard = ({
  title,
  description,
  imageUrl,
  href,
  variant = "default",
  buttonText,
  customStyles,
  temporarilyUnavailable,
}: Props) => {
  return (
    <div className={`relative group mx-auto p-8 space-y-4 transition-all duration-500 ease-in-out overflow-visible ${customStyles ? customStyles : variant === "large"
        ? "w-[410px] md:w-[720px] h-[410px]"
        : "w-[350px] hover:w-[720px] h-[400px]"
      }`}>
      {/* Card Background & Content */}
      <div className="absolute rounded-2xl inset-0 z-20 flex flex-col justify-center px-6 py-6 transition-all duration-500 text-white-900 group-hover:bg-[#3e64de] group-hover:text-white">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-4 pl-4 pr-55 text-left">
          <h3 className="text-2xl text-white-900 mb-6 mt-3">
            <span className="text-white">{title}</span>
          </h3>
          <div className="text-md text-white-700 line-clamp-20 mb-3 mt-3">
            {description}
          </div>

          {temporarilyUnavailable ? (
            <span
              className="mt-2 mb-2 inline-block rounded border border-red-600 bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm"
              role="status"
            >
              Temporarily Unavailable
            </span>
          ) : (
            href && (
              <Link
                href={href}
                className="inline-block mt-2 mb-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition"
              >
                {buttonText || "View The Courses"}
              </Link>
            )
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
