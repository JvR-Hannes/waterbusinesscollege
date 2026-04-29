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
    <div
      className={`relative z-0 overflow-visible transition-[width,z-index] duration-500 ease-in-out group mx-auto my-6 p-3 sm:p-4 md:p-5 hover:z-30 ${customStyles ? customStyles : variant === "large"
        ? "w-[410px] md:w-[720px] h-[430px] md:h-[440px]"
        : "w-[350px] hover:w-[720px] h-[420px] md:h-[430px]"
      }`}
    >
      {/* Card Background & Content */}
      <div className="absolute inset-0 z-20 flex min-h-0 flex-col overflow-hidden rounded-2xl text-base transition-all duration-500 text-white-900 group-hover:bg-[#3e64de] group-hover:text-white">
        <div className="flex h-full min-h-0 flex-col opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex h-full min-h-0 flex-col px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex h-full min-h-0 w-full max-w-[30rem] flex-col text-left">
              <h3 className="mb-3 shrink-0 text-2xl leading-snug text-white-900">
                <span className="text-white">{title}</span>
              </h3>
              <div
                className={`mb-3 overflow-hidden text-base leading-relaxed text-white-700 group-hover:text-white/95 [&_li]:mb-1 [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:mt-1 [&_ul]:space-y-1 [&_p]:text-base [&_li]:text-base [&_ul]:text-base ${
                  variant === "large"
                    ? "line-clamp-[12] md:line-clamp-[15]"
                    : "line-clamp-[9] md:line-clamp-[11]"
                }`}
              >
                {description}
              </div>
              <div className="shrink-0 pt-1">
                {temporarilyUnavailable ? (
                  <span
                    className="inline-block rounded border border-red-600 bg-white px-5 py-2.5 text-base font-semibold text-red-600 shadow-sm"
                    role="status"
                  >
                    Temporarily Unavailable
                  </span>
                ) : (
                  href && (
                    <Link
                      href={href}
                      className="inline-block rounded px-5 py-2.5 text-base font-medium text-white bg-blue-600 transition hover:bg-blue-700"
                    >
                      {buttonText || "View The Courses"}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
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
