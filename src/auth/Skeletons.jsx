import React from 'react';
import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

function SignInSkeleton() {
  return (
    <Skeleton
      h={40}
      w={60}
      m={5}
      pos="absolute"
      top="40%"
      left="50%"
      transform="translate(-40%, -50%)"
    />
  );
}

function SignUpSkeleton() {
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
