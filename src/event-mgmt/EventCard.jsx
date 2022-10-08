import React from 'react';
import { Avatar, AvatarGroup, Badge, Box, Flex, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function EventCard({ name, imageURL, location, startAt, endAt, tags, members }) {
  const convertTime = (time) => {
    const date = new Date(time);
    return date.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  };

  return (
    <Flex flexDirection="column" p={5} mb={4} shadow="md" borderWidth="1px" borderRadius="md">
      {imageURL && <Image src={imageURL} alt="" />}
      <Text fontWeight="500" fontSize="md">
        {name}
      </Text>
      <Flex alignItems="center" gap={2}>
        <FontAwesomeIcon icon={solid('clock')} color="gray" />
        {convertTime(startAt)} - {convertTime(endAt)}
      </Flex>
      <Flex alignItems="center" gap={2}>
        <FontAwesomeIcon icon={solid('location')} color="gray" />
        {location}
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap={2}>
          {tags &&
            tags.map((tag) => (
              <Badge key={tag} colorScheme="green">
                {tag}
              </Badge>
            ))}
        </Flex>
        <Box>
          {members && (
            <AvatarGroup size="sm" max={2}>
              {members.map((member) => (
                <Avatar size="sm" name={member.username} src="https://bit.ly/ryan-florence" />
              ))}
            </AvatarGroup>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
