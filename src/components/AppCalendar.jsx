import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Calendar } from 'react-calendar';

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
      <Calendar />
    </Box>
  );
}
