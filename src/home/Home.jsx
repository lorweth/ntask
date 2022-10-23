import React, { useState } from 'react';
import { Box, Checkbox, Flex, Heading, Link, Text, theme } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import AppTable from 'components/AppTable';
import AppTagEvent from 'components/AppTagEvent';
import AppCardEvent from 'components/AppCardEvent';
import AppCalendar from 'components/AppCalendar';
import AppReminder from 'components/AppReminder';
import mockData from './mock-data';
import 'react-calendar/dist/Calendar.css';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content',
    render: ({ content }) => (
      <Flex gap={2} sx={{ justifyContent: 'right', width: '100%' }}>
        <FontAwesomeIcon color={theme.colors.blackAlpha[500]} icon={solid('paperclip')} />
        <Text>{content.link}</Text>
        <FontAwesomeIcon color={theme.colors.blackAlpha[500]} icon={solid('square-check')} />
        <Text>{`${content.completedJob}/${content.totalJob}`}</Text>
      </Flex>
    ),
  },
  {
    title: 'Checked',
    dataIndex: 'checked',
    key: 'checked',
    render: ({ checked }) => (
      <Box sx={{ textAlign: 'right' }}>
        <Checkbox isChecked={checked} colorScheme="green" />
      </Box>
    ),
  },
];

export default function Home() {
  const [dataSource] = useState(mockData.tableData);
  const [tagEvents] = useState(mockData.tagData);
  const [cardEvents] = useState(mockData.cardData);
  const [reminders] = useState(mockData.reminders);

  return (
    <div>
      <Heading color="green">Trang chủ</Heading>
      <Box sx={{ display: 'flex', justifyContent: 'stretch', marginTop: '1rem', gap: '1rem' }}>
        <Box sx={{ flex: '1' }}>
          <Box gap="4" sx={{ display: 'flex' }}>
            {tagEvents.map((tagEvent) => (
              <AppTagEvent
                key={`tag_event_${tagEvent.id}`}
                number={tagEvent.number}
                title={tagEvent.title}
                status={tagEvent.status}
              />
            ))}
          </Box>
          <Box sx={{ textAlign: 'right', mt: '.5rem' }}>
            <Text as={Link} to="/">
              Xem tất cả
            </Text>
          </Box>
          <Heading p={2} size="lg">
            Sự kiện
          </Heading>
          <Box gap="4" sx={{ display: 'flex' }}>
            {cardEvents.map((cardEvent) => (
              <AppCardEvent
                key={cardEvent.title}
                title={cardEvent.title}
                linkImage={cardEvent.linkImage}
                status={cardEvent.status}
                time={cardEvent.time}
                location={cardEvent.location}
                linkDetail={cardEvent.linkDetail}
              />
            ))}
          </Box>
          <Box sx={{ textAlign: 'right', mt: '.5rem' }}>
            <Text as={Link} to="/">
              Xem tất cả
            </Text>
          </Box>
          <Heading p={2} size="lg">
            Công việc
          </Heading>
          <Box>
            <AppTable hasHeader={false} caption="" dataSource={dataSource} columns={columns} />
          </Box>
        </Box>
        <Box p={3} rounded="md" shadow="md" borderWidth="1px" maxW="320px">
          <AppCalendar caption="Lịch" />
          <AppReminder caption="Lời nhắc" data={reminders} />
        </Box>
      </Box>
    </div>
  );
}
