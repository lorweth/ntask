import React, { useEffect } from 'react';
import { Box, Button, Heading, Input, Text, theme } from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import EventList from './EventList';
import { EventStatuses, EventStatusLabels } from './utils';
import { fetchEvents, reorder } from './eventMgmtSlice';
import CreateEvent from './CreateEvent';
import UpdateEvent from './UpdateEvent';

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
      <Heading color={theme.colors.green[500]} variant="h1" size="lg">
        Sự kiện
      </Heading>
      <Box sx={{ display: 'flex', flexDir: 'row', justifyContent: 'space-between', mt: 5, gap: 5 }}>
        <Box sx={{ display: 'flex', flexDir: 'row', flex: 1 }} as="form" noValidate>
          <Input placeholder="Tìm kiếm..." />
          <Button type="submit">
            <FontAwesomeIcon icon={solid('magnifying-glass')} />
          </Button>
        </Box>
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
            dropgableID={EventStatusLabels[EventStatuses.CREATED]}
            eventStatus={EventStatuses.CREATED}
          />
          <EventList
            title="Đang diễn ra"
            dropgableID={EventStatusLabels[EventStatuses.IN_PROGRESS]}
            eventStatus={EventStatuses.IN_PROGRESS}
          />
          <EventList
            title="Đã kết thúc"
            dropgableID={EventStatusLabels[EventStatuses.DONE]}
            eventStatus={EventStatuses.DONE}
          />
        </Box>
      </DragDropContext>
    </Box>
  );
}

export default function EventMgmtPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { updateSuccess } = useSelector((state) => state.eventMgmt);

  useEffect(() => {
    dispatch(fetchEvents({ page: 0, size: 30 }));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(fetchEvents({ page: 0, size: 30 }));
    }
  }, [updateSuccess]);

  return (
    <>
      <Routes location={location.state?.backgroundLocation || location}>
        <Route path="/" element={<EventMgmt />} />
      </Routes>
      {location.state?.backgroundLocation && (
        <Routes>
          <Route path="/new" element={<CreateEvent />} />
          <Route path="/:eventID" element={<UpdateEvent />} />
        </Routes>
      )}
    </>
  );
}
