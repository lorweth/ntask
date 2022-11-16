import React from 'react';
import { Box, Button, Highlight, SlideFade, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Banner({ greeting }) {
  const navigator = useNavigate();

  const onGoToEvents = () => {
    navigator('/events');
  };

  return (
    <Box
      as="div"
      sx={{
        display: 'flex',
        flexDirection: { base: 'column', md: 'row' },
        gap: 1,
      }}
    >
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SlideFade in offsetY="-20rem">
          <Text fontSize="6xl" fontWeight="bold">
            <Highlight query="nTask" styles={{ color: 'purple.500' }}>
              {greeting}
            </Highlight>
          </Text>
          <Button
            colorScheme="twitter"
            size="lg"
            sx={{ borderRadius: '2rem', mt: 3 }}
            onClick={onGoToEvents}
          >
            Quản lý sự kiện
          </Button>
        </SlideFade>
      </Box>
      <Box sx={{ flex: 3 }}>
        <SlideFade in offsetX="50rem">
          <img src="/banner.jpg" alt="banner" style={{ borderRadius: '1rem' }} />
        </SlideFade>
      </Box>
    </Box>
  );
}

export default function Home() {
  return (
    <Box as="div">
      <Banner greeting="Chào mừng bạn đến với ứng dụng nTask 👋" />
    </Box>
  );
}
