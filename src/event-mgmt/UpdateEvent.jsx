import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from '@chakra-ui/react';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ValidatedInput from 'components/ValidatedInput';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getEvent, updateEvent } from './eventMgmtSlice';
import { EventStatuses } from './utils';

export default function UpdateEvent() {
  const { eventID } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigator = useNavigate();
  const { selectedEvent, users } = useSelector((state) => state.eventMgmt);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: '',
      description: '',
      startAt: '',
      endAt: '',
      status: '',
    },
  });
  const [members, setMembers] = useState([]);

  const userEmailRef = useRef({});

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
    },
    status: {
      required: 'Status is required',
    },
  };

  useEffect(() => {
    dispatch(getEvent(eventID));
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      setValue('name', selectedEvent.name);
      setValue('description', selectedEvent.description);
      setValue('startAt', dayjs(selectedEvent.startAt).format('YYYY-MM-DDTHH:mm'));
      setValue('endAt', dayjs(selectedEvent.endAt).format('YYYY-MM-DDTHH:mm'));
      setValue('status', selectedEvent.status);
      setMembers(selectedEvent.members);
    }
  }, [selectedEvent]);

  const onSubmit = (values) => {
    const startAt = dayjs(values.startAt).format('YYYY-MM-DDTHH:mm:ssZ');
    const endAt = dayjs(values.endAt).format('YYYY-MM-DDTHH:mm:ssZ');

    dispatch(updateEvent({ ...values, eventID, startAt, endAt, members }));
  };

  const onAddMember = (member) => {
    setMembers([...members, member]);
  };

  const onRemoveMember = (member) => {
    setMembers(members.filter((m) => m.id !== member.id));
  };

  const onFindUser = () => {
    dispatch(fetchUsers({ q: userEmailRef.current.value, page: 0, size: 30 }));
  };

  const onClose = () => {
    navigator(location.state?.backgroundLocation?.pathname || -1);
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        sx={{
          maxWidth: 'max-content',
        }}
      >
        <ModalCloseButton />
        <ModalHeader>
          <Text fontSize="2xl" fontWeight="bold" color="teal.600">
            <Avatar
              bg="teal.500"
              color="whiteAlpha.900"
              icon={<FontAwesomeIcon icon={regular('calendar-plus')} />}
            />
            &nbsp;Update event detail
          </Text>
        </ModalHeader>
        <ModalBody
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
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

            <Controller
              name="status"
              rules={formRules.status}
              control={control}
              render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                <FormControl isInvalid={!!error}>
                  <FormLabel>Status</FormLabel>
                  <Select onChange={onChange} onBlur={onBlur} value={value} ref={ref}>
                    <option value={EventStatuses.CREATED}>{EventStatuses.CREATED}</option>
                    <option value={EventStatuses.IN_PROGRESS}>{EventStatuses.IN_PROGRESS}</option>
                    <option value={EventStatuses.DONE}>{EventStatuses.DONE}</option>
                  </Select>
                  {error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                </FormControl>
              )}
            />

            <Box
              direction="row"
              sx={{
                maxW: '249px',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                span: { width: '1.5rem', height: '1.5rem', m: 1, div: { fontSize: '9pt' } },
              }}
            >
              {members?.map((member) => (
                <Box
                  cursor="pointer"
                  display="inline-block"
                  key={`member-${member.id}`}
                  onClick={() => onRemoveMember(member)}
                >
                  <Avatar name={member.name} src={member.avatarUrl} />
                </Box>
              ))}
            </Box>

            <Button type="submit" width="100%" mt={2} colorScheme="facebook">
              Submit
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              p: 2,
              width: 'max-content',
            }}
          >
            <Box>
              <FormLabel>search member</FormLabel>
              <Box as="div" sx={{ display: 'flex', flexDirection: 'row', gap: '0.3rem' }}>
                <Input ref={userEmailRef} placeholder="Enter user email" />
                <Button colorScheme="teal" onClick={onFindUser}>
                  Find
                </Button>
              </Box>
            </Box>
            {users.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  width: '100%',
                  alignItems: 'start',
                }}
              >
                {users.map((user) => (
                  <Button
                    key={JSON.stringify(user)}
                    variant="ghost"
                    onClick={() => onAddMember(user)}
                  >
                    <Avatar
                      key={`user-${user.id}`}
                      name={user.login}
                      src={user.avatarUrl}
                      size="sm"
                      bg="teal.500"
                      color="whiteAlpha.900"
                    />
                    &nbsp;{user.login}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
