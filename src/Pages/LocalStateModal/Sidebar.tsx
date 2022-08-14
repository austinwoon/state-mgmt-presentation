import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";
import { InternalSection1 } from "./InternalSections";

export const SideBar = ({ openModal }: { openModal: () => void }) => {
  return (
    <VStack
      paddingLeft="10"
      width="25vw"
      height="90vh"
      backgroundColor="red.200"
      align="start"
    >
      <Heading>Side Bar</Heading>
      <InternalSection1 openModal={openModal} />
    </VStack>
  );
};
