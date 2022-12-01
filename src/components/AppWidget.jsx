import React from 'react';
import { Box } from '@chakra-ui/react';

export default function AppWidget({ sx, children }) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 'md',
        boxShadow: 'md',
        padding: '1rem',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
