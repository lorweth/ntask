import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Calendar } from 'react-calendar';
import styledComponents from 'styled-components';

// const CalendarContainer = styled('div', {
//   baseStyle: (props) => ({
//     m: 2,
//     rounded: 'md',
//     bgColor: props.theme === 'light' ? theme.colors.white : theme.colors.gray[800],
//     color: props.theme === 'light' ? theme.colors.black : theme.colors.white,
//   }),
// });

export default function AppCalendar({ caption }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDir: 'column',
        gap: '.6rem',
      }}
    >
      <Heading size="md">{caption}</Heading>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </Box>
  );
}

const CalendarContainer = styledComponents.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    .react-calendar__navigation__label {
      font-weight: bold;
    }
    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }
  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: #6f876f;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;
    &:hover {
      background-color: #556b55;
    }
    &:active {
      background-color: #a5c1a5;
    }
  }
  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
    
    .react-calendar__tile {
      max-width: initial !important;
    }
    .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
    }
  }
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }
  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
