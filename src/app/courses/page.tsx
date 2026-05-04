import { fullCourses } from "@/fullCourseData";

export default function CoursesPage() {
  const groupedCourses = fullCourses.reduce(
    (acc: Record<string, typeof fullCourses>, course) => {
      if (!acc[course.category]) acc[course.category] = [];
      acc[course.category].push(course);
      return acc;
    },
    {}
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-10 text-center text-blue-700">All Courses</h1>

        {Object.entries(groupedCourses).map(([category, group]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-2">{category}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.map((course, idx) => (
                <div
                  key={`${category}-${idx}`}
                  className="flex flex-col h-[420px] w-full max-w-[300px] border border-gray-300 rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-contain bg-gray-50 p-2"
                  />

                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1.5 leading-snug">
                      {course.title}
                    </h3>

                    <div className="flex-grow flex flex-col justify-end">
                      {course.price && (
                        <div className="flex justify-between text-xs text-gray-800 mb-3">
                          <span className="text-gray-500">Price:</span>
                          <span className="font-bold">{course.price}</span>
                        </div>
                      )}

                      {course.requiresStudentDiscountApplication ? (
                        <a
                          href="/student-discount-application"
                          className="inline-block text-center px-8 py-2 bg-white border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-700 hover:text-white transition"
                        >
                          APPLY
                        </a>
                      ) : course.requiresQualificationApplication ? (
                        category === "Qualifications" ? (
                          <span
                            className="inline-block w-full text-center px-8 py-2 bg-white border border-red-600 text-red-600 text-sm font-semibold rounded shadow-sm"
                            role="status"
                          >
                            Temporarily Unavailable
                          </span>
                        ) : (
                          <a
                            href="/qualification-application"
                            className="inline-block text-center px-8 py-2 bg-white border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-700 hover:text-white transition"
                          >
                            APPLY
                          </a>
                        )
                      ) : (
                        <a
                          href={course.link}
                          className="inline-block text-center px-8 py-2 bg-white border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-700 hover:text-white transition"
                        >
                          PURCHASE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
