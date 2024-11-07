import { Assignment } from "@/types/type";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Link,
  VStack,
} from "@chakra-ui/react";

const AssignmentAccordion: React.FC<{ assignment: Assignment }> = ({
  assignment,
}) => {
  const handleDone = () => {
    console.log("Assignment done!");
    // Implement your logic here
  };

  return (
    <AccordionItem
      bg={"#27272a"}
      color={"white"}
      borderRadius={"lg"}
      border={"none"}
      mb={4}
    >
      <h2>
        <AccordionButton display={"flex"} justifyContent={"space-between"}>
          <h2 className="font-semibold">{assignment.title}</h2>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <p className="mb-4">{assignment.description}</p>
        <VStack align="stretch" spacing={4}>
          {assignment.file && (
            <Link href={assignment.file} isExternal>
              <Button colorScheme="gray" width="full">
                Download file
              </Button>
            </Link>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDone}
          >
            Done
          </button>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AssignmentAccordion;
