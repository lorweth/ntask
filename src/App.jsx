import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { chakra } from '@chakra-ui/react';
import withSuspense from 'common/withSuspense';
import AppSidebar from 'layout/AppSidebar';
import AppContent from 'layout/AppContent';
import AppHeader from 'layout/AppHeader';

const StyledContainer = chakra('div', {
  baseStyle: {
    minHeight: '100vh',
    width: '100vw',
  },
});

const sidebarItems = [
  {
    title: 'Home',
    icon: 'home',
    path: '/',
  },
  {
    title: 'Counter',
    icon: 'calculator',
    path: '/counter',
  },
];

export default function App() {
  const Home = withSuspense(React.lazy(() => import('home')));
  const Counter = withSuspense(React.lazy(() => import('counter')));
  const Auth = withSuspense(React.lazy(() => import('auth')));

  return (
    <StyledContainer>
      <BrowserRouter>
        <AppSidebar title="nTask" brandIcon="logo192.png" items={sidebarItems} pos="fixed" />
        <AppHeader title="nTask" brandIcon="logo192.png" />
        <AppContent>
          <Routes>
            <Route path="/" index element={<Home username="Vae" />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/auth/*" element={<Auth />} />
          </Routes>
        </AppContent>
      </BrowserRouter>
    </StyledContainer>
  );
}
