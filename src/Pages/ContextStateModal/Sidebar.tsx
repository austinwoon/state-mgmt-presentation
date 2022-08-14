import { Heading, VStack } from "@chakra-ui/react";
import { InternalSection1 } from "./InternalSections";

export const SideBar = () => {
  return (
    <VStack
      paddingLeft="10"
      width="25vw"
      height="90vh"
      backgroundColor="red.200"
      align="start"
    >
      <Heading>SideBar</Heading>
      <InternalSection1 />
    </VStack>
  );
};
