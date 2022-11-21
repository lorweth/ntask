import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StorageAPI from 'common/storageAPI';
import { getMockTasks } from './mock-data';
import { EventStatus } from './utils';

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
  createdEvents: [],
  inprogressEvents: [],
  doneEvents: [],
  selectedEvent: null,
  users: [],
  tasks: [],
  selectedTask: null,
  loading: false,
  updateSuccess: null,
  deleteTaskSuccess: null,
  errorMessage: null,
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
    fetch(`${API_URL}/events/user?${new URLSearchParams({ page, size })}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
        }`,
      },
    }).then((res) => res.json())
);

export const getEvent = createAsyncThunk('eventsMgmt/getEvent', async (eventId) =>
  fetch(`${API_URL}/events/${eventId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
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
          StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
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
          StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
        }`,
      },
      body: JSON.stringify({ id: eventID, name, description, startAt, endAt, status, members }),
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
          StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
        }`,
      },
    }).then((res) => res.json())
);

export const fetchTasks = createAsyncThunk(
  'eventsMgmt/fetchTasks',
  async ({ eventID, page, size }) =>
    fetch(`${API_URL}/events/${eventID}/tasks?${new URLSearchParams({ page, size })}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
        }`,
      },
    }).then((res) => res.json())
);

export const fetchTasksForTest = createAsyncThunk(
  'eventsMgmt/fetchTasksForTest',
  async ({ eventID, page, size }) => {
    const res = await getMockTasks({ eventID, page, size });
    return res;
  }
);

export const getTask = createAsyncThunk('eventsMgmt/getTask', async (taskID) =>
  fetch(`${API_URL}/tasks/${taskID}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
      }`,
    },
  }).then((res) => res.json())
);

export const createTask = createAsyncThunk(
  'eventsMgmt/createTask',
  async ({ name, description, startAt, endAt, status, event, assignees }) =>
    fetch(`${API_URL}/tasks`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
        }`,
      },
      body: JSON.stringify({ name, description, startAt, endAt, status, event, assignees }),
    }).then((res) => res.json())
);

export const updateTask = createAsyncThunk(
  'eventsMgmt/updateTask',
  async ({ id, name, description, startAt, endAt, status, event, assignees }) =>
    fetch(`${API_URL}/tasks/${id}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
        }`,
      },
      body: JSON.stringify({
        id,
        name,
        description,
        startAt,
        endAt,
        status,
        event,
        assignees,
      }),
    }).then((res) => res.json())
);

export const deleteTask = createAsyncThunk('eventsMgmt/deleteTask', async (taskID) =>
  fetch(`${API_URL}/tasks/${taskID}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        StorageAPI.local.get('authToken') || StorageAPI.session.get('authToken')
      }`,
    },
  }).then((res) => res.ok)
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
        state.createdEvents = eventList.filter((event) => event.status === EventStatus.CREATED);
        state.inprogressEvents = eventList.filter(
          (event) => event.status === EventStatus.IN_PROGRESS
        );
        state.doneEvents = eventList.filter((event) => event.status === EventStatus.DONE);
        state.loading = false;
        state.updateSuccess = null;
        state.deleteTaskSuccess = null;
      })
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.errorMessage = 'Có lỗi xảy ra';
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
      .addCase(createEvent.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Có lỗi xảy ra';
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedEvent = action.payload;
      })
      .addCase(getEvent.pending, (state) => {
        state.loading = true;
        state.selectedEvent = null;
      })
      .addCase(getEvent.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Có lỗi xảy ra';
      })
      .addCase(updateEvent.fulfilled, (state) => {
        state.loading = false;
        state.updateSuccess = true;
      })
      .addCase(updateEvent.pending, (state) => {
        state.loading = true;
        state.updateSuccess = null;
      })
      .addCase(updateEvent.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Có lỗi xảy ra';
        state.updateSuccess = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        const users = action.payload.content;
        if (users.length > 0) {
          state.users = users;
        } else {
          state.users = [];
          state.errorMessage = 'Không có người dùng nào';
        }
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Có lỗi xảy ra';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload.content;
        state.updateSuccess = null;
      })
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Có lỗi xảy ra';
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTask = action.payload;
      })
      .addCase(getTask.pending, (state) => {
        state.loading = true;
        state.selectedTask = null;
      })
      .addCase(getTask.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Có lỗi xảy ra';
      })
      .addCase(createTask.fulfilled, (state) => {
        state.loading = false;
        state.updateSuccess = true;
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.updateSuccess = null;
      })
      .addCase(createTask.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Có lỗi xảy ra';
      })
      .addCase(updateTask.fulfilled, (state) => {
        state.loading = false;
        state.updateSuccess = true;
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.updateSuccess = null;
      })
      .addCase(updateTask.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Có lỗi xảy ra';
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteTaskSuccess = action.payload;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.deleteTaskSuccess = null;
      })
      .addCase(deleteTask.rejected, (state) => {
        state.loading = false;
        state.deleteTaskSuccess = false;
        state.errorMessage = 'Có lỗi xảy ra';
      });
  },
});

export const { reorder } = eventMgmtSlice.actions;

export default eventMgmtSlice.reducer;
