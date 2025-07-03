"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    userName: z.string().min(3, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

type FormData = z.infer<typeof formSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    // TODO: Handle API call to submit data to backend or WordPress endpoint
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Student Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              {...register("firstName")}
              autoComplete="given-name"
              placeholder="First Name"
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
            {errors.firstName && (
              <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              {...register("lastName")}
              autoComplete="family-name"
              placeholder="Last Name"
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
            {errors.lastName && (
              <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              {...register("userName")}
              autoComplete="username"
              placeholder="Username"
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
            {errors.userName && (
              <p className="text-sm text-red-500 mt-1">{errors.userName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              autoComplete="email"
              placeholder="Email"
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              autoComplete="new-password"
              placeholder="Password"
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              {...register("passwordConfirmation")}
              autoComplete="new-password"
              placeholder="Confirm Password"
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
            {errors.passwordConfirmation && (
              <p className="text-sm text-red-500 mt-1">
                {errors.passwordConfirmation.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}