import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AUTH_TOKEN_KEY } from 'auth/constants';
import StorageAPI from 'common/storageAPI';

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
  loading: false,
  events: [],
  msgList: [],
  errorMessage: null,
};

// Actions

export const fetchChatRooms = createAsyncThunk('chat/fetchEvents', async ({ page, size }) => {
  const authToken = StorageAPI.local.get(AUTH_TOKEN_KEY) || StorageAPI.session.get(AUTH_TOKEN_KEY);
  const resp = await fetch(`${API_URL}/events/user?${new URLSearchParams({ page, size })}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  });
  return resp.json();
});

export const fetchMessage = createAsyncThunk(
  'chat/fetchMessage',
  async ({ eventID, page, size }) => {
    const authToken =
      StorageAPI.local.get(AUTH_TOKEN_KEY) || StorageAPI.session.get(AUTH_TOKEN_KEY);
    const resp = await fetch(
      `${API_URL}/events/${eventID}/messages?${new URLSearchParams({ page, size })}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return resp.json();
  }
);

// Slice
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChatRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.content;
      })
      .addCase(fetchChatRooms.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || 'Something went wrong';
      })
      .addCase(fetchChatRooms.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.msgList = action.payload.content;
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || 'Something went wrong';
      })
      .addCase(fetchMessage.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      });
  },
});

export default chatSlice.reducer;
