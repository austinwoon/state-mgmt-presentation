import { HStack, VStack, Text } from "@chakra-ui/react";
import { atom, PrimitiveAtom, useAtom, useSetAtom } from "jotai";
import { useState } from "react";
import { selectedIdAtom } from "./atoms";
import { Todo, todoData } from "./data/todos";
import { FilterMenu } from "./FilterMenu";

export type TodoDisplay = {
  data: Todo;
  color: string;
  isSelected: boolean;
};

const todosAtom = atom(todoData);

export const todosAtomMapAtom = atom((get) => {
  const todos = get(todosAtom);

  const todoIdMap: Record<string, PrimitiveAtom<TodoDisplay>> = {};

  todos.forEach((todo) => {
    todoIdMap[todo.id] = atom<TodoDisplay>({
      data: todo,
      color: "red",
      isSelected: false,
    });
  });

  return todoIdMap;
});

export const TodoPage = () => {
  const [todosAtom] = useAtom(todosAtomMapAtom);

  // const choreTodos = todos.map((todo) => )

  return (
    <VStack justifyContent="center">
      {/* <FilterMenu availableOptions={new Set([])} placeholder="test" />
       */}

      {Object.keys(todosAtom).map((id) => (
        <TodoCard id={id} />
      ))}
    </VStack>
  );
};

const TodoCard = ({ id }: { id: string }) => {
  const [todoAtom] = useAtom(todosAtomMapAtom);
  const [todo, setTodo] = useAtom(todoAtom[id]);

  const setSelectedIdAtom = useSetAtom(selectedIdAtom);

  return (
    <VStack p={5} onClick={() => setSelectedIdAtom(id)} bgColor={todo.color}>
      <HStack>
        <Text>{todo.data.name}</Text>
      </HStack>
    </VStack>
  );
};

export const FilterMenuGroup = ({ todos }: { todos: Todo[] }) => {
  return <>{todos.map((todo) => {})}</>;
};
