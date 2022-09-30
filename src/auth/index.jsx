import React from 'react';
import withSuspense from 'components/withSuspense';
import { Route, Routes } from 'react-router-dom';
import Skeleton from 'auth/Skeletons';

export default function Auth() {
  const SignIn = withSuspense(
    React.lazy(() => import('./SignIn')),
    <Skeleton.SignInSkeleton />
  );

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
