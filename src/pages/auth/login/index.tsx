import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { LoginInput, loginSchema } from "@/schemas/auth";
import Link from "next/link";
import { Spinner, useToast } from "@chakra-ui/react";
import { SignIn } from "@phosphor-icons/react";

export default function LoginPage() {
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const result = await signIn("credentials", {
        nim: data.nim,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Success",
        description: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "Login failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="flex h-screen">
      <div className="lg:w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-md">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Hi Warga TRK{"'"}24!
          </h1>
          <p className="text-sm lg:text-lg mb-8">
            Welcome to TRK Website. Community Dashboard
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                {...register("nim", { required: true })}
                placeholder="Your NIM"
                className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${
                  errors.nim && "focus: outline-red-500 border-red-500"
                }`}
              />
              {errors.nim && (
                <h3 className="text-red-400 font-semibold">NIM is required</h3>
              )}
            </div>
            <div>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="********"
                className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${
                  errors.nim && "focus: outline-red-500 border-red-500"
                }`}
              />
              {errors.password && (
                <h3 className="text-red-400 font-semibold">
                  Password is required
                </h3>
              )}
            </div>
            <div className="flex justify-end mb-4">
              <Link
                href="/auth/register"
                className="text-blue-500 hover:underline font-semibold"
              >
                Forget Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full font-bold tracking-wide bg-black hover:bg-zinc-800 text-white rounded-lg py-2 px-4 flex justify-center items-center gap-4 transition-all duration-200 ease-in"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner size={"md"} /> : "Sign In"}
            </button>
            <div className="flex justify-center items-center mt-2 gap-1">
              <p className="text-sm text-gray-500">
                Don{"'"}t have an account?
              </p>
              <Link
                href="/auth/register"
                className="text-blue-500 hover:underline font-semibold"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 bg-black text-white justify-center items-center p-10">
        <img
          src="https://placehold.co/400x400"
          alt="Astronaut with a colorful galaxy reflection in the helmet"
        />
      </div>
    </div>
  );
}
