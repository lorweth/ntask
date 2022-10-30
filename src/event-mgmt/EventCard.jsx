import React from 'react';
import { Avatar, AvatarGroup, Button, Flex, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EventCard({ eventID, name, imageURL, startAt, endAt, members }) {
  const navigator = useNavigate();
  const location = useLocation();

  const convertTime = (time) => {
    const date = new Date(time);
    return date.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  };

  const handleOnClickDetail = () => {
    navigator(`/events/${eventID}`, { state: { backgroundLocation: location } });
  };

  return (
    <Flex flexDirection="column" p={5} mb={4} shadow="md" borderWidth="1px" borderRadius="md">
      {imageURL && <Image src={imageURL} alt="" />}
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
              <Avatar key={member.login} size="sm" name={member.login} src={member.avatarUrl} />
            ))}
          </AvatarGroup>
        )}
      </Flex>
      <Flex justifyContent="flex-end" mt={3}>
        <Button colorScheme="green" size="sm" onClick={handleOnClickDetail}>
          Chi tiết
        </Button>
      </Flex>
    </Flex>
  );
}
