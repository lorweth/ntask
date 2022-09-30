import React from 'react';
import { Box, SkeletonText } from '@chakra-ui/react';

export function SignInSkeleton() {
  return (
    <Box
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
}

export function SignUpSkeleton() {
  return (
    <Box
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
}

export default { SignInSkeleton, SignUpSkeleton };
