import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { chakra } from '@chakra-ui/react';
import withSuspense from 'common/withSuspense';

const StyledContainer = chakra('div', {
  baseStyle: {
    minHeight: 'full',
    width: 'full',
  },
});

export default function App() {
  const Home = withSuspense(React.lazy(() => import('features/home')));
  const Counter = withSuspense(React.lazy(() => import('features/counter')));
  const Auth = withSuspense(React.lazy(() => import('features/auth')));

  return (
    <StyledContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home username="Vae" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
}
