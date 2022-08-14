import { Box, Text, Button } from "@chakra-ui/react";

export const InternalSection1 = ({ openModal }: { openModal: () => void }) => {
  return (
    <Box border="5px dashed black" padding="2">
      <Text>Internal section 1</Text>
      <InternalSection2 openModal={openModal} />
    </Box>
  );
};

export const InternalSection2 = ({ openModal }: { openModal: () => void }) => {
  return (
    <Box border="5px dashed blue" padding="2">
      <Text>Internal section 1</Text>
      <Button onClick={openModal}>open modal</Button>
    </Box>
  );
};
