import { HStack, Heading } from "@chakra-ui/react";
import { InternalSection1 } from "./InternalSections";

export const NavBar = () => {
  return (
    <HStack
      paddingLeft="10"
      width="100vw"
      height="25vh"
      backgroundColor="orange.200"
    >
      <Heading>NavBar</Heading>
      <InternalSection1 />
    </HStack>
  );
};
