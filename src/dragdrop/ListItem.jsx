import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import DetailEvent from './DetailEvent';

/**
 * ListItem
 *
 * @param {number} index key of map array
 * @param {[]Object} item data detail event:
 * - id: string
 * - data: DetailEvent
 */
export default function ListItem({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Grid
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="8px"
          flexDirection="column"
          margin="0 0 8px 0"
          ref={provided.innerRef}
          snapshot={snapshot}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
        >
          <DetailEvent
            title={item.data.title}
            time={item.data.time}
            location={item.data.location}
            badge={item.data.badge}
            avatar={item.data.avatar}
            imgUrl={item.data.imgUrl}
          />
        </Grid>
      )}
    </Draggable>
  );
}
