import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ColorPicker } from "./ColorPicker";
import { todoAtomsAtom, TodoPage, todosAtom } from "./TodoPage";

const ColorSection = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <HStack>
      <VStack>
        <HStack>
          <TodoPage />
          <ColorPicker />
        </HStack>
        <AddTodo />
      </VStack>
    </HStack>
  );
};

const AddTodo = () => {
  const addTodo = useSetAtom(todosAtom);

  return (
    <>
      <Button
        onClick={() =>
          addTodo((prev) => [
            ...prev,
            {
              id: 6,
              name: "new todo",
              description: "Meat + Veggies + Kombucha",
              tag: "chores",
            },
          ])
        }
      >
        {" "}
        add to do
      </Button>
    </>
  );
};

export default ColorSection;
