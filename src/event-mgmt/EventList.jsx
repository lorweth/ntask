import React, { useState, useEffect } from 'react';
import { Box, Progress, Text, theme } from '@chakra-ui/react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import { EventStatus } from './utils';

export default function EventList({ title, dropgableID, eventStatus }) {
  const [events, setEvents] = useState([]);
  const { loading, createdEvents, inprogressEvents, doneEvents } = useSelector(
    (state) => state.eventMgmt
  );

  useEffect(() => {
    if (eventStatus === EventStatus.CREATED) {
      setEvents(createdEvents);
    } else if (eventStatus === EventStatus.IN_PROGRESS) {
      setEvents(inprogressEvents);
    } else if (eventStatus === EventStatus.DONE) {
      setEvents(doneEvents);
    }
  }, [createdEvents, inprogressEvents, doneEvents, eventStatus]);

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
        <Text fontSize="xl" fontWeight="500">
          {title}
        </Text>
        <Text>{events?.length || 0}</Text>
      </Box>
      <Droppable droppableId={dropgableID}>
        {(provided, snapshot) => (
          <Box
            as="div"
            ref={provided.innerRef}
            bgColor={snapshot.isDraggingOver && theme.colors.gray[500]}
          >
            {loading && <Progress size="xs" isIndeterminate />}
            {events &&
              events.map((event, index) => (
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
                        eventID={event.id}
                        name={event.name}
                        imageURL={event.description}
                        startAt={event.startAt}
                        endAt={event.endAt}
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
