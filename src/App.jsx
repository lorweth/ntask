import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, chakra } from '@chakra-ui/react';
import withSuspense from 'components/withSuspense';
import Skeletons from 'layout/Skeletons';
import AppContent from 'layout/AppContent';

const StyledContainer = chakra('div', {
  baseStyle: {
    minHeight: '100vh',
    width: '100vw',
  },
});

const sidebarItems = [
  {
    title: 'Trang chủ',
    icon: 'home',
    path: '/',
  },
  {
    title: 'Sự kiện',
    icon: 'calendar',
    path: '/events',
  },
  {
    title: 'Công việc',
    icon: 'list-check',
    path: '/tasks',
  },
  {
    title: 'Bản sao',
    icon: 'copy',
    path: '/backups',
  },
];

export default function App() {
  const AppHeader = withSuspense(
    React.lazy(() => import('layout/AppHeader')),
    <Skeletons.AppHeaderSkeleton />
  );

  const AppSidebar = withSuspense(
    React.lazy(() => import('layout/AppSidebar')),
    <Skeletons.AppSidebarSkeleton />
  );

  const Home = withSuspense(React.lazy(() => import('home')));
  const Counter = withSuspense(React.lazy(() => import('counter')));
  const Auth = withSuspense(React.lazy(() => import('auth')));
  const DragDrop = withSuspense(React.lazy(() => import('drapdrop')));
  const EventMgmt = withSuspense(React.lazy(() => import('event-mgmt')));

  return (
    <StyledContainer>
      <BrowserRouter>
        <Box>
          <AppSidebar title="nTask" brandIcon="/logo192.png" items={sidebarItems} pos="fixed" />
          <AppHeader title="nTask" brandIcon="/logo192.png" />
          <AppContent>
            <Routes>
              <Route index element={<Home username="Vae" />} />
              <Route path="/home" element={<Home username="Vae" />} />
              <Route path="/drapdrop" element={<DragDrop />} />
              <Route path="/events" element={<EventMgmt />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/auth/*" element={<Auth />} />
            </Routes>
          </AppContent>
        </Box>
      </BrowserRouter>
    </StyledContainer>
  );
}
