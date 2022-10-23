import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Calendar } from '@mantine/dates';
import 'dayjs/locale/de';

export default function AppCalendar({ caption }) {
  const [value, setValue] = useState(null);
  return (
    <Box
      sx={{
        maxW: '320px',
        display: 'flex',
        flexDir: 'column',
        gap: '.6rem',
      }}
    >
      <Heading size="md">{caption}</Heading>
      <Calendar value={value} onChange={setValue} fullWidth />
    </Box>
  );
}
