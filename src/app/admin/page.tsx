export default function AdminHomePage() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-[#2e528e]">
          Overview
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          This dashboard will gradually replace WordPress/TutorLMS for managing
          courses, users, enrollments, and media. Existing TutorLMS courses
          remain unchanged while you move new and migrated courses here.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Courses</h3>
          <p className="mt-1 text-sm text-gray-600">
            Create and manage courses, modules, and lessons in the new system.
          </p>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Users & Enrollments</h3>
          <p className="mt-1 text-sm text-gray-600">
            View learners and control which courses they can access, including
            enrollments imported or recorded from WooCommerce.
          </p>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Media Library</h3>
          <p className="mt-1 text-sm text-gray-600">
            Centralise course files and media away from cPanel to reduce
            storage usage.
          </p>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Transition from TutorLMS</h3>
          <p className="mt-1 text-sm text-gray-600">
            Over time you&apos;ll migrate existing courses and enrollments here
            while keeping the old portal online as a backup.
          </p>
        </div>
      </div>
    </section>
  );
}

