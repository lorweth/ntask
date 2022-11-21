/* eslint-disable react/function-component-definition */
/* eslint-disable consistent-return */
import React from 'react';
import { Avatar, AvatarGroup, Button, Flex, Text } from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { convertTime } from './utils';

const filePath = process.env.REACT_APP_FILE_URL;

export const withTicket = (ticketType) => (props) => {
  if (ticketType === 'event') {
    const { name, startAt, endAt, members, onClickDetail } = props;
    return (
      <Ticket
        name={name}
        startAt={startAt}
        endAt={endAt}
        members={members}
        onClickDetail={onClickDetail}
      />
    );
  }
  if (ticketType === 'task') {
    const { name, startAt, endAt, assignees, onClickDetail, onClickDelete } = props;
    return (
      <Ticket
        name={name}
        startAt={startAt}
        endAt={endAt}
        members={assignees}
        onClickDetail={onClickDetail}
        onClickDelete={onClickDelete}
      />
    );
  }
};

export default function Ticket({ name, startAt, endAt, members, onClickDetail, onClickDelete }) {
  return (
    <Flex
      sx={{
        display: 'flex',
        flexDirection: 'column',
        shadow: 'md',
        borderWidth: '1px',
        borderRadius: 'md',
        mb: 4,
        p: 4,
      }}
    >
      <Text fontWeight="500" fontSize="md">
        {name}
      </Text>
      <Flex alignItems="center" gap={2}>
        <FontAwesomeIcon icon={solid('clock')} color="gray" />
        {convertTime(startAt)}
      </Flex>
      <Flex alignItems="center" gap={2}>
        <FontAwesomeIcon icon={solid('hourglass')} color="gray" />
        {convertTime(endAt)}
      </Flex>
      <Flex justifyContent="flex-end">
        {members && (
          <AvatarGroup size="sm" max={2}>
            {members.map((member) => (
              <Avatar
                key={member.login}
                size="sm"
                name={member.login}
                src={member.avatarUrl ? `${filePath}/${member.avatarUrl}` : ''}
              />
            ))}
          </AvatarGroup>
        )}
      </Flex>
      <Flex justifyContent="flex-end" mt={3}>
        <Button colorScheme="teal" size="md" onClick={onClickDetail}>
          <FontAwesomeIcon icon={solid('pen')} />
          &nbsp;Chi tiết
        </Button>
        &nbsp;
        <Button colorScheme="red" size="md" onClick={onClickDelete}>
          <FontAwesomeIcon icon={solid('trash')} />
          &nbsp;Xóa
        </Button>
      </Flex>
    </Flex>
  );
}
