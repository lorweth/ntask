import React from 'react';
import withSuspense from 'components/withSuspense';
import { Route, Routes } from 'react-router-dom';
import Skeleton from 'auth/Skeletons';

const SignIn = withSuspense(
  React.lazy(() => import('./SignIn')),
  <Skeleton.SignInSkeleton />
);

const SignUp = withSuspense(
  React.lazy(() => import('./SignUp')),
  <Skeleton.SignInSkeleton />
);

const SignOut = withSuspense(
  React.lazy(() => import('./SignOut')),
  <Skeleton.SignInSkeleton />
);

export default function Auth() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signout" element={<SignOut />} />
    </Routes>
  );
}
