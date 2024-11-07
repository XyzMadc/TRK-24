import { MadingData } from "@/types/type";
import { Eye, Pencil, Trash, X } from "@phosphor-icons/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar } from "@chakra-ui/react";

export default function TableMading({
  madingData,
}: {
  madingData: MadingData[];
}) {
  const [selectedMading, setSelectedMading] = useState<MadingData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (mading: MadingData) => {
    setSelectedMading(mading);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="border border-zinc-700 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Mading List</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="table-component">Title</th>
            <th className="table-component text-center w-60">Author</th>
            <th className="table-component text-center w-20">View</th>
            <th className="table-component text-center w-20">Action</th>
          </tr>
        </thead>
        <tbody>
          {madingData.map((mading) => (
            <tr key={mading.id}>
              <td className="table-component">{mading.title}</td>
              <td className="table-component">{mading.author}</td>
              <td className="table-component text-center">
                <button
                  onClick={() => handleOpenModal(mading)}
                  className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold size-10 flex items-center justify-center rounded-full"
                >
                  <Eye size={24} />
                </button>
              </td>
              <td className="table-component flex justify-center gap-2">
                <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold size-10 rounded-full flex items-center justify-center">
                  <Pencil size={24} />
                </button>
                <button className="bg-red-700 hover:bg-red-600 text-white font-bold size-10 rounded-full flex items-center justify-center">
                  <Trash size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 size-full bg-gray-900 bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="bg-black rounded-lg shadow-lg p-4 w-3/4 max-h-[30rem] overflow-y-scroll"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Mading Detail</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {selectedMading && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" />
                    <h2 className="font-bold leading-tight flex items-center gap-1">
                      {selectedMading.author}
                    </h2>
                  </div>
                </div>

                <p className="mb-4">{selectedMading.description}</p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  <figure className="size-40 lg:size-48 border bg-zinc-700 rounded-lg overflow-hidden" />
                  <figure className="size-40 lg:size-48 border bg-zinc-700 rounded-lg overflow-hidden" />
                </div>
              </>
            )}
          </motion.div>
        </motion.section>
      )}
    </section>
  );
}
