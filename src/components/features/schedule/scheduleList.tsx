import React from "react";
import { ScheduleItem } from "@/types/type";
import ScheduleCard from "../../ui/scheduleCard";
import EditModal from "../../modals/schedule/scheduleEditModal";

interface ScheduleListProps {
  items: ScheduleItem[];
  onUpdate: (item: ScheduleItem) => void;
}

const ScheduleList: React.FC<ScheduleListProps> = ({ items, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<ScheduleItem | null>(
    null
  );

  const handleUpdate = (item: ScheduleItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSave = (item: ScheduleItem) => {
    onUpdate(item);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <ScheduleCard key={index} item={item} onUpdate={handleUpdate} />
      ))}
      {isModalOpen && selectedItem && (
        <EditModal
          item={selectedItem}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </section>
  );
};

export default ScheduleList;
