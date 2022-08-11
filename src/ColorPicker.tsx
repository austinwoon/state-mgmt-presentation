import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { HexColorPicker } from "react-colorful";
import { selectedIdAtom } from "./atoms";
import { todosAtomMapAtom } from "./TodoPage";

export const ColorPicker = () => {
  const selectedAtomId = useAtomValue(selectedIdAtom);

  return <>{selectedAtomId && <ColorPickerSetter id={selectedAtomId} />}</>;
};

const ColorPickerSetter = ({ id }: { id: string }) => {
  const todosAtom = useAtomValue(todosAtomMapAtom);

  const setTodo = useSetAtom(todosAtom[id]);

  return (
    <HexColorPicker
      onChange={(color) => setTodo((prev) => ({ ...prev, color }))}
    />
  );
};
