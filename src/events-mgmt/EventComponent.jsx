import React, { useState } from 'react';
import styled from '@emotion/styled';
import { DragDropContext } from 'react-beautiful-dnd';
import QuoteList from './QuoteList';
import reorder from './reorder';
import { grid } from './constants';

const Root = styled.div`
  /* flexbox */
  padding-top: ${grid * 2}px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default function QuoteApp({ initial, listStyle, isCombineEnabled }) {
  const [quotes, setQuotes] = useState(initial);

  const onDragStart = () => {
    // Add a little vibration if the browser supports it.
    // Add's a nice little physical feedback
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  };

  const onDragEnd = (result) => {
    // combining item
    if (result.combine) {
      // super simple: just removing the dragging item
      const newQuotes = [...quotes];
      newQuotes.splice(result.source.index, 1);
      setQuotes(newQuotes);
      return;
    }

    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newQuotes = reorder(quotes, result.source.index, result.destination.index);

    setQuotes(newQuotes);
  };

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Root>
        <QuoteList
          listId="list"
          style={listStyle}
          quotes={quotes}
          isCombineEnabled={isCombineEnabled}
        />
      </Root>
    </DragDropContext>
  );
}
