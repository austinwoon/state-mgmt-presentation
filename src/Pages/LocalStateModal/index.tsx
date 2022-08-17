import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { NavBar } from "./Navbar";
import { SideBar } from "./Sidebar";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), [setIsOpen]);
  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <Box>
      <NavBar openModal={openModal} />
      <SideBar openModal={openModal} />

      <ModalContents isOpen={isOpen} onClose={closeModal} />
    </Box>
  );
};

const ModalContents = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Some modal</ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close Modal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Page;
