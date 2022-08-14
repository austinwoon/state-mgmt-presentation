import { HStack, Heading } from "@chakra-ui/react";
import { navbarStyles } from "../../styles";
import { InternalSection1 } from "./InternalSections";

export const NavBar = () => {
  return (
    <HStack {...navbarStyles}>
      <Heading>NavBar</Heading>
      <InternalSection1 />
    </HStack>
  );
};
