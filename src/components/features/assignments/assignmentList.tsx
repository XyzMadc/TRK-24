import { AssignmentAdmin } from "@/types/type";
import AssignmentCard from "./assignmentCard";

interface AssignmentListProps {
  assignments: AssignmentAdmin[];
  onView: (assignment: AssignmentAdmin) => void;
  onUpdate: (assignment: AssignmentAdmin) => void;
}

const AssignmentList: React.FC<AssignmentListProps> = ({
  assignments,
  onView,
  onUpdate,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-8">
    {assignments.map((assignment) => (
      <AssignmentCard
        key={assignment.id}
        assignment={assignment}
        onView={onView}
        onUpdate={onUpdate}
      />
    ))}
  </div>
);

export default AssignmentList;
