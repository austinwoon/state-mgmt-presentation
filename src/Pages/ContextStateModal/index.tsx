import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React, { useCallback, useContext, useState } from "react";
import { NavBar } from "./Navbar";
import { SideBar } from "./Sidebar";

export const IsOpenContext = React.createContext({
  isOpen: false,
  toggleIsOpen: () => {},
});

export const ContextStateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(
    () => setIsOpen((prev) => !prev),
    [setIsOpen]
  );

  return (
    <IsOpenContext.Provider value={{ isOpen, toggleIsOpen }}>
      <NavBar />
      <SideBar />
      <ModalContents />
    </IsOpenContext.Provider>
  );
};

const ModalContents = () => {
  const { isOpen, toggleIsOpen } = useContext(IsOpenContext);

  return (
    <Modal isOpen={isOpen} onClose={toggleIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Some modal</ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={toggleIsOpen}>
            Close Modal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
