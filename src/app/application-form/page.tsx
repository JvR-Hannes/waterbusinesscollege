'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const underlinePath = "M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7";

export default function ApplicationFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    contactNumber: "",
    email: "",
    course: "",
    additionalInfo: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendApplication", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("Application submitted successfully!");
        setFormData({
          fullName: "",
          idNumber: "",
          contactNumber: "",
          email: "",
          course: "",
          additionalInfo: "",
        });
      } else {
        setStatus(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to submit application.");
    }
  };

  return (
    <main className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Application Form</h1>
      <p className="text-2xl mb-8 text-center text-blue-400">Please Submit Your Application To Get Started.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inputs here same as before but with value and onChange */}
        {["fullName", "idNumber", "contactNumber", "email", "course"].map((field) => (
          <div key={field}>
            <label className="block mb-2 font-semibold" htmlFor={field}>
              {field === "fullName" ? "Full Name" :
                field === "idNumber" ? "ID Number" :
                  field === "contactNumber" ? "Contact Number" :
                    field === "email" ? "Email Address" :
                      "Course Applying For"}
            </label>
            <input
              id={field}
              name={field}
              type={field === "email" ? "email" : "text"}
              required
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        ))}

        <div>
          <label className="block mb-2 font-semibold" htmlFor="additionalInfo">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700"
          >
            Submit Application
          </button>
        </div>

        {status && (
          <p className="text-center text-green-600 mt-4">{status}</p>
        )}
      </form>
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
      <section className="mt-16 max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/formimg1.png"
              alt="Water Reticulation Training"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Optional Text */}
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
