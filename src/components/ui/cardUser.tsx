export default function CardUser() {
  return (
    <div className="border border-zinc-700 p-4 rounded-lg shadow-md flex flex-col items-center gap-2 lg:w-full">
      <button className="rounded-full">
        {/* <Avatar size="xl" /> */}

        <div className="flex items-center justify-center size-10 overflow-hidden bg-gray-100 rounded-full">
          <span className="font-medium text-zinc-700">AH</span>
        </div>
      </button>
      <h2 className="text-lg font-semibold text-gray-200">Akbar</h2>
      <p className="text-sm text-gray-200">NIM: 4.33.24.0.10</p>
    </div>
  );
}
