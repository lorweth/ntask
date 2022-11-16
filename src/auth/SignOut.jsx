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
          <Text fontWeight="bold">Bạn muốn đăng xuất?</Text>
        </ModalHeader>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onSignOut}>
            Đăng xuất
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Hủy
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
