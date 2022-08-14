import { HStack, Heading } from "@chakra-ui/react";
import { navbarStyles } from "../../styles";
import { InternalSection1 } from "./InternalSections";

export const NavBar = ({ openModal }: { openModal: () => void }) => {
  return (
    <HStack {...navbarStyles}>
      <Heading>Navbar</Heading>
      <InternalSection1 openModal={openModal} />
    </HStack>
  );
};
