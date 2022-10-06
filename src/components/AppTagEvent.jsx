import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function AppTagEvent({ number, title, status }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1',
        flexDir: 'row',
        gap: '1rem',
        p: 5,
        rounded: 'md',
        shadow: 'md',
        borderWidth: '1px',
      }}
    >
      <Heading fontSize="4xl">{number}</Heading>
      <Box>
        <Text>{title}</Text>
        <Text>{status}</Text>
      </Box>
    </Box>
  );
}
