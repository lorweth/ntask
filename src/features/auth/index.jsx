import React from 'react';
import withSuspense from 'common/withSuspense';
import { Route, Routes } from 'react-router-dom';

const SignIn = withSuspense(React.lazy(() => import('./signin')));

function Auth() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default Auth;
