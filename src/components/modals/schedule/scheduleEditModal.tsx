import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { ScheduleItem } from "@/type";
import InputField from "../../ui/inputField";
import ArrayField from "../../ui/arrayField";

interface EditModalProps {
  item: ScheduleItem;
  onSave: (item: ScheduleItem) => void;
  onCancel: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ item, onSave, onCancel }) => {
  const [editingItem, setEditingItem] = useState<ScheduleItem>(item);

  const handleInputChange = (
    value: string,
    field: keyof ScheduleItem,
    index?: number
  ) => {
    setEditingItem((prev) => {
      if (Array.isArray(prev[field]) && typeof index === "number") {
        const newArray = [...prev[field]];
        if (field === "time") {
          newArray[index] = { startTime: value, endTime: "" };
        } else {
          newArray[index] = value;
        }
        return { ...prev, [field]: newArray };
      } else {
        return { ...prev, [field]: value };
      }
    });
  };

  const handleSave = () => {
    onSave(editingItem);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 size-full bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
    >
      <div className="bg-black rounded-lg shadow-lg p-4 w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Edit Schedule Item</h2>
          <button
            onClick={onCancel}
            className="text-zinc-400 hover:text-zinc-500"
          >
            <X size={24} />
          </button>
        </div>
        <form>
          <InputField
            label="Day"
            value={editingItem.day}
            onChange={(e) => handleInputChange(e.target.value, "day")}
          />
          {editingItem.time.map((timeSlot, index) => (
            <div key={index} className="flex gap-2">
              <InputField
                label="Waktu Mulai"
                value={timeSlot.startTime}
                onChange={(e) =>
                  handleInputChange(e.target.value, "time", index)
                }
              />
              <InputField
                label="Waktu Akhir"
                value={timeSlot.endTime}
                onChange={(e) =>
                  handleInputChange(e.target.value, "time", index)
                }
              />
            </div>
          ))}
          <ArrayField
            label="Ruangan"
            values={editingItem.room}
            onChange={(value, index) => handleInputChange(value, "room", index)}
          />
          <ArrayField
            label="Mata Kuliah"
            values={editingItem.subject}
            onChange={(value, index) =>
              handleInputChange(value, "subject", index)
            }
          />
          <ArrayField
            label="Dosen"
            values={editingItem.lecturer}
            onChange={(value, index) =>
              handleInputChange(value, "lecturer", index)
            }
          />
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Save
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default EditModal;
