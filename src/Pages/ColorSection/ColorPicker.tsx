import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { HexColorPicker } from "react-colorful";
import { selectedIndexAtom } from "./atoms";
import { todoAtomsAtom } from "./TodoPage";

export const ColorPicker = () => {
  const selectedAtomIndex = useAtomValue(selectedIndexAtom);

  return (
    <>{selectedAtomIndex && <ColorPickerSetter index={selectedAtomIndex} />}</>
  );
};

const ColorPickerSetter = ({ index }: { index: number }) => {
  const todoAtoms = useAtomValue(todoAtomsAtom);

  const setTodo = useSetAtom(todoAtoms[index]);

  return (
    <HexColorPicker
      onChange={(color) => setTodo((prev) => ({ ...prev, color }))}
    />
  );
};
