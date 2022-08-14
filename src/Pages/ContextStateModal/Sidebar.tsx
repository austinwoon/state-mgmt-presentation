import { Heading, VStack } from "@chakra-ui/react";
import { sidebarStyles } from "../../styles";
import { InternalSection1 } from "./InternalSections";

export const SideBar = () => {
  return (
    <VStack {...sidebarStyles}>
      <Heading>SideBar</Heading>
      <InternalSection1 />
    </VStack>
  );
};
