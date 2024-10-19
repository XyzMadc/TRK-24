import { Avatar } from "@chakra-ui/react";

export default function CardUser() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2 w-60 lg:w-full">
      <button className="rounded-full">
        <Avatar size="xl" />
      </button>
      <h2 className="text-lg font-semibold text-gray-800">Akbar</h2>
      <p className="text-sm text-gray-600">NIM: 4.33.24.0.10</p>
    </div>
  );
}
