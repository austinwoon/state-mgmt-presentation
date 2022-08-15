import { Box, Text, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { IsOpenContext } from ".";

export const InternalSection1 = () => {
  return (
    <Box border="5px dashed black" padding="2">
      <Text>Internal section 1</Text>
      <InternalSection2 />
    </Box>
  );
};

export const InternalSection2 = () => {
  const { toggleIsOpen } = useContext(IsOpenContext);
  return (
    <Box border="5px dashed blue" padding="2">
      <Text>Internal section 2</Text>
      <Button onClick={toggleIsOpen}>open modal</Button>
    </Box>
  );
};
