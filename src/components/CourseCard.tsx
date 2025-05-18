import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: ReactNode;
  imageUrl: string;
  onClick?: () => void;
};

const CourseCard = ({ title, description, imageUrl, onClick }: Props) => {
  return (
    <div
      className="relative w-full max-w-xl h-[400px] mx-auto overflow-hidden rounded-[20px] bg-white shadow-lg group transition-all duration-700 ease-in-out animate-floating"
      onClick={onClick}
    >
      {/* Animated Background Circle */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-2xl z-0 group-hover:opacity-50 transition-opacity duration-500"></div>

      {/* Course Image */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full z-10">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={400}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center h-full text-left p-8 space-y-4 max-w-[60%]">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="text-sm text-gray-600 line-clamp-5">{description}</div>
        <a
          href="#"
          className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition"
        >
          View Course
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
