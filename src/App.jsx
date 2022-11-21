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
const Auth = withSuspense(React.lazy(() => import('auth')));
const EventMgmt = withSuspense(React.lazy(() => import('event-mgmt')));
const Chat = withSuspense(React.lazy(() => import('chat')));

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
    title: 'Nhắn tin',
    icon: 'message',
    path: '/chat',
  },
];

export default function App() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const location = useLocation();

  const { haveToken } = useAuth();
  const { userData, loginSuccess, errorMessage } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!haveToken) {
      navigator('/auth/signin');
    }
    if (haveToken && !userData) {
      dispatch(getUserData());
    }
  }, []);

  useEffect(() => {
    if (loginSuccess && !errorMessage) {
      navigator('/');
    }
  }, [loginSuccess, errorMessage]);

  return (
    <StyledContainer>
      {haveToken ? (
        <Box>
          <AppSidebar title="nTask" brandIcon="/logo192.png" items={sidebarItems} pos="fixed" />
          <AppHeader title="nTask" brandIcon="/logo192.png">
            <AppHeaderUser
              username={userData?.login}
              role={userData?.authorities?.[0]}
              avatarLink={`${userData?.avatarUrl}`}
            />
          </AppHeader>
          <AppContent>
            <Routes location={location.state?.backgroundLocation || location}>
              <Route index element={<Home username="Vae" />} />
              <Route path="/home" element={<Home username="Vae" />} />
              <Route path="/events/*" element={<EventMgmt />} />
              <Route path="/chat" element={<Chat />} />
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
