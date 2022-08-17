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
import { useContext } from "react";
import { GlobalContext } from "./ContextWrapper";
import { Counter } from "./Counter";

export const ModalContents = () => {
  const { isOpen, toggleIsOpen } = useContext(GlobalContext);

  return (
    <Modal isOpen={isOpen} onClose={toggleIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Counter />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={toggleIsOpen}>
            Close Modal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
