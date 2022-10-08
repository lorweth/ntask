import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMockEvents } from './mock-data';
import { EventStatuses } from './utils';

const initialState = {
  incomingEvents: [],
  inprogressEvents: [],
  finishedEvents: [],
  selectedEvent: null,
  loading: false,
  updateSuccess: null,
  errMsg: null,
};

const updateOrder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// const updateStatus = (source, destination, droppableSource, droppableDestination) => {
//     const sourceClone = Array.from(source);
//     const destClone = Array.from(destination);
//     const [removed] = sourceClone.splice(droppableSource.index, 1);

//     destClone.splice(droppableDestination.index, 0, removed);

//     const result = {};
//     result[droppableSource.droppableId] = sourceClone;
//     result[droppableDestination.droppableId] = destClone;

//     return result;
// };

export const getEventsForTest = createAsyncThunk('eventsMgmt/getEvents', async () => {
  const response = await getMockEvents();
  return response.data;
});

const eventMgmtSlice = createSlice({
  name: 'eventsMgmt',
  initialState,
  reducers: {
    reorder(state, action) {
      const { sourceIndex, destinationIndex, statusName } = action.payload;
      state[statusName] = updateOrder(state[statusName], sourceIndex, destinationIndex);
    },
    // move(state, action) {
    // const { sourceIndex, destinationIndex, sourceStatusName, destinationStatusName } = action.payload;
    // const result = move(state[sourceStatusName], state[destinationStatusName], sourceIndex, destinationIndex);
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getEventsForTest.fulfilled, (state, action) => {
        const eventList = action.payload;
        state.incomingEvents = eventList.filter((event) => event.status === EventStatuses.INCOMING);
        state.inprogressEvents = eventList.filter(
          (event) => event.status === EventStatuses.IN_PROGRESS
        );
        state.finishedEvents = eventList.filter((event) => event.status === EventStatuses.FINISHED);
        state.loading = false;
      })
      .addCase(getEventsForTest.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEventsForTest.rejected, (state, action) => {
        state.errMsg = action.error.message || 'Something went wrong';
        state.loading = false;
      });
  },
});

export const { reorder } = eventMgmtSlice.actions;

export default eventMgmtSlice.reducer;
