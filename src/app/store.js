import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'rootReducer';
import loggerMiddleware from 'app/logger-middleware';
import notificationMiddleware from './notification-middleware';
 
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.config', 'payload.request', 'error', 'meta.arg'],
      },
    }).concat(loggerMiddleware, notificationMiddleware),
});

const getStore = () => store

export default getStore;
