export const EventStatuses = {
  INCOMING: 0,
  IN_PROGRESS: 1,
  FINISHED: 2,
};

// EventStatusLabels is used to handle onDragEnd event
// must have the same name as state
export const EventStatusLabels = {
  [EventStatuses.INCOMING]: 'incomingEvents',
  [EventStatuses.IN_PROGRESS]: 'inprogressEvents',
  [EventStatuses.FINISHED]: 'finishedEvents',
};
