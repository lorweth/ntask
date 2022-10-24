import { React } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

export default function SignOut() {
  const navigator = useNavigate();
  const { removeAuthToken } = useAuth();

  const onClose = () => navigator(-1);

  const onSignOut = () => {
    removeAuthToken();
    navigator('/auth/signin');
  };

  return (
    <Modal blockScrollOnMount={false} isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight="bold">Are you sure you want to sign out?</Text>
        </ModalHeader>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onSignOut}>
            Sign out
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
