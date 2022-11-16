import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteTask } from './eventMgmtSlice';

export default function DeleteTask() {
  const { eventID, taskID } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigator = useNavigate();

  const onAgree = () => {
    dispatch(deleteTask(taskID));
  };

  const onClose = () => {
    navigator(location.state?.backgroundLocation?.pathname || -1);
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>[Sự kiện {eventID}]Xác nhận xóa công việc</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Bạn có chắc chắn muốn xóa công việc {taskID}?</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onAgree}>
            Đồng ý
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Hủy
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
