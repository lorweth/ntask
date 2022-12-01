import React, { useEffect } from 'react';
import { Box, Button, Heading, Text, theme } from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { toastify } from 'common/toastify';
import EventList from './EventList';
import { EventStatus, EventStatusLabel, EventStatusTitle } from './utils';
import { fetchEvents, reorder } from './eventMgmtSlice';
import CreateEvent from './CreateEvent';
import EventDetail from './EventDetail';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

function EventMgmt() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const location = useLocation();

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // Dragged outside the list
    if (!destination) {
      return;
    }

    // Dragged to the same position
    if (source.droppableId === destination.droppableId) {
      dispatch(
        reorder({
          sourceIndex: source.index,
          destinationIndex: destination.index,
          statusName: source.droppableId,
        })
      );
    }

    // Dragged to a different list
    if (source.droppableId !== destination.droppableId) {
      // eslint-disable-next-line no-console
      console.log('Dragged to a different list');
    }
  };

  const onClickNewEvent = () => {
    navigator('new', { state: { backgroundLocation: location } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'space-between', mt: 5, gap: 5 }}>
        <Heading color={theme.colors.green[500]} variant="h1" size="lg">
          Sự kiện
        </Heading>

        <Button colorScheme="green" onClick={onClickNewEvent}>
          <FontAwesomeIcon icon={solid('plus')} />
          &nbsp;
          <Text
            display={{
              base: 'none',
              md: 'inline',
            }}
          >
            Thêm sự kiện
          </Text>
        </Button>
      </Box>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: 5,
            gap: '2rem',
          }}
        >
          <EventList
            title="Sắp diễn ra"
            dropgableID={EventStatusTitle[EventStatusLabel.CREATED]}
            eventStatus={EventStatus.CREATED}
          />
          <EventList
            title="Đang diễn ra"
            dropgableID={EventStatusTitle[EventStatusLabel.IN_PROGRESS]}
            eventStatus={EventStatus.IN_PROGRESS}
          />
          <EventList
            title="Đã kết thúc"
            dropgableID={EventStatusTitle[EventStatusLabel.DONE]}
            eventStatus={EventStatus.DONE}
          />
        </Box>
      </DragDropContext>
    </Box>
  );
}

export default function EventMgmtPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { updateSuccess, deleteSuccess, errorMessage } = useSelector((state) => state.eventMgmt);

  useEffect(() => {
    dispatch(fetchEvents({ page: 0, size: 30 }));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(fetchEvents({ page: 0, size: 30 }));
      toastify({ title: 'Thành công', description: 'Cập nhật thành công', status: 'success' });
    }
  }, [updateSuccess]);

  useEffect(() => {
    if (deleteSuccess) {
      dispatch(fetchEvents({ page: 0, size: 30 }));
      toastify({ title: 'Thành công', description: 'Xóa công việc thành công', status: 'success' });
    }
  }, [deleteSuccess]);

  useEffect(() => {
    if (errorMessage) {
      toastify({ title: 'Lỗi', description: errorMessage, status: 'error' });
    }
  }, [errorMessage]);

  return (
    <>
      <Routes location={location.state?.backgroundLocation || location}>
        <Route path="/" element={<EventMgmt />} />
        <Route path="/:eventID" element={<EventDetail />} />
      </Routes>

      {location.state?.backgroundLocation && (
        <Routes>
          <Route path="/new" element={<CreateEvent />} />
          <Route path="/:eventID/tasks/new" element={<EditTask />} />
          <Route path="/:eventID/tasks/:taskID" element={<EditTask />} />
          <Route path="/:eventID/tasks/:taskID/delete" element={<DeleteTask />} />
        </Routes>
      )}
    </>
  );
}
