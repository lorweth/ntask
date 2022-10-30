import { EventStatuses } from './utils';

const eventData = [
  {
    id: 1,
    name: 'Sự kiện 1',
    description: 'Mô tả sự kiện 1',
    imageURL: 'https://picsum.photos/200/300',
    status: EventStatuses.CREATED,
    start_at: Date.parse('2022-11-20T23:00:00'),
    end_at: Date.parse('2022-11-20T23:00:00'),
    tags: ['tag1', 'tag2'],
    members: [
      { username: 'name 1' },
      { username: 'name 2' },
      { username: 'name 3' },
      { username: 'name 4' },
    ],
  },
  {
    id: 2,
    name: 'Sự kiện 2',
    description: 'Mô tả sự kiện 2',
    status: EventStatuses.IN_PROGRESS,
    start_at: Date.parse('2022-11-20T23:00:00'),
    end_at: Date.parse('2022-11-20T23:00:00'),
  },
  {
    id: 3,
    name: 'Sự kiện 3',
    description: 'Mô tả sự kiện 3',
    status: EventStatuses.DONE,
    start_at: Date.parse('2022-11-20T23:00:00'),
    end_at: Date.parse('2022-11-20T23:00:00'),
  },
  {
    id: 4,
    name: 'Sự kiện 4',
    description: 'Mô tả sự kiện 4',
    status: EventStatuses.IN_PROGRESS,
    start_at: Date.parse('2022-11-20T23:00:00'),
    end_at: Date.parse('2022-11-20T23:00:00'),
  },
  {
    id: 5,
    name: 'Sự kiện 5',
    description: 'Mô tả sự kiện 5',
    status: EventStatuses.CREATED,
    start_at: Date.parse('2022-11-20T23:00:00'),
    end_at: Date.parse('2022-11-20T23:00:00'),
  },
];

export const getMockEvents = () =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(() => resolve({ data: eventData }), 500));

export default { eventData };
