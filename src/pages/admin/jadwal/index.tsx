import { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import { ScheduleItem } from "@/types/type";
import ScheduleList from "@/components/features/schedule/scheduleList";
import { initialSchedule } from "@/data/initialScedule";

const ScheduleAdminPage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState("TI-1A");
  const [items, setItems] = useState<ScheduleItem[]>(
    initialSchedule[selectedClass]
  );

  const handleUpdate = (item: ScheduleItem) => {
    setItems(items.map((i) => (i.id === item.id ? item : i)));
  };

  const handleClassChange = (newClass: string) => {
    setSelectedClass(newClass);
    setItems(initialSchedule[newClass]);
  };

  return (
    <div className="p-6 text-white w-4/5 h-screen overflow-y-scroll">
      <Breadcrumbs />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-zinc-700 rounded-2xl shadow-xl overflow-hidden p-2 text-white"
      >
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold">Jadwal</h1>
          </div>
          <div className="flex gap-4">
            <h2 className="text-xl font-bold">Pilih kelas:</h2>
            <select
              value={selectedClass}
              onChange={(e) => handleClassChange(e.target.value)}
              className="text-black border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="TI-1A">TI-1A</option>
              <option value="TI-1B">TI-1B</option>
              <option value="TI-1C">TI-1C</option>
            </select>
          </div>
        </div>

        <ScheduleList items={items} onUpdate={handleUpdate} />
      </motion.div>
    </div>
  );
};

export default ScheduleAdminPage;
