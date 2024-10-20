import { useFormValidation } from "@/hooks/useFormValidation";
import { FormData } from "@/type";
import { signUp } from "@/utils/auth";
import { useState } from "react";

export default function SignUpPage() {
  const { register, handleSubmit, errors } = useFormValidation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await signUp(
        data.email,
        data.password,
        data.name,
        data.NIM,
        data.contact,
        data.class
      );
    } catch (error) {
      console.error("Sign up failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-4/5 max-w-xl bg-zinc-900 p-8 rounded-lg shadow-md h-screen overflow-y-scroll mx-auto text-zinc-300"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      {/* NIM Field */}
      <div className="mb-4">
        <label htmlFor="NIM" className="block mb-1">
          NIM
        </label>
        <input
          type="text"
          id="NIM"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("NIM", { required: "NIM is required" })}
        />
        {errors.NIM && (
          <span className="text-red-500 text-sm">{errors.NIM.message}</span>
        )}
      </div>

      {/* Contact Field */}
      <div className="mb-4">
        <label htmlFor="contact" className="block mb-1">
          Contact
        </label>
        <input
          type="text"
          id="contact"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("contact", { required: "Contact is required" })}
        />
        {errors.contact && (
          <span className="text-red-500 text-sm">{errors.contact.message}</span>
        )}
      </div>

      {/* Class Field */}
      <div className="mb-6">
        <label htmlFor="class" className="block mb-1">
          Class
        </label>
        <input
          type="text"
          id="class"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("class", { required: "Class is required" })}
        />
        {errors.class && (
          <span className="text-red-500 text-sm">{errors.class.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}
