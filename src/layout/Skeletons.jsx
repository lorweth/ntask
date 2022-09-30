import React from 'react';
import { Skeleton } from '@chakra-ui/react';

function AppHeaderSkeleton() {
  return <Skeleton height="40px" px={5} py={2} h={20} />;
}

function AppSidebarSkeleton() {
  return <Skeleton px={5} py={2} h="100vh" w={20} pos="fixed" top={0} left={0} />;
}

function AppFooterSkeleton() {}

export default { AppHeaderSkeleton, AppSidebarSkeleton, AppFooterSkeleton };
