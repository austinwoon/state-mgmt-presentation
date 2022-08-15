import { HStack, VStack, Text } from "@chakra-ui/react";
import { atom, PrimitiveAtom, useAtom, useSetAtom } from "jotai";
import { selectedIndexAtom } from "./atoms";
import { Todo, todoData } from "../../data/todos";
import makeComponentExpensive from "../../makeComponentExpensive";

export type TodoDisplay = {
  data: Todo;
  color: string;
  isSelected: boolean;
};

type TodoColor = Todo & { color: string };

export const todosAtom = atom(todoData);

export const todoAtomsAtom = atom<PrimitiveAtom<TodoColor>[]>((get) => {
  const todos = get(todosAtom);

  return todos.map((todo) =>
    atom({
      ...todo,
      color: "red",
    })
  );
});

export const TodoPage = () => {
  const [todoAtoms] = useAtom(todoAtomsAtom);

  return (
    <VStack justifyContent="center">
      {todoAtoms.map((todo, index) => (
        <TodoCard key={index} index={index} todoAtomConfig={todo} />
      ))}
    </VStack>
  );
};

const TodoCard = ({
  index,
  todoAtomConfig,
}: {
  index: number;
  todoAtomConfig: PrimitiveAtom<TodoColor>;
}) => {
  makeComponentExpensive(40);
  const [todo, setTodo] = useAtom(todoAtomConfig);

  const setSelectedIdAtom = useSetAtom(selectedIndexAtom);

  return (
    <VStack p={5} onClick={() => setSelectedIdAtom(index)} bgColor={todo.color}>
      <HStack>
        <Text>{todo.name}</Text>
      </HStack>
    </VStack>
  );
};

export const FilterMenuGroup = ({ todos }: { todos: Todo[] }) => {
  return <>{todos.map((todo) => {})}</>;
};
