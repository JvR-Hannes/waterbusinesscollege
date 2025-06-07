'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const underlinePath = "M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7";

export default function StudentDiscountApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    contactNumber: "",
    email: "",
    file: null as File | null,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) payload.append(key, value as any);
    });

    try {
      const res = await fetch("/api/sendApplication", {
        method: "POST",
        body: payload,
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("Application submitted successfully!");
        setFormData({
          fullName: "",
          idNumber: "",
          contactNumber: "",
          email: "",
          file: null,
        });
      } else {
        setStatus(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Student Discount Application</h1>
      <p className="text-xl mb-10 text-center text-blue-500">
        Apply for your student discount by submitting this form with supporting documentation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        {["fullName", "idNumber", "contactNumber", "email"].map((field) => (
          <div key={field}>
            <label className="block mb-2 font-semibold" htmlFor={field}>
              {field === "fullName" ? "Full Name" :
                field === "idNumber" ? "ID Number" :
                  field === "contactNumber" ? "Contact Number" :
                    "Email Address"}
            </label>
            <input
              id={field}
              name={field}
              type={
                field === "email" ? "email" :
                  field.includes("Number") ? "tel" : "text"
              }
              required
              value={formData[field as keyof typeof formData] as string}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        ))}

        <div>
          <label className="block mb-2 font-semibold" htmlFor="file">
            Upload Student Registration Form (PDF/JPG/PNG)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>

        {status && (
          <p
            className={`text-center mt-4 font-semibold ${status.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
              }`}
          >
            {status}
          </p>
        )}
      </form>

      {/* Info Section */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-bold flex justify-center items-center gap-2 relative inline-block">
          <span className="relative inline-block text-blue-600">
            <span className="relative z-10">Target Group </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="absolute left-0 bottom-0 w-full h-6 z-0"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 8,
              }}
            >
              <motion.path
                d={underlinePath}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </span>
          <span className="text-gray-700">Water Practitioners</span>
        </h3>

        <p className="mt-6 text-lg font-semibold">
          Water Business College (WBC) will provide opportunities for:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-base font-semibold mt-2 text-left max-w-xl mx-auto">
          <li>
            Water practitioners in the private sector as well as staff of both water services and water resource management institutions.
          </li>
          <li>
            Technical staff that may either be recently employed and/or has many years’ experience but no formal academic qualifications.
          </li>
          <li>
            Qualified water practitioners that intend to improve their education and/or change discipline.
          </li>
        </ul>
      </section>

      {/* Visual Promo Section */}
      <section className="mt-16 max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/images/formimg1.png"
              alt="Water Reticulation Training"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl font-bold mb-4 text-blue-600">Real-World Training Environment</h4>
            <p className="text-gray-700 text-lg">
              The Water Business College offers hands-on experience using our custom-built prototype
              reticulation system. Learners are immersed in practical learning environments designed
              to simulate municipal and industrial water systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}