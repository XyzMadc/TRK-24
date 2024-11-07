import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
        <p className="text-red-500 mb-4">An error occurred: {error}</p>
        <button
          onClick={() => router.push("/auth/login")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
