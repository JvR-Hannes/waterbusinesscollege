'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "To enroll, simply select your desired course, click 'Enroll Now' and follow the checkout process.",
  },
  {
    question: "Are the courses accredited?",
    answer: "Yes, all our courses are accredited and recognized by the relevant authorities.",
  },
  {
    question: "Can I study at my own pace?",
    answer: "Absolutely! All courses are designed to be flexible and allow self-paced learning.",
  },
  {
    question: "What support is available during the course?",
    answer: "You'll have access to tutor support, course materials, and a student support team.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-10">
        Find answers to the most common questions below.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}