import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import withSuspense from 'common/withSuspense';

export default function App() {
  const Home = React.lazy(() => import('features/home'));
  const Counter = React.lazy(() => import('features/counter'));
  const AuthRouter = React.lazy(() => import('features/auth/router'));

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={withSuspense(Home)({ username: 'Vae' })} />
          <Route path="/counter" element={withSuspense(Counter)()} />
          <Route path="/auth/*" element={withSuspense(AuthRouter)()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
