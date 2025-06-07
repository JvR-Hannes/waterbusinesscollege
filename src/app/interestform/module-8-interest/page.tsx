'use client';

import { useState } from 'react';

export default function Module8InterestForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?\d{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Phone format is invalid';
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/sendInterest/module-8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-xl mx-auto bg-gray-50 shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#2e528e] mb-8">
          Submit Your Interest
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name & Surname</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="E.g. John Doe"
              className={`mt-1 block w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#2e528e] focus:border-[#2e528e]`}
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E.g. john@doe.com"
              className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#2e528e] focus:border-[#2e528e]`}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="E.g. +27 123 456 789"
              className={`mt-1 block w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#2e528e] focus:border-[#2e528e]`}
            />
            {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-[#2e528e] hover:bg-[#25427a] text-white font-semibold py-2 px-4 rounded-md transition"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>
            {status === 'success' && (
              <p className="mt-4 text-green-600 text-sm">Thank you! Your interest has been submitted.</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-600 text-sm">There was an error. Please try again later.</p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
