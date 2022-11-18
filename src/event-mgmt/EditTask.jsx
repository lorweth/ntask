import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from '@chakra-ui/react';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ValidatedInput from 'components/ValidatedInput';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, getTask, updateTask } from './eventMgmtSlice';
import { EventStatus, EventStatusLabel } from './utils';

const filePath = process.env.REACT_APP_FILE_URL;

export default function EditTask() {
  const { eventID, taskID } = useParams();
  const isNew = taskID === undefined || taskID === null;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigator = useNavigate();
  const { selectedTask, selectedEvent } = useSelector((state) => state.eventMgmt);
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      name: '',
      description: '',
      startAt: dayjs().format('YYYY-MM-DDTHH:mm'),
      endAt: dayjs().add(1, 'hour').format('YYYY-MM-DDTHH:mm'),
      status: EventStatus.CREATED,
    },
  });
  const startAtRef = useRef({});
  startAtRef.current = watch('startAt', dayjs().format('YYYY-MM-DDTHH:mm'));
  const [assignees, setAssignees] = useState([]);

  const formRules = {
    name: {
      required: 'Bắt buộc nhập tên công việc',
    },
    startAt: {
      required: 'Bắt buộc nhập thời gian bắt đầu',
    },
    endAt: {
      required: 'Bắt buộc nhập thời gian kết thúc',
      validate: (value) =>
        dayjs(value).isAfter(dayjs(startAtRef.current)) ||
        'Thời gian kết thúc phải sau thời gian bắt đầu',
    },
    status: {
      required: 'Bắt buộc nhập trạng thái',
    },
  };

  useEffect(() => {
    if (!isNew) {
      dispatch(getTask(taskID));
    }
  }, []);

  useEffect(() => {
    if (!isNew && selectedTask) {
      setValue('name', selectedTask.name);
      setValue('description', selectedTask.description);
      setValue('startAt', dayjs(selectedTask.startAt).format('YYYY-MM-DDTHH:mm'));
      setValue('endAt', dayjs(selectedTask.endAt).format('YYYY-MM-DDTHH:mm'));
      setValue('status', selectedTask.status);
      setAssignees(selectedTask.assignees);
    }
  }, [selectedTask]);

  const onSubmit = (values) => {
    const startAt = dayjs(values.startAt).format('YYYY-MM-DDTHH:mm:ssZ');
    const endAt = dayjs(values.endAt).format('YYYY-MM-DDTHH:mm:ssZ');

    if (isNew) {
      dispatch(createTask({ ...values, event: eventID, startAt, endAt, assignees }));
    } else {
      dispatch(updateTask({ ...values, id: taskID, event: eventID, startAt, endAt, assignees }));
    }
  };

  const onAddMember = (member) => {
    if (!assignees.find((a) => a.id === member.id)) {
      setAssignees([...assignees, member]);
    }
  };

  const onRemoveMember = (member) => {
    setAssignees(assignees.filter((m) => m.id !== member.id));
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
            &nbsp;Cập nhật công việc
          </Text>
        </ModalHeader>
        <ModalBody
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0.5rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: 1,
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
              label="Tên công việc"
              rules={formRules.name}
            />

            <ValidatedInput
              control={control}
              name="description"
              type="textarea"
              label="Mô tả"
              rules={formRules.description}
            />

            <ValidatedInput
              control={control}
              name="startAt"
              type="datetime-local"
              label="Bắt đầu"
              rules={formRules.startAt}
            />

            <ValidatedInput
              control={control}
              name="endAt"
              type="datetime-local"
              label="Kết thúc"
              rules={formRules.endAt}
            />

            {taskID && (
              <Controller
                name="status"
                rules={formRules.status}
                control={control}
                render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                  <FormControl isInvalid={!!error}>
                    <FormLabel>Trạng thái</FormLabel>
                    <Select onChange={onChange} onBlur={onBlur} value={value} ref={ref}>
                      <option value={EventStatus.CREATED}>{EventStatusLabel.CREATED}</option>
                      <option value={EventStatus.IN_PROGRESS}>
                        {EventStatusLabel.IN_PROGRESS}
                      </option>
                      <option value={EventStatus.DONE}>{EventStatusLabel.DONE}</option>
                    </Select>
                    {error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                  </FormControl>
                )}
              />
            )}

            <Box
              direction="row"
              sx={{
                maxW: '249px',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                span: { width: '1.5rem', height: '1.5rem', m: 1, div: { fontSize: '9pt' } },
              }}
            >
              {assignees?.map((member) => (
                <Box
                  cursor="pointer"
                  display="inline-block"
                  key={`member-${member.id}`}
                  onClick={() => onRemoveMember(member)}
                >
                  <Avatar name={member.name} src={`${filePath}/${member.avatarUrl}`} />
                </Box>
              ))}
            </Box>

            <Button type="submit" width="100%" mt={2} colorScheme="facebook">
              <FontAwesomeIcon icon={solid('floppy-disk')} />
              &nbsp;Lưu
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              gap: '0.5rem',
              p: 2,
              width: 'max-content',
            }}
          >
            <Text fontWeight="medium">Thành viên:</Text>
            {selectedEvent?.members?.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  width: '100%',
                  alignItems: 'start',
                }}
              >
                {selectedEvent?.members?.map((user) => (
                  <Button
                    key={JSON.stringify(user)}
                    variant="ghost"
                    onClick={() => onAddMember(user)}
                  >
                    <Avatar
                      key={`user-${user.id}`}
                      name={user.login}
                      src={user.avatarUrl ? `${filePath}/${user.avatarUrl}` : ''}
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
