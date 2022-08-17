import { createContext, ReactNode, useCallback, useState } from "react";

export const GlobalContext = createContext({
  isOpen: false,
  toggleIsOpen: () => {},
  count: 0,
  incrementCount: () => {},
});

export const GlobalContextWrapper = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const incrementCount = () => setCount((cnt) => cnt + 1);

  return (
    <GlobalContext.Provider
      value={{ isOpen, toggleIsOpen, count, incrementCount }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
