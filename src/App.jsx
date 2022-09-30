import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { chakra, Flex } from '@chakra-ui/react';
import withSuspense from 'common/withSuspense';
import Sidebar from 'layout/Sidebar';

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
  const Home = withSuspense(React.lazy(() => import('features/home')));
  const Counter = withSuspense(React.lazy(() => import('features/counter')));
  const Auth = withSuspense(React.lazy(() => import('features/auth')));

  return (
    <StyledContainer>
      <BrowserRouter>
        <Flex>
          <Sidebar title="nTask" brandIcon="logo192.png" items={sidebarItems} pos="fixed" />
          <Routes>
            <Route path="/" index element={<Home username="Vae" />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/auth/*" element={<Auth />} />
          </Routes>
        </Flex>
      </BrowserRouter>
    </StyledContainer>
  );
}
