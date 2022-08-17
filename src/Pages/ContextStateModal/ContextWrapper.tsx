import { createContext, ReactNode, useCallback, useState } from "react";

export const IsOpenContext = createContext({
  isOpen: false,
  toggleIsOpen: () => {},
});

export const IsOpenContextWrapper = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(
    () => setIsOpen((prev) => !prev),
    [setIsOpen]
  );

  return (
    <IsOpenContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
};
