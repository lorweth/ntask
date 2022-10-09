import { React } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
  const navigate = useNavigate();

  const onClose = () => navigate(-1);

  const onSignOut = () => {
    // eslint-disable-next-line no-console
    console.log('Sign out');
  };

  return (
    <Modal isOpen="true" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="red.400" color="whiteAlpha.900">
          Sign Out Account
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody borderBottom="1px" borderColor="gray.400">
          Do you want to sign out?
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="red" onClick={onSignOut}>
            Sign out
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
