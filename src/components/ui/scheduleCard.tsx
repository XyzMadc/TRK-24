import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { PencilSimple } from "@phosphor-icons/react";
import { ScheduleItem } from "@/type";

interface ScheduleCardProps {
  item: ScheduleItem;
  onUpdate: (item: ScheduleItem) => void;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ item, onUpdate }) => {
  const currentDay = useMemo(() => {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
    ];
    return days[new Date().getDay()];
  }, []);

  const isCurrentDay = currentDay === item.day;
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl shadow-md p-4 flex flex-col justify-between gap-6 ${
        isCurrentDay ? "border-2 border-green-500" : "border border-zinc-700"
      }`}
    >
      <div className="space-y-2">
        <h2 className="text-lg font-bold">{item.day}</h2>
        {item.time.map((timeSlot, index) => (
          <div key={index} className="text-sm text-zinc-500">
            <div className="flex justify-between items-center">
              <p>
                {timeSlot.startTime} - {timeSlot.endTime}
              </p>
              <p>
                {Array.isArray(item.room) ? item.room[index].name : item.room}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>
                {Array.isArray(item.subject)
                  ? item.subject[index].name
                  : item.subject}
              </p>
              <p>
                {Array.isArray(item.lecturer)
                  ? item.lecturer[index].name
                  : item.lecturer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 self-end flex items-center justify-center font-semibold rounded-lg py-1 px-2"
        onClick={() => onUpdate(item)}
      >
        <PencilSimple weight="bold" className="mr-1" /> Update
      </button>
    </motion.section>
  );
};

export default ScheduleCard;
