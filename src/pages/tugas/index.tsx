import AssignmentViewPage from "@/components/pages/client/tugas";
import { Assignment } from "@/type";

const assignmentData: Assignment[] = [
  {
    title: "Algorithm and Data Structure",
    description: "This is the first assignment.",
    file: "https://example.com/assignment1.pdf",
    done: false,
  },
  {
    title: "Operating System",
    description: "This is the second assignment.",
    done: false,
  },
];

export default function AssignmentPage() {
  return <AssignmentViewPage assignmentData={assignmentData} />;
}
