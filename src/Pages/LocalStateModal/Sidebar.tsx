import { Heading, VStack } from "@chakra-ui/react";
import { sidebarStyles } from "../../styles";
import { InternalSection1 } from "./InternalSections";

export const SideBar = ({ openModal }: { openModal: () => void }) => {
  return (
    <VStack {...sidebarStyles}>
      <Heading>Side Bar</Heading>
      <InternalSection1 openModal={openModal} />
    </VStack>
  );
};
