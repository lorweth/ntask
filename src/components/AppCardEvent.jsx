import React from 'react';
import { Badge, Box, Heading, Image, Text, theme, useColorModeValue } from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function AppCardEvent({ linkImage, title, status, time, location, linkDetail }) {
  const linkTextColor = useColorModeValue(theme.colors.gray[600], theme.colors.gray[400]);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1',
        gap: '1rem',
        position: 'relative',
        p: 3,
        rounded: 'md',
        shadow: 'md',
        borderWidth: '1px',
      }}
    >
      <Box sx={{ maxHeight: '120px', maxWidth: '120px' }}>
        <Image sx={{ width: '100%', height: '100%', objectFit: 'contain' }} src={linkImage} />
      </Box>
      <Box sx={{ gap: '1.3', width: '100%' }}>
        <Heading size="md">{title}</Heading>
        <Badge variant="solid" colorScheme="green" rounded="md">
          {status}
        </Badge>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={solid('clock')} style={{ width: '1.3rem' }} />
          <Box>{time}</Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={solid('location-dot')} style={{ width: '1.3rem' }} />
          <Box>{location}</Box>
        </Box>
        {linkDetail && (
          <Box sx={{ textAlign: 'right' }}>
            <Text as={Link} color={linkTextColor} fontSize="sm" to={linkDetail}>
              Xem chi tiết
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}
