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
import { useContext, useEffect } from "react";
import { IsOpenContext, IsOpenContextWrapper } from "./ContextWrapper";
import { NavBar } from "./Navbar";
import { SideBar } from "./Sidebar";

export const ContextPage = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <IsOpenContextWrapper>
      <NavBar />
      <SideBar />
      <ModalContents />
    </IsOpenContextWrapper>
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
