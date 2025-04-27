'use client';

import { useState } from "react";

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
    </main>
  );
}
