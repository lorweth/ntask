import React from 'react';
import { Box, Heading, Text, theme } from '@chakra-ui/react';

function ReminderItem({ title, endTime, color = theme.colors.red[400] }) {
  const endAt = new Date(endTime);

  return (
    <Box sx={{ p: 2, m: 2, borderLeft: `.3rem solid ${color}`, boxShadow: 'sm' }}>
      <Heading size="md">{title}</Heading>
      <Text>
        Hạn chót:&nbsp;
        {endAt.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
      </Text>
    </Box>
  );
}

export default function AppReminder({ caption, data }) {
  return (
    <Box
      sx={{
        marginTop: 4,
      }}
    >
      <Heading size="md">{caption}</Heading>
      <Box
        sx={{
          maxHeight: '20rem',
          overflowY: 'auto',
        }}
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme.colors.gray[300],
            borderRadius: '24px',
          },
        }}
      >
        {data.map((item) => (
          <ReminderItem key={item.id} title={item.title} endTime={item.endTime} />
        ))}
      </Box>
    </Box>
  );
}
