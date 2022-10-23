import React, { useState, useEffect } from 'react';
import { Box, Progress, Text, theme } from '@chakra-ui/react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import { EventStatuses } from './utils';

export default function EventList({ title, dropgableID, eventStatus }) {
  const [events, setEvents] = useState([]);

  const { loading, incomingEvents, inprogressEvents, finishedEvents } = useSelector(
    (state) => state.eventMgmt
  );

  useEffect(() => {
    if (eventStatus === EventStatuses.INCOMING) {
      setEvents(incomingEvents);
    } else if (eventStatus === EventStatuses.IN_PROGRESS) {
      setEvents(inprogressEvents);
    } else if (eventStatus === EventStatuses.FINISHED) {
      setEvents(finishedEvents);
    }
  }, [incomingEvents, inprogressEvents, finishedEvents, eventStatus]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '1rem',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text fontSize="xl" fontWeight="500" color="blackAlpha.700">
          {title}
        </Text>
        <Text>{events.length}</Text>
      </Box>
      <Droppable droppableId={dropgableID}>
        {(provided, snapshot) => (
          <Box
            as="div"
            ref={provided.innerRef}
            bgColor={snapshot.isDraggingOver && theme.colors.gray[500]}
          >
            {loading && <Progress size="xs" isIndeterminate />}
            {events.map((event, index) => (
              <Draggable draggableId={`draggable_${event.id}`} index={index} key={event.id}>
                {(providedDrag, snapshotDrag) => (
                  <Box
                    as="div"
                    ref={providedDrag.innerRef}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...providedDrag.draggableProps}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...providedDrag.dragHandleProps}
                    bgColor={snapshotDrag.isDragging && theme.colors.gray[500]}
                  >
                    <EventCard
                      name={event.name}
                      imageURL={event.description}
                      location="UIT"
                      startAt={event.start_at}
                      endAt={event.end_at}
                      tags={event.tags}
                      members={event.members}
                    />
                  </Box>
                )}
              </Draggable>
            ))}
          </Box>
        )}
      </Droppable>
    </Box>
  );
}
