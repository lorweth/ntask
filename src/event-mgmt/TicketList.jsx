/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Alert, AlertIcon, Box, Text } from '@chakra-ui/react';

export default function TicketList({ title, data, onClickDetail, onClickDelete, TicketComponent }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '1rem',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text fontSize="xl" fontWeight="500">
          {title}
        </Text>
        <Text>{data?.length || 0}</Text>
      </Box>
      {data && data.length !== 0 ? (
        <Box>
          {data.map((d) => (
            <TicketComponent
              key={d.id}
              onClickDetail={() => onClickDetail(d.id)}
              onClickDelete={() => onClickDelete(d.id)}
              {...d}
            />
          ))}
        </Box>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          Không có ticket nào
        </Alert>
      )}
    </Box>
  );
}
