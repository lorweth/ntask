export const EventStatus = {
  CREATED: 'CREATED',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

// EventStatusLabels is used to handle onDragEnd event
// must have the same name as state
export const EventStatusTitle = {
  [EventStatus.CREATED]: 'createdEvents',
  [EventStatus.IN_PROGRESS]: 'inprogressEvents',
  [EventStatus.DONE]: 'doneEvents',
};

export const EventStatusLabel = {
  [EventStatus.CREATED]: 'Sắp tới',
  [EventStatus.IN_PROGRESS]: 'Đang diễn ra',
  [EventStatus.DONE]: 'Đã kết thúc',
};

export const convertTime = (time) => {
  const date = new Date(time);
  return date.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
};

export const MemberRole = 1;
