import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { RegisterInput, registerSchema } from "@/schemas/auth";
import { Spinner, useToast } from "@chakra-ui/react";
import { UserPlus } from "@phosphor-icons/react";

const classOptions = [
  { value: "TI-1A", label: "TI-1A" },
  { value: "TI-1B", label: "TI-1B" },
  { value: "TI-1C", label: "TI-1C" },
];

export default function SignUpPage() {
  const router = useRouter();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
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

      if (!response.ok) throw new Error("Failed to register");

      const { userId } = await response.json();

      if (userId) {
        toast({
          title: "Success",
          description: "Registration successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Register error:", error);
      toast({
        title: "Error",
        description: "Registration failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-4/5 max-w-xl bg-zinc-900 p-8 rounded-lg border border-zinc-700 m-auto text-zinc-300 h-fit"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="text-black font-semibold w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <div>{errors.name.message}</div>}
      </div>

      {/* NIM Field */}
      <div className="mb-4">
        <label htmlFor="nim" className="block mb-1">
          NIM
        </label>
        <input
          type="text"
          id="nim"
          className="text-black font-semibold w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("nim", { required: "NIM is required" })}
        />
        {errors.nim && <div>{errors.nim.message}</div>}
      </div>

      {/* Type Class Field */}
      <div className="mb-6">
        <label htmlFor="typeClass" className="block mb-1 font-medium">
          Kelas
        </label>
        <div className="relative">
          <select
            id="typeClass"
            {...register("typeClass")}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-10"
          >
            <option value="" disabled selected>
              Select your class
            </option>
            {classOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-zinc-800"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-zinc-400"
              viewBox="0 0 20 20"
            >
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {errors.typeClass && (
          <div className="text-red-500 text-sm mt-1">
            {errors.typeClass.message}
          </div>
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
          className="text-black font-semibold w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>

      <button
        type="submit"
        className="w-full font-bold bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors flex gap-4 items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? <Spinner size={"md"} /> : "Sign Up"}
      </button>
    </form>
  );
}
