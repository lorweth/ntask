import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Box, Grid } from '@chakra-ui/react';
import DraggableElement from './DraggableElement';
import { data, lists } from './data';

function removeFromList(list, index) {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
}

function addToList(list, index, element) {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
}

function DragList() {
  const [elements, setElements] = useState(data);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index);
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <Box w="100%">
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gap={2}>
          {lists.map((listKey) => (
            <DraggableElement
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
              length={elements[listKey].length}
            />
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
}

export default DragList;
