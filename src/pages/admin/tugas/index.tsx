import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { AssignmentAdmin } from "@/types/type";
import AssignmentList from "@/components/features/assignments/assignmentList";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import Link from "next/link";
import AssignmentModal from "@/components/modals/assignment/assignmentModal";

const assignments: AssignmentAdmin[] = [
  {
    id: 1,
    course: "Mathematics",
    class: "TI-1A",
    description: "This is the first assignment",
    deadline: "2023-06-15",
    studentsDone: 10,
  },
  {
    id: 2,
    course: "Science",
    class: "TI-1A",
    description: "This is the second assignment",
    deadline: "2023-06-20",
    studentsDone: 5,
  },
  {
    id: 3,
    course: "English",
    class: "TI-1B",
    description: "This is the third assignment",
    deadline: "2023-06-25",
    studentsDone: 8,
  },
  {
    id: 4,
    course: "Mathematics",
    class: "TI-1B",
    description: "This is the fourth assignment",
    deadline: "2023-06-30",
    studentsDone: 12,
  },
  {
    id: 5,
    course: "Science",
    class: "TI-1C",
    description: "This is the fifth assignment",
    deadline: "2023-07-05",
    studentsDone: 9,
  },
];

const AssignmentAdminPage: React.FC = () => {
  const [assignmentsList, setAssignmentsList] =
    useState<AssignmentAdmin[]>(assignments);
  const [selectedClass, setSelectedClass] = useState<string>("TI-1A");
  const [selectedAssignment, setSelectedAssignment] =
    useState<AssignmentAdmin | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const filteredAssignments = assignmentsList.filter(
    (assignment) => assignment.class === selectedClass
  );

  const handleViewAssignment = (assignment: AssignmentAdmin) => {
    setSelectedAssignment(assignment);
  };

  const handleUpdateAssignment = (assignment: AssignmentAdmin) => {
    setIsEditing(true);
    setSelectedAssignment(assignment);
  };

  const handleSaveChanges = () => {
    if (selectedAssignment) {
      const updatedList = assignmentsList.map((assignment) =>
        assignment.id === selectedAssignment.id
          ? selectedAssignment
          : assignment
      );
      setAssignmentsList(updatedList);
    }
    setIsEditing(false);
    setSelectedAssignment(null);
  };

  const handleCancelChanges = () => {
    setIsEditing(false);
    setSelectedAssignment(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (selectedAssignment) {
      const updatedAssignment = {
        ...selectedAssignment,
        [e.target.name]: e.target.value,
      };
      setSelectedAssignment(updatedAssignment);
    }
  };

  return (
    <div className="p-6 text-white w-4/5 h-screen overflow-y-scroll">
      <Breadcrumbs />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-zinc-700 rounded-2xl shadow-xl text-white"
      >
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold">Tugas</h1>
            <Link
              href="/admin/tugas/create"
              className="bg-green-500 hover:bg-green-600 flex items-center justify-center font-semibold rounded-lg py-2 px-4"
            >
              <Plus weight="bold" className="mr-2" /> Create Tugas
            </Link>
          </div>
          <div className="flex gap-4">
            <h2 className="text-xl font-bold">Pilih kelas:</h2>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="text-black border-2 cursor-pointer border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="TI-1A">TI-1A</option>
              <option value="TI-1B">TI-1B</option>
              <option value="TI-1C">TI-1C</option>
            </select>
          </div>

          <AssignmentList
            assignments={filteredAssignments}
            onView={handleViewAssignment}
            onUpdate={handleUpdateAssignment}
          />
        </div>
      </motion.div>

      {selectedAssignment && (
        <AssignmentModal
          assignment={selectedAssignment}
          isEditing={isEditing}
          onInputChange={handleInputChange}
          onSave={handleSaveChanges}
          onCancel={handleCancelChanges}
        />
      )}
    </div>
  );
};

export default AssignmentAdminPage;
