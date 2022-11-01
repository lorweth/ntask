import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Box, chakra } from '@chakra-ui/react';
import withSuspense from 'components/withSuspense';
import Skeletons from 'layout/Skeletons';
import { AppHeaderUser } from 'layout/AppHeader';
import AppContent from 'layout/AppContent';
import { getUserData } from 'auth/authSlice';
import useAuth from 'auth/useAuth';

const AppHeader = withSuspense(
  React.lazy(() => import('layout/AppHeader')),
  <Skeletons.AppHeader />
);

const AppSidebar = withSuspense(
  React.lazy(() => import('layout/AppSidebar')),
  <Skeletons.AppSidebar />
);

const Home = withSuspense(React.lazy(() => import('home')));
const Counter = withSuspense(React.lazy(() => import('counter')));
const Auth = withSuspense(React.lazy(() => import('auth')));
const DragDrop = withSuspense(React.lazy(() => import('drapdrop')));
const EventMgmt = withSuspense(React.lazy(() => import('event-mgmt')));

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
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const location = useLocation();

  const { haveToken } = useAuth();
  const { userData, loginSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!haveToken) {
      navigator('/auth/signin');
    }
    if (haveToken && !userData) {
      dispatch(getUserData());
    }
  }, []);

  useEffect(() => {
    if (loginSuccess) {
      navigator('/');
    }
  }, [loginSuccess]);

  return (
    <StyledContainer>
      {haveToken ? (
        <Box>
          <AppSidebar title="nTask" brandIcon="/logo192.png" items={sidebarItems} pos="fixed" />
          <AppHeader title="nTask" brandIcon="/logo192.png">
            <AppHeaderUser
              username={userData?.login}
              role={userData?.authorities?.[0]}
              avatarLink={userData?.avatarUrl}
            />
          </AppHeader>
          <AppContent>
            <Routes location={location.state?.backgroundLocation || location}>
              <Route index element={<Home username="Vae" />} />
              <Route path="/home" element={<Home username="Vae" />} />
              <Route path="/drapdrop" element={<DragDrop />} />
              <Route path="/events/*" element={<EventMgmt />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>

            {/* Show modal when backgroundLocation is set */}
            {location.state?.backgroundLocation && (
              <Routes>
                <Route path="/auth/*" element={<Auth />} />
              </Routes>
            )}
          </AppContent>
        </Box>
      ) : (
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      )}
    </StyledContainer>
  );
}
