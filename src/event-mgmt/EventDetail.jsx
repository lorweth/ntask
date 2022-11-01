import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
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
import { fetchTasks, fetchUsers, getEvent, updateEvent } from './eventMgmtSlice';
import { EventStatuses } from './utils';
import TicketList from './TicketList';
import { withTicket } from './Ticket';

export default function EventDetail() {
  const { eventID } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigator = useNavigate();
  const { selectedEvent, users, tasks, updateSuccess } = useSelector((state) => state.eventMgmt);
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      name: '',
      description: '',
      startAt: '',
      endAt: '',
      status: '',
    },
  });
  const startAtRef = useRef({});
  startAtRef.current = watch('startAt', '');
  const userEmailRef = useRef({});
  const [members, setMembers] = useState([]);
  const TaskCard = withTicket('task');

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
    status: {
      required: 'Status is required',
    },
  };

  useEffect(() => {
    dispatch(getEvent(eventID));
    dispatch(fetchTasks({ eventID, page: 0, size: 100 }));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getEvent(eventID));
      dispatch(fetchTasks({ eventID, page: 0, size: 100 }));
    }
  }, [updateSuccess]);

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
    dispatch(fetchUsers({ q: userEmailRef.current.value, page: 0, size: 6 }));
  };

  // eslint-disable-next-line no-unused-vars
  const onBack = () => {
    navigator(`/events`);
  };

  const onClickNewTask = () => {
    navigator(`${location.pathname}/tasks/new`, { state: { backgroundLocation: location } });
  };

  const onClickTaskDetail = (taskID) => {
    navigator(`${location.pathname}/tasks/${taskID}`, {
      state: { backgroundLocation: location },
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.600">
          <Avatar
            bg="teal.500"
            color="whiteAlpha.900"
            icon={<FontAwesomeIcon icon={regular('calendar-plus')} />}
          />
          &nbsp;Chi tiết sự kiện
        </Text>
        <Button colorScheme="telegram" variant="outline" onClick={onBack}>
          <FontAwesomeIcon icon={solid('arrow-left')} />
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0.5rem',
        }}
      >
        {/* Update event form */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 2,
            gap: '0.5rem',
            p: 2,
          }}
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <ValidatedInput
              sx={{ flex: 2 }}
              control={control}
              name="name"
              type="text"
              label="Tên sự kiện"
              rules={formRules.name}
            />
            <Controller
              name="status"
              rules={formRules.status}
              control={control}
              render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                <FormControl sx={{ flex: 1 }} isInvalid={!!error}>
                  <FormLabel>Trạng thái</FormLabel>
                  <Select onChange={onChange} onBlur={onBlur} value={value} ref={ref}>
                    <option value={EventStatuses.CREATED}>{EventStatuses.CREATED}</option>
                    <option value={EventStatuses.IN_PROGRESS}>{EventStatuses.IN_PROGRESS}</option>
                    <option value={EventStatuses.DONE}>{EventStatuses.DONE}</option>
                  </Select>
                  {error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                </FormControl>
              )}
            />
          </Box>

          <ValidatedInput
            control={control}
            name="description"
            type="textarea"
            label="Mô tả"
            rules={formRules.description}
          />

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <ValidatedInput
              sx={{ flex: 1 }}
              control={control}
              name="startAt"
              type="datetime-local"
              label="Bắt đầu"
              rules={formRules.startAt}
            />

            <ValidatedInput
              sx={{ flex: 1 }}
              control={control}
              name="endAt"
              type="datetime-local"
              label="Kết thúc"
              rules={formRules.endAt}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <Box
              direction="row"
              sx={{
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

            <Button type="submit" variant="outline" colorScheme="facebook">
              <FontAwesomeIcon icon={solid('floppy-disk')} />
              &nbsp;Lưu
            </Button>
          </Box>
        </Box>

        {/* Add member form */}
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
          <Box>
            <FormLabel>Tìm kiếm người dùng</FormLabel>
            <Box as="div" sx={{ display: 'flex', flexDirection: 'row', gap: '0.3rem' }}>
              <Input ref={userEmailRef} placeholder="Nhập email" />
              <Button colorScheme="teal" onClick={onFindUser}>
                <FontAwesomeIcon icon={solid('magnifying-glass')} />
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
      </Box>
      <Divider />
      {/* Task Bar */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.2rem', mt: 3 }}>
        <Box sx={{ display: 'flex', flexDir: 'row', flex: 1 }} as="form" noValidate>
          <Input placeholder="Tìm kiếm..." />
          <Button type="submit">
            <FontAwesomeIcon icon={solid('magnifying-glass')} />
          </Button>
        </Box>
        <Button colorScheme="green" onClick={onClickNewTask}>
          <FontAwesomeIcon icon={solid('plus')} />
          &nbsp;
          <Text
            display={{
              base: 'none',
              md: 'inline',
            }}
          >
            Thêm task
          </Text>
        </Button>
      </Box>

      {/* Task List */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <TicketList
          title="Sắp diễn ra"
          data={tasks.filter((task) => task.status === EventStatuses.CREATED)}
          onClickDetail={onClickTaskDetail}
          TicketComponent={TaskCard}
        />
        <TicketList
          title="Đang diễn ra"
          data={tasks.filter((task) => task.status === EventStatuses.IN_PROGRESS)}
          onClickDetail={onClickTaskDetail}
          TicketComponent={TaskCard}
        />
        <TicketList
          title="Đã kết thúc"
          data={tasks.filter((task) => task.status === EventStatuses.DONE)}
          onClickDetail={onClickTaskDetail}
          TicketComponent={TaskCard}
        />
      </Box>
    </Box>
  );
}
