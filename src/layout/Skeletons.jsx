import React from 'react';
import { Skeleton } from '@chakra-ui/react';

function AppHeader() {
  return <Skeleton height="40px" px={5} py={2} h={20} />;
}

function AppSidebar() {
  return <Skeleton px={5} py={2} h="100vh" w={20} pos="fixed" top={0} left={0} />;
}

function AppFooter() {}

export default { AppHeader, AppSidebar, AppFooter };
