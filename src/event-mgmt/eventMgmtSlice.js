import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StorageAPI from 'common/storageAPI';
import { EventStatuses } from './utils';

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
  createdEvents: [],
  inprogressEvents: [],
  doneEvents: [],
  users: [],
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

/**
 * Fetches all events from the server
 * @param {Object} pagination - pagination information
 * @param {number} pagination.page - page number default 0
 * @param {number} pagination.size - page size default 30
 *
 * @return {Promise} Promise object represents the events
 */
export const fetchEvents = createAsyncThunk(
  'eventsMgmt/fetchEvents',
  async ({ page = 0, size = 30 }) =>
    fetch(`${API_URL}/events?${new URLSearchParams({ page, size })}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          StorageAPI.local.get('authToken') || StorageAPI.local.get('authToken')
        }`,
      },
    }).then((res) => res.json())
);

export const createEvent = createAsyncThunk(
  'eventsMgmt/createEvent',
  async ({ name, description, startAt, endAt }) =>
    fetch(`${API_URL}/events`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          StorageAPI.local.get('authToken') || StorageAPI.local.get('authToken')
        }`,
      },
      body: JSON.stringify({ name, description, startAt, endAt }),
    }).then((res) => res.json())
);

export const updateEvent = createAsyncThunk(
  'eventsMgmt/updateEvent',
  async ({ eventID, name, description, startAt, endAt, status, members }) =>
    fetch(`${API_URL}/events/${eventID}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          StorageAPI.local.get('authToken') || StorageAPI.local.get('authToken')
        }`,
      },
      body: JSON.stringify({ id: eventID, name, description, startAt, endAt, status, members }),
    }).then((res) => res.json())
);

export const getEvent = createAsyncThunk('eventsMgmt/getEvent', async (eventId) =>
  fetch(`${API_URL}/events/${eventId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        StorageAPI.local.get('authToken') || StorageAPI.local.get('authToken')
      }`,
    },
  }).then((res) => res.json())
);

export const fetchUsers = createAsyncThunk(
  'eventsMgmt/fetchUsers',
  async ({ q, page = 0, size = 30 }) =>
    fetch(`${API_URL}/users?${new URLSearchParams({ q, page, size })}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          StorageAPI.local.get('authToken') || StorageAPI.local.get('authToken')
        }`,
      },
    }).then((res) => res.json())
);

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
      .addCase(fetchEvents.fulfilled, (state, action) => {
        const eventList = action.payload.content;
        state.createdEvents = eventList.filter((event) => event.status === EventStatuses.CREATED);
        state.inprogressEvents = eventList.filter(
          (event) => event.status === EventStatuses.IN_PROGRESS
        );
        state.doneEvents = eventList.filter((event) => event.status === EventStatuses.DONE);
        state.loading = false;
        state.updateSuccess = null;
      })
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.errMsg = action.error.message || 'Something went wrong';
        state.loading = false;
      })
      .addCase(createEvent.fulfilled, (state) => {
        state.loading = false;
        state.updateSuccess = true;
      })
      .addCase(createEvent.pending, (state) => {
        state.loading = true;
        state.updateSuccess = null;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false;
        state.errMsg = action.error.message || 'Something went wrong';
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedEvent = action.payload;
      })
      .addCase(getEvent.pending, (state) => {
        state.loading = true;
        state.selectedEvent = null;
      })
      .addCase(getEvent.rejected, (state, action) => {
        state.loading = false;
        state.errMsg = action.error.message || 'Something went wrong';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.content;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.errMsg = action.error.message || 'Something went wrong';
      });
  },
});

export const { reorder } = eventMgmtSlice.actions;

export default eventMgmtSlice.reducer;
