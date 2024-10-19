import { motion } from "framer-motion";
import { Eye, Pencil } from "@phosphor-icons/react";
import { AssignmentAdmin } from "@/type";

interface AssignmentCardProps {
  assignment: AssignmentAdmin;
  onView: (assignment: AssignmentAdmin) => void;
  onUpdate: (assignment: AssignmentAdmin) => void;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  assignment,
  onView,
  onUpdate,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="border border-zinc-700 rounded-2xl shadow-md p-6"
  >
    <h2 className="text-lg font-bold mb-4">{assignment.course}</h2>
    <p className="text-sm mb-4">{assignment.description}</p>
    <div className="flex justify-between items-center mb-4">
      <p className="text-sm">Deadline: {assignment.deadline}</p>
      <p className="text-sm">{assignment.studentsDone} students done</p>
    </div>
    <div className="flex justify-between items-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center transition-colors"
        onClick={() => onView(assignment)}
      >
        <Eye className="mr-2" /> View
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center transition-colors"
        onClick={() => onUpdate(assignment)}
      >
        <Pencil className="mr-2" /> Update
      </button>
    </div>
  </motion.section>
);

export default AssignmentCard;
