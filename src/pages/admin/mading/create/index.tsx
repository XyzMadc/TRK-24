import { ArrowLeft, Image, FileText } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function CreateMadingPage() {
  const [imageName, setImageName] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageName(file.name);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <section className="h-screen p-6 w-4/5 overflow-y-scroll">
      <Link
        href="/admin"
        className="flex items-center text-white font-semibold hover:text-zinc-300 mb-6 w-fit"
      >
        <ArrowLeft className="mr-2" /> Back to Dashboard
      </Link>

      <div className="rounded-lg shadow-lg overflow-hidden border border-zinc-700 px-6 pt-4 pb-6">
        <h1 className="text-3xl font-bold text-white">Create New Mading</h1>

        <form className="space-y-6 mt-4">
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              id="description"
              className="w-full px-3 py-2 bg-black text-gray-200 border border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter mading title..."
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full px-3 py-2 bg-black text-gray-200 border border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter mading description..."
            />
          </div>

          <div>
            <label
              htmlFor="time-limit"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Time Limit
            </label>
            <select
              id="time-limit"
              className="w-full cursor-pointer px-3 py-2 bg-black text-gray-200 border border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500"
              defaultValue="1 day"
            >
              <option value="1 day">1 Day</option>
              <option value="1 week">1 Week</option>
              <option value="1 month">1 Month</option>
              <option value="1 year">1 Year</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Image
              </label>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
                <div className="text-center">
                  <Image
                    alt="image icon"
                    className="mx-auto h-12 w-12 text-gray-400"
                  />
                  <p className="mt-1 text-sm text-gray-600">
                    {imageName ? imageName : "Click to upload or drag and drop"}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload File
              </label>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  id="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                <div className="text-center">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-1 text-sm text-gray-600">
                    {fileName ? fileName : "Click to upload or drag and drop"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 text-lg font-bold text-white bg-none border border-zinc-700 rounded-lg hover:border-white hover:bg-white hover:text-zinc-900 transition-colors"
          >
            Create Mading
          </button>
        </form>
      </div>
    </section>
  );
}
