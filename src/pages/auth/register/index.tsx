import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { RegisterInput, registerSchema } from "@/schemas/auth";
import Link from "next/link";
import { Spinner, useToast } from "@chakra-ui/react";

export default function RegisterPage() {
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInput) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registration failed");
      }

      toast({
        title: "Success",
        description: "Registration successful! Please login.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.push("/auth/login");
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Registration failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex w-1/2 bg-black text-white justify-center items-center p-10">
        <img
          src="https://placehold.co/400x400"
          alt="Astronaut with a colorful galaxy reflection in the helmet"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-md">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Join TRK{"'"}24!
          </h1>
          <p className="text-sm lg:text-lg mb-8">
            Create your account to access TRK Website
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div>
              <input
                type="text"
                {...register("name")}
                placeholder="Full Name"
                className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${
                  errors.name && "focus:outline-red-500 border-red-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* NIM Input */}
            <div>
              <input
                type="text"
                {...register("nim")}
                placeholder="NIM"
                className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${
                  errors.nim && "focus:outline-red-500 border-red-500"
                }`}
              />
              {errors.nim && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nim.message}
                </p>
              )}
            </div>

            {/* Class Selection */}
            <div>
              <select
                {...register("typeClass")}
                className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${
                  errors.typeClass && "focus:outline-red-500 border-red-500"
                }`}
              >
                <option value="">Select your class</option>
                <option value="TI-1A">TI-1A</option>
                <option value="TI-1B">TI-1B</option>
                <option value="TI-1C">TI-1C</option>
              </select>
              {errors.typeClass && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.typeClass.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${
                  errors.password && "focus:outline-red-500 border-red-500"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full font-bold tracking-wide bg-black hover:bg-zinc-800 text-white rounded-lg py-2 px-4 flex justify-center items-center gap-4 transition-all duration-200 ease-in"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner size={"md"} /> : "Register"}
            </button>

            <div className="flex justify-center items-center mt-2 gap-1">
              <p className="text-sm text-gray-500">Already have an account?</p>
              <Link
                href="/auth/login"
                className="text-blue-500 hover:underline font-semibold"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
