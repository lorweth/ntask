import React, { useEffect } from 'react';
import { Box, Button, Heading, Input, Text, theme } from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import EventList from './EventList';
import { EventStatuses, EventStatusLabels } from './utils';

import { getEventsForTest, reorder } from './eventMgmtSlice';

export default function EventMgmt() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventsForTest());
  }, []);

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
        <Button colorScheme="green">
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
            dropgableID={EventStatusLabels[EventStatuses.INCOMING]}
            eventStatus={EventStatuses.INCOMING}
          />
          <EventList
            title="Đang diễn ra"
            dropgableID={EventStatusLabels[EventStatuses.IN_PROGRESS]}
            eventStatus={EventStatuses.IN_PROGRESS}
          />
          <EventList
            title="Đã kết thúc"
            dropgableID={EventStatusLabels[EventStatuses.FINISHED]}
            eventStatus={EventStatuses.FINISHED}
          />
        </Box>
      </DragDropContext>
    </Box>
  );
}
