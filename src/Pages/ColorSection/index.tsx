import { HStack } from "@chakra-ui/react";
import { ColorPicker } from "./ColorPicker";
import { TodoPage } from "./TodoPage";

const ColorSection = () => {
  return (
    <HStack>
      <TodoPage />
      <ColorPicker />
    </HStack>
  );
};

export default ColorSection;
