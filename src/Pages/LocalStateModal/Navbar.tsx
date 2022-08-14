import { HStack, Heading, Button, Box, Text } from "@chakra-ui/react";
import { InternalSection1 } from "./InternalSections";

export const NavBar = ({ openModal }: { openModal: () => void }) => {
  return (
    <HStack
      paddingLeft="10"
      width="100vw"
      height="25vh"
      backgroundColor="orange.200"
    >
      <Heading>Navbar</Heading>
      <InternalSection1 openModal={openModal} />
    </HStack>
  );
};
