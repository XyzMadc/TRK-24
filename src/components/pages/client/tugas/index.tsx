import AssignmentAccordion from "@/components/features/assignments/assignmentAccordion";
import { Assignment } from "@/types/type";
import { Accordion } from "@chakra-ui/react";

export default function AssignmentViewPage({
  assignmentData,
}: {
  assignmentData: Assignment[];
}) {
  return (
    <section className="p-6 h-screen overflow-y-scroll lg:w-4/5">
      <h1 className="text-4xl text-center text-white mb-10 font-extrabold">
        Tugas
      </h1>
      <div className="max-w-4xl mx-auto">
        <Accordion allowToggle>
          {assignmentData.map((assignment, index) => (
            <AssignmentAccordion key={index} assignment={assignment} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
