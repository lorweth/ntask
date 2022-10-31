import React, { useRef } from 'react';
import {
  Avatar,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ValidatedInput from 'components/ValidatedInput';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { createEvent } from './eventMgmtSlice';

export default function UpdateEvent() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const location = useLocation();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: '',
      description: '',
      startAt: dayjs().format('YYYY-MM-DDTHH:mm'),
      endAt: dayjs().format('YYYY-MM-DDTHH:mm'),
    },
  });
  const startAtRef = useRef({});
  startAtRef.current = watch('startAt', '');

  const formRules = {
    name: {
      required: 'Name is required',
    },
    description: {
      required: 'Description is required',
    },
    startAt: {
      required: 'Start time is required',
    },
    endAt: {
      required: 'End time is required',
      validate: (value) =>
        dayjs(value).isAfter(dayjs(startAtRef.current.value)) ||
        'End time must be after start time',
    },
  };

  const onSubmit = (values) => {
    const startAt = dayjs(values.startAt).format('YYYY-MM-DDTHH:mm:ssZ');
    const endAt = dayjs(values.endAt).format('YYYY-MM-DDTHH:mm:ssZ');

    dispatch(createEvent({ ...values, startAt, endAt }));
  };

  const onClose = () => {
    navigator(location.state?.backgroundLocation?.pathname || -1);
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Text fontSize="2xl" fontWeight="bold" color="teal.600">
            <Avatar
              bg="teal.500"
              color="whiteAlpha.900"
              icon={<FontAwesomeIcon icon={regular('calendar-days')} />}
            />
            &nbsp;Create new event
          </Text>
        </ModalHeader>
        <ModalBody>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              width: '700',
              p: 2,
            }}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <ValidatedInput
              control={control}
              name="name"
              type="text"
              label="Event name"
              rules={formRules.name}
            />

            <ValidatedInput
              control={control}
              name="description"
              type="textarea"
              label="Description"
              rules={formRules.description}
            />

            <ValidatedInput
              control={control}
              name="startAt"
              type="datetime-local"
              label="Start time"
              rules={formRules.startAt}
            />

            <ValidatedInput
              control={control}
              name="endAt"
              type="datetime-local"
              label="End time"
              rules={formRules.endAt}
            />

            <Button type="submit" width="100%" mt={2}>
              Submit
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
