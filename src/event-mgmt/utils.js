export const EventStatuses = {
  CREATED: 'CREATED',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

// EventStatusLabels is used to handle onDragEnd event
// must have the same name as state
export const EventStatusLabels = {
  [EventStatuses.CREATED]: 'createdEvents',
  [EventStatuses.IN_PROGRESS]: 'inprogressEvents',
  [EventStatuses.DONE]: 'doneEvents',
};
