import { motion } from "framer-motion";
import { AssignmentAdmin } from "@/types/type";
import InputField from "../../ui/inputField";

interface AssignmentModalProps {
  assignment: AssignmentAdmin;
  isEditing: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSave: () => void;
  onCancel: () => void;
}

const AssignmentModal: React.FC<AssignmentModalProps> = ({
  assignment,
  isEditing,
  onInputChange,
  onSave,
  onCancel,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 size-full bg-black bg-opacity-60 flex justify-center items-center backdrop-blur-md"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-6"
    >
      <h2 className="text-3xl font-extrabold text-zinc-200">
        {assignment.course}
      </h2>

      {isEditing ? (
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Description:</label>
            <textarea
              name="description"
              value={assignment.description}
              onChange={onInputChange}
              className="w-full px-4 py-3 bg-black text-gray-200 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter assignment description..."
            />
          </div>

          <InputField
            label="Deadline"
            value={assignment.deadline}
            onChange={onInputChange}
          />

          <div className="flex justify-end gap-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors"
              onClick={onSave}
            >
              Save Changes
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors flex items-center"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4 font-extrabold">
          <p className="text-xl text-zinc-400 leading-relaxed">
            {assignment.description}
          </p>
          <div className="flex justify-between items-center text-zinc-400">
            <p>Deadline: {assignment.deadline}</p>
            <p>{assignment.studentsDone} students completed</p>
          </div>

          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors flex items-center"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </motion.div>
  </motion.section>
);

export default AssignmentModal;
