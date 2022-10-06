import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Box, Flex } from '@chakra-ui/react';
import ListItem from './ListItem';

/**
 * DraggableElement
 *
 * @param {string} prefix name column drag and drop
 * @param {[]Object} elements data of a column
 * @param {number} length length of elements
 */
function DraggableElement({ prefix, elements, length }) {
  return (
    <Box p={5} borderWidth="1px" borderRadius="lg">
      <Flex mb={2} justifyContent="space-between" fontWeight="600" fontSize="xl">
        <Box>{prefix}</Box>
        <Box>{length}</Box>
      </Flex>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item, index) => (
              <ListItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  );
}

export default DraggableElement;
