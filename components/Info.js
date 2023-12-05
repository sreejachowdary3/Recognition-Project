import React from "react";
import handImages from "../public/handImages.svg";
import {
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

export default function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLearnMore = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Button onClick={handleLearnMore} colorScheme="orange">
        Learn More
      </Button>

      <Modal onClose={handleClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>American Sign Language (ASL)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="sm">
            American Sign Language (ASL) serves as a visual language utilized within Deaf communities across the United States and Canada.
            This language relies on hand gestures to communicate the alphabet and various expressions.
            </Text>
            <Image src={handImages} />
            <Text fontSize="sm">
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
