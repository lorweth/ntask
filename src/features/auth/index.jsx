import React from 'react';
import { Route, Routes } from 'react-router-dom';

const SignIn = React.lazy(() => import('./signin'));

function Auth() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default Auth;
