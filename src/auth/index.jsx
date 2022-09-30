import React from 'react';
import withSuspense from 'common/withSuspense';
import { Route, Routes } from 'react-router-dom';
import { SignInSkeleton } from 'auth/skeletons';

export default function Auth() {
  const SignIn = withSuspense(
    React.lazy(() => import('./signin')),
    SignInSkeleton
  );
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
