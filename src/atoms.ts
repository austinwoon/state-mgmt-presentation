import { atom } from "jotai";
import { TodoDisplay } from "./TodoPage";

export const selectedIdAtom = atom<string | null>(null);
