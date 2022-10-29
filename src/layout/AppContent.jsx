import React from 'react';
import { Box } from '@chakra-ui/react';

export default function AppContent({ children, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Box as="div" ml={{ base: '0', md: 20 }} p={5} {...rest}>
      {children}
    </Box>
  );
}
