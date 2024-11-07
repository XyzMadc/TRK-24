import Link from "next/link";

export default function index() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-full">
      <h1 className="text-6xl">404 Not Found!</h1>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Back to home
      </Link>
    </div>
  );
}
