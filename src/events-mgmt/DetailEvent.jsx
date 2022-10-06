import React from 'react';
import { Avatar, AvatarGroup, Badge, Box, Flex, Image, Text } from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Detail
 *
 * @param {string} title
 * @param {date} time
 * @param {string} location
 * @param {[Object]} badge {color: string ('red', 'cyan', 'blue', ...); content: string}
 * @param {[Object]} avatar {name: string; url: link img avatar}
 * @param {string} imgUrl link image
 */
export default function Detail({ title, time, location, badge, avatar, imgUrl }) {
  return (
    <Box>
      {imgUrl && <Image width="100%" src={imgUrl} alt="" />}
      <Box fontWeight="500">{title}</Box>
      <Flex alignItems="center" gap="1rem">
        <FontAwesomeIcon icon={solid('calendar-xmark')} />
        <Text>{time}</Text>
      </Flex>
      <Flex alignItems="center" gap="1rem">
        <FontAwesomeIcon icon={solid('location-dot')} />
        <Text>{location}</Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap=".3rem">
          {badge &&
            badge.map((item) => (
              <Badge key={JSON.stringify(item)} colorScheme={item.color}>
                {item.content}
              </Badge>
            ))}
        </Flex>
        <AvatarGroup size="sm" max={3}>
          {avatar &&
            avatar.map((item) => (
              <Avatar key={JSON.stringify(item)} boxSize="2rem" name={item.name} src={item.url} />
            ))}
        </AvatarGroup>
      </Flex>
    </Box>
  );
}
