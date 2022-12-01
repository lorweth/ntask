import React, { useState, useEffect } from 'react';
import { Avatar, Box, Progress, Stat, StatLabel, StatNumber, theme } from '@chakra-ui/react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import AppWidget from 'components/AppWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
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

  const getWidgetIcon = () => {
    let icon = null;
    if (eventStatus === EventStatus.CREATED) {
      icon = regular('calendar-plus');
    }
    if (eventStatus === EventStatus.IN_PROGRESS) {
      icon = regular('calendar');
    }
    if (eventStatus === EventStatus.DONE) {
      icon = regular('calendar-check');
    }
    return <FontAwesomeIcon icon={icon} color="white" />;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '1rem',
      }}
    >
      <AppWidget
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: '.5rem',
        }}
      >
        <Avatar size="lg" backgroundColor="green.500" icon={getWidgetIcon()} />
        <Stat>
          <StatLabel>{title}</StatLabel>
          <StatNumber>{events?.length || 0}</StatNumber>
        </Stat>
      </AppWidget>
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
